import React from "react";
import type { useFieldArray } from "../../../../useActionForm.js";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
export interface RelationshipContextValue {
    pathPrefix: string;
    fieldArray?: ReturnType<typeof useFieldArray>;
}
export declare const RelationshipContext: React.Context<RelationshipContextValue | undefined>;
export declare const useRelationshipContext: () => RelationshipContextValue | undefined;
export declare const PolarisAutoRelationshipForm: import("../../../AutoInput.js").AutoInputComponent<{
    field: string;
    children: React.ReactNode;
    primaryLabel?: OptionLabel | undefined;
    secondaryLabel?: OptionLabel | undefined;
} & {
    selectPaths?: string[] | undefined;
}>;
