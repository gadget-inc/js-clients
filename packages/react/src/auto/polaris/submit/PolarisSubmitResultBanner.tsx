import type { BannerProps } from "@shopify/polaris";
import { Banner } from "@shopify/polaris";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";

export const PolarisSubmitResultBanner = (props: { successBannerProps?: BannerProps; errorBannerProps?: BannerProps }) => {
  const { show, hide, successful, title } = useResultBannerController();

  if (show) {
    const bannerProps = successful ? props.successBannerProps : props.errorBannerProps;
    return (
      <Banner
        title={title}
        tone={successful ? "success" : "critical"}
        {...bannerProps}
        onDismiss={() => {
          hide();
          bannerProps?.onDismiss?.();
        }}
      />
    );
  }

  return null;
};
