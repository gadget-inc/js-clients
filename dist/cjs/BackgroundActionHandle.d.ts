import type { GadgetConnection } from "./GadgetConnection.js";
import type { ActionFunction, ActionFunctionMetadata, GlobalActionFunction } from "./GadgetFunctions.js";
import type { GadgetRecord } from "./GadgetRecord.js";
import type { ActionFunctionOptions, DefaultSelection, Select } from "./types.js";
export type BackgroundActionResultData<F extends ActionFunctionMetadata<any, any, any, any, any, any> | GlobalActionFunction<any>, Selection> = F extends ActionFunction<any, any, any, any, any> ? F["hasReturnType"] extends true ? any : GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Selection extends {
    select?: F["selectionType"] | null | undefined;
} ? Selection : never, F["defaultSelection"]>>> : any;
export type BackgroundActionResult<Data = any> = {
    id: string;
    outcome: string | null;
    result: Data | null;
};
/** Represents a handle to a background action which has been enqueued */
export declare class BackgroundActionHandle<SchemaT, Action extends ActionFunctionMetadata<any, any, any, SchemaT, any, any> | GlobalActionFunction<any>> {
    readonly connection: GadgetConnection;
    readonly action: Action;
    readonly id: string;
    constructor(connection: GadgetConnection, action: Action, id: string);
    /** Wait for this background action to complete and return the result. */
    result<Options extends ActionFunctionOptions<Action>, ResultData = BackgroundActionResultData<Action, Options>>(options?: Options): Promise<ResultData | null>;
    /** Cancel this background action by id. */
    cancel(): Promise<void>;
}
