import React, { type ReactNode } from "react";
import type { AutoRelationshipFormProps, AutoRelationshipInputProps } from "../interfaces/AutoRelationshipInputProps.js";
export declare const useHasManyThroughController: (props: Omit<AutoRelationshipFormProps, "children" | "label">) => {
    fieldArrayPath: string;
    fieldMetadata: {
        path: string;
        metadata: import("../../metadata.js").FieldMetadata;
    };
    fieldArray: import("react-hook-form/dist/types/fieldArray.js").UseFieldArrayReturn<import("react-hook-form/dist/types/fields.js").FieldValues, string, "_fieldArrayKey">;
    records: Record<string, any>[];
    relatedModelOptions: {
        options: import("../interfaces/AutoRelationshipInputProps.js").DisplayedRecordOption[];
        searchFilterOptions: import("../interfaces/AutoRelationshipInputProps.js").DisplayedRecordOption[];
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
        options: import("../interfaces/AutoRelationshipInputProps.js").DisplayedRecordOption[];
        searchFilterOptions: import("../interfaces/AutoRelationshipInputProps.js").DisplayedRecordOption[];
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
    fieldArray: import("react-hook-form/dist/types/fieldArray.js").UseFieldArrayReturn<import("react-hook-form/dist/types/fields.js").FieldValues, string, "_fieldArrayKey">;
    onSelectRecord: (record: Record<string, any>) => void;
    onRemoveRecord: (record: Record<string, any>) => void;
};
export declare const AutoHasManyThroughJoinModelForm: (props: {
    /** The React children containing inputs on the join model in an AutoHasManyThroughForm component */
    children?: ReactNode;
}) => React.JSX.Element;
export declare const HasManyThroughJoinModelContext: React.Context<true | null>;
export declare const useIsInHasManyThroughJoinModelInput: () => boolean;
export declare const useEnsureInHasManyThroughForm: () => void;
