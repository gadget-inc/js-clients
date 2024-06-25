import { Alert, AlertProps, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAutoFormMetadata } from "../../AutoFormContext.js";

export const MUISubmitResultBanner = (props: { successBannerProps?: AlertProps; errorBannerProps?: AlertProps }) => {
  const { successBannerProps, errorBannerProps } = props;

  const { metadata, submitResult } = useAutoFormMetadata();

  const [isManuallyClosed, setIsManuallyClosed] = useState(false);
  const hideBanner = () => setIsManuallyClosed(true);

  useEffect(() => {
    setIsManuallyClosed(false);
  }, [submitResult?.isSuccessful, submitResult?.error]);

  const hideBannerButton = <Button onClick={hideBanner}>X</Button>;

  if (!isManuallyClosed) {
    if (submitResult?.isSuccessful) {
      return (
        <Alert severity="success" {...successBannerProps}>
          {`Saved ${`${metadata?.name} `}successfully.`}
          {hideBannerButton}
        </Alert>
      );
    } else if (submitResult?.error) {
      return (
        <Alert severity="error" {...errorBannerProps}>
          {submitResult?.error.message}
          {hideBannerButton}
        </Alert>
      );
    }
  }

  return <></>;
};
