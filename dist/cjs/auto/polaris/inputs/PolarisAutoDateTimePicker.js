"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoDateTimePicker = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importStar(require("react"));
const dateTimeUtils_js_1 = require("../../../dateTimeUtils.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useDateTimeField_js_1 = require("../../hooks/useDateTimeField.js");
const PolarisAutoTimePicker_js_1 = tslib_1.__importDefault(require("./PolarisAutoTimePicker.js"));
/**
 * A date and time picker within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoDateTimePicker field="dueDate" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the DateTime field.
 * @param props.label - Label of the DateTime picker.
 * @param props.includeTime - Show the time picker component. Defaults to the metadata config.
 * @param props.hideTimePopover - Hide the time popover.
 * @param props.datePickerProps - Additional Polaris DatePicker props.
 * @param props.timePickerProps - Additional Polaris TimePicker props.
 * @returns The AutoDateTimePicker component.
 */
exports.PolarisAutoDateTimePicker = (0, AutoInput_js_1.autoInput)((props) => {
    const { localTz, localTime, fieldProps, metadata, fieldState } = (0, useDateTimeField_js_1.useDateTimeField)(props);
    const { onChange, value } = fieldProps;
    const [datePopoverActive, setDatePopoverActive] = (0, react_1.useState)(false);
    const [popoverMonth, setPopoverMonth] = (0, react_1.useState)((0, dateTimeUtils_js_1.getDateTimeObjectFromDate)(localTime ?? (0, dateTimeUtils_js_1.utcToZonedTime)(new Date(), localTz)).month);
    const [popoverYear, setPopoverYear] = (0, react_1.useState)((0, dateTimeUtils_js_1.getDateTimeObjectFromDate)(localTime ?? (0, dateTimeUtils_js_1.utcToZonedTime)(new Date(), localTz)).year);
    const config = metadata.configuration;
    const onDateChange = (0, react_1.useCallback)((range) => {
        value && (0, dateTimeUtils_js_1.copyTime)(range.start, (0, dateTimeUtils_js_1.zonedTimeToUtc)(range.start, localTz));
        const dateOverride = value;
        if ((0, dateTimeUtils_js_1.isValidDate)(dateOverride)) {
            range.start.setHours(dateOverride.getHours());
            range.start.setMinutes(dateOverride.getMinutes());
            range.start.setSeconds(dateOverride.getSeconds());
            range.start.setMilliseconds(dateOverride.getMilliseconds());
        }
        onChange?.((0, dateTimeUtils_js_1.zonedTimeToUtc)(range.start, localTz));
        fieldProps.onChange((0, dateTimeUtils_js_1.zonedTimeToUtc)(range.start, localTz));
        setDatePopoverActive(false);
    }, [fieldProps, value, localTz, onChange]);
    const toggleDatePopoverActive = (0, react_1.useCallback)(() => {
        setPopoverMonth((0, dateTimeUtils_js_1.getDateTimeObjectFromDate)((0, dateTimeUtils_js_1.isValidDate)(localTime) && localTime ? localTime : new Date()).month);
        setPopoverYear((0, dateTimeUtils_js_1.getDateTimeObjectFromDate)((0, dateTimeUtils_js_1.isValidDate)(localTime) && localTime ? localTime : new Date()).year);
        setDatePopoverActive((active) => !active);
    }, [localTime]);
    const handleMonthChange = (0, react_1.useCallback)((month, year) => {
        setPopoverMonth(month);
        setPopoverYear(year);
    }, []);
    return (react_1.default.createElement(polaris_1.InlineStack, { gap: "400" },
        react_1.default.createElement(polaris_1.Popover, { preferredPosition: "above", active: datePopoverActive, activator: react_1.default.createElement(polaris_1.TextField, { id: props.id ? `${props.id}-date` : undefined, label: props.label ?? metadata.name ?? "Date", prefix: react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.CalendarIcon }), autoComplete: "off", value: localTime ? (0, dateTimeUtils_js_1.formatShortDateString)(localTime) : "", onFocus: toggleDatePopoverActive, requiredIndicator: metadata.requiredArgumentForInput, error: props.error ?? fieldState.error?.message }), onClose: toggleDatePopoverActive },
            react_1.default.createElement("div", { style: { padding: "16px" } },
                react_1.default.createElement(polaris_1.DatePicker, { month: popoverMonth, year: popoverYear, allowRange: false, onChange: onDateChange, onMonthChange: handleMonthChange, selected: localTime ?? new Date(), ...props.datePickerProps }))),
        config.includeTime && (react_1.default.createElement("div", { style: { width: "130px" } },
            react_1.default.createElement(PolarisAutoTimePicker_js_1.default, { fieldProps: fieldProps, id: props.id, hideTimePopover: props.hideTimePopover, localTz: localTz, timePickerProps: props.timePickerProps })))));
});
//# sourceMappingURL=PolarisAutoDateTimePicker.js.map