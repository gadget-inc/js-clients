"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoHasManyForm = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importStar(require("react"));
const useActionForm_js_1 = require("../../../../useActionForm.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useAutoRelationship_js_1 = require("../../../hooks/useAutoRelationship.js");
const useHasManyController_js_1 = require("../../../hooks/useHasManyController.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const utils_js_1 = require("./utils.js");
exports.PolarisAutoHasManyForm = (0, AutoInput_js_1.autoRelationshipForm)((props) => {
    const { metadata } = (0, useAutoRelationship_js_1.useAutoRelationship)({ field: props.field });
    const { getValues } = (0, useActionForm_js_1.useFormContext)();
    const { fieldArray, fieldArrayPath } = (0, useHasManyController_js_1.useHasManyController)({ field: props.field });
    const { fields, append, remove } = fieldArray;
    const relationshipContext = (0, useAutoRelationship_js_1.useRelationshipContext)();
    if (metadata.configuration.__typename !== "GadgetHasManyConfig") {
        throw new Error("PolarisAutoHasManyForm can only be used for HasMany fields");
    }
    const modelName = metadata.configuration.relatedModel?.name;
    const primaryLabel = (0, useRelatedModel_js_1.useOptionLabelForField)(props.field, props.primaryLabel);
    const [editingIndex, setEditingIndex] = (0, react_1.useState)(null);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { marginBottom: "8px" } }, props.label ?? (react_1.default.createElement(polaris_1.Text, { as: "h2", variant: "headingSm" }, metadata.name))),
        react_1.default.createElement(polaris_1.Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" },
            react_1.default.createElement(polaris_1.BlockStack, { as: "ul" },
                fields.flatMap((field, idx) => {
                    // since we don't put full data in the field array when we append, we need to
                    // get the value directly from the form state
                    const record = getValues(`${fieldArrayPath}.${idx}`);
                    if (!record) {
                        return [];
                    }
                    const option = (0, useRelatedModel_js_1.getRecordAsOption)(record, primaryLabel, props.secondaryLabel, props.tertiaryLabel);
                    const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
                    const metadataPathPrefix = relationshipContext?.transformMetadataPath
                        ? relationshipContext.transformMetadataPath(props.field)
                        : props.field;
                    return (react_1.default.createElement(polaris_1.Box, { key: field._fieldArrayKey, borderColor: "border", borderBlockEndWidth: "025", id: `${pathPrefix}.${idx}` }, editingIndex == idx ? (react_1.default.createElement(polaris_1.Box, { padding: "300" },
                        react_1.default.createElement(polaris_1.BlockStack, { gap: "300" },
                            react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: {
                                    transformPath: (path) => `${pathPrefix}.${idx}.${path}`,
                                    transformMetadataPath: (path) => `${metadataPathPrefix}.${path}`,
                                    fieldArray,
                                } }, props.children),
                            react_1.default.createElement(polaris_1.InlineStack, { align: "space-between" },
                                react_1.default.createElement(polaris_1.Button, { tone: "critical", onClick: () => remove(idx), id: `deleteButton_${metadataPathPrefix}.${idx}` }, "Delete"),
                                react_1.default.createElement(polaris_1.Button, { variant: "primary", onClick: () => setEditingIndex(null), id: `confirmButton_${metadataPathPrefix}.${idx}` }, "Confirm"))))) : (react_1.default.createElement(polaris_1.ResourceItem, { id: option.id, name: option.label?.toString() ?? option.id, onClick: () => setEditingIndex(idx) }, option.label ? (react_1.default.createElement(polaris_1.InlineStack, { align: "space-between" },
                        react_1.default.createElement(polaris_1.BlockStack, { gap: "200" },
                            (0, utils_js_1.renderOptionLabel)(option.label, "primary"),
                            option.secondaryLabel && (0, utils_js_1.renderOptionLabel)(option.secondaryLabel, "secondary")),
                        option.tertiaryLabel && (0, utils_js_1.renderOptionLabel)(option.tertiaryLabel, "tertiary"))) : (react_1.default.createElement(polaris_1.Text, { variant: "bodyMd", as: "h3", tone: "subdued" }, "Click to edit..."))))));
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
                                modelName))))))));
});
//# sourceMappingURL=PolarisAutoHasManyForm.js.map