import { useContext } from "react";
import { useMutation } from "urql";
import { GadgetUrqlClientContext } from "./GadgetProvider";
import { noProviderErrorMessage } from "./utils";

export const useGadgetMutation: typeof useMutation = (query) => {
  if (!useContext(GadgetUrqlClientContext)) throw new Error(noProviderErrorMessage);
  return useMutation(query);
};
