import { Provider as GadgetUrqlProvider, useQuery } from "@gadgetinc/react";
import AppBridgeReact from "@shopify/app-bridge-react";
import { AppBridgeContext } from "@shopify/app-bridge-react/context.js";
import { getSessionToken } from "@shopify/app-bridge-utils";
import { Redirect } from "@shopify/app-bridge/actions/index.js";
import React, { memo, useContext, useEffect, useMemo, useState } from "react";
import { GadgetAuthContext } from "./index.js";
export var AppType;
(function (AppType) {
    AppType[AppType["Standalone"] = 0] = "Standalone";
    AppType[AppType["Embedded"] = 1] = "Embedded";
})(AppType || (AppType = {}));
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
const InnerGadgetProvider = memo(({ children, forceRedirect, isEmbedded, gadgetAppUrl, originalQueryParams, api, isRootFrameRequest, type, isInstallRequest, }) => {
    const appBridge = useContext(AppBridgeContext);
    const [context, setContext] = useState({
        isAuthenticated: false,
        isEmbedded: false,
        canAuth: false,
        loading: true,
        appBridge,
        isRootFrameRequest: false,
    });
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
                    headers.append("Authorization", `ShopifySessionToken ${await getSessionToken(appBridge)}`);
                    init.headers ?? (init.headers = {});
                    headers.forEach(function (value, key) {
                        init.headers[key] = value;
                    });
                },
                async processTransactionConnectionParams(params) {
                    params.auth.shopifySessionToken = await getSessionToken(appBridge);
                },
            },
        });
        console.debug("[gadget-rsab] set up client auth for session tokens");
    }, [api.connection, appBridge]);
    let runningShopifyAuth = false;
    let isAuthenticated = false;
    // always run one session fetch to the gadget backend on boot to discover if this app is installed
    const [{ data: currentSessionData, fetching: sessionFetching, error }] = useQuery({
        query: GetCurrentSessionQuery,
        // for now don't fetch a session's shop in standalone mode since it leverages session tokens which aren't available if standalone
        pause: type == AppType.Standalone,
    });
    if (currentSessionData) {
        runningShopifyAuth = currentSessionData.shopifyConnection?.requiresReauthentication;
        if (currentSessionData.currentSession) {
            if (!currentSessionData.currentSession.shop) {
                runningShopifyAuth = true;
            }
            else {
                // we may be missing scopes, if so, we aren't fully authenticated
                isAuthenticated = !currentSessionData.shopifyConnection?.requiresReauthentication;
            }
        }
    }
    else if (type == AppType.Standalone && isInstallRequest) {
        runningShopifyAuth = true;
    }
    // redirect to Gadget to initiate the oauth process if we need to.
    useEffect(() => {
        if (!runningShopifyAuth || isRootFrameRequest)
            return;
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
        if (isEmbedded && appBridge) {
            Redirect.create(appBridge).dispatch(Redirect.Action.REMOTE, redirectURLWithOAuthParams);
        }
        else {
            window.location.assign(redirectURLWithOAuthParams);
        }
    }, [appBridge, gadgetAppUrl, isEmbedded, isRootFrameRequest, originalQueryParams, runningShopifyAuth]);
    const loading = (forceRedirect || runningShopifyAuth || sessionFetching) && !isRootFrameRequest;
    useEffect(() => {
        const context = {
            isAuthenticated,
            isEmbedded,
            canAuth: !!appBridge,
            loading,
            appBridge,
            error,
            isRootFrameRequest,
        };
        console.debug("[gadget-rsab] context changed", context);
        return setContext(context);
    }, [loading, isEmbedded, appBridge, isAuthenticated, error, isRootFrameRequest]);
    return React.createElement(GadgetAuthContext.Provider, { value: context }, children);
});
export const Provider = ({ type, children, shopifyApiKey, api, router, }) => {
    const [location, setLocation] = useState(null);
    const isReady = !!location;
    const { query } = location ?? {};
    const host = query?.get("host") ?? undefined;
    const coalescedType = type ?? AppType.Embedded;
    // We store the original query params as that is what shopify uses to generate the HMAC in embedded apps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const originalQueryParams = useMemo(() => query, [isReady]);
    // We need to be sure we're in the destination context when running any of the auth steps.
    // Some browsers have strict policies that prevent sharing local/session storage between embedded & non-embedded contexts.
    //
    // We make an exception for install requests since in that scenario there's no embedded app that we can redirect to.
    // On a browser that this policy enabled, we'll just re-run the auth process after redirecting to the embedded app.
    const isInstallRequest = query?.has("hmac") && query?.has("shop");
    // detect if we're in an iframe by looking if this window object has a reference to a different top window
    const inIframe = typeof window !== "undefined" ? window.top !== window.self : false;
    // detect if we're in the shopify mobile app by looking for the injected global context the app bridge uses
    const inShopifyMobileApp = typeof window !== "undefined" && !!window.MobileWebView;
    const isEmbedded = inIframe || inShopifyMobileApp;
    const inDestinationContext = isEmbedded == (coalescedType == AppType.Embedded) && (coalescedType == AppType.Standalone ? !isInstallRequest : true);
    // We need to inform developers if the component is being rendered in a non embedded context when it should be AND we're not in an interstitial installation state. This is determined for now by the absence of both hmac and shop. This will generally occur when someone visits the app url while not in the Shopify admin.
    const isRootFrameRequest = !query?.has("hmac") && !query?.has("shop") && coalescedType == AppType.Embedded;
    const forceRedirect = isReady && typeof host !== "undefined" && !inDestinationContext;
    const gadgetAppUrl = new URL(api.connection.options.endpoint).origin;
    useEffect(() => {
        setLocation({
            asPath: `${window.location.pathname}${window.location.search}`,
            query: new URLSearchParams(window.location.search),
        });
    }, []);
    let app = (React.createElement(GadgetUrqlProvider, { api: api },
        React.createElement(InnerGadgetProvider, { forceRedirect: forceRedirect, isEmbedded: isEmbedded, gadgetAppUrl: gadgetAppUrl, api: api, originalQueryParams: originalQueryParams, isRootFrameRequest: isRootFrameRequest, type: coalescedType, isInstallRequest: !!isInstallRequest }, children)));
    const shouldMountAppBridge = host && coalescedType != AppType.Standalone && (!isInstallRequest || inDestinationContext);
    console.debug("[gadget-rsab] provider rendering", {
        host,
        coalescedType,
        isInstallRequest,
        isReady,
        isEmbedded,
        isRootFrameRequest,
        inDestinationContext,
        shouldMountAppBridge,
    });
    // app bridge provider seems to prevent urql from sending graphql requests when it cannot communicate using postMessage when not embedded so we must skip using the app bridge provider on the very first redirect from shopify
    if (shouldMountAppBridge) {
        app = (React.createElement(AppBridgeReact.Provider, { config: {
                apiKey: shopifyApiKey,
                host,
                forceRedirect,
            }, router: router }, app));
    }
    return app;
};
//# sourceMappingURL=Provider.js.map