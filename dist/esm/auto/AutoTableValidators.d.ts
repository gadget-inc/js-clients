import { type ModelMetadata } from "src/metadata.js";
import type { useTable } from "../useTable.js";
export declare const InvalidModelErrorMessage = "\"model\" is not a valid Gadget model";
export declare const validateAutoTableProps: (manager: Parameters<typeof useTable>[0]) => void;
export declare const validateAutoTableOptions: (props: {
    options: Parameters<typeof useTable>[1];
    metadata?: ModelMetadata;
}) => void;
