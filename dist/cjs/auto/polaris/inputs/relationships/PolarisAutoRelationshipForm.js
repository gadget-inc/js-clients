"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoRelationshipForm = exports.useRelationshipContext = exports.RelationshipContext = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importStar(require("react"));
const AutoFormContext_js_1 = require("../../../AutoFormContext.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useFieldMetadata_js_1 = require("../../../hooks/useFieldMetadata.js");
const useHasManyController_js_1 = require("../../../hooks/useHasManyController.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
exports.RelationshipContext = react_1.default.createContext(undefined);
const useRelationshipContext = () => {
    return react_1.default.useContext(exports.RelationshipContext);
};
exports.useRelationshipContext = useRelationshipContext;
exports.PolarisAutoRelationshipForm = (0, AutoInput_js_1.autoInput)((props) => {
    const { field } = props;
    const { model } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    if (!model) {
        return null;
    }
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const pathPrefix = path.replace(new RegExp(`^${model.apiIdentifier}\\.`), "");
    if (metadata.configuration.__typename === "GadgetBelongsToConfig") {
        return react_1.default.createElement(PolarisAutoBelongsToRelationshipForm, { pathPrefix: pathPrefix }, props.children);
    }
    else if (metadata.configuration.__typename === "GadgetHasManyConfig") {
        return (react_1.default.createElement(PolarisAutoHasManyRelationshipForm, { field: field, pathPrefix: pathPrefix, primaryLabel: props.primaryLabel }, props.children));
    }
    else {
        return null;
    }
});
const PolarisAutoBelongsToRelationshipForm = (props) => {
    const { pathPrefix } = props;
    return react_1.default.createElement(exports.RelationshipContext.Provider, { value: { pathPrefix } }, props.children);
};
const PolarisAutoHasManyRelationshipForm = (props) => {
    const { field, pathPrefix } = props;
    const { fieldArray, records, fieldMetadata } = (0, useHasManyController_js_1.useHasManyController)({ field });
    const { metadata } = fieldMetadata;
    const { fields, append, remove } = fieldArray;
    if (metadata.configuration.__typename !== "GadgetHasManyConfig") {
        throw new Error("PolarisAutoHasManyRelationshipForm can only be used for HasMany fields");
    }
    const modelName = metadata.configuration.relatedModel?.name;
    const primaryLabel = (0, useRelatedModel_js_1.useOptionLabelForField)(field, props.primaryLabel);
    const [editingIndex, setEditingIndex] = (0, react_1.useState)(null);
    return (react_1.default.createElement(polaris_1.Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" },
        react_1.default.createElement(polaris_1.BlockStack, { as: "ul" },
            fields.flatMap((field, idx) => {
                const record = records[idx];
                if (!record) {
                    return [];
                }
                const primary = (0, useRelatedModel_js_1.getRecordAsOption)(record, primaryLabel);
                const secondary = props.secondaryLabel && (0, useRelatedModel_js_1.getRecordLabel)(record, props.secondaryLabel);
                return (react_1.default.createElement(polaris_1.Box, { key: field._fieldArrayKey, borderColor: "border", borderBlockEndWidth: "025" }, editingIndex == idx ? (react_1.default.createElement(polaris_1.Box, { padding: "300" },
                    react_1.default.createElement(polaris_1.BlockStack, { gap: "300" },
                        react_1.default.createElement(exports.RelationshipContext.Provider, { value: { pathPrefix: `${pathPrefix}.${idx}`, fieldArray } }, props.children),
                        react_1.default.createElement(polaris_1.InlineStack, { align: "space-between" },
                            react_1.default.createElement(polaris_1.Button, { tone: "critical", onClick: () => remove(idx) }, "Delete"),
                            react_1.default.createElement(polaris_1.Button, { variant: "primary", onClick: () => setEditingIndex(null) }, "Confirm"))))) : (react_1.default.createElement(polaris_1.ResourceItem, { id: primary.id, name: primary.label ?? primary.id, onClick: () => setEditingIndex(idx) }, primary.label ? (react_1.default.createElement(polaris_1.BlockStack, { gap: "200" },
                    react_1.default.createElement(polaris_1.Text, { variant: "bodyMd", fontWeight: "semibold", as: "h3" }, primary.label),
                    secondary && (react_1.default.createElement(polaris_1.Text, { variant: "bodyMd", as: "p", tone: "subdued" }, secondary)))) : (react_1.default.createElement(polaris_1.Text, { variant: "bodyMd", as: "h3", tone: "subdued" }, "Click to edit..."))))));
            }),
            react_1.default.createElement(polaris_1.Box, null,
                react_1.default.createElement(polaris_1.ResourceItem, { id: "add", name: "Add", onClick: () => {
                        append({});
                        setEditingIndex(fields.length);
                    } },
                    react_1.default.createElement(polaris_1.InlineStack, { align: "start", gap: "200" },
                        react_1.default.createElement(polaris_1.Box, null,
                            react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.PlusCircleIcon })),
                        react_1.default.createElement(polaris_1.Text, { as: "p", variant: "bodyMd", fontWeight: "semibold" },
                            "Add ",
                            modelName)))))));
};
//# sourceMappingURL=PolarisAutoRelationshipForm.js.map