import React, { type ReactNode } from "react";
import type { Control } from "../../../useActionForm.js";
import type { ShadcnElements, TextareaProps } from "../elements.js";
export declare const makeShadcnAutoTextAreaInput: ({ Textarea, Label }: Pick<ShadcnElements, "Textarea" | "Label">) => import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
    label?: ReactNode;
    suffix?: React.ReactNode;
} & TextareaProps>;
