import type { BannerProps } from "@shopify/polaris";
import { Banner } from "@shopify/polaris";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";

type PolarisSubmitResultBannerProps = { successBannerProps?: BannerProps; errorBannerProps?: BannerProps };

/**
 * A banner that displays the result of an AutoForm submission.
 * @param props.successBannerProps - The props for the successful banner
 * @param props.errorBannerProps - The props for the error banner
 * @returns The banner component
 */
export const PolarisSubmitResultBanner = (props: PolarisSubmitResultBannerProps) => {
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
