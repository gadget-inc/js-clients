import type { AutocompleteProps } from "@shopify/polaris";
import React, { type ReactNode } from "react";
export interface EnumOption {
    /**
     * Label for the option.
     */
    label: string;
    /**
     * Value for the option.
     */
    value: string;
}
/** Base props for a combobox with fixed options. */
type BaseComboboxProps = Omit<AutocompleteProps, "selected" | "onSelect" | "textField"> & {
    /**
     * Label for the combobox.
     */
    label?: ReactNode;
    /**
     * Selectable options in the combobox.
     */
    options: EnumOption[];
};
/** Props for a single-selection combobox. */
export type PolarisFixedOptionsSingleComboboxProps = BaseComboboxProps & {
    /**
     * Selected value.
     */
    value?: string;
    /**
     * Called with the new selected value on value change.
     */
    onChange: (value: string) => void;
    /**
     * Disables mutiple selections.
     */
    allowMultiple?: false;
};
/** Props for a multi-selection combobox. */
export type PolarisFixedOptionsMultiComboboxProps = BaseComboboxProps & {
    /**
     * Selected value.
     */
    value?: string[];
    /**
     * Called with the new selected values on value change.
     */
    onChange: (value: string[]) => void;
    /**
     * Disables mutiple selections.
     */
    allowMultiple: true;
};
export type PolarisFixedOptionsComboboxProps = PolarisFixedOptionsSingleComboboxProps | PolarisFixedOptionsMultiComboboxProps;
export declare const PolarisFixedOptionsCombobox: (props: PolarisFixedOptionsComboboxProps) => React.JSX.Element;
export {};
