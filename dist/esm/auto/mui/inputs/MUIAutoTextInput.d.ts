import type { TextFieldProps } from "@mui/material";
import type { Control } from "../../../useActionForm.js";
export declare const MUIAutoTextInput: import("../../AutoInput.js").AutoInputComponent<({
    field: string;
    control?: Control<any> | undefined;
} & Partial<TextFieldProps>) & {
    selectPaths?: string[] | undefined;
}>;
