import { type AutoNumberInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoNumberInput: ({ Input, Label }: Pick<ShadcnElements, "Input" | "Label">) => import("../../AutoInput.js").AutoInputComponent<AutoNumberInputProps & {
    className?: string | undefined;
}>;
