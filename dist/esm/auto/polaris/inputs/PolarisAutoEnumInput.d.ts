import type { ComboboxProps } from "@shopify/polaris";
import { type ReactNode } from "react";
import type { Control } from "../../../useActionForm.js";
export declare const PolarisAutoEnumInput: import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
    label?: ReactNode;
} & Partial<Omit<ComboboxProps, "allowMultiple">>>;
