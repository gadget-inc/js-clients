import type { Control } from "../../../useActionForm.js";
import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoEnumInput: ({ Badge, Button, Command, CommandItem, CommandInput, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, }: Pick<ShadcnElements, "Badge" | "Button" | "Command" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "CommandInput" | "Label" | "Checkbox" | "Input">) => import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
    label?: string | undefined;
}>;
