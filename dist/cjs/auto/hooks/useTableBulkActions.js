"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTableBulkActions = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const react_fast_compare_1 = tslib_1.__importDefault(require("react-fast-compare"));
const utils_js_1 = require("../../utils.js");
const useTableBulkActions = (props) => {
    const [selectedModelActionDetails, setSelectedModelActionDetails] = react_1.default.useState(undefined);
    const allModelActionsDetails = getModelActionsForTable({ model: props.model });
    const bulkActionOptions = (0, react_1.useMemo)(() => {
        return allModelActionsDetails
            .filter((actionDetails) => 
        // Only bulk actions that accept only IDs are currently supported
        actionDetails.isBulk &&
            !actionDetails.acceptsModelInput && // Accepting modelInput guarantees that the action accepts more than just IDs
            (0, react_fast_compare_1.default)(actionDetails.variables, OnlyIdsAcceptedInputVariables))
            .map((actionDetails) => ({
            humanizedName: (0, utils_js_1.humanizeCamelCase)(actionDetails.apiIdentifier),
            selectModelAction: () => setSelectedModelActionDetails(actionDetails), // To open the corresponding modal
        }));
    }, [allModelActionsDetails]);
    return { selectedModelActionDetails, bulkActionOptions };
};
exports.useTableBulkActions = useTableBulkActions;
/**
 * Returns a list of ModelActionDetail objects for given model
 */
const getModelActionsForTable = (props) => {
    const modelActions = [];
    const modelPrototype = Object.getPrototypeOf(props.model);
    for (const key of Object.keys(modelPrototype)) {
        const isAction = modelPrototype[key].type === "action";
        if (isAction) {
            modelActions.push(modelPrototype[key]);
        }
    }
    const funcMapper = (func) => ({
        apiIdentifier: func.functionName,
        operationName: func.operationName,
        isDeleter: func.isDeleter,
        isBulk: func.isBulk,
        acceptsModelInput: func.acceptsModelInput,
        variables: func.variables,
    });
    return modelActions.map(funcMapper);
};
// Expected variables for supported bulk actions
const OnlyIdsAcceptedInputVariables = {
    ids: {
        required: true,
        type: "[GadgetID!]",
    },
};
//# sourceMappingURL=useTableBulkActions.js.map