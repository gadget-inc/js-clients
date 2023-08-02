import { useContext } from "react";
import { useMutation } from "urql";
import { GadgetUrqlClientContext } from "./GadgetProvider.js";
import { noProviderErrorMessage } from "./utils.js";

export const useGadgetMutation: typeof useMutation = (query) => {
  if (!useContext(GadgetUrqlClientContext)) throw new Error(noProviderErrorMessage);
  return useMutation(query);
};
