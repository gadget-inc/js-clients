import type { GadgetConnection } from "./GadgetConnection.js";
import type { ActionFunctionMetadata, AnyActionFunction, GlobalActionFunction } from "./GadgetFunctions.js";
import type { GadgetRecord } from "./GadgetRecord.js";
import type { DefaultSelection, Select } from "./types.js";
export type BackgroundActionResultData<SchemaT, Action extends AnyActionFunction> = Action extends ActionFunctionMetadata<any, any, any, SchemaT, any, any> ? Action["hasReturnType"] extends true ? any : GadgetRecord<Select<Exclude<SchemaT, null | undefined>, DefaultSelection<Action["selectionType"], Action["optionsType"], Action["defaultSelection"]>>> : any;
export type BackgroundActionResult<Data = any> = {
    id: string;
    outcome: string | null;
    result: Data | null;
};
/** Represents a handle to a background action which has been enqueued */
export declare class BackgroundActionHandle<Action extends ActionFunctionMetadata<any, any, any, any, any, any> | GlobalActionFunction<any>> {
    readonly connection: GadgetConnection;
    readonly action: Action;
    readonly id: string;
    constructor(connection: GadgetConnection, action: Action, id: string);
    /** Wait for this background action to complete and return the result. */
    result<SchemaT>(options?: Action extends ActionFunctionMetadata<any, any, any, any, any, any> ? Action["optionsType"] : never): Promise<BackgroundActionResultData<SchemaT, Action> | null>;
}
