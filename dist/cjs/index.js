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
var GadgetProvider_js_1 = require("./GadgetProvider.js");
Object.defineProperty(exports, "Provider", { enumerable: true, get: function () { return GadgetProvider_js_1.Provider; } });
Object.defineProperty(exports, "useApi", { enumerable: true, get: function () { return GadgetProvider_js_1.useApi; } });
Object.defineProperty(exports, "useConnection", { enumerable: true, get: function () { return GadgetProvider_js_1.useConnection; } });
__exportStar(require("./auth/SignedIn.js"), exports);
__exportStar(require("./auth/SignedInOrRedirect.js"), exports);
__exportStar(require("./auth/SignedOut.js"), exports);
__exportStar(require("./auth/SignedOutOrRedirect.js"), exports);
__exportStar(require("./auth/useAuth.js"), exports);
__exportStar(require("./auth/useSession.js"), exports);
__exportStar(require("./auth/useSignOut.js"), exports);
__exportStar(require("./auth/useUser.js"), exports);
__exportStar(require("./useAction.js"), exports);
__exportStar(require("./useActionForm.js"), exports);
__exportStar(require("./useBulkAction.js"), exports);
__exportStar(require("./useFetch.js"), exports);
__exportStar(require("./useFindBy.js"), exports);
__exportStar(require("./useFindFirst.js"), exports);
__exportStar(require("./useFindMany.js"), exports);
__exportStar(require("./useFindOne.js"), exports);
var useGadgetMutation_js_1 = require("./useGadgetMutation.js");
Object.defineProperty(exports, "useMutation", { enumerable: true, get: function () { return useGadgetMutation_js_1.useGadgetMutation; } });
var useGadgetQuery_js_1 = require("./useGadgetQuery.js");
Object.defineProperty(exports, "useQuery", { enumerable: true, get: function () { return useGadgetQuery_js_1.useGadgetQuery; } });
__exportStar(require("./useGet.js"), exports);
__exportStar(require("./useGlobalAction.js"), exports);
__exportStar(require("./useMaybeFindFirst.js"), exports);
__exportStar(require("./useMaybeFindOne.js"), exports);
//# sourceMappingURL=index.js.map