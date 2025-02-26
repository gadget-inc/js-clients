import type {
  ActionFunction,
  DeepFilterNever,
  FieldSelection,
  GadgetRecord,
  GlobalActionFunction,
  Select,
} from "@gadgetinc/api-client-core";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ReactNode } from "react";
import React, { useEffect, useMemo, useRef } from "react";
import type { GadgetHasManyThroughConfig, GadgetObjectFieldConfig } from "../internal/gql/graphql.js";
import type { FieldMetadata, GlobalActionMetadata, ModelWithOneActionMetadata } from "../metadata.js";
import { FieldType, buildAutoFormFieldList, isModelActionMetadata, useActionMetadata } from "../metadata.js";
import type {
  AnyActionWithId,
  AnyUpsertAction,
  RecordIdentifier,
  UseActionFormHookStateData,
  UseActionFormSubmit,
} from "../use-action-form/types.js";
import { isPlainObject, processDefaultValues, toDefaultValues } from "../use-action-form/utils.js";
import { getRelatedModelFields, isHasManyOrHasManyThroughField, isRelationshipField, pathListToSelection } from "../use-table/helpers.js";
import type { FieldErrors, FieldValues, UseFormReturn } from "../useActionForm.js";
import { useActionForm } from "../useActionForm.js";
import { get, getFlattenedObjectKeys, set, type ErrorWrapper, type OptionsType } from "../utils.js";
import { validationSchema } from "../validationSchema.js";
import {
  validateFindByObjectWithMetadata,
  validateNonBulkAction,
  validateTriggersFromApiClient,
  validateTriggersFromMetadata,
} from "./AutoFormActionValidators.js";
import { useAssertNotNestedInAnotherAutoForm, useFieldsFromChildComponents } from "./AutoFormContext.js";
import { isAutoInput } from "./AutoInput.js";
import { getSelectedPathsFromOptionLabel } from "./hooks/useSelectedPathsFromRecordLabel.js";
import { getOptionLabelsFromRecordLabel, type RecordLabel } from "./interfaces/AutoRelationshipInputProps.js";

/** When the AutoForm does not have children, these properties are available to control the rendering of the form */
type AutoFormPropsWithoutChildren = {
  children?: never;

  /** The title at the top of the form. False to omit */
  title?: string | false;

  /** The label to use for the submit button at the bottom of the form */
  submitLabel?: ReactNode;
};

type AutoFormPropsWithChildren = {
  /** Custom components to render within the form. Using this will override all default field rendering.   */
  children?: ReactNode;
};

/** Helper type for the record shape in AutoFormProps */
type AutoFormRecordType<ActionFunc> = ActionFunc extends {
  schemaType: infer SchemaType;
  defaultSelection: infer DefaultSelection extends FieldSelection | null | undefined;
}
  ? GadgetRecord<
      { id: string } & (SchemaType extends null | undefined ? unknown : Partial<DeepFilterNever<Select<SchemaType, DefaultSelection>>>)
    >
  : never;

/** The props that any <AutoForm/> component accepts */
export type AutoFormProps<
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>,
  ExtraFormVariables extends FieldValues = Record<string, unknown>,
  DefaultValues = Partial<ActionFunc["variablesType"]> & ExtraFormVariables
