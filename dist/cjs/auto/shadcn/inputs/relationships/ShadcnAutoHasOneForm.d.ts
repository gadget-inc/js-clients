import type { AutoRelationshipFormProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
export declare const makeShadcnAutoHasOneForm: ({ Badge, Button, Command, CommandItem, CommandInput, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, }: Pick<ShadcnElements, "Badge" | "Button" | "Command" | "CommandItem" | "CommandInput" | "Label" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox">) => import("../../../AutoInput.js").AutoInputComponent<Omit<AutoRelationshipFormProps, "recordFilter">>;
