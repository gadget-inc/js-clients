import React from "react";
import { type AutoEnumInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnSelectedItemBadgeComponent: ({ Badge, Button }: Pick<ShadcnElements, "Badge" | "Button">) => ({ content, onRemoveRecord, id, ariaLabel, }: {
    content: React.ReactNode;
    onRemoveRecord: () => void;
    id?: string;
    ariaLabel?: string;
}) => React.JSX.Element;
export declare const makeShadcnAutoEnumInput: ({ Badge, Button, Checkbox, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Label, }: Pick<ShadcnElements, "Badge" | "Button" | "Checkbox" | "Command" | "CommandEmpty" | "CommandGroup" | "CommandInput" | "CommandItem" | "CommandList" | "Label">) => import("../../AutoInput.js").AutoInputComponent<AutoEnumInputProps>;
