import { Control } from "react-hook-form";
export interface AutoRelationshipInputProps {
    field: string;
    control?: Control<any>;
    optionLabel?: string | ((record: Record<string, any>) => string);
}
