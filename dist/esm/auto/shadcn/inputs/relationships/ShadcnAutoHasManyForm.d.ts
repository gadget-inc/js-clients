import React from "react";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
export declare const makeShadcnAutoHasManyForm: ({ Accordion, AccordionContent, AccordionItem, AccordionTrigger, Badge, Button, Label, }: Pick<ShadcnElements, "Accordion" | "AccordionContent" | "AccordionItem" | "AccordionTrigger" | "Badge" | "Button" | "Label">) => import("../../../AutoInput.js").AutoInputComponent<{
    field: string;
    label?: React.ReactNode;
    children: React.ReactNode;
    primaryLabel?: OptionLabel | undefined;
    secondaryLabel?: OptionLabel | undefined;
    tertiaryLabel?: OptionLabel | undefined;
} & {
    selectPaths?: string[] | undefined;
}>;
