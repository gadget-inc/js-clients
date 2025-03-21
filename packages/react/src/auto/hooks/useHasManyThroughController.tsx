import { assert } from "@gadgetinc/api-client-core";
import React, { createContext, useCallback, useContext, useMemo, type ReactNode } from "react";
import { GadgetFieldType, type GadgetHasManyThroughConfig } from "../../internal/gql/graphql.js";
import { useFieldArray } from "../../useActionForm.js";
import type { AutoRelationshipFormProps, AutoRelationshipInputProps } from "../interfaces/AutoRelationshipInputProps.js";
import { useRelationshipContext } from "./useAutoRelationship.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useRelatedModelOptions } from "./useRelatedModel.js";
import { assertFieldType } from "./utils.js";

export const useHasManyThroughController = (props: Omit<AutoRelationshipFormProps, "children" | "label">) => {
  const fieldMetadata = useFieldMetadata(props.field);
  const { path, metadata } = fieldMetadata;

  assertFieldType({
    fieldApiIdentifier: props.field,
    actualFieldType: metadata.fieldType,
    expectedFieldType: GadgetFieldType.HasManyThrough,
  });

  const configuration = metadata.configuration as GadgetHasManyThroughConfig;
  const joinModelHasManyFieldApiIdentifier = assert(
    configuration.joinModelHasManyFieldApiIdentifier,
    "joinModelHasManyFieldApiIdentifier is required for hasManyThrough fields"
  );

  const relatedModelOptions = useRelatedModelOptions(props);

  const fieldArrayPath = path.replace(metadata.apiIdentifier, joinModelHasManyFieldApiIdentifier);

  const fieldArray = useFieldArray({ name: fieldArrayPath, keyName: "_fieldArrayKey" });

  const records: Record<string, any>[] = useMemo(() => {
    return fieldArray.fields.map((field) => {
      const { _fieldArrayKey, ...rest } = field;
      return rest;
    });
  }, [fieldArray.fields]);

  const inverseRelatedModelField = useMemo(() => {
    return (metadata.configuration as GadgetHasManyThroughConfig).inverseRelatedModelField?.apiIdentifier;
  }, [metadata.configuration]);

  return {
    fieldArrayPath,
    fieldMetadata,
    fieldArray,
    records,
    relatedModelOptions,
    inverseRelatedModelField,
    joinModelField: joinModelHasManyFieldApiIdentifier,
    joinModelApiIdentifier: configuration.joinModel?.apiIdentifier,
  };
};

export const useHasManyThroughInputController = (props: AutoRelationshipInputProps) => {
  const { fieldMetadata, fieldArray, records, relatedModelOptions, inverseRelatedModelField } = useHasManyThroughController({
    field: props.field,
    recordLabel: props.optionLabel,
    recordFilter: props.recordFilter,
  });

  const { relatedModel } = relatedModelOptions;
  const { remove, append } = fieldArray;

  const selectedRecords = useMemo(() => {
    const siblingRecords: any[] = [];
    const seenIds = new Set<string>();

    for (const record of records) {
      if (inverseRelatedModelField && record[inverseRelatedModelField] && !seenIds.has(record[inverseRelatedModelField].id)) {
        siblingRecords.push(record[inverseRelatedModelField]);
        seenIds.add(record[inverseRelatedModelField].id);
      }
    }

    return siblingRecords;
  }, [records, inverseRelatedModelField]);

  const errorMessage = relatedModel.error?.message;
  const isLoading = relatedModel.fetching;

  const onRemoveRecord = useCallback(
    (record: Record<string, any>) => {
      const index = records.findIndex((value) => inverseRelatedModelField && value[inverseRelatedModelField]?.id === record.id);
      if (index < 0) {
        return;
      }

      remove(index);
    },
    [inverseRelatedModelField, records, remove]
  );

  const onSelectRecord = useCallback(
    (record: Record<string, any>) => {
      const index = records.findIndex((value) => inverseRelatedModelField && value[inverseRelatedModelField]?.id === record.id);
      if (index >= 0) {
        remove(index);
      } else if (inverseRelatedModelField) {
        append({
          [inverseRelatedModelField]: { ...record, _link: record.id },
        });
      }
    },
    [inverseRelatedModelField, records, remove, append]
  );

  return {
    fieldMetadata,
    relatedModelOptions,
    selectedRecords,
    errorMessage,
    isLoading,
    fieldArray,
    onSelectRecord,
    onRemoveRecord,
  };
};

/**
 * A form for including join model fields in a hasManyThrough relationship.
 *
 * @example
 * ```tsx
 * //`course` hasMany `students` through `registration`
 *
 * <AutoForm action={api.course.create}>
 *   <AutoInput field="name" />
 *   <AutoHasManyThroughForm // `students` relationship field on `course` model
 *     field="students"
 *   >
 *     <AutoHasManyThroughJoinModelForm>
 *       <AutoInput // `isTuitionPaid` boolean field on `registration` model
 *         field="isTuitionPaid"
 *       />
 *     </AutoHasManyThroughJoinModelForm>
 *     <AutoInput
 *       field="firstName"
 *     />
 *   </AutoHasManyThroughForm>
 *   <AutoSubmit />
 * </AutoForm>
 *
 * ```
 *
 * @param props.children - Inputs on the join model inside AutoHasManyThroughForm.
 * @returns  Inputs on the join model inside AutoHasManyThroughForm.
 */
export const AutoHasManyThroughJoinModelForm = (props: {
  /** Inputs on the join model inside AutoHasManyThroughForm. */
  children?: ReactNode;
}) => {
  useEnsureInHasManyThroughForm();

  return <HasManyThroughJoinModelContext.Provider value={true}>{props.children}</HasManyThroughJoinModelContext.Provider>;
};

/** Context to track if inside a HasManyThrough join model. */
export const HasManyThroughJoinModelContext = createContext<null | true>(null);

/** Export a hook that checks if inside the component. */
export const useIsInHasManyThroughJoinModelInput = () => {
  return useContext(HasManyThroughJoinModelContext) !== null;
};

/** Ensures component is used inside AutoHasManyThroughForm. */
export const useEnsureInHasManyThroughForm = () => {
  const relationshipContext = useRelationshipContext();

  if (!relationshipContext || !relationshipContext.hasManyThrough) {
    throw new Error(`'AutoJoinModelInput' can only be used within a 'AutoHasManyThroughForm' component`);
  }
};
