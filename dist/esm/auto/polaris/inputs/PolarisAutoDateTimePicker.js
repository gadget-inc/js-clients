import { DatePicker, Icon, InlineStack, Popover, TextField } from "@shopify/polaris";
import { CalendarIcon } from "@shopify/polaris-icons";
import React, { useCallback, useState } from "react";
import { copyTime, formatShortDateString, getDateTimeObjectFromDate, isValidDate, utcToZonedTime, zonedTimeToUtc, } from "../../../dateTimeUtils.js";
import { autoInput } from "../../AutoInput.js";
import { useDateTimeField } from "../../hooks/useDateTimeField.js";
import PolarisAutoTimePicker from "./PolarisAutoTimePicker.js";
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
export const PolarisAutoDateTimePicker = autoInput((props) => {
    const { localTz, localTime, fieldProps, metadata, fieldState } = useDateTimeField(props);
    const { onChange, value } = fieldProps;
    const [datePopoverActive, setDatePopoverActive] = useState(false);
    const [popoverMonth, setPopoverMonth] = useState(getDateTimeObjectFromDate(localTime ?? utcToZonedTime(new Date(), localTz)).month);
    const [popoverYear, setPopoverYear] = useState(getDateTimeObjectFromDate(localTime ?? utcToZonedTime(new Date(), localTz)).year);
    const config = metadata.configuration;
    const onDateChange = useCallback((range) => {
        value && copyTime(range.start, zonedTimeToUtc(range.start, localTz));
        const dateOverride = value;
        if (isValidDate(dateOverride)) {
            range.start.setHours(dateOverride.getHours());
            range.start.setMinutes(dateOverride.getMinutes());
            range.start.setSeconds(dateOverride.getSeconds());
            range.start.setMilliseconds(dateOverride.getMilliseconds());
        }
        onChange?.(zonedTimeToUtc(range.start, localTz));
        fieldProps.onChange(zonedTimeToUtc(range.start, localTz));
        setDatePopoverActive(false);
    }, [fieldProps, value, localTz, onChange]);
    const toggleDatePopoverActive = useCallback(() => {
        setPopoverMonth(getDateTimeObjectFromDate(isValidDate(localTime) && localTime ? localTime : new Date()).month);
        setPopoverYear(getDateTimeObjectFromDate(isValidDate(localTime) && localTime ? localTime : new Date()).year);
        setDatePopoverActive((active) => !active);
    }, [localTime]);
    const handleMonthChange = useCallback((month, year) => {
        setPopoverMonth(month);
        setPopoverYear(year);
    }, []);
    return (React.createElement(InlineStack, { gap: "400" },
        React.createElement(Popover, { preferredPosition: "above", active: datePopoverActive, activator: React.createElement(TextField, { id: props.id ? `${props.id}-date` : undefined, label: props.label ?? metadata.name ?? "Date", prefix: React.createElement(Icon, { source: CalendarIcon }), autoComplete: "off", value: localTime ? formatShortDateString(localTime) : "", onFocus: toggleDatePopoverActive, requiredIndicator: metadata.requiredArgumentForInput, error: props.error ?? fieldState.error?.message }), onClose: toggleDatePopoverActive },
            React.createElement("div", { style: { padding: "16px" } },
                React.createElement(DatePicker, { month: popoverMonth, year: popoverYear, allowRange: false, onChange: onDateChange, onMonthChange: handleMonthChange, selected: localTime ?? new Date(), ...props.datePickerProps }))),
        config.includeTime && (React.createElement("div", { style: { width: "130px" } },
            React.createElement(PolarisAutoTimePicker, { fieldProps: fieldProps, id: props.id, hideTimePopover: props.hideTimePopover, localTz: localTz, timePickerProps: props.timePickerProps })))));
});
//# sourceMappingURL=PolarisAutoDateTimePicker.js.map