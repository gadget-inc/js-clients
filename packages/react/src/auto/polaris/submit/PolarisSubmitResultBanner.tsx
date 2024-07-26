import type { BannerProps } from "@shopify/polaris";
import { Banner } from "@shopify/polaris";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";

export const PolarisSubmitResultBanner = (props: { successBannerProps?: BannerProps; errorBannerProps?: BannerProps }) => {
  return (
    <>
      <PolarisSubmitSuccessfulBanner {...props.successBannerProps} />
      <PolarisSubmitErrorBanner {...props.errorBannerProps} />
    </>
  );
};

export const PolarisSubmitSuccessfulBanner = (props: BannerProps) => {
  const { show, hide, successful, ...rest } = useResultBannerController();
  if (!show || !successful) {
    return null;
  }
  return <Banner tone="success" onDismiss={hide} {...rest} {...props} />;
};

export const PolarisSubmitErrorBanner = (props: BannerProps) => {
  const { show, hide, successful, ...rest } = useResultBannerController();
  if (!show || successful) {
    return null;
  }
  return <Banner tone="critical" onDismiss={hide} {...rest} {...props} />;
};
