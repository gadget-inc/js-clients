import { Box, Icon, Listbox, Popover, Scrollable, TextField } from "@shopify/polaris";
import { ClockIcon } from "@shopify/polaris-icons";
import { format } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";
import React, { useState } from "react";
import { useController } from "react-hook-form";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { copyTime } from "./PolarisDateTimePicker.js";
const createMarkup = (items, selectedState) => {
    return items.map((item, i) => {
        return (React.createElement("div", { key: i, style: { textAlign: "center", cursor: "default", padding: "0px 4px" } },
            React.createElement(Listbox.Option, { value: item }, selectedState.padStart(2, "0") === item ? (React.createElement(Box, { padding: "100", background: "bg-surface-secondary-selected", borderRadius: "200", minHeight: "30px", minWidth: "30px" }, item)) : (React.createElement(Box, { minHeight: "30px", minWidth: "30px", padding: "100" }, item)))));
    });
};
const hoursArr = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
const minsArr = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
const ampmArr = ["AM", "PM"];
const timeFormatRegex = new RegExp(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/);
const PolarisTimePicker = (props) => {
    const { path } = useFieldMetadata(props.field);
    const { field: fieldProps } = useController({
        name: path,
    });
    const [timeString, setTimeString] = useState(props.localTime ? format(props.localTime, "K:m aa") : "");
    const [timePopoverActive, setTimePopoverActive] = useState(false);
    const [timeParseError, setTimeParseError] = useState(false);
    const setHourSelected = (hour) => props.setDateTimeState((prevState) => ({
        ...prevState,
        hour: hour,
    }));
    const setMinSelected = (minute) => props.setDateTimeState((prevState) => ({
        ...prevState,
        minute: minute,
    }));
    const setAmpmSelected = (ampm) => props.setDateTimeState((prevState) => ({
        ...prevState,
        ampm,
    }));
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
        fieldProps.onChange(zonedTimeToUtc(date, props.localTz ?? "UTC"));
        setTimeString(`${hoursStr}:${paddedMins} ${newAmpm}`);
    };
    return (React.createElement(Popover, { active: timePopoverActive, onClose: () => setTimePopoverActive(false), activator: React.createElement(TextField, { prefix: React.createElement(Icon, { source: ClockIcon }), id: props.id ? `${props.id}-time` : undefined, "data-testid": props.id ? `${props.id}-time` : undefined, label: props.timeLabel ?? "Time", autoComplete: "off", value: timeString, onChange: onTimeStringChange, onFocus: () => setTimePopoverActive(true), error: timeParseError && `Invalid time format`, ...props.timePickerProps }) }, !props.hideTimePopover && (React.createElement("div", { style: { overflow: "hidden", padding: "15px 8px" } },
        React.createElement("div", { style: { display: "flex" } },
            React.createElement(Scrollable, { style: { overflowY: "scroll", height: "250px" } },
                React.createElement(Listbox, { onSelect: (value) => onTimeStringChange(`${value}:${props.dateTimeState.minute.toString().padStart(2, "0")} ${props.dateTimeState.ampm}`) }, createMarkup(hoursArr, props.dateTimeState.hour.toString()))),
            React.createElement("div", { style: { overflowY: "scroll", height: "250px" } },
                React.createElement(Listbox, { onSelect: (value) => onTimeStringChange(`${props.dateTimeState.hour}:${value.padStart(2, "0")} ${props.dateTimeState.ampm}`) }, createMarkup(minsArr, props.dateTimeState.minute.toString().padStart(2, "0")))),
            React.createElement("div", { style: { overflowY: "scroll", height: "250px" } },
                React.createElement(Listbox, { onSelect: (value) => onTimeStringChange(`${props.dateTimeState.hour}:${props.dateTimeState.minute.toString().padStart(2, "0")} ${value}`) }, createMarkup(ampmArr, props.dateTimeState.ampm))))))));
};
export default PolarisTimePicker;
//# sourceMappingURL=PolarisTimePicker.js.map