"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoHasOneForm = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importStar(require("react"));
const useHasOneForm_js_1 = require("../../../../useHasOneForm.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useAutoRelationship_js_1 = require("../../../hooks/useAutoRelationship.js");
const utils_js_1 = require("../../utils.js");
const SearchableSingleRelatedModelRecordSelector_js_1 = require("./SearchableSingleRelatedModelRecordSelector.js");
const makeShadcnAutoHasOneForm = ({ Badge, Button, Command, CommandItem, CommandInput, CommandLoading, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, ScrollArea, Accordion, AccordionItem, AccordionTrigger, }) => {
    const renderOptionLabel = (0, utils_js_1.makeShadcnRenderOptionLabel)({ Label, Badge, Button });
    const SearchableSingleRelatedModelRecordSelector = (0, SearchableSingleRelatedModelRecordSelector_js_1.makeSearchableSingleRelatedModelRecordSelector)({
        Command,
        CommandItem,
        CommandInput,
        CommandLoading,
        Label,
        CommandList,
        CommandEmpty,
        CommandGroup,
        Checkbox,
        ScrollArea,
    });
    function ShadcnHasOneForm(props) {
        const { field } = props;
        const form = (0, useHasOneForm_js_1.useHasOneForm)(props);
        const { record, isEditing, setIsEditing, pathPrefix, metaDataPathPrefix, hasRecord, recordOption, isCreatingRecord, confirmEdit, removeRecord, relatedModelName, } = form;
        const clickConfirmEdit = (0, react_1.useCallback)((e) => {
            e.preventDefault();
            e.stopPropagation();
            confirmEdit();
        }, [confirmEdit]);
        const clickRemoveRecord = (0, react_1.useCallback)((e) => {
            e.preventDefault();
            e.stopPropagation();
            removeRecord();
        }, [removeRecord]);
        return (react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: { transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path } },
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "flex flex-row justify-between items-center" },
                    react_1.default.createElement("h2", { className: "text-lg font-medium" }, relatedModelName)),
                hasRecord || isCreatingRecord ? (react_1.default.createElement(Accordion, { type: "single", collapsible: true, className: "w-full" }, !isEditing ? (react_1.default.createElement(AccordionItem, { value: `${pathPrefix}.${record?.id ? `update-${record.id}` : `create`}` },
                    react_1.default.createElement(AccordionTrigger, { onClick: (e) => {
                            e.preventDefault();
                            setIsEditing(true);
                        } },
                        react_1.default.createElement("div", { className: "flex justify-between w-full items-center" },
                            react_1.default.createElement("div", { className: "flex flex-col gap-1 items-start" },
                                recordOption?.primary && renderOptionLabel(recordOption?.primary, "primary"),
                                recordOption?.secondary && renderOptionLabel(recordOption?.secondary, "secondary")),
                            recordOption?.tertiary && (react_1.default.createElement("div", { className: "flex items-center" }, renderOptionLabel(recordOption?.tertiary, "tertiary"))))))) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: "border border-gray-300 rounded-md p-3" },
                        props.children,
                        react_1.default.createElement("div", { className: "flex justify-between p-4" },
                            react_1.default.createElement(Button, { variant: "destructive", id: `deleteButton_${metaDataPathPrefix}`, onClick: clickRemoveRecord }, "Remove"),
                            react_1.default.createElement(Button, { variant: "default", type: "button", id: `confirmButton_${metaDataPathPrefix}`, onClick: clickConfirmEdit }, "Confirm"))))))) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(EmptyFormComponent, { form: form, field: field }))))));
    }
    function EmptyFormComponent(props) {
        const { field, form } = props;
        if (canSelectExistingRecord) {
            return react_1.default.createElement(SearchableSingleRelatedModelRecordSelector, { field: field, form: form, override: { addNewRecord: form.startCreatingRecord } });
        }
        return react_1.default.createElement(CreateNewChildButton, { form: form });
    }
    function CreateNewChildButton(props) {
        const { startCreatingRecord, relatedModelName } = props.form;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Button, { type: "button", variant: "default", className: "flex gap-1 border border-gray-300 rounded-md p-2 cursor-pointer", onClick: startCreatingRecord },
                react_1.default.createElement(lucide_react_1.PlusCircleIcon, { className: "w-4 h-4" }),
                react_1.default.createElement(Label, { className: "text-sm font-semibold" },
                    "Add ",
                    relatedModelName))));
    }
    return (0, AutoInput_js_1.autoRelationshipForm)(ShadcnHasOneForm);
};
exports.makeShadcnAutoHasOneForm = makeShadcnAutoHasOneForm;
/**
 * TODO - If this gets enabled fix this:
 *    - Workflow
 *      - existingSelectedRecord
 *      - removeSelection
 *      - reselectTheSameRecordInDropdown
 *      - removeSelection
 *      - send
 *    - Right now, this workflow sends null as the hasOne field value, which does nothing. It should be _unlink
 */
const canSelectExistingRecord = false;
//# sourceMappingURL=ShadcnAutoHasOneForm.js.map