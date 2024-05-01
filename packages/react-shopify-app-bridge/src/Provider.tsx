import type { AnyClient } from "@gadgetinc/api-client-core";
import { Provider as GadgetUrqlProvider, useMutation } from "@gadgetinc/react";
import { useAppBridge } from "@shopify/app-bridge-react";
import type { ReactNode } from "react";
import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import type { GadgetAuthContextValue } from "./index.js";
import { GadgetAuthContext } from "./index.js";

export enum AppType {
  Standalone,
  Embedded,
}

/** Internal props used to create the right structure of providers */
type GadgetProviderProps = {
  children: ReactNode;
  gadgetAppUrl: string;
  originalQueryParams?: URLSearchParams;
  api: AnyClient;
  type: AppType;
  host: string | undefined;
  isReady: boolean;
  isRootFrameRequest: boolean;
};

const FetchOrInstallShopMutation = `
  mutation ShopifyFetchOrInstallShop($shopifySessionToken: String!) {
    shopifyConnection {
      fetchOrInstallShop(shopifySessionToken: $shopifySessionToken) {
        isAuthenticated
        redirectToOauth
        missingScopes
      }
    }
  }
`;

// inner component that exists in order to ask for the app bridge
const InnerGadgetProvider = memo(
  ({ children, gadgetAppUrl, originalQueryParams, api, type, host, isReady, isRootFrameRequest }: GadgetProviderProps) => {
    const appBridge = useAppBridge();
    // We need to be sure we're in the destination context when running any of the auth steps.
    // Some browsers have strict policies that prevent sharing local/session storage between embedded & non-embedded contexts.
    //
    // We make an exception for install requests since in that scenario there's no embedded app that we can redirect to.
    // On a browser that this policy enabled, we'll just re-run the auth process after redirecting to the embedded app.
    const isInstallRequest = originalQueryParams?.has("hmac") && originalQueryParams?.has("shop");
    const isEmbedded = appBridge.environment.embedded || appBridge.environment.mobile;
    const inDestinationContext = isEmbedded && type === AppType.Embedded;
    const forceRedirect = isReady && typeof host !== "undefined" && !inDestinationContext;
    const [context, setContext] = useState<GadgetAuthContextValue>({
      isAuthenticated: false,
      isEmbedded: false,
      canAuth: false,
      loading: true,
      appBridge,
      isRootFrameRequest: false,
    });

    const [idTokenError, setIdTokenError] = useState<Error | undefined>();

    useEffect(() => {
      if (!appBridge) {
        console.debug("[gadget-rsab] no app bridge, skipping client auth setup");
        return;
      }

      // setup the api client to always query using the custom shopify auth implementation
      api.connection.setAuthenticationMode({
        custom: {
          async processFetch(_input, init) {
            const headers = new Headers(init.headers);
            const idToken = await appBridge.idToken();
            headers.append("Authorization", `ShopifySessionToken ${idToken}`);
            init.headers ??= {};
            headers.forEach(function (value, key) {
              (init.headers as Record<string, string>)[key] = value;
            });
          },
          async processTransactionConnectionParams(params) {
            const idToken = await appBridge.idToken();
            params.auth.shopifySessionToken = idToken;
          },
        },
      });

      console.debug("[gadget-rsab] set up client auth for session tokens");
    }, [api.connection, appBridge]);

    let redirectToOauth = false;
    let isAuthenticated = false;
    let missingScopes: string[] = useMemo(() => [], []);
    const hasFetchedOrInstalledShop = useRef(false);

    const [{ data: fetchOrInstallShopData, fetching: fetchingOrInstallingShop, error: fetchingOrInstallingShopError }, fetchOrInstallShop] =
      useMutation<{
        shopifyConnection: { fetchOrInstallShop: { redirectToOauth: boolean; isAuthenticated: boolean; missingScopes: string[] } };
      }>(FetchOrInstallShopMutation);

    if (fetchOrInstallShopData) {
      console.debug({ fetchOrInstallShopData }, "[gadget-rsab] fetched or installed shop data");
      redirectToOauth = fetchOrInstallShopData.shopifyConnection.fetchOrInstallShop.redirectToOauth;
      isAuthenticated = fetchOrInstallShopData.shopifyConnection.fetchOrInstallShop.isAuthenticated;
      missingScopes = fetchOrInstallShopData.shopifyConnection.fetchOrInstallShop.missingScopes ?? [];
    }

    // always run one fetch to the gadget backend on boot to discover if this app is installed
    useEffect(() => {
      if (hasFetchedOrInstalledShop.current) return;
      if (!appBridge) return;

      hasFetchedOrInstalledShop.current = true;

      console.debug("[gadget-rsab] fetching or installing shop");
      appBridge
        .idToken()
        .then((idToken) => {
          fetchOrInstallShop({ shopifySessionToken: idToken }).catch((err) => {
            console.error({ err }, "[gadget-rsab] error fetching or installing shop");
          });
        })
        .catch(setIdTokenError);
    }, [appBridge, fetchOrInstallShop]);

    // redirect to Gadget to initiate the oauth process if we need to.
    useEffect(() => {
      if (!redirectToOauth || isRootFrameRequest) return;
      // redirect to gadget app root pages url with oauth params
      const redirectURL = new URL("/api/connections/auth/shopify", gadgetAppUrl);
      redirectURL.search = originalQueryParams?.toString() ?? "";
      const redirectURLWithOAuthParams = redirectURL.toString();

      console.debug("[gadget-rsab] redirecting to gadget to initiate oauth process", {
        appType: type,
        isInstallRequest,
        isEmbedded,
        redirectURL: redirectURLWithOAuthParams,
        gadgetAppUrl,
      });

      open(redirectURLWithOAuthParams, "_top");
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gadgetAppUrl, isRootFrameRequest, originalQueryParams, redirectToOauth]);

    const loading = (forceRedirect || redirectToOauth || fetchingOrInstallingShop) && !isRootFrameRequest;

    useEffect(() => {
      const context = {
        isAuthenticated,
        isEmbedded,
        canAuth: !!appBridge,
        loading,
        appBridge,
        error: fetchingOrInstallingShopError || idTokenError,
        isRootFrameRequest,
      };

      console.debug("[gadget-rsab] context changed", context);

      return setContext(context);
    }, [loading, isEmbedded, appBridge, isAuthenticated, fetchingOrInstallingShopError, idTokenError, isRootFrameRequest]);

    useEffect(() => {
      if (missingScopes.length > 0 && !redirectToOauth) {
        const event = new CustomEvent("gadget:devharness:rsab.shopifyManagedInstallation.missingScopes", {
          detail: {
            missingScopes,
          },
        });
        globalThis.dispatchEvent(event);
      }
    }, [redirectToOauth, missingScopes]);

    return <GadgetAuthContext.Provider value={context}>{children}</GadgetAuthContext.Provider>;
  }
);

