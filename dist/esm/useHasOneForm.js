import { useAutoRelationship, useRelationshipContext } from "./auto/hooks/useAutoRelationship.js";
import { useHasOneController } from "./auto/hooks/useHasOneController.js";
import { getRecordAsOption, useOptionLabelForField } from "./auto/hooks/useRelatedModel.js";
import { useRequiredChildComponentsValidator } from "./auto/hooks/useRequiredChildComponentsValidator.js";
import { useFormContext } from "./useActionForm.js";
import { get } from "./utils.js";
import { useEffect, useState } from "react";
export const useHasOneForm = (props) => {
    useRequiredChildComponentsValidator(props, "AutoHasOneForm");
    const { path, metadata } = useAutoRelationship({ field: props.field });
    const { setValue, getValues, formState: { defaultValues, submitCount, isSubmitSuccessful }, } = useFormContext();
    const { record, relatedModelOptions } = useHasOneController(props);
    const [actionsOpen, setActionsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const { search, searchFilterOptions, pagination, relatedModel: { records, fetching: isLoading }, } = relatedModelOptions;
    const relationshipContext = useRelationshipContext();
    const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
    const metaDataPathPrefix = relationshipContext?.transformMetadataPath
        ? relationshipContext.transformMetadataPath(props.field)
        : pathPrefix;
    const defaultRecordId = get(defaultValues, path)?.id;
    // each time the form is submitted if the child record is created we need to set the id to the default record id
    // that comes from the response to the action mutation
    useEffect(() => {
        if (isSubmitSuccessful && record && !record.id && !("_link" in record) && !("_unlink" in record) && defaultRecordId) {
            setValue(path + ".id", defaultRecordId);
        }
    }, [record, defaultRecordId, path, setValue, submitCount, isSubmitSuccessful]);
    const primaryLabel = useOptionLabelForField(props.field, props.primaryLabel);
    const hasRecord = !!(record && !("_unlink" in record && record._unlink));
    const recordOption = record ? getRecordAsOption(record, primaryLabel, props.secondaryLabel, props.tertiaryLabel) : null;
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
//# sourceMappingURL=useHasOneForm.js.map