import type { Control } from "../../../useActionForm.js";
import type { ShadcnElements } from "../elements.js";
export declare function makeShadcnAutoPasswordInput({ Input, Label, Button }: Pick<ShadcnElements, "Input" | "Label" | "Button">): import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
    className?: string | undefined;
} & {
    selectPaths?: string[] | undefined;
}>;
