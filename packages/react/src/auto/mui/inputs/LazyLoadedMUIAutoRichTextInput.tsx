import React from "react";
import { AutoRichTextInputProps } from "../../../auto/shared/AutoRichTextInputProps.js";

// lazy import for smaller bundle size by default
const LazyLoadedMUIAutoRichTextInput = React.lazy(() => import("./MUIAutoRichTextInput.js"));

/**
 * A rich text input component for use within <AutoForm></AutoForm> components.
 * Requires `"@mdxeditor/editor"` as a peer dependency to be rendered
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoRichTextInput field="richTextField" />
 * </AutoForm>
 * ```
 * @param props.field - The RichText field API identifier
 * @param props.label - The label of the RichText input component
 * @returns The rich text input component
 */
export const MUIAutoRichTextInput = (props: AutoRichTextInputProps) => {
  return (
    <>
      <LazyLoadedMUIAutoRichTextInput {...props} />
    </>
  );
};
