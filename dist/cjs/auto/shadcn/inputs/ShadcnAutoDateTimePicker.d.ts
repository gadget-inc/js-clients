import { type ReactNode } from "react";
import { type AutoDateTimeInputProps } from "src/auto/shared/AutoInputTypes.js";
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
    id?: string | undefined;
    datePickerProps?: Partial<DatePickerProps> | undefined;
    timePickerProps?: {
        label?: ReactNode;
        placeholder?: string | undefined;
    } | undefined;
} & AutoDateTimeInputProps>;
