import type { ActionFunction, FieldSelection, GadgetRecord, GlobalActionFunction } from "@gadgetinc/api-client-core";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ReactNode } from "react";
import React, { useEffect, useMemo, useRef } from "react";
import type { GadgetHasManyThroughConfig, GadgetObjectFieldConfig } from "../internal/gql/graphql.js";
import type { FieldMetadata, GlobalActionMetadata, ModelWithOneActionMetadata } from "../metadata.js";
import { FieldType, buildAutoFormFieldList, isModelActionMetadata, useActionMetadata } from "../metadata.js";
import type { AnyActionWithId, RecordIdentifier, UseActionFormHookStateData, UseActionFormSubmit } from "../use-action-form/types.js";
import { isPlainObject } from "../use-action-form/utils.js";
import { pathListToSelection } from "../use-table/helpers.js";
import type { FieldErrors, FieldValues, UseFormReturn } from "../useActionForm.js";
import { useActionForm } from "../useActionForm.js";
import { get, getFlattenedObjectKeys, type ErrorWrapper, type OptionsType } from "../utils.js";
import { validationSchema } from "../validationSchema.js";
import {
  validateFindByObjectWithMetadata,
  validateNonBulkAction,
  validateTriggersFromApiClient,
  validateTriggersFromMetadata,
} from "./AutoFormActionValidators.js";
import { isAutoInput } from "./AutoInput.js";

/** The props that any <AutoForm/> component accepts */
export type AutoFormProps<
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>,
  ExtraFormVariables extends FieldValues = Record<string, unknown>,
  DefaultValues = ActionFunc["variablesType"] & ExtraFormVariables
> = {
  /** Which action this fom will run on submit */
  action: ActionFunc;
  /** A record for this form to act on */
  record?: GadgetRecord<any>;
  /** An allowlist of fields to render within the form. Only these fields will be rendered as inputs. */
  include?: string[];
  /** A denylist of fields to render within the form. Every field except these fields will be rendered as inputs. */
  exclude?: string[];
  /** A set of field values to pre-populate the form with on load. Only applies to create forms. */
  defaultValues?: DefaultValues;
  /** The label to use for the submit button at the bottom of the form */
  submitLabel?: ReactNode;
  /** What to show the user once the form has been submitted successfully */
  successContent?: ReactNode;
  /** The title at the top of the form. False to omit */
  title?: string | false;
  /** Called when the form submission completes successfully on the backend */
  onSuccess?: (record: UseActionFormHookStateData<ActionFunc>) => void;
  /** Called when the form submission errors before sending, during the API call, or if the API call returns an error. */
  onFailure?: (error: Error | FieldErrors<ActionFunc["variablesType"]>) => void;
  /** Custom components to render within the form. Using this will override all default field rendering.   */
  children?: ReactNode;
  /** Enable debug logging for this form */
  debug?: boolean;
} & (ActionFunc extends AnyActionWithId<GivenOptions>
  ? {
      /**
       * The record identifier to run this action on, if it already exists.
       * Should be undefined for create actions, or a record ID (or finder) for update / etc actions
       **/
      findBy?: RecordIdentifier;
    }
  : // eslint-disable-next-line @typescript-eslint/ban-types
    {});

/**
 * React hook for getting the validation schema for a list of fields
 */
const useValidationResolver = (metadata: ModelWithOneActionMetadata | GlobalActionMetadata | undefined, pathsToValidate: string[]) => {
  return useMemo(() => {
    if (!metadata) return undefined;
    const action = isModelActionMetadata(metadata) ? metadata.action : metadata;
    return yupResolver(validationSchema(action.inputFields, pathsToValidate));
  }, [metadata, pathsToValidate]);
};

const isMetadataForUpsertAction = (metadata: ModelWithOneActionMetadata | GlobalActionMetadata | undefined | null) => {
  if (!metadata) {
    return undefined;
  }

  if (!isModelActionMetadata(metadata)) {
    // Global actions can never be upsert
    return false;
  }

  return metadata.action.isUpsertMetaAction;
};

/**
 * React hook for getting a list of fields to use in a form (given include/exclude options)
 */
