/// <reference types="react" />
import type { OptionLabel } from "./auto/interfaces/AutoRelationshipInputProps.js";
export declare const useHasManyThroughForm: (props: {
    field: string;
    label?: React.ReactNode;
    children: React.ReactNode;
    primaryLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
}) => {
    fields: Record<"_fieldArrayKey", string>[];
    append: import("react-hook-form/dist/types/fieldArray.js").UseFieldArrayAppend<import("react-hook-form/dist/types/fields.js").FieldValues, string>;
    remove: import("react-hook-form/dist/types/fieldArray.js").UseFieldArrayRemove;
    joinRecords: [string, number, Record<string, any>][];
    primaryLabel: OptionLabel;
    hasChildForm: boolean | "" | 0 | null | undefined;
    childPaths: false | "" | 0 | string[] | null | undefined;
    listboxId: string;
    pathPrefix: string;
    metaDataPathPrefix: string;
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
    siblingModelOptions: import("./auto/interfaces/AutoRelationshipInputProps.js").Option[];
    metadata: import("./metadata.js").FieldMetadata;
    joinModelField: string;
    joinModelApiIdentifier: string | undefined;
    inverseRelatedModelField: string | undefined;
    fieldArrayPath: string;
    fieldArray: import("react-hook-form/dist/types/fieldArray.js").UseFieldArrayReturn<import("react-hook-form/dist/types/fields.js").FieldValues, string, "_fieldArrayKey">;
    field: string;
    records: Record<string, any>[];
    children: import("react").ReactNode;
    relatedModelOptions: {
        options: import("./auto/interfaces/AutoRelationshipInputProps.js").Option[];
        searchFilterOptions: import("./auto/interfaces/AutoRelationshipInputProps.js").Option[];
        relatedModel: {
            records: any[];
            error: import("./utils.js").ErrorWrapper | undefined;
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
