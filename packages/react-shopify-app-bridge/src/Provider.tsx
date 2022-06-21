import { AnyClient } from "@gadgetinc/api-client-core";
import { Provider as GadgetUrqlProvider } from "@gadgetinc/react";
import { Provider as AppBridgeProvider } from "@shopify/app-bridge-react";
import { AppBridgeContext } from "@shopify/app-bridge-react/context";
import { getSessionToken } from "@shopify/app-bridge-utils";
import { Redirect } from "@shopify/app-bridge/actions";
import { isUndefined } from "lodash";
import React, { memo, useContext, useEffect, useMemo, useState } from "react";
import { useQuery } from "urql";
import { GadgetAuthContext, GadgetAuthContextValue } from "./index";

export enum AppType {
  Standalone,
  Embedded,
}

/** Internal props used to create the right structure of providers */
type GadgetProviderProps = {
  children: JSX.Element | JSX.Element[];
  forceRedirect: boolean;
  isEmbedded: boolean;
  gadgetAppUrl: string;
  originalQueryParams?: URLSearchParams;
  api: AnyClient;
  isRootFrameRequest: boolean;
};

const GetCurrentSessionQuery = `
  query GetSessionForShopifyApp {
    currentSession {
      id
      shop {
        id
      }
    }
    shopifyConnection {
      requiresReauthentication
    }
  }
`;

// inner component that exists in order to ask for the app bridge
const InnerGadgetProvider = memo(
  ({ children, forceRedirect, isEmbedded, gadgetAppUrl, originalQueryParams, api, isRootFrameRequest }: GadgetProviderProps) => {
    const appBridge = useContext(AppBridgeContext);

    const [context, setContext] = useState<GadgetAuthContextValue>({
      isAuthenticated: false,
      isEmbedded: false,
      canAuth: false,
      loading: false,
      appBridge,
      isRootFrameRequest: false,
    });

    useEffect(() => {
      if (!appBridge) return;
      // setup the api client to always query using the custom shopify auth implementation
      api.connection.setAuthenticationMode({
        custom: {
          processFetch: async (_input, init) => {
            const headers = new Headers(init.headers);
            headers.append("Authorization", `ShopifySessionToken ${await getSessionToken(appBridge)}`);
            init.headers ??= {};
            headers.forEach(function (value, key) {
              (init.headers as Record<string, string>)[key] = value;
            });
          },
          processTransactionConnectionParams(_params) {
            throw new Error("client side transactions yet not supported in Shopify Gadget provider");
          },
        },
      });
    }, [api.connection, appBridge]);

    let runningShopifyAuth = false;
    let isAuthenticated = false;

    // always run one session fetch to the gadget backend on boot to discover if this app is installed
    const [{ data: currentSessionData, fetching: sessionFetching, error }] = useQuery({
      query: GetCurrentSessionQuery,
    });

    if (currentSessionData) {
      runningShopifyAuth = currentSessionData.shopifyConnection?.requiresReauthentication;

      if (currentSessionData.currentSession) {
        if (!currentSessionData.currentSession.shop) {
          runningShopifyAuth = true;
        } else {
          // we may be missing scopes, if so, we aren't fully authenticated
          isAuthenticated = !currentSessionData.shopifyConnection?.requiresReauthentication;
        }
      }
    }

    // redirect to Gadget to initiate the oauth process if we need to.
    useEffect(() => {
      if (!runningShopifyAuth || isRootFrameRequest) return;
      // redirect to gadget app root pages url with oauth params
      const redirectURL = new URL("/api/connections/auth/shopify", gadgetAppUrl);
      redirectURL.search = originalQueryParams?.toString() ?? "";
      const redirectURLWithOAuthParams = redirectURL.toString();

      if (isEmbedded && appBridge) {
        Redirect.create(appBridge).dispatch(Redirect.Action.REMOTE, redirectURLWithOAuthParams);
      } else {
        window.location.assign(redirectURLWithOAuthParams);
      }
    }, [appBridge, gadgetAppUrl, isEmbedded, isRootFrameRequest, originalQueryParams, runningShopifyAuth]);

    const loading = (forceRedirect || runningShopifyAuth || sessionFetching) && !isRootFrameRequest;

    useEffect(() => {
      return setContext({
        isAuthenticated,
        isEmbedded,
        canAuth: !!appBridge,
        loading,
        appBridge,
        error,
        isRootFrameRequest,
      });
    }, [loading, isEmbedded, appBridge, isAuthenticated, error, isRootFrameRequest]);

    return <GadgetAuthContext.Provider value={context}>{children}</GadgetAuthContext.Provider>;
  }
);

type ProviderLocation = {
  query?: URLSearchParams;
  asPath?: string;
};

export const Provider = ({
  type,
  children,
  shopifyApiKey,
  api,
}: {
  type?: AppType;
  children: JSX.Element | JSX.Element[];
  shopifyApiKey: string;
  api: AnyClient;
}) => {
  const [location, setLocation] = useState<ProviderLocation | null>(null);
  const isReady = !!location;
  const { query } = location ?? {};
  const host = query?.get("host") ?? undefined;

  // We store the original query params as that is what shopify uses to generate the HMAC in embedded apps
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const originalQueryParams = useMemo(() => query, [isReady]);

  // We need to be sure we're in the destination context when running any of the auth steps.
  // Some browsers have strict policies that prevent sharing local/session storage between embedded & non-embedded contexts.
  //
  // We make an exception for install requests since in that scenario there's no embedded app that we can redirect to.
  // On a browser that this policy enabled, we'll just re-run the auth process after redirecting to the embedded app.
  const isInstallRequest = query?.has("hmac") && query?.has("shop");
  const isEmbedded = typeof window !== "undefined" ? window.top !== window.self : false;
  const inDestinationContext = isEmbedded == ((type ?? AppType.Embedded) == AppType.Embedded);

  // We need to inform developers if the component is being rendered in a non embedded context when it should be AND we're not in an interstitial installation state. This is determined for now by the absence of both hmac and shop. This will generally occur when someone visits the app url while not in the Shopify admin.
  const isRootFrameRequest = !query?.has("hmac") && !query?.has("shop") && (type ?? AppType.Embedded) == AppType.Embedded;

  const forceRedirect = isReady && !isUndefined(host) && !inDestinationContext;

  const gadgetAppUrl = new URL(api.connection.options.endpoint).origin;

  useEffect(() => {
    setLocation({
      asPath: `${window.location.pathname}${window.location.search}`,
      query: new URLSearchParams(window.location.search),
    });
  }, []);

  let app = (
    <GadgetUrqlProvider value={api.connection.currentClient}>
      <InnerGadgetProvider
        forceRedirect={forceRedirect}
        isEmbedded={isEmbedded}
        gadgetAppUrl={gadgetAppUrl}
        api={api}
        originalQueryParams={originalQueryParams}
        isRootFrameRequest={isRootFrameRequest}
      >
        {children}
      </InnerGadgetProvider>
    </GadgetUrqlProvider>
  );

  // app bridge provider seems to prevent urql from sending graphql requests when it cannot communicate using postMessage when not embedded so we must skip using the app bridge provider on the very first redirect from shopify
  if (host && (!isInstallRequest || inDestinationContext)) {
    app = (
      <AppBridgeProvider
        config={{
          apiKey: shopifyApiKey,
          host,
          forceRedirect,
        }}
      >
        {app}
      </AppBridgeProvider>
    );
  }

  return app;
};
