import React from "react";
import { autoInput } from "../../AutoInput.js";
import type { AutoRichTextInputProps } from "../../shared/AutoRichTextInputProps.js";

const LazyLoadedPolarisAutoRichTextInput = React.lazy(() => import("./PolarisAutoRichTextInput.js"));

export const PolarisAutoRichTextInput = autoInput((props: AutoRichTextInputProps) => {
  return (
    <>
      <LazyLoadedPolarisAutoRichTextInput {...props} />
    </>
  );
});
