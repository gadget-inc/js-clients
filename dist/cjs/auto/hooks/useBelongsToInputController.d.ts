import type { AutoRelationshipInputProps } from "../interfaces/AutoRelationshipInputProps.js";
export declare const useBelongsToInputController: (props: AutoRelationshipInputProps) => {
    fieldMetadata: {
        path: string;
        metadata: import("../../metadata.js").FieldMetadata;
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
    onSelectRecord: (recordId: string) => void;
    onRemoveRecord: () => void;
    selectedRecordId: any;
    selectedRelatedModelRecordMissing: boolean;
    isLoading: boolean;
    errorMessage: string | undefined;
};
