import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { FieldMetadata } from "../metadata.js";
import { type GlobalActionMetadata, type ModelWithOneActionMetadata } from "../metadata.js";
import type { RecordIdentifier } from "../use-action-form/types.js";
import type { OptionsType } from "../utils.js";
import type { AutoFormProps } from "./AutoForm.js";
export declare const validateNonBulkAction: (action: ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>) => void;
export declare const MissingActionPropErrorMessage = "Specify a valid Gagdet action to use AutoForm";
export declare const InvalidActionErrorMessage = "\"action\" is not a valid Gadget action";
export declare const MissingApiTriggerErrorMessage = "\"action\" requires an API trigger to be used in AutoForm";
export declare const validateTriggersFromApiClient: (action: ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>) => void;
export declare const validateAutoFormProps: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends GlobalActionFunction<any> | ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: AutoFormProps<GivenOptions, SchemaT, ActionFunc>) => void;
export declare const validateTriggersFromMetadata: (metadata?: ModelWithOneActionMetadata | GlobalActionMetadata) => void;
export declare const validateFindByObjectWithMetadata: (fields?: readonly {
    path: string;
    metadata: FieldMetadata;
}[], findBy?: RecordIdentifier) => void;
