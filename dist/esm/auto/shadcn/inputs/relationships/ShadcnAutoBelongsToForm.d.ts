import React from "react";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
export declare const makeShadcnAutoBelongsToForm: ({ Badge, Button, Command, CommandItem, CommandInput, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, Dialog, DialogContent, DialogClose, DialogFooter, DialogHeader, DialogTitle, }: Pick<ShadcnElements, "Badge" | "Button" | "Command" | "CommandItem" | "CommandInput" | "Label" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox" | "DropdownMenu" | "DropdownMenuContent" | "DropdownMenuItem" | "DropdownMenuTrigger" | "Dialog" | "DialogContent" | "DialogHeader" | "DialogTitle" | "DialogFooter" | "DialogClose">) => import("../../../AutoInput.js").AutoInputComponent<{
    field: string;
    children: React.ReactNode;
    primaryLabel?: OptionLabel | undefined;
    secondaryLabel?: OptionLabel | undefined;
    tertiaryLabel?: OptionLabel | undefined;
} & {
    selectPaths?: string[] | undefined;
}>;
