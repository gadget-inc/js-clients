"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
const tslib_1 = require("tslib");
const react_1 = require("@gadgetinc/react");
const react_2 = tslib_1.__importStar(require("react"));
const Provider = ({ children, api }) => {
    const [location, setLocation] = (0, react_2.useState)(null);
    const isReady = !!location;
    const { query } = location ?? {};
    const session = query?.get("session") ?? undefined;
    const gadgetAppUrl = new URL(api.connection.options.endpoint).origin;
    (0, react_2.useEffect)(() => {
        setLocation({
            query: new URLSearchParams(window.location.search),
        });
    }, []);
    console.debug("[gadget-react-big-commerce] provider rendering", {
        location,
        isReady,
        session,
        gadgetAppUrl,
    });
    return react_2.default.createElement(react_1.Provider, { api: api }, children);
};
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map