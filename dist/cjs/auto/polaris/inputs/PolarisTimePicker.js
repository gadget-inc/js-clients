"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const date_fns_1 = require("date-fns");
const date_fns_tz_1 = require("date-fns-tz");
const react_1 = tslib_1.__importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const PolarisDateTimePicker_js_1 = require("./PolarisDateTimePicker.js");
const createMarkup = (items, selectedState) => {
    return items.map((item, i) => {
        return (react_1.default.createElement("div", { key: i, style: { textAlign: "center", cursor: "default", padding: "0px 4px" } },
            react_1.default.createElement(polaris_1.Listbox.Option, { value: item }, selectedState.padStart(2, "0") === item.padStart(2, "0") ? (react_1.default.createElement(polaris_1.Box, { padding: "100", background: "bg-surface-secondary-selected", borderRadius: "200", minHeight: "30px", minWidth: "30px" }, item)) : (react_1.default.createElement(polaris_1.Box, { minHeight: "30px", minWidth: "30px", padding: "100" }, item)))));
    });
};
const hoursArr = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
const minsArr = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
const ampmArr = ["AM", "PM"];
const timeFormatRegex = new RegExp(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/);
const PolarisTimePicker = (props) => {
    const { path } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const { field: fieldProps } = (0, react_hook_form_1.useController)({
        name: path,
    });
    const [timeString, setTimeString] = (0, react_1.useState)(props.localTime
        ? (0, date_fns_1.format)(props.localTime, "K:m aa")
        : `${props.dateTimeState.hour}:${props.dateTimeState.minute.toString().padStart(2, "0")} ${props.dateTimeState.ampm}`);
    const [timePopoverActive, setTimePopoverActive] = (0, react_1.useState)(false);
    const [timeParseError, setTimeParseError] = (0, react_1.useState)(false);
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
        (0, PolarisDateTimePicker_js_1.copyTime)(date, parsedDate);
        props.onChange?.((0, date_fns_tz_1.zonedTimeToUtc)(date, props.localTz ?? "UTC"));
        fieldProps.onChange((0, date_fns_tz_1.zonedTimeToUtc)(date, props.localTz ?? "UTC"));
        setTimeString(`${hoursStr}:${paddedMins} ${newAmpm}`);
    };
    return (react_1.default.createElement(polaris_1.Popover, { active: timePopoverActive, onClose: () => setTimePopoverActive(false), activator: react_1.default.createElement(polaris_1.TextField, { prefix: react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.ClockIcon }), id: props.id ? `${props.id}-time` : undefined, "data-testid": props.id ? `${props.id}-time` : undefined, label: props.timeLabel ?? "Time", autoComplete: "off", value: timeString, onChange: onTimeStringChange, onFocus: () => setTimePopoverActive(true), error: timeParseError && `Invalid time format`, ...props.timePickerProps }) }, !props.hideTimePopover && (react_1.default.createElement("div", { style: { overflow: "hidden", padding: "15px 8px" } },
        react_1.default.createElement("div", { style: { display: "flex" } },
            react_1.default.createElement(polaris_1.Scrollable, { style: { overflowY: "scroll", height: "250px" } },
                react_1.default.createElement(polaris_1.Listbox, { onSelect: (value) => onTimeStringChange(`${value}:${props.dateTimeState.minute.toString().padStart(2, "0")} ${props.dateTimeState.ampm}`) }, createMarkup(hoursArr, props.dateTimeState.hour.toString()))),
            react_1.default.createElement("div", { style: { overflowY: "scroll", height: "250px" } },
                react_1.default.createElement(polaris_1.Listbox, { onSelect: (value) => onTimeStringChange(`${props.dateTimeState.hour}:${value.padStart(2, "0")} ${props.dateTimeState.ampm}`) }, createMarkup(minsArr, props.dateTimeState.minute.toString().padStart(2, "0")))),
            react_1.default.createElement("div", { style: { overflowY: "scroll", height: "250px" } },
                react_1.default.createElement(polaris_1.Listbox, { onSelect: (value) => onTimeStringChange(`${props.dateTimeState.hour}:${props.dateTimeState.minute.toString().padStart(2, "0")} ${value}`) }, createMarkup(ampmArr, props.dateTimeState.ampm))))))));
};
exports.default = PolarisTimePicker;
//# sourceMappingURL=PolarisTimePicker.js.map