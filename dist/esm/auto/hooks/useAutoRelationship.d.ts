import React from "react";
import type { useFieldArray } from "../../useActionForm.js";
export interface RelationshipContextValue {
    /**
     * Path within the form state to the current relationship context.
     * Includes indexes for hasMany/hasManyThrough relationships
     */
    transformPath: (path: string) => string;
    /**
     * Path within the form metadata to the current relationship context.
     * Includes field names only and does not include indexes for hasMany/hasManyThrough relationships
     */
    transformMetadataPath: (path: string) => string;
    fieldArray?: ReturnType<typeof useFieldArray>;
}
export declare const RelationshipContext: React.Context<RelationshipContextValue | undefined>;
export declare const useRelationshipContext: () => RelationshipContextValue | undefined;
export declare const useAutoRelationship: (props: {
    field: string;
}) => {
    path: string;
    metadata: import("../../metadata.js").FieldMetadata;
};
