import { PlusCircleIcon } from "lucide-react";
import React, { useCallback } from "react";
import { useHasOneForm } from "../../../../useHasOneForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { makeShadcnRenderOptionLabel } from "../../utils.js";
import { makeSearchableSingleRelatedModelRecordSelector } from "./SearchableSingleRelatedModelRecordSelector.js";
export const makeShadcnAutoHasOneForm = ({ Badge, Button, Command, CommandItem, CommandInput, CommandLoading, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, ScrollArea, Accordion, AccordionItem, AccordionTrigger, }) => {
    const renderOptionLabel = makeShadcnRenderOptionLabel({ Label, Badge, Button });
    const SearchableSingleRelatedModelRecordSelector = makeSearchableSingleRelatedModelRecordSelector({
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
        const form = useHasOneForm(props);
        const { record, isEditing, setIsEditing, pathPrefix, metaDataPathPrefix, hasRecord, recordOption, isCreatingRecord, confirmEdit, removeRecord, relatedModelName, } = form;
        const clickConfirmEdit = useCallback((e) => {
            e.preventDefault();
            e.stopPropagation();
            confirmEdit();
        }, [confirmEdit]);
        const clickRemoveRecord = useCallback((e) => {
            e.preventDefault();
            e.stopPropagation();
            removeRecord();
        }, [removeRecord]);
        return (React.createElement(RelationshipContext.Provider, { value: { transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path } },
            React.createElement("div", null,
                React.createElement("div", { className: "flex flex-row justify-between items-center" },
                    React.createElement("h2", { className: "text-lg font-medium" }, relatedModelName)),
                hasRecord || isCreatingRecord ? (React.createElement(Accordion, { type: "single", collapsible: true, className: "w-full" }, !isEditing ? (React.createElement(AccordionItem, { value: `${pathPrefix}.${record?.id ? `update-${record.id}` : `create`}` },
                    React.createElement(AccordionTrigger, { onClick: (e) => {
                            e.preventDefault();
                            setIsEditing(true);
                        } },
                        React.createElement("div", { className: "flex justify-between w-full items-center" },
                            React.createElement("div", { className: "flex flex-col gap-1 items-start" },
                                recordOption?.primary && renderOptionLabel(recordOption?.primary, "primary"),
                                recordOption?.secondary && renderOptionLabel(recordOption?.secondary, "secondary")),
                            recordOption?.tertiary && (React.createElement("div", { className: "flex items-center" }, renderOptionLabel(recordOption?.tertiary, "tertiary"))))))) : (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "border border-gray-300 rounded-md p-3" },
                        props.children,
                        React.createElement("div", { className: "flex justify-between p-4" },
                            React.createElement(Button, { variant: "destructive", id: `deleteButton_${metaDataPathPrefix}`, onClick: clickRemoveRecord }, "Remove"),
                            React.createElement(Button, { variant: "default", type: "button", id: `confirmButton_${metaDataPathPrefix}`, onClick: clickConfirmEdit }, "Confirm"))))))) : (React.createElement(React.Fragment, null,
                    React.createElement(EmptyFormComponent, { form: form, field: field }))))));
    }
    function EmptyFormComponent(props) {
        const { field, form } = props;
        if (canSelectExistingRecord) {
            return React.createElement(SearchableSingleRelatedModelRecordSelector, { field: field, form: form, override: { addNewRecord: form.startCreatingRecord } });
        }
        return React.createElement(CreateNewChildButton, { form: form });
    }
    function CreateNewChildButton(props) {
        const { startCreatingRecord, relatedModelName } = props.form;
        return (React.createElement(React.Fragment, null,
            React.createElement(Button, { type: "button", variant: "default", className: "flex gap-1 border border-gray-300 rounded-md p-2 cursor-pointer", onClick: startCreatingRecord },
                React.createElement(PlusCircleIcon, { className: "w-4 h-4" }),
                React.createElement(Label, { className: "text-sm font-semibold" },
                    "Add ",
                    relatedModelName))));
    }
    return autoRelationshipForm(ShadcnHasOneForm);
};
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