import { LoadingButton } from "@mui/lab";
import React from "react";
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
    return (React.createElement(LoadingButton, { type: "submit", ...props }, props.children ?? "Submit"));
};
//# sourceMappingURL=MUIAutoSubmit.js.map