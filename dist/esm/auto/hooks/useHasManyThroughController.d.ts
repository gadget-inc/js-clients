import React, { type ReactNode } from "react";
import type { AutoRelationshipFormProps, AutoRelationshipInputProps } from "../interfaces/AutoRelationshipInputProps.js";
export declare const useHasManyThroughController: (props: Omit<AutoRelationshipFormProps, "children" | "label">) => {
    fieldArrayPath: string;
    fieldMetadata: {
        path: string;
        metadata: import("../../metadata.js").FieldMetadata;
    };
    fieldArray: import("../../useActionForm.js").UseFieldArrayReturn<import("../../useActionForm.js").FieldValues, string, "_fieldArrayKey">;
    records: Record<string, any>[];
    relatedModelOptions: {
        options: import("../interfaces/AutoRelationshipInputProps.js").DisplayedRecordOption[];
        searchFilterOptions: import("../interfaces/AutoRelationshipInputProps.js").DisplayedRecordOption[];
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
    selectedRecords: any[];
    errorMessage: string | undefined;
    isLoading: boolean;
    fieldArray: import("../../useActionForm.js").UseFieldArrayReturn<import("../../useActionForm.js").FieldValues, string, "_fieldArrayKey">;
    onSelectRecord: (record: Record<string, any>) => void;
    onRemoveRecord: (record: Record<string, any>) => void;
};
/**
 * A form for including join model fields in a hasManyThrough relationship.
 *
 * @example
 * ```tsx
 * //`course` hasMany `students` through `registration`
 *
 * <AutoForm action={api.course.create}>
 *   <AutoInput field="name" />
 *   <AutoHasManyThroughForm // `students` relationship field on `course` model
 *     field="students"
 *   >
 *     <AutoHasManyThroughJoinModelForm>
 *       <AutoInput // `isTuitionPaid` boolean field on `registration` model
 *         field="isTuitionPaid"
 *       />
 *     </AutoHasManyThroughJoinModelForm>
 *     <AutoInput
 *       field="firstName"
 *     />
 *   </AutoHasManyThroughForm>
 *   <AutoSubmit />
 * </AutoForm>
 *
 * ```
 *
 * @param props.children - Inputs on the join model inside AutoHasManyThroughForm.
 * @returns  Inputs on the join model inside AutoHasManyThroughForm.
 */
export declare const AutoHasManyThroughJoinModelForm: (props: {
    /** Inputs on the join model inside AutoHasManyThroughForm. */
    children?: ReactNode;
}) => React.JSX.Element;
/** Context to track if inside a HasManyThrough join model. */
export declare const HasManyThroughJoinModelContext: React.Context<true | null>;
/** Export a hook that checks if inside the component. */
export declare const useIsInHasManyThroughJoinModelInput: () => boolean;
/** Ensures component is used inside AutoHasManyThroughForm. */
export declare const useEnsureInHasManyThroughForm: () => void;
