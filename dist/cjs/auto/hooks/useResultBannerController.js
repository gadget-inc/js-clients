"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResultBannerController = void 0;
const react_1 = require("react");
const metadata_js_1 = require("../../metadata.js");
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const useResultBannerController = () => {
    const { metadata, submitResult } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const [isDismissed, setIsDismissed] = (0, react_1.useState)(true);
    const [mostRecentSubmitResult, setMostRecentSubmitResult] = (0, react_1.useState)(undefined);
    const hide = (0, react_1.useCallback)(() => setIsDismissed(true), []);
    (0, react_1.useEffect)(() => {
        if (!submitResult.isSuccessful && !submitResult.error) {
            return;
        }
        setMostRecentSubmitResult(submitResult);
        setIsDismissed(false);
    }, [submitResult]);
    const title = (0, react_1.useMemo)(() => {
        if (mostRecentSubmitResult?.isSuccessful) {
            return metadata && (0, metadata_js_1.isModelActionMetadata)(metadata) ? `Saved ${`${metadata?.name} `}successfully.` : `${metadata?.name} succeeded.`;
        }
        if (mostRecentSubmitResult?.error) {
            return mostRecentSubmitResult?.error?.message;
        }
    }, [mostRecentSubmitResult, metadata]);
    return {
        show: !isDismissed,
        hide,
        successful: mostRecentSubmitResult?.isSuccessful,
        title,
    };
};
exports.useResultBannerController = useResultBannerController;
//# sourceMappingURL=useResultBannerController.js.map