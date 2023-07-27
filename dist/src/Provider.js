"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = exports.AppType = void 0;
const react_1 = require("@gadgetinc/react");
const app_bridge_react_1 = require("@shopify/app-bridge-react");
const context_1 = require("@shopify/app-bridge-react/context");
const app_bridge_utils_1 = require("@shopify/app-bridge-utils");
const actions_1 = require("@shopify/app-bridge/actions");
const lodash_1 = require("lodash");
const react_2 = __importStar(require("react"));
const index_1 = require("./index");
var AppType;
(function (AppType) {
    AppType[AppType["Standalone"] = 0] = "Standalone";
    AppType[AppType["Embedded"] = 1] = "Embedded";
})(AppType = exports.AppType || (exports.AppType = {}));
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
const InnerGadgetProvider = (0, react_2.memo)(({ children, forceRedirect, isEmbedded, gadgetAppUrl, originalQueryParams, api, isRootFrameRequest, type, isInstallRequest, }) => {
    const appBridge = (0, react_2.useContext)(context_1.AppBridgeContext);
    const [context, setContext] = (0, react_2.useState)({
        isAuthenticated: false,
        isEmbedded: false,
        canAuth: false,
        loading: true,
        appBridge,
        isRootFrameRequest: false,
    });
    (0, react_2.useEffect)(() => {
        if (!appBridge)
            return;
        // setup the api client to always query using the custom shopify auth implementation
        api.connection.setAuthenticationMode({
            custom: {
                processFetch: async (_input, init) => {
                    const headers = new Headers(init.headers);
                    headers.append("Authorization", `ShopifySessionToken ${await (0, app_bridge_utils_1.getSessionToken)(appBridge)}`);
                    init.headers ?? (init.headers = {});
                    headers.forEach(function (value, key) {
                        init.headers[key] = value;
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
    const [{ data: currentSessionData, fetching: sessionFetching, error }] = (0, react_1.useQuery)({
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
    (0, react_2.useEffect)(() => {
        if (!runningShopifyAuth || isRootFrameRequest)
            return;
        // redirect to gadget app root pages url with oauth params
        const redirectURL = new URL("/api/connections/auth/shopify", gadgetAppUrl);
        redirectURL.search = originalQueryParams?.toString() ?? "";
        const redirectURLWithOAuthParams = redirectURL.toString();
        if (isEmbedded && appBridge) {
            actions_1.Redirect.create(appBridge).dispatch(actions_1.Redirect.Action.REMOTE, redirectURLWithOAuthParams);
        }
        else {
            window.location.assign(redirectURLWithOAuthParams);
        }
    }, [appBridge, gadgetAppUrl, isEmbedded, isRootFrameRequest, originalQueryParams, runningShopifyAuth]);
    const loading = (forceRedirect || runningShopifyAuth || sessionFetching) && !isRootFrameRequest;
    (0, react_2.useEffect)(() => {
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
    return react_2.default.createElement(index_1.GadgetAuthContext.Provider, { value: context }, children);
});
const Provider = ({ type, children, shopifyApiKey, api, router, }) => {
    const [location, setLocation] = (0, react_2.useState)(null);
    const isReady = !!location;
    const { query } = location ?? {};
    const host = query?.get("host") ?? undefined;
    const coalescedType = type ?? AppType.Embedded;
    // We store the original query params as that is what shopify uses to generate the HMAC in embedded apps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const originalQueryParams = (0, react_2.useMemo)(() => query, [isReady]);
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
    const forceRedirect = isReady && !(0, lodash_1.isUndefined)(host) && !inDestinationContext;
    const gadgetAppUrl = new URL(api.connection.options.endpoint).origin;
    (0, react_2.useEffect)(() => {
        setLocation({
            asPath: `${window.location.pathname}${window.location.search}`,
            query: new URLSearchParams(window.location.search),
        });
    }, []);
    let app = (react_2.default.createElement(react_1.Provider, { value: api.connection.currentClient },
        react_2.default.createElement(InnerGadgetProvider, { forceRedirect: forceRedirect, isEmbedded: isEmbedded, gadgetAppUrl: gadgetAppUrl, api: api, originalQueryParams: originalQueryParams, isRootFrameRequest: isRootFrameRequest, type: coalescedType, isInstallRequest: !!isInstallRequest }, children)));
    // app bridge provider seems to prevent urql from sending graphql requests when it cannot communicate using postMessage when not embedded so we must skip using the app bridge provider on the very first redirect from shopify
    if (host && coalescedType != AppType.Standalone && (!isInstallRequest || inDestinationContext)) {
        app = (react_2.default.createElement(app_bridge_react_1.Provider, { config: {
                apiKey: shopifyApiKey,
                host,
                forceRedirect,
            }, router: router }, app));
    }
    return app;
};
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map