import type { Control } from "../../../useActionForm.js";
export interface MUIFileInputProps {
    label?: string;
    value?: File;
    onChange: (value: File) => void;
}
export declare const MUIAutoFileInput: import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
    label?: string | undefined;
}>;
