import {
  actionOperation,
  capitalize,
  gadgetErrorFor,
  GadgetRecord,
  get,
  hydrateRecord,
  LimitToKnownKeys,
  Select,
} from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { CombinedError, useMutation, UseMutationResponse } from "urql";
import { ActionFunction } from "./GadgetFunctions";
import { OptionsType } from "./OptionsType";
import { useStructuralMemo } from "./useStructuralMemo";

/**
 * React hook to run a Gadget model action.
 *
 * @param action any action function from a Gadget manager
 * @param options action options, like selecting the fields in the result
 *
 * @example
 * ```
 * export function CreateUserButton(props: { name: string; email: string }) {
 *   const [result, createUser] = useAction(Client.user.create, props.email, {
 *     select: {
 *       id: true,
 *     },
 *   });
 *
 *   const onClick = () => createUser({
 *     widget: {
 *       name: props.name,
 *       email: props.email,
 *     }
 *   });
 *
 *   return (
 *     <>
 *       {result.error && <>Failed to create user: {result.error}</>}
 *       {result.fetching && <>Creating user...</>}
 *       {result.data && <>Created user with id={result.data.id}</>}
 *       <button onClick={onClick}>Create user</button>
 *     </>
 *   );
 * }
 */
export const useAction = <
  GivenOptions extends OptionsType, // currently necessary for Options to be a narrow type (e.g., `true` instead of `boolean`)
  F extends ActionFunction<GivenOptions, any, any, any, any>,
  Options extends F["optionsType"]
>(
  action: F,
  options?: LimitToKnownKeys<Options, F["optionsType"]>
): UseMutationResponse<
  Select<Exclude<F["schemaType"], null | undefined>, Options["select"]>,
  Exclude<F["variablesType"], null | undefined>
> => {
  const memoizedOptions = useStructuralMemo(options);
  const plan = useMemo(() => {
    return actionOperation(
      action.operationName,
      action.defaultSelection,
      action.modelApiIdentifier,
      action.variables,
      memoizedOptions,
      action.namespace
    );
  }, [action, memoizedOptions]);

  const [result, runMutation] = useMutation<
    GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, Options["select"]>>,
    F["variablesType"]
  >(plan.query);

  let error = result.error;
  let data = result.data;
  if (data) {
    data = hydrateRecord(result, get(result.data, [action.operationName]));

    if (data) {
      const errors = data.getField("errors");
      if (errors && errors[0]) {
        error = new CombinedError({
          graphQLErrors: [gadgetErrorFor(errors[0])],
        });
      }
    }
  }

  return [
    {
      ...result,
      error,
      data,
    },
    (variables, context) => {
      // Adding the model's additional typename ensures document cache will properly refresh, regardless of whether __typename was
      // selected (and sometimes we can't even select it, like delete actions!)
      return runMutation(variables, {
        ...context,
        additionalTypenames: [...(context?.additionalTypenames ?? []), capitalize(action.modelApiIdentifier)],
      });
    },
  ];
};
