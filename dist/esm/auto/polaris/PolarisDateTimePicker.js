import { Box, DatePicker, Icon, InlineStack, Listbox, Popover, TextField } from "@shopify/polaris";
import { CalendarIcon, ClockIcon } from "@shopify/polaris-icons";
import { format } from "date-fns";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";
import React, { useCallback, useState } from "react";
import { useFieldMetadata } from "../hooks/useFieldMetadata.js";
const copyTime = (to, input) => {
    to.setHours(input.getHours());
    to.setMinutes(input.getMinutes());
    to.setSeconds(input.getSeconds());
    to.setMilliseconds(input.getMilliseconds());
};
const timeFormatRegex = new RegExp(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/);
const today = new Date();
export const PolarisDateTimePicker = (props) => {
    const { onChange, value } = props;
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTime = value ? utcToZonedTime(value, localTz) : undefined;
    const [{ month, year }, setDate] = useState({ month: (localTime ?? today).getMonth(), year: (localTime ?? today).getFullYear() });
    const [datePopoverActive, setDatePopoverActive] = useState(false);
    const [timeString, setTimeString] = useState(localTime ? format(localTime, "HH:mm") : "");
    const [popoverActive, setPopoverActive] = useState(false);
    const [timeParseError, setTimeParseError] = useState(false);
    const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
    const mins = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
    const ampm = ["AM", "PM"];
    const [hourSelected, setHourSelected] = useState(hours[0]);
    const [minSelected, setMinSelected] = useState(mins[0]);
    const [ampmSelected, setAmpmSelected] = useState(ampm[0]);
    const { metadata } = useFieldMetadata(props.field);
    const config = metadata.configuration;
    const includeTime = config.includeTime;
    const onDateChange = useCallback((range) => {
        const date = new Date(range.start);
        localTime && copyTime(date, localTime);
        onChange(zonedTimeToUtc(date, localTz));
        setDatePopoverActive(false);
    }, [localTime, onChange, localTz]);
    const toggleDatePopoverActive = useCallback(() => setDatePopoverActive((active) => !active), []);
    const handleMonthChange = useCallback((month, year) => {
        setDate({ month, year });
    }, []);
    const onTimeStringChange = (value) => {
        setTimeString(value);
        const trimmedValue = value.trim();
        if (!timeFormatRegex.test(trimmedValue)) {
            setTimeParseError(true);
            return;
        }
        setTimeParseError(false);
        const [hours, minutes] = trimmedValue.split(":").map((part) => parseInt(part, 10));
        const newAmpm = trimmedValue.slice(-2).toUpperCase();
        if (isNaN(hours) || isNaN(minutes) || !ampm.includes(newAmpm))
            return;
        const paddedHours = hours.toString().padStart(2, "0");
        const paddedMins = minutes.toString().padStart(2, "0");
        setHourSelected(paddedHours);
        setMinSelected(paddedMins);
        setAmpmSelected(newAmpm);
        const parsedDate = new Date();
        parsedDate.setHours(newAmpm === "PM" ? hours + 12 : hours, minutes, 0, 0);
        const date = localTime ? new Date(localTime) : new Date();
        copyTime(date, parsedDate);
        onChange(zonedTimeToUtc(date, localTz));
        setTimeString(`${paddedHours}:${paddedMins} ${newAmpm}`);
    };
    const createMarkup = (items, selectedState) => {
        return items.map((item, i) => {
            return (React.createElement("div", { key: i, style: { textAlign: "center", cursor: "default", padding: "0px 4px" } },
                React.createElement(Listbox.Option, { value: item }, selectedState === item ? (React.createElement(Box, { padding: "100", background: "bg-surface-secondary-selected", borderRadius: "200", minHeight: "30px", minWidth: "30px" }, item)) : (React.createElement(Box, { minHeight: "30px", minWidth: "30px", padding: "100" }, item)))));
        });
    };
    return (React.createElement(InlineStack, { gap: "400" },
        React.createElement(Popover, { preferredPosition: "above", active: datePopoverActive, activator: React.createElement(TextField, { id: props.id ? `${props.id}-date` : undefined, label: metadata.name ?? "Date", prefix: React.createElement(Icon, { source: CalendarIcon }), autoComplete: "off", value: localTime ? format(localTime, "yyyy-MM-dd") : "", onFocus: toggleDatePopoverActive, error: props.error }), onClose: toggleDatePopoverActive },
            React.createElement("div", { style: { padding: "16px" } },
                React.createElement(DatePicker, { month: month, year: year, allowRange: false, onChange: onDateChange, onMonthChange: handleMonthChange, selected: props.value }))),
        includeTime && (React.createElement(Popover, { active: popoverActive, onClose: () => setPopoverActive(false), activator: React.createElement(TextField, { prefix: React.createElement(Icon, { source: ClockIcon }), id: props.id ? `${props.id}-time` : undefined, label: props.timeLabel ?? "Time", autoComplete: "off", value: timeString, onChange: onTimeStringChange, onFocus: () => setPopoverActive(true), error: timeParseError && `Invalid time format` }) },
            React.createElement("div", { style: { overflow: "hidden", padding: "15px 8px" } },
                React.createElement("div", { style: { display: "flex" } },
                    React.createElement("div", { style: { overflowY: "scroll", height: "250px" } },
                        React.createElement(Listbox, { onSelect: (value) => {
                                setHourSelected(value);
                                const newTime = `${value}:${minSelected} ${ampmSelected}`;
                                setTimeString(newTime);
                                setTimeParseError(!timeFormatRegex.test(newTime));
                            } }, createMarkup(hours, hourSelected))),
                    React.createElement("div", { style: { overflowY: "scroll", height: "250px" } },
                        React.createElement(Listbox, { onSelect: (value) => {
                                setMinSelected(value);
                                const newTime = `${hourSelected}:${value} ${ampmSelected}`;
                                setTimeString(newTime);
                                setTimeParseError(!timeFormatRegex.test(newTime));
                            } }, createMarkup(mins, minSelected))),
                    React.createElement("div", { style: { overflowY: "scroll", height: "250px" } },
                        React.createElement(Listbox, { onSelect: (value) => {
                                setAmpmSelected(value);
                                const newTime = `${hourSelected}:${minSelected} ${value}`;
                                setTimeString(newTime);
                                setTimeParseError(!timeFormatRegex.test(newTime));
                            } }, createMarkup(ampm, ampmSelected)))))))));
};
//# sourceMappingURL=PolarisDateTimePicker.js.map