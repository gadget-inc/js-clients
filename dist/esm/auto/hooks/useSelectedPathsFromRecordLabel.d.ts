import { type AutoRelationshipFormProps, type OptionLabel } from "../interfaces/AutoRelationshipInputProps.js";
export declare const useSelectedPathsFromRecordLabel: (props: Pick<AutoRelationshipFormProps, "field" | "recordLabel">) => {
    selectedPaths: string[];
    metadata: import("../../metadata.js").FieldMetadata | undefined;
};
export declare const getSelectedPathsFromOptionLabel: (optionLabel?: OptionLabel, getFieldsToSelectOnRecordLabelCallback?: () => string[]) => string[];
