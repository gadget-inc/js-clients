"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoHasManyForm = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importStar(require("react"));
const useActionForm_js_1 = require("../../../../useActionForm.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useAutoRelationship_js_1 = require("../../../hooks/useAutoRelationship.js");
const useHasManyController_js_1 = require("../../../hooks/useHasManyController.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const useRequiredChildComponentsValidator_js_1 = require("../../../hooks/useRequiredChildComponentsValidator.js");
const utils_js_1 = require("../../utils.js");
const makeShadcnAutoHasManyForm = ({ Accordion, AccordionContent, AccordionItem, AccordionTrigger, Badge, Button, Label, }) => {
    const renderOptionLabel = (0, utils_js_1.makeShadcnRenderOptionLabel)({ Label, Badge, Button });
    function ShadcnAutoHasManyForm(props) {
        (0, useRequiredChildComponentsValidator_js_1.useRequiredChildComponentsValidator)(props, "AutoHasManyForm");
        const { metadata } = (0, useAutoRelationship_js_1.useAutoRelationship)({ field: props.field });
        const { getValues } = (0, useActionForm_js_1.useFormContext)();
        const { fieldArray, fieldArrayPath } = (0, useHasManyController_js_1.useHasManyController)({ field: props.field });
        const { fields, append, remove } = fieldArray;
        const relationshipContext = (0, useAutoRelationship_js_1.useRelationshipContext)();
        if (metadata.configuration.__typename !== "GadgetHasManyConfig") {
            throw new Error("ShadcnAutoHasManyForm can only be used for HasMany fields");
        }
        const modelName = metadata.configuration.relatedModel?.name;
        const recordLabel = (0, useRelatedModel_js_1.useRecordLabelObjectFromProps)(props);
        const [editingIndex, setEditingIndex] = (0, react_1.useState)(null);
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("div", { style: { marginBottom: "8px" } }, props.label ?? react_1.default.createElement(Label, { className: "text-sm font-semibold" }, metadata.name)),
            react_1.default.createElement("div", null,
                react_1.default.createElement(Accordion, { type: "single", collapsible: true, value: editingIndex !== null ? `${fieldArrayPath}.${editingIndex}` : undefined, className: "w-full" }, fields.flatMap((field, idx) => {
                    // since we don't put full data in the field array when we append, we need to
                    // get the value directly from the form state
                    const record = getValues(`${fieldArrayPath}.${idx}`);
                    if (!record) {
                        return [];
                    }
                    const option = (0, useRelatedModel_js_1.getRecordAsOption)(record, recordLabel);
                    const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
                    const metadataPathPrefix = relationshipContext?.transformMetadataPath
                        ? relationshipContext.transformMetadataPath(props.field)
                        : props.field;
                    const isEditing = editingIndex === idx;
                    if (isEditing) {
                        return (react_1.default.createElement(AccordionItem, { key: field._fieldArrayKey, value: `${fieldArrayPath}.${idx}`, id: `${pathPrefix}.${idx}` },
                            react_1.default.createElement(AccordionContent, { className: "border border-gray-300 rounded-md p-3" },
                                react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: {
                                        transformPath: (path) => `${pathPrefix}.${idx}.${path}`,
                                        transformMetadataPath: (path) => `${metadataPathPrefix}.${path}`,
                                        fieldArray,
                                    } }, props.children),
                                react_1.default.createElement("div", { className: "flex justify-between p-4" },
                                    react_1.default.createElement(Button, { variant: "destructive", id: `deleteButton_${metadataPathPrefix}.${idx}`, onClick: () => remove(idx) }, "Delete"),
                                    react_1.default.createElement(Button, { variant: "default", type: "button", id: `confirmButton_${metadataPathPrefix}.${idx}`, onClick: (e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setEditingIndex(null);
                                        } }, "Confirm")))));
                    }
                    return (react_1.default.createElement(AccordionItem, { key: field._fieldArrayKey, value: `${fieldArrayPath}.${idx}`, id: `${pathPrefix}.${idx}`, onClick: () => setEditingIndex(idx), className: "" },
                        react_1.default.createElement(AccordionTrigger, { onClick: (e) => e.preventDefault() }, option.primary ? (react_1.default.createElement("div", { className: "flex justify-between w-full items-center" },
                            react_1.default.createElement("div", { className: "flex flex-col gap-1 items-start" },
                                renderOptionLabel(option.primary, "primary"),
                                option.secondary && renderOptionLabel(option.secondary, "secondary")),
                            option.tertiary && react_1.default.createElement("div", { className: "flex items-center" }, renderOptionLabel(option.tertiary, "tertiary")))) : (react_1.default.createElement(Label, null, "Click to edit..."))),
                        react_1.default.createElement(AccordionContent, { className: "border border-gray-300 rounded-md p-3" },
                            react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: {
                                    transformPath: (path) => `${pathPrefix}.${idx}.${path}`,
                                    transformMetadataPath: (path) => `${metadataPathPrefix}.${path}`,
                                    fieldArray,
                                } }, props.children))));
                })),
                react_1.default.createElement(Button, { type: "button", variant: "default", className: "flex gap-1 border border-gray-300 rounded-md p-2 cursor-pointer", onClick: () => {
                        append({});
                        setEditingIndex(fields.length);
                    } },
                    react_1.default.createElement(lucide_react_1.PlusCircleIcon, { className: "w-4 h-4" }),
                    react_1.default.createElement(Label, { className: "text-sm font-semibold" },
                        "Add ",
                        modelName)))));
    }
    return (0, AutoInput_js_1.autoRelationshipForm)(ShadcnAutoHasManyForm);
};
exports.makeShadcnAutoHasManyForm = makeShadcnAutoHasManyForm;
//# sourceMappingURL=ShadcnAutoHasManyForm.js.map