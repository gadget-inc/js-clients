import type { Control } from "../../../useActionForm.js";
import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoNumberInput: ({ Input, Label }: Pick<ShadcnElements, "Input" | "Label">) => import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
    className?: string | undefined;
} & {
    selectPaths?: string[] | undefined;
}>;
