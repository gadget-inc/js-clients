import { type AutoPasswordInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
export declare function makeShadcnAutoPasswordInput({ Input, Label, Button }: Pick<ShadcnElements, "Input" | "Label" | "Button">): import("../../AutoInput.js").AutoInputComponent<AutoPasswordInputProps>;
