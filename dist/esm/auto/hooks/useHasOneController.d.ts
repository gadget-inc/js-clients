import type { AutoRelationshipInputProps, OptionLabel } from "../interfaces/AutoRelationshipInputProps.js";
export declare const useHasOneController: (props: {
    field: string;
    primaryLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
}) => {
    record: Record<string, any> | undefined;
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
            value: string;
            set: (search?: string | undefined) => void;
        };
    };
    errorMessage: string | undefined;
    isLoading: boolean;
};
export declare const useHasOneInputController: (props: AutoRelationshipInputProps) => {
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
            value: string;
            set: (search?: string | undefined) => void;
        };
    };
    selectedRecord: Record<string, any> | undefined;
    errorMessage: string | undefined;
    isLoading: boolean;
    onSelectRecord: (record: Record<string, any>) => void;
    onRemoveRecord: (record: Record<string, any>) => void;
};
