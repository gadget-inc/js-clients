import { useCallback } from "react";
import { isModelActionMetadata, useActionMetadata } from "../../metadata.js";
import { useAction } from "../../useAction.js";
import { useGlobalAction } from "../../useGlobalAction.js";
export const useAutoButtonController = (props) => {
    const { action, variables, onStart, onSuccess, onError, ...buttonProps } = props;
    const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(action);
    const [{ data: result, fetching: fetchingActionResult, error }, runAction] = 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    action.type == "globalAction" ? useGlobalAction(action) : useAction(action);
    let label;
    let isDestructive = false;
    if (metadata) {
        if (isModelActionMetadata(metadata)) {
            label = `${metadata.action.name} ${metadata.name}`;
            isDestructive = metadata.action.isDeleteAction;
        }
        else {
            label = metadata.name;
        }
    }
    else {
        label = "loading...";
    }
    const run = useCallback(async () => {
        onStart?.();
        const result = await runAction(variables);
        if (result.error) {
            onError?.(result.error, result);
        }
        else {
            onSuccess?.(result);
        }
    }, [onStart, runAction, variables, onError, onSuccess]);
    return {
        result,
        fetching: fetchingMetadata || fetchingActionResult,
        running: fetchingActionResult,
        error: metadataError || error,
        label,
        isDestructive,
        run,
        buttonProps,
    };
};
//# sourceMappingURL=useAutoButtonController.js.map