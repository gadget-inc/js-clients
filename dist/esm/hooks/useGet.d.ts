import { GetFunction } from "../GadgetFunctions.js";
import { GadgetRecord } from "../GadgetRecord.js";
import { RuntimeAdapter } from "../adaptors/types.js";
import { CoreHooks } from "../createHooks.js";
import { DefaultSelection, LimitToKnownKeys, Select } from "../types.js";
import { OptionsType, ReadHookResult, ReadOperationOptions } from "./utils.js";
export declare const createUseGet: (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
    /**
     * Hook that fetches a singleton record for an `api.currentSomething` style model manager. `useGet` fetches one global record, which is most often the current session. `useGet` doesn't require knowing the record's ID in order to fetch it, and instead returns the one current record for the current context.
     *
     * @param manager Gadget model manager to use, like `api.currentSomething`
     * @param options options for selecting the fields in the result
     *
     * @example
     * ```
     * export function CurrentSession() {
     *   const [{error, data, fetching}, refresh] = useGet(api.currentSession, {
     *     select: {
     *       id: true,
     *       userId: true,
     *     },
     *   });
     *
     *   if (error) return <>Error: {error.toString()}</>;
     *   if (fetching && !data) return <>Fetching...</>;
     *   if (!data) return <>No current session found</>;
     *
     *   return <div>Current session ID={data.id} and userId={data.userId}</div>;
     * }
     * ```
     */
    useGet: <GivenOptions extends OptionsType, SchemaT, F extends GetFunction<GivenOptions, any, SchemaT, any>, Options extends F["optionsType"] & ReadOperationOptions>(manager: {
        get: F;
    }, options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions>) => ReadHookResult<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>>;
};
