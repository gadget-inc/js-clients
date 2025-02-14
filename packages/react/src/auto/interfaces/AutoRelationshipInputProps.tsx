import type { ReactNode } from "react";
import type { Control } from "../../useActionForm.js";

export interface AutoRelationshipInputProps {
  field: string;
  control?: Control<any>;
  optionLabel?: OptionLabel;
  label?: string;
}

export type DisplayedRecordOption = RecordLabel<ReactNode> & {
  id: string;
};

/**
 * Type for the option label when displaying a list of records from a related model
 */
export type OptionLabel = string | string[] | ((props: { record: Record<string, any> }) => ReactNode);

export type RecordLabel<T = OptionLabel> = {
  primary?: T;
  secondary?: T;
  tertiary?: T;
};

export type AutoRelationshipFormProps = {
  field: string;
  label?: ReactNode;
  children: ReactNode;
  recordLabel?: OptionLabel | RecordLabel;
};

export const getRecordLabelObject = (recordLabel?: OptionLabel | RecordLabel): RecordLabel | undefined => {
  if (!recordLabel) {
    return undefined;
  }

  if (typeof recordLabel === "object" && !Array.isArray(recordLabel)) {
    return recordLabel;
  }

  return { primary: recordLabel };
};

export const getOptionLabelsFromRecordLabel = (recordLabel: OptionLabel | RecordLabel): (OptionLabel | undefined)[] => {
  const recordLabelObject = getRecordLabelObject(recordLabel);
  if (!recordLabelObject) {
    return [];
  }
  return [recordLabelObject.primary, recordLabelObject.secondary, recordLabelObject.tertiary];
};
