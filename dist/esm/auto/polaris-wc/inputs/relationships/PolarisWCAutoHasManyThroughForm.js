import React, { useState } from "react";
import { useHasManyThroughForm } from "../../../../useHasManyThroughForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { getRecordAsOption } from "../../../hooks/useRelatedModel.js";
import { PolarisWCRelatedModelOptionsPopover, PolarisWCRelatedModelOptionsSearch } from "./PolarisWCRelatedModelOptions.js";
import { renderOptionLabel } from "./utils.js";
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
export const PolarisWCAutoHasManyThroughForm = autoRelationshipForm((props) => {
    const [addingSibling, setAddingSibling] = useState(false);
    const { append, remove, joinRecords, listboxId, pathPrefix, metaDataPathPrefix, recordLabel, siblingModelName, siblingRecordsLoading, siblingRecords, siblingPagination, search, joinModelField, joinModelApiIdentifier, siblingModelOptions, inverseRelatedModelField, fieldArray, } = useHasManyThroughForm(props);
    return (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "12px" } },
        React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
            props.label ?? React.createElement("s-heading", null, siblingModelName),
            React.createElement(PolarisWCRelatedModelOptionsPopover, { active: addingSibling, activator: React.createElement("s-button", { onClick: () => setAddingSibling((prev) => !prev) },
                    "Add ",
                    siblingModelName ?? "related model"), onClose: () => setAddingSibling(false), onScrolledToBottom: siblingPagination.loadNextPage, search: React.createElement(PolarisWCRelatedModelOptionsSearch, { modelName: siblingModelName, value: search.value, onChange: search.set, ariaControls: listboxId }), options: siblingModelOptions, records: siblingRecords, onSelect: (record) => {
                    inverseRelatedModelField && append({ [inverseRelatedModelField]: { ...record, _link: record.id } });
                }, isLoading: siblingRecordsLoading, renderOption: (option) => (React.createElement(SiblingOption, { option: option, onClick: () => {
                        const record = siblingRecords?.find((r) => r.id === option.id) ?? {
                            id: option.id,
                        };
                        inverseRelatedModelField && append({ [inverseRelatedModelField]: { ...record, _link: record.id } });
                        setAddingSibling(false);
                    } })), listboxId: listboxId })),
        joinRecords.length > 0 ? (React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "12px" } }, joinRecords.map(([fieldKey, idx, record]) => {
            const siblingRecord = inverseRelatedModelField && record[inverseRelatedModelField];
            const siblingOption = getRecordAsOption(siblingRecord, {
                primary: recordLabel.primary,
                secondary: recordLabel.secondary,
                tertiary: recordLabel.tertiary,
            });
            return (React.createElement("div", { key: fieldKey },
                React.createElement("div", { style: {
                        border: "1px solid var(--p-color-border, #dfe3e8)",
                        borderRadius: "var(--p-border-radius-200, 8px)",
                    } },
                    React.createElement("div", { style: {
                            display: "flex",
                            padding: "8px",
                            alignItems: "center",
                        } },
                        React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px" } },
                                renderOptionLabel(siblingOption.primary, "primary"),
                                siblingOption?.tertiary && renderOptionLabel(siblingOption.tertiary, "tertiary")),
                            siblingOption?.secondary && renderOptionLabel(siblingOption.secondary, "secondary")),
                        React.createElement("s-button", { id: `deleteButton_${pathPrefix}.${idx}`, variant: "tertiary", onClick: () => remove(idx), icon: "x" })),
                    props.children && (React.createElement("div", { style: {
                            borderTop: "1px solid var(--p-color-border, #dfe3e8)",
                            padding: "8px",
                        } },
                        React.createElement(RelationshipContext.Provider, { value: {
                                transformPath: (path) => `${joinModelField}.${idx}.${path.replace(`${joinModelApiIdentifier}.`, "")}`,
                                transformMetadataPath: (path) => `${joinModelField}.${path.replace(`${joinModelApiIdentifier}.`, "")}`,
                                fieldArray,
                                hasManyThrough: { joinModelApiIdentifier, inverseRelatedModelField },
                            } }, props.children))))));
        }))) : (React.createElement("div", { style: {
                border: "1px solid var(--p-color-border, #dfe3e8)",
                borderRadius: "var(--p-border-radius-200, 8px)",
                padding: "12px",
                textAlign: "center",
            } },
            React.createElement("s-text", { tone: "neutral" },
                "No ",
                siblingModelName,
                " yet")))));
});
const SiblingOption = (props) => {
    const { option, onClick } = props;
    return (React.createElement("button", { key: option.id, type: "button", onClick: onClick, style: {
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
        React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: "2px" } },
            renderOptionLabel(option.primary, "primary"),
            option.secondary && renderOptionLabel(option.secondary, "secondary")),
        React.createElement("s-icon", { type: "plus" })));
};
//# sourceMappingURL=PolarisWCAutoHasManyThroughForm.js.map