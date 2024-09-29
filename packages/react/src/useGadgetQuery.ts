import { useContext } from "react";
import type { AnyVariables,UseQueryArgs,UseQueryResponse } from "urql";
import { useQuery } from "urql";
import { GadgetUrqlClientContext } from "./GadgetProvider.js";
import { noProviderErrorMessage,useMemoizedQueryOptions } from "./utils.js";

export type UseGadgetQueryArgs<Variables extends AnyVariables, Data = any> = UseQueryArgs<Variables, Data> & {
  /**
   * Marks this query as one that should suspend the react component rendering while executing, instead of returning `{fetching: true}` to the caller.
   * Useful if you want to allow components higher in the tree to show spinners instead of having every component manage its own loading state.
   */
  suspense?: boolean;
};

/**
 * A React hook for executing GraphQL queries using urql.
 *
 * @template TData The shape of the query result data.
 * @template TVariables The shape of the query variables.
 *
 * @param {DocumentNode | TypedDocumentNode<TData, TVariables> | string} query - The GraphQL query document.
 * @param {Partial<UseGadgetQueryArgs<TVariables>>} [options] - Optional configuration for the query.
 * @param {boolean} [options.suspense] - If true, marks this query as one that should suspend the react component rendering while executing, instead of returning `{fetching: true}` to the caller.
 *
 * @returns {UseQueryResponse<TData, TVariables>} The query result object.
 * @property {TData | undefined} data - The data returned from the query.
 * @property {CombinedError | undefined} error - Any error that occurred during the query.
 * @property {boolean} fetching - Whether the query is currently in flight.
 * @property {() => void} executeQuery - A function to manually execute the query.
 *
 * @example
 * const [result, reexecuteQuery] = useGadgetQuery({ query: MY_QUERY, suspense: true });
 *
 * @see {@link https://formidable.com/open-source/urql/docs/api/urql/#usequery Read more about useQuery in the urql documentation}
 */
export const useGadgetQuery = <Data = any, Variables extends AnyVariables = AnyVariables>(
  args: UseGadgetQueryArgs<Variables, Data>
): UseQueryResponse<Data, Variables> => {
  if (!useContext(GadgetUrqlClientContext)) throw new Error(noProviderErrorMessage);
  const options = useMemoizedQueryOptions(args);
  return useQuery<Data, Variables>(options);
};
