import type { ReactNode } from "react";
import type { Control } from "../../useActionForm.js";
import { AnyModelFinderMetadata, FindManyOptions } from "@gadgetinc/api-client-core";
export interface AutoRelationshipInputProps {
    field: string;
    control?: Control<any>;
    optionLabel?: OptionLabel;
    label?: string;
    relatedModelRecordFilter?: {
        relatedModelManager?: AnyModelFinderMetadata["modelApiIdentifier"];
        filter: FindManyOptions["filter"];
    };
}
/**
 * Type for the option label when displaying a list of records from a related model
 */
export type OptionLabel = string | ((record: Record<string, any>) => ReactNode);
