import type { FindManyOptions } from "@gadgetinc/api-client-core";
import type { ReactNode } from "react";
import type { Control } from "../../useActionForm.js";

export type RecordFilter = FindManyOptions["filter"];

export interface AutoRelationshipInputProps {
  field: string;
  control?: Control<any>;
  optionLabel?: OptionLabel;
  label?: string;
  recordFilter?: RecordFilter;
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
  recordFilter?: RecordFilter;
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

export const shouldShowOptionLabel = (option?: DisplayedRecordOption | null) => {
  return option ? [option.primary, option.secondary, option.tertiary].some(canLabelBeShown) : false;
};

const canLabelBeShown = (option?: React.ReactNode) => {
  if (!option) {
    return false;
  }

  if (typeof option === "string") {
    return true;
  }

  if (
    typeof option === "object" &&
    "props" in option &&
    typeof option.props === "object" &&
    option.props &&
    "children" in option.props &&
    option.props.children
  ) {
    return true;
  }
  return false;
};
