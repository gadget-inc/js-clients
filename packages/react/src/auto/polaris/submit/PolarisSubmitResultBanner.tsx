import { Banner, BannerProps } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import { useAutoFormMetadata } from "../../AutoFormContext.js";

export const PolarisSubmitResultBanner = (props: { successBannerProps?: BannerProps; errorBannerProps?: BannerProps }) => {
  const { successBannerProps, errorBannerProps } = props;

  const { metadata, submitResult } = useAutoFormMetadata();

  const [isManuallyClosed, setIsManuallyClosed] = useState(false);
  const hideBanner = () => setIsManuallyClosed(true);

  useEffect(() => {
    setIsManuallyClosed(false);
  }, [submitResult?.isSuccessful, submitResult?.error]);

  if (!isManuallyClosed) {
    if (submitResult?.isSuccessful) {
      return (
        <Banner
          title={`Saved ${`${metadata?.name} `}successfully.`}
          tone="success"
          {...successBannerProps}
          onDismiss={() => {
            hideBanner();
            successBannerProps?.onDismiss?.();
          }}
        />
      );
    } else if (submitResult?.error) {
      return (
        <Banner
          title={submitResult?.error.message}
          tone="critical"
          {...errorBannerProps}
          onDismiss={() => {
            hideBanner?.();
            errorBannerProps?.onDismiss?.();
          }}
        />
      );
    }
  }

  return <></>;
};
