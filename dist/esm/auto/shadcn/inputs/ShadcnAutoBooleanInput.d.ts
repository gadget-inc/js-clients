import { type AutoBooleanInputProps } from "../../shared/AutoInputTypes.js";
import type { CheckboxProps, ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoBooleanInput: ({ Checkbox, Label }: Pick<ShadcnElements, "Checkbox" | "Label">) => import("../../AutoInput.js").AutoInputComponent<{
    className?: string | undefined;
} & AutoBooleanInputProps & Partial<Omit<CheckboxProps, "value" | "onChange" | "checked" | "defaultChecked" | "onCheckedChange">>>;
