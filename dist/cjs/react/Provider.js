"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
const tslib_1 = require("tslib");
const react_1 = require("@gadgetinc/react");
const react_2 = tslib_1.__importStar(require("react"));
const index_js_1 = require("../index.js");
const index_js_2 = require("./index.js");
const Provider = ({ api, sessionToken, children }) => {
    const [ready, setReady] = (0, react_2.useState)(false);
    (0, react_2.useEffect)(() => {
        (0, index_js_1.registerShopifySessionTokenAuthentication)(api, sessionToken.get);
        setReady(true);
    }, [api, sessionToken]);
    return (react_2.default.createElement(react_1.Provider, { api: api },
        react_2.default.createElement(index_js_2.GadgetShopifyUIExtensionContext.Provider, { value: { api, ready } }, children),
        ";"));
};
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map