import type { AnyVariables, UseQueryArgs, UseQueryResponse } from "urql";
export type UseGadgetQueryArgs<Variables extends AnyVariables, Data = any> = UseQueryArgs<Variables, Data> & {
    /**
     * Marks this query as one that should suspend the react component rendering while executing, instead of returning `{fetching: true}` to the caller.
     * Useful if you want to allow components higher in the tree to show spinners instead of having every component manage its own loading state.
     */
    suspense?: boolean;
};
export declare const useGadgetQuery: <Data = any, Variables extends AnyVariables = AnyVariables>(args: UseGadgetQueryArgs<Variables, Data>) => UseQueryResponse<Data, Variables>;
