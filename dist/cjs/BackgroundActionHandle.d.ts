import type { GadgetConnection } from "./GadgetConnection.js";
import type { AnyActionFunction } from "./GadgetFunctions.js";
import type { ActionFunctionOptions } from "./types.js";
export type BackgroundActionResult<R = any> = {
    id: string;
    outcome: string | null;
    result: R | null;
};
/** Represents a handle to a background action which has been enqueued */
export declare class BackgroundActionHandle<Action extends AnyActionFunction> {
    readonly connection: GadgetConnection;
    readonly action: Action;
    readonly id: string;
    constructor(connection: GadgetConnection, action: Action, id: string);
    /** Wait for this background action to complete and return the result. */
    result<Options extends ActionFunctionOptions<Action>>(options?: Options): Promise<any>;
}
