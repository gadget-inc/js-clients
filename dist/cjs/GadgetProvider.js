"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
const jsx_runtime_1 = require("preact/jsx-runtime");
const client_hooks_1 = require("@gadgetinc/client-hooks");
const preact_1 = require("@urql/preact");
const preact_2 = require("preact");
const adapter_js_1 = require("./adapter.js");
const GadgetApiContext = (0, preact_2.createContext)(null);
function Provider(props) {
    const { gadgetClient, gadgetConnection, urqlClient } = (0, client_hooks_1.registerClientHooks)(props.api, { ...adapter_js_1.preactAdapter, GadgetApiContext });
    return ((0, jsx_runtime_1.jsx)(GadgetApiContext.Provider, { value: {
            api: gadgetClient,
            connection: gadgetConnection,
        }, children: (0, jsx_runtime_1.jsx)(preact_1.Provider, { value: urqlClient, children: props.children }) }));
}
exports.Provider = Provider;
//# sourceMappingURL=GadgetProvider.js.map