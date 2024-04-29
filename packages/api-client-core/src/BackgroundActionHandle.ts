import type { GadgetConnection } from "./GadgetConnection.js";
import type { ActionFunction, ActionFunctionMetadata, GlobalActionFunction } from "./GadgetFunctions.js";
import type { GadgetRecord } from "./GadgetRecord.js";
import { backgroundActionResultRunner } from "./operationRunners.js";
import type { DefaultSelection, Select } from "./types.js";

export type BackgroundActionResultData<F extends ActionFunctionMetadata<any, any, any, any, any, any> | GlobalActionFunction<any>> =
  F extends ActionFunction<any, any, any, any, any>
    ? F["hasReturnType"] extends true
      ? any
      : GadgetRecord<
          Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], F["optionsType"], F["defaultSelection"]>>
        >
    : any;

export type BackgroundActionResult<Data = any> = {
  id: string;
  outcome: string | null;
  result: Data | null;
};

/** Represents a handle to a background action which has been enqueued */
export class BackgroundActionHandle<
  SchemaT,
  Action extends ActionFunctionMetadata<any, any, any, SchemaT, any, any> | GlobalActionFunction<any>,
  ResultData = BackgroundActionResultData<Action>
> {
  constructor(readonly connection: GadgetConnection, readonly action: Action, readonly id: string) {}

  /** Wait for this background action to complete and return the result. */
  async result(options?: any) {
    return (await backgroundActionResultRunner<SchemaT, Action, ResultData>(this.connection, this.id, this.action, options)).result;
  }
}
