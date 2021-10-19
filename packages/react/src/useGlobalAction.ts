import { gadgetErrorFor, get, globalActionOperation, hydrateRecord } from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { CombinedError, useMutation, UseMutationResponse } from "urql";
import { GlobalActionFunction } from "./GadgetFunctions";

/**
 * React hook to run a Gadget model action.
 *
 * @param action any action function from a Gadget manager
 * @param options action options, like selecting the fields in the result
 *
 * @example
 * ```
 * export function FlipAllWidgets(props: { name: string; email: string }) {
 *   const [result, flipAllWidgets] = useGlobalAction(Client.flipAllWidgets);
 *
 *   return (
 *     <>
 *       {result.error && <>Failed to flip all widgets: {result.error}</>}
 *       {result.fetching && <>Flipping all widgets...</>}
 *       {result.data && <>Flipped all widgets</>}
 *       <button onClick={() => flipAllWidgets()}>Flip all widgets</button>
 *     </>
 *   );
 * }
 */
export const useGlobalAction = <F extends GlobalActionFunction<any>>(
  action: F
): UseMutationResponse<any, Exclude<F["variablesType"], null | undefined>> => {
  const plan = useMemo(() => {
    return globalActionOperation(action.operationName, action.variables, action.namespace);
  }, [action]);

  const [result, runMutation] = useMutation<any, F["variablesType"]>(plan.query);

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
    runMutation,
  ];
};
