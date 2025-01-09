import type { ReactNode } from "react";
import type { Control } from "../../useActionForm.js";
import { AnyModelFinderMetadata, FindManyOptions } from "@gadgetinc/api-client-core";

export interface AutoRelationshipInputProps {
  field: string;
  control?: Control<any>;
  optionLabel?: OptionLabel;
  label?: string;
  relatedModelRecordFilter?: { relatedModelManager?: AnyModelFinderMetadata["modelApiIdentifier"]; filter: FindManyOptions["filter"] };
}

export interface Option {
  id: string;
  label: ReactNode;
  secondaryLabel?: ReactNode;
  tertiaryLabel?: ReactNode;
}

/**
 * Type for the option label when displaying a list of records from a related model
 */
export type OptionLabel = string | string[] | ((record: Record<string, any>) => ReactNode);
