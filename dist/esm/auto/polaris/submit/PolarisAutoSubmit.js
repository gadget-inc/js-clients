import { Button } from "@shopify/polaris";
import React from "react";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
/**
 * Button for submitting the AutoForm values
 *
 * The submission is handled by the  `submit` property on Button
 * Alternatively, the `submit` function from useAutoFormMetadata can be used to submit the form
 *
 * const { submit } = useAutoFormMetadata();
 *
 */
export const PolarisAutoSubmit = (props) => {
    const { submitResult } = useAutoFormMetadata();
    const isSubmitting = submitResult?.isSubmitting;
    return (React.createElement(Button, { submit: true, loading: props.isSubmitting ?? isSubmitting, ...props }, props.children ?? "Submit"));
};
//# sourceMappingURL=PolarisAutoSubmit.js.map