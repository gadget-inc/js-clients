import { LoadingButton } from "@mui/lab";
import React from "react";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
/**
 * Button for submitting the AutoForm values
 *
 * The submission is handled by the `type="submit"` property on the LoadingButton component
 * Alternatively, the `submit` function from useAutoFormMetadata can be used to submit the form
 *
 * const { submit } = useAutoFormMetadata();
 *
 */
export const MUIAutoSubmit = (props) => {
    const { submitResult } = useAutoFormMetadata();
    const isSubmitting = submitResult.isSubmitting;
    return (React.createElement(LoadingButton, { type: "submit", loading: isSubmitting, ...props }, props.children ?? "Submit"));
};
//# sourceMappingURL=MUIAutoSubmit.js.map