"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHasOneForm = void 0;
const useAutoRelationship_js_1 = require("./auto/hooks/useAutoRelationship.js");
const useHasOneController_js_1 = require("./auto/hooks/useHasOneController.js");
const useRelatedModel_js_1 = require("./auto/hooks/useRelatedModel.js");
const useActionForm_js_1 = require("./useActionForm.js");
const utils_js_1 = require("./utils.js");
const react_1 = require("react");
const useHasOneForm = (props) => {
    const { path, metadata } = (0, useAutoRelationship_js_1.useAutoRelationship)({ field: props.field });
    const { setValue, getValues, formState: { defaultValues, submitCount, isSubmitSuccessful }, } = (0, useActionForm_js_1.useFormContext)();
    const { record, relatedModelOptions } = (0, useHasOneController_js_1.useHasOneController)(props);
    const [actionsOpen, setActionsOpen] = (0, react_1.useState)(false);
    const [searchOpen, setSearchOpen] = (0, react_1.useState)(false);
    const [modalOpen, setModalOpen] = (0, react_1.useState)(false);
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
    const primaryLabel = (0, useRelatedModel_js_1.useOptionLabelForField)(props.field, props.primaryLabel);
    const hasRecord = !!(record && !("_unlink" in record && record._unlink));
    const recordOption = record ? (0, useRelatedModel_js_1.getRecordAsOption)(record, primaryLabel, props.secondaryLabel, props.tertiaryLabel) : null;
    const childName = metadata.name ?? "Unknown";
    return {
        path,
        metadata,
        setValue,
        record,
        relatedModelOptions,
        actionsOpen,
        setActionsOpen,
        searchOpen,
        setSearchOpen,
        modalOpen,
        setModalOpen,
        search,
        searchFilterOptions,
        pagination,
        records,
        isLoading,
        pathPrefix,
        metaDataPathPrefix,
        hasRecord,
        recordOption,
        childName,
        defaultRecordId,
        primaryLabel,
        secondaryLabel: props.secondaryLabel,
        tertiaryLabel: props.tertiaryLabel,
        getValues,
    };
};
exports.useHasOneForm = useHasOneForm;
//# sourceMappingURL=useHasOneForm.js.map