import { DatePicker, Icon, InlineStack, Popover, TextField } from "@shopify/polaris";
import { CalendarIcon } from "@shopify/polaris-icons";
import { format } from "date-fns";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";
import React, { useCallback, useMemo, useState } from "react";
import { useController } from "react-hook-form";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import PolarisTimePicker from "./PolarisTimePicker.js";
export const copyTime = (to, input) => {
    to.setHours(input.getHours());
    to.setMinutes(input.getMinutes());
    to.setSeconds(input.getSeconds());
    to.setMilliseconds(input.getMilliseconds());
};
export const getDateTimeObjectFromDate = (dateTime) => {
    return {
        month: dateTime.getMonth(),
        year: dateTime.getFullYear(),
        day: dateTime.getDay(),
        hour: dateTime.getHours() > 12 ? (dateTime.getHours() - 12).toString() : dateTime.getHours().toString(),
        minute: dateTime.getMinutes().toString().padStart(2, "0"),
        ampm: dateTime.getHours() >= 12 ? "PM" : "AM",
    };
};
export const getDateFromDateTimeObject = (dateTime) => {
    const date = new Date();
    date.setMonth(dateTime.month);
    date.setFullYear(dateTime.year);
    date.setDate(dateTime.day);
    date.setHours(dateTime.ampm === "PM" ? parseInt(dateTime.hour) + 12 : parseInt(dateTime.hour));
    date.setMinutes(parseInt(dateTime.minute));
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
};
export const PolarisDateTimePicker = (props) => {
    const { path, metadata } = useFieldMetadata(props.field);
    const { field: fieldProps } = useController({
        name: path,
    });
    const { onChange, value } = props;
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTime = useMemo(() => {
        return value ? utcToZonedTime(value, localTz) : fieldProps.value ? new Date(fieldProps.value) : undefined;
    }, [value, fieldProps.value, localTz]);
    const [datePopoverActive, setDatePopoverActive] = useState(false);
    const config = metadata.configuration;
    const onDateChange = useCallback((range) => {
        const date = new Date(range.start);
        fieldProps && copyTime(date, zonedTimeToUtc(new Date(fieldProps.value), localTz));
        onChange?.(zonedTimeToUtc(date, localTz));
        fieldProps.onChange(zonedTimeToUtc(date, localTz));
        setDatePopoverActive(false);
    }, [onChange, localTz, fieldProps]);
    const toggleDatePopoverActive = useCallback(() => setDatePopoverActive((active) => !active), []);
    const handleMonthChange = useCallback((month, year) => {
        fieldProps.onChange(getDateFromDateTimeObject({ ...getDateTimeObjectFromDate(fieldProps.value), month, year }));
    }, [fieldProps]);
    return (React.createElement(InlineStack, { gap: "400" },
        React.createElement(Popover, { preferredPosition: "above", active: datePopoverActive, activator: React.createElement(TextField, { id: props.id ? `${props.id}-date` : undefined, label: metadata.name ?? "Date", prefix: React.createElement(Icon, { source: CalendarIcon }), autoComplete: "off", value: localTime ? format(localTime, "yyyy-MM-dd") : "", onFocus: toggleDatePopoverActive, error: props.error }), onClose: toggleDatePopoverActive },
            React.createElement("div", { style: { padding: "16px" } },
                React.createElement(DatePicker, { month: getDateTimeObjectFromDate(zonedTimeToUtc(new Date(fieldProps.value), localTz)).month, year: getDateTimeObjectFromDate(zonedTimeToUtc(new Date(fieldProps.value), localTz)).year, allowRange: false, onChange: onDateChange, onMonthChange: handleMonthChange, selected: props.value, ...props.datePickerProps }))),
        (props.includeTime ?? config.includeTime) && (React.createElement(PolarisTimePicker, { fieldProps: fieldProps, id: props.id, localTime: localTime, onChange: onChange, hideTimePopover: props.hideTimePopover, localTz: localTz, timePickerProps: props.timePickerProps }))));
};
//# sourceMappingURL=PolarisDateTimePicker.js.map