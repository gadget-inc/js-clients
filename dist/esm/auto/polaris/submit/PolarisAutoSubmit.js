import { Button } from "@shopify/polaris";
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
export const PolarisAutoSubmit = (props) => {
    return (React.createElement(Button, { submit: true, loading: props.isSubmitting }, props.children ?? "Submit"));
};
//# sourceMappingURL=PolarisAutoSubmit.js.map