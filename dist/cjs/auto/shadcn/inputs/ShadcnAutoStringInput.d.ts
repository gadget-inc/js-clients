import React, { type InputHTMLAttributes } from "react";
import { type AutoTextInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
export type ShadcnAutoStringInputProps = {
    suffix?: React.ReactNode;
} & AutoTextInputProps & Partial<Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">>;
/**
 * Make the Shadcn components for the auto string input
 * @param elements - The Shadcn elements to use
 * @returns The Shadcn components for the auto string input
 */
export declare const makeShadcnAutoStringInput: ({ Input, Label, }: Pick<ShadcnElements, "Input" | "Label">) => React.ComponentType<ShadcnAutoStringInputProps>;
