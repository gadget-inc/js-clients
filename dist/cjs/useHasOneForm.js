"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHasOneForm = void 0;
const react_1 = require("react");
const AutoFormContext_js_1 = require("./auto/AutoFormContext.js");
const useHasOneController_js_1 = require("./auto/hooks/useHasOneController.js");
const useRequiredChildComponentsValidator_js_1 = require("./auto/hooks/useRequiredChildComponentsValidator.js");
const useSingleRelatedRecordRelationshipForm_js_1 = require("./useSingleRelatedRecordRelationshipForm.js");
const useHasOneForm = (props) => {
    (0, useRequiredChildComponentsValidator_js_1.useRequiredChildComponentsValidator)(props, "AutoHasOneForm");
    const { record, relatedModelOptions } = (0, useHasOneController_js_1.useHasOneController)(props);
    const form = (0, useSingleRelatedRecordRelationshipForm_js_1.useSingleRelatedRecordRelationshipForm)({
        ...props,
        relationshipController: { record, relatedModelOptions },
    });
    const { isEditing, setIsEditing, setActionsOpen, setValue, path, metaDataPathPrefix } = form;
    const { fields, model } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const newRecordInitialValues = (0, react_1.useMemo)(() => {
        if (!model) {
            return [];
        }
        const fullPathPrefix = model.apiIdentifier + "." + metaDataPathPrefix + ".";
        const fieldsToInitialize = fields
            .filter((field) => field.path.startsWith(fullPathPrefix))
            .map((field) => field.path.replace(fullPathPrefix, ""));
        // Created records always start with all empty fields
        const nullInitialValues = Object.fromEntries(fieldsToInitialize.map((key) => [key, null]));
        return nullInitialValues;
    }, [fields, model?.apiIdentifier, metaDataPathPrefix]);
    /**
     * Initializes the form state to create a new record
     * If the current record was previously linked, then it will be unlinked
     */
    const startCreatingRecord = (0, react_1.useCallback)(() => {
        setIsEditing(true);
        setActionsOpen(false);
        // Maintain the unlink value if we are replacing the existing related record with a new one
        const unlinkValue = record?._unlink ?? record?.id;
        setValue(path, {
            ...newRecordInitialValues,
            ...(unlinkValue
                ? {
                    __replace: true, // To indicate that we are replacing the current record with a new one
                    _unlink: unlinkValue,
                }
                : {}),
        });
    }, [setIsEditing, setActionsOpen, newRecordInitialValues, path, setValue, record]);
    const confirmEdit = (0, react_1.useCallback)(() => {
        setIsEditing(false);
        setActionsOpen(false);
    }, [setIsEditing, setActionsOpen]);
    /**
     * Unlinks existing related records and removes created & selected records from the form state
     */
    const removeRecord = (0, react_1.useCallback)(() => {
        setIsEditing(false);
        setActionsOpen(false);
        if (!record) {
            return;
        }
        const { _unlink, _link, id: recordId } = record;
        const isRecordSelectedFromDropdown = !!_link;
        const unlinkValue = _unlink ?? recordId;
        setValue(path, unlinkValue && !isRecordSelectedFromDropdown
            ? { _unlink: unlinkValue } // unlinking he related record that is already linked in the API DB
            : null // Removing the created record in the form that is not in the API DB
        );
    }, [record, path, setValue, setIsEditing, setActionsOpen]);
    const isNewRecordThatUnlinksExisting = (0, react_1.useMemo)(() => {
        if (!record) {
            return false;
        }
        const hasUnlink = "_unlink" in record && record._unlink;
        if (!hasUnlink) {
            return false;
        }
        const { __typename, _unlink, ...otherFields } = record;
        return Object.keys(otherFields).length > 0;
    }, [record]);
    const hasRecord = !!(record && (!("_unlink" in record && record._unlink) || isNewRecordThatUnlinksExisting));
    const isCreatingRecord = isEditing && !hasRecord;
    return {
        ...form,
        confirmEdit,
        removeRecord,
        setIsEditing,
        startCreatingRecord,
        hasRecord,
        isCreatingRecord,
    };
};
exports.useHasOneForm = useHasOneForm;
//# sourceMappingURL=useHasOneForm.js.map