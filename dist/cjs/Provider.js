"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = exports.AppType = void 0;
const tslib_1 = require("tslib");
const react_1 = require("@gadgetinc/react");
const app_bridge_react_1 = require("@shopify/app-bridge-react");
const react_2 = tslib_1.__importStar(require("react"));
const index_js_1 = require("./index.js");
var AppType;
(function (AppType) {
    AppType[AppType["Standalone"] = 0] = "Standalone";
    AppType[AppType["Embedded"] = 1] = "Embedded";
})(AppType || (exports.AppType = AppType = {}));
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
const InnerGadgetProvider = (0, react_2.memo)(({ children, gadgetAppUrl, originalQueryParams, api, type, host, isReady, isRootFrameRequest, shopifyInstallState: _shopifyInstallState, }) => {
    const appBridge = (0, app_bridge_react_1.useAppBridge)();
    // We need to be sure we're in the destination context when running any of the auth steps.
    // Some browsers have strict policies that prevent sharing local/session storage between embedded & non-embedded contexts.
    //
    // We make an exception for install requests since in that scenario there's no embedded app that we can redirect to.
    // On a browser that this policy enabled, we'll just re-run the auth process after redirecting to the embedded app.
    const isInstallRequest = originalQueryParams?.has("hmac") && originalQueryParams?.has("shop");
    const isEmbedded = appBridge.environment.embedded || appBridge.environment.mobile;
    const inDestinationContext = isEmbedded && type === AppType.Embedded;
    const forceRedirect = isReady && typeof host !== "undefined" && !inDestinationContext;
    const [idTokenError, setIdTokenError] = (0, react_2.useState)();
    (0, react_2.useEffect)(() => {
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
    let missingScopes = (0, react_2.useMemo)(() => [], []);
    const hasFetchedOrInstalledShop = (0, react_2.useRef)(false);
    const hasStartedFetchingOrInstallingShop = (0, react_2.useRef)(false);
    const shopifyInstallState = _shopifyInstallState ?? (typeof window != "undefined" ? window.gadgetConfig?.shopifyInstallState : undefined);
    const hasInstallStateHint = !!shopifyInstallState;
    const [{ data: fetchOrInstallShopData, fetching: fetchingOrInstallingShop, error: fetchingOrInstallingShopError }, fetchOrInstallShop] = (0, react_1.useMutation)(FetchOrInstallShopMutation);
    if (fetchOrInstallShopData?.shopifyConnection?.fetchOrInstallShop) {
        redirectToOauth = fetchOrInstallShopData.shopifyConnection.fetchOrInstallShop.redirectToOauth;
        isAuthenticated = fetchOrInstallShopData.shopifyConnection.fetchOrInstallShop.isAuthenticated;
        missingScopes = fetchOrInstallShopData.shopifyConnection.fetchOrInstallShop.missingScopes ?? [];
    }
    else if (shopifyInstallState) {
        redirectToOauth = shopifyInstallState.redirectToOauth;
        isAuthenticated = shopifyInstallState.isAuthenticated;
        missingScopes = shopifyInstallState.missingScopes ?? [];
    }
    // we want to show the loading state until we've started fetching or installing the shop
    // or the mutation to fetch or install the shop has completed
    (0, react_2.useEffect)(() => {
        if (fetchingOrInstallingShop) {
            hasStartedFetchingOrInstallingShop.current = true;
        }
        if (hasInstallStateHint) {
            console.debug("[gadget-rsab] shopifyInstallState hint used", shopifyInstallState);
        }
    }, [fetchingOrInstallingShop, hasInstallStateHint, shopifyInstallState]);
    // always run one fetch to the gadget backend on boot to discover if this app is installed
    (0, react_2.useEffect)(() => {
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
    (0, react_2.useEffect)(() => {
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
    // we're loading we need to redirect somewhere so we dont render the app while a redirect is underway
    let loading = forceRedirect || redirectToOauth;
    // we're also loading if we're in the middle of checking installation status in the backend
    if (!hasStartedFetchingOrInstallingShop.current || fetchingOrInstallingShop) {
        if (hasInstallStateHint) {
            // if the backend request is outstanding, but we have an installation status hint that says we're already authenticated, assume that's what the backend will say too, and stop being loading earlier to improve LCP
            loading || (loading = !isAuthenticated);
        }
        else {
            loading = true;
        }
    }
    const [contextValue, setContextValue] = (0, react_2.useState)({
        isAuthenticated,
        isEmbedded,
        canAuth: !!appBridge,
        loading,
        appBridge,
        isRootFrameRequest,
    });
    (0, react_2.useEffect)(() => {
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
    (0, react_2.useEffect)(() => {
        if (missingScopes.length > 0 && !redirectToOauth) {
            const event = new CustomEvent("gadget:devharness:rsab.shopifyManagedInstallation.missingScopes", {
                detail: {
                    missingScopes,
                },
            });
            globalThis.dispatchEvent(event);
        }
    }, [redirectToOauth, missingScopes]);
    return react_2.default.createElement(index_js_1.GadgetAuthContext.Provider, { value: contextValue }, children);
});
const StandaloneInnerProvider = ({ isRootFrameRequest, children, query, gadgetAppUrl, type, shopifyInstallState, }) => {
    // we still need to run the oauth process if we're in an install context so we should redirect to gadget
    const isInstallRequest = query?.has("hmac") && query?.has("shop");
    const runningShopifyAuth = isInstallRequest;
    // redirect to Gadget to initiate the oauth process if we need to.
    (0, react_2.useEffect)(() => {
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
    return (react_2.default.createElement(index_js_1.GadgetAuthContext.Provider, { value: {
            isAuthenticated: shopifyInstallState?.isAuthenticated ?? false,
            isEmbedded: false,
            canAuth: false,
            loading: false,
            appBridge: null,
            isRootFrameRequest: isRootFrameRequest,
        } }, children));
};
const Provider = ({ type, children, api, location: _location, shopifyInstallState, }) => {
    // if we haven't properly set up the shopify global then skip anything that requires app bridge
    const shopifyGlobalDefined = !!(globalThis && globalThis.shopify);
    const location = (0, react_2.useMemo)(() => {
        if (typeof window === "undefined" && !_location) {
            throw new Error("`location` property is required in server-side rendering");
        }
        const pathname = _location?.pathname ?? window.location.pathname;
        const search = _location?.search ?? window.location.search;
        return {
            asPath: `${pathname}${search}`,
            query: new URLSearchParams(search),
        };
    }, [_location]);
    const isReady = !!location;
    const { query } = location ?? {};
    const host = query?.get("host") ?? undefined;
    const coalescedType = type ?? AppType.Embedded;
    // We store the original query params as that is what shopify uses to generate the HMAC in embedded apps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const originalQueryParams = (0, react_2.useMemo)(() => query, [isReady]);
    // We need to inform developers if the component is being rendered in a non embedded context when it should be AND we're not in an interstitial installation state. This is determined for now by the absence of both hmac and shop. This will generally occur when someone visits the app url while not in the Shopify admin.
    const isRootFrameRequest = !query?.has("hmac") && !query?.has("shop") && type == AppType.Embedded;
    const gadgetAppUrl = new URL(api.connection.options.endpoint).origin;
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
            if ("dispatchEvent" in globalThis) {
                const event = new CustomEvent("gadget:devharness:rsab.invalidReferrer", {
                    detail: {
                        url: document.referrer,
                    },
                });
                globalThis.dispatchEvent(event);
            }
        }
        if (url && url.hostname === "admin.shopify.com") {
            throw new Error("Expected app bridge to be defined in embedded context, but it was not. This is likely due to a missing script tag, see https://shopify.dev/docs/api/app-bridge-library");
        }
    }
    if (coalescedType === AppType.Embedded && globalThis.top === globalThis.self && "dispatchEvent" in globalThis) {
        const event = new CustomEvent("gadget:devharness:rsab.embeddedInRootContext");
        globalThis.dispatchEvent(event);
    }
    return (react_2.default.createElement(react_1.Provider, { api: api }, coalescedType === AppType.Embedded && shopifyGlobalDefined ? (react_2.default.createElement(InnerGadgetProvider, { gadgetAppUrl: gadgetAppUrl, api: api, originalQueryParams: originalQueryParams, type: coalescedType, host: host, isReady: isReady, isRootFrameRequest: isRootFrameRequest, shopifyInstallState: shopifyInstallState }, children)) : (react_2.default.createElement(StandaloneInnerProvider, { isRootFrameRequest: isRootFrameRequest, query: query, type: coalescedType, gadgetAppUrl: gadgetAppUrl, shopifyInstallState: shopifyInstallState }, children))));
};
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map