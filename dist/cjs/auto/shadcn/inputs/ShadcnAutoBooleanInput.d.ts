import { type ReactNode } from "react";
import type { Control } from "../../../useActionForm.js";
import type { CheckboxProps, ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoBooleanInput: ({ Checkbox, Label }: Pick<ShadcnElements, "Checkbox" | "Label">) => import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
    className?: string | undefined;
    label?: ReactNode;
} & Partial<CheckboxProps>>;
