"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoHasOneForm = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importDefault(require("react"));
const useHasOneForm_js_1 = require("../../../../useHasOneForm.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useAutoRelationship_js_1 = require("../../../hooks/useAutoRelationship.js");
const EditableOptionLabelButton_js_1 = require("./EditableOptionLabelButton.js");
const SearchableSingleRelatedModelRecordSelector_js_1 = require("./SearchableSingleRelatedModelRecordSelector.js");
/**
 * A hasOne field form component for use within <AutoForm></AutoForm> components
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
exports.PolarisAutoHasOneForm = (0, AutoInput_js_1.autoRelationshipForm)((props) => {
    const hasOneForm = (0, useHasOneForm_js_1.useHasOneForm)(props);
    const { isEditing, setIsEditing, isCreatingRecord, pathPrefix, metaDataPathPrefix, hasRecord, recordOption, relatedModelName, confirmEdit, removeRecord, } = hasOneForm;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: { transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path } },
            react_1.default.createElement(polaris_1.BlockStack, { gap: "300" },
                react_1.default.createElement(polaris_1.InlineGrid, { columns: "1fr auto" }, props.label ?? (react_1.default.createElement(polaris_1.Text, { as: "h2", variant: "headingSm" }, relatedModelName))),
                hasRecord || isCreatingRecord ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(polaris_1.Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" }, !isEditing && recordOption ? (react_1.default.createElement(polaris_1.BlockStack, { as: "ul" },
                        react_1.default.createElement(polaris_1.ResourceItem, { id: recordOption.id, onClick: () => setIsEditing(true) },
                            react_1.default.createElement(EditableOptionLabelButton_js_1.EditableOptionLabelButton, { option: recordOption })))) : (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(polaris_1.Box, { padding: "300" },
                            react_1.default.createElement(polaris_1.BlockStack, { gap: "300" },
                                props.children,
                                react_1.default.createElement(polaris_1.InlineStack, { align: "space-between" },
                                    react_1.default.createElement(polaris_1.Button, { tone: "critical", onClick: removeRecord }, "Remove"),
                                    react_1.default.createElement(polaris_1.Button, { variant: "primary", onClick: confirmEdit }, "Confirm"))))))))) : (react_1.default.createElement(EmptyFormComponent, { form: hasOneForm }))))));
});
/**
 * TODO - If this gets enabled fix this:
 *    - Workflow
 *      - existingSelectedRecord
 *      - removeSelection
 *      - reselectTheSameRecordInDropdown
 *      - removeSelection
 *      - send
 *    - Right now, this workflow sends null as the hasOne field value, which does nothing. It should be _unlink
 */
const canSelectExistingRecord = false;
const EmptyFormComponent = (props) => {
    const { form } = props;
    if (canSelectExistingRecord) {
        return react_1.default.createElement(SearchableSingleRelatedModelRecordSelector_js_1.SearchableSingleRelatedModelRecordSelector, { form: form, override: { addNewRecord: form.startCreatingRecord } });
    }
    return react_1.default.createElement(CreateNewChildButton, { form: form });
};
const CreateNewChildButton = (props) => {
    const { relatedModelName, startCreatingRecord } = props.form;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" },
            react_1.default.createElement(polaris_1.BlockStack, { as: "ul" },
                react_1.default.createElement(polaris_1.ResourceItem, { id: "add", onClick: startCreatingRecord },
                    react_1.default.createElement(polaris_1.InlineStack, { align: "start", gap: "200" },
                        react_1.default.createElement(polaris_1.Box, null,
                            react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.PlusCircleIcon })),
                        react_1.default.createElement(polaris_1.Text, { as: "p", variant: "bodyMd", fontWeight: "semibold" },
                            "Add ",
                            relatedModelName)))))));
};
//# sourceMappingURL=PolarisAutoHasOneForm.js.map