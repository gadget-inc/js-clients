import React from "react";
import { type AutoTextInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements, TextareaProps } from "../elements.js";
export declare const makeShadcnAutoTextAreaInput: ({ Textarea, Label }: Pick<ShadcnElements, "Textarea" | "Label">) => import("../../AutoInput.js").AutoInputComponent<{
    suffix?: React.ReactNode;
} & AutoTextInputProps & Omit<TextareaProps, "value" | "onChange">>;
