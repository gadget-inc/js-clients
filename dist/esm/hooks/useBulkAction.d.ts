import { BulkActionFunction } from "../GadgetFunctions.js";
import { GadgetRecord } from "../GadgetRecord.js";
import { RuntimeAdapter } from "../adaptors/types.js";
import { CoreHooks } from "../createHooks.js";
import { DefaultSelection, LimitToKnownKeys, Select } from "../types.js";
import { ActionHookResult, OptionsType } from "./utils.js";
export declare const createUseBulkAction: (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
    /**
     * Hook to run a Gadget model bulk action.
     *
     * @param action any bulk action function from a Gadget manager
     * @param options action options, like selecting the fields in the result
     *
     * @example
     * ```
     * export function BulkFinish(props: { ids: string[]; }) {
     *   const [result, bulkFinish] = useBulkAction(Client.todo.bulkFinish, {
     *     select: {
     *       id: true,
     *     },
     *   });
     *
     *   const onClick = () => ;
     *
     *   return (
     *     <>
     *       {result.error && <>Failed to create user: {result.error.toString()}</>}
     *       {result.fetching && <>Creating user...</>}
     *       {result.data && <>Finished TODOs with ids={props.ids}</>}
     *       <button onClick={() => bulkFinish(ids))}>Bulk finish</button>
     *     </>
     *   );
     * }
     */
    useBulkAction: <GivenOptions extends OptionsType, SchemaT, F extends BulkActionFunction<GivenOptions, any, any, SchemaT, any>, Options extends F["optionsType"]>(action: F, options?: LimitToKnownKeys<Options, F["optionsType"]>) => ActionHookResult<F["hasReturnType"] extends true ? any[] : GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>[], Exclude<F["variablesType"], null | undefined>>;
};
