import type { ActionHookState, OptionsType } from "@gadgetinc/client-hooks";
import type {
  ActionFunction,
  ActionWithIdAndNoVariables,
  ActionWithIdAndVariables,
  AnyErrorWrapper,
  AnyGadgetRecord,
  BulkActionWithIdsAndNoVariables,
  DefaultSelection,
  GlobalActionFunction,
  Select,
} from "@gadgetinc/core";
import type { FieldValues, UseFormReturn } from "react-hook-form";
import type { useAction, useGlobalAction } from "../hooks.js";
import { type useFindExistingRecord } from "./utils.js";

/**
 * The identity of a record to build a form for
 *
 * - Pass the ID of a record as a string to look up a record by id
 * - Pass a {<fieldValue>: <value>} object to look up a record by some other field. __Note__: a `findBy` function must exist for the field you wish to find the record by.
 *
 * @example
 * // find the user record with ID=123
 * const { submit } = useActionForm(api.user.update, { record: "123" });
 *
 * @example
 * // find a record by email. `api.user.findByEmail` must exist
 * const { submit } = useActionForm(api.user.update, { record: { email: "user@gadget.app" } });
 */
export type RecordIdentifier = string | { [key: string]: any };

export type FormInput<InputT, Depth extends number = 9, CurrentDepth extends number[] = []> = CurrentDepth["length"] extends Depth
  ? any
  : IsAny<InputT> extends true
  ? any
  : InputT extends (infer Element)[]
  ? FormInput<Element, Depth, CurrentDepth>[]
  : InputT extends { create?: unknown; update?: unknown }
  ? FormInput<InputT["create"], Depth, Increment<CurrentDepth>> | FormInput<InputT["update"], Depth, Increment<CurrentDepth>>
  : InputT extends object
  ? { [K in keyof InputT]: FormInput<InputT[K], Depth, Increment<CurrentDepth>> }
  : InputT | null | undefined;

/**
 * Type helper to convert `null` to undefined recursively within the form values type
 * Many Gadget users use Shopify Polaris as a design system, and many of its input components do not accept `null` values. For maximum compatibility with Polaris, we convert `null` to `undefined` within the form values type, knowing that the Polaris components handle both at runtime just fine.
 */
export type StripNulls<T> = T extends null
  ? undefined
  : T extends (infer U)[]
  ? StripNulls<U>[]
  : T extends object
  ? { [K in keyof T]: StripNulls<T[K]> }
  : T;

export type UseActionFormResult<
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>,
  FormVariables extends FieldValues,
  FormContext = any
> = Omit<UseFormReturn<FormVariables & StripNulls<FormInput<ActionFunc["variablesType"]>>, FormContext>, "handleSubmit" | "formState"> & {
  formState: UseActionFormState<ActionFunc, FormVariables, FormContext> & { isReady: boolean };
  /**
   * Any error that occurred during initial data fetching or action submission
   */
  error?: AnyErrorWrapper | Error | null;
  /**
   * Function to call to submit the form
   */
  submit: UseActionFormSubmit<ActionFunc>;
  /**
   * The data resulting from running the action
   */
  actionData?: ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>
    ? ReturnType<typeof useAction<GivenOptions, SchemaT, ActionFunc, any>>[0]["data"]
    : ReturnType<typeof useGlobalAction<any>>[0]["data"];

  originalFormMethods: UseFormReturn<FormVariables, FormContext>;
  /**
   * The existing record found when using the `findBy` prop
   */
  findResult?: ReturnType<typeof useFindExistingRecord>[0];
};

export type UseActionFormHookState<F extends ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>> = ActionHookState<
  UseActionFormHookStateData<F>,
  Exclude<F["variablesType"], null | undefined>
>;

export type UseActionFormHookStateData<F extends ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>> =
  F extends ActionFunction<any, any, any, any, any>
    ? F["hasReturnType"] extends true
      ? any
      : AnyGadgetRecord<
          Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], F["optionsType"], F["defaultSelection"]>>
        >
    : any;

export type UseActionFormSubmit<F extends ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>> = (
  event?: React.BaseSyntheticEvent<object, any, any> | undefined
) => Promise<UseActionFormHookState<F>>;

type ExcludeUndefined<T> = T extends undefined ? never : T;

type ServerSideError<F extends ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>> = F extends ActionFunction<
  any,
  any,
  any,
  any,
  any
>
  ? {
      [key in F["modelApiIdentifier"]]?: {
        [key in
          | keyof F["selectionType"]
          | keyof ExcludeUndefined<F["variablesType"]>
          | ExcludeUndefined<F["modelApiIdentifier"] extends "user" ? "password" : never>]?: { message: string };
      };
    }
  : { [key in keyof ExcludeUndefined<F["variablesType"]>]: { message: string } };

export type UseActionFormState<
  F extends ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>,
  FormVariables extends FieldValues,
  FormContext
> = Omit<UseFormReturn<FormVariables, FormContext>["formState"], "errors"> & {
  errors: UseFormReturn<FormVariables, FormContext>["formState"]["errors"] & ServerSideError<F>;
};

type Increment<A extends number[]> = [...A, 0];

type IsAny<T> = 0 extends 1 & T ? true : false;

export type ContextAwareSelect<T> = T extends boolean | null | undefined ? T | "ReadOnly" : { [K in keyof T]: ContextAwareSelect<T[K]> };

export type AnyUpsertAction = { variablesType: { on?: (string | null)[] } | undefined; hasReturnType: Record<string, any> };

export type AnyActionWithId<OptionsT> =
  | ActionWithIdAndNoVariables<OptionsT>
  | ActionWithIdAndVariables<OptionsT, any>
  | BulkActionWithIdsAndNoVariables<OptionsT>;
