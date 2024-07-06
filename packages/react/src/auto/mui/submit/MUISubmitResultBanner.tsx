import type { AlertProps } from "@mui/material";
import { Alert, Button } from "@mui/material";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";

export const MUISubmitResultBanner = (props: { successBannerProps?: AlertProps; errorBannerProps?: AlertProps }) => {
  const { show, hide, successful, title } = useResultBannerController();

  if (show) {
    const bannerProps = successful ? props.successBannerProps : props.errorBannerProps;

    return (
      <Alert severity={successful ? "success" : "error"} {...bannerProps}>
        {title}
        <Button onClick={hide}>X</Button>
      </Alert>
    );
  }

  return null;
};
