import { type ReactNode } from "react";
import type { Control } from "../../../useActionForm.js";
import type { ShadcnElements } from "../elements.js";
export interface EnumOption {
    label: string;
    value: string;
}
export type AutoRolesInputProps = {
    field: string;
    control?: Control<any>;
    label?: ReactNode;
    options?: EnumOption[];
};
export declare const makeShadcnAutoRolesInput: ({ Badge, Button, Command, CommandItem, CommandInput, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, }: Pick<ShadcnElements, "Badge" | "Button" | "Command" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "CommandInput" | "Label" | "Checkbox">) => import("../../AutoInput.js").AutoInputComponent<AutoRolesInputProps>;
