import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { ActionMetadata, GlobalActionMetadata } from "../metadata.js";
export declare const validateNonBulkAction: (action: ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>) => void;
export declare const validateTriggersFromApiClient: (action: ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>) => void;
export declare const validateTriggersFromMetadata: (metadata?: ActionMetadata | GlobalActionMetadata) => void;
