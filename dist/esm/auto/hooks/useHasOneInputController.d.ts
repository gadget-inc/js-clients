import type { AutoRelationshipInputProps } from "../interfaces/AutoRelationshipInputProps.js";
export declare const useHasOneInputController: (props: AutoRelationshipInputProps) => {
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
    selectedRecord: Record<string, any> | undefined;
    errorMessage: string | undefined;
    isLoading: boolean;
    onSelectRecord: (record: Record<string, any>) => void;
    onRemoveRecord: (record: Record<string, any>) => void;
};
