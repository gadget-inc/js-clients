import type { AutocompleteProps } from "@shopify/polaris";
import React, { type ReactNode } from "react";
export interface EnumOption {
    label: string;
    value: string;
}
type BaseComboboxProps = Omit<AutocompleteProps, "selected" | "onSelect" | "textField"> & {
    label?: ReactNode;
    options: EnumOption[];
};
export type PolarisFixedOptionsSingleComboboxProps = BaseComboboxProps & {
    value?: string;
    onChange: (value: string) => void;
    allowMultiple?: false;
};
export type PolarisFixedOptionsMultiComboboxProps = BaseComboboxProps & {
    value?: string[];
    onChange: (value: string[]) => void;
    allowMultiple: true;
};
export type PolarisFixedOptionsComboboxProps = PolarisFixedOptionsSingleComboboxProps | PolarisFixedOptionsMultiComboboxProps;
export declare const PolarisFixedOptionsCombobox: (props: PolarisFixedOptionsComboboxProps) => React.JSX.Element;
export {};
