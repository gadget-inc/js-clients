import type { CheckboxProps } from "@shopify/polaris";
import type { Control } from "../../../useActionForm.js";
export declare const PolarisAutoBooleanInput: import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
} & Partial<CheckboxProps> & {
    selectPaths?: string[] | undefined;
}>;
