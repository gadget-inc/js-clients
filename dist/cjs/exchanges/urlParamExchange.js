"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlParamExchange = void 0;
const core_1 = require("@urql/core");
exports.urlParamExchange = (0, core_1.mapExchange)({
    onOperation: (operation) => {
        if (operation.context.url && operation.context.operationName && !operation.context.url.includes("?")) {
            operation.context.url += `?operation=${operation.context.operationName}`;
        }
    },
});
//# sourceMappingURL=urlParamExchange.js.map