"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importStar(require("react"));
const useHover_js_1 = require("../../../auto/hooks/useHover.js");
const dateTimeUtils_js_1 = require("../../../dateTimeUtils.js");
const hoursArr = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
const minsArr = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
const ampmArr = ["AM", "PM"];
const PolarisAutoTimePicker = (props) => {
    const { fieldProps: { onChange, value }, } = props;
    const [timeString, setTimeString] = (0, react_1.useState)(value && (0, dateTimeUtils_js_1.isValidDate)(new Date(value)) ? (0, dateTimeUtils_js_1.getTimeString)((0, dateTimeUtils_js_1.getDateTimeObjectFromDate)(value)) : "");
    const [timePopoverActive, setTimePopoverActive] = (0, react_1.useState)(false);
    const [timeParseError, setTimeParseError] = (0, react_1.useState)(false);
    const onTimeStringChange = (newValue) => {
        setTimeString(newValue);
        let trimmedValue = newValue.trim();
        let hours = parseInt(trimmedValue.split(":")[0], 10);
        const suffix = trimmedValue.split(":")[1];
        if (hours === 0) {
            trimmedValue = "12:" + suffix;
        }
        const result = dateTimeUtils_js_1.timeFormatRegex.test(trimmedValue);
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
        if (!(0, dateTimeUtils_js_1.isValidDate)(newDate)) {
            setTimeParseError(true);
            return;
        }
        setTimeParseError(false);
        onChange((0, dateTimeUtils_js_1.zonedTimeToUtc)(newDate, props.localTz ?? "UTC"));
    };
    const currentHour = value && (0, dateTimeUtils_js_1.isValidDate)(new Date(value)) ? (0, dateTimeUtils_js_1.getDateTimeObjectFromDate)(value).hour : hoursArr[0];
    const currentMinute = value && (0, dateTimeUtils_js_1.isValidDate)(new Date(value)) ? (0, dateTimeUtils_js_1.getDateTimeObjectFromDate)(value).minute.padStart(2, "0") : minsArr[0];
    const currentAmpm = value && (0, dateTimeUtils_js_1.isValidDate)(new Date(value)) ? (0, dateTimeUtils_js_1.getDateTimeObjectFromDate)(value).ampm : ampmArr[0];
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
    (0, react_1.useEffect)(() => {
        if (!value)
            return;
        const dateValue = new Date(value);
        if (!(0, dateTimeUtils_js_1.isValidDate)(dateValue))
            return;
        setTimeString((0, dateTimeUtils_js_1.getTimeString)((0, dateTimeUtils_js_1.getDateTimeObjectFromDate)(dateValue)));
    }, [value, setTimeString]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.Popover, { active: timePopoverActive, onClose: () => setTimePopoverActive(false), preferredAlignment: "right", activator: react_1.default.createElement(polaris_1.TextField, { prefix: react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.ClockIcon }), id: props.id ? `${props.id}-time` : undefined, "data-testid": props.id ? `${props.id}-time` : undefined, label: props.timePickerProps?.label ?? "Time", autoComplete: "off", value: timeString, onChange: onTimeStringChange, onFocus: () => setTimePopoverActive(true), error: timeParseError && `Invalid time format`, ...props.timePickerProps }) },
            react_1.default.createElement(polaris_1.Popover.Pane, { fixed: true }, !props.hideTimePopover && (react_1.default.createElement("div", { style: { overflow: "hidden", padding: "15px 8px" } },
                react_1.default.createElement("div", { style: { display: "flex" } }, [hourProps, minProps, ampmProps].map((timeComponentProps, i) => (react_1.default.createElement(polaris_1.Scrollable, { key: i, style: { overflowY: "scroll", height: "250px" } },
                    react_1.default.createElement(polaris_1.Listbox, { onSelect: (value) => onTimeStringChange(timeComponentProps.formatter(value)) },
                        react_1.default.createElement(TimeSelectionDropdownItems, { items: timeComponentProps.array, selectedItem: timeComponentProps.selectedItem }))))))))))));
};
exports.default = PolarisAutoTimePicker;
const TimeSelectionDropdownItems = (props) => {
    const { items, selectedItem } = props;
    return items.map((item, i) => react_1.default.createElement(DropdownItem, { key: `${i}-${item}`, item: item, isSelected: selectedItem === item }));
};
const DropdownItem = ({ item, isSelected }) => {
    const [isHovered, hoverProps] = (0, useHover_js_1.useHover)();
    return (react_1.default.createElement("div", { style: { textAlign: "center", cursor: "default", padding: "0px 4px" } },
        react_1.default.createElement(polaris_1.Listbox.Option, { value: item },
            react_1.default.createElement("div", { style: { cursor: "pointer" }, ...hoverProps }, isSelected || isHovered ? (react_1.default.createElement(polaris_1.Box, { padding: "100", background: "bg-inverse", borderRadius: "200", minHeight: "30px", minWidth: "30px" },
                react_1.default.createElement(polaris_1.Text, { as: "p", tone: "text-inverse" }, item))) : (react_1.default.createElement(polaris_1.Box, { minHeight: "30px", minWidth: "30px", padding: "100" }, item))))));
};
//# sourceMappingURL=PolarisAutoTimePicker.js.map