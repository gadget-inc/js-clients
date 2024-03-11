import type { GadgetConnection } from "./GadgetConnection.js";
import type { AnyActionFunction } from "./GadgetFunctions.js";
import { actionResultRunner } from "./operationRunners.js";
import type { ActionFunctionOptions } from "./types.js";

export type BackgroundActionResult<R = any> = {
  id: string;
  outcome: string | null;
  result: R | null;
};

/** Represents a handle to a background action which has been enqueued */
export class BackgroundActionHandle<Action extends AnyActionFunction> {
  constructor(readonly connection: GadgetConnection, readonly action: Action, readonly id: string) {}

  /** Wait for this background action to complete and return the result. */
  async result<Options extends ActionFunctionOptions<Action>>(options?: Options) {
    return (await actionResultRunner(this.connection, this.id, this.action, options)).result;
  }
}
