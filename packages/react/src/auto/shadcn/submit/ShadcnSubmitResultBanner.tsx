import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";
import type { ShadcnElements } from "../elements.js";

export const makeSubmitResultBanner = <Elements extends Partial<ShadcnElements>>({ Alert, AlertTitle, AlertDescription }: Elements) => {
  if (!Alert || !AlertTitle || !AlertDescription) {
    throw new Error("Alert components are required");
  }

  const ShadcnSubmitSuccessfulBanner = (props: any) => {
    const { show, successful, title, hide } = useResultBannerController();

    if (!show || !successful) {
      return null;
    }

    return (
      <Alert {...props}>
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>{title || "Operation completed successfully"}</AlertDescription>
        <button aria-label="Dismiss notification" onClick={hide}>
          Dismiss
        </button>
      </Alert>
    );
  };

  const ShadcnSubmitErrorBanner = (props: any) => {
    const { show, successful, hide, title } = useResultBannerController();

    if (!show || successful) {
      return null;
    }
    return (
      <Alert variant="destructive" {...props} {...props}>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{title || "An error occurred"}</AlertDescription>
        <button aria-label="Dismiss notification" onClick={hide}>
          Dismiss
        </button>
      </Alert>
    );
  };

  const ShadcnSubmitResultBanner = (props: { successBannerProps?: any; errorBannerProps?: any }) => {
    return (
      <>
        <ShadcnSubmitSuccessfulBanner {...props.successBannerProps} />
        <ShadcnSubmitErrorBanner {...props.errorBannerProps} />
      </>
    );
  };

  return {
    ShadcnSubmitResultBanner,
    ShadcnSubmitSuccessfulBanner,
    ShadcnSubmitErrorBanner,
  };
};
