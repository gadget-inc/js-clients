import React, { useCallback } from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";

export interface PolarisWCBannerProps {
  tone?: "success" | "warning" | "critical" | "info";
  title?: string;
  onDismiss?: () => void;
}

type PolarisWCSubmitResultBannerProps = {
  successBannerProps?: PolarisWCBannerProps;
  errorBannerProps?: PolarisWCBannerProps;
};

/**
 * A banner that displays the result of an AutoForm submission using Polaris Web Components.
 * @param props.successBannerProps - The props for the successful banner
 * @param props.errorBannerProps - The props for the error banner
 * @returns The banner component
 */
export const PolarisWCSubmitResultBanner = (props: PolarisWCSubmitResultBannerProps) => {
  return (
    <>
      <PolarisWCSubmitSuccessfulBanner {...props.successBannerProps} />
      <PolarisWCSubmitErrorBanner {...props.errorBannerProps} />
    </>
  );
};

export const PolarisWCSubmitSuccessfulBanner = (props: PolarisWCBannerProps) => {
  const { show, hide, successful, title } = useResultBannerController();

  const handleDismiss = useCallback(() => {
    hide();
    props.onDismiss?.();
  }, [hide, props.onDismiss]);

  if (!show || !successful) {
    return null;
  }

  return (
    <s-banner dismissible tone="success" onDismiss={handleDismiss} {...props}>
      {props.title ?? title}
    </s-banner>
  );
};

export const PolarisWCSubmitErrorBanner = (props: PolarisWCBannerProps) => {
  const { show, hide, successful, title } = useResultBannerController();

  const handleDismiss = useCallback(() => {
    hide();
    props.onDismiss?.();
  }, [hide, props.onDismiss]);

  if (!show || successful) {
    return null;
  }

  return (
    <s-banner dismissible tone="critical" onDismiss={handleDismiss} {...props}>
      {props.title ?? title}
    </s-banner>
  );
};
