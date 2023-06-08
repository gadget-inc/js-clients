import { useContext } from "react";
import { useQuery } from "urql";
import { GadgetUrqlClientContext } from "./GadgetProvider";
import { noProviderErrorMessage } from "./utils";

export const useGadgetQuery: typeof useQuery = (args) => {
  if (!useContext(GadgetUrqlClientContext)) throw new Error(noProviderErrorMessage);
  return useQuery(args);
};
