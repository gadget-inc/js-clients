import { type AutoRelationshipFormProps, type OptionLabel } from "../interfaces/AutoRelationshipInputProps.js";
export declare const useSelectedPathsFromRecordLabel: (props: AutoRelationshipFormProps) => string[];
export declare const getSelectedPathsFromOptionLabel: (optionLabel?: OptionLabel, getFieldsToSelectOnRecordLabelCallback?: () => string[]) => string[];
