import type { Control } from "../../../useActionForm.js";
import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoEnumInput: ({ Badge, Button, Command, CommandItem, CommandLoading, CommandInput, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, ScrollArea, }: Pick<ShadcnElements, "Badge" | "Button" | "Command" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandLoading" | "CommandGroup" | "CommandInput" | "Label" | "Checkbox" | "ScrollArea" | "Input">) => import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    control?: Control<any> | undefined;
    label?: string | undefined;
}>;
