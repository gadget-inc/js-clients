import React from "react";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
export declare const PolarisAutoHasOneForm: import("../../../AutoInput.js").AutoInputComponent<{
    field: string;
    children: React.ReactNode;
    label?: React.ReactNode;
    primaryLabel?: OptionLabel | undefined;
    secondaryLabel?: OptionLabel | undefined;
    tertiaryLabel?: OptionLabel | undefined;
} & {
    selectPaths?: string[] | undefined;
}>;
