import type { CheckboxProps } from "@mui/material";
import { type Control } from "../../../useActionForm.js";
export declare const MUIAutoBooleanInput: import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
    label?: string | undefined;
} & Partial<CheckboxProps>>;
