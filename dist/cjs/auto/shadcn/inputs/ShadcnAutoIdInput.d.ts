import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoIdInput: ({ Input, Label }: Pick<ShadcnElements, "Input" | "Label">) => import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    label?: string | undefined;
} & {
    selectPaths?: string[] | undefined;
}>;
