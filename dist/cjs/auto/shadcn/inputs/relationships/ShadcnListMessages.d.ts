import React from "react";
import type { ShadcnElements } from "../../elements.js";
export interface SelectableOptionProps {
    id: string;
    label: React.ReactNode;
    selected?: boolean;
    onSelect?: (id: string) => void;
    allowMultiple?: boolean;
    formatOptionText?: (option: string) => React.ReactNode;
}
export declare const makeShadcnListMessages: ({ CommandEmpty, CommandItem, Checkbox, Label, }: Pick<ShadcnElements, "CommandEmpty" | "CommandItem" | "Checkbox" | "Label">) => {
    NoRecordsMessage: (props: {
        message?: string;
    }) => React.JSX.Element;
    ShadcnSelectableOption: (props: SelectableOptionProps) => React.JSX.Element | null;
    getErrorMessage: (errorString: string) => "Missing permissions. Cannot read related model" | "Invalid records found in related model" | "Cannot retrieve records from related model";
    AddExtraOption: (props: {
        message?: string;
        onSelect?: () => void;
    }) => React.JSX.Element;
};
