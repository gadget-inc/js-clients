import React from "react";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
export declare const PolarisAutoHasManyThroughForm: import("../../../AutoInput.js").AutoInputComponent<{
    field: string;
    label?: React.ReactNode;
    children: React.ReactNode;
    primaryLabel?: OptionLabel | undefined;
    secondaryLabel?: OptionLabel | undefined;
    tertiaryLabel?: OptionLabel | undefined;
} & {
    selectPaths?: string[] | undefined;
}>;
