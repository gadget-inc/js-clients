import { CalendarIcon } from "@radix-ui/react-icons";
import React, { useCallback, useMemo, useState } from "react";
import { copyTime, formatDate, getDateTimeObjectFromDate, getTimeString, isValidDate, timeFormatRegex, zonedTimeToUtc, } from "../../../dateTimeUtils.js";
import { autoInput } from "../../AutoInput.js";
import { useDateTimeField } from "../../hooks/useDateTimeField.js";
import { ShadcnRequired } from "../ShadcnRequired.js";
export const makeShadcnAutoDateTimePicker = ({ Button, Calendar, Label, Popover, PopoverTrigger, PopoverContent, }) => {
    function ShadcnAutoDateTimePicker(props) {
        const [timeParseError, setTimeParseError] = useState(false);
        const { localTz, localTime, onChange, value, fieldProps, metadata, fieldState } = useDateTimeField({
            field: props.field,
            value: props.value,
            onChange: props?.onChange,
        });
        const config = metadata.configuration;
        const onDateChange = useCallback((range) => {
            (fieldProps || value) && copyTime(range, zonedTimeToUtc(range, localTz));
            const dateOverride = value ?? new Date(fieldProps.value);
            if (isValidDate(dateOverride)) {
                range.setHours(dateOverride.getHours());
                range.setMinutes(dateOverride.getMinutes());
                range.setSeconds(dateOverride.getSeconds());
                range.setMilliseconds(dateOverride.getMilliseconds());
            }
            onChange?.(zonedTimeToUtc(range, localTz));
            fieldProps.onChange(zonedTimeToUtc(range, localTz));
        }, [fieldProps, value, localTz, onChange]);
        const [date, setDate] = useState();
        const [isOpen, setIsOpen] = useState(false);
        const initialTimeString = useMemo(() => (localTime ? getTimeString(getDateTimeObjectFromDate(localTime)) : ""), []);
        const [timeString, setTimeString] = useState(initialTimeString);
        const handleDateSelect = (selectedDate) => {
            if (selectedDate) {
                setDate(selectedDate);
                onDateChange?.(selectedDate);
            }
        };
        const handleTimeInput = (inputTimeString) => {
            setTimeString(inputTimeString.toUpperCase());
            if (!timeFormatRegex.test(inputTimeString)) {
                setTimeParseError(true);
                return;
            }
            setTimeParseError(false);
            if (date) {
                const [time, period] = inputTimeString.split(" ");
                const [hours, minutes] = time.split(":").map(Number);
                const newDate = new Date(date);
                let adjustedHours = hours;
                if (period.toUpperCase() === "PM" && hours !== 12) {
                    adjustedHours = hours + 12;
                }
                else if (period.toUpperCase() === "AM" && hours === 12) {
                    adjustedHours = 0;
                }
                newDate.setHours(adjustedHours);
                newDate.setMinutes(minutes);
                setDate(newDate);
                onChange?.(zonedTimeToUtc(newDate, localTz));
                fieldProps.onChange(zonedTimeToUtc(newDate, localTz));
            }
        };
        return (React.createElement(Popover, { open: isOpen, onOpenChange: setIsOpen },
            React.createElement(PopoverTrigger, { asChild: true },
                React.createElement("div", null,
                    React.createElement(Label, { htmlFor: props.id ? `${props.id}-date` : undefined },
                        props.label ?? metadata.name ?? "Date",
                        metadata.requiredArgumentForInput && React.createElement(ShadcnRequired, null, "*")),
                    React.createElement(Button, { id: props.id ? `${props.id}-date` : undefined, variant: "outline", type: "button", className: `w-full justify-start text-left font-normal ${!date ? "text-muted-foreground" : ""}` },
                        React.createElement(CalendarIcon, { className: "mr-2 h-4 w-4" }),
                        localTime ? (formatDate(localTime, props.includeTime ?? config.includeTime)) : (React.createElement("span", { className: "opacity-50" }, (props.includeTime ?? config.includeTime) ? "YYYY-MM-DD hh:mm aa" : "YYYY-MM-DD"))),
                    (props.error || fieldState.error?.message) && (React.createElement(Label, { className: "text-red-500" }, props.error || fieldState.error?.message)))),
            React.createElement(PopoverContent, { className: "w-auto p-0" },
                React.createElement("div", { className: "flex flex-row flex-nowrap" },
                    React.createElement(Calendar, { mode: "single", defaultMonth: localTime ?? date, selected: localTime ?? date, onSelect: handleDateSelect, initialFocus: true, classNames: {
                            root: "bg-white",
                        } }),
                    (props.includeTime ?? config.includeTime) && (React.createElement("div", { className: "flex flex-col p-4 bg-white border-l" },
                        React.createElement(Label, { htmlFor: props.id ? `${props.id}-time` : undefined, "data-testid": props.id ? `${props.id}-time` : undefined },
                            props.timePickerProps?.label ?? "Time",
                            " (HH:MM AM/PM)"),
                        React.createElement("input", { type: "text", id: props.id ? `${props.id}-time` : undefined, "data-testid": props.id ? `${props.id}-time` : undefined, className: "w-32 px-3 py-2 border rounded-md mt-2", placeholder: props.timePickerProps?.placeholder ?? "12:00 AM", value: timeString, onChange: (e) => handleTimeInput(e.target.value) }),
                        timeParseError && React.createElement("span", { className: "text-xs text-red-500 mt-1" }, "Please use format: 12:00 PM")))))));
    }
    ShadcnAutoDateTimePicker.displayName = "ShadcnAutoDateTimePicker";
    return autoInput(ShadcnAutoDateTimePicker);
};
//# sourceMappingURL=ShadcnAutoDateTimePicker.js.map