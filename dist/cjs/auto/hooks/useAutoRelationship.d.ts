import React from "react";
import type { useFieldArray } from "../../useActionForm.js";
export interface RelationshipContextValue {
    transformPath: (path: string) => string;
    transformMetadataPath?: (path: string) => string;
    fieldArray?: ReturnType<typeof useFieldArray>;
}
export declare const RelationshipContext: React.Context<RelationshipContextValue | undefined>;
export declare const useRelationshipContext: () => RelationshipContextValue | undefined;
export declare const useAutoRelationship: (props: {
    field: string;
}) => {
    path: string;
    metadata: import("../../metadata.js").FieldMetadata;
    pathPrefix: string;
};
