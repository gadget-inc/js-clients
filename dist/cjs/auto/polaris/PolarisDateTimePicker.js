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
    const onDateChange = (0, react_1.useCallback)((range) => {
        const date = new Date(range.start);
        onChange((0, date_fns_tz_1.zonedTimeToUtc)(date, localTz));
        setDatePopoverActive(false);
    }, [onChange, localTz]);
    const toggleDatePopoverActive = (0, react_1.useCallback)(() => setDatePopoverActive((active) => !active), []);
    const handleMonthChange = (0, react_1.useCallback)((month, year) => {
        setDate({ month, year });
    }, []);
    return (react_1.default.createElement(polaris_1.InlineStack, { gap: "400" },
        react_1.default.createElement(polaris_1.Popover, { preferredPosition: "above", active: datePopoverActive, activator: react_1.default.createElement(polaris_1.TextField, { id: props.id ? `${props.id}-date` : undefined, label: props.dateLabel ?? "Date", prefix: react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.CalendarIcon }), autoComplete: "off", value: localTime ? (0, date_fns_1.format)(localTime, "yyyy-MM-dd") : "", onFocus: toggleDatePopoverActive, error: props.error }), onClose: toggleDatePopoverActive },
            react_1.default.createElement("div", { style: { padding: "16px" } },
                react_1.default.createElement(polaris_1.DatePicker, { month: month, year: year, allowRange: false, onChange: onDateChange, onMonthChange: handleMonthChange, selected: props.value })))));
};
exports.PolarisDateTimePicker = PolarisDateTimePicker;
//# sourceMappingURL=PolarisDateTimePicker.js.map