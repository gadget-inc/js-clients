import type { TextFieldProps } from "@shopify/polaris";
import type { Control } from "../../../useActionForm.js";
export declare const PolarisAutoNumberInput: import("../../AutoInput.js").AutoInputComponent<({
    field: string;
    control?: Control<any> | undefined;
} & Partial<TextFieldProps>) & {
    selectPaths?: string[] | undefined;
}>;
