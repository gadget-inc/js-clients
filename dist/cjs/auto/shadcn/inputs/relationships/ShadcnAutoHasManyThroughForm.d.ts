import React from "react";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
export declare const makeShadcnAutoHasManyThroughForm: ({ Badge, Button, Label, Command, CommandInput, CommandItem, CommandList, CommandEmpty, CommandGroup, Checkbox, Popover, PopoverContent, PopoverTrigger, }: Pick<ShadcnElements, "Badge" | "Button" | "Label" | "Command" | "CommandInput" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox" | "Popover" | "PopoverContent" | "PopoverTrigger">) => import("../../../AutoInput.js").AutoInputComponent<{
    field: string;
    label?: React.ReactNode;
    children: React.ReactNode;
    primaryLabel?: OptionLabel | undefined;
    secondaryLabel?: OptionLabel | undefined;
    tertiaryLabel?: OptionLabel | undefined;
} & {
    selectPaths?: string[] | undefined;
}>;
