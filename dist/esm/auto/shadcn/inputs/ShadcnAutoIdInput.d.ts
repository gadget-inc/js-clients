import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoIdInput: (elements: Pick<ShadcnElements, "Input" | "Label">) => import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    label?: string | undefined;
} & {
    selectPaths?: string[] | undefined;
}>;
