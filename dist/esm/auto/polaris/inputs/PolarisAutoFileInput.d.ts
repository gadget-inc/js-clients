import type { DropZoneProps } from "@shopify/polaris";
import type { Control } from "../../../useActionForm.js";
export declare const PolarisAutoFileInput: import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
} & Omit<DropZoneProps, "allowMultiple">>;
