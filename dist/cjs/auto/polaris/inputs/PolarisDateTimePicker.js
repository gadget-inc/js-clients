"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisDateTimePicker = exports.getDateFromDateTimeObject = exports.getDateTimeObjectFromDate = exports.copyTime = void 0;
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
const getDateTimeObjectFromDate = (dateTime) => {
    console.log("** date obj: ", dateTime);
    return {
        month: dateTime.getMonth(),
        year: dateTime.getFullYear(),
        day: dateTime.getDay(),
        hour: dateTime.getHours() > 12 ? (dateTime.getHours() - 12).toString() : dateTime.getHours().toString(),
        minute: dateTime.getMinutes().toString().padStart(2, "0"),
        ampm: dateTime.getHours() >= 12 ? "PM" : "AM",
    };
};
exports.getDateTimeObjectFromDate = getDateTimeObjectFromDate;
const getDateFromDateTimeObject = (dateTime) => {
    console.log("** dateTime: ", dateTime);
    const date = new Date();
    date.setMonth(dateTime.month);
    date.setFullYear(dateTime.year);
    date.setDate(dateTime.day);
    date.setHours(dateTime.ampm === "PM" ? parseInt(dateTime.hour) + 12 : parseInt(dateTime.hour));
    date.setMinutes(parseInt(dateTime.minute));
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
};
exports.getDateFromDateTimeObject = getDateFromDateTimeObject;
const PolarisDateTimePicker = (props) => {
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const { field: fieldProps } = (0, react_hook_form_1.useController)({
        name: path,
    });
    const { onChange, value } = props;
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTime = (0, react_1.useMemo)(() => {
        return value ? (0, date_fns_tz_1.utcToZonedTime)(value, localTz) : fieldProps.value ? new Date(fieldProps.value) : new Date();
    }, [value, fieldProps.value, localTz]);
    const [datePopoverActive, setDatePopoverActive] = (0, react_1.useState)(false);
    const config = metadata.configuration;
    const onDateChange = (0, react_1.useCallback)((range) => {
        const date = new Date(range.start);
        fieldProps && (0, exports.copyTime)(date, (0, date_fns_tz_1.zonedTimeToUtc)(new Date(fieldProps.value), localTz));
        onChange?.((0, date_fns_tz_1.zonedTimeToUtc)(date, localTz));
        fieldProps.onChange((0, date_fns_tz_1.zonedTimeToUtc)(date, localTz));
        setDatePopoverActive(false);
    }, [onChange, localTz, fieldProps]);
    const toggleDatePopoverActive = (0, react_1.useCallback)(() => setDatePopoverActive((active) => !active), []);
    const handleMonthChange = (0, react_1.useCallback)((month, year) => {
        fieldProps.onChange((0, exports.getDateFromDateTimeObject)({ ...(0, exports.getDateTimeObjectFromDate)(fieldProps.value), month, year }));
    }, [fieldProps]);
    return (react_1.default.createElement(polaris_1.InlineStack, { gap: "400" },
        react_1.default.createElement(polaris_1.Popover, { preferredPosition: "above", active: datePopoverActive, activator: react_1.default.createElement(polaris_1.TextField, { id: props.id ? `${props.id}-date` : undefined, label: metadata.name ?? "Date", prefix: react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.CalendarIcon }), autoComplete: "off", value: localTime ? (0, date_fns_1.format)(localTime, "yyyy-MM-dd") : "", onFocus: toggleDatePopoverActive, error: props.error }), onClose: toggleDatePopoverActive },
            react_1.default.createElement("div", { style: { padding: "16px" } },
                react_1.default.createElement(polaris_1.DatePicker, { month: (0, exports.getDateTimeObjectFromDate)((0, date_fns_tz_1.zonedTimeToUtc)(new Date(fieldProps.value), localTz)).month, year: (0, exports.getDateTimeObjectFromDate)((0, date_fns_tz_1.zonedTimeToUtc)(new Date(fieldProps.value), localTz)).year, allowRange: false, onChange: onDateChange, onMonthChange: handleMonthChange, selected: props.value, ...props.datePickerProps }))),
        (props.includeTime ?? config.includeTime) && (react_1.default.createElement(PolarisTimePicker_js_1.default, { fieldProps: fieldProps, id: props.id, localTime: localTime, onChange: onChange, hideTimePopover: props.hideTimePopover, localTz: localTz, timePickerProps: props.timePickerProps }))));
};
exports.PolarisDateTimePicker = PolarisDateTimePicker;
//# sourceMappingURL=PolarisDateTimePicker.js.map