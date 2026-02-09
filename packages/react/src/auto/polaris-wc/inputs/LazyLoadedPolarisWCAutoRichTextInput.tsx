import React from "react";
import { autoInput } from "../../AutoInput.js";
import type { AutoRichTextInputProps } from "../../shared/AutoRichTextInputProps.js";

const LazyLoadedPolarisWCAutoRichTextInput = React.lazy(() => import("./PolarisWCAutoRichTextInput.js"));

/**
 * A rich text input component for use within <AutoForm></AutoForm> using Polaris Web Components.
 * Lazy-loads the MDX editor to reduce bundle size.
 * Requires `"@mdxeditor/editor"` as a peer dependency to be rendered.
 *
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
export const PolarisWCAutoRichTextInput = autoInput((props: AutoRichTextInputProps) => {
  return <LazyLoadedPolarisWCAutoRichTextInput {...props} />;
});
