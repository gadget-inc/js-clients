import React from "react";
import { type AutoTextInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
/**
 * Make the Shadcn components for the auto string input
 * @param elements - The Shadcn elements to use
 * @returns The Shadcn components for the auto string input
 */
export declare const makeShadcnAutoStringInput: ({ Input, Label }: Pick<ShadcnElements, "Input" | "Label">) => import("../../AutoInput.js").AutoInputComponent<{
    suffix?: React.ReactNode;
} & AutoTextInputProps & Partial<React.InputHTMLAttributes<HTMLInputElement>>>;
