import type { GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { ActionHookResult } from "./utils";
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
export declare const useGlobalAction: <F extends GlobalActionFunction<any>>(action: F) => ActionHookResult<any, Exclude<F["variablesType"], null | undefined>>;
