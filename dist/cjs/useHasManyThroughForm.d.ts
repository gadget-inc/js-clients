/// <reference types="react" />
import type { AutoHasManyThroughFormProps } from "./auto/interfaces/AutoRelationshipInputProps.js";
export declare const useHasManyThroughForm: (props: AutoHasManyThroughFormProps) => {
    fields: Record<"_fieldArrayKey", string>[];
    append: import("react-hook-form/dist/types/fieldArray.js").UseFieldArrayAppend<import("react-hook-form/dist/types/fields.js").FieldValues, string>;
    remove: import("react-hook-form/dist/types/fieldArray.js").UseFieldArrayRemove;
    joinRecords: [string, number, Record<string, any>][];
    listboxId: string;
    pathPrefix: string;
    metaDataPathPrefix: string;
    recordLabel: {
        primary: import("./auto/interfaces/AutoRelationshipInputProps.js").OptionLabel;
        secondary?: import("./auto/interfaces/AutoRelationshipInputProps.js").OptionLabel | undefined;
        tertiary?: import("./auto/interfaces/AutoRelationshipInputProps.js").OptionLabel | undefined;
    };
    siblingModelName: string;
    siblingRecordsLoading: boolean;
    siblingRecords: any[];
    siblingPagination: {
        clearPagination: () => void;
        loadNextPage: () => void;
        hasNextPage: boolean;
    };
    search: {
        value: string;
        set: (search?: string | undefined) => void;
    };
    siblingModelOptions: import("./auto/interfaces/AutoRelationshipInputProps.js").DisplayedRecordOption[];
    metadata: import("./metadata.js").FieldMetadata;
    joinModelField: string;
    joinModelApiIdentifier: string;
    inverseRelatedModelField: string;
    fieldArrayPath: string;
    fieldArray: import("react-hook-form/dist/types/fieldArray.js").UseFieldArrayReturn<import("react-hook-form/dist/types/fields.js").FieldValues, string, "_fieldArrayKey">;
    field: string;
    records: Record<string, any>[];
    children: import("react").ReactNode;
    relatedModelOptions: {
        options: import("./auto/interfaces/AutoRelationshipInputProps.js").DisplayedRecordOption[];
        searchFilterOptions: import("./auto/interfaces/AutoRelationshipInputProps.js").DisplayedRecordOption[];
        relatedModel: {
            records: any[];
            error: import("@gadgetinc/core").AnyErrorWrapper<Error> | undefined;
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
};
