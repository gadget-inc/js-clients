import type { Control } from "../../../useActionForm.js";
import type { ShadcnElements } from "../elements.js";
export interface EnumOption {
    label: string;
    value: string;
}
export type AutoRolesInputProps = {
    field: string;
    control?: Control<any>;
    label?: string;
    options?: EnumOption[];
};
export declare const makeShadcnAutoRolesInput: ({ Badge, Button, Command, CommandItem, CommandInput, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, ScrollArea, CommandLoading, }: Pick<ShadcnElements, "Badge" | "Button" | "Command" | "CommandLoading" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "CommandInput" | "Label" | "Checkbox" | "ScrollArea">) => import("../../AutoInput.js").AutoInputComponent<AutoRolesInputProps>;
