import { GlobalActionFunction } from "../GadgetFunctions.js";
import { RuntimeAdapter } from "../adaptors/types.js";
import { CoreHooks } from "../createHooks.js";
import { ActionHookResultWithOptionalCallbackVariables } from "./utils.js";
export declare const createUseGlobalAction: (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
    /**
     * Hook to run a Gadget model action.
     *
     * @param action any action function from a Gadget manager
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
    useGlobalAction: <F extends GlobalActionFunction<any>>(action: F) => ActionHookResultWithOptionalCallbackVariables<any, Exclude<F["variablesType"], null | undefined>>;
};
