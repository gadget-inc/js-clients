import type { BannerProps } from "@shopify/polaris";
import { Banner } from "@shopify/polaris";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";

const PolarisBaseSubmitResultBanner = (props: BannerProps) => {
  const { hide, successful, title } = useResultBannerController();

  return (
    <Banner
      title={title}
      tone={successful ? "success" : "critical"}
      {...props}
      onDismiss={() => {
        hide();
        props?.onDismiss?.();
      }}
    />
  );
};

export const PolarisSubmitResultBanner = (props: { successBannerProps?: BannerProps; errorBannerProps?: BannerProps }) => {
  return (
    <>
      <PolarisSubmitSuccessfulBanner {...props.successBannerProps} />
      <PolarisSubmitErrorBanner {...props.errorBannerProps} />
    </>
  );
};

export const PolarisSubmitSuccessfulBanner = (props: BannerProps) => {
  const { show, successful } = useResultBannerController();
  return show && successful ? <PolarisBaseSubmitResultBanner {...props} /> : null;
};

export const PolarisSubmitErrorBanner = (props: BannerProps) => {
  const { show, successful } = useResultBannerController();
  return show && !successful ? <PolarisBaseSubmitResultBanner {...props} /> : null;
};
