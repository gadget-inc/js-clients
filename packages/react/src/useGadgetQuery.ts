import { useContext } from "react";
import { useQuery } from "urql";
import { GadgetContext } from "./GadgetProvider";
import { noProviderErrorMessage } from "./utils";

export const useGadgetQuery: typeof useQuery = (args) => {
  if (!useContext(GadgetContext)) throw new Error(noProviderErrorMessage);
  return useQuery(args);
};
