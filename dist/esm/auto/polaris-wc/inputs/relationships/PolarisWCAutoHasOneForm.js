import React from "react";
import { useHasOneForm } from "../../../../useHasOneForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
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
export const PolarisWCAutoHasOneForm = autoRelationshipForm((props) => {
    const hasOneForm = useHasOneForm(props);
    const { isEditing, setIsEditing, isCreatingRecord, pathPrefix, metaDataPathPrefix, hasRecord, recordOption, relatedModelName, confirmEdit, removeRecord, startCreatingRecord, } = hasOneForm;
    return (React.createElement(React.Fragment, null,
        React.createElement(RelationshipContext.Provider, { value: {
                transformPath: (path) => pathPrefix + "." + path,
                transformMetadataPath: (path) => metaDataPathPrefix + "." + path,
            } },
            React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "12px" } },
                React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, props.label ?? React.createElement("s-text", null, relatedModelName)),
                hasRecord || isCreatingRecord ? (React.createElement("div", { style: {
                        border: "1px solid var(--p-color-border, #dfe3e8)",
                        borderRadius: "var(--p-border-radius-200, 8px)",
                    } }, !isEditing && recordOption ? (React.createElement("button", { type: "button", onClick: () => setIsEditing(true), style: {
                        display: "flex",
                        width: "100%",
                        padding: "12px",
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        textAlign: "left",
                    }, onMouseEnter: (e) => {
                        e.currentTarget.style.background = "var(--p-color-bg-surface-hover, #f9fafb)";
                    }, onMouseLeave: (e) => {
                        e.currentTarget.style.background = "transparent";
                    } },
                    React.createElement(PolarisWCEditableOptionLabelButton, { option: recordOption }))) : (React.createElement("div", { style: { padding: "12px" } },
                    React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "12px" } },
                        props.children,
                        React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } },
                            React.createElement("s-button", { tone: "critical", onClick: removeRecord }, "Remove"),
                            React.createElement("s-button", { variant: "primary", onClick: confirmEdit }, "Confirm"))))))) : (React.createElement(CreateNewChildButton, { relatedModelName: relatedModelName, startCreatingRecord: startCreatingRecord }))))));
});
const CreateNewChildButton = (props) => {
    const { relatedModelName, startCreatingRecord } = props;
    return (React.createElement("div", { style: {
            border: "1px solid var(--p-color-border, #dfe3e8)",
            borderRadius: "var(--p-border-radius-200, 8px)",
        } },
        React.createElement("button", { type: "button", onClick: startCreatingRecord, style: {
                display: "flex",
                width: "100%",
                padding: "12px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                textAlign: "left",
                alignItems: "center",
                gap: "8px",
            }, onMouseEnter: (e) => {
                e.currentTarget.style.background = "var(--p-color-bg-surface-hover, #f9fafb)";
            }, onMouseLeave: (e) => {
                e.currentTarget.style.background = "transparent";
            } },
            React.createElement("s-icon", { type: "plus" }),
            React.createElement("s-text", null,
                "Add ",
                relatedModelName))));
};
//# sourceMappingURL=PolarisWCAutoHasOneForm.js.map