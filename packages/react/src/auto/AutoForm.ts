import type { ActionFunction, FieldSelection, GadgetRecord, GlobalActionFunction } from "@gadgetinc/api-client-core";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ReactNode } from "react";
import React, { useEffect, useMemo, useRef } from "react";
import type { GadgetObjectFieldConfig } from "../internal/gql/graphql.js";
import type { ActionMetadata, FieldMetadata, GlobalActionMetadata } from "../metadata.js";
import { FieldType, filterAutoFormFieldList, isActionMetadata, useActionMetadata } from "../metadata.js";
import type {
  AnyActionWithId,
  RecordIdentifier,
  UseActionFormHookStateData,
  UseActionFormPagination,
  UseActionFormSubmit,
} from "../use-action-form/types.js";
import { pathListToSelection } from "../use-table/helpers.js";
import type { FieldErrors, FieldValues, UseFormReturn } from "../useActionForm.js";
import { useActionForm } from "../useActionForm.js";
import { get, getFlattenedObjectKeys, type ErrorWrapper, type OptionsType } from "../utils.js";
import { validationSchema } from "../validationSchema.js";
import { validateNonBulkAction, validateTriggersFromApiClient, validateTriggersFromMetadata } from "./AutoFormActionValidators.js";

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
const useValidationResolver = (metadata: ActionMetadata | GlobalActionMetadata | undefined, pathsToValidate: string[]) => {
  return useMemo(() => {
    if (!metadata) return undefined;
    const action = isActionMetadata(metadata) ? metadata.action : metadata;
    return yupResolver(validationSchema(action.inputFields, pathsToValidate));
  }, [metadata, pathsToValidate]);
};

/**
 * React hook for getting a list of fields to use in a form (given include/exclude options)
 */
export const useFormFields = (
  metadata: ActionMetadata | GlobalActionMetadata | undefined | null,
  options: { include?: string[]; exclude?: string[] }
): readonly { path: string; metadata: FieldMetadata }[] => {
  return useMemo(() => {
    if (!metadata) return [];
    const action = isActionMetadata(metadata) ? metadata.action : metadata;

    const isModelMetadata = metadata.__typename === "GadgetModel";

    const objectFields = isModelMetadata
      ? action.inputFields.filter(
          (field) => field.configuration.__typename === "GadgetObjectFieldConfig" && field.apiIdentifier === metadata.apiIdentifier
        )
      : [];
    const nonObjectFields = action.inputFields.filter((field) => field.configuration.__typename !== "GadgetObjectFieldConfig");

    const includedRootLevelFields = filterAutoFormFieldList(nonObjectFields, options as any).map(
      (field) =>
        ({
          path: field.apiIdentifier,
          metadata: field,
        } as const)
    );

    const includedObjectFields = objectFields.flatMap((objectField) =>
      filterAutoFormFieldList((objectField.configuration as unknown as GadgetObjectFieldConfig).fields as any, {
        ...(options as any),
        isUpsertAction: true, // For upsert meta-actions, we allow IDs, and they are object fields instead of root level
      }).map(
        (innerField) =>
          ({
            path: `${objectField.apiIdentifier}.${innerField.apiIdentifier}`,
            metadata: innerField,
          } as const)
      )
    );

    const allFormFields = [...includedObjectFields, ...includedRootLevelFields];
    validateFormFieldApiIdentifierUniqueness(
      action.apiIdentifier,
      allFormFields.map(({ metadata }) => metadata.apiIdentifier)
    );

    return allFormFields;
  }, [metadata, options]);
};

export const useFormSelection = (
  modelApiIdentifier: string | undefined,
  fields: readonly { path: string; metadata: FieldMetadata }[],
  include?: string[]
): FieldSelection | undefined => {
  if (!modelApiIdentifier) return;
  if (!fields.length) return;

  const paths = include ?? fields.map((f) => f.path.replace(`${modelApiIdentifier}.`, ""));
  const fieldMetaData = fields.map((f) => f.metadata);

  return pathListToSelection(modelApiIdentifier, paths, fieldMetaData);
};

