"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoBelongsToForm = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useBelongsToForm_js_1 = require("../../../../useBelongsToForm.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useAutoRelationship_js_1 = require("../../../hooks/useAutoRelationship.js");
const PolarisWCModal_js_1 = require("../../commonComponents/PolarisWCModal.js");
const PolarisWCSearchableSingleRelatedModelRecordSelector_js_1 = require("./PolarisWCSearchableSingleRelatedModelRecordSelector.js");
const utils_js_1 = require("./utils.js");
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
exports.PolarisWCAutoBelongsToForm = (0, AutoInput_js_1.autoRelationshipForm)((props) => {
    const belongsToForm = (0, useBelongsToForm_js_1.useBelongsToForm)(props);
    const { record, setActionsOpen, setIsEditing, pathPrefix, hasRecord, recordOption, relatedModelName: parentName, path, setValue, getValues, metaDataPathPrefix, } = belongsToForm;
    const handleEdit = (0, react_1.useCallback)(() => {
        setIsEditing(true);
        setActionsOpen(false);
    }, [setIsEditing, setActionsOpen]);
    const handleRemove = (0, react_1.useCallback)(() => {
        const { __typename, ...rest } = record;
        const nulledValues = Object.fromEntries(Object.keys(rest).map((key) => [key, null]));
        setValue(path, { ...nulledValues, __typename, _unlink: true });
        setActionsOpen(false);
    }, [record, setValue, path, setActionsOpen]);
    const handleSave = (0, react_1.useCallback)(() => {
        const { _unlink, _link, id: recordId, ...rest } = getValues(path);
        if (recordId) {
            setValue(path, { ...rest, id: recordId });
        }
        else {
            setValue(path, rest);
        }
        setIsEditing(false);
    }, [getValues, path, setValue, setIsEditing]);
    const handleCancel = (0, react_1.useCallback)(() => {
        setIsEditing(false);
    }, [setIsEditing]);
    const rawId = (0, react_1.useId)();
    const menuId = `related-record-menu-${rawId.replace(/:/g, "")}`;
    const modalId = `belongs-to-modal-${rawId.replace(/:/g, "")}`;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "12px" } },
            react_1.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
                props.label ?? react_1.default.createElement("s-text", null, parentName),
                hasRecord && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("s-button", { commandFor: menuId, icon: "menu-vertical", variant: "tertiary" }),
                    react_1.default.createElement("s-menu", { id: menuId, accessibilityLabel: "Customer actions" },
                        react_1.default.createElement("s-button", { commandFor: modalId, onClick: handleEdit, command: "--show" },
                            "Edit ",
                            parentName.toLocaleLowerCase()),
                        react_1.default.createElement("s-button", { onClick: handleRemove, tone: "critical" },
                            "Remove ",
                            parentName.toLocaleLowerCase()))))),
            hasRecord ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("hr", { style: { border: "none", borderTop: "1px solid var(--p-color-border, #dfe3e8)", margin: 0 } }),
                react_1.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" } },
                    react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "4px" } },
                        (0, utils_js_1.renderOptionLabel)(recordOption.primary, "primary"),
                        recordOption.secondary && (0, utils_js_1.renderOptionLabel)(recordOption.secondary, "secondary")),
                    recordOption.tertiary && (0, utils_js_1.renderOptionLabel)(recordOption.tertiary, "tertiary")))) : (react_1.default.createElement(PolarisWCSearchableSingleRelatedModelRecordSelector_js_1.PolarisWCSearchableSingleRelatedModelRecordSelector, { form: belongsToForm }))),
        react_1.default.createElement(PolarisWCModal_js_1.PolarisWCModal, { id: modalId, heading: `Add ${parentName}`, onClose: handleCancel },
            react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: {
                    transformPath: (path) => pathPrefix + "." + path,
                    transformMetadataPath: (path) => metaDataPathPrefix + "." + path,
                } },
                react_1.default.createElement("div", { style: { padding: "16px" } }, props.children),
                react_1.default.createElement("div", { style: {
                        padding: "16px",
                        borderTop: "1px solid var(--p-color-border, #dfe3e8)",
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "8px",
                    } },
                    react_1.default.createElement("s-button", { variant: "secondary", commandFor: modalId, command: "--hide", onClick: handleCancel }, "Cancel"),
                    react_1.default.createElement("s-button", { variant: "primary", commandFor: modalId, command: "--hide", onClick: handleSave }, "Save"))))));
});
//# sourceMappingURL=PolarisWCAutoBelongsToForm.js.map