import type { GadgetConnection } from "./GadgetConnection.js";
import type { AnyActionFunction } from "./GadgetFunctions.js";
import { actionResultRunner } from "./operationRunners.js";
import type { ActionFunctionOptions, EnqueueBackgroundActionOptions } from "./types.js";

/** Represents a handle to a background action which has been enqueued */
export class BackgroundActionHandle<Action extends AnyActionFunction> {
  constructor(
    readonly connection: GadgetConnection,
    readonly action: Action,
    readonly id: string,
    readonly options: EnqueueBackgroundActionOptions<Action>
  ) {}

  /** Wait for this background action to complete and return the result. */
  async result<Options extends ActionFunctionOptions<Action>>(options?: Options) {
    // Get the background action with result
    // Check to see if there is an outcome
    // If there is we process the result
    return await actionResultRunner(this.connection, this.id, this.action, options);
  }
}
