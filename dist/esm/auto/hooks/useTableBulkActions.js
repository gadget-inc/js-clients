import React, { useMemo } from "react";
import deepEqual from "react-fast-compare";
import { humanizeCamelCase } from "../../utils.js";
export const useTableBulkActions = (props) => {
    const [selectedModelActionDetails, setSelectedModelActionDetails] = React.useState(undefined);
    const allModelActionsDetails = getModelActionsForTable({ model: props.model });
    const bulkActionOptions = useMemo(() => {
        return allModelActionsDetails
            .filter((actionDetails) => 
        // Only bulk actions that accept only IDs are currently supported
        actionDetails.isBulk &&
            !actionDetails.acceptsModelInput && // Accepting modelInput guarantees that the action accepts more than just IDs
            deepEqual(actionDetails.variables, OnlyIdsAcceptedInputVariables))
            .map((actionDetails) => ({
            humanizedName: humanizeCamelCase(actionDetails.apiIdentifier),
            selectModelAction: () => setSelectedModelActionDetails(actionDetails), // To open the corresponding modal
        }));
    }, [allModelActionsDetails]);
    return { selectedModelActionDetails, bulkActionOptions };
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