"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoHasManyForm = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useActionForm_js_1 = require("../../../../useActionForm.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useAutoRelationship_js_1 = require("../../../hooks/useAutoRelationship.js");
const useHasManyController_js_1 = require("../../../hooks/useHasManyController.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const useRequiredChildComponentsValidator_js_1 = require("../../../hooks/useRequiredChildComponentsValidator.js");
const AutoRelationshipInputProps_js_1 = require("../../../interfaces/AutoRelationshipInputProps.js");
const PolarisWCEditableOptionLabelButton_js_1 = require("./PolarisWCEditableOptionLabelButton.js");
const useRecordLabelObjectFromProps = (props) => {
    const recordLabelObject = (0, AutoRelationshipInputProps_js_1.getRecordLabelObject)(props.recordLabel);
    const primaryLabel = (0, useRelatedModel_js_1.useOptionLabelForField)(props.field, recordLabelObject?.primary);
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
exports.PolarisWCAutoHasManyForm = (0, AutoInput_js_1.autoRelationshipForm)((props) => {
    (0, useRequiredChildComponentsValidator_js_1.useRequiredChildComponentsValidator)(props, "AutoHasManyForm");
    const { metadata } = (0, useAutoRelationship_js_1.useAutoRelationship)({ field: props.field });
    const { getValues } = (0, useActionForm_js_1.useFormContext)();
    const { fieldArray, fieldArrayPath } = (0, useHasManyController_js_1.useHasManyController)({ field: props.field });
    const { fields, append, remove } = fieldArray;
    const relationshipContext = (0, useAutoRelationship_js_1.useRelationshipContext)();
    if (metadata.configuration.__typename !== "GadgetHasManyConfig") {
        throw new Error("PolarisWCAutoHasManyForm can only be used for HasMany fields");
    }
    const modelName = metadata.configuration.relatedModel?.name;
    const recordLabel = useRecordLabelObjectFromProps(props);
    const [editingIndex, setEditingIndex] = (0, react_1.useState)(null);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { marginBottom: "8px" } }, props.label ?? react_1.default.createElement("s-text", null, metadata.name)),
        react_1.default.createElement("div", { style: {
                border: "1px solid var(--p-color-border, #dfe3e8)",
                borderRadius: "var(--p-border-radius-200, 8px)",
            } },
            fields.flatMap((field, idx) => {
                // since we don't put full data in the field array when we append, we need to
                // get the value directly from the form state
                const record = getValues(`${fieldArrayPath}.${idx}`);
                if (!record) {
                    return [];
                }
                const option = (0, useRelatedModel_js_1.getRecordAsOption)(record, recordLabel);
                const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
                const metadataPathPrefix = relationshipContext?.transformMetadataPath
                    ? relationshipContext.transformMetadataPath(props.field)
                    : props.field;
                return (react_1.default.createElement("div", { key: field._fieldArrayKey, id: `${pathPrefix}.${idx}`, style: {
                        borderBottom: "1px solid var(--p-color-border, #dfe3e8)",
                    } }, editingIndex === idx ? (react_1.default.createElement("div", { style: { padding: "12px" } },
                    react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "12px" } },
                        react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: {
                                transformPath: (path) => `${pathPrefix}.${idx}.${path}`,
                                transformMetadataPath: (path) => `${metadataPathPrefix}.${path}`,
                                fieldArray,
                            } }, props.children),
                        react_1.default.createElement("div", { style: { display: "flex", justifyContent: "space-between" } },
                            react_1.default.createElement("s-button", { tone: "critical", onClick: () => remove(idx), id: `deleteButton_${metadataPathPrefix}.${idx}` }, "Delete"),
                            react_1.default.createElement("s-button", { variant: "primary", onClick: () => setEditingIndex(null), id: `confirmButton_${metadataPathPrefix}.${idx}` }, "Confirm"))))) : (react_1.default.createElement("button", { type: "button", onClick: () => setEditingIndex(idx), style: {
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
                    react_1.default.createElement(PolarisWCEditableOptionLabelButton_js_1.PolarisWCEditableOptionLabelButton, { option: option })))));
            }),
            react_1.default.createElement("button", { type: "button", onClick: () => {
                    append({});
                    setEditingIndex(fields.length);
                }, style: {
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
                react_1.default.createElement("s-icon", { type: "plus" }),
                react_1.default.createElement("s-text", null,
                    "Add ",
                    modelName)))));
});
//# sourceMappingURL=PolarisWCAutoHasManyForm.js.map