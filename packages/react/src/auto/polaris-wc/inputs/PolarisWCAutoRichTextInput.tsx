import type { ComponentProps } from "react";
import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import AutoRichTextInput from "../../shared/AutoRichTextInput.js";

/**
 * A rich text input within AutoForm using Polaris Web Components.
 * Uses the MDX editor (same as the non-WC Polaris version).
 * Requires `"@mdxeditor/editor"` as a peer dependency.
 *
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoRichTextInput field="description" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the RichText field.
 * @param props.label - Label of the RichText input.
 * @returns The AutoRichTextInput component.
 */
const PolarisWCAutoRichTextInput = autoInput((props: ComponentProps<typeof AutoRichTextInput>) => {
  const { metadata } = useFieldMetadata(props.field);
  const label: string = typeof props.label === "string" ? props.label : String(metadata.name ?? "");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {label && (
        <s-text>
          {label}
          {metadata.requiredArgumentForInput && (
            <span style={{ marginLeft: "2px", color: "var(--p-color-text-critical, #d72c0d)" }}>*</span>
          )}
        </s-text>
      )}
      <div className="Autoform-RichTextInput">
        <AutoRichTextInput {...props} />
      </div>
    </div>
  );
});

export default PolarisWCAutoRichTextInput;
