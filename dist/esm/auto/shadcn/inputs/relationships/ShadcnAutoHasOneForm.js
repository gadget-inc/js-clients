import { PlusCircleIcon } from "lucide-react";
import React, { useCallback } from "react";
import { useHasOneForm } from "../../../../useHasOneForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { makeShadcnEditableOptionLabelButton } from "./EditableOptionLabelButton.js";
import { makeSearchableSingleRelatedModelRecordSelector } from "./SearchableSingleRelatedModelRecordSelector.js";
export const makeShadcnAutoHasOneForm = ({ Badge, Button, Command, CommandItem, CommandInput, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, }) => {
    const SearchableSingleRelatedModelRecordSelector = makeSearchableSingleRelatedModelRecordSelector({
        Command,
        CommandItem,
        CommandInput,
        Label,
        CommandList,
        CommandEmpty,
        CommandGroup,
        Checkbox,
    });
    const EditableOptionLabelButton = makeShadcnEditableOptionLabelButton({ Badge, Button, Label });
    function ShadcnHasOneForm(props) {
        const { field, label } = props;
        const form = useHasOneForm(props);
        const { isEditing, metadata, setIsEditing, pathPrefix, metaDataPathPrefix, hasRecord, recordOption, isCreatingRecord, confirmEdit, removeRecord, } = form;
        const clickConfirmEdit = useCallback(() => confirmEdit(), [confirmEdit]);
        const clickRemoveRecord = useCallback(() => removeRecord(), [removeRecord]);
        return (React.createElement(RelationshipContext.Provider, { value: { transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path } },
            React.createElement("div", null,
                React.createElement("div", { className: "flex flex-row justify-between items-center mb-2" }, label ?? React.createElement("h2", { className: "text-lg font-medium" }, metadata.name)),
                hasRecord || isCreatingRecord ? (React.createElement(React.Fragment, null, !isEditing ? (React.createElement(React.Fragment, null,
                    React.createElement(ButtonWithLabel, { onClick: () => setIsEditing(true) },
                        React.createElement(EditableOptionLabelButton, { option: recordOption })))) : (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "border border-gray-300 rounded-md p-3" },
                        props.children,
                        React.createElement("div", { className: "flex justify-between pt-4" },
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
            React.createElement(ButtonWithLabel, { onClick: startCreatingRecord },
                React.createElement(PlusCircleIcon, { className: "w-4 h-4" }),
                React.createElement(Label, { className: "text-sm font-semibold cursor-pointer" },
                    "Add ",
                    relatedModelName))));
    }
    function ButtonWithLabel(props) {
        return (React.createElement(React.Fragment, null,
            React.createElement(Button, { type: "button", variant: "outline", className: `flex w-full h-fit justify-start gap-2 border border-gray-300 rounded-md px-4 py-3 cursor-pointer`, onClick: props.onClick }, props.children)));
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