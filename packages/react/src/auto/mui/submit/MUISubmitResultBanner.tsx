import type { AlertProps } from "@mui/material";
import { Alert, Button } from "@mui/material";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";

export const MUISubmitResultBanner = (props: { successBannerProps?: AlertProps; errorBannerProps?: AlertProps }) => {
  return (
    <>
      <MUISubmitSuccessfulBanner {...props.successBannerProps} />
      <MUISubmitErrorBanner {...props.errorBannerProps} />
    </>
  );
};

export const MUISubmitSuccessfulBanner = (props: AlertProps) => {
  const { show, successful, title, hide } = useResultBannerController();
  if (!show || !successful) {
    return null;
  }

  return (
    <Alert severity={"success"} {...props}>
      {title}
      <CloseBannerButton onClick={hide} />
    </Alert>
  );
};

export const MUISubmitErrorBanner = (props: AlertProps) => {
  const { show, successful, title, hide } = useResultBannerController();
  if (!show || successful) {
    return null;
  }

  return (
    <Alert severity={"error"} {...props}>
      {title}
      <CloseBannerButton onClick={hide} />
    </Alert>
  );
};

const CloseBannerButton = (props: { onClick: () => void }) => {
  return (
    <Button onClick={props.onClick} aria-label="Dismiss notification">
      X
    </Button>
  );
};
