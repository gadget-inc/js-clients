"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoHasOneForm = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useHasOneForm_js_1 = require("../../../../useHasOneForm.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useAutoRelationship_js_1 = require("../../../hooks/useAutoRelationship.js");
const PolarisWCEditableOptionLabelButton_js_1 = require("./PolarisWCEditableOptionLabelButton.js");
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
exports.PolarisWCAutoHasOneForm = (0, AutoInput_js_1.autoRelationshipForm)((props) => {
    const hasOneForm = (0, useHasOneForm_js_1.useHasOneForm)(props);
    const { isEditing, setIsEditing, isCreatingRecord, pathPrefix, metaDataPathPrefix, hasRecord, recordOption, relatedModelName, confirmEdit, removeRecord, startCreatingRecord, } = hasOneForm;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: {
                transformPath: (path) => pathPrefix + "." + path,
                transformMetadataPath: (path) => metaDataPathPrefix + "." + path,
            } },
            react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "12px" } },
                react_1.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, props.label ?? react_1.default.createElement("s-text", null, relatedModelName)),
                hasRecord || isCreatingRecord ? (react_1.default.createElement("div", { style: {
                        border: "1px solid var(--p-color-border, #dfe3e8)",
                        borderRadius: "var(--p-border-radius-200, 8px)",
                    } }, !isEditing && recordOption ? (react_1.default.createElement("button", { type: "button", onClick: () => setIsEditing(true), style: {
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
                    react_1.default.createElement(PolarisWCEditableOptionLabelButton_js_1.PolarisWCEditableOptionLabelButton, { option: recordOption }))) : (react_1.default.createElement("div", { style: { padding: "12px" } },
                    react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "12px" } },
                        props.children,
                        react_1.default.createElement("div", { style: { display: "flex", justifyContent: "space-between" } },
                            react_1.default.createElement("s-button", { tone: "critical", onClick: removeRecord }, "Remove"),
                            react_1.default.createElement("s-button", { variant: "primary", onClick: confirmEdit }, "Confirm"))))))) : (react_1.default.createElement(CreateNewChildButton, { relatedModelName: relatedModelName, startCreatingRecord: startCreatingRecord }))))));
});
const CreateNewChildButton = (props) => {
    const { relatedModelName, startCreatingRecord } = props;
    return (react_1.default.createElement("div", { style: {
            border: "1px solid var(--p-color-border, #dfe3e8)",
            borderRadius: "var(--p-border-radius-200, 8px)",
        } },
        react_1.default.createElement("button", { type: "button", onClick: startCreatingRecord, style: {
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
                relatedModelName))));
};
//# sourceMappingURL=PolarisWCAutoHasOneForm.js.map