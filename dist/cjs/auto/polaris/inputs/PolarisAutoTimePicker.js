"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importStar(require("react"));
const dateTimeUtils_js_1 = require("../../../dateTimeUtils.js");
const PolarisAutoDateTimePicker_js_1 = require("./PolarisAutoDateTimePicker.js");
const createMarkup = (items, selectedState, colNum, selectCoord, setSelectCoord) => {
    return items.map((item, i) => {
        return (react_1.default.createElement("div", { key: i, style: { textAlign: "center", cursor: "default", padding: "0px 4px" } },
            react_1.default.createElement(polaris_1.Listbox.Option, { value: item },
                react_1.default.createElement("div", { style: { cursor: "pointer" }, onMouseEnter: () => setSelectCoord({ col: colNum, row: i }), onMouseLeave: () => setSelectCoord({ col: -1, row: -1 }) }, selectedState.padStart(2, "0") == item.padStart(2, "0") ||
                    (parseInt(selectedState, 10) == 0 && item == "12") ||
                    (selectCoord?.col == colNum && selectCoord.row == i) ? (react_1.default.createElement(polaris_1.Box, { padding: "100", background: "bg-inverse", borderRadius: "200", minHeight: "30px", minWidth: "30px" },
                    react_1.default.createElement(polaris_1.Text, { as: "p", tone: "text-inverse" }, item))) : (react_1.default.createElement(polaris_1.Box, { minHeight: "30px", minWidth: "30px", padding: "100" }, item))))));
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
const PolarisAutoTimePicker = (props) => {
    const [valueProp, setValueProp] = (0, react_1.useState)(props.value);
    const [timeString, setTimeString] = (0, react_1.useState)(props.localTime ? getTimeString((0, PolarisAutoDateTimePicker_js_1.getDateTimeObjectFromDate)(props.localTime)) : "");
    const [timePopoverActive, setTimePopoverActive] = (0, react_1.useState)(false);
    const [timeParseError, setTimeParseError] = (0, react_1.useState)(false);
    const [selectCoord, setSelectCoord] = (0, react_1.useState)({ col: -1, row: -1 });
    const setHourSelected = (hour) => {
        if (valueProp) {
            props.onChange?.((0, PolarisAutoDateTimePicker_js_1.getDateFromDateTimeObject)({ ...(0, PolarisAutoDateTimePicker_js_1.getDateTimeObjectFromDate)(valueProp), hour }));
            return;
        }
        props.fieldProps.onChange((0, PolarisAutoDateTimePicker_js_1.getDateFromDateTimeObject)({ ...(0, PolarisAutoDateTimePicker_js_1.getDateTimeObjectFromDate)(props.fieldProps.value ?? new Date()), hour }));
    };
    const setMinSelected = (minute) => {
        if (valueProp) {
            props.onChange?.((0, PolarisAutoDateTimePicker_js_1.getDateFromDateTimeObject)({ ...(0, PolarisAutoDateTimePicker_js_1.getDateTimeObjectFromDate)(valueProp), minute }));
            return;
        }
        props.fieldProps.onChange((0, PolarisAutoDateTimePicker_js_1.getDateFromDateTimeObject)({ ...(0, PolarisAutoDateTimePicker_js_1.getDateTimeObjectFromDate)(props.fieldProps.value ?? new Date()), minute }));
    };
    const setAmpmSelected = (ampm) => {
        if (valueProp) {
            props.onChange?.((0, PolarisAutoDateTimePicker_js_1.getDateFromDateTimeObject)({ ...(0, PolarisAutoDateTimePicker_js_1.getDateTimeObjectFromDate)(valueProp), ampm }));
            return;
        }
        props.fieldProps.onChange((0, PolarisAutoDateTimePicker_js_1.getDateFromDateTimeObject)({ ...(0, PolarisAutoDateTimePicker_js_1.getDateTimeObjectFromDate)(props.fieldProps.value ?? new Date()), ampm }));
    };
    const onTimeStringChange = (value) => {
        setTimeString(value);
        let trimmedValue = value.trim();
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
        setTimeParseError(false);
        const minutes = parseInt(suffix, 10);
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
        (0, PolarisAutoDateTimePicker_js_1.copyTime)(date, parsedDate);
        props.onChange?.((0, dateTimeUtils_js_1.zonedTimeToUtc)(date, props.localTz ?? "UTC"));
        props.fieldProps.onChange((0, dateTimeUtils_js_1.zonedTimeToUtc)(date, props.localTz ?? "UTC"));
        if (valueProp) {
            setValueProp((0, dateTimeUtils_js_1.zonedTimeToUtc)(date, props.localTz ?? "UTC"));
        }
        setTimeString(`${parseInt(hoursStr, 10) === 0 ? "12" : hoursStr}:${paddedMins} ${newAmpm}`);
    };
    const hourTimeFormatter = (value) => {
        const defaultValue = valueProp ?? props.fieldProps.value;
        return `${value}:${defaultValue ? (0, PolarisAutoDateTimePicker_js_1.getDateTimeObjectFromDate)(defaultValue).minute.toString().padStart(2, "0") : minsArr[0]} ${defaultValue ? (0, PolarisAutoDateTimePicker_js_1.getDateTimeObjectFromDate)(defaultValue).ampm : ampmArr[0]}`;
    };
    const minTimeFormatter = (value) => {
        const defaultValue = valueProp ?? props.fieldProps.value;
        return `${defaultValue ? (0, PolarisAutoDateTimePicker_js_1.getDateTimeObjectFromDate)(defaultValue).hour : hoursArr[0]}:${value.padStart(2, "0")} ${defaultValue ? (0, PolarisAutoDateTimePicker_js_1.getDateTimeObjectFromDate)(defaultValue).ampm : ampmArr[0]}`;
    };
    const ampmTimeFormatter = (value) => {
        const defaultValue = valueProp ?? props.fieldProps.value;
        return `${defaultValue ? (0, PolarisAutoDateTimePicker_js_1.getDateTimeObjectFromDate)(defaultValue).hour : hoursArr[0]}:${defaultValue ? (0, PolarisAutoDateTimePicker_js_1.getDateTimeObjectFromDate)(defaultValue).minute.toString().padStart(2, "0") : minsArr[0]} ${value}`;
    };
    const hourProps = {
        array: hoursArr,
        formatter: hourTimeFormatter,
        key: "hour",
    };
    const minProps = {
        array: minsArr,
        formatter: minTimeFormatter,
        key: "minute",
    };
    const ampmProps = {
        array: ampmArr,
        formatter: ampmTimeFormatter,
        key: "ampm",
    };
    (0, react_1.useEffect)(() => {
        if (!props.fieldProps.value || valueProp)
            return;
        setTimeString(getTimeString((0, PolarisAutoDateTimePicker_js_1.getDateTimeObjectFromDate)(new Date(props.fieldProps.value))));
    }, [props.fieldProps.value, valueProp, setTimeString]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.Popover, { active: timePopoverActive, onClose: () => setTimePopoverActive(false), preferredAlignment: "right", activator: react_1.default.createElement(polaris_1.TextField, { prefix: react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.ClockIcon }), id: props.id ? `${props.id}-time` : undefined, "data-testid": props.id ? `${props.id}-time` : undefined, label: props.timePickerProps?.label ?? "Time", autoComplete: "off", value: timeString, onChange: onTimeStringChange, onFocus: () => setTimePopoverActive(true), error: timeParseError && `Invalid time format`, ...props.timePickerProps }) },
            react_1.default.createElement(polaris_1.Popover.Pane, { fixed: true }, !props.hideTimePopover && (react_1.default.createElement("div", { style: { overflow: "hidden", padding: "15px 8px" } },
                react_1.default.createElement("div", { style: { display: "flex" } }, [hourProps, minProps, ampmProps].map((timeComponentProps, i) => (react_1.default.createElement(polaris_1.Scrollable, { key: i, style: { overflowY: "scroll", height: "250px" } },
                    react_1.default.createElement(polaris_1.Listbox, { onSelect: (value) => onTimeStringChange(timeComponentProps.formatter(value)) }, createMarkup(timeComponentProps.array, valueProp
                        ? `${(0, PolarisAutoDateTimePicker_js_1.getDateTimeObjectFromDate)(valueProp)[timeComponentProps.key]}`
                        : props.fieldProps.value
                            ? `${(0, PolarisAutoDateTimePicker_js_1.getDateTimeObjectFromDate)(new Date(props.fieldProps.value))[timeComponentProps.key]}`
                            : timeComponentProps.array[0], i, selectCoord, setSelectCoord))))))))))));
};
exports.default = PolarisAutoTimePicker;
//# sourceMappingURL=PolarisAutoTimePicker.js.map