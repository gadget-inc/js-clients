"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
const tslib_1 = require("tslib");
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("@gadgetinc/react");
const react_2 = tslib_1.__importStar(require("react"));
const index_js_1 = require("./index.js");
const BigCommerceSessionQuery = `
  query BigCommerceSession {
    currentSession {
      bigCommerceUserId
      bigCommerceStore {
        storeHash
      }
      roles {
        key
      }
    }
  }
`;
const InnerProvider = (props) => {
    const { api, locationLoaded, sessionToken } = props;
    const [{ data, fetching, error }] = (0, react_1.useQuery)({
        query: BigCommerceSessionQuery,
        pause: !locationLoaded,
    });
    (0, react_2.useEffect)(() => {
        if (!sessionToken) {
            console.log("[gadget-react-big-commerce] no session token, skipping auth setup");
        }
        api.connection.setAuthenticationMode({
            browserSession: {
                storageType: api_client_core_1.BrowserSessionStorageType.Temporary,
                initialToken: sessionToken,
            },
        });
    }, [api, sessionToken]);
    const isAuthenticated = !!data?.currentSession?.roles?.some((role) => role.key === "Role-BigCommerce-App");
    const userId = data?.currentSession?.bigCommerceUserId;
    const storeHash = data?.currentSession?.bigCommerceStore?.storeHash;
    (0, react_2.useEffect)(() => {
        if (!isAuthenticated) {
            return;
        }
        const BigCommerce = window.Bigcommerce;
        if (!BigCommerce) {
            console.warn("[gadget-react-big-commerce] BigCommerce global not found, not initializing BigCommerce SDK");
            return;
        }
        console.debug("[gadget-react-big-commerce] initializing BigCommerce SDK");
        BigCommerce.init();
    }, [isAuthenticated]);
    console.debug("[gadget-react-big-commerce] provider rendering", {
        locationLoaded,
        sessionToken,
        data,
        fetching,
        error,
        isAuthenticated,
        userId,
        storeHash,
    });
    return (react_2.default.createElement(index_js_1.GadgetAuthContext.Provider, { value: {
            loading: !locationLoaded || fetching,
            error,
            isAuthenticated,
            userId,
            storeHash,
        } }, props.children));
};
const Provider = ({ children, api }) => {
    const [location, setLocation] = (0, react_2.useState)(null);
    const locationLoaded = !!location;
    const { query } = location ?? {};
    const session = query?.get("session") ?? undefined;
    (0, react_2.useEffect)(() => {
        setLocation({
            query: new URLSearchParams(window.location.search),
        });
    }, []);
    return (react_2.default.createElement(react_1.Provider, { api: api },
        react_2.default.createElement(InnerProvider, { api: api, sessionToken: session, locationLoaded: locationLoaded }, children)));
};
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map