export const useFormFields = (
  metadata: ModelWithOneActionMetadata | GlobalActionMetadata | undefined | null,
  options: { include?: string[]; exclude?: string[] }
): readonly { path: string; metadata: FieldMetadata }[] => {
  return useMemo(() => {
    if (!metadata) return [];
    const action = isModelActionMetadata(metadata) ? metadata.action : metadata;

    const isModelMetadata = metadata.__typename === "GadgetModel";

    const objectFields = isModelMetadata
      ? action.inputFields.filter(
          (field) => field.configuration.__typename === "GadgetObjectFieldConfig" && field.apiIdentifier === metadata.apiIdentifier
        )
      : [];
    const nonObjectFields = action.inputFields.filter((field) => field.configuration.__typename !== "GadgetObjectFieldConfig");

    const includedRootLevelFields = buildAutoFormFieldList(nonObjectFields, options as any).map(
      ([path, field]) =>
        ({
          path,
          metadata: field,
        } as const)
    );

    const includedObjectFields = objectFields.flatMap((objectField) =>
      buildAutoFormFieldList((objectField.configuration as unknown as GadgetObjectFieldConfig).fields as any, {
        ...(options as any),
        isUpsertAction: true, // For upsert meta-actions, we allow IDs, and they are object fields instead of root level
      }).map(
        ([innerPath, innerField]) =>
          ({
            path: `${objectField.apiIdentifier}.${innerPath}`,
            metadata: innerField,
          } as const)
      )
    );

    const allFormFields = [...includedObjectFields, ...includedRootLevelFields];
    validateFormFieldApiIdentifierUniqueness(action.apiIdentifier, allFormFields);

    return allFormFields;
  }, [metadata, options]);
};

export const useFormSelection = (
  modelApiIdentifier: string | undefined,
  fields: readonly { path: string; metadata: FieldMetadata }[]
): FieldSelection | undefined => {
  if (!modelApiIdentifier) return;
  if (!fields.length) return;

  const paths = fields.map((f) => f.path.replace(new RegExp(`^${modelApiIdentifier}\\.`), ""));
  const fieldMetaData = fields.map((f) => f.metadata);

  return pathListToSelection(modelApiIdentifier, paths, fieldMetaData);
};

const validateFormFieldApiIdentifierUniqueness = (
  actionApiIdentifier: string,
  inputApiIdentifiers: { path: string; metadata: FieldMetadata }[]
) => {
  const seenPaths = new Set<string>();
  const seenMetadataApiIds = new Set<string>();

  for (const { path, metadata } of inputApiIdentifiers) {
    if (seenMetadataApiIds.has(metadata.apiIdentifier) || seenPaths.has(path)) {
      throw new Error(`Input "${metadata.apiIdentifier}" is not unique for action "${actionApiIdentifier}"`);
    }
    seenMetadataApiIds.add(metadata.apiIdentifier);
    seenPaths.add(path);
  }
};

// TODO - re-enable this once the child based field selection is fixed with an approach that avoids React.Children
const enableExtractPathsFromChildren = false;

/**
 * Internal React hook for sharing logic between different `AutoForm` components.
 * @internal
 */
