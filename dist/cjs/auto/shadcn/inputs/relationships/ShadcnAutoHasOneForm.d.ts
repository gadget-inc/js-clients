import React from "react";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
export declare const makeShadcnAutoHasOneForm: ({ Badge, Button, Command, CommandItem, CommandInput, CommandLoading, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, ScrollArea, Accordion, AccordionItem, AccordionTrigger, }: Pick<ShadcnElements, "Badge" | "Button" | "Command" | "CommandItem" | "CommandInput" | "CommandLoading" | "Label" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox" | "ScrollArea" | "Accordion" | "AccordionItem" | "AccordionTrigger">) => import("../../../AutoInput.js").AutoInputComponent<{
    field: string;
    children: React.ReactNode;
    primaryLabel?: OptionLabel | undefined;
    secondaryLabel?: OptionLabel | undefined;
    tertiaryLabel?: OptionLabel | undefined;
} & {
    selectPaths?: string[] | undefined;
}>;
