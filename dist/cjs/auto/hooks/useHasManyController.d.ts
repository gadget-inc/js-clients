import type { AutoRelationshipInputProps } from "../interfaces/AutoRelationshipInputProps.js";
export declare const useHasManyController: (props: AutoRelationshipInputProps) => {
    fieldMetadata: {
        path: string;
        metadata: import("../../internal/gql/graphql.js").FieldMetadataFragment;
    };
    fieldArray: import("react-hook-form/dist/types/fieldArray.js").UseFieldArrayReturn<import("react-hook-form/dist/types/fields.js").FieldValues, string, "_fieldArrayKey">;
    records: Record<string, any>[];
};
export declare const useHasManyInputController: (props: AutoRelationshipInputProps) => {
    fieldMetadata: {
        path: string;
        metadata: import("../../internal/gql/graphql.js").FieldMetadataFragment;
    };
    relatedModelOptions: {
        options: any[];
        searchFilterOptions: any[];
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
    selectedRecords: Record<string, any>[];
    errorMessage: string | undefined;
    isLoading: boolean;
    onSelectRecord: (record: Record<string, any>) => void;
    onRemoveRecord: (record: Record<string, any>) => void;
};
