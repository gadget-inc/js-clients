import { BlockStack, Box, Button, Icon, InlineStack, ResourceItem, Text } from "@shopify/polaris";
import { PlusCircleIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { useAutoFormMetadata } from "../../../AutoFormContext.js";
import { autoInput } from "../../../AutoInput.js";
import { useFieldMetadata } from "../../../hooks/useFieldMetadata.js";
import { useHasManyController } from "../../../hooks/useHasManyController.js";
import { getRecordAsOption, getRecordLabel, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
export const RelationshipContext = React.createContext(undefined);
export const useRelationshipContext = () => {
    return React.useContext(RelationshipContext);
};
export const PolarisAutoRelationshipForm = autoInput((props) => {
    const { field } = props;
    const { model } = useAutoFormMetadata();
    if (!model) {
        return null;
    }
    const { path, metadata } = useFieldMetadata(field);
    const pathPrefix = path.replace(new RegExp(`^${model.apiIdentifier}\\.`), "");
    if (metadata.configuration.__typename === "GadgetBelongsToConfig") {
        return React.createElement(PolarisAutoBelongsToRelationshipForm, { pathPrefix: pathPrefix }, props.children);
    }
    else if (metadata.configuration.__typename === "GadgetHasManyConfig") {
        return (React.createElement(PolarisAutoHasManyRelationshipForm, { field: field, pathPrefix: pathPrefix, primaryLabel: props.primaryLabel }, props.children));
    }
    else {
        return null;
    }
});
const PolarisAutoBelongsToRelationshipForm = (props) => {
    const { pathPrefix } = props;
    return React.createElement(RelationshipContext.Provider, { value: { pathPrefix } }, props.children);
};
const PolarisAutoHasManyRelationshipForm = (props) => {
    const { field, pathPrefix } = props;
    const { fieldArray, records, fieldMetadata } = useHasManyController({ field });
    const { metadata } = fieldMetadata;
    const { fields, append, remove } = fieldArray;
    if (metadata.configuration.__typename !== "GadgetHasManyConfig") {
        throw new Error("PolarisAutoHasManyRelationshipForm can only be used for HasMany fields");
    }
    const modelName = metadata.configuration.relatedModel?.name;
    const primaryLabel = useOptionLabelForField(field, props.primaryLabel);
    const [editingIndex, setEditingIndex] = useState(null);
    return (React.createElement(Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" },
        React.createElement(BlockStack, { as: "ul" },
            fields.flatMap((field, idx) => {
                const record = records[idx];
                if (!record) {
                    return [];
                }
                const primary = getRecordAsOption(record, primaryLabel);
                const secondary = props.secondaryLabel && getRecordLabel(record, props.secondaryLabel);
                return (React.createElement(Box, { key: field._fieldArrayKey, borderColor: "border", borderBlockEndWidth: "025" }, editingIndex == idx ? (React.createElement(Box, { padding: "300" },
                    React.createElement(BlockStack, { gap: "300" },
                        React.createElement(RelationshipContext.Provider, { value: { pathPrefix: `${pathPrefix}.${idx}`, fieldArray } }, props.children),
                        React.createElement(InlineStack, { align: "space-between" },
                            React.createElement(Button, { tone: "critical", onClick: () => remove(idx) }, "Delete"),
                            React.createElement(Button, { variant: "primary", onClick: () => setEditingIndex(null) }, "Confirm"))))) : (React.createElement(ResourceItem, { id: primary.id, name: primary.label ?? primary.id, onClick: () => setEditingIndex(idx) }, primary.label ? (React.createElement(BlockStack, { gap: "200" },
                    React.createElement(Text, { variant: "bodyMd", fontWeight: "semibold", as: "h3" }, primary.label),
                    secondary && (React.createElement(Text, { variant: "bodyMd", as: "p", tone: "subdued" }, secondary)))) : (React.createElement(Text, { variant: "bodyMd", as: "h3", tone: "subdued" }, "Click to edit..."))))));
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
};
//# sourceMappingURL=PolarisAutoRelationshipForm.js.map