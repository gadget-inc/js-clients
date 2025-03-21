import React from "react";
import { autoInput } from "../../AutoInput.js";
import type { AutoRichTextInputProps } from "../../shared/AutoRichTextInputProps.js";

const LazyLoadedPolarisAutoRichTextInput = React.lazy(() => import("./PolarisAutoRichTextInput.js"));

/**
 * A rich text input component for use within <AutoForm></AutoForm>
 * Requires `"@mdxeditor/editor"` as a peer dependency to be rendered
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoRichTextInput field="richTextField" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the RichText field.
 * @param props.label - Label of the RichText input.
 * @returns The AutoRichTextInput component.
 */
export const PolarisAutoRichTextInput = autoInput((props: AutoRichTextInputProps) => {
  return (
    <>
      <LazyLoadedPolarisAutoRichTextInput {...props} />
    </>
  );
});
