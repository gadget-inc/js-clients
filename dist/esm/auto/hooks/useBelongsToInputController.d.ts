import type { AutoRelationshipInputProps } from "../interfaces/AutoRelationshipInputProps.js";
export declare const useBelongsToInputController: (props: AutoRelationshipInputProps) => {
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
    onSelectRecord: (record: Record<string, any>) => void;
    onRemoveRecord: () => void;
    selectedRecord: Record<string, any> | undefined;
    isLoading: boolean;
    errorMessage: string | undefined;
};
