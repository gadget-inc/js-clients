"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGadgetQuery = void 0;
const react_1 = require("react");
const urql_1 = require("urql");
const GadgetProvider_js_1 = require("./GadgetProvider.js");
const utils_js_1 = require("./utils.js");
const useGadgetQuery = (args) => {
    if (!(0, react_1.useContext)(GadgetProvider_js_1.GadgetUrqlClientContext))
        throw new Error(utils_js_1.noProviderErrorMessage);
    const options = (0, utils_js_1.useMemoizedQueryOptions)(args);
    return (0, urql_1.useQuery)(options);
};
exports.useGadgetQuery = useGadgetQuery;
//# sourceMappingURL=useGadgetQuery.js.map