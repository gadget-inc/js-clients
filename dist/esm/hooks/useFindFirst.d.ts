import { FindFirstFunction } from "../GadgetFunctions.js";
import { GadgetRecord } from "../GadgetRecord.js";
import { RuntimeAdapter } from "../adaptors/types.js";
import { CoreHooks } from "../createHooks.js";
import { DefaultSelection, LimitToKnownKeys, Select } from "../types.js";
import { OptionsType, ReadHookResult, ReadOperationOptions } from "./utils.js";
export declare const createUseFindFirst: (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
    /**
     * Hook to fetch the first backend record matching a given filter and sort. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be the first record found if there is one, and null otherwise.
     *
     * @param manager Gadget model manager to use
     * @param options options for filtering and searching records, and selecting the fields in each record of the result
     *
     * @example
     *
     * ```
     * export function Users() {
     *   const [result, refresh] = useFindFirst(api.user, {
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
    useFindFirst: <GivenOptions extends OptionsType, SchemaT, F extends FindFirstFunction<GivenOptions, any, SchemaT, any>, Options extends F["optionsType"] & ReadOperationOptions>(manager: {
        findFirst: F;
    }, options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions>) => ReadHookResult<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>>;
};
