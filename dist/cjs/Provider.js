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
const InnerGadgetProvider = (0, react_2.memo)(({ children, gadgetAppUrl, originalQueryParams, api, type, host, isReady, isRootFrameRequest }) => {
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
    const [context, setContext] = (0, react_2.useState)({
        isAuthenticated: false,
        isEmbedded: false,
        canAuth: false,
        loading: true,
        appBridge,
        isRootFrameRequest: false,
    });
    (0, react_2.useEffect)(() => {
        if (!appBridge) {
            console.debug("[gadget-rsab] no app bridge, skipping client auth setup");
            return;
        }
        console.debug({ appBridgeEnvironment: appBridge.environment }, "[gadget-rsab] setting up client auth for session tokens");
        // setup the api client to always query using the custom shopify auth implementation
        api.connection.setAuthenticationMode({
            custom: {
                async processFetch(_input, init) {
                    const headers = new Headers(init.headers);
                    headers.append("Authorization", `ShopifySessionToken ${await appBridge.idToken()}`);
                    init.headers ?? (init.headers = {});
                    headers.forEach(function (value, key) {
                        init.headers[key] = value;
                    });
                },
                async processTransactionConnectionParams(params) {
                    params.auth.shopifySessionToken = await appBridge.idToken();
                },
            },
        });
        console.debug("[gadget-rsab] set up client auth for session tokens");
    }, [api.connection, appBridge]);
    let runningShopifyAuth = false;
    let isAuthenticated = false;
    // always run one session fetch to the gadget backend on boot to discover if this app is installed
    const [{ data: currentSessionData, fetching: sessionFetching, error }] = (0, react_1.useQuery)({
        query: GetCurrentSessionQuery,
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
    // redirect to Gadget to initiate the oauth process if we need to.
    (0, react_2.useEffect)(() => {
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
        //open(redirectURLWithOAuthParams, "_top");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gadgetAppUrl, isRootFrameRequest, originalQueryParams, runningShopifyAuth]);
    const loading = (forceRedirect || runningShopifyAuth || sessionFetching) && !isRootFrameRequest;
    (0, react_2.useEffect)(() => {
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
    return react_2.default.createElement(index_js_1.GadgetAuthContext.Provider, { value: context }, children);
});
const StandaloneInnerProvider = ({ isRootFrameRequest, children, query, gadgetAppUrl, type, }) => {
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
            isAuthenticated: false,
            isEmbedded: false,
            canAuth: false,
            loading: false,
            appBridge: null,
            isRootFrameRequest: isRootFrameRequest,
        } }, children));
};
const Provider = ({ type, children, api }) => {
    // if we haven't properly set up the shopify global then skip anything that requires app bridge
    const shopifyGlobalDefined = !!(globalThis && globalThis.shopify);
    const [location, setLocation] = (0, react_2.useState)(null);
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
    (0, react_2.useEffect)(() => {
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
    return (react_2.default.createElement(react_1.Provider, { api: api }, coalescedType === AppType.Embedded && shopifyGlobalDefined ? (react_2.default.createElement(InnerGadgetProvider, { gadgetAppUrl: gadgetAppUrl, api: api, originalQueryParams: originalQueryParams, type: coalescedType, host: host, isReady: isReady, isRootFrameRequest: isRootFrameRequest }, children)) : (react_2.default.createElement(StandaloneInnerProvider, { isRootFrameRequest: isRootFrameRequest, query: query, type: coalescedType, gadgetAppUrl: gadgetAppUrl }, children))));
};
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map