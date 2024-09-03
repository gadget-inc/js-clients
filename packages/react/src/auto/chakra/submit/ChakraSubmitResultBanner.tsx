import type { AlertProps } from "@chakra-ui/react";
import { Alert } from "@chakra-ui/react";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";

export const ChakraSubmitResultBanner = (props: { successBannerProps?: AlertProps; errorBannerProps?: AlertProps }) => {
  return (
    <>
      <ChakraSubmitSuccessfulBanner {...props.successBannerProps} />
      <ChakraSubmitErrorBanner {...props.errorBannerProps} />
    </>
  );
};

export const ChakraSubmitSuccessfulBanner = (props: AlertProps) => {
  const { show, hide, successful, ...rest } = useResultBannerController();
  if (!show || !successful) {
    return null;
  }
  return <Alert tone="success" onDismiss={hide} {...rest} {...props} />;
};

export const ChakraSubmitErrorBanner = (props: AlertProps) => {
  const { show, hide, successful, ...rest } = useResultBannerController();
  if (!show || successful) {
    return null;
  }
  return <Alert tone="critical" onDismiss={hide} {...rest} {...props} />;
};
