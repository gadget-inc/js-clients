import type { ReactNode } from "react";
import React from "react";
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
export declare const PolarisWCAutoSubmit: (props: PolarisWCAutoSubmitProps) => React.JSX.Element;
