import type { Option, OptionLabel } from "../interfaces/AutoRelationshipInputProps.js";
export declare const optionRecordsToLoadCount = 25;
export declare const selectedRecordsToLoadCount = 25;
export declare const useOptionLabelForField: (field: string, optionLabel?: OptionLabel) => OptionLabel;
export declare const useRelatedModelOptions: (props: {
    field: string;
    optionLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
}) => {
    options: Option[];
    searchFilterOptions: Option[];
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
        value: string | undefined;
        set: (search?: string) => void;
    };
};
export declare const getRecordAsOption: (record: Record<string, any>, optionLabel: OptionLabel, secondaryLabel?: OptionLabel, tertiaryLabel?: OptionLabel) => Option;
export declare const getRecordsAsOptions: (records: Record<string, any>[], optionLabel: OptionLabel, secondaryLabel?: OptionLabel, tertiaryLabel?: OptionLabel) => Option[];
