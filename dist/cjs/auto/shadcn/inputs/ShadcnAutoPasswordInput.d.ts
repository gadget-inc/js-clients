import React from "react";
import { type AutoPasswordInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
export declare function makeShadcnAutoPasswordInput({ Input, Label, Button }: Pick<ShadcnElements, "Input" | "Label" | "Button">): import("../../AutoInput.js").AutoInputComponent<AutoPasswordInputProps & Omit<import("../../shared/AutoInputTypes.js").AutoEncryptedStringInputProps & {
    suffix?: React.ReactNode;
} & Omit<{
    suffix?: React.ReactNode;
} & import("../../shared/AutoInputTypes.js").AutoTextInputProps & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>, "type">, "type" | "disabled" | "suffix" | "placeholder">>;
