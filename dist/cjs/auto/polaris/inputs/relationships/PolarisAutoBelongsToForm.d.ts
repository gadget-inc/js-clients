import React from "react";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
export declare const PolarisAutoBelongsToForm: import("../../../AutoInput.js").AutoInputComponent<{
    field: string;
    children: React.ReactNode;
    label?: React.ReactNode;
    renderSelectedRecord?: ((record: Record<string, any>) => React.ReactNode) | undefined;
    primaryLabel?: OptionLabel | undefined;
    secondaryLabel?: OptionLabel | undefined;
    tertiaryLabel?: OptionLabel | undefined;
} & {
    selectPaths?: string[] | undefined;
}>;