const StandaloneInnerProvider = ({
  isRootFrameRequest,
  children,
  query,
  gadgetAppUrl,
  type,
}: {
  isRootFrameRequest: boolean;
  children: ReactNode;
  query?: URLSearchParams;
  gadgetAppUrl: string;
  type: AppType;
}) => {
  // we still need to run the oauth process if we're in an install context so we should redirect to gadget
  const isInstallRequest = query?.has("hmac") && query?.has("shop");
  const runningShopifyAuth = isInstallRequest;

  // redirect to Gadget to initiate the oauth process if we need to.
  useEffect(() => {
    if (!runningShopifyAuth || isRootFrameRequest) return;
    // redirect to gadget app root pages url with oauth params
    const redirectURL = new URL("/api/connections/auth/shopify", gadgetAppUrl);
    redirectURL.search = query?.toString() ?? "";
    const redirectURLWithOAuthParams = redirectURL.toString();

    console.debug("[gadget-rsab] redirecting to gadget to initiate oauth process in standalone mode or missing app bridge global", {
      appType: type,
      isInstallRequest,
      redirectURL: redirectURLWithOAuthParams,
      gadgetAppUrl,
    });

    window.location.assign(redirectURLWithOAuthParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gadgetAppUrl, isRootFrameRequest, query, runningShopifyAuth]);

  return (
    <GadgetAuthContext.Provider
      value={{
        isAuthenticated: false,
        isEmbedded: false,
        canAuth: false,
        loading: false,
        appBridge: null,
        isRootFrameRequest: isRootFrameRequest,
      }}
    >
      {children}
    </GadgetAuthContext.Provider>
  );
};

type ProviderLocation = {
  query?: URLSearchParams;
  asPath?: string;
};

export const Provider = ({ type, children, api }: { type?: AppType; children: ReactNode; shopifyApiKey: string; api: AnyClient }) => {
  // if we haven't properly set up the shopify global then skip anything that requires app bridge
  const shopifyGlobalDefined = !!(globalThis && globalThis.shopify);
  const [location, setLocation] = useState<ProviderLocation | null>(null);
  const isReady = !!location;
  const { query } = location ?? {};
  const host = query?.get("host") ?? undefined;
  const coalescedType = type ?? AppType.Embedded;

  // We store the original query params as that is what shopify uses to generate the HMAC in embedded apps
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const originalQueryParams = useMemo(() => query, [isReady]);
  // We need to inform developers if the component is being rendered in a non embedded context when it should be AND we're not in an interstitial installation state. This is determined for now by the absence of both hmac and shop. This will generally occur when someone visits the app url while not in the Shopify admin.
  const isRootFrameRequest = !query?.has("hmac") && !query?.has("shop") && type == AppType.Embedded;

  const gadgetAppUrl = new URL(api.connection.options.endpoint).origin;

  useEffect(() => {
    setLocation({
      asPath: `${window.location.pathname}${window.location.search}`,
      query: new URLSearchParams(window.location.search),
    });
  }, []);

  console.debug("[gadget-rsab] provider rendering", {
    host,
    coalescedType,
    isReady,
  });

  if (coalescedType == AppType.Embedded && !shopifyGlobalDefined && globalThis.top && globalThis.top !== globalThis.self) {
    let url: URL | undefined = undefined;

    try {
      const topHref = document.referrer;
      url = new URL(topHref);
    } catch (e) {
      const event = new CustomEvent("gadget:devharness:rsab.invalidReferrer", {
        detail: {
          url: document.referrer,
        },
      });
      globalThis.dispatchEvent(event);
    }

    if (url && url.hostname === "admin.shopify.com") {
      throw new Error(
        "Expected app bridge to be defined in embedded context, but it was not. This is likely due to a missing script tag, see https://shopify.dev/docs/api/app-bridge-library"
      );
    }
  }

  if (coalescedType === AppType.Embedded && globalThis.top === globalThis.self) {
    const event = new CustomEvent("gadget:devharness:rsab.embeddedInRootContext");
    globalThis.dispatchEvent(event);
  }

  return (
    <GadgetUrqlProvider api={api}>
      {coalescedType === AppType.Embedded && shopifyGlobalDefined ? (
        <InnerGadgetProvider
          gadgetAppUrl={gadgetAppUrl}
          api={api}
          originalQueryParams={originalQueryParams}
          type={coalescedType}
          host={host}
          isReady={isReady}
          isRootFrameRequest={isRootFrameRequest}
        >
          {children}
        </InnerGadgetProvider>
      ) : (
        <StandaloneInnerProvider isRootFrameRequest={isRootFrameRequest} query={query} type={coalescedType} gadgetAppUrl={gadgetAppUrl}>
          {children}
        </StandaloneInnerProvider>
      )}
    </GadgetUrqlProvider>
  );
};
