"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = exports.Context = exports.Consumer = void 0;
var urql_1 = require("urql");
Object.defineProperty(exports, "Consumer", { enumerable: true, get: function () { return urql_1.Consumer; } });
Object.defineProperty(exports, "Context", { enumerable: true, get: function () { return urql_1.Context; } });
Object.defineProperty(exports, "Provider", { enumerable: true, get: function () { return urql_1.Provider; } });
__exportStar(require("./useAction"), exports);
__exportStar(require("./useFindBy"), exports);
__exportStar(require("./useFindMany"), exports);
__exportStar(require("./useFindOne"), exports);
//# sourceMappingURL=index.js.map