import type { AutoRelationshipInputProps, OptionLabel } from "../interfaces/AutoRelationshipInputProps.js";
export declare const useBelongsToController: (props: {
    field: string;
    primaryLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
}) => {
    record: any;
    fieldMetadata: {
        path: string;
        metadata: import("../../metadata.js").FieldMetadata;
    };
    relatedModelOptions: {
        options: import("../interfaces/AutoRelationshipInputProps.js").Option[];
        searchFilterOptions: import("../interfaces/AutoRelationshipInputProps.js").Option[];
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
            set: (search?: string | undefined) => void;
        };
    };
    isLoading: boolean;
    errorMessage: string | undefined;
};
export declare const useBelongsToInputController: (props: AutoRelationshipInputProps) => {
    fieldMetadata: {
        path: string;
        metadata: import("../../metadata.js").FieldMetadata;
    };
    relatedModelOptions: {
        options: import("../interfaces/AutoRelationshipInputProps.js").Option[];
        searchFilterOptions: import("../interfaces/AutoRelationshipInputProps.js").Option[];
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
            set: (search?: string | undefined) => void;
        };
    };
    onSelectRecord: (record: Record<string, any>) => void;
    onRemoveRecord: () => void;
    selectedRecord: Record<string, any> | undefined;
    danglingSelectedRecordId: any;
    isLoading: boolean;
    errorMessage: string | undefined;
};
