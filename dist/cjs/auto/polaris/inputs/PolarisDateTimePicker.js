"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisDateTimePicker = exports.copyTime = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const date_fns_1 = require("date-fns");
const date_fns_tz_1 = require("date-fns-tz");
const react_1 = tslib_1.__importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const PolarisTimePicker_js_1 = tslib_1.__importDefault(require("./PolarisTimePicker.js"));
const copyTime = (to, input) => {
    to.setHours(input.getHours());
    to.setMinutes(input.getMinutes());
    to.setSeconds(input.getSeconds());
    to.setMilliseconds(input.getMilliseconds());
};
exports.copyTime = copyTime;
const today = new Date();
const PolarisDateTimePicker = (props) => {
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const { field: fieldProps } = (0, react_hook_form_1.useController)({
        name: path,
    });
    const { onChange, value } = props;
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTime = value ? (0, date_fns_tz_1.utcToZonedTime)(value, localTz) : fieldProps.value;
    const [dateTimeState, setDateTimeState] = (0, react_1.useState)({
        month: (localTime ?? today).getMonth(),
        year: (localTime ?? today).getFullYear(),
        day: (localTime ?? today).getDay(),
        hour: (localTime ?? today).getHours().toString(),
        minute: (localTime ?? today).getMinutes().toString().padStart(2, "0"),
        ampm: (localTime ?? today).getHours() >= 12 ? "PM" : "AM",
    });
    const [datePopoverActive, setDatePopoverActive] = (0, react_1.useState)(false);
    const config = metadata.configuration;
    const onDateChange = (0, react_1.useCallback)((range) => {
        const date = new Date(range.start);
        localTime && (0, exports.copyTime)(date, localTime);
        onChange?.((0, date_fns_tz_1.zonedTimeToUtc)(date, localTz));
        fieldProps.onChange((0, date_fns_tz_1.zonedTimeToUtc)(date, localTz));
        setDatePopoverActive(false);
    }, [localTime, onChange, localTz, fieldProps]);
    const toggleDatePopoverActive = (0, react_1.useCallback)(() => setDatePopoverActive((active) => !active), []);
    const handleMonthChange = (0, react_1.useCallback)((month, year) => {
        setDateTimeState((prevState) => ({
            ...prevState,
            month,
            year,
        }));
        // setDateTimeState({ ...dateTimeState, month, year });
    }, []);
    return (react_1.default.createElement(polaris_1.InlineStack, { gap: "400" },
        react_1.default.createElement(polaris_1.Popover, { preferredPosition: "above", active: datePopoverActive, activator: react_1.default.createElement(polaris_1.TextField, { id: props.id ? `${props.id}-date` : undefined, label: metadata.name ?? "Date", prefix: react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.CalendarIcon }), autoComplete: "off", value: localTime ? (0, date_fns_1.format)(localTime, "yyyy-MM-dd") : "", onFocus: toggleDatePopoverActive, error: props.error }), onClose: toggleDatePopoverActive },
            react_1.default.createElement("div", { style: { padding: "16px" } },
                react_1.default.createElement(polaris_1.DatePicker, { month: dateTimeState.month, year: dateTimeState.year, allowRange: false, onChange: onDateChange, onMonthChange: handleMonthChange, selected: props.value, ...props.datePickerProps }))),
        (props.includeTime ?? config.includeTime) && (react_1.default.createElement(PolarisTimePicker_js_1.default, { ...props.timePickerProps, field: props.field, dateTimeState: dateTimeState, setDateTimeState: setDateTimeState, id: props.id, localTime: localTime, onChange: onChange, hideTimePopover: props.hideTimePopover, localTz: localTz }))));
};
exports.PolarisDateTimePicker = PolarisDateTimePicker;
//# sourceMappingURL=PolarisDateTimePicker.js.map