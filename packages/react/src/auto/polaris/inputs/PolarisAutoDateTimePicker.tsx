import type { DatePickerProps, TextFieldProps } from "@shopify/polaris";
import { DatePicker, Icon, InlineStack, Popover, TextField } from "@shopify/polaris";
import { CalendarIcon } from "@shopify/polaris-icons";
import React, { useCallback, useState } from "react";
import {
  copyTime,
  formatShortDateString,
  getDateTimeObjectFromDate,
  isValidDate,
  utcToZonedTime,
  zonedTimeToUtc,
} from "../../../dateTimeUtils.js";
import type { GadgetDateTimeConfig } from "../../../internal/gql/graphql.js";
import { autoInput } from "../../AutoInput.js";
import { useDateTimeField } from "../../hooks/useDateTimeField.js";
import type { AutoDateTimeInputProps } from "../../shared/AutoInputTypes.js";
import PolarisAutoTimePicker from "./PolarisAutoTimePicker.js";

export interface PolarisAutoDateTimePickerProps extends AutoDateTimeInputProps {
  /**
   * The HTML ID of the DateTime field
   */
  id?: string;
  /**
   * Indicates if the time popover should be hidden
   */
  hideTimePopover?: boolean;
  /**
   * Props to pass to the Polaris DatePicker component
   */
  datePickerProps?: Partial<DatePickerProps>;
  /**
   * Props to pass to the Polaris TimePicker component
   */
  timePickerProps?: Partial<TextFieldProps>;
}

/**
 * A date and time picker for use within <AutoForm></AutoForm> components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoDateTimePicker field="dueDate" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the DateTime field.
 * @param props.label - The label of the date and time picker.
 * @param props.includeTime - Indicates if the the time picker component should be shown. Defaults to the value of the includeTime field metadata configuration.
 * @param props.hideTimePopover - Indicates if the time popover should be hidden.
 * @param props.datePickerProps - Additional props passed to the Polaris DatePicker component.
 * @param props.timePickerProps - Additional props passed to the Polaris TimePicker component.
 * @returns The date and time picker component.
 */
export const PolarisAutoDateTimePicker = autoInput((props: PolarisAutoDateTimePickerProps) => {
  const { localTz, localTime, onChange, value, fieldProps, metadata, fieldState } = useDateTimeField({
    field: props.field,
    value: props.value,
    onChange: props?.onChange,
  });

  const [datePopoverActive, setDatePopoverActive] = useState(false);

  const [popoverMonth, setPopoverMonth] = useState(getDateTimeObjectFromDate(localTime ?? utcToZonedTime(new Date(), localTz)).month);
  const [popoverYear, setPopoverYear] = useState(getDateTimeObjectFromDate(localTime ?? utcToZonedTime(new Date(), localTz)).year);

  const config = metadata.configuration;

  const onDateChange = useCallback<Exclude<DatePickerProps["onChange"], undefined>>(
    (range) => {
      (fieldProps || value) && copyTime(range.start, zonedTimeToUtc(range.start, localTz));
      const dateOverride = value ?? new Date(fieldProps.value);
      if (isValidDate(dateOverride)) {
        range.start.setHours(dateOverride.getHours());
        range.start.setMinutes(dateOverride.getMinutes());
        range.start.setSeconds(dateOverride.getSeconds());
        range.start.setMilliseconds(dateOverride.getMilliseconds());
      }
      onChange?.(zonedTimeToUtc(range.start, localTz));
      fieldProps.onChange(zonedTimeToUtc(range.start, localTz));
      setDatePopoverActive(false);
    },
    [fieldProps, value, localTz, onChange]
  );

  const toggleDatePopoverActive = useCallback(() => {
    setPopoverMonth(getDateTimeObjectFromDate(isValidDate(localTime) && localTime ? localTime : new Date()).month);
    setPopoverYear(getDateTimeObjectFromDate(isValidDate(localTime) && localTime ? localTime : new Date()).year);
    setDatePopoverActive((active) => !active);
  }, [localTime]);

  const handleMonthChange = useCallback((month: number, year: number) => {
    setPopoverMonth(month);
    setPopoverYear(year);
  }, []);

  return (
    <InlineStack gap="400">
      <Popover
        preferredPosition="above"
        active={datePopoverActive}
        activator={
          <TextField
            id={props.id ? `${props.id}-date` : undefined}
            label={props.label ?? metadata.name ?? "Date"}
            prefix={<Icon source={CalendarIcon} />}
            autoComplete="off"
            value={localTime ? formatShortDateString(localTime) : ""}
            onFocus={toggleDatePopoverActive}
            requiredIndicator={metadata.requiredArgumentForInput}
            error={props.error ?? fieldState.error?.message}
          />
        }
        onClose={toggleDatePopoverActive}
      >
        <div style={{ padding: "16px" }}>
          <DatePicker
            month={popoverMonth}
            year={popoverYear}
            allowRange={false}
            onChange={onDateChange}
            onMonthChange={handleMonthChange}
            selected={localTime ?? new Date()}
            {...props.datePickerProps}
          />
        </div>
      </Popover>
      {(props.includeTime ?? (config as GadgetDateTimeConfig).includeTime) && (
        <div style={{ width: "130px" }}>
          <PolarisAutoTimePicker
            fieldProps={fieldProps}
            id={props.id}
            localTime={localTime}
            onChange={onChange}
            hideTimePopover={props.hideTimePopover}
            localTz={localTz}
            timePickerProps={props.timePickerProps}
            value={value}
          />
        </div>
      )}
    </InlineStack>
  );
});
