import React, { type ReactNode } from "react";
import { type AutoEncryptedStringInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoEncryptedStringInput: ({ Input, Label, Button }: Pick<ShadcnElements, "Input" | "Label" | "Button">) => import("../../AutoInput.js").AutoInputComponent<AutoEncryptedStringInputProps & {
    suffix?: ReactNode;
} & Omit<{
    suffix?: React.ReactNode;
} & import("../../shared/AutoInputTypes.js").AutoTextInputProps & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>, "type">>;
