import React, { type ReactNode } from "react";
import type { Control } from "react-hook-form";
import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoJSONInput: ({ Label, Textarea }: Pick<ShadcnElements, "Input" | "Label" | "Textarea">) => import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
    label?: ReactNode;
} & Partial<React.HTMLAttributes<HTMLTextAreaElement>>>;
