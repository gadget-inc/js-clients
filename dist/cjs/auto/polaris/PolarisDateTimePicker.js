"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisDateTimePicker = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const date_fns_1 = require("date-fns");
const date_fns_tz_1 = require("date-fns-tz");
const react_1 = tslib_1.__importStar(require("react"));
const today = new Date();
const PolarisDateTimePicker = (props) => {
    const { onChange, value } = props;
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTime = value ? (0, date_fns_tz_1.utcToZonedTime)(value, localTz) : undefined;
    const [{ month, year }, setDate] = (0, react_1.useState)({ month: (localTime ?? today).getMonth(), year: (localTime ?? today).getFullYear() });
    const [datePopoverActive, setDatePopoverActive] = (0, react_1.useState)(false);
    const [timeString, setTimeString] = (0, react_1.useState)(localTime ? (0, date_fns_1.format)(localTime, "HH:mm") : "");
    const [popoverActive, setPopoverActive] = (0, react_1.useState)(false);
    const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
    const mins = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
    const ampm = ["AM", "PM"];
    const [hourSelected, setHourSelected] = (0, react_1.useState)(hours[0]);
    const [minSelected, setMinSelected] = (0, react_1.useState)(mins[0]);
    const [ampmSelected, setAmpmSelected] = (0, react_1.useState)(ampm[0]);
    const onDateChange = (0, react_1.useCallback)((range) => {
        const date = new Date(range.start);
        onChange((0, date_fns_tz_1.zonedTimeToUtc)(date, localTz));
        setDatePopoverActive(false);
    }, [onChange, localTz]);
    const toggleDatePopoverActive = (0, react_1.useCallback)(() => setDatePopoverActive((active) => !active), []);
    const handleMonthChange = (0, react_1.useCallback)((month, year) => {
        setDate({ month, year });
    }, []);
    const onTimeStringChange = (0, react_1.useCallback)((newTimeString) => {
        setTimeString(newTimeString);
        const [hours, minutes] = newTimeString.split(":").map((part) => parseInt(part, 10));
        if (isNaN(hours) || isNaN(minutes)) {
            return;
        }
        const newTime = new Date(localTime ?? today);
        newTime.setHours(hours, minutes);
        onChange((0, date_fns_tz_1.zonedTimeToUtc)(newTime, localTz));
    }, [localTime, localTz, onChange]);
    const createMarkup = (items, selectedState) => {
        return items.map((item, i) => {
            return (react_1.default.createElement("div", { key: i, style: { textAlign: "center", margin: "0px" } },
                react_1.default.createElement(polaris_1.Listbox.Option, { value: item, selected: item === selectedState }, item)));
        });
    };
    return (react_1.default.createElement(polaris_1.InlineStack, { gap: "400" },
        react_1.default.createElement(polaris_1.Popover, { preferredPosition: "above", active: datePopoverActive, activator: react_1.default.createElement(polaris_1.TextField, { id: props.id ? `${props.id}-date` : undefined, label: props.dateLabel ?? "Date", prefix: react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.CalendarIcon }), autoComplete: "off", value: localTime ? (0, date_fns_1.format)(localTime, "yyyy-MM-dd") : "", onFocus: toggleDatePopoverActive, error: props.error }), onClose: toggleDatePopoverActive },
            react_1.default.createElement("div", { style: { padding: "16px" } },
                react_1.default.createElement(polaris_1.DatePicker, { month: month, year: year, allowRange: false, onChange: onDateChange, onMonthChange: handleMonthChange, selected: props.value }))),
        props.includeTime && (react_1.default.createElement(polaris_1.Popover, { active: popoverActive, onClose: () => setPopoverActive(false), activator: react_1.default.createElement(polaris_1.TextField, { prefix: react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.ClockIcon }), id: props.id ? `${props.id}-time` : undefined, label: props.timeLabel ?? "Time", autoComplete: "off", value: timeString, onChange: onTimeStringChange, onFocus: () => setPopoverActive(true) }) },
            react_1.default.createElement("div", { style: { overflow: "hidden", padding: "15px 8px" } },
                react_1.default.createElement("div", { style: { display: "flex" } },
                    react_1.default.createElement("div", { style: { overflowY: "scroll", height: "250px" } },
                        react_1.default.createElement(polaris_1.Listbox, { onSelect: (value) => {
                                setHourSelected(value);
                                setTimeString(`${value}:${minSelected} ${ampmSelected}`);
                            } }, createMarkup(hours, hourSelected))),
                    react_1.default.createElement("div", { style: { overflowY: "scroll", height: "250px" } },
                        react_1.default.createElement(polaris_1.Listbox, { onSelect: (value) => {
                                setMinSelected(value);
                                setTimeString(`${hourSelected}:${value} ${ampmSelected}`);
                            } }, createMarkup(mins, minSelected))),
                    react_1.default.createElement("div", { style: { overflowY: "scroll", height: "250px" } },
                        react_1.default.createElement(polaris_1.Listbox, { onSelect: (value) => {
                                setAmpmSelected(value);
                                setTimeString(`${hourSelected}:${minSelected} ${value}`);
                            } }, createMarkup(ampm, ampmSelected)))))))));
};
exports.PolarisDateTimePicker = PolarisDateTimePicker;
//# sourceMappingURL=PolarisDateTimePicker.js.map