"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSingleRelatedRecordRelationshipForm = void 0;
const react_1 = require("react");
const useAutoRelationship_js_1 = require("./auto/hooks/useAutoRelationship.js");
const useRelatedModel_js_1 = require("./auto/hooks/useRelatedModel.js");
const useActionForm_js_1 = require("./useActionForm.js");
const utils_js_1 = require("./utils.js");
const useSingleRelatedRecordRelationshipForm = (props) => {
    const { field, relationshipController: { record, relatedModelOptions }, } = props;
    const { path, metadata } = (0, useAutoRelationship_js_1.useAutoRelationship)({ field });
    const { setValue, getValues, formState: { defaultValues, submitCount, isSubmitSuccessful }, } = (0, useActionForm_js_1.useFormContext)();
    const [actionsOpen, setActionsOpen] = (0, react_1.useState)(false);
    const [searchOpen, setSearchOpen] = (0, react_1.useState)(false);
    const [isEditing, setIsEditing] = (0, react_1.useState)(false);
    const { search, searchFilterOptions, pagination, relatedModel: { records, fetching: isLoading }, } = relatedModelOptions;
    const relationshipContext = (0, useAutoRelationship_js_1.useRelationshipContext)();
    const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
    const metaDataPathPrefix = relationshipContext?.transformMetadataPath
        ? relationshipContext.transformMetadataPath(props.field)
        : pathPrefix;
    const defaultRecordId = (0, utils_js_1.get)(defaultValues, path)?.id;
    // each time the form is submitted if the child record is created we need to set the id to the default record id
    // that comes from the response to the action mutation
    (0, react_1.useEffect)(() => {
        if (isSubmitSuccessful && record && !record.id && !("_link" in record) && !("_unlink" in record) && defaultRecordId) {
            setValue(path + ".id", defaultRecordId);
        }
    }, [record, defaultRecordId, path, setValue, submitCount, isSubmitSuccessful]);
    const recordLabel = (0, useRelatedModel_js_1.useRecordLabelObjectFromProps)(props);
    const recordOption = record ? (0, useRelatedModel_js_1.getRecordAsOption)(record, recordLabel) : null;
    const relatedModelName = metadata.name ?? "Unknown";
    return {
        actionsOpen,
        defaultRecordId,
        getValues,
        isEditing,
        isLoading,
        metaDataPathPrefix,
        metadata,
        pagination,
        path,
        pathPrefix,
        record,
        recordOption,
        records,
        relatedModelName,
        relatedModelOptions,
        search,
        searchFilterOptions,
        searchOpen,
        setActionsOpen,
        setIsEditing,
        setSearchOpen,
        setValue,
    };
};
exports.useSingleRelatedRecordRelationshipForm = useSingleRelatedRecordRelationshipForm;
//# sourceMappingURL=useSingleRelatedRecordRelationshipForm.js.map