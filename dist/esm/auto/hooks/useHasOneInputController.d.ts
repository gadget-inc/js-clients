import type { AutoRelationshipInputProps } from "../interfaces/AutoRelationshipInputProps.js";
export declare const useHasOneInputController: (props: AutoRelationshipInputProps) => {
    fieldMetadata: {
        path: string;
        metadata: import("../../internal/gql/graphql.js").FieldMetadataFragment;
    };
    relatedModelOptions: {
        options: any[];
        searchFilterOptions: any[];
        selected: {
            records: any[] | undefined;
            fetching: boolean;
            error: import("../../utils.js").ErrorWrapper | undefined;
        };
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
    selectedRecordIds: any[];
    errorMessage: string | undefined;
    isLoading: boolean;
    onSelectRecord: (recordId: string) => void;
    onRemoveRecord: (recordId: string) => void;
};
