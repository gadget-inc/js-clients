"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisDateTimePicker = void 0;
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const date_fns_1 = require("date-fns");
const date_fns_tz_1 = require("date-fns-tz");
const react_1 = __importStar(require("react"));
const useFocus_1 = require("../../../../useFocus");
const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
const getTimeString = (date) => (0, date_fns_1.format)(date, "K:m aa");
// Use a regular expression to extract hours, minutes, and AM/PM
const timeStringRegex = /(\d{1,2}):?(\d{0,2})\s*([APMapm]{0,2})/;
const parseTimeString = (timeString) => {
    const result = timeString.match(timeStringRegex);
    if (!result) {
        return null;
    }
    // eslint-disable-next-line prefer-const
    let [_, hoursStr, minutesStr, ampm] = result;
    // Convert extracted values to integers
    let hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10) || 0; // Default minutes to 0 if not provided
    // Handle AM/PM
    ampm = ampm.toLowerCase();
    if (ampm === "pm" && hours < 12) {
        hours += 12;
    }
    else if (ampm === "am" && hours === 12) {
        hours = 0;
    }
    // Get the current date to set the time
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
};
const copyTime = (to, input) => {
    to.setHours(input.getHours());
    to.setMinutes(input.getMinutes());
    to.setSeconds(input.getSeconds());
    to.setMilliseconds(input.getMilliseconds());
};
const today = new Date();
const PolarisDateTimePicker = (props) => {
    const { onChange, value } = props;
    const localTime = value ? (0, date_fns_tz_1.utcToZonedTime)(value, localTz) : undefined;
    const [{ month, year }, setDate] = (0, react_1.useState)({ month: (localTime ?? today).getMonth(), year: (localTime ?? today).getFullYear() });
    const [datePopoverActive, setDatePopoverActive] = (0, react_1.useState)(false);
    const onDateChange = (0, react_1.useCallback)((range) => {
        const date = new Date(range.start);
        localTime && copyTime(date, localTime);
        onChange((0, date_fns_tz_1.zonedTimeToUtc)(date, localTz));
        setDatePopoverActive(false);
    }, [localTime, onChange]);
    // use a text field for the time input so any time can be entered
    // the text field needs to be able to pass through invalid time states as the user enters input, so we use a different state atom for it, and only call `onChange` with valid dates
    const [timeString, setTimeString] = (0, react_1.useState)(localTime ? getTimeString(localTime) : "");
    (0, react_1.useEffect)(() => {
        if (value) {
            setTimeString(getTimeString(value));
        }
    }, [value]);
    const onTimeStringChange = (0, react_1.useCallback)((newValue) => {
        setTimeString(newValue);
        const parsed = parseTimeString(timeString);
        if (parsed) {
            const date = localTime ? new Date(localTime) : new Date();
            copyTime(date, parsed);
            onChange((0, date_fns_tz_1.zonedTimeToUtc)(date, localTz));
        }
    }, [localTime, onChange, timeString]);
    const parseSuccess = !!parseTimeString(timeString);
    const [isTimeFocused, timeInputFocusProps] = (0, useFocus_1.useFocus)();
    const toggleDatePopoverActive = (0, react_1.useCallback)(() => setDatePopoverActive((v) => !v), []);
    const handleMonthChange = (0, react_1.useCallback)((month, year) => setDate({ month, year }), []);
    return (react_1.default.createElement(polaris_1.HorizontalStack, { gap: "4" },
        react_1.default.createElement(polaris_1.Popover, { preferredPosition: "above", active: datePopoverActive, activator: react_1.default.createElement(polaris_1.TextField, { id: props.id ? `${props.id}-date` : undefined, label: props.dateLabel ?? "Date", prefix: react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.CalendarMajor }), autoComplete: "off", value: localTime ? (0, date_fns_1.format)(localTime, "yyyy-MM-dd") : "", onFocus: toggleDatePopoverActive, error: props.error }), onClose: toggleDatePopoverActive },
            react_1.default.createElement("div", { style: { padding: "16px" } },
                react_1.default.createElement(polaris_1.DatePicker, { month: month, year: year, allowRange: false, onChange: onDateChange, onMonthChange: handleMonthChange, selected: props.value }))),
        props.includeTime && (react_1.default.createElement(polaris_1.TextField, { id: props.id ? `${props.id}-time` : undefined, label: props.timeLabel ?? "Time", prefix: react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.ClockMinor }), autoComplete: "off", value: timeString, onChange: onTimeStringChange, ...timeInputFocusProps, error: !parseSuccess && !isTimeFocused && `Invalid time, please enter a value like "11:00 AM"` }))));
};
exports.PolarisDateTimePicker = PolarisDateTimePicker;
//# sourceMappingURL=PolarisDateTimePicker.js.map