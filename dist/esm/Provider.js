import { Provider as GadgetUrqlProvider, useMutation } from "@gadgetinc/react";
import { useAppBridge } from "@shopify/app-bridge-react";
import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { GadgetAuthContext } from "./index.js";
export var AppType;
(function (AppType) {
    AppType[AppType["Standalone"] = 0] = "Standalone";
    AppType[AppType["Embedded"] = 1] = "Embedded";
})(AppType || (AppType = {}));
// mutation which passes the session token back to Gadget to see if this shop is already installed and if not, install it
// for managed installations where there is no OAuth callback sent to Gadget, this is the piece that first discovers a new shop and informs the backend
// for normal OAuth installs, this also checks that the right scopes have been granted by this shop in order to trigger re-authentication
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
const InnerGadgetProvider = memo(({ children, gadgetAppUrl, originalQueryParams, api, type, host, isReady, isRootFrameRequest }) => {
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
    const [idTokenError, setIdTokenError] = useState();
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
                    init.headers ?? (init.headers = {});
                    headers.forEach(function (value, key) {
                        init.headers[key] = value;
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
    let missingScopes = useMemo(() => [], []);
    const hasFetchedOrInstalledShop = useRef(false);
    const hasStartedFetchingOrInstallingShop = useRef(false);
    let hasInstallStateHint = false;
    const [{ data: fetchOrInstallShopData, fetching: fetchingOrInstallingShop, error: fetchingOrInstallingShopError }, fetchOrInstallShop] = useMutation(FetchOrInstallShopMutation);
    if (fetchOrInstallShopData) {
        redirectToOauth = fetchOrInstallShopData.shopifyConnection.fetchOrInstallShop.redirectToOauth;
        isAuthenticated = fetchOrInstallShopData.shopifyConnection.fetchOrInstallShop.isAuthenticated;
        missingScopes = fetchOrInstallShopData.shopifyConnection.fetchOrInstallShop.missingScopes ?? [];
    }
    else if (typeof window != "undefined" && window.gadgetConfig?.shopifyInstallState) {
        const hint = window.gadgetConfig.shopifyInstallState;
        hasInstallStateHint = true;
        redirectToOauth = hint.redirectToOauth;
        isAuthenticated = hint.isAuthenticated;
        missingScopes = hint.missingScopes ?? [];
    }
    // we want to show the loading state until we've started fetching or installing the shop
    // or the mutation to fetch or install the shop has completed
    useEffect(() => {
        if (fetchingOrInstallingShop) {
            hasStartedFetchingOrInstallingShop.current = true;
        }
        if (hasInstallStateHint) {
            console.debug("[gadget-rsab] shopifyInstallState hint used", window.gadgetConfig.shopifyInstallState);
        }
    }, [fetchingOrInstallingShop, hasInstallStateHint]);
    // always run one fetch to the gadget backend on boot to discover if this app is installed
    useEffect(() => {
        if (hasFetchedOrInstalledShop.current)
            return;
        if (!appBridge)
            return;
        hasFetchedOrInstalledShop.current = true;
        console.debug("[gadget-rsab] getting sessionToken to fetch or install shop");
        appBridge
            .idToken()
            .then((idToken) => {
            console.debug("[gadget-rsab] fetching or installing shop");
            fetchOrInstallShop({ shopifySessionToken: idToken }).catch((err) => {
                console.error({ err }, "[gadget-rsab] error fetching or installing shop");
            });
        })
            .catch(setIdTokenError);
    }, [appBridge, fetchOrInstallShop]);
    // redirect to Gadget to initiate the oauth process if we need to.
    useEffect(() => {
        if (!redirectToOauth || isRootFrameRequest)
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
        open(redirectURLWithOAuthParams, "_top");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gadgetAppUrl, isRootFrameRequest, originalQueryParams, redirectToOauth]);
    // we're loading if:
    //  - we need to redirect somewhere (forceRedirect || redirectToOauth)
    //  - if we don't have an install state hint, and we're loading the shop from the backend to check current state
    //  - if we do have an install state hint, and the hint tells us we need to re-authenticate
    const loading = forceRedirect ||
        redirectToOauth ||
        (hasInstallStateHint ? !isAuthenticated : fetchingOrInstallingShop || !hasStartedFetchingOrInstallingShop.current);
    const [contextValue, setContextValue] = useState({
        isAuthenticated,
        isEmbedded,
        canAuth: !!appBridge,
        loading,
        appBridge,
        isRootFrameRequest,
    });
    useEffect(() => {
        const newContext = {
            isAuthenticated,
            isEmbedded,
            canAuth: !!appBridge,
            loading,
            appBridge,
            error: fetchingOrInstallingShopError || idTokenError,
            isRootFrameRequest,
        };
        console.debug("[gadget-rsab] context changed", newContext);
        return setContextValue(newContext);
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
    return React.createElement(GadgetAuthContext.Provider, { value: contextValue }, children);
});
const StandaloneInnerProvider = ({ isRootFrameRequest, children, query, gadgetAppUrl, type, }) => {
    // we still need to run the oauth process if we're in an install context so we should redirect to gadget
    const isInstallRequest = query?.has("hmac") && query?.has("shop");
    const runningShopifyAuth = isInstallRequest;
    // redirect to Gadget to initiate the oauth process if we need to.
    useEffect(() => {
        if (!runningShopifyAuth || isRootFrameRequest)
            return;
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
    return (React.createElement(GadgetAuthContext.Provider, { value: {
            isAuthenticated: false,
            isEmbedded: false,
            canAuth: false,
            loading: false,
            appBridge: null,
            isRootFrameRequest: isRootFrameRequest,
        } }, children));
};
export const Provider = ({ type, children, api }) => {
    // if we haven't properly set up the shopify global then skip anything that requires app bridge
    const shopifyGlobalDefined = !!(globalThis && globalThis.shopify);
    const [location, setLocation] = useState(null);
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
        location,
        coalescedType,
        isReady,
    });
    if (coalescedType == AppType.Embedded && !shopifyGlobalDefined && globalThis.top && globalThis.top !== globalThis.self) {
        let url = undefined;
        try {
            const topHref = document.referrer;
            url = new URL(topHref);
        }
        catch (e) {
            const event = new CustomEvent("gadget:devharness:rsab.invalidReferrer", {
                detail: {
                    url: document.referrer,
                },
            });
            globalThis.dispatchEvent(event);
        }
        if (url && url.hostname === "admin.shopify.com") {
            throw new Error("Expected app bridge to be defined in embedded context, but it was not. This is likely due to a missing script tag, see https://shopify.dev/docs/api/app-bridge-library");
        }
    }
    if (coalescedType === AppType.Embedded && globalThis.top === globalThis.self) {
        const event = new CustomEvent("gadget:devharness:rsab.embeddedInRootContext");
        globalThis.dispatchEvent(event);
    }
    return (React.createElement(GadgetUrqlProvider, { api: api }, coalescedType === AppType.Embedded && shopifyGlobalDefined ? (React.createElement(InnerGadgetProvider, { gadgetAppUrl: gadgetAppUrl, api: api, originalQueryParams: originalQueryParams, type: coalescedType, host: host, isReady: isReady, isRootFrameRequest: isRootFrameRequest }, children)) : (React.createElement(StandaloneInnerProvider, { isRootFrameRequest: isRootFrameRequest, query: query, type: coalescedType, gadgetAppUrl: gadgetAppUrl }, children))));
};
//# sourceMappingURL=Provider.js.map