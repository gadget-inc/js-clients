import { Button, ButtonProps } from "@shopify/polaris";
import React, { ReactNode } from "react";

/**
 * Button for submitting the AutoForm values
 *
 * The submission is handled by the  `submit` property on Button
 * Alternatively, the `submit` function from useAutoFormMetadata can be used to submit the form
 *
 * const { submit } = useAutoFormMetadata();
 *
 */
export const PolarisAutoSubmit = (
  props: {
    children?: ReactNode;
    isSubmitting?: boolean;
  } & Omit<ButtonProps, "children">
) => {
  return (
    <Button submit loading={props.isSubmitting}>
      {(props.children as any) ?? "Submit"}
    </Button>
  );
};
