import React from "react";
import type { Control } from "../../../useActionForm.js";
import type { ShadcnElements } from "../elements.js";
/**
 * Make the Shadcn components for the auto string input
 * @param elements - The Shadcn elements to use
 * @returns The Shadcn components for the auto string input
 */
export declare const makeShadcnAutoStringInput: ({ Input, Label }: Pick<ShadcnElements, "Input" | "Label">) => import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
    label?: string | undefined;
    suffix?: React.ReactNode;
} & Partial<React.InputHTMLAttributes<HTMLInputElement>>>;
