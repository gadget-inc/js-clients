import React, { type ReactElement, type ReactNode } from "react";
export interface PolarisWCComboboxProps {
    /**
     * Callback fired when the bottom of the listbox is reached. Use to lazy load when listbox option data is paginated.
     */
    onScrolledToBottom?: () => void;
    /**
     * Allows more than one option to be selected
     */
    allowMultiple?: boolean;
    /**
     * Whether or not more options are available to lazy load when the bottom of the listbox is reached.
     */
    willLoadMoreOptions?: boolean;
    /**
     * Whether the field is required
     */
    required?: boolean;
    /**s
     * Label for the combobox
     */
    label?: ReactNode;
    /**
     * Placeholder text for the search input
     */
    placeholder?: string;
    /**
     * Whether the combobox is disabled
     */
    disabled?: boolean;
    /**
     * Error message to display
     */
    error?: string;
    /**
     * Vertical content to display above the text input (e.g., selected tags)
     */
    verticalContent?: ReactElement;
    /**
     * The options content to display inside the popover
     */
    children?: ReactNode;
    /**
     * Controlled input value
     */
    value?: string;
    /**
     * Callback when input value changes
     */
    onChange?: (value: string) => void;
    /**
     * Callback when the popover opens
     */
    onOpen?: () => void;
    /**
     * Callback when the popover closes
     */
    onClose?: () => void;
    /**
     * The HTML ID of the combobox
     */
    id?: string;
}
/**
 * A combobox component using Polaris Web Components.
 * Combines a text input with a popover dropdown for searchable option selection.
 *
 * @example
 * ```tsx
 * <PolarisWCCombobox
 *   label="Select an option"
 *   placeholder="Search..."
 *   onScrolledToBottom={() => loadMore()}
 * >
 *   <s-option value="1">Option 1</s-option>
 *   <s-option value="2">Option 2</s-option>
 * </PolarisWCCombobox>
 * ```
 */
export declare const PolarisWCCombobox: (props: PolarisWCComboboxProps) => React.JSX.Element;
export interface PolarisWCComboboxOptionProps {
    /** Display text for the option (must be a string). */
    text: string;
    /** Whether this option is selected. */
    selected?: boolean;
    /** Callback when the option is clicked. */
    onClick?: () => void;
    /** When true, shows a checkbox to indicate selected state instead of only background color. */
    multiselect?: boolean;
}
/**
 * A clickable option row for use inside PolarisWCCombobox listbox.
 * Use `text` for the label and set `multiselect` when the combobox allows multiple selection.
 */
export declare const PolarisWCComboboxOption: ({ text, selected, onClick, multiselect }: PolarisWCComboboxOptionProps) => React.JSX.Element;