> = (AutoFormPropsWithChildren | AutoFormPropsWithoutChildren) & {
  /** Which action this fom will run on submit */
  action: ActionFunc;
  /** What to show the user once the form has been submitted successfully */
  successContent?: ReactNode;
  /** An allowlist of fields to render within the form. Only these fields will be rendered as inputs. */
  include?: string[];
  /** A denylist of fields to render within the form. Every field except these fields will be rendered as inputs. */
  exclude?: string[];
  /** A set of field values to pre-populate the form with on load. Only applies to create forms. */
  defaultValues?: DefaultValues;
  /** Selection object to pass to the form to retrieve existing values. This will override the default selection based on included fields */
  select?: GivenOptions["select"];
  /** Called when the form submission completes successfully on the backend */
  onSuccess?: (record: UseActionFormHookStateData<ActionFunc>) => void;
  /** Called when the form submission errors before sending, during the API call, or if the API call returns an error. */
  onFailure?: (error: Error | FieldErrors<ActionFunc["variablesType"]>) => void;
  /** Enable debug logging for this form */
  debug?: boolean;
} & (ActionFunc extends AnyActionWithId<GivenOptions>
    ?
        | {
            /**
             * The record identifier to run this action on, if it already exists.
             * Should be undefined for create actions, or a record ID (or finder) for update / etc actions
             **/
            findBy: RecordIdentifier;
            /** If a findBy is provided, you can't pass a record option */
            record?: never;
          }
        | {
            /**
             * If a record is provided, you can't pass a findBy option
             **/
            findBy?: never;
            /** A record for this form to act on; will be merged with the default values */
            record: AutoFormRecordType<ActionFunc>;
          }
    : ActionFunc extends AnyUpsertAction
    ?
        | {
            /**
             * The record identifier to run this action on, if it already exists.
             * Should be undefined for create actions, or a record ID (or finder) for update / etc actions
             **/
            findBy?: RecordIdentifier;
            /** If a findBy is provided, you can't pass a record option */
            record?: never;
          }
        | {
            /**
             * If a record is provided, you can't pass a findBy option
             **/
            findBy?: never;
            /** A record for this form to act on; will be merged with the default values */
            record?: AutoFormRecordType<ActionFunc>;
          }
    : {
        /** This action doesn't run against existing records, so you can't pass a findBy option */
        findBy?: never;
        /** This action doesn't operate with a record, so you can't pass a record option */
        record?: never;
      });

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

const useFormSelection = (props: {
  modelApiIdentifier: string | undefined;
  rootFieldsMetadata: FieldMetadata[];
  fields: readonly { path: string; metadata: FieldMetadata }[]; // From smart selection through child parsing and AutoInput registration
  select?: FieldSelection;
}): FieldSelection | undefined => {
  const { modelApiIdentifier, fields, select, rootFieldsMetadata } = props;

  const selectFromProps = useMemo(() => {
    if (!select || !modelApiIdentifier) {
      return;
    }
    return forceIdsIntoSelect({ select, rootFieldsMetadata });
  }, [select, modelApiIdentifier, rootFieldsMetadata]);

  if (!modelApiIdentifier || !fields.length) {
    return;
  }

  if (selectFromProps) {
    return selectFromProps;
  }

  const paths = fields.map((f) => f.path.replace(new RegExp(`^${modelApiIdentifier}\\.`), ""));
  const fieldMetaData = fields.map((f) => f.metadata);

  return pathListToSelection(modelApiIdentifier, paths, fieldMetaData);
};

const forceIdsIntoSelect = (props: { select: FieldSelection; rootFieldsMetadata: FieldMetadata[] }) => {
  const { select: originalSelect, rootFieldsMetadata } = props;
  const select = structuredClone(originalSelect);

  select.id = true; // Always select the ID for the root model

  const addIdToSelection = (selectPath: string, fieldMetadata: FieldMetadata) => {
    if (!isRelationshipField(fieldMetadata)) {
      return; // Non relationships do not need additional selection
    }

    const existingSelection = get(select, selectPath);
    if (!existingSelection || typeof existingSelection !== "object") {
      // Do not go deeper than what is defined in the select object
      return;
    }

    const isManyRelation = isHasManyOrHasManyThroughField(fieldMetadata);
    const currentFieldSelectPathPrefix = isManyRelation ? `${selectPath}.edges.node` : `${selectPath}`;
    const idPath = `${currentFieldSelectPathPrefix}.id`;

    set(select, idPath, true);

    const relatedModelFields = getRelatedModelFields(fieldMetadata);

    for (const relatedModelField of relatedModelFields) {
      addIdToSelection(`${currentFieldSelectPathPrefix}.${relatedModelField.apiIdentifier}`, relatedModelField);
    }
  };

  for (const field of rootFieldsMetadata) {
    addIdToSelection(field.apiIdentifier, field);
  }

  return select;
};

