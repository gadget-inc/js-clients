import { type ReactNode } from "react";
import { type AutoDateTimeInputProps } from "src/auto/shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
export interface DatePickerProps {
    onChange: (date: Date) => void;
    selected: Date;
    onSelect: (date: Date) => void;
    initialFocus: boolean;
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
    datePickerProps?: Partial<Omit<DatePickerProps, "mode" | "selected" | "onSelect">> | undefined;
    timePickerProps?: {
        label?: ReactNode;
    } | undefined;
} & AutoDateTimeInputProps>;
