import { AutoSelection, BlockStack, Box, Button, Icon, InlineGrid, InlineStack, Listbox, Text } from "@shopify/polaris";
import { PlusIcon, XCircleIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { useHasManyThroughForm } from "../../../../useHasManyThroughForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { getRecordAsOption } from "../../../hooks/useRelatedModel.js";
import { RelatedModelOptionsPopover, RelatedModelOptionsSearch } from "./RelatedModelOptions.js";
import { renderOptionLabel } from "./utils.js";
export const PolarisAutoHasManyThroughForm = autoRelationshipForm((props) => {
    const [addingSibling, setAddingSibling] = useState(false);
    const { append, remove, joinRecords, primaryLabel, hasChildForm, listboxId, pathPrefix, metaDataPathPrefix, siblingModelName, siblingRecordsLoading, siblingRecords, siblingPagination, search, joinModelField, joinModelApiIdentifier, siblingModelOptions, inverseRelatedModelField, fieldArray, } = useHasManyThroughForm(props);
    return (React.createElement(BlockStack, { gap: "200" },
        React.createElement(InlineGrid, { columns: "1fr auto" },
            props.label ?? (React.createElement(Text, { as: "h2", variant: "headingSm" }, siblingModelName)),
            React.createElement(RelatedModelOptionsPopover, { active: addingSibling, activator: React.createElement(Button, { onClick: () => setAddingSibling((prev) => !prev), disclosure: true },
                    "Add ",
                    siblingModelName ?? "related model"), onClose: () => setAddingSibling(false), onScrolledToBottom: siblingPagination.loadNextPage, search: React.createElement(RelatedModelOptionsSearch, { modelName: siblingModelName, value: search.value, onChange: search.set, ariaControls: listboxId }), options: siblingModelOptions, records: siblingRecords, onSelect: (record) => {
                    inverseRelatedModelField && append({ [inverseRelatedModelField]: { ...record, _link: record.id } });
                }, isLoading: siblingRecordsLoading, autoSelection: AutoSelection.None, renderOption: (option) => React.createElement(SiblingOption, { option: option }) })),
        joinRecords.length > 0 ? (React.createElement(BlockStack, { as: "ul" }, joinRecords.map(([fieldKey, idx, record]) => {
            const siblingRecord = inverseRelatedModelField && record[inverseRelatedModelField];
            const siblingOption = getRecordAsOption(siblingRecord, primaryLabel, props.secondaryLabel, props.tertiaryLabel);
            return (React.createElement(Box, { key: fieldKey, padding: "300" },
                React.createElement(InlineGrid, { columns: "1fr auto", gap: "200", alignItems: "center" },
                    React.createElement(Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" },
                        React.createElement("div", { style: { display: "flex", padding: "8px" } },
                            React.createElement(Box, null,
                                React.createElement(InlineStack, { gap: "200" },
                                    renderOptionLabel(siblingOption.label, "primary"),
                                    siblingOption?.tertiaryLabel && renderOptionLabel(siblingOption.tertiaryLabel, "tertiary")),
                                siblingOption?.secondaryLabel && renderOptionLabel(siblingOption.secondaryLabel, "secondary")),
                            React.createElement("div", { style: { marginLeft: "auto", alignSelf: "center" } },
                                React.createElement(Button, { id: `deleteButton_${pathPrefix}.${idx}`, variant: "tertiary", icon: XCircleIcon, onClick: () => remove(idx) }))),
                        hasChildForm && (React.createElement(Box, { borderColor: "border", borderBlockStartWidth: "025" },
                            React.createElement(Box, { padding: "200" },
                                React.createElement(RelationshipContext.Provider, { value: {
                                        transformPath: (path) => `${joinModelField}.${idx}.${path.replace(`${joinModelApiIdentifier}.`, "")}`,
                                        transformMetadataPath: (path) => `${metaDataPathPrefix}.${path}`,
                                        fieldArray,
                                        hasManyThrough: { joinModelApiIdentifier, inverseRelatedModelField },
                                    } }, props.children))))))));
        }))) : (React.createElement(Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" },
            React.createElement(Box, { padding: "300" },
                React.createElement(InlineStack, { align: "center" },
                    React.createElement(Text, { as: "p", variant: "bodyMd", tone: "subdued" },
                        "No ",
                        siblingModelName,
                        " yet")))))));
});
const SiblingOption = (props) => {
    const { option } = props;
    return (React.createElement(Listbox.Action, { key: option.id, value: option.id },
        React.createElement("div", { style: { display: "flex", gap: "200", width: "100%" } },
            React.createElement(BlockStack, { gap: "050" },
                renderOptionLabel(option.label, "primary"),
                option.secondaryLabel && renderOptionLabel(option.secondaryLabel, "secondary")),
            React.createElement("div", { style: { marginLeft: "auto", alignSelf: "center" } },
                React.createElement(Icon, { source: PlusIcon })))));
};
//# sourceMappingURL=PolarisAutoHasManyThroughForm.js.map