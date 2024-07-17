import type { ComponentProps } from "react";
import React from "react";
import AutoRichTextInput from "../../shared/AutoRichTextInput.js";
import "../styles/rich-text.css";
import { MUIAutoFormControl } from "./MUIAutoFormControl.js";

export default function MUIAutoRichTextInput(props: ComponentProps<typeof AutoRichTextInput>) {
  return (
    <MUIAutoFormControl {...props}>
      <AutoRichTextInput {...props} />
    </MUIAutoFormControl>
  );
}
