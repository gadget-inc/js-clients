import type { TextFieldProps } from "@mui/material";
import type { Control } from "../../../useActionForm.js";
export declare const MUIAutoJSONInput: import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
} & Partial<Omit<TextFieldProps, "onChange">> & {
    selectPaths?: string[] | undefined;
}>;
