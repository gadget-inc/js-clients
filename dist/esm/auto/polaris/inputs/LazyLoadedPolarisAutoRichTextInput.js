import React from "react";
import { MissingMdxEditorErrorMessage } from "src/auto/shared/AutoRichTextInput.js";
import { autoInput } from "../../AutoInput.js";
const LazyLoadedPolarisAutoRichTextInput = React.lazy(() => import("./PolarisAutoRichTextInput.js").catch((error) => {
    const customError = new Error(MissingMdxEditorErrorMessage);
    // Preserve original error for debugging
    customError.originalError = error;
    throw customError;
}));
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
export const PolarisAutoRichTextInput = autoInput((props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(LazyLoadedPolarisAutoRichTextInput, { ...props })));
});
//# sourceMappingURL=LazyLoadedPolarisAutoRichTextInput.js.map