const validateFormFieldApiIdentifierUniqueness = (
  actionApiIdentifier: string,
  inputApiIdentifiers: { path: string; metadata: FieldMetadata }[]
) => {
  const seenPaths = new Set<string>();
  const seenMetadataApiIds = new Set<string>();

  // Sorted by length because longer names need to be checked later against the shorter names
  const sortedInputApiIdentifiers = [...inputApiIdentifiers].sort((a, b) => a.path.length - b.path.length);
  for (const { path, metadata } of sortedInputApiIdentifiers) {
    const hasSeenPaths = seenPaths.has(path);
    if (hasSeenPaths) {
      throw new Error(`Input "${metadata.apiIdentifier}" is not unique for action "${actionApiIdentifier}"`);
    }

    const hasSeenMetadataApiIds = seenMetadataApiIds.has(metadata.apiIdentifier);
    if (hasSeenMetadataApiIds) {
      // Disallow custom params that match model field api IDs
      const prefixRemovedPath = hasSeenMetadataApiIds ? path.replace(`${path.split(".")[0]}.`, "") : "";
      const hasSeenPrefixRemovedPath = prefixRemovedPath && seenPaths.has(prefixRemovedPath);
      if (hasSeenPrefixRemovedPath) {
        throw new Error(`Input "${metadata.apiIdentifier}" is not unique for action "${actionApiIdentifier}"`);
      }
    }
    seenMetadataApiIds.add(metadata.apiIdentifier);
    seenPaths.add(path);
  }
};

/**
 * Internal React hook for sharing logic between different `AutoForm` components.
 * @internal
 */
