"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutoButtonController = void 0;
const react_1 = require("react");
const metadata_js_1 = require("../../metadata.js");
const useAction_js_1 = require("../../useAction.js");
const useGlobalAction_js_1 = require("../../useGlobalAction.js");
const useAutoButtonController = (props) => {
    const { action, variables, onSuccess, onError, ...buttonProps } = props;
    const { metadata, fetching: fetchingMetadata, error: metadataError } = (0, metadata_js_1.useActionMetadata)(action);
    const [{ data: result, fetching: fetchingAction, error }, runAction] = 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    action.type == "globalAction" ? (0, useGlobalAction_js_1.useGlobalAction)(action) : (0, useAction_js_1.useAction)(action);
    let label;
    let isDestructive = false;
    if (metadata) {
        if ((0, metadata_js_1.isActionMetadata)(metadata)) {
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
        const result = await runAction(variables);
        if (result.error) {
            onError?.(result.error, result);
        }
        else {
            onSuccess?.(result);
        }
    }, [runAction, variables, onSuccess, onError]);
    return {
        result,
        fetching: fetchingMetadata || fetchingAction,
        running: fetchingAction,
        error: metadataError || error,
        label,
        isDestructive,
        run,
        buttonProps,
    };
};
exports.useAutoButtonController = useAutoButtonController;
//# sourceMappingURL=useAutoButtonController.js.map