import React from "react";
import { AutoRichTextInputProps } from "../../shared/AutoRichTextInputProps.js";

const LazyLoadedPolarisAutoRichTextInput = React.lazy(() => import("./PolarisAutoRichTextInput.js"));

export const PolarisAutoRichTextInput = (props: AutoRichTextInputProps) => {
  return (
    <>
      <LazyLoadedPolarisAutoRichTextInput {...props} />
    </>
  );
};
