import { type AutoRelationshipFormProps, type DisplayedRecordOption, type OptionLabel, type RecordLabel } from "../interfaces/AutoRelationshipInputProps.js";
export declare const optionRecordsToLoadCount = 25;
export declare const selectedRecordsToLoadCount = 25;
export declare const useRecordLabelObjectFromProps: (props: Pick<AutoRelationshipFormProps, "field" | "recordLabel">) => {
    primary: OptionLabel;
    secondary?: OptionLabel | undefined;
    tertiary?: OptionLabel | undefined;
};
export declare const useOptionLabelForField: (field: string, optionLabel?: OptionLabel) => OptionLabel;
export declare const useRelatedModelOptions: (props: Omit<AutoRelationshipFormProps, "children" | "label">) => {
    options: DisplayedRecordOption[];
    searchFilterOptions: DisplayedRecordOption[];
    relatedModel: {
        records: any[];
        error: import("../../utils.js").ErrorWrapper | undefined;
        fetching: boolean;
    };
    pagination: {
        clearPagination: () => void;
        loadNextPage: () => void;
        hasNextPage: boolean;
    };
    search: {
        value: string;
        set: (search?: string) => void;
    };
};
export declare const getRecordAsOption: (record: Record<string, any>, recordLabel: RecordLabel) => DisplayedRecordOption;
export declare const getRecordsAsOptions: (records: Record<string, any>[], recordLabel: RecordLabel) => DisplayedRecordOption[];
