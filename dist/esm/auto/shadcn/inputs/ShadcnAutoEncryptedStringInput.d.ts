import { type ReactNode } from "react";
import { type AutoEncryptedStringInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoEncryptedStringInput: ({ Input, Label, Button }: Pick<ShadcnElements, "Input" | "Label" | "Button">) => import("../../AutoInput.js").AutoInputComponent<AutoEncryptedStringInputProps & {
    className?: string | undefined;
    suffix?: ReactNode;
}>;
