import type { ComboboxProps } from "@shopify/polaris";
import type { Control } from "../../../useActionForm.js";
export declare const PolarisAutoEnumInput: import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
    label?: string | undefined;
} & Partial<Omit<ComboboxProps, "allowMultiple">>>;
