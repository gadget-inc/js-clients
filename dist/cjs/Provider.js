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
      bigcommerceUserId
      bigcommerceStore {
        storeHash
      }
      roles {
        key
      }
    }
  }
`;
const InnerProvider = (props) => {
    const { api, signedPayload } = props;
    const [{ data, fetching, error }] = (0, react_1.useQuery)({
        query: BigCommerceSessionQuery,
    });
    (0, react_2.useEffect)(() => {
        if (!signedPayload) {
            console.log("[gadget-react-bigcommerce] no signed payload, skipping auth setup");
            return;
        }
        api.connection.setAuthenticationMode({
            custom: {
                async processFetch(_input, init) {
                    const headers = new Headers(init.headers);
                    headers.append("Authorization", `BigCommerceSignedPayload ${signedPayload}`);
                    init.headers ?? (init.headers = {});
                    headers.forEach(function (value, key) {
                        init.headers[key] = value;
                    });
                },
                async processTransactionConnectionParams(params) {
                    params.auth.bigcommerceSignedPayload = signedPayload;
                },
            },
        });
    }, [api, signedPayload]);
    const isAuthenticated = !!data?.currentSession?.roles?.some((role) => role.key === "Role-BigCommerce-App");
    const userId = data?.currentSession?.bigcommerceUserId ?? undefined;
    const storeHash = data?.currentSession?.bigcommerceStore?.storeHash ?? undefined;
    (0, react_2.useEffect)(() => {
        if (!isAuthenticated) {
            return;
        }
        const BigCommerce = window.Bigcommerce;
        if (!BigCommerce) {
            console.warn("[gadget-react-bigcommerce] BigCommerce global not found, not initializing BigCommerce SDK");
            return;
        }
        console.debug("[gadget-react-bigcommerce] initializing BigCommerce SDK");
        BigCommerce.init();
    }, [isAuthenticated]);
    console.debug("[gadget-react-bigcommerce] provider rendering", {
        signedPayload,
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
    const signed_payload = query?.get("signed_payload") ?? undefined;
    return (react_2.default.createElement(react_1.Provider, { api: api },
        react_2.default.createElement(InnerProvider, { api: api, signedPayload: signed_payload }, children)));
};
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map