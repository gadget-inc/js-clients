import { DatePicker, Icon, InlineStack, Popover, TextField } from "@shopify/polaris";
import { CalendarIcon } from "@shopify/polaris-icons";
import { format, isValid } from "date-fns";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";
import React, { useCallback, useMemo, useState } from "react";
import { useController } from "react-hook-form";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import PolarisAutoTimePicker from "./PolarisAutoTimePicker.js";
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
export const PolarisAutoDateTimePicker = (props) => {
    const { path, metadata } = useFieldMetadata(props.field);
    const { field: fieldProps } = useController({
        name: path,
    });
    const { onChange, value } = props;
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const fieldPropsDate = useMemo(() => new Date(fieldProps.value), [fieldProps.value]);
    const localTime = useMemo(() => {
        return value ? utcToZonedTime(value, localTz) : isValid(fieldPropsDate) ? new Date(fieldProps.value) : undefined;
    }, [value, localTz, fieldPropsDate, fieldProps.value]);
    const [datePopoverActive, setDatePopoverActive] = useState(false);
    const [popoverMonth, setPopoverMonth] = useState(getDateTimeObjectFromDate(zonedTimeToUtc(isValid(fieldPropsDate) ? fieldPropsDate : new Date(), localTz)).month);
    const [popoverYear, setPopoverYear] = useState(getDateTimeObjectFromDate(zonedTimeToUtc(isValid(fieldPropsDate) ? fieldPropsDate : new Date(), localTz)).year);
    const config = metadata.configuration;
    const onDateChange = useCallback((range) => {
        fieldProps && copyTime(range.start, zonedTimeToUtc(range.start, localTz));
        const fieldPropsDate = new Date(fieldProps.value);
        if (isValid(fieldPropsDate)) {
            range.start.setHours(fieldPropsDate.getHours());
            range.start.setMinutes(fieldPropsDate.getMinutes());
            range.start.setSeconds(fieldPropsDate.getSeconds());
            range.start.setMilliseconds(fieldPropsDate.getMilliseconds());
        }
        onChange?.(zonedTimeToUtc(range.start, localTz));
        fieldProps.onChange(zonedTimeToUtc(range.start, localTz));
        setDatePopoverActive(false);
    }, [onChange, localTz, fieldProps]);
    const toggleDatePopoverActive = useCallback(() => {
        const fieldPropsDate = new Date(fieldProps.value);
        setPopoverMonth(getDateTimeObjectFromDate(isValid(fieldPropsDate) ? fieldPropsDate : new Date()).month);
        setPopoverYear(getDateTimeObjectFromDate(isValid(fieldPropsDate) ? fieldPropsDate : new Date()).year);
        setDatePopoverActive((active) => !active);
    }, [fieldProps.value]);
    const handleMonthChange = useCallback((month, year) => {
        setPopoverMonth(month);
        setPopoverYear(year);
    }, []);
    return (React.createElement(InlineStack, { gap: "400" },
        React.createElement(Popover, { preferredPosition: "above", active: datePopoverActive, activator: React.createElement(TextField, { id: props.id ? `${props.id}-date` : undefined, label: metadata.name ?? "Date", prefix: React.createElement(Icon, { source: CalendarIcon }), autoComplete: "off", value: localTime ? format(localTime, "yyyy-MM-dd") : "", onFocus: toggleDatePopoverActive, error: props.error }), onClose: toggleDatePopoverActive },
            React.createElement("div", { style: { padding: "16px" } },
                React.createElement(DatePicker, { month: popoverMonth, year: popoverYear, allowRange: false, onChange: onDateChange, onMonthChange: handleMonthChange, selected: localTime ?? new Date(), ...props.datePickerProps }))),
        (props.includeTime ?? config.includeTime) && (React.createElement(PolarisAutoTimePicker, { fieldProps: fieldProps, id: props.id, localTime: localTime, onChange: onChange, hideTimePopover: props.hideTimePopover, localTz: localTz, timePickerProps: props.timePickerProps }))));
};
//# sourceMappingURL=PolarisAutoDateTimePicker.js.map