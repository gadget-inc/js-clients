import type { GlobalActionFunction } from "@gadgetinc/api-client-core";
import { get, globalActionOperation } from "@gadgetinc/api-client-core";
import { useCallback, useMemo } from "react";
import type { OperationContext, UseMutationState } from "urql";
import { useGadgetMutation } from "./useGadgetMutation.js";
import type { ActionHookResult } from "./utils.js";
import { ErrorWrapper } from "./utils.js";

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
 *       {result.error && <>Failed to flip all widgets: {result.error.toString()}</>}
 *       {result.fetching && <>Flipping all widgets...</>}
 *       {result.data && <>Flipped all widgets</>}
 *       <button onClick={() => flipAllWidgets()}>Flip all widgets</button>
 *     </>
 *   );
 * }
 */
export const useGlobalAction = <F extends GlobalActionFunction<any>>(
  action: F
): ActionHookResult<any, Exclude<F["variablesType"], null | undefined>> => {
  const plan = useMemo(() => {
    return globalActionOperation(action.operationName, action.variables, action.namespace);
  }, [action]);

  const [result, runMutation] = useGadgetMutation<any, F["variablesType"]>(plan.query);

  const transformedResult = useMemo(() => processResult(result, action), [result, action]);

  return [
    transformedResult,
    useCallback(
      async (variables: F["variablesType"], context?: Partial<OperationContext>) => {
        const result = await runMutation(variables, context);
        return processResult({ fetching: false, ...result }, action);
      },
      [action, runMutation]
    ),
  ];
};

const processResult = (result: UseMutationState<any, any>, action: GlobalActionFunction<any>) => {
  let error = ErrorWrapper.forMaybeCombinedError(result.error);
  let data = undefined;
  if (result.data) {
    data = get(result.data, [action.operationName]);
    if (data) {
      const errors = data.errors;
      data = data.result;
      if (errors && errors[0]) {
        error = ErrorWrapper.forErrorsResponse(errors);
      }
    }
  }
  return { ...result, error, data };
};
