import type { AutocompleteProps } from "@mui/material";
import type { Control } from "../../../useActionForm.js";
export declare const MUIAutoRolesInput: import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
    label?: string | undefined;
} & Partial<AutocompleteProps<{
    id: string;
    label: string;
}, true, any, any, "div">>>;
