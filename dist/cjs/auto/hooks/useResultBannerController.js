"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResultBannerController = void 0;
const react_1 = require("react");
const metadata_js_1 = require("../../metadata.js");
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const useResultBannerController = () => {
    const { metadata, submitResult } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const [isDismissed, setIsDismissed] = (0, react_1.useState)(false);
    const hide = (0, react_1.useCallback)(() => setIsDismissed(true), []);
    (0, react_1.useEffect)(() => {
        setIsDismissed(false);
    }, [submitResult?.isSuccessful, submitResult?.error]);
    let title;
    if (submitResult?.isSuccessful) {
        title = metadata && (0, metadata_js_1.isModelActionMetadata)(metadata) ? `Saved ${`${metadata?.name} `}successfully.` : `${metadata?.name} succeeded.`;
    }
    else {
        title = submitResult?.error?.message;
    }
    return {
        show: !isDismissed && (submitResult?.isSuccessful || submitResult?.error),
        hide,
        successful: submitResult?.isSuccessful,
        title,
    };
};
exports.useResultBannerController = useResultBannerController;
//# sourceMappingURL=useResultBannerController.js.map