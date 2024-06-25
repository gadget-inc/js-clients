import { Button } from "@shopify/polaris";
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
export const PolarisAutoSubmit = (props: { children?: ReactNode }) => {
  return <Button submit>{(props.children as any) ?? "Submit"}</Button>;
};
