import type { TextFieldProps } from "@shopify/polaris";
import type { Control } from "../../../useActionForm.js";
export declare const PolarisAutoJSONInput: import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
} & Partial<Omit<TextFieldProps, "onChange">> & {
    selectPaths?: string[] | undefined;
}>;