export const useAutoForm = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>
>(
  props: AutoFormProps<GivenOptions, SchemaT, ActionFunc, any, any> & { findBy?: any }
): {
  metadata: ModelWithOneActionMetadata | GlobalActionMetadata | undefined;
  fetchingMetadata: boolean;
  metadataError: ErrorWrapper | undefined;
  fields: readonly { path: string; metadata: FieldMetadata }[];
  submit: UseActionFormSubmit<ActionFunc>;
  formError: Error | ErrorWrapper | null | undefined;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  isLoading: boolean;
  originalFormMethods: UseFormReturn<any, any>;
} => {
  const { action, record, onSuccess, onFailure, findBy, children } = props;
  let include = props.include;
  let exclude = props.exclude;

  if (enableExtractPathsFromChildren && children) {
    include = extractPathsFromChildren(children);
    exclude = undefined;
  }

  validateNonBulkAction(action);
  validateTriggersFromApiClient(action);

  const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(props.action);

  validateTriggersFromMetadata(metadata);

  // filter down the fields to render only what we want to render for this form
  const fields = useFormFields(metadata, { include, exclude });

  validateFindByObjectWithMetadata(fields, findBy);
  const isDeleteAction = metadata && isModelActionMetadata(metadata) && metadata.action.isDeleteAction;
  const isGlobalAction = action.type === "globalAction";
  const operatesWithRecordId = !!(metadata && isModelActionMetadata(metadata) && metadata.action.operatesWithRecordIdentity);
  const modelApiIdentifier = action.type == "action" ? action.modelApiIdentifier : undefined;
  const isUpsertMetaAction = isMetadataForUpsertAction(metadata);

  const selection = useFormSelection(modelApiIdentifier, fields);
  const isUpsertWithFindBy = isUpsertMetaAction && !!findBy;
  const fieldPathsToValidate = useMemo(() => fields.map(({ path }) => path), [fields]);

  const defaultValues: Record<string, unknown> = useMemo(
    () =>
      props.defaultValues ??
      (action.type === "globalAction"
        ? {}
        : {
            [modelApiIdentifier!]:
              record ??
              (!(operatesWithRecordId || isUpsertWithFindBy) && metadata && isModelActionMetadata(metadata) && metadata?.defaultRecord),
            id:
              typeof findBy === "string"
                ? findBy // ID is given directly
                : undefined, // Set by the retrieved existing record if object based findBy value
          }),
    [props.defaultValues, action.type, modelApiIdentifier, record, operatesWithRecordId, metadata, findBy]
  );

  // setup the form state for the action
  const {
    submit,
    error: formError,
    reset,
    setValue,
    getValues,

    formState: { isSubmitSuccessful, submitCount, isLoading, isReady, isSubmitting, touchedFields, errors },
    originalFormMethods,
  } = useActionForm(action, {
    defaultValues: defaultValues as any,
    findBy: "findBy" in props ? props.findBy : undefined,
    throwOnInvalidFindByObject: false,
    pause: "findBy" in props ? fetchingMetadata : undefined,
    select: selection as any,
    resolver: useValidationResolver(metadata, fieldPathsToValidate),
    send: () => {
      const hasManyFieldPaths = new Set(
        fields.flatMap(({ path, metadata }) => {
          if (metadata.fieldType === FieldType.HasMany || metadata.fieldType === FieldType.HasManyThrough) {
            return path;
          } else {
            return [];
          }
        })
      );

      const hasManyThroughFieldMap: Record<string, string> = {};

      for (const { path, metadata } of fields) {
        if (metadata.fieldType === FieldType.HasManyThrough) {
          const config = metadata.configuration as GadgetHasManyThroughConfig;
          const pathParts = path.split(".");
          const basePath = pathParts.slice(0, -1);
          hasManyThroughFieldMap[path] = [...basePath, config.joinModelHasManyFieldApiIdentifier].join(".");
        }
      }

      const fieldsToSend = fields
        .filter(({ path, metadata }) => {
          const fieldType = metadata.fieldType;
          const isUntouchedPasswordField = fieldType === FieldType.Password && "findBy" in props && !get(touchedFields, path);
          if (isUntouchedPasswordField) {
            // Never send the password field if it hasn't been touched. Doing so will clear the record value
            return false;
          }

          if (fieldType === FieldType.BelongsTo) {
            const fullBelongsToValue = getValues(path);
            const rawBelongsToValueId = getValues(`${path}Id`);
            if (fullBelongsToValue === null && rawBelongsToValueId) {
              // Here we have a belongsTo field that points to a related record that doesn't exist
              // Do not send `belongsToField: null` to the backend because it will clear the belongsTo field
              return false;
            }
          }

          const pathParts = path.split(".");
          const isChildOfHasManyField = pathParts.some((_, index) => {
            const parentPath = pathParts.slice(0, index).join(".");
            return hasManyFieldPaths.has(parentPath);
          });

          if (isChildOfHasManyField) {
            return false;
          }

          if (props.include) {
            return props.include?.includes(metadata.apiIdentifier);
          } else if (props.exclude) {
            return !props.exclude?.includes(metadata.apiIdentifier);
          }
          return true;
        })
        .map(({ path }) => path);

      if (operatesWithRecordId) {
        fieldsToSend.push("id");
      }

      if (props.defaultValues && modelApiIdentifier) {
        // Add any explicitly set default values to the fields to send in the event that they are not included
        const explicityDefaultedPaths = getFlattenedObjectKeys(props.defaultValues);
        explicityDefaultedPaths.forEach((path) => {
          if (!fieldsToSend.includes(path)) {
            fieldsToSend.push(path);
          }
        });
      }

      return fieldsToSend.map((field) => {
        if (hasManyThroughFieldMap[field]) {
          return hasManyThroughFieldMap[field];
        }
        return field;
      });
    },
    onError: onFailure,
    onSuccess,
    debug: props.debug,
  });

  const isCreateAction = !operatesWithRecordId && !isDeleteAction && !isGlobalAction && !isUpsertMetaAction;
  const isUpsertWithoutFindBy = isUpsertMetaAction && !isUpsertWithFindBy;

  useEffect(() => {
    if (isSubmitSuccessful) {
      if (isCreateAction || isUpsertWithoutFindBy || isGlobalAction) {
        const resetValues =
          modelApiIdentifier && selection ? resetValuesForDefaultValues(modelApiIdentifier, defaultValues, selection) : defaultValues;

        reset(resetValues);
      }
    }
  }, [
    isSubmitSuccessful,
    isCreateAction,
    isUpsertWithoutFindBy,
    isGlobalAction,
    reset,
    defaultValues,
    submitCount,
    selection,
    modelApiIdentifier,
  ]);

  // we don't have synchronous access to the default values always -- sometimes we need to load them from the metadata. if we do that, then we need to forcibly set them into the form state once they have been loaded
  const hasSetInitialValues = useRef<boolean>(false);
  useEffect(() => {
    if (isReady && !hasSetInitialValues.current && modelApiIdentifier && defaultValues[modelApiIdentifier]) {
      hasSetInitialValues.current = true;
      originalFormMethods.reset(defaultValues);
    }
  }, [isReady, defaultValues, originalFormMethods, modelApiIdentifier]);

  if (!fetchingMetadata) {
    validateFindBy({ operatesWithRecordId, hasFindBy: !!findBy, isUpsertMetaAction: !!isUpsertMetaAction });
  }

  useEffect(() => {
    if (isUpsertWithFindBy) {
      setValue(`${modelApiIdentifier!}.id`, findBy); // Upsert actions use model.id instead of use root level api value
    }
  }, [getValues(`${modelApiIdentifier!}.id`), isUpsertWithFindBy]);

  return {
    metadata,
    fetchingMetadata,
    metadataError,
    fields: fields.filter(removeIdFieldsUnlessUpsertWithoutFindBy(isUpsertWithFindBy)),
    submit,
    formError,
    isSubmitting,
    isSubmitSuccessful,
    isLoading,
    originalFormMethods,
  };
};

