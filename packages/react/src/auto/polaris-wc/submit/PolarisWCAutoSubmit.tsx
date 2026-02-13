import type { ReactNode } from "react";
import React from "react";
import { useAutoFormMetadata } from "../../AutoFormContext.js";

export interface PolarisWCAutoSubmitProps {
  children?: ReactNode;
  isSubmitting?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  tone?: "critical";
  disabled?: boolean;
}

/**
 * Button for submitting the AutoForm values using Polaris Web Components
 *
 * The submission is handled by the form's onSubmit handler
 * Alternatively, the `submit` function from useAutoFormMetadata can be used to submit the form
 *
 * const { submit } = useAutoFormMetadata();
 *
 */
export const PolarisWCAutoSubmit = (props: PolarisWCAutoSubmitProps) => {
  const { submitResult } = useAutoFormMetadata();
  const isSubmitting = submitResult.isSubmitting;
  const { children, isSubmitting: propsIsSubmitting, variant = "primary", tone, disabled, ...rest } = props;

  return (
    <s-button type="submit" loading={propsIsSubmitting ?? isSubmitting} variant={variant} tone={tone} disabled={disabled} {...rest}>
      {(children as any) ?? "Submit"}
    </s-button>
  );
};