export const useAutoForm = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>
>(
  props: AutoFormProps<GivenOptions, SchemaT, ActionFunc>
): {
  select?: GivenOptions["select"];
  metadata: ModelWithOneActionMetadata | GlobalActionMetadata | undefined;
  fetchingMetadata: boolean;
  metadataError: ErrorWrapper | undefined;
  fields: readonly { path: string; metadata: FieldMetadata }[];
  submit: UseActionFormSubmit<ActionFunc>;
  formError: Error | ErrorWrapper | null | undefined;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  pauseExistingRecordLookup: boolean;
  isLoading: boolean;
  originalFormMethods: UseFormReturn<any, any>;
} => {
  const { action, record, onSuccess, onFailure, findBy, select } = props;

  useAssertNotNestedInAnotherAutoForm();
  validateNonBulkAction(action);
  validateTriggersFromApiClient(action);

  let include = props.include;
  let exclude = props.exclude;

  const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(props.action);

  validateTriggersFromMetadata(metadata);

  const rootFieldsMetadata = getRootFieldsFromMetadata(metadata);

  const { hasCustomFormChildren, fieldSet, registerFields } = useFieldsFromChildComponents();
  const hasRegisteredFieldsFromChildren = hasCustomFormChildren && fieldSet.size > 0;
  const registeredFieldsFromChildren = hasCustomFormChildren
    ? extractPathsFromChildren({
        children: "children" in props ? props.children : undefined,
        getFieldsToSelectOnRecordLabelCallback: (path) => getAllRelatedModelFieldApiIdentifiers({ path, rootFieldsMetadata }),
      })
    : [];

  useEffect(() => {
    registerFields(registeredFieldsFromChildren);
  }, [registeredFieldsFromChildren.join(","), registerFields]);

  if (hasCustomFormChildren) {
    include = Array.from(fieldSet);
    exclude = undefined;
  }

  // filter down the fields to render only what we want to render for this form
  const fields = useFormFields(metadata, { include, exclude });

  validateFindByObjectWithMetadata(fields, findBy);
  const isDeleteAction = metadata && isModelActionMetadata(metadata) && metadata.action.isDeleteAction;
  const isGlobalAction = action.type === "globalAction";
  const operatesWithRecordId = !!(metadata && isModelActionMetadata(metadata) && metadata.action.operatesWithRecordIdentity);
  const modelApiIdentifier = action.type == "action" ? action.modelApiIdentifier : undefined;
  const isUpsertMetaAction = isMetadataForUpsertAction(metadata);
  const selection = useFormSelection({ modelApiIdentifier, rootFieldsMetadata, fields, select });
  const isUpsertWithFindBy = isUpsertMetaAction && !!findBy;
  const fieldPathsToValidate = useMemo(() => fields.map(({ path }) => path), [fields]);

  const defaultValues: Record<string, unknown> = useMemo(() => {
    let mergedDefaultValues: Record<string, unknown> | undefined = props.defaultValues;

    if (action.type === "action" && record) {
      const defaultValuesForModel: Record<string, unknown> = props.defaultValues?.[modelApiIdentifier!] ?? {};

      const defaultValuesForRecord = toDefaultValues(undefined, record);

      const id = defaultValuesForModel.id ?? props.defaultValues?.id ?? record?.id;

      mergedDefaultValues = {
        ...props.defaultValues,
        [modelApiIdentifier!]: {
          id,
          ...defaultValuesForRecord,
          ...Object.fromEntries(
            Object.keys(defaultValuesForRecord).flatMap((key) =>
              props.defaultValues && key in props.defaultValues ? [[key, props.defaultValues[key]]] : []
            )
          ),
          ...defaultValuesForModel,
        },
        id,
      };
    }

    return (
      mergedDefaultValues ??
      (action.type === "globalAction"
        ? {}
        : {
            [modelApiIdentifier!]:
              record ??
              (!(operatesWithRecordId || isUpsertWithFindBy) && metadata && isModelActionMetadata(metadata) && metadata.defaultRecord),
            id: record
              ? record.id
              : typeof findBy === "string"
              ? findBy // ID is given directly
              : undefined, // Set by the retrieved existing record if object based findBy value
          })
    );
  }, [props.defaultValues, action.type, modelApiIdentifier, record, operatesWithRecordId, metadata, isUpsertWithFindBy, findBy]);

  const pauseExistingRecordLookup =
    record || !("findBy" in props)
      ? true // Always pause if a record is passed or no findBy. No need to do a lookup
      : fetchingMetadata || !selection; // Pause until we have the field selection to include in the lookup

  // setup the form state for the action
  const {
    submit,
    error: formError,
    reset,
    setValue,
    getValues,
    findResult,
    formState: { isSubmitSuccessful, submitCount, isLoading, isReady, isSubmitting, touchedFields, errors },
    originalFormMethods,
  } = useActionForm(action, {
    defaultValues: defaultValues as any,
    findBy: "findBy" in props ? props.findBy : undefined,
    throwOnInvalidFindByObject: false,
    pause: pauseExistingRecordLookup,
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
  const isUpsertWithoutProvidedId = isUpsertMetaAction && !isUpsertWithFindBy && !record?.id;

  // Post submit form reset
  useEffect(() => {
    if (isSubmitSuccessful) {
      if (isCreateAction || isUpsertWithoutProvidedId || isGlobalAction) {
        const resetValues =
          modelApiIdentifier && selection ? resetValuesForDefaultValues(modelApiIdentifier, defaultValues, selection) : defaultValues;

        reset(resetValues);
      }
    }
  }, [
    isSubmitSuccessful,
    isCreateAction,
    isUpsertWithoutProvidedId,
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
    validateFindBy({ operatesWithRecordId, hasFindBy: !!findBy, isUpsertMetaAction: !!isUpsertMetaAction, record });
  }

  useEffect(() => {
    if (isUpsertWithFindBy) {
      setValue(`${modelApiIdentifier!}.id`, findBy); // Upsert actions use model.id instead of use root level api value
    }
  }, [getValues(`${modelApiIdentifier!}.id`), isUpsertWithFindBy]);

  // Update the form state with the lookup result when the form conditional changes the set of registered AutoInputs
  useEffect(() => {
    if (!findBy || !hasRegisteredFieldsFromChildren || select || !action || !("modelApiIdentifier" in action)) {
      // No AutoInput children need to be updated
      return;
    }

    if (!findResult || findResult.fetching || findResult.error || !findResult.data) {
      return;
    }

    const newDefaultValues = processDefaultValues({
      data: findResult.data,
      defaultValues: props.defaultValues,
      modelApiIdentifier: action.modelApiIdentifier,
      hasAmbiguousDefaultValues: action.hasAmbiguousIdentifier ?? false,
    });

    reset(newDefaultValues, { keepDirtyValues: true, keepTouched: true });
  }, [Array.from(fieldSet).join(","), findResult?.fetching]);

  return {
    metadata,
    fetchingMetadata,
    metadataError,
    fields: fields.filter(removeIdFieldsUnlessUpsertWithoutFindBy(isUpsertWithFindBy)),
    submit,
    formError,
    pauseExistingRecordLookup,
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

const extractPathsFromChildren = (props: {
  children: React.ReactNode;
  currentPath?: string;
  getFieldsToSelectOnRecordLabelCallback?: (path: string) => string[];
}) => {
  const { children, currentPath, getFieldsToSelectOnRecordLabelCallback } = props;

  const paths = new Set<string>();

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const grandChildren = child.props.children as React.ReactNode | undefined;
      let childPaths: string[] = [];

      const newCurrentPath = currentPath && child.props.field ? currentPath + "." + child.props.field : child.props.field;

      if (grandChildren) {
        childPaths = extractPathsFromChildren({
          children: grandChildren,
          currentPath: newCurrentPath,
          getFieldsToSelectOnRecordLabelCallback,
        });
      }

      let field: string | undefined = undefined;

      if (isAutoInput(child)) {
        const props = child.props as { field: string; recordLabel?: RecordLabel; children?: React.ReactNode };
        field = props.field;

        paths.add(field);

        if (props.recordLabel) {
          aggregatePathsFromRecordLabel(props.recordLabel, () => getFieldsToSelectOnRecordLabelCallback?.(newCurrentPath) ?? []).forEach(
            (path) => paths.add(`${field}.${path}`)
          );
        }
      }

      if (childPaths.length > 0) {
        for (const childPath of childPaths) {
          paths.add(field ? `${field}.${childPath}` : childPath);
        }
      }
    }
  });

  return Array.from(paths);
};

const aggregatePathsFromRecordLabel = (recordLabel: RecordLabel, getFieldsToSelectOnRecordLabelCallback: () => string[]) => {
  const selectedPaths = new Set<string>();

  getOptionLabelsFromRecordLabel(recordLabel)
    .flatMap((optionLabel) => getSelectedPathsFromOptionLabel(optionLabel, getFieldsToSelectOnRecordLabelCallback))
    .forEach((path) => selectedPaths.add(path));

  return Array.from(selectedPaths);
};

const removeIdFieldsUnlessUpsertWithoutFindBy = (isUpsertWithFindBy?: boolean) => {
  return (field: { metadata: FieldMetadata }) => {
    return field.metadata.fieldType === FieldType.Id ? !isUpsertWithFindBy : true;
  };
};

const validateFindBy = (params: {
  operatesWithRecordId: boolean;
  hasFindBy: boolean;
  isUpsertMetaAction: boolean;
  record?: GadgetRecord<any>;
}) => {
  const { operatesWithRecordId, hasFindBy, isUpsertMetaAction, record } = params;

  if (hasFindBy && record) {
    throw new Error("Passing both a 'findBy' and a 'record' prop to an AutoForm is invalid.");
  }

  if (isUpsertMetaAction) {
    return; // optional findBy value for upsert meta actions
  }

  if (record) {
    if (operatesWithRecordId && !record.id) {
      throw new Error("Passing a record to an action that operates with a record identity requires the record to have an id.");
    } else if (!operatesWithRecordId) {
      throw new Error("Passing a record to an action that does not operate with a record identity is invalid.");
    }
  } else {
    if (operatesWithRecordId && !hasFindBy) {
      throw new Error("The 'findBy' prop is required for actions that operate with a record identity.");
    } else if (!operatesWithRecordId && hasFindBy) {
      throw new Error("The 'findBy' prop is only allowed for actions that operate with a record identity.");
    }
  }
};

const getRootFieldsFromMetadata = (metadata: ModelWithOneActionMetadata | GlobalActionMetadata | undefined | null) => {
  return metadata && "fields" in metadata ? (metadata?.fields as FieldMetadata[]) ?? [] : [];
};

const getAllRelatedModelFieldApiIdentifiers = (props: {
  rootFieldsMetadata: FieldMetadata[];
  path: string;
  includeRelationshipFields?: boolean;
}) => {
  const { rootFieldsMetadata, path, includeRelationshipFields = false } = props;

  const pathSegments = path.split(".");

  let currentFieldsToSearch = rootFieldsMetadata;
  for (const pathSegment of pathSegments) {
    const currentField = currentFieldsToSearch.find((field) => field.apiIdentifier === pathSegment);

    if (
      !currentField ||
      !isRelationshipField(currentField) ||
      !("relatedModel" in currentField.configuration) ||
      !currentField.configuration.relatedModel
    ) {
      return [];
    }

    currentFieldsToSearch = currentField.configuration.relatedModel.fields;
  }

  return includeRelationshipFields
    ? currentFieldsToSearch.map((field) => field.apiIdentifier)
    : currentFieldsToSearch.filter((field) => !isRelationshipField(field)).map((field) => field.apiIdentifier);
};
