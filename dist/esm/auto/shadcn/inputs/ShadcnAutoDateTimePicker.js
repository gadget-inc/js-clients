import { CalendarIcon, X } from "lucide-react";
import React, { Suspense, useCallback, useState } from "react";
import { copyTime, formatDate, getDateTimeObjectFromDate, getTimeString, isValidDate, zonedTimeToUtc } from "../../../dateTimeUtils.js";
import { autoInput } from "../../AutoInput.js";
import { useDateTimeField } from "../../hooks/useDateTimeField.js";
import { ShadcnRequired } from "../ShadcnRequired.js";
const ShadcnAutoTimeInput = React.lazy(() => import("./ShadcnAutoTimeInput.js"));
export const makeShadcnAutoDateTimePicker = ({ Button, Calendar, Label, Popover, PopoverTrigger, PopoverContent, }) => {
    const ClearButton = (props) => {
        return (React.createElement("div", { className: "ml-auto h-4 w-4 bg-transparent hover:opacity-30", onClick: (e) => {
                e.stopPropagation();
                props.onClear();
            } },
            React.createElement(X, null)));
    };
    function ShadcnAutoDateTimePicker(props) {
        const { localTz, localTime, onChange, fieldProps, metadata, fieldState } = useDateTimeField({
            field: props.field,
            value: props.value,
            onChange: props?.onChange,
        });
        const value = props.value ?? fieldProps.value;
        const timeString = localTime ? getTimeString(getDateTimeObjectFromDate(localTime, true), true) : undefined;
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
        const [isOpen, setIsOpen] = useState(false);
        const handleDateSelect = (selectedDate) => {
            if (selectedDate) {
                onDateChange?.(selectedDate);
            }
        };
        const handleTimeInput = (inputTimeString) => {
            const [hours, minutes] = inputTimeString.split(":").map(Number);
            const newDate = localTime ? new Date(localTime) : new Date();
            newDate.setHours(hours);
            newDate.setMinutes(minutes);
            onChange?.(zonedTimeToUtc(newDate, localTz));
            fieldProps.onChange(zonedTimeToUtc(newDate, localTz));
        };
        const handleClear = () => {
            onChange?.(undefined);
            fieldProps.onChange(undefined);
        };
        return (React.createElement(Popover, { open: isOpen, onOpenChange: setIsOpen },
            React.createElement(PopoverTrigger, { asChild: true, onClick: (e) => e.stopPropagation() },
                React.createElement("div", null,
                    React.createElement(Label, { htmlFor: props.id ? `${props.id}-date` : undefined },
                        props.label ?? metadata.name ?? "Date",
                        metadata.requiredArgumentForInput && React.createElement(ShadcnRequired, null, "*")),
                    React.createElement(Button, { id: props.id ? `${props.id}-date` : undefined, variant: "outline", type: "button", className: `w-full justify-start text-left font-normal ${!localTime ? "text-muted-foreground" : ""}` },
                        React.createElement(CalendarIcon, { className: "mr-2 h-4 w-4" }),
                        localTime ? (formatDate(localTime, props.includeTime ?? config.includeTime, true)) : (React.createElement("span", { className: "opacity-50" }, (props.includeTime ?? config.includeTime) ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD")),
                        localTime && !metadata.requiredArgumentForInput && React.createElement(ClearButton, { onClear: handleClear })),
                    (props.error || fieldState.error?.message) && (React.createElement(Label, { className: "text-red-500" }, props.error || fieldState.error?.message)))),
            React.createElement(PopoverContent, { className: "w-auto p-0" },
                React.createElement("div", { className: "flex flex-row flex-nowrap" },
                    React.createElement("div", { className: "relative bg-background" },
                        React.createElement(Calendar, { mode: "single", defaultMonth: localTime, selected: localTime, onSelect: handleDateSelect, initialFocus: true })),
                    (props.includeTime ?? config.includeTime) && (React.createElement("div", { className: "flex flex-col p-4 bg-white border-l" },
                        React.createElement(Label, { htmlFor: props.id ? `${props.id}-time` : undefined, "data-testid": props.id ? `${props.id}-time` : undefined },
                            props.timePickerProps?.label ?? "Time",
                            " (HH:MM)"),
                        React.createElement(Suspense, { fallback: null },
                            React.createElement(ShadcnAutoTimeInput, { id: props.id, timeString: timeString, handleTimeInput: handleTimeInput }))))))));
    }
    ShadcnAutoDateTimePicker.displayName = "ShadcnAutoDateTimePicker";
    return autoInput(ShadcnAutoDateTimePicker);
};
//# sourceMappingURL=ShadcnAutoDateTimePicker.js.map