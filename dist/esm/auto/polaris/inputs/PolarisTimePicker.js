import { Box, Icon, Listbox, Popover, Scrollable, TextField } from "@shopify/polaris";
import { ClockIcon } from "@shopify/polaris-icons";
import { zonedTimeToUtc } from "date-fns-tz";
import React, { useEffect, useState } from "react";
import { copyTime, getDateFromDateTimeObject, getDateTimeObjectFromDate } from "./PolarisDateTimePicker.js";
const createMarkup = (items, selectedState) => {
    return items.map((item, i) => {
        return (React.createElement("div", { key: i, style: { textAlign: "center", cursor: "default", padding: "0px 4px" } },
            React.createElement(Listbox.Option, { value: item }, selectedState.padStart(2, "0") === item.padStart(2, "0") ? (React.createElement(Box, { padding: "100", background: "bg-surface-secondary-selected", borderRadius: "200", minHeight: "30px", minWidth: "30px" }, item)) : (React.createElement(Box, { minHeight: "30px", minWidth: "30px", padding: "100" }, item)))));
    });
};
const hoursArr = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
const minsArr = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
const ampmArr = ["AM", "PM"];
const timeFormatRegex = new RegExp(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/);
const getTimeString = (dateTime) => {
    if (parseInt(dateTime.hour, 10) === 0) {
        return `12:${dateTime.minute.padStart(2, "0")} AM`;
    }
    return `${dateTime.hour}:${dateTime.minute.padStart(2, "0")} ${dateTime.ampm}`;
};
const PolarisTimePicker = (props) => {
    const [timeString, setTimeString] = useState(props.fieldProps.value ? getTimeString(getDateTimeObjectFromDate(props.fieldProps.value)) : "");
    const [timePopoverActive, setTimePopoverActive] = useState(false);
    const [timeParseError, setTimeParseError] = useState(false);
    const setHourSelected = (hour) => props.fieldProps.onChange(getDateFromDateTimeObject({ ...getDateTimeObjectFromDate(props.fieldProps.value ?? new Date()), hour }));
    const setMinSelected = (minute) => props.fieldProps.onChange(getDateFromDateTimeObject({ ...getDateTimeObjectFromDate(props.fieldProps.value ?? new Date()), minute }));
    const setAmpmSelected = (ampm) => props.fieldProps.onChange(getDateFromDateTimeObject({ ...getDateTimeObjectFromDate(props.fieldProps.value ?? new Date()), ampm }));
    const onTimeStringChange = (value) => {
        setTimeString(value);
        const trimmedValue = value.trim();
        const result = timeFormatRegex.test(trimmedValue);
        if (!result) {
            setTimeParseError(true);
            return;
        }
        setTimeParseError(false);
        let hours = parseInt(trimmedValue.split(":")[0], 10);
        const minutes = parseInt(trimmedValue.split(":")[1], 10);
        const newAmpm = trimmedValue.slice(-2).toUpperCase();
        const hoursStr = hours.toString();
        const paddedMins = minutes.toString().padStart(2, "0");
        setHourSelected(hoursStr);
        setMinSelected(paddedMins);
        setAmpmSelected(newAmpm);
        const parsedDate = new Date();
        if (newAmpm === "PM" && hours < 12) {
            hours += 12;
        }
        else if (newAmpm === "AM" && hours === 12) {
            hours = 0;
        }
        parsedDate.setHours(hours, minutes, 0, 0);
        const date = props.localTime ? new Date(props.localTime) : new Date();
        copyTime(date, parsedDate);
        props.onChange?.(zonedTimeToUtc(date, props.localTz ?? "UTC"));
        props.fieldProps.onChange(zonedTimeToUtc(date, props.localTz ?? "UTC"));
        setTimeString(`${hoursStr}:${paddedMins} ${newAmpm}`);
    };
    useEffect(() => {
        if (!props.fieldProps.value)
            return;
        setTimeString(getTimeString(getDateTimeObjectFromDate(props.fieldProps.value)));
    }, [props.fieldProps.value]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Popover, { active: timePopoverActive, onClose: () => setTimePopoverActive(false), activator: React.createElement(TextField, { prefix: React.createElement(Icon, { source: ClockIcon }), id: props.id ? `${props.id}-time` : undefined, "data-testid": props.id ? `${props.id}-time` : undefined, label: props.timeLabel ?? "Time", autoComplete: "off", value: timeString, onChange: onTimeStringChange, onFocus: () => setTimePopoverActive(true), error: timeParseError && `Invalid time format`, ...props.timePickerProps }) }, !props.hideTimePopover && (React.createElement("div", { style: { overflow: "hidden", padding: "15px 8px" } },
            React.createElement("div", { style: { display: "flex" } },
                React.createElement(Scrollable, { style: { overflowY: "scroll", height: "250px" } },
                    React.createElement(Listbox, { onSelect: (value) => onTimeStringChange(`${value}:${props.fieldProps.value
                            ? parseInt(getDateTimeObjectFromDate(props.fieldProps.value).minute.toString().padStart(2, "0"), 10) === 0
                                ? "12"
                                : getDateTimeObjectFromDate(props.fieldProps.value).minute.toString().padStart(2, "0")
                            : minsArr[0]} ${props.fieldProps.value ? getDateTimeObjectFromDate(props.fieldProps.value).ampm : ampmArr[0]}`) }, createMarkup(hoursArr, props.fieldProps.value ? getDateTimeObjectFromDate(props.fieldProps.value).hour.toString() : hoursArr[0]))),
                React.createElement("div", { style: { overflowY: "scroll", height: "250px" } },
                    React.createElement(Listbox, { onSelect: (value) => onTimeStringChange(`${props.fieldProps.value ? getDateTimeObjectFromDate(props.fieldProps.value).hour : hoursArr[0]}:${value.padStart(2, "0")} ${props.fieldProps.value ? getDateTimeObjectFromDate(props.fieldProps.value).ampm : ampmArr[0]}`) }, createMarkup(minsArr, props.fieldProps.value
                        ? getDateTimeObjectFromDate(props.fieldProps.value).minute.toString().padStart(2, "0")
                        : minsArr[0]))),
                React.createElement("div", { style: { overflowY: "scroll", height: "250px" } },
                    React.createElement(Listbox, { onSelect: (value) => onTimeStringChange(`${props.fieldProps.value ? getDateTimeObjectFromDate(props.fieldProps.value).hour : hoursArr[0]}:${props.fieldProps.value
                            ? getDateTimeObjectFromDate(props.fieldProps.value).minute.toString().padStart(2, "0")
                            : minsArr[0]} ${value}`) }, createMarkup(ampmArr, props.fieldProps.value ? getDateTimeObjectFromDate(props.fieldProps.value).ampm : ampmArr[0])))))))));
};
export default PolarisTimePicker;
//# sourceMappingURL=PolarisTimePicker.js.map