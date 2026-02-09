import React, { useState } from "react";
import { useFormContext } from "../../../../useActionForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext, useAutoRelationship, useRelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { useHasManyController } from "../../../hooks/useHasManyController.js";
import { getRecordAsOption, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import { useRequiredChildComponentsValidator } from "../../../hooks/useRequiredChildComponentsValidator.js";
import type { AutoRelationshipFormProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import { getRecordLabelObject } from "../../../interfaces/AutoRelationshipInputProps.js";
import { PolarisWCEditableOptionLabelButton } from "./PolarisWCEditableOptionLabelButton.js";

type HasManyFormProps = Omit<AutoRelationshipFormProps, "recordFilter">;

const useRecordLabelObjectFromProps = (props: HasManyFormProps) => {
  const recordLabelObject = getRecordLabelObject(props.recordLabel);
  const primaryLabel = useOptionLabelForField(props.field, recordLabelObject?.primary);
  return { ...recordLabelObject, primary: primaryLabel };
};

/**
 * A hasMany field form component for use within <AutoForm></AutoForm> components using Polaris Web Components.
 * This component allows related model records to be created, updated, or deleted from the current model.
 * Fields on the related model record are controlled with the nested <AutoInput/> child components.
 *
 * @example
 * ```tsx
 * <AutoForm action={api.author.create}>
 *   <AutoHasManyForm field="books" >
 *     <AutoInput field="title" />
 *   </AutoHasManyForm>
 * </AutoForm>
 * ```
 * @param props.field - The hasMany field API identifier
 * @param props.label - The label of the hasMany form component
 * @param props.children - The child components to be rendered within the form. This is intended to be used with <AutoInput/> and will be rendered for each child record.
 * @param props.recordLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The hasMany field form component
 */
export const PolarisWCAutoHasManyForm = autoRelationshipForm((props: HasManyFormProps) => {
  useRequiredChildComponentsValidator(props, "AutoHasManyForm");
  const { metadata } = useAutoRelationship({ field: props.field });
  const { getValues } = useFormContext();

  const { fieldArray, fieldArrayPath } = useHasManyController({ field: props.field });
  const { fields, append, remove } = fieldArray;
  const relationshipContext = useRelationshipContext();

  if (metadata.configuration.__typename !== "GadgetHasManyConfig") {
    throw new Error("PolarisWCAutoHasManyForm can only be used for HasMany fields");
  }

  const modelName = metadata.configuration.relatedModel?.name;

  const recordLabel = useRecordLabelObjectFromProps(props);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  return (
    <>
      <div style={{ marginBottom: "8px" }}>{props.label ?? <s-text>{metadata.name}</s-text>}</div>
      <div
        style={{
          border: "1px solid var(--p-color-border, #dfe3e8)",
          borderRadius: "var(--p-border-radius-200, 8px)",
        }}
      >
        {fields.flatMap((field, idx) => {
          // since we don't put full data in the field array when we append, we need to
          // get the value directly from the form state
          const record = getValues(`${fieldArrayPath}.${idx}`);

          if (!record) {
            return [];
          }

          const option = getRecordAsOption(record, recordLabel);

          const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
          const metadataPathPrefix = relationshipContext?.transformMetadataPath
            ? relationshipContext.transformMetadataPath(props.field)
            : props.field;

          return (
            <div
              key={field._fieldArrayKey}
              id={`${pathPrefix}.${idx}`}
              style={{
                borderBottom: "1px solid var(--p-color-border, #dfe3e8)",
              }}
            >
              {editingIndex === idx ? (
                <div style={{ padding: "12px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <RelationshipContext.Provider
                      value={{
                        transformPath: (path) => `${pathPrefix}.${idx}.${path}`,
                        transformMetadataPath: (path) => `${metadataPathPrefix}.${path}`,
                        fieldArray,
                      }}
                    >
                      {props.children}
                    </RelationshipContext.Provider>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <s-button tone="critical" onClick={() => remove(idx)} id={`deleteButton_${metadataPathPrefix}.${idx}`}>
                        Delete
                      </s-button>
                      <s-button variant="primary" onClick={() => setEditingIndex(null)} id={`confirmButton_${metadataPathPrefix}.${idx}`}>
                        Confirm
                      </s-button>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setEditingIndex(idx)}
                  style={{
                    display: "flex",
                    width: "100%",
                    padding: "12px",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--p-color-bg-surface-hover, #f9fafb)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <PolarisWCEditableOptionLabelButton option={option} />
                </button>
              )}
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => {
            append({});
            setEditingIndex(fields.length);
          }}
          style={{
            display: "flex",
            width: "100%",
            padding: "12px",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            textAlign: "left",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--p-color-bg-surface-hover, #f9fafb)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          <s-icon type="plus" />
          <s-text>Add {modelName}</s-text>
        </button>
      </div>
    </>
  );
});
