"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutoButtonController = void 0;
const react_1 = require("react");
const metadata_js_1 = require("../../metadata.js");
const useAction_js_1 = require("../../useAction.js");
const useGlobalAction_js_1 = require("../../useGlobalAction.js");
const useAutoButtonController = (props) => {
    const { action, variables, onAction, onSuccess, onError, ...buttonProps } = props;
    const { metadata, fetching: fetchingMetadata, error: metadataError } = (0, metadata_js_1.useActionMetadata)(action);
    const [{ data: result, fetching: fetchingActionResult, error }, runAction] = 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    action.type == "globalAction" ? (0, useGlobalAction_js_1.useGlobalAction)(action) : (0, useAction_js_1.useAction)(action);
    let label;
    let isDestructive = false;
    if (metadata) {
        if ((0, metadata_js_1.isModelActionMetadata)(metadata)) {
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
    const run = (0, react_1.useCallback)(async () => {
        onAction?.();
        const result = await runAction(variables);
        if (result.error) {
            onError?.(result.error, result);
        }
        else {
            onSuccess?.(result);
        }
    }, [onAction, runAction, variables, onError, onSuccess]);
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
exports.useAutoButtonController = useAutoButtonController;
//# sourceMappingURL=useAutoButtonController.js.map