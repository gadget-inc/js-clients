"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoHasManyThroughForm = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useHasManyThroughForm_js_1 = require("../../../../useHasManyThroughForm.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useAutoRelationship_js_1 = require("../../../hooks/useAutoRelationship.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const PolarisWCRelatedModelOptions_js_1 = require("./PolarisWCRelatedModelOptions.js");
const utils_js_1 = require("./utils.js");
/**
 * A hasManyThrough field form component for use within <AutoForm></AutoForm> components using Polaris Web Components.
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
exports.PolarisWCAutoHasManyThroughForm = (0, AutoInput_js_1.autoRelationshipForm)((props) => {
    const [addingSibling, setAddingSibling] = (0, react_1.useState)(false);
    const { append, remove, joinRecords, listboxId, pathPrefix, metaDataPathPrefix, recordLabel, siblingModelName, siblingRecordsLoading, siblingRecords, siblingPagination, search, joinModelField, joinModelApiIdentifier, siblingModelOptions, inverseRelatedModelField, fieldArray, } = (0, useHasManyThroughForm_js_1.useHasManyThroughForm)(props);
    return (react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "12px" } },
        react_1.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
            props.label ?? react_1.default.createElement("s-heading", null, siblingModelName),
            react_1.default.createElement(PolarisWCRelatedModelOptions_js_1.PolarisWCRelatedModelOptionsPopover, { active: addingSibling, activator: react_1.default.createElement("s-button", { onClick: () => setAddingSibling((prev) => !prev) },
                    "Add ",
                    siblingModelName ?? "related model"), onClose: () => setAddingSibling(false), onScrolledToBottom: siblingPagination.loadNextPage, search: react_1.default.createElement(PolarisWCRelatedModelOptions_js_1.PolarisWCRelatedModelOptionsSearch, { modelName: siblingModelName, value: search.value, onChange: search.set, ariaControls: listboxId }), options: siblingModelOptions, records: siblingRecords, onSelect: (record) => {
                    inverseRelatedModelField && append({ [inverseRelatedModelField]: { ...record, _link: record.id } });
                }, isLoading: siblingRecordsLoading, renderOption: (option) => (react_1.default.createElement(SiblingOption, { option: option, onClick: () => {
                        const record = siblingRecords?.find((r) => r.id === option.id) ?? {
                            id: option.id,
                        };
                        inverseRelatedModelField && append({ [inverseRelatedModelField]: { ...record, _link: record.id } });
                        setAddingSibling(false);
                    } })), listboxId: listboxId })),
        joinRecords.length > 0 ? (react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "12px" } }, joinRecords.map(([fieldKey, idx, record]) => {
            const siblingRecord = inverseRelatedModelField && record[inverseRelatedModelField];
            const siblingOption = (0, useRelatedModel_js_1.getRecordAsOption)(siblingRecord, {
                primary: recordLabel.primary,
                secondary: recordLabel.secondary,
                tertiary: recordLabel.tertiary,
            });
            return (react_1.default.createElement("div", { key: fieldKey },
                react_1.default.createElement("div", { style: {
                        border: "1px solid var(--p-color-border, #dfe3e8)",
                        borderRadius: "var(--p-border-radius-200, 8px)",
                    } },
                    react_1.default.createElement("div", { style: {
                            display: "flex",
                            padding: "8px",
                            alignItems: "center",
                        } },
                        react_1.default.createElement("div", { style: { flex: 1, minWidth: 0 } },
                            react_1.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px" } },
                                (0, utils_js_1.renderOptionLabel)(siblingOption.primary, "primary"),
                                siblingOption?.tertiary && (0, utils_js_1.renderOptionLabel)(siblingOption.tertiary, "tertiary")),
                            siblingOption?.secondary && (0, utils_js_1.renderOptionLabel)(siblingOption.secondary, "secondary")),
                        react_1.default.createElement("s-button", { id: `deleteButton_${pathPrefix}.${idx}`, variant: "tertiary", onClick: () => remove(idx), icon: "x" })),
                    props.children && (react_1.default.createElement("div", { style: {
                            borderTop: "1px solid var(--p-color-border, #dfe3e8)",
                            padding: "8px",
                        } },
                        react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: {
                                transformPath: (path) => `${joinModelField}.${idx}.${path.replace(`${joinModelApiIdentifier}.`, "")}`,
                                transformMetadataPath: (path) => `${joinModelField}.${path.replace(`${joinModelApiIdentifier}.`, "")}`,
                                fieldArray,
                                hasManyThrough: { joinModelApiIdentifier, inverseRelatedModelField },
                            } }, props.children))))));
        }))) : (react_1.default.createElement("div", { style: {
                border: "1px solid var(--p-color-border, #dfe3e8)",
                borderRadius: "var(--p-border-radius-200, 8px)",
                padding: "12px",
                textAlign: "center",
            } },
            react_1.default.createElement("s-text", { tone: "neutral" },
                "No ",
                siblingModelName,
                " yet")))));
});
const SiblingOption = (props) => {
    const { option, onClick } = props;
    return (react_1.default.createElement("button", { key: option.id, type: "button", onClick: onClick, style: {
            display: "flex",
            width: "100%",
            padding: "8px 12px",
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
        react_1.default.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: "2px" } },
            (0, utils_js_1.renderOptionLabel)(option.primary, "primary"),
            option.secondary && (0, utils_js_1.renderOptionLabel)(option.secondary, "secondary")),
        react_1.default.createElement("s-icon", { type: "plus" })));
};
//# sourceMappingURL=PolarisWCAutoHasManyThroughForm.js.map