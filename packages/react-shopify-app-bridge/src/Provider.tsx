import { AnyClient, BrowserSessionStorageType } from "@gadgetinc/api-client-core";
import { Provider as GadgetUrqlProvider } from "@gadgetinc/react";
import { AppBridgeState, ClientApplication } from "@shopify/app-bridge";
import { Provider as AppBrideProvider, useAppBridge } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import assert from "assert";
import { isArray, isString, isUndefined } from "lodash";
import React, { memo, useEffect, useMemo, useState } from "react";
import { useRender } from "./hooks";
import {
  GadgetAuthContext,
  GadgetContext,
  generateCodeChallenge,
  generateCodeVerifier,
  getGadgetAccessToken,
  useLocalStorage,
  useSessionStorage,
} from "./index";
import { getTokenKey } from "./utils";

export enum AppType {
  Standalone,
  Embedded,
}

type GadgetProviderProps = {
  children: JSX.Element | JSX.Element[];
  appBridge?: ClientApplication<AppBridgeState>;
  forceRedirect: boolean;
  runningShopifyAuth: boolean;
  runningGadgetAuth: boolean;
  setAuth: (value: string) => void;
  isEmbedded: boolean;
  gadgetAppUrl: string;
  token?: string;
  originalQueryParams?: URLSearchParams;
};

const gadgetAuthParams = ["authorizationCode"];

const InnerGadgetProvider = memo(
  ({
    children,
    appBridge,
    forceRedirect,
    runningShopifyAuth,
    runningGadgetAuth,
    setAuth,
    isEmbedded,
    gadgetAppUrl,
    token,
    originalQueryParams,
  }: GadgetProviderProps) => {
    const [context, setContext] = useState<GadgetContext>({
      isAuthenticated: false,
      isEmbedded: false,
      canAuth: false,
      loading: false,
      appBridge,
    });

    useEffect(() => {
      if (!runningShopifyAuth) return;

      // redirect to gadget app root pages url with oauth params
      const redirectURL = new URL(gadgetAppUrl);
      const searchParams = new URLSearchParams(originalQueryParams?.toString());

      // generate verifier and challenge
      const codeVerifier = generateCodeVerifier();
      const codeChallenge = generateCodeChallenge(codeVerifier);
      setAuth(JSON.stringify({ codeVerifier, codeChallenge }));
      searchParams.set("codeChallenge", codeChallenge);
      searchParams.set("mode", "offline");
      redirectURL.search = searchParams.toString();
      const redirectURLWithOAuthParams = redirectURL.toString();

      if (isEmbedded) {
        Redirect.create(appBridge!).dispatch(Redirect.Action.REMOTE, redirectURLWithOAuthParams);
      } else {
        window.location.assign(redirectURLWithOAuthParams);
      }
    }, [runningShopifyAuth]);

    const loading = forceRedirect || runningShopifyAuth || runningGadgetAuth;
    useEffect(() => {
      return setContext({
        isAuthenticated: !!token,
        isEmbedded,
        canAuth: !!appBridge,
        loading,
        appBridge,
      });
    }, [loading, isEmbedded, appBridge, token]);

    return <GadgetAuthContext.Provider value={context}>{children}</GadgetAuthContext.Provider>;
  }
);

// this component is necessary so that we can conditionally render the InnerGadgetProvider with an app bridge
const AppBridgeWrapper = ({ children, ...rest }: GadgetProviderProps) => {
  const appBridge = useAppBridge();
  return (
    <InnerGadgetProvider appBridge={appBridge} {...rest}>
      {children}
    </InnerGadgetProvider>
  );
};

const stripUrlAuthParams = (url: string, basePath?: string): URL => {
  let baseUrl: string = basePath || "";

  if (url.startsWith("/") && !baseUrl && typeof window !== "undefined") {
    baseUrl = `${window.location.protocol}//${window.location.hostname}`;
  }

  const rv = new URL(url, baseUrl);

  for (const param of gadgetAuthParams) {
    rv.searchParams.delete(param);
  }

  return rv;
};

