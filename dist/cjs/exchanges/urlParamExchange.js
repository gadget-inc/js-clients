"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlParamExchange = void 0;
const core_1 = require("@urql/core");
exports.urlParamExchange = (0, core_1.mapExchange)({
    onOperation: (operation) => {
        if (operation.context.url && operation.context.operationName) {
            try {
                const [start, params] = operation.context.url.split("?");
                const paramsObj = new URLSearchParams(params);
                paramsObj.set("operation", operation.context.operationName);
                operation.context.url = `${start}?${paramsObj.toString()}`;
            }
            catch (error) {
                // not able to parse URL params, just don't add this optional param and let the rest of the system react to the invalid URL
            }
        }
    },
});
//# sourceMappingURL=urlParamExchange.js.map