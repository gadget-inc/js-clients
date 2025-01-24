import { XIcon } from "lucide-react";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";
import type { ShadcnElements } from "../elements.js";

export const makeSubmitResultBanner = <Elements extends Partial<ShadcnElements>>({
  Alert,
  AlertTitle,
  AlertDescription,
  Button,
}: Elements) => {
  if (!Alert || !AlertTitle || !AlertDescription || !Button) {
    throw new Error("Alert components are required");
  }

  const ShadcnSubmitSuccessfulBanner = (props: any) => {
    const { show, successful, title, hide } = useResultBannerController();

    if (!show || !successful) {
      return null;
    }

    return (
      <Alert className="relative p-4" {...props}>
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>{title || "Operation completed successfully"}</AlertDescription>
        <Button
          className="absolute top-2 right-2 h-4 w-4 cursor-pointer"
          variant="ghost"
          size="icon"
          aria-label="Dismiss notification"
          onClick={hide}
        >
          <XIcon />
        </Button>
      </Alert>
    );
  };

  const ShadcnSubmitErrorBanner = (props: any) => {
    const { show, successful, hide, title } = useResultBannerController();

    if (!show || successful) {
      return null;
    }

    return (
      <Alert className="relative" variant="destructive" {...props} {...props}>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{title || "An error occurred"}</AlertDescription>
        <Button
          className="absolute top-2 right-2 h-4 w-4 cursor-pointer"
          variant="ghost"
          size="icon"
          aria-label="Dismiss notification"
          onClick={hide}
        >
          <XIcon />
        </Button>
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
