"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
const tslib_1 = require("tslib");
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
    const { api, sessionToken } = props;
    const [{ data, fetching, error }] = (0, react_1.useQuery)({
        query: BigCommerceSessionQuery,
    });
    (0, react_2.useEffect)(() => {
        if (!sessionToken) {
            console.log("[gadget-react-big-commerce] no session token, skipping auth setup");
            return;
        }
        api.connection.setAuthenticationMode({
            custom: {
                async processFetch(_input, init) {
                    const headers = new Headers(init.headers);
                    headers.append("Authorization", `BigCommerceSignedPayload ${sessionToken}`);
                    init.headers ?? (init.headers = {});
                    headers.forEach(function (value, key) {
                        init.headers[key] = value;
                    });
                },
                async processTransactionConnectionParams(params) {
                    params.auth.bigCommerceSignedPayload = sessionToken;
                },
            },
        });
    }, [api, sessionToken]);
    const isAuthenticated = !!data?.currentSession?.roles?.some((role) => role.key === "Role-BigCommerce-App");
    const userId = data?.currentSession?.bigCommerceUserId ?? undefined;
    const storeHash = data?.currentSession?.bigCommerceStore?.storeHash ?? undefined;
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
        sessionToken,
        data,
        fetching,
        error,
        isAuthenticated,
        userId,
        storeHash,
    });
    return (react_2.default.createElement(index_js_1.GadgetBigCommerceContext.Provider, { value: {
            loading: fetching,
            error,
            isAuthenticated,
            userId,
            storeHash,
        } }, props.children));
};
const Provider = ({ children, api }) => {
    const location = (0, react_2.useMemo)(() => {
        return {
            query: new URLSearchParams(window.location.search),
        };
    }, []);
    const { query } = location ?? {};
    const session = query?.get("session") ?? undefined;
    return (react_2.default.createElement(react_1.Provider, { api: api },
        react_2.default.createElement(InnerProvider, { api: api, sessionToken: session }, children)));
};
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map