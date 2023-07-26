"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGadgetMutation = void 0;
const react_1 = require("react");
const urql_1 = require("urql");
const GadgetProvider_1 = require("./GadgetProvider");
const utils_1 = require("./utils");
const useGadgetMutation = (query) => {
    if (!(0, react_1.useContext)(GadgetProvider_1.GadgetUrqlClientContext))
        throw new Error(utils_1.noProviderErrorMessage);
    return (0, urql_1.useMutation)(query);
};
exports.useGadgetMutation = useGadgetMutation;
//# sourceMappingURL=useGadgetMutation.js.map