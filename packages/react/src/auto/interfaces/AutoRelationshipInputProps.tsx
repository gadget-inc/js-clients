import type { ReactNode } from "react";
import type { Control } from "../../useActionForm.js";

export interface AutoRelationshipInputProps {
  field: string;
  control?: Control<any>;
  optionLabel?: OptionLabel;
  label?: string;
}

export interface DisplayedRecordOption extends RecordLabel<ReactNode> {
  id: string;
}

/**
 * Type for the option label when displaying a list of records from a related model
 */
export type OptionLabel = string | string[] | ((record: Record<string, any>) => ReactNode);

export type RecordLabel<T = OptionLabel> = {
  primary?: T;
  secondary?: T;
  tertiary?: T;
};

export type AutoRelationshipFormProps = {
  field: string;
  label?: ReactNode;
  children: ReactNode;
  recordLabel?: RecordLabel;
};
