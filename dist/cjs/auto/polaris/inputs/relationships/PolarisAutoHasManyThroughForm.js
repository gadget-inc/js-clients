"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoHasManyThroughForm = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importStar(require("react"));
const useHasManyThroughForm_js_1 = require("../../../../useHasManyThroughForm.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useAutoRelationship_js_1 = require("../../../hooks/useAutoRelationship.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const RelatedModelOptions_js_1 = require("./RelatedModelOptions.js");
const utils_js_1 = require("./utils.js");
/**
 * A hasManyThrough field form component for use within <AutoForm></AutoForm> components
 * This component allows sibling model relationships to be defined through creating, updating, or deleting records on the sibling model.
 * Fields on the related model record are controlled with the nested <AutoInput/> child components.
 *
 * @example
 * ```tsx
 * <AutoForm action={api.course.create}>
 *   <AutoInput // `name` field on `course` model
 *     field="name"
 *   />
 *   <AutoHasManyThroughForm // `students` field on `course` model - `course` hasMany `students` through `registration`
 *     field="students"
 *   >
 *     <AutoHasManyThroughJoinModelForm // Join model field inputs
 *     >
 *       <AutoInput // `isTuitionPaid` field on `registration` model
 *         field="isTuitionPaid"
 *       />
 *     </AutoHasManyThroughJoinModelForm>
 *     <AutoInput // Sibling model field inputs
 *       field="firstName"
 *     />
 *   </AutoHasManyThroughForm>
 *   <AutoSubmit />
 * </AutoForm>
 * ```
 * @param props.field - The hasMany field API identifier
 * @param props.label - The label of the hasMany form component
 * @param props.children - The child components to be rendered within the form. This is intended to be used with <AutoInput/> and will be rendered for each sibling model record.
 * @param props.recordLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The hasManyThrough field form component
 */
exports.PolarisAutoHasManyThroughForm = (0, AutoInput_js_1.autoRelationshipForm)((props) => {
    const [addingSibling, setAddingSibling] = (0, react_1.useState)(false);
    const { append, remove, joinRecords, listboxId, pathPrefix, metaDataPathPrefix, recordLabel, siblingModelName, siblingRecordsLoading, siblingRecords, siblingPagination, search, joinModelField, joinModelApiIdentifier, siblingModelOptions, inverseRelatedModelField, fieldArray, } = (0, useHasManyThroughForm_js_1.useHasManyThroughForm)(props);
    return (react_1.default.createElement(polaris_1.BlockStack, { gap: "300" },
        react_1.default.createElement(polaris_1.InlineGrid, { columns: "1fr auto", alignItems: "center" },
            props.label ?? (react_1.default.createElement(polaris_1.Text, { as: "h2", variant: "headingSm" }, siblingModelName)),
            react_1.default.createElement(RelatedModelOptions_js_1.RelatedModelOptionsPopover, { active: addingSibling, activator: react_1.default.createElement(polaris_1.Button, { onClick: () => setAddingSibling((prev) => !prev), disclosure: true },
                    "Add ",
                    siblingModelName ?? "related model"), onClose: () => setAddingSibling(false), onScrolledToBottom: siblingPagination.loadNextPage, search: react_1.default.createElement(RelatedModelOptions_js_1.RelatedModelOptionsSearch, { modelName: siblingModelName, value: search.value, onChange: search.set, ariaControls: listboxId }), options: siblingModelOptions, records: siblingRecords, onSelect: (record) => {
                    inverseRelatedModelField && append({ [inverseRelatedModelField]: { ...record, _link: record.id } });
                }, isLoading: siblingRecordsLoading, autoSelection: polaris_1.AutoSelection.None, renderOption: (option) => react_1.default.createElement(SiblingOption, { option: option }) })),
        joinRecords.length > 0 ? (react_1.default.createElement(polaris_1.BlockStack, { as: "ul", gap: "300" }, joinRecords.map(([fieldKey, idx, record]) => {
            const siblingRecord = inverseRelatedModelField && record[inverseRelatedModelField];
            const siblingOption = (0, useRelatedModel_js_1.getRecordAsOption)(siblingRecord, {
                primary: recordLabel.primary,
                secondary: recordLabel.secondary,
                tertiary: recordLabel.tertiary,
            });
            return (react_1.default.createElement(polaris_1.Box, { key: fieldKey },
                react_1.default.createElement(polaris_1.InlineGrid, { columns: "1fr auto", alignItems: "center" },
                    react_1.default.createElement(polaris_1.Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" },
                        react_1.default.createElement("div", { style: { display: "flex", padding: "8px" } },
                            react_1.default.createElement(polaris_1.Box, null,
                                react_1.default.createElement(polaris_1.InlineStack, { gap: "200" },
                                    (0, utils_js_1.renderOptionLabel)(siblingOption.primary, "primary"),
                                    siblingOption?.tertiary && (0, utils_js_1.renderOptionLabel)(siblingOption.tertiary, "tertiary")),
                                siblingOption?.secondary && (0, utils_js_1.renderOptionLabel)(siblingOption.secondary, "secondary")),
                            react_1.default.createElement("div", { style: { marginLeft: "auto", alignSelf: "center", height: "100%" } },
                                react_1.default.createElement(polaris_1.Button, { id: `deleteButton_${pathPrefix}.${idx}`, variant: "tertiary", icon: polaris_icons_1.XCircleIcon, onClick: () => remove(idx) }))),
                        props.children && (react_1.default.createElement(polaris_1.Box, { borderColor: "border", borderBlockStartWidth: "025" },
                            react_1.default.createElement(polaris_1.Box, { padding: "200" },
                                react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: {
                                        transformPath: (path) => `${joinModelField}.${idx}.${path.replace(`${joinModelApiIdentifier}.`, "")}`,
                                        transformMetadataPath: (path) => `${metaDataPathPrefix}.${path}`,
                                        fieldArray,
                                        hasManyThrough: { joinModelApiIdentifier, inverseRelatedModelField },
                                    } }, props.children))))))));
        }))) : (react_1.default.createElement(polaris_1.Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" },
            react_1.default.createElement(polaris_1.Box, { padding: "300" },
                react_1.default.createElement(polaris_1.InlineStack, { align: "center" },
                    react_1.default.createElement(polaris_1.Text, { as: "p", variant: "bodyMd", tone: "subdued" },
                        "No ",
                        siblingModelName,
                        " yet")))))));
});
const SiblingOption = (props) => {
    const { option } = props;
    return (react_1.default.createElement(polaris_1.Listbox.Action, { key: option.id, value: option.id },
        react_1.default.createElement("div", { style: { display: "flex", gap: "200", width: "100%" } },
            react_1.default.createElement(polaris_1.BlockStack, { gap: "050" },
                (0, utils_js_1.renderOptionLabel)(option.primary, "primary"),
                option.secondary && (0, utils_js_1.renderOptionLabel)(option.secondary, "secondary")),
            react_1.default.createElement("div", { style: { marginLeft: "auto", alignSelf: "center" } },
                react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.PlusIcon })))));
};
//# sourceMappingURL=PolarisAutoHasManyThroughForm.js.map