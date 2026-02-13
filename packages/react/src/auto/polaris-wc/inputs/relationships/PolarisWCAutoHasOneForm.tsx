import React from "react";
import { useHasOneForm } from "../../../../useHasOneForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import type { AutoRelationshipFormProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import { PolarisWCEditableOptionLabelButton } from "./PolarisWCEditableOptionLabelButton.js";

/**
 * A hasOne field form component for use within <AutoForm></AutoForm> components using Polaris Web Components.
 * This component allows a single related model record to be created, updated, or deleted from the current model.
 * Fields on the related model record are controlled with the nested <AutoInput/> child components.
 *
 * @example
 * ```tsx
 * <AutoForm action={api.car.create}>
 *   <AutoHasOneForm field="engine" >
 *     <AutoInput field="horsepower" />
 *   </AutoHasOneForm>
 * </AutoForm>
 * ```
 * @param props.field - The hasOne field API identifier
 * @param props.label - The label of the hasOne form component
 * @param props.children - The child components to be rendered within the form. This is intended to be used with <AutoInput/> and will be rendered for each child record.
 * @param props.recordLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The hasOne field form component
 */
export const PolarisWCAutoHasOneForm = autoRelationshipForm((props: Omit<AutoRelationshipFormProps, "recordFilter">) => {
  const hasOneForm = useHasOneForm(props);
  const {
    isEditing,
    setIsEditing,
    isCreatingRecord,
    pathPrefix,
    metaDataPathPrefix,
    hasRecord,
    recordOption,
    relatedModelName,
    confirmEdit,
    removeRecord,
    startCreatingRecord,
  } = hasOneForm;

  return (
    <>
      <RelationshipContext.Provider
        value={{
          transformPath: (path) => pathPrefix + "." + path,
          transformMetadataPath: (path) => metaDataPathPrefix + "." + path,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {props.label ?? <s-text>{relatedModelName}</s-text>}
          </div>

          {hasRecord || isCreatingRecord ? (
            <div
              style={{
                border: "1px solid var(--p-color-border, #dfe3e8)",
                borderRadius: "var(--p-border-radius-200, 8px)",
              }}
            >
              {!isEditing && recordOption ? (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
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
                  <PolarisWCEditableOptionLabelButton option={recordOption} />
                </button>
              ) : (
                <div style={{ padding: "12px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {props.children}
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <s-button tone="critical" onClick={removeRecord}>
                        Remove
                      </s-button>
                      <s-button variant="primary" onClick={confirmEdit}>
                        Confirm
                      </s-button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <CreateNewChildButton relatedModelName={relatedModelName} startCreatingRecord={startCreatingRecord} />
          )}
        </div>
      </RelationshipContext.Provider>
    </>
  );
});

const CreateNewChildButton = (props: { relatedModelName: string; startCreatingRecord: () => void }) => {
  const { relatedModelName, startCreatingRecord } = props;

  return (
    <div
      style={{
        border: "1px solid var(--p-color-border, #dfe3e8)",
        borderRadius: "var(--p-border-radius-200, 8px)",
      }}
    >
      <button
        type="button"
        onClick={startCreatingRecord}
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
        <s-text>Add {relatedModelName}</s-text>
      </button>
    </div>
  );
};
