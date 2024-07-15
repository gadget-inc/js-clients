import type { ActionFunction, GadgetRecord, GlobalActionFunction } from "@gadgetinc/api-client-core";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ReactNode } from "react";
import { useEffect, useMemo, useRef } from "react";
import type { AnyActionWithId, RecordIdentifier, UseActionFormHookStateData } from "src/use-action-form/types.js";
import type { GadgetObjectFieldConfig } from "../internal/gql/graphql.js";
import type { ActionMetadata, FieldMetadata, GlobalActionMetadata } from "../metadata.js";
import { FieldType, filterFieldList, isActionMetadata, useActionMetadata } from "../metadata.js";
import type { FieldValues } from "../useActionForm.js";
import { useActionForm } from "../useActionForm.js";
import { get, type OptionsType } from "../utils.js";
import { validationSchema } from "../validationSchema.js";

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
  /** Called when the form submission completes successfully on the backend */
  onSuccess?: (record: UseActionFormHookStateData<ActionFunc>) => void;
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
export const useValidationResolver = (metadata: ActionMetadata | GlobalActionMetadata | undefined) => {
  return useMemo(() => {
    if (!metadata) return undefined;
    const action = isActionMetadata(metadata) ? metadata.action : metadata;
    return yupResolver(validationSchema(action.inputFields));
  }, [metadata]);
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

    const includedRootLevelFields = filterFieldList(nonObjectFields, options as any).map(
      (field) =>
        ({
          path: field.apiIdentifier,
          metadata: field,
        } as const)
    );

    const includedObjectFields = objectFields.flatMap((objectField) =>
      filterFieldList((objectField.configuration as unknown as GadgetObjectFieldConfig).fields as any, options as any).map(
        (innerField) =>
          ({
            path: `${objectField.apiIdentifier}.${innerField.apiIdentifier}`,
            metadata: innerField,
          } as const)
      )
    );

    return [...includedObjectFields, ...includedRootLevelFields];
  }, [metadata, options]);
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
  props: AutoFormProps<GivenOptions, SchemaT, ActionFunc, any, any>
) => {
  const { action, record, onSuccess } = props;
  const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(props.action);

  // filter down the fields to render only what we want to render for this form
  const fields = useFormFields(metadata, props);
  const operatesWithRecordId = !!(metadata && isActionMetadata(metadata) && metadata.action.operatesWithRecordIdentity);
  const modelApiIdentifier = action.type == "action" ? action.modelApiIdentifier : undefined;
  const defaultValues: Record<string, unknown> = useMemo(
    () =>
      props.defaultValues ??
      (action.type === "globalAction"
        ? {}
        : {
            [modelApiIdentifier!]: record ?? (!operatesWithRecordId && metadata && isActionMetadata(metadata) && metadata?.defaultRecord),
            id: "0", // The ID value will be replaced when sending the form to use the record found by `findBy`
          }),
    [props.defaultValues, action.type, modelApiIdentifier, record, operatesWithRecordId, metadata]
  );

  // setup the form state for the action
  const {
    submit,
    error: formError,
    formState: { isSubmitSuccessful, isLoading, isReady, isSubmitting, touchedFields },
    originalFormMethods,
  } = useActionForm(action, {
    defaultValues: defaultValues as any,
    findBy: "findBy" in props ? props.findBy : undefined,
    resolver: useValidationResolver(metadata),
    send: () => {
      const fieldsToSend = fields
        .filter(({ path, metadata }) => {
          const isUntouchedPasswordField = metadata.fieldType === FieldType.Password && "findBy" in props && !get(touchedFields, path);
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
      return fieldsToSend;
    },
    onSuccess,
  });

  // we don't have synchronous access to the default values always -- sometimes we need to load them from the metadata. if we do that, then we need to forcibly set them into the form state once they have been loaded
  const hasSetInitialValues = useRef<boolean>(false);
  useEffect(() => {
    if (isReady && !hasSetInitialValues.current && modelApiIdentifier && defaultValues[modelApiIdentifier]) {
      hasSetInitialValues.current = true;
      originalFormMethods.reset(defaultValues);
    }
  }, [isReady, defaultValues, originalFormMethods, modelApiIdentifier]);

  return {
    metadata,
    fetchingMetadata,
    metadataError,
    fields,
    submit,
    formError,
    isSubmitting,
    isSubmitSuccessful,
    isLoading,
    originalFormMethods,
  };
};
