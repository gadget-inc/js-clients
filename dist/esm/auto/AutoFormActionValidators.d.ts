import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import { FieldMetadata, type ActionMetadata, type GlobalActionMetadata } from "../metadata.js";
import { RecordIdentifier } from "../use-action-form/types.js";
import type { useAutoForm } from "./AutoForm.js";
export declare const validateNonBulkAction: (action: ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>) => void;
export declare const MissingActionPropErrorMessage = "Specify a valid Gagdet action to use AutoForm";
export declare const InvalidActionErrorMessage = "\"action\" is not a valid Gadget action";
export declare const MissingApiTriggerErrorMessage = "\"action\" requires an API trigger to be used in AutoForm";
export declare const validateTriggersFromApiClient: (action: ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>) => void;
export declare const validateAutoFormProps: (props: Parameters<typeof useAutoForm>[0]) => void;
export declare const validateTriggersFromMetadata: (metadata?: ActionMetadata | GlobalActionMetadata) => void;
export declare const validateFindByObjectWithMetadata: (fields?: readonly {
    path: string;
    metadata: FieldMetadata;
}[], findBy?: RecordIdentifier) => void;