type ProviderLocation = {
  query?: URLSearchParams;
  asPath?: string;
};
export const Provider = <T extends AnyClient>({
  type,
  children,
  shopifyApiKey,
  api,
  reauth,
}: {
  type?: AppType;
  children: JSX.Element | JSX.Element[];
  shopifyApiKey: string;
  api: T;
  reauth?: boolean;
}) => {
  const [location, setLocation] = useState<ProviderLocation | null>(null);
  const isReady = !!location;
  const { query, asPath } = location ?? {};
  const host = query?.get("host") ?? undefined;
  const authorizationCode = query?.get("authorizationCode") ?? undefined;
  const [auth, setAuthValue, deleteAuthValue] = useSessionStorage("gadgetAuth", null);
  const [shopifySessions, setShopifySessions] = useLocalStorage("shopifySessions", {});
  const render = useRender();
  // We store the original query params as that is what shopify uses to generate the HMAC in embedded apps
  const originalQueryParams = useMemo(() => query, [isReady]);

  assert(!isArray(host));
  assert(!isArray(authorizationCode));

  // We need to be sure we're in the destination context when running any of the auth steps.
  // Some browsers have strict policies that prevent sharing local/session storage between embedded & non-embedded contexts.
  //
  // We make an exception for install requests since in that scenario there's no embedded app that we can redirect to.
  // On a browser that this policy enabled, we'll just re-run the auth process after redirecting to the embedded app.
  const isInstallRequest = query?.has("hmac") && query?.has("shop");
  const isEmbedded = typeof window !== "undefined" ? window.top !== window.self : false;
  const inDestinationContext = isInstallRequest || isEmbedded == ((type ?? AppType.Embedded) == AppType.Embedded);

  const forceRedirect = isReady && !isUndefined(host) && !inDestinationContext;
  const canAuth = isReady && !isUndefined(host) && inDestinationContext;
  // We use isReady to force run this logic only on browsers and not server side
  const token = useMemo(
    () => (canAuth ? shopifySessions[getTokenKey(api.connection.options.endpoint, host)] : undefined),
    [isReady, shopifySessions]
  );
  const runningGadgetAuth = canAuth && !isUndefined(authorizationCode) && auth != null;
  const runningShopifyAuth = canAuth && !runningGadgetAuth && isUndefined(token);
  const gadgetAppUrl = new URL(api.connection.options.endpoint).origin;

  const createCustomFetch = (shouldReauth: boolean) => {
    return async (input: RequestInfo, init?: RequestInit) => {
      const result = await fetch(input, init);
      if (shouldReauth && [401, 403].includes(result.status)) {
        if (host) {
          delete shopifySessions[host.toString()];
          setShopifySessions({ ...shopifySessions });
        }
      }

      return result;
    };
  };

  useEffect(() => {
    setLocation({
      asPath: `${window.location.pathname}${window.location.search}`,
      query: new URLSearchParams(window.location.search),
    });
  }, []);

  useEffect(() => {
    if (!runningGadgetAuth) return;

    (async () => {
      const { codeVerifier } = JSON.parse(auth);
      assert(isString(codeVerifier));
      const token = await getGadgetAccessToken(gadgetAppUrl, codeVerifier, authorizationCode);
      setShopifySessions({ ...shopifySessions, [getTokenKey(api.connection.options.endpoint, host)]: token });
    })()
      .catch((e) => {
        // couldn't successfully run our exchange so the code verifier/challenge is not valid
        // TODO: Some better error handling
        console.error(e);
      })
      .finally(() => {
        // remove any gadget related auth params from local storage & the URL
        deleteAuthValue();
        if (asPath) {
          const replaceWith = stripUrlAuthParams(asPath);
          void window.location.replace(replaceWith);
        }
      });
  }, [runningGadgetAuth]);

  // TODO: support passing custom sessionStorageKey to Client so we don't have to manage session storage ourself
  useEffect(() => {
    // set client
    if (token) {
      api.connection.fetchImplementation = createCustomFetch(reauth ?? false);
      api.connection.setAuthenticationMode({
        browserSession: {
          storageType: BrowserSessionStorageType.Temporary,
          initialToken: token,
        },
      });
      // force a re-render since we've set a new reference to fetchImplementation and authentication mode
      render();
    }
  }, [token, reauth]);

  const gadgetProvider = host ? (
    <AppBrideProvider
      config={{
        apiKey: shopifyApiKey,
        host,
        forceRedirect,
      }}
    >
      <AppBridgeWrapper
        forceRedirect={forceRedirect}
        runningShopifyAuth={runningShopifyAuth}
        runningGadgetAuth={runningGadgetAuth}
        setAuth={setAuthValue}
        isEmbedded={isEmbedded}
        gadgetAppUrl={gadgetAppUrl}
        token={token}
        originalQueryParams={originalQueryParams}
      >
        {children}
      </AppBridgeWrapper>
    </AppBrideProvider>
  ) : (
    <InnerGadgetProvider
      forceRedirect={forceRedirect}
      runningShopifyAuth={runningShopifyAuth}
      runningGadgetAuth={runningGadgetAuth}
      setAuth={setAuthValue}
      isEmbedded={isEmbedded}
      gadgetAppUrl={gadgetAppUrl}
      token={token}
      originalQueryParams={originalQueryParams}
    >
      {children}
    </InnerGadgetProvider>
  );

  const urqlWrapper = api ? <GadgetUrqlProvider value={api.connection.currentClient}>{gadgetProvider}</GadgetUrqlProvider> : gadgetProvider;

  return urqlWrapper;
};
