"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTableBulkActions = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const react_fast_compare_1 = tslib_1.__importDefault(require("react-fast-compare"));
const utils_js_1 = require("../../utils.js");
const AutoTableValidators_js_1 = require("../AutoTableValidators.js");
const useTableBulkActions = (props) => {
    const { model, actions, excludeActions } = props;
    (0, AutoTableValidators_js_1.validateAutoTableProps)(props.model);
    if (actions && excludeActions) {
        throw new Error("Cannot have both actions and excludeActions in the same table");
    }
    const [selectedModelActionDetails, setSelectedModelActionDetails] = react_1.default.useState(undefined);
    const gadgetModelActionsAsBulkActionOptions = getModelActionsForTableAsBulkActionOptions({ model, setSelectedModelActionDetails });
    const bulkActionOptions = (0, react_1.useMemo)(() => {
        if (excludeActions) {
            return getValidateActionsWithExclude(excludeActions, gadgetModelActionsAsBulkActionOptions);
        }
        if (actions) {
            return getValidatedIncludedActions(actions, gadgetModelActionsAsBulkActionOptions);
        }
        return gadgetModelActionsAsBulkActionOptions; // Default - No `actions` or `excludeActions` provided
    }, [gadgetModelActionsAsBulkActionOptions, actions, excludeActions]);
    return { selectedModelActionDetails, bulkActionOptions };
};
exports.useTableBulkActions = useTableBulkActions;
/**
 * Returns a list of BulkActionOption objects for given model
 */
const getModelActionsForTableAsBulkActionOptions = (props) => {
    const { model, setSelectedModelActionDetails } = props;
    const allModelActionsDetails = getModelActionsForTable({ model });
    return allModelActionsDetails
        .filter(isBulkActionThatOnlyTakesIds) // Only bulk actions that accept only IDs are currently supported
        .map((actionDetails) => ({
        humanizedName: (0, utils_js_1.humanizeCamelCase)(removeBulkPrefix(actionDetails.apiIdentifier)),
        selectModelAction: () => setSelectedModelActionDetails(actionDetails), // To open the corresponding modal
        apiIdentifier: lowercaseFirstChar(removeBulkPrefix(actionDetails.apiIdentifier)), // `bulk` prefix removed
        promoted: true,
        isDeleter: "isDeleter" in actionDetails ? actionDetails.isDeleter : false,
    }));
};
const isBulkActionThatOnlyTakesIds = (actionDetails) => actionDetails.isGadgetAction &&
    actionDetails.isBulk &&
    !actionDetails.acceptsModelInput && // Accepting modelInput guarantees that the action accepts more than just IDs
    (0, react_fast_compare_1.default)(actionDetails.variables, OnlyIdsAcceptedInputVariables);
// Expected variables for supported bulk actions
const OnlyIdsAcceptedInputVariables = {
    ids: {
        required: true,
        type: "[GadgetID!]",
    },
};
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
    return modelActions.map((func) => ({
        apiIdentifier: func.functionName,
        isDeleter: func.isDeleter,
        isBulk: func.isBulk,
        acceptsModelInput: func.acceptsModelInput,
        variables: func.variables,
        isGadgetAction: true,
    }));
};
function getValidateActionsWithExclude(excludeActions, gadgetModelActionsAsBulkActionOptions) {
    for (const excludedAction of excludeActions) {
        if (!gadgetModelActionsAsBulkActionOptions.find((action) => action.apiIdentifier === excludedAction)) {
            throw new Error(`Excluded action '${excludedAction}' not found in model`);
        }
    }
    return gadgetModelActionsAsBulkActionOptions.filter((action) => !excludeActions.includes(action.apiIdentifier));
}
const getValidatedIncludedActions = (actions, gadgetModelActionsAsBulkActionOptions) => {
    const bulkActions = [];
    for (const action of actions) {
        if (typeof action === "string") {
            bulkActions.push(getValidatedBulkModelActionOption(gadgetModelActionsAsBulkActionOptions, action));
        }
        else {
            if (!("action" in action)) {
                throw new Error("Custom action objects must have an 'action' property");
            }
            if (typeof action.action === "string") {
                // Relabelled Gadget model action
                bulkActions.push({
                    ...getValidatedBulkModelActionOption(gadgetModelActionsAsBulkActionOptions, action.action),
                    humanizedName: action.label,
                    promoted: action.promoted ?? false,
                });
            }
            else {
                // Custom callback function
                bulkActions.push({
                    humanizedName: action.label,
                    action: action.action,
                    apiIdentifier: action.label,
                    promoted: action.promoted ?? false,
                });
            }
        }
    }
    return bulkActions;
};
const removeBulkPrefix = (actionName) => (actionName.startsWith("bulk") ? actionName.slice(4) : actionName);
const lowercaseFirstChar = (input) => {
    return input.length === 0 ? "" : `${input.charAt(0).toLowerCase()}${input.slice(1)}`;
};
const getValidatedBulkModelActionOption = (gadgetModelActionsAsBulkActionOptions, action) => {
    const modelAction = gadgetModelActionsAsBulkActionOptions.find((actionOption) => actionOption.apiIdentifier === action);
    if (!modelAction) {
        throw new Error(`'${action}' is not a valid action on the model`);
    }
    return modelAction;
};
//# sourceMappingURL=useTableBulkActions.js.map