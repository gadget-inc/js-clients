import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoInput: ({ Input, Label, Checkbox, Button, }: Pick<ShadcnElements, "Input" | "Label" | "Checkbox" | "Button">) => import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    label?: string | undefined;
} & {
    selectPaths?: string[] | undefined;
}>;
