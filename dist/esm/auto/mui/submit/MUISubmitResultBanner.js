import { Alert, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
export const MUISubmitResultBanner = (props) => {
    const { successBannerProps, errorBannerProps } = props;
    const { metadata, submitResult } = useAutoFormMetadata();
    const [isManuallyClosed, setIsManuallyClosed] = useState(false);
    const hideBanner = () => setIsManuallyClosed(true);
    useEffect(() => {
        setIsManuallyClosed(false);
    }, [submitResult?.isSuccessful, submitResult?.error]);
    const hideBannerButton = React.createElement(Button, { onClick: hideBanner }, "X");
    if (!isManuallyClosed) {
        if (submitResult?.isSuccessful) {
            return (React.createElement(Alert, { severity: "success", ...successBannerProps },
                `Saved ${`${metadata?.name} `}successfully.`,
                hideBannerButton));
        }
        else if (submitResult?.error) {
            return (React.createElement(Alert, { severity: "error", ...errorBannerProps },
                submitResult?.error.message,
                hideBannerButton));
        }
    }
    return React.createElement(React.Fragment, null);
};
//# sourceMappingURL=MUISubmitResultBanner.js.map