import { DatePicker, Icon, InlineStack, Popover, TextField } from "@shopify/polaris";
import { CalendarIcon } from "@shopify/polaris-icons";
import { format } from "date-fns";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";
import React, { useCallback, useState } from "react";
import { useController } from "react-hook-form";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import PolarisTimePicker from "./PolarisTimePicker.js";
export const copyTime = (to, input) => {
    to.setHours(input.getHours());
    to.setMinutes(input.getMinutes());
    to.setSeconds(input.getSeconds());
    to.setMilliseconds(input.getMilliseconds());
};
const today = new Date();
export const PolarisDateTimePicker = (props) => {
    const { path, metadata } = useFieldMetadata(props.field);
    const { field: fieldProps } = useController({
        name: path,
    });
    const { onChange, value } = props;
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTime = value ? utcToZonedTime(value, localTz) : fieldProps.value;
    const [dateTimeState, setDateTimeState] = useState({
        month: (localTime ?? today).getMonth(),
        year: (localTime ?? today).getFullYear(),
        day: (localTime ?? today).getDay(),
        hour: (localTime ?? today).getHours().toString(),
        minute: (localTime ?? today).getMinutes().toString().padStart(2, "0"),
        ampm: (localTime ?? today).getHours() >= 12 ? "PM" : "AM",
    });
    const [datePopoverActive, setDatePopoverActive] = useState(false);
    const config = metadata.configuration;
    const onDateChange = useCallback((range) => {
        const date = new Date(range.start);
        localTime && copyTime(date, localTime);
        onChange?.(zonedTimeToUtc(date, localTz));
        fieldProps.onChange(zonedTimeToUtc(date, localTz));
        setDatePopoverActive(false);
    }, [localTime, onChange, localTz, fieldProps]);
    const toggleDatePopoverActive = useCallback(() => setDatePopoverActive((active) => !active), []);
    const handleMonthChange = useCallback((month, year) => {
        setDateTimeState((prevState) => ({
            ...prevState,
            month,
            year,
        }));
    }, []);
    return (React.createElement(InlineStack, { gap: "400" },
        React.createElement(Popover, { preferredPosition: "above", active: datePopoverActive, activator: React.createElement(TextField, { id: props.id ? `${props.id}-date` : undefined, label: metadata.name ?? "Date", prefix: React.createElement(Icon, { source: CalendarIcon }), autoComplete: "off", value: localTime ? format(localTime, "yyyy-MM-dd") : "", onFocus: toggleDatePopoverActive, error: props.error }), onClose: toggleDatePopoverActive },
            React.createElement("div", { style: { padding: "16px" } },
                React.createElement(DatePicker, { month: dateTimeState.month, year: dateTimeState.year, allowRange: false, onChange: onDateChange, onMonthChange: handleMonthChange, selected: props.value, ...props.datePickerProps }))),
        (props.includeTime ?? config.includeTime) && (React.createElement(PolarisTimePicker, { field: props.field, dateTimeState: dateTimeState, setDateTimeState: setDateTimeState, id: props.id, localTime: localTime, onChange: onChange, hideTimePopover: props.hideTimePopover, localTz: localTz, timePickerProps: props.timePickerProps }))));
};
//# sourceMappingURL=PolarisDateTimePicker.js.map