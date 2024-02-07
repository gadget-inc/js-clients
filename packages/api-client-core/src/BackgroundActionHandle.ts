import type { GadgetConnection } from "./GadgetConnection.js";
import type { AnyActionFunction } from "./GadgetFunctions.js";
import type { ActionFunctionOptions, EnqueueBackgroundActionOptions } from "./types.js";

/** Represents a handle to a background action which has been enqueued */
export class BackgroundActionHandle<Action extends AnyActionFunction> {
  constructor(readonly connection: GadgetConnection, readonly id: string, readonly options: EnqueueBackgroundActionOptions<Action>) {}

  /** Wait for this background action to complete and return the result. */
  async result<Options extends ActionFunctionOptions<Action>>(options?: Options) {
    // TODO: implement
  }
}
