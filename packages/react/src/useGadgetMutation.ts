import { useContext } from "react";
import { useMutation } from "urql";
import { GadgetContext } from "./GadgetProvider";
import { noProviderErrorMessage } from "./utils";

export const useGadgetMutation: typeof useMutation = (query) => {
  if (!useContext(GadgetContext)) throw new Error(noProviderErrorMessage);
  return useMutation(query);
};
