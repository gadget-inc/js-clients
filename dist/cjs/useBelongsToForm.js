"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBelongsToForm = void 0;
const react_1 = require("react");
const useAutoRelationship_js_1 = require("./auto/hooks/useAutoRelationship.js");
const useBelongsToController_js_1 = require("./auto/hooks/useBelongsToController.js");
const useRelatedModel_js_1 = require("./auto/hooks/useRelatedModel.js");
const useRequiredChildComponentsValidator_js_1 = require("./auto/hooks/useRequiredChildComponentsValidator.js");
const useActionForm_js_1 = require("./useActionForm.js");
const utils_js_1 = require("./utils.js");
const useBelongsToForm = (props) => {
    (0, useRequiredChildComponentsValidator_js_1.useRequiredChildComponentsValidator)(props, "AutoBelongsToForm");
    const { field } = props;
    const { path, metadata } = (0, useAutoRelationship_js_1.useAutoRelationship)({ field });
    const { setValue, getValues, formState: { defaultValues, submitCount, isSubmitSuccessful }, } = (0, useActionForm_js_1.useFormContext)();
    const { record, relatedModelOptions } = (0, useBelongsToController_js_1.useBelongsToController)(props);
    const [actionsOpen, setActionsOpen] = (0, react_1.useState)(false);
    const [searchOpen, setSearchOpen] = (0, react_1.useState)(false);
    const [modalOpen, setModalOpen] = (0, react_1.useState)(false);
    const { search, searchFilterOptions, pagination, relatedModel: { records, fetching: isLoading }, } = relatedModelOptions;
    const relationshipContext = (0, useAutoRelationship_js_1.useRelationshipContext)();
    const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
    const defaultRecordId = (0, utils_js_1.get)(defaultValues, path)?.id;
    // each time the form is submitted if the child record is created we need to set the id to the default record id
    // that comes from the response to the action mutation
    (0, react_1.useEffect)(() => {
        if (isSubmitSuccessful && record && !record.id && !("_link" in record) && !("_unlink" in record) && defaultRecordId) {
            setValue(path + ".id", defaultRecordId);
        }
    }, [record, defaultRecordId, path, setValue, submitCount, isSubmitSuccessful]);
    const primaryLabel = (0, useRelatedModel_js_1.useOptionLabelForField)(field, props.primaryLabel);
    const hasRecord = !!(record && !("_unlink" in record && record._unlink));
    const recordOption = record ? (0, useRelatedModel_js_1.getRecordAsOption)(record, primaryLabel, props.secondaryLabel, props.tertiaryLabel) : null;
    const parentName = metadata.name ?? "Unknown";
    const metaDataPathPrefix = relationshipContext?.transformMetadataPath
        ? relationshipContext.transformMetadataPath(props.field)
        : props.field;
    return {
        record,
        relatedModelOptions,
        actionsOpen,
        searchOpen,
        modalOpen,
        primaryLabel,
        hasRecord,
        recordOption,
        parentName,
        metadata,
        defaultRecordId,
        path,
        pathPrefix,
        setValue,
        getValues,
        search,
        searchFilterOptions,
        pagination,
        records,
        isLoading,
        setActionsOpen,
        setSearchOpen,
        setModalOpen,
        metaDataPathPrefix,
    };
};
exports.useBelongsToForm = useBelongsToForm;
//# sourceMappingURL=useBelongsToForm.js.map