import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoInput: (elements: Pick<ShadcnElements, "Input" | "Label" | "Checkbox" | "Button" | "Badge" | "Command" | "CommandInput" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Calendar" | "Popover" | "PopoverTrigger" | "PopoverContent" | "ScrollArea" | "ScrollBar" | "Textarea">) => import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    label?: string | undefined;
}>;
