import { useContext } from "react";
import { useQuery } from "urql";
import { GadgetUrqlClientContext } from "./GadgetProvider.js";
import { noProviderErrorMessage, useMemoizedQueryOptions } from "./utils.js";
export const useGadgetQuery = (args) => {
    if (!useContext(GadgetUrqlClientContext))
        throw new Error(noProviderErrorMessage);
    const options = useMemoizedQueryOptions(args);
    return useQuery(options);
};
//# sourceMappingURL=useGadgetQuery.js.map