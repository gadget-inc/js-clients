import React from "react";
import type { Control } from "react-hook-form";
import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoJSONInput: ({ Label, Textarea }: Pick<ShadcnElements, "Input" | "Label" | "Textarea">) => import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
    label?: string | undefined;
} & Partial<React.HTMLAttributes<HTMLTextAreaElement>> & {
    selectPaths?: string[] | undefined;
}>;
