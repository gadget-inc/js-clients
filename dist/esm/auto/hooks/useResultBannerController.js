import { useCallback, useEffect, useMemo, useState } from "react";
import { isModelActionMetadata } from "../../metadata.js";
import { useAutoFormMetadata } from "../AutoFormContext.js";
export const useResultBannerController = () => {
    const { metadata, submitResult } = useAutoFormMetadata();
    const [isDismissed, setIsDismissed] = useState(true);
    const [mostRecentSubmitResult, setMostRecentSubmitResult] = useState(undefined);
    const hide = useCallback(() => setIsDismissed(true), []);
    useEffect(() => {
        if (!submitResult.isSuccessful && !submitResult.error) {
            return;
        }
        setMostRecentSubmitResult(submitResult);
        setIsDismissed(false);
    }, [submitResult]);
    const title = useMemo(() => {
        if (mostRecentSubmitResult?.isSuccessful) {
            return metadata && isModelActionMetadata(metadata) ? `Saved ${`${metadata?.name} `}successfully.` : `${metadata?.name} succeeded.`;
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
//# sourceMappingURL=useResultBannerController.js.map