const resetValuesForDefaultValues = (modelApiIdentifier: string, defaultValues: Record<string, unknown>, selection: FieldSelection) => {
  const extractResetArrayPathsFromSelection = (selection: FieldSelection) => {
    return Object.keys(selection).reduce<any>((acc, key) => {
      const selectionValue = selection[key];

      if (isPlainObject(selectionValue)) {
        if ("edges" in selectionValue) {
          acc[key] = [];
        } else {
          const subSelectionValue = extractResetArrayPathsFromSelection(selectionValue);
          if (Object.keys(subSelectionValue).length > 0) {
            acc[key] = subSelectionValue;
          }
        }
      }

      return acc;
    }, {});
  };

  return {
    ...defaultValues,
    [modelApiIdentifier]: {
      ...(defaultValues[modelApiIdentifier] ?? {}),
      ...extractResetArrayPathsFromSelection(selection),
    },
  };
};

export const extractPathsFromChildren = (children: React.ReactNode) => {
  const paths = new Set<string>();

  for (const child of React.Children.toArray(children)) {
    if (React.isValidElement(child)) {
      const grandChildren = child.props.children as React.ReactNode | undefined;
      let childPaths: string[] = [];

      if (grandChildren) {
        childPaths = extractPathsFromChildren(grandChildren);
      }

      let field: string | undefined = undefined;

      if (isAutoInput(child)) {
        const props = child.props as { field: string; selectPaths?: string[]; children?: React.ReactNode };
        field = props.field;

        paths.add(field);

        if (props.selectPaths && Array.isArray(props.selectPaths)) {
          props.selectPaths.forEach((selectPath) => {
            paths.add(`${field}.${selectPath}`);
          });
        }
      }

      if (childPaths.length > 0) {
        for (const childPath of childPaths) {
          paths.add(field ? `${field}.${childPath}` : childPath);
        }
      }
    }
  }

  return Array.from(paths);
};

const removeIdFieldsUnlessUpsertWithoutFindBy = (isUpsertWithFindBy?: boolean) => {
  return (field: { metadata: FieldMetadata }) => {
    return field.metadata.fieldType === FieldType.Id ? !isUpsertWithFindBy : true;
  };
};

const validateFindBy = (params: { operatesWithRecordId: boolean; hasFindBy: boolean; isUpsertMetaAction: boolean }) => {
  const { operatesWithRecordId, hasFindBy, isUpsertMetaAction } = params;

  if (isUpsertMetaAction) {
    return; // optional findBy value for upsert meta actions
  }

  if (operatesWithRecordId && !hasFindBy) {
    throw new Error("The 'findBy' prop is required for actions that operate with a record identity.");
  } else if (!operatesWithRecordId && hasFindBy) {
    throw new Error("The 'findBy' prop is only allowed for actions that operate with a record identity.");
  }
};
