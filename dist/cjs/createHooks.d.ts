import { AnyVariables, DocumentInput } from "@urql/core";
import { AnyClient } from "./AnyClient.js";
import { GadgetConnection } from "./GadgetConnection.js";
import { RuntimeAdapter, UseMutationResponse, UseQueryArgs, UseQueryResponse } from "./adaptors/types.js";
export type UseGadgetQueryArgs<Variables extends AnyVariables, Data = any> = UseQueryArgs<Variables, Data> & {
    /**
     * Marks this query as one that should suspend the react component rendering while executing, instead of returning `{fetching: true}` to the caller.
     * Useful if you want to allow components higher in the tree to show spinners instead of having every component manage its own loading state.
     */
    suspense?: boolean;
};
export interface CoreHooks {
    /**
     * Get the current `GadgetConnection` object from context.
     * Must be called within a component wrapped by `<Provider api={...} />`.
     **/
    useConnection: () => GadgetConnection;
    /**
     * Get the current `api` object from  context
     * Must be called within a component wrapped by the `<Provider api={...} />` component.
     **/
    useApi: () => AnyClient;
    /**
     * Memoize and ensure a stable identity on a given value as long as it remains the same, structurally.
     */
    useStructuralMemo: <T>(value: T) => T;
    useGadgetQuery: <Data = any, Variables extends AnyVariables = AnyVariables>(args: UseGadgetQueryArgs<Variables, Data>) => UseQueryResponse<Data, Variables>;
    useGadgetMutation: <Data = any, Variables extends AnyVariables = AnyVariables>(query: DocumentInput<Data, Variables>) => UseMutationResponse<Data, Variables>;
}
export declare const createHooks: (adapter: RuntimeAdapter) => CoreHooks;
