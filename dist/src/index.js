"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQuery = exports.useMutation = exports.useConnection = exports.useApi = exports.Provider = exports.Context = exports.Consumer = void 0;
var urql_1 = require("urql");
Object.defineProperty(exports, "Consumer", { enumerable: true, get: function () { return urql_1.Consumer; } });
Object.defineProperty(exports, "Context", { enumerable: true, get: function () { return urql_1.Context; } });
var GadgetProvider_1 = require("./GadgetProvider");
Object.defineProperty(exports, "Provider", { enumerable: true, get: function () { return GadgetProvider_1.Provider; } });
Object.defineProperty(exports, "useApi", { enumerable: true, get: function () { return GadgetProvider_1.useApi; } });
Object.defineProperty(exports, "useConnection", { enumerable: true, get: function () { return GadgetProvider_1.useConnection; } });
__exportStar(require("./auth/useAuth"), exports);
__exportStar(require("./auth/useSession"), exports);
__exportStar(require("./auth/useSignOut"), exports);
__exportStar(require("./auth/useUser"), exports);
__exportStar(require("./components/auth/SignedIn"), exports);
__exportStar(require("./components/auth/SignedInOrRedirect"), exports);
__exportStar(require("./components/auth/SignedOut"), exports);
__exportStar(require("./components/auth/SignedOutOrRedirect"), exports);
__exportStar(require("./useAction"), exports);
__exportStar(require("./useBulkAction"), exports);
__exportStar(require("./useFetch"), exports);
__exportStar(require("./useFindBy"), exports);
__exportStar(require("./useFindFirst"), exports);
__exportStar(require("./useFindMany"), exports);
__exportStar(require("./useFindOne"), exports);
var useGadgetMutation_1 = require("./useGadgetMutation");
Object.defineProperty(exports, "useMutation", { enumerable: true, get: function () { return useGadgetMutation_1.useGadgetMutation; } });
var useGadgetQuery_1 = require("./useGadgetQuery");
Object.defineProperty(exports, "useQuery", { enumerable: true, get: function () { return useGadgetQuery_1.useGadgetQuery; } });
__exportStar(require("./useGet"), exports);
__exportStar(require("./useGlobalAction"), exports);
__exportStar(require("./useMaybeFindFirst"), exports);
__exportStar(require("./useMaybeFindOne"), exports);
//# sourceMappingURL=index.js.map