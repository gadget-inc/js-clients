import { BlockStack, Box, Button, Icon, InlineStack, ResourceItem, Text } from "@shopify/polaris";
import { PlusCircleIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { useFormContext } from "../../../../useActionForm.js";
import { autoInput } from "../../../AutoInput.js";
import { RelationshipContext, useAutoRelationship, useRelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { useHasManyController } from "../../../hooks/useHasManyController.js";
import { getRecordAsOption, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import { renderOptionLabel } from "./utils.js";
export const PolarisAutoHasManyForm = autoInput((props) => {
    const { metadata } = useAutoRelationship({ field: props.field });
    const { getValues } = useFormContext();
    const { fieldArray, fieldArrayPath } = useHasManyController({ field: props.field });
    const { fields, append, remove } = fieldArray;
    const relationshipContext = useRelationshipContext();
    if (metadata.configuration.__typename !== "GadgetHasManyConfig") {
        throw new Error("PolarisAutoHasManyForm can only be used for HasMany fields");
    }
    const modelName = metadata.configuration.relatedModel?.name;
    const primaryLabel = useOptionLabelForField(props.field, props.primaryLabel);
    const [editingIndex, setEditingIndex] = useState(null);
    return (React.createElement(Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" },
        React.createElement(BlockStack, { as: "ul" },
            fields.flatMap((field, idx) => {
                // since we don't put full data in the field array when we append, we need to
                // get the value directly from the form state
                const record = getValues(`${fieldArrayPath}.${idx}`);
                if (!record) {
                    return [];
                }
                const option = getRecordAsOption(record, primaryLabel, props.secondaryLabel, props.tertiaryLabel);
                const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
                const metadataPathPrefix = relationshipContext?.transformMetadataPath
                    ? relationshipContext.transformMetadataPath(props.field)
                    : props.field;
                return (React.createElement(Box, { key: field._fieldArrayKey, borderColor: "border", borderBlockEndWidth: "025" }, editingIndex == idx ? (React.createElement(Box, { padding: "300" },
                    React.createElement(BlockStack, { gap: "300" },
                        React.createElement(RelationshipContext.Provider, { value: {
                                transformPath: (path) => `${pathPrefix}.${idx}.${path}`,
                                transformMetadataPath: (path) => `${metadataPathPrefix}.${path}`,
                                fieldArray,
                            } }, props.children),
                        React.createElement(InlineStack, { align: "space-between" },
                            React.createElement(Button, { tone: "critical", onClick: () => remove(idx) }, "Delete"),
                            React.createElement(Button, { variant: "primary", onClick: () => setEditingIndex(null) }, "Confirm"))))) : (React.createElement(ResourceItem, { id: option.id, name: option.label?.toString() ?? option.id, onClick: () => setEditingIndex(idx) }, option.label ? (React.createElement(InlineStack, { align: "space-between" },
                    React.createElement(BlockStack, { gap: "200" },
                        renderOptionLabel(option.label, "primary"),
                        option.secondaryLabel && renderOptionLabel(option.secondaryLabel, "secondary")),
                    option.tertiaryLabel && renderOptionLabel(option.tertiaryLabel, "tertiary"))) : (React.createElement(Text, { variant: "bodyMd", as: "h3", tone: "subdued" }, "Click to edit..."))))));
            }),
            React.createElement(Box, null,
                React.createElement(ResourceItem, { id: "add", name: "Add", onClick: () => {
                        append({});
                        setEditingIndex(fields.length);
                    } },
                    React.createElement(InlineStack, { align: "start", gap: "200" },
                        React.createElement(Box, null,
                            React.createElement(Icon, { source: PlusCircleIcon })),
                        React.createElement(Text, { as: "p", variant: "bodyMd", fontWeight: "semibold" },
                            "Add ",
                            modelName)))))));
});
//# sourceMappingURL=PolarisAutoHasManyForm.js.map