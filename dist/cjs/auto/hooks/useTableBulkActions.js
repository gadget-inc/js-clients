"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTableBulkActions = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const react_fast_compare_1 = tslib_1.__importDefault(require("react-fast-compare"));
const utils_js_1 = require("../../utils.js");
const useTableBulkActions = (props) => {
    const { model, actions, excludeActions } = props;
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
            return getValidatedIncludedActions(actions, gadgetModelActionsAsBulkActionOptions, setSelectedModelActionDetails);
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
function getValidatedIncludedActions(actions, gadgetModelActionsAsBulkActionOptions, setSelectedModelActionDetails) {
    const bulkActions = [];
    for (const action of actions) {
        if (typeof action === "string") {
            // Ensure that this is a real action name
            const modelAction = gadgetModelActionsAsBulkActionOptions.find((actionOption) => actionOption.apiIdentifier === action);
            if (!modelAction) {
                throw new Error(`Action '${action}' not found in model`);
            }
            bulkActions.push(modelAction);
        }
        else {
            // Custom callback/renderer
            validateCallbackXorRender(action);
            const customCallbackModelActionDetails = {
                isGadgetAction: false,
                apiIdentifier: action.label,
                render: "render" in action ? action.render ?? undefined : undefined,
            };
            bulkActions.push({
                humanizedName: action.label,
                selectModelAction: () => setSelectedModelActionDetails(customCallbackModelActionDetails),
                callback: "callback" in action ? action.callback ?? undefined : undefined,
                apiIdentifier: action.label,
            });
        }
    }
    return bulkActions;
}
/**
 * Ensures that the action has either a callback or a render, but not both
 */
const validateCallbackXorRender = (action) => {
    const label = action.label;
    if ("callback" in action && "render" in action) {
        throw new Error(`Cannot have both callback and render in action with label: "${label}"`);
    }
    if (!("callback" in action) && !("render" in action)) {
        throw new Error(`Missing required property "callback" | "render" in action with label: "${label}"`);
    }
};
const removeBulkPrefix = (actionName) => (actionName.startsWith("bulk") ? actionName.slice(4) : actionName);
const lowercaseFirstChar = (input) => {
    return input.length === 0 ? "" : `${input.charAt(0).toLowerCase()}${input.slice(1)}`;
};
//# sourceMappingURL=useTableBulkActions.js.map