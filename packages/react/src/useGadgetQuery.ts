import { useContext } from "react";
import type { AnyVariables, UseQueryArgs, UseQueryResponse } from "urql";
import { useQuery } from "urql";
import { GadgetUrqlClientContext } from "./GadgetProvider";
import { noProviderErrorMessage, useMemoizedQueryOptions } from "./utils";

export type UseGadgetQueryArgs<Variables extends AnyVariables, Data = any> = UseQueryArgs<Variables, Data> & {
  /**
   * Marks this query as one that should suspend the react component rendering while executing, instead of returning `{fetching: true}` to the caller.
   * Useful if you want to allow components higher in the tree to show spinners instead of having every component manage its own loading state.
   */
  suspense?: boolean;
};

export const useGadgetQuery = <Data = any, Variables extends AnyVariables = AnyVariables>(
  args: UseGadgetQueryArgs<Variables, Data>
): UseQueryResponse<Data, Variables> => {
  if (!useContext(GadgetUrqlClientContext)) throw new Error(noProviderErrorMessage);
  const options = useMemoizedQueryOptions(args);
  return useQuery(options);
};
