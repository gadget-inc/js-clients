import { type ReactNode } from "react";
import type { ShadcnElements } from "../elements.js";
import "./auto-date-time-input.css";
interface DateTimeInputProps {
    field: string;
    id?: string;
    value?: Date;
    onChange?: (value?: Date) => void;
    error?: string;
    includeTime?: boolean;
    hideTimePopover?: boolean;
    label?: ReactNode;
    datePickerProps?: Partial<DatePickerProps>;
    timePickerProps?: {
        label?: ReactNode;
        placeholder?: string;
    };
}
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
type DateTimeShadcnElements = {
    shadcnElements: Pick<ShadcnElements, "Button" | "Calendar" | "Label" | "Popover" | "PopoverTrigger" | "PopoverContent">;
};
declare const ShadcnAutoDateTimeInputComponent: import("../../AutoInput.js").AutoInputComponent<DateTimeInputProps & DateTimeShadcnElements>;
export default ShadcnAutoDateTimeInputComponent;
