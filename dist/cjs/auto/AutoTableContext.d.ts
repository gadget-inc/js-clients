import type { GadgetRecord } from "@gadgetinc/core";
import React from "react";
import type { TableResult } from "src/use-table/types.js";
export type AutoTableContext = TableResult<GadgetRecord<any>>;
/**
 * React context that stores an instance of the metadata loaded for a particular form action
 */
export declare const AutoTableContext: React.Context<AutoTableContext | undefined>;
/**
 * Get the current `metadata` object and `submit` function from React context
 * Must be called within a component wrapped by the `<AutoForm>` component.
 **/
export declare const useAutoTableContext: () => AutoTableContext;
