import type { ButtonProps } from "@shopify/polaris";
import type { ReactNode } from "react";
import React from "react";
/**
 * Button for submitting the AutoForm values
 *
 * The submission is handled by the  `submit` property on Button
 * Alternatively, the `submit` function from useAutoFormMetadata can be used to submit the form
 *
 * const { submit } = useAutoFormMetadata();
 *
 */
export declare const PolarisAutoSubmit: (props: {
    children?: ReactNode;
    isSubmitting?: boolean;
} & Omit<ButtonProps, "children">) => React.JSX.Element;
