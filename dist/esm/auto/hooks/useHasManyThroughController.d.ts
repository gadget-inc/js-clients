import type { AutoRelationshipInputProps, OptionLabel } from "../interfaces/AutoRelationshipInputProps.js";
export declare const useHasManyThroughController: (props: {
    field: string;
    primaryLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
}) => {
    fieldArrayPath: string;
    fieldMetadata: {
        path: string;
        metadata: import("../../metadata.js").FieldMetadata;
    };
    fieldArray: import("../../useActionForm.js").UseFieldArrayReturn<import("../../useActionForm.js").FieldValues, string, "_fieldArrayKey">;
    records: Record<string, any>[];
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
    inverseRelatedModelField: string | undefined;
    joinModelField: string;
    joinModelApiIdentifier: string | undefined;
};
export declare const useHasManyThroughInputController: (props: AutoRelationshipInputProps) => {
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
    selectedRecords: any[];
    errorMessage: string | undefined;
    isLoading: boolean;
    fieldArray: import("../../useActionForm.js").UseFieldArrayReturn<import("../../useActionForm.js").FieldValues, string, "_fieldArrayKey">;
    onSelectRecord: (record: Record<string, any>) => void;
    onRemoveRecord: (record: Record<string, any>) => void;
};
