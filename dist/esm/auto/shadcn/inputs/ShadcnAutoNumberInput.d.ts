import React from "react";
import { type AutoNumberInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoNumberInput: ({ Input, Label }: Pick<ShadcnElements, "Input" | "Label">) => import("../../AutoInput.js").AutoInputComponent<AutoNumberInputProps & Omit<{
    suffix?: React.ReactNode;
} & import("../../shared/AutoInputTypes.js").AutoTextInputProps & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>, "type" | "step">>;
