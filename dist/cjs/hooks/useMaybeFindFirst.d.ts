import { FindFirstFunction } from "../GadgetFunctions.js";
import { GadgetRecord } from "../GadgetRecord.js";
import { RuntimeAdapter } from "../adaptors/types.js";
import { CoreHooks } from "../createHooks.js";
import { DefaultSelection, LimitToKnownKeys, Select } from "../types.js";
import { OptionsType, ReadHookResult, ReadOperationOptions } from "./utils.js";
export declare const createUseMaybeFindFirst: (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
    /**
     *  Hook to fetch many Gadget records using the `maybeFindFirst` method of a given manager.
     *
     * @param manager Gadget model manager to use
     * @param options options for filtering and searching records, and selecting the fields in each record of the result
     *
     * @example
     *
     * ```
     * export function Users() {
     *   const [result, refresh] = useMaybeFindFirst(Client.user, {
     *     select: {
     *       name: true,
     *     },
     *   });
     *
     *   if (result.error) return <>Error: {result.error.toString()}</>;
     *   if (result.fetching && !result.data) return <>Fetching...</>;
     *   if (!result.data) return <>No user found</>;
     *
     *   return <div>{result.data.name}</div>;
     * }
     * ```
     */
    useMaybeFindFirst: <GivenOptions extends OptionsType, SchemaT, F extends FindFirstFunction<GivenOptions, any, SchemaT, any>, Options extends F["optionsType"] & ReadOperationOptions>(manager: {
        findFirst: F;
    }, options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions>) => ReadHookResult<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>> | null>;
};
