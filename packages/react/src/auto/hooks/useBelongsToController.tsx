import { useCallback } from "react";
import { GadgetFieldType } from "../../internal/gql/graphql.js";
import { useController, useFormContext, useWatch, type Control } from "../../useActionForm.js";
import type { AutoRelationshipFormProps, AutoRelationshipInputProps } from "../interfaces/AutoRelationshipInputProps.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useRelatedModelOptions } from "./useRelatedModel.js";
import { assertFieldType } from "./utils.js";

export const useBelongsToController = (props: Omit<AutoRelationshipFormProps, "children" | "label">) => {
  const { field } = props;
  const fieldMetadata = useFieldMetadata(field);
  const { path, metadata } = fieldMetadata;
  assertFieldType({
    fieldApiIdentifier: field,
    actualFieldType: metadata.fieldType,
    expectedFieldType: GadgetFieldType.BelongsTo,
  });

  const record = useWatch({ name: path });

  const relatedModelOptions = useRelatedModelOptions(props);

  const isLoading = relatedModelOptions.relatedModel.fetching;
  const errorMessage = relatedModelOptions.relatedModel.error?.message;

  return {
    record,
    fieldMetadata,
    relatedModelOptions,
    isLoading,
    errorMessage,
  };
};

export const useBelongsToInputController = (props: AutoRelationshipInputProps) => {
  const { field, control, optionLabel } = props;
  const { fieldMetadata, relatedModelOptions, isLoading, errorMessage } = useBelongsToController({
    field,
    displayRecord: { primary: optionLabel },
  });
  const { path } = fieldMetadata;

  const {
    field: { value, onChange },
  } = useBelongsToFieldIdPropertyController({
    name: path,
    control,
  });

  const { danglingSelectedRecordId, selectedRecord, maybeClearDanglingSelectedRecord } = useBelongsToSelectedRecord({
    path,
    relatedModelOptions,
    selectedRecordIdFromController: value,
  });

  const onSelectRecord = useCallback(
    (record: Record<string, any>) => {
      onChange(record.id);
    },
    [onChange]
  );

  const onRemoveRecord = useCallback(() => {
    onChange(null);
    maybeClearDanglingSelectedRecord();
  }, [onChange, maybeClearDanglingSelectedRecord]);

  return {
    fieldMetadata,
    relatedModelOptions,
    onSelectRecord,
    onRemoveRecord,
    selectedRecord,
    danglingSelectedRecordId,
    isLoading,
    errorMessage,
  };
};

const useBelongsToFieldIdPropertyController = (props: { name: string; control?: Control }) => {
  const { name, control } = props;

  // use the path of the full belongsTo field here and extract the ID only.
  // This prevents additional changes on the record beyond the relationship link change

  const {
    field: { value: fullFieldValue, onChange: fullFieldOnChange },
  } = useController({ name, control });

  const value = fullFieldValue?.id;
  const onChange = useCallback(
    (recordId: any) => {
      fullFieldOnChange({
        // Set the ID only to omit additional properties from being included in the GQL request
        id: recordId,
      });
    },
    [fullFieldOnChange]
  );

  return { field: { value, onChange } };
};

const useBelongsToSelectedRecord = (props: {
  path: string;
  relatedModelOptions: ReturnType<typeof useRelatedModelOptions>;
  selectedRecordIdFromController: any;
}) => {
  const { path, relatedModelOptions, selectedRecordIdFromController } = props;
  const { getValues, setValue } = useFormContext();
  const selectedRelatedRecord = getValues(path); // The selected record from initial `findBy` lookup
  const rawSelectedRelatedRecordId = getValues(`${path}Id`); // The raw ID in the current record

  const noSelectedRecord =
    rawSelectedRelatedRecordId === null || // null when on an existing record without a related ID
    rawSelectedRelatedRecordId === undefined; // undefined when on a new record

  // The related record ID if the related record ID is defined but the record does not exist.
  const danglingSelectedRecordId =
    !noSelectedRecord &&
    selectedRelatedRecord === null && // Null when the related record does not exist
    rawSelectedRelatedRecordId
      ? rawSelectedRelatedRecordId
      : undefined;

  const maybeClearDanglingSelectedRecord = useCallback(() => {
    setValue(`${path}Id`, null);
  }, [setValue, path]);

  const selectedRecord: Record<string, any> | undefined =
    relatedModelOptions.relatedModel.records.find((record) => record.id === selectedRecordIdFromController) ??
    //If the selected record exists, but is not in the list of related records, try to get it from the formContext
    selectedRelatedRecord;

  return {
    noSelectedRecord,
    danglingSelectedRecordId,
    maybeClearDanglingSelectedRecord,
    selectedRecord,
  };
};
