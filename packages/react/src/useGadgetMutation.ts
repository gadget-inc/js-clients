import { useContext } from "react";
import { useMutation } from "urql";
import { GadgetUrqlClientContext } from "./GadgetProvider.js";
import { noProviderErrorMessage } from "./utils.js";

/**
 * A React hook for executing GraphQL mutations using urql.
 *
 * @template TData The shape of the mutation result data.
 * @template TVariables The shape of the mutation variables.
 *
 * @param {DocumentNode | TypedDocumentNode<TData, TVariables> | string} mutation - The GraphQL mutation document.
 * @param {Partial<UseMutationOptions>} [options] - Optional configuration for the mutation.
 *
 * @returns {UseMutationResponse<TData, TVariables>} A tuple containing the mutation execution function and the mutation state.
 * @property {UseMutationState<TData, TVariables>} [0] - The current state of the mutation.
 * @property {UseMutationExecute<TData, TVariables>} [1] - A function to execute the mutation.
 *
 * @example
 * const [mutationResult, executeMutation] = useMutation(MY_MUTATION);
 *
 * @see {@link https://commerce.nearform.com/open-source/urql/docs/api/urql/#usemutation Read more about useMutation in the urql documentation}
 */
export const useGadgetMutation: typeof useMutation = (query) => {
  if (!useContext(GadgetUrqlClientContext)) throw new Error(noProviderErrorMessage);
  return useMutation(query);
};