const validateFormFieldApiIdentifierUniqueness = (actionApiIdentifier: string, inputApiIdentifiers: string[]) => {
  const seen = new Set<string>();

  for (const apiId of inputApiIdentifiers) {
    if (seen.has(apiId)) {
      throw new Error(`Input "${apiId}" is not unique for action "${actionApiIdentifier}"`);
    }
    seen.add(apiId);
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
  props: AutoFormProps<GivenOptions, SchemaT, ActionFunc, any, any> & { findBy?: any }
): {
  metadata: ActionMetadata | GlobalActionMetadata | undefined;
  fetchingMetadata: boolean;
  metadataError: ErrorWrapper | undefined;
  fields: readonly { path: string; metadata: FieldMetadata }[];
  submit: UseActionFormSubmit<ActionFunc>;
  formError: Error | ErrorWrapper | null | undefined;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  isLoading: boolean;
  originalFormMethods: UseFormReturn<any, any>;
  pagination: UseActionFormPagination;
} => {
  const { action, record, onSuccess, onFailure, findBy, children } = props;
  let include = props.include;
  let exclude = props.exclude;

  if (children) {
    include = extractPathsFromChildren(children);
    exclude = undefined;
  }

  validateNonBulkAction(action);
  validateTriggersFromApiClient(action);

  const isModelAction = action.type == "action";

  const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(props.action);

  validateTriggersFromMetadata(metadata);

  // filter down the fields to render only what we want to render for this form
  const fields = useFormFields(metadata, { include, exclude });

  const isDeleteAction = metadata && isActionMetadata(metadata) && metadata.action.isDeleteAction;
  const isGlobalAction = action.type === "globalAction";
  const operatesWithRecordId = !!(metadata && isActionMetadata(metadata) && metadata.action.operatesWithRecordIdentity);
  const modelApiIdentifier = isModelAction ? action.modelApiIdentifier : undefined;
  const selection = useFormSelection(modelApiIdentifier, fields, include);
  const isUpsertMetaAction = metadata && isActionMetadata(metadata) && fields.some((field) => field.metadata.fieldType === FieldType.Id);
  const isUpsertWithFindBy = isUpsertMetaAction && !!findBy;
  const hasCustomChildren = !!props.children;
  const fieldPathsToValidate = useMemo(
    () =>
      hasCustomChildren
        ? [] // With custom children, do not validate fields before sending them to avoid blocking submissions due to missing required fields
        : fields.map(({ path }) => path),
    [hasCustomChildren, fields]
  );

  const defaultValues: Record<string, unknown> = useMemo(
    () =>
      props.defaultValues ??
      (isModelAction
        ? {
            [modelApiIdentifier!]:
              record ??
              (!(operatesWithRecordId || isUpsertWithFindBy) && metadata && isActionMetadata(metadata) && metadata?.defaultRecord),
            id: findBy,
          }
        : {}),
    [props.defaultValues, action.type, modelApiIdentifier, record, operatesWithRecordId, metadata]
  );

  // setup the form state for the action
  const {
    submit,
    error: formError,
    reset,
    setValue,
    getValues,

    formState: { isSubmitSuccessful, isLoading, isReady, isSubmitting, touchedFields, errors },
    originalFormMethods,
    pagination,
  } = useActionForm(action, {
    defaultValues: defaultValues as any,
    findBy: "findBy" in props ? props.findBy : undefined,
    pause: "findBy" in props ? fetchingMetadata : undefined,
    select: selection as any,
    resolver: useValidationResolver(metadata, fieldPathsToValidate),
    send: () => {
      const fieldsToSend = fields
        .filter(({ path, metadata }) => {
          const fieldType = metadata.fieldType;
          const isUntouchedPasswordField = fieldType === FieldType.Password && "findBy" in props && !get(touchedFields, path);
          if (isUntouchedPasswordField) {
            // Never send the password field if it hasn't been touched. Doing so will clear the record value
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

      return fieldsToSend;
    },
    onError: onFailure,
    onSuccess:
      onSuccess ??
      function clearInputValues() {
        const isCreateAction = !operatesWithRecordId && !isDeleteAction && !isGlobalAction && !isUpsertMetaAction;
        const isUpsertWithoutFindBy = isUpsertMetaAction && !isUpsertWithFindBy;
        if (isCreateAction || isGlobalAction || isUpsertWithoutFindBy) {
          reset();
        }
      },
  });

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
    pagination,
  };
};

const extractPathsFromChildren = (children: React.ReactNode) => {
  const paths = new Set<string>();

  React.Children.forEach(children, (child) => {
    if (child && React.isValidElement(child) && typeof child.type != "string" && "__autoInput" in child.type) {
      const props = child.props as { field: string; children?: React.ReactNode };

      const field = props.field;
      let childPaths: string[] = [];

      if (child.props.children) {
        childPaths = extractPathsFromChildren(child.props.children);
      }

      paths.add(field);

      if (childPaths.length > 0) {
        for (const childPath of childPaths) {
          paths.add(`${field}.${childPath}`);
        }
      }
    }
  });

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
