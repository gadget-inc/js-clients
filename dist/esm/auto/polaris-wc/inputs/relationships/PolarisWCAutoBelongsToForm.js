import React, { useCallback, useId } from "react";
import { useBelongsToForm } from "../../../../useBelongsToForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { PolarisWCModal } from "../../commonComponents/PolarisWCModal.js";
import { PolarisWCSearchableSingleRelatedModelRecordSelector } from "./PolarisWCSearchableSingleRelatedModelRecordSelector.js";
import { renderOptionLabel } from "./utils.js";
/**
 * A belongsTo field form component for use within <AutoForm></AutoForm> components using Polaris Web Components.
 * This component allows related model records to be created or updated from the current model.
 * Fields on the related model record are controlled with the nested <AutoInput/> child components.
 *
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoBelongsToForm field="parentModel" >
 *     <AutoInput field="parentModelField" />
 *   </AutoBelongsToForm>
 * </AutoForm>
 * ```
 * @param props.field - The belongsTo field API identifier
 * @param props.label - The label of the belongTo form component
 * @param props.children - The child components to be rendered within the form. This is intended to be used with <AutoInput/>.
 * @param props.optionLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The belongsTo field form component
 */
export const PolarisWCAutoBelongsToForm = autoRelationshipForm((props) => {
    const belongsToForm = useBelongsToForm(props);
    const { record, setActionsOpen, setIsEditing, pathPrefix, hasRecord, recordOption, relatedModelName: parentName, path, setValue, getValues, metaDataPathPrefix, } = belongsToForm;
    const handleEdit = useCallback(() => {
        setIsEditing(true);
        setActionsOpen(false);
    }, [setIsEditing, setActionsOpen]);
    const handleRemove = useCallback(() => {
        const { __typename, ...rest } = record;
        const nulledValues = Object.fromEntries(Object.keys(rest).map((key) => [key, null]));
        setValue(path, { ...nulledValues, __typename, _unlink: true });
        setActionsOpen(false);
    }, [record, setValue, path, setActionsOpen]);
    const handleSave = useCallback(() => {
        const { _unlink, _link, id: recordId, ...rest } = getValues(path);
        if (recordId) {
            setValue(path, { ...rest, id: recordId });
        }
        else {
            setValue(path, rest);
        }
        setIsEditing(false);
    }, [getValues, path, setValue, setIsEditing]);
    const handleCancel = useCallback(() => {
        setIsEditing(false);
    }, [setIsEditing]);
    const rawId = useId();
    const menuId = `related-record-menu-${rawId.replace(/:/g, "")}`;
    const modalId = `belongs-to-modal-${rawId.replace(/:/g, "")}`;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "12px" } },
            React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
                props.label ?? React.createElement("s-text", null, parentName),
                hasRecord && (React.createElement(React.Fragment, null,
                    React.createElement("s-button", { commandFor: menuId, icon: "menu-vertical", variant: "tertiary" }),
                    React.createElement("s-menu", { id: menuId, accessibilityLabel: "Customer actions" },
                        React.createElement("s-button", { commandFor: modalId, onClick: handleEdit, command: "--show" },
                            "Edit ",
                            parentName.toLocaleLowerCase()),
                        React.createElement("s-button", { onClick: handleRemove, tone: "critical" },
                            "Remove ",
                            parentName.toLocaleLowerCase()))))),
            hasRecord ? (React.createElement(React.Fragment, null,
                React.createElement("hr", { style: { border: "none", borderTop: "1px solid var(--p-color-border, #dfe3e8)", margin: 0 } }),
                React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" } },
                    React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "4px" } },
                        renderOptionLabel(recordOption.primary, "primary"),
                        recordOption.secondary && renderOptionLabel(recordOption.secondary, "secondary")),
                    recordOption.tertiary && renderOptionLabel(recordOption.tertiary, "tertiary")))) : (React.createElement(PolarisWCSearchableSingleRelatedModelRecordSelector, { form: belongsToForm }))),
        React.createElement(PolarisWCModal, { id: modalId, heading: `Add ${parentName}`, onClose: handleCancel },
            React.createElement(RelationshipContext.Provider, { value: {
                    transformPath: (path) => pathPrefix + "." + path,
                    transformMetadataPath: (path) => metaDataPathPrefix + "." + path,
                } },
                React.createElement("div", { style: { padding: "16px" } }, props.children),
                React.createElement("div", { style: {
                        padding: "16px",
                        borderTop: "1px solid var(--p-color-border, #dfe3e8)",
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "8px",
                    } },
                    React.createElement("s-button", { variant: "secondary", commandFor: modalId, command: "--hide", onClick: handleCancel }, "Cancel"),
                    React.createElement("s-button", { variant: "primary", commandFor: modalId, command: "--hide", onClick: handleSave }, "Save"))))));
});
//# sourceMappingURL=PolarisWCAutoBelongsToForm.js.map