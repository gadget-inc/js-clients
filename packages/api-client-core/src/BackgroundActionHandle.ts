import type { GadgetConnection } from "./GadgetConnection.js";
import type { ActionFunction, AnyActionFunction } from "./GadgetFunctions.js";
import type { GadgetRecord } from "./GadgetRecord.js";
import { actionResultRunner } from "./operationRunners.js";
import type { ActionFunctionOptions, DefaultSelection, Select } from "./types.js";

export type BackgroundActionResultData<
  Action extends AnyActionFunction,
  Options extends ActionFunctionOptions<Action>
> = Action extends ActionFunction<any, any, any, any, any>
  ? Action["hasReturnType"] extends true
    ? any
    : GadgetRecord<
        Select<
          Exclude<Action["schemaType"], null | undefined>,
          DefaultSelection<Action["selectionType"], Options, Action["defaultSelection"]>
        >
      >
  : any;

export type BackgroundActionResult<Action extends AnyActionFunction, Options extends ActionFunctionOptions<Action>> = {
  id: string;
  outcome: string | null;
  result: BackgroundActionResultData<Action, Options>;
};

/** Represents a handle to a background action which has been enqueued */
export class BackgroundActionHandle<Action extends AnyActionFunction> {
  constructor(readonly connection: GadgetConnection, readonly action: Action, readonly id: string) {}

  /** Wait for this background action to complete and return the result. */
  async result<Options extends ActionFunctionOptions<Action>>(options?: Options) {
    return (await actionResultRunner(this.connection, this.id, this.action, options)).result;
  }
}
