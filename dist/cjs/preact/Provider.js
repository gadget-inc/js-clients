"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
const preact_1 = require("@gadgetinc/preact");
const preact_2 = require("preact");
const hooks_1 = require("preact/hooks");
const index_js_1 = require("../index.js");
const context_js_1 = require("./context.js");
const Provider = ({ api, sessionToken, children }) => {
    const [ready, setReady] = (0, hooks_1.useState)(false);
    (0, hooks_1.useEffect)(() => {
        (0, index_js_1.registerShopifySessionTokenAuthentication)(api, sessionToken.get);
        setReady(true);
    }, [api, sessionToken]);
    return (0, preact_2.h)(preact_1.Provider, { api, children: (0, preact_2.h)(context_js_1.GadgetShopifyUIExtensionContext.Provider, { value: { api, ready }, children }) });
};
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map