import { Box, Icon, Listbox, Popover, Scrollable, Text, TextField } from "@shopify/polaris";
import { ClockIcon } from "@shopify/polaris-icons";
import React, { useEffect, useState } from "react";
import { useHover } from "../../../auto/hooks/useHover.js";
import { getDateTimeObjectFromDate, getTimeString, isValidDate, timeFormatRegex, zonedTimeToUtc } from "../../../dateTimeUtils.js";
const hoursArr = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
const minsArr = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
const ampmArr = ["AM", "PM"];
const PolarisAutoTimePicker = (props) => {
    const { fieldProps: { onChange, value }, } = props;
    const [timeString, setTimeString] = useState(value && isValidDate(new Date(value)) ? getTimeString(getDateTimeObjectFromDate(value)) : "");
    const [timePopoverActive, setTimePopoverActive] = useState(false);
    const [timeParseError, setTimeParseError] = useState(false);
    const onTimeStringChange = (newValue) => {
        setTimeString(newValue);
        let trimmedValue = newValue.trim();
        let hours = parseInt(trimmedValue.split(":")[0], 10);
        const suffix = trimmedValue.split(":")[1];
        if (hours === 0) {
            trimmedValue = "12:" + suffix;
        }
        const result = timeFormatRegex.test(trimmedValue);
        if (!result) {
            setTimeParseError(true);
            return;
        }
        const minutes = parseInt(suffix, 10);
        const newAmpm = trimmedValue.slice(-2).toUpperCase();
        if (newAmpm === "PM" && hours < 12) {
            hours += 12;
        }
        else if (newAmpm === "AM" && hours === 12) {
            hours = 0;
        }
        const newDate = new Date();
        newDate.setHours(hours, minutes, 0, 0);
        if (!isValidDate(newDate)) {
            setTimeParseError(true);
            return;
        }
        setTimeParseError(false);
        onChange(zonedTimeToUtc(newDate, props.localTz ?? "UTC"));
    };
    const currentHour = value && isValidDate(new Date(value)) ? getDateTimeObjectFromDate(value).hour : hoursArr[0];
    const currentMinute = value && isValidDate(new Date(value)) ? getDateTimeObjectFromDate(value).minute.padStart(2, "0") : minsArr[0];
    const currentAmpm = value && isValidDate(new Date(value)) ? getDateTimeObjectFromDate(value).ampm : ampmArr[0];
    const hourProps = {
        array: hoursArr,
        formatter: (newValue) => `${newValue}:${currentMinute} ${currentAmpm}`,
        key: "hour",
        selectedItem: currentHour,
    };
    const minProps = {
        array: minsArr,
        formatter: (newValue) => `${currentHour}:${newValue.padStart(2, "0")} ${currentAmpm}`,
        key: "minute",
        selectedItem: currentMinute,
    };
    const ampmProps = {
        array: ampmArr,
        formatter: (newValue) => `${currentHour}:${currentMinute} ${newValue}`,
        key: "ampm",
        selectedItem: currentAmpm,
    };
    useEffect(() => {
        if (!value)
            return;
        const dateValue = new Date(value);
        if (!isValidDate(dateValue))
            return;
        setTimeString(getTimeString(getDateTimeObjectFromDate(dateValue)));
    }, [value, setTimeString]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Popover, { active: timePopoverActive, onClose: () => setTimePopoverActive(false), preferredAlignment: "right", activator: React.createElement(TextField, { prefix: React.createElement(Icon, { source: ClockIcon }), id: props.id ? `${props.id}-time` : undefined, "data-testid": props.id ? `${props.id}-time` : undefined, label: props.timePickerProps?.label ?? "Time", autoComplete: "off", value: timeString, onChange: onTimeStringChange, onFocus: () => setTimePopoverActive(true), error: timeParseError && `Invalid time format`, ...props.timePickerProps }) },
            React.createElement(Popover.Pane, { fixed: true }, !props.hideTimePopover && (React.createElement("div", { style: { overflow: "hidden", padding: "15px 8px" } },
                React.createElement("div", { style: { display: "flex" } }, [hourProps, minProps, ampmProps].map((timeComponentProps, i) => (React.createElement(Scrollable, { key: i, style: { overflowY: "scroll", height: "250px" } },
                    React.createElement(Listbox, { onSelect: (value) => onTimeStringChange(timeComponentProps.formatter(value)) },
                        React.createElement(TimeSelectionDropdownItems, { items: timeComponentProps.array, selectedItem: timeComponentProps.selectedItem }))))))))))));
};
export default PolarisAutoTimePicker;
const TimeSelectionDropdownItems = (props) => {
    const { items, selectedItem } = props;
    return items.map((item, i) => React.createElement(DropdownItem, { key: `${i}-${item}`, item: item, isSelected: selectedItem === item }));
};
const DropdownItem = ({ item, isSelected }) => {
    const [isHovered, hoverProps] = useHover();
    return (React.createElement("div", { style: { textAlign: "center", cursor: "default", padding: "0px 4px" } },
        React.createElement(Listbox.Option, { value: item },
            React.createElement("div", { style: { cursor: "pointer" }, ...hoverProps }, isSelected || isHovered ? (React.createElement(Box, { padding: "100", background: "bg-inverse", borderRadius: "200", minHeight: "30px", minWidth: "30px" },
                React.createElement(Text, { as: "p", tone: "text-inverse" }, item))) : (React.createElement(Box, { minHeight: "30px", minWidth: "30px", padding: "100" }, item))))));
};
//# sourceMappingURL=PolarisAutoTimePicker.js.map