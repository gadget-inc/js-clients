import type { ActionFunction, GadgetRecord, GlobalActionFunction } from "@gadgetinc/api-client-core";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ReactNode } from "react";
import { useMemo } from "react";
import type { RecordIdentifier } from "src/use-action-form/types.js";
import type { GadgetObjectFieldConfig } from "../internal/gql/graphql.js";
import type { ActionMetadata, FieldMetadata, GlobalActionMetadata } from "../metadata.js";
import { filterFieldList, isActionMetadata, useActionMetadata } from "../metadata.js";
import type { FieldValues } from "../useActionForm.js";
import { useActionForm } from "../useActionForm.js";
import { type OptionsType } from "../utils.js";
import { validationSchema } from "../validationSchema.js";

/** The props that any <AutoForm/> component accepts */
export type AutoFormProps<
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>,
  ExtraFormVariables extends FieldValues = Record<string, unknown>,
  DefaultValues = ActionFunc["variablesType"] & ExtraFormVariables
> = {
  /** Which action this fom will run on submit */
  action: ActionFunc;
  /** How to find the record this form will act on */
  findBy?: RecordIdentifier;
  /** A record for this form to act on */
  record?: GadgetRecord<any>;
  /** An allowlist of fields to render within the form. Only these fields will be rendered as inputs. */
  include?: string[];
  /** An allowlist of fields to render within the form. Only these fields will be rendered as inputs. */
  fields?: string[];
  /** A denylist of fields to render within the form. Every field except these fields will be rendered as inputs. */
  exclude?: string[];
  /** A set of field values to pre-populate the form with on load. Only applies to create forms. */
  defaultValues?: DefaultValues;
  /** The label to use for the submit button at the bottom of the form */
  submitLabel?: ReactNode;
  /** What to show the user once the form has been submitted successfully */
  successContent?: ReactNode;
};

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
    const objectFields = action.inputFields.filter((field) => field.configuration.__typename === "GadgetObjectFieldConfig");
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
  props: AutoFormProps<GivenOptions, SchemaT, ActionFunc>
) => {
  const { action, record, defaultValues, findBy } = props;

  const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(props.action);

  // filter down the fields to render only what we want to render for this form
  const fields = useFormFields(metadata, props);
  const operatesWithRecordId = !!(metadata && isActionMetadata(metadata) && metadata.action.operatesWithRecordIdentity);

  // setup the form state for the action
  const {
    submit,
    error: formError,
    formState: { isSubmitSuccessful, isLoading, dirtyFields },
    originalFormMethods,
  } = useActionForm(action, {
    defaultValues:
      action.type === "globalAction"
        ? {}
        : {
            [action.modelApiIdentifier]: record ?? defaultValues,
            id: "0", // The ID value will be replaced when sending the form to use the record found by `findBy`
          },
    findBy,
    resolver: useValidationResolver(metadata),
    send: () => {
      const fieldsToSend = fields
        .map(({ path }) => path)
        .filter((item) => {
          if (props.include || props.fields) {
            return props.include?.includes(item) || props.fields?.includes(item);
          } else if (props.exclude) {
            return !props.exclude?.includes(item);
          }
          return true;
        });

      if (operatesWithRecordId) {
        fieldsToSend.push("id");
      }
      return fieldsToSend;
    },
  });

  return {
    metadata,
    fetchingMetadata,
    metadataError,
    fields,
    submit,
    formError,
    isSubmitSuccessful,
    isLoading,
    originalFormMethods,
  };
};
