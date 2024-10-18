import React from "react";
import type { AutoRichTextInputProps } from "../../../auto/shared/AutoRichTextInputProps.js";
import { autoInput } from "../../AutoInput.js";

// lazy import for smaller bundle size by default
const LazyLoadedMUIAutoRichTextInput = React.lazy(() => import("./MUIAutoRichTextInput.js"));

export const MUIAutoRichTextInput = autoInput((props: AutoRichTextInputProps) => {
  return (
    <>
      <LazyLoadedMUIAutoRichTextInput {...props} />
    </>
  );
});
