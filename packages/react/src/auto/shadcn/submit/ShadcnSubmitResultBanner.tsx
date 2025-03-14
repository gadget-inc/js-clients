import { XIcon } from "lucide-react";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";
import type { AlertProps, ShadcnElements } from "../elements.js";

export const makeSubmitResultBanner = <Elements extends Partial<ShadcnElements>>({
  Alert,
  AlertTitle,
  AlertDescription,
  Button,
}: Elements) => {
  if (!Alert || !AlertTitle || !AlertDescription || !Button) {
    throw new Error("Alert components are required");
  }

  const SubmitSuccessfulBanner = (props: AlertProps) => {
    const { show, successful, title, hide } = useResultBannerController();

    if (!show || !successful) {
      return null;
    }

    return (
      <Alert className="flex flex-row" {...props}>
        <div className="flex flex-col">
          <AlertTitle className="text-lg font-bold">Success</AlertTitle>
          <AlertDescription>{title || "Operation completed successfully"}</AlertDescription>
        </div>
        <Button className="ml-auto" variant="ghost" size="icon" aria-label="Dismiss notification" onClick={hide}>
          <XIcon />
        </Button>
      </Alert>
    );
  };

  const SubmitErrorBanner = (props: AlertProps) => {
    const { show, successful, hide, title } = useResultBannerController();

    if (!show || successful) {
      return null;
    }

    return (
      <Alert className="flex flex-row" variant="destructive" {...props}>
        <div className="flex flex-col">
          <AlertTitle className="text-lg font-bold">Error</AlertTitle>
          <AlertDescription>{title || "An error occurred"}</AlertDescription>
        </div>
        <Button className="ml-auto" variant="ghost" size="icon" aria-label="Dismiss notification" onClick={hide}>
          <XIcon />
        </Button>
      </Alert>
    );
  };

  const SubmitResultBanner = (props: { successBannerProps?: AlertProps; errorBannerProps?: AlertProps }) => {
    return (
      <>
        <SubmitSuccessfulBanner {...props.successBannerProps} />
        <SubmitErrorBanner {...props.errorBannerProps} />
      </>
    );
  };

  return {
    SubmitResultBanner,
    SubmitSuccessfulBanner,
    SubmitErrorBanner,
  };
};
