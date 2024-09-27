import React from "react";
import { AutoRichTextInputProps } from "../../../auto/shared/AutoRichTextInputProps.js";

// lazy import for smaller bundle size by default
const LazyLoadedMUIAutoRichTextInput = React.lazy(() => import("./MUIAutoRichTextInput.js"));

export const MUIAutoRichTextInput = (props: AutoRichTextInputProps) => {
  return (
    <>
      <LazyLoadedMUIAutoRichTextInput {...props} />
    </>
  );
};
