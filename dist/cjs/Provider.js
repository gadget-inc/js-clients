"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
const tslib_1 = require("tslib");
const react_1 = require("@gadgetinc/react");
const react_2 = tslib_1.__importStar(require("react"));
const BigCommerceSessionQuery = `
  query BigCommerceSession {
    currentSession {
      id
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
    const { locationLoaded, sessionToken } = props;
    const [{ data, fetching, error }] = (0, react_1.useQuery)({
        query: BigCommerceSessionQuery,
    });
    console.debug("[gadget-react-big-commerce] provider rendering", {
        locationLoaded,
        sessionToken,
        data,
        fetching,
        error,
    });
    return react_2.default.createElement(react_2.default.Fragment, null, props.children);
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
        react_2.default.createElement(InnerProvider, { sessionToken: session, locationLoaded: locationLoaded }, children)));
};
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map