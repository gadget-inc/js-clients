import type { ReactNode } from "react";
import type { Control } from "react-hook-form";
export interface AutoRelationshipInputProps {
    field: string;
    control?: Control<any>;
    optionLabel?: OptionLabel;
}
/**
 * Type for the option label when displaying a list of records from a related model
 */
export type OptionLabel = string | ((record: Record<string, any>) => ReactNode);
