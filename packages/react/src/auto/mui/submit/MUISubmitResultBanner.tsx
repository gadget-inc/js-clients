import type { AlertProps } from "@mui/material";
import { Alert, Button } from "@mui/material";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";

type MUISubmitResultBannerProps = { successBannerProps?: AlertProps; errorBannerProps?: AlertProps };

/**
 * A banner that displays the result of an AutoForm submission.
 * @param props.successBannerProps - The props for the successful banner
 * @param props.errorBannerProps - The props for the error banner
 * @returns The banner component
 */
export const MUISubmitResultBanner = (props: MUISubmitResultBannerProps) => {
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
