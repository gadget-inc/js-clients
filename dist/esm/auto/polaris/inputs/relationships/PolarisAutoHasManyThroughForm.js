import { AutoSelection, BlockStack, Box, Button, Icon, InlineGrid, InlineStack, Listbox, Text } from "@shopify/polaris";
import { PlusCircleIcon, XCircleIcon } from "@shopify/polaris-icons";
import React, { useEffect, useMemo, useState } from "react";
import { useFormContext } from "../../../../useActionForm.js";
import { extractPathsFromChildren } from "../../../AutoForm.js";
import { autoInput } from "../../../AutoInput.js";
import { RelationshipContext, useAutoRelationship, useRelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { useHasManyThroughController } from "../../../hooks/useHasManyThroughController.js";
import { getRecordAsOption, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import { RelatedModelOptionsPopover, RelatedModelOptionsSearch } from "./RelatedModelOptions.js";
import { renderOptionLabel } from "./utils.js";
export const PolarisAutoHasManyThroughForm = autoInput((props) => {
    const { field, children } = props;
    const { metadata } = useAutoRelationship({ field });
    const { setValue } = useFormContext();
    const childPaths = children && extractPathsFromChildren(children);
    const hasChildForm = childPaths && childPaths.length > 0;
    const { fieldArrayPath, fieldArray, records, relatedModelOptions, inverseRelatedModelField, joinModelField, joinModelApiIdentifier } = useHasManyThroughController(props);
    const { fields, append, remove } = fieldArray;
    const relationshipContext = useRelationshipContext();
    const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
    useEffect(() => {
        for (const [index, field] of fields.entries()) {
            if (inverseRelatedModelField &&
                field[inverseRelatedModelField] &&
                field[inverseRelatedModelField].id &&
                !("_link" in field)) {
                // use setValue so that we don't trigger a re-render
                setValue(`${fieldArrayPath}.${index}.${inverseRelatedModelField}._link`, field[inverseRelatedModelField].id);
            }
        }
    }, [setValue, inverseRelatedModelField, fields, fieldArrayPath]);
    const [addingSibling, setAddingSibling] = useState(false);
    const listboxId = `HasManyThroughListboxInPopover-${field}`;
    if (metadata.configuration.__typename !== "GadgetHasManyThroughConfig") {
        throw new Error("PolarisAutoHasManyThroughForm can only be used for HasManyThrough fields");
    }
    const { search, searchFilterOptions: siblingModelOptions, relatedModel: { fetching: siblingRecordsLoading, records: siblingRecords }, pagination: siblingPagination, } = relatedModelOptions;
    const siblingModelName = metadata.name ?? "Unknown";
    const joinRecords = useMemo(() => {
        return fields.flatMap((field, idx) => {
            const record = records[idx];
            if (!record) {
                return [];
            }
            return [[field._fieldArrayKey, idx, record]];
        });
    }, [fields, records]);
    const primaryLabel = useOptionLabelForField(field, props.primaryLabel);
    return (React.createElement(BlockStack, { gap: "200" },
        React.createElement(InlineGrid, { columns: "1fr auto" },
            React.createElement(Text, { as: "h2", variant: "headingSm" }, siblingModelName),
            React.createElement(RelatedModelOptionsPopover, { active: addingSibling, activator: React.createElement(Button, { onClick: () => setAddingSibling((prev) => !prev), disclosure: true },
                    "Add ",
                    siblingModelName ?? "related model"), onClose: () => setAddingSibling(false), onScrolledToBottom: siblingPagination.loadNextPage, search: React.createElement(RelatedModelOptionsSearch, { modelName: siblingModelName, value: search.value, onChange: search.set, ariaControls: listboxId }), options: siblingModelOptions, records: siblingRecords, onSelect: (record) => {
                    inverseRelatedModelField && append({ [inverseRelatedModelField]: { ...record, _link: record.id } });
                }, isLoading: siblingRecordsLoading, autoSelection: AutoSelection.None, renderOption: (option) => (React.createElement(Listbox.Action, { key: option.id, value: option.id },
                    React.createElement(InlineStack, { gap: "200" },
                        React.createElement(Icon, { source: PlusCircleIcon }),
                        React.createElement(BlockStack, { gap: "050" },
                            renderOptionLabel(option.label, "primary"),
                            option.secondaryLabel && renderOptionLabel(option.secondaryLabel, "secondary"))))) })),
        joinRecords.length > 0 ? (React.createElement(BlockStack, { as: "ul" }, joinRecords.map(([fieldKey, idx, record]) => {
            const siblingRecord = inverseRelatedModelField && record[inverseRelatedModelField];
            const siblingOption = getRecordAsOption(siblingRecord, primaryLabel, props.secondaryLabel, props.tertiaryLabel);
            return (React.createElement(Box, { key: fieldKey, padding: "300" },
                React.createElement(InlineGrid, { columns: "1fr auto", gap: "200", alignItems: "center" },
                    React.createElement(Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" },
                        React.createElement(Box, { padding: "200" },
                            React.createElement(InlineGrid, { columns: "1fr 1fr 1fr" },
                                renderOptionLabel(siblingOption.label, "primary"),
                                siblingOption?.secondaryLabel && renderOptionLabel(siblingOption.secondaryLabel, "secondary"),
                                siblingOption?.tertiaryLabel && renderOptionLabel(siblingOption.tertiaryLabel, "tertiary"))),
                        hasChildForm && (React.createElement(Box, { borderColor: "border", borderBlockStartWidth: "025" },
                            React.createElement(Box, { padding: "200" },
                                React.createElement(RelationshipContext.Provider, { value: {
                                        transformPath: (path) => `${joinModelField}.${idx}.${path.replace(`${joinModelApiIdentifier}.`, "")}`,
                                        transformMetadataPath: (path) => `${pathPrefix}.${path}`,
                                        fieldArray,
                                    } }, props.children))))),
                    React.createElement(Box, null,
                        React.createElement(Button, { variant: "tertiary", icon: XCircleIcon, onClick: () => {
                                remove(idx);
                            } })))));
        }))) : (React.createElement(Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" },
            React.createElement(Box, { padding: "300" },
                React.createElement(InlineStack, { align: "center" },
                    React.createElement(Text, { as: "p", variant: "bodyMd", tone: "subdued" },
                        "No ",
                        siblingModelName,
                        " yet")))))));
});
//# sourceMappingURL=PolarisAutoHasManyThroughForm.js.map