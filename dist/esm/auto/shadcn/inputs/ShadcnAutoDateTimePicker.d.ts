import { type ReactNode } from "react";
import type { ShadcnElements } from "../elements.js";
export interface DatePickerProps {
    onChange: (date: Date) => void;
    selected: Date;
    onSelect: (date: Date) => void;
    initialFocus: boolean;
    mode: "single" | "range";
    weekStartsOn: number;
    dayAccessibilityLabelPrefix: string;
    onMonthChange: (month: number, year: number) => void;
    allowRange: boolean;
    multiMonth: boolean;
    disableDatesBefore: Date;
    disableDatesAfter: Date;
    disableSpecificDates: Date[];
}
export declare const makeShadcnAutoDateTimePicker: ({ Button, Calendar, Label, Popover, PopoverTrigger, PopoverContent, }: Pick<ShadcnElements, "Button" | "Calendar" | "Label" | "Popover" | "PopoverTrigger" | "PopoverContent">) => import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    id?: string | undefined;
    value?: Date | undefined;
    onChange?: ((value?: Date) => void) | undefined;
    error?: string | undefined;
    includeTime?: boolean | undefined;
    hideTimePopover?: boolean | undefined;
    label?: ReactNode;
    datePickerProps?: Partial<DatePickerProps> | undefined;
    timePickerProps?: {
        label?: ReactNode;
        placeholder?: string | undefined;
    } | undefined;
}>;
