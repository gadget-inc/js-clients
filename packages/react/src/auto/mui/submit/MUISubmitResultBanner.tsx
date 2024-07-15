import type { AlertProps } from "@mui/material";
import { Alert, Button } from "@mui/material";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";

const MUIBaseSubmitResultBanner = (props: AlertProps) => {
  const { hide, successful, title } = useResultBannerController();

  return (
    <Alert severity={successful ? "success" : "error"} {...props}>
      {title}
      <Button onClick={hide}>X</Button>
    </Alert>
  );
};

export const MUISubmitResultBanner = (props: { successBannerProps?: AlertProps; errorBannerProps?: AlertProps }) => {
  return (
    <>
      <MUISubmitSuccessfulBanner {...props.successBannerProps} />
      <MUISubmitErrorBanner {...props.errorBannerProps} />
    </>
  );
};

export const MUISubmitSuccessfulBanner = (props: AlertProps) => {
  const { show, successful } = useResultBannerController();
  return show && successful ? <MUIBaseSubmitResultBanner {...props} /> : null;
};

export const MUISubmitErrorBanner = (props: AlertProps) => {
  const { show, successful } = useResultBannerController();
  return show && !successful ? <MUIBaseSubmitResultBanner {...props} /> : null;
};
