import type { GadgetRecord } from "@gadgetinc/core";
import React, { useContext } from "react";
import type { TableResult } from "src/use-table/types.js";

export type AutoTableContext = TableResult<GadgetRecord<any>>;

/**
 * React context that stores an instance of the metadata loaded for a particular form action
 */

export const AutoTableContext = React.createContext<AutoTableContext | undefined>(undefined);

/**
 * Get the current `metadata` object and `submit` function from React context
 * Must be called within a component wrapped by the `<AutoForm>` component.
 **/
export const useAutoTableContext = () => {
  const autoTableContext = useContext(AutoTableContext);
  if (!autoTableContext) {
    throw new Error(
      `useAutoTableContext hook called in context where no AutoTableContext is available. Please ensure you are wrapping this hook with the <AutoTable/> component from @gadgetinc/react.

    Possible remedies:
      - ensuring you have the <AutoTable/> component wrapped around your hook invocation
      - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`
    );
  }

  return autoTableContext;
};
