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
const EditableOptionLabelButton_js_1 = require("./EditableOptionLabelButton.js");
const makeShadcnAutoHasManyForm = ({ Accordion, AccordionContent, AccordionItem, Badge, Button, Label, }) => {
    const EditableOptionLabelButton = (0, EditableOptionLabelButton_js_1.makeShadcnEditableOptionLabelButton)({ Badge, Button, Label });
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
            react_1.default.createElement("div", { style: { marginBottom: "8px" } }, props.label ?? react_1.default.createElement("h2", { className: "text-lg font-medium" }, metadata.name)),
            react_1.default.createElement("div", null,
                react_1.default.createElement(Accordion, { type: "single", collapsible: true, value: editingIndex !== null ? `${fieldArrayPath}.${editingIndex}` : undefined, className: "w-full" },
                    fields.flatMap((field, idx) => {
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
                        const position = idx === 0 ? "top" : "middle";
                        if (isEditing) {
                            return (react_1.default.createElement(AccordionItem, { key: field._fieldArrayKey, value: `${fieldArrayPath}.${idx}`, id: `${pathPrefix}.${idx}` },
                                react_1.default.createElement(AccordionContent, { className: `p-3 ${positionalBorder[position]}` },
                                    react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: {
                                            transformPath: (path) => `${pathPrefix}.${idx}.${path}`,
                                            transformMetadataPath: (path) => `${metadataPathPrefix}.${path}`,
                                            fieldArray,
                                        } }, props.children),
                                    react_1.default.createElement("div", { className: "flex justify-between pt-4" },
                                        react_1.default.createElement(Button, { variant: "destructive", id: `deleteButton_${metadataPathPrefix}.${idx}`, onClick: () => remove(idx) }, "Delete"),
                                        react_1.default.createElement(Button, { variant: "default", type: "button", id: `confirmButton_${metadataPathPrefix}.${idx}`, onClick: () => setEditingIndex(null) }, "Confirm")))));
                        }
                        return (react_1.default.createElement(AccordionItem, { key: field._fieldArrayKey, value: `${fieldArrayPath}.${idx}`, id: `${pathPrefix}.${idx}` },
                            react_1.default.createElement(AccordionSection, { position: position, onClick: () => setEditingIndex(idx) },
                                react_1.default.createElement(EditableOptionLabelButton, { option: option }))));
                    }),
                    react_1.default.createElement(AccordionSection, { position: fields.length === 0 ? "only" : "bottom", onClick: () => {
                            append({});
                            setEditingIndex(fields.length);
                        } },
                        react_1.default.createElement(lucide_react_1.PlusCircleIcon, { className: "w-4 h-4" }),
                        react_1.default.createElement(Label, { className: "text-sm font-semibold cursor-pointer" },
                            "Add ",
                            modelName))))));
    }
    function AccordionSection(props) {
        const { position, children, onClick } = props;
        return (react_1.default.createElement(Button, { type: "button", variant: "outline", className: `flex w-full h-fit justify-start gap-2 px-4 py-3 cursor-pointer ${position ? `${positionalBorder[position]}` : ""}`, onClick: (e) => {
                onClick?.();
            } }, children));
    }
    return (0, AutoInput_js_1.autoRelationshipForm)(ShadcnAutoHasManyForm);
};
exports.makeShadcnAutoHasManyForm = makeShadcnAutoHasManyForm;
const positionalBorder = {
    top: "rounded-t-md rounded-b-none border-0 border-x-[1px] border-t-[1px]",
    middle: "rounded-none border-0 border-x-[1px]",
    bottom: "rounded-b-md rounded-t-none border-0 border-x-[1px] border-b-[1px]",
    only: "rounded-md border-0 border-x-[1px] border-y-[1px]",
};
//# sourceMappingURL=ShadcnAutoHasManyForm.js.map