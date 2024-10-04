import { useCallback, useMemo } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import type { GadgetHasManyConfig } from "../../internal/gql/graphql.js";
import type { AutoRelationshipInputProps } from "../interfaces/AutoRelationshipInputProps.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useRelatedModelOptions } from "./useRelatedModel.js";

export const useHasManyInputController = (props: AutoRelationshipInputProps) => {
  const { field } = props;
  const { watch } = useFormContext();
  const fieldMetadata = useFieldMetadata(field);
  const { metadata, path } = fieldMetadata;
  const inverseFieldApiIdentifier = useMemo(() => {
    return (metadata.configuration as GadgetHasManyConfig).inverseField?.apiIdentifier;
  }, [metadata.configuration]);

  const { fields, remove, append } = useFieldArray({ name: path });
  const clearAllFields = useCallback(async () => remove(), []);

  const relatedModelOptions = useRelatedModelOptions(props);
  const { relatedModel } = relatedModelOptions;

  const errorMessage = relatedModel.error?.message;
  const isLoading = relatedModel.fetching;

  const formValues = watch(path);
  const selectedRecordIds = (formValues as { id: string | null | undefined; __id?: string | null | undefined }[])
    .map((fv) => fv.id ?? fv.__id)
    .filter((id) => !!id) as string[];

  // useEffect(() => {
  //   if (!formContextValue) {
  //     void clearAllFields(); // This is called asynchronously to avoid an infinite loop
  //   }
  // }, [!formContextValue || formContextValue.length === 0]);

  // const selectedRecordIds = uniq(
  //   [
  //     ...fields.map((field, i) => (field as any).__id), // To be selected upon submit
  //   ].filter((id) => !unlinkedRecordIds.includes(id))
  // );

  // const removeFromFieldsByRecordId = useCallback(
  //   (recordId: string) => {
  //     const index = fields.findIndex((entry) => (entry as any).__id === recordId);
  //     if (index > -1) {
  //       remove(index);
  //     }
  //   },
  //   [fields.map((field) => (field as any).__id).join(",")]
  // );

  // const onRemoveRecord = useCallback(
  //   (recordId: string) => {
  //     const isSelectedInBackend = retrievedSelectedRecordIds.includes(recordId);

  //     if (isSelectedInBackend) {
  //       append({
  //         id: recordId,
  //         __id: recordId,
  //         __unlinkedInverseField: inverseFieldApiIdentifier!,
  //       });
  //     } else {
  //       // Only selected in frontend
  //       removeFromFieldsByRecordId(recordId);
  //     }
  //   },
  //   [inverseFieldApiIdentifier, retrievedSelectedRecordIds]
  // );

  // const onSelectRecord = useCallback(
  //   (recordId: string) => {
  //     const isAlreadySelected = selectedRecordIds.includes(recordId);
  //     if (isAlreadySelected) {
  //       onRemoveRecord(recordId);
  //       return;
  //     }

  //     if (unlinkedRecordIds.includes(recordId)) {
  //       // Re-linking a record that is
  //       // retrievedFromBackend -> removedInFrontend -> reselectedInFrontend
  //       removeFromFieldsByRecordId(recordId);
  //     } else {
  //       // Adding a new record that was not previously selected
  //       append({
  //         id: recordId,
  //         __id: recordId, // TODO - Investigate utilization of `getValues()` to potentially avoid this __id system
  //       });
  //     }
  //   },
  //   [selectedRecordIds, unlinkedRecordIds, inverseFieldApiIdentifier, onRemoveRecord]
  // );

  return {
    fieldMetadata,
    relatedModelOptions,

    selectedRecordIds,

    errorMessage,
    isLoading,

    onSelectRecord: () => {},
    onRemoveRecord: () => {},
  };
};
