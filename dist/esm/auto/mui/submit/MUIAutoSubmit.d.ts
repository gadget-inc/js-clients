import type { LoadingButtonProps } from "@mui/lab";
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
export declare const MUIAutoSubmit: (props: LoadingButtonProps) => React.JSX.Element;
