import React from "react";
import type { Control } from "../../../useActionForm.js";
import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoStringInput: ({ Input, Label }: Pick<ShadcnElements, "Input" | "Label">) => import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
    label?: string | undefined;
    suffix?: React.ReactNode;
} & Partial<React.InputHTMLAttributes<HTMLInputElement>> & {
    selectPaths?: string[] | undefined;
}>;
