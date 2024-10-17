import type { DatePickerProps, TextFieldProps } from "@shopify/polaris";
import { DatePicker, Icon, InlineStack, Popover, TextField } from "@shopify/polaris";
import { CalendarIcon } from "@shopify/polaris-icons";
import React, { useCallback, useMemo, useState } from "react";
import { useController } from "react-hook-form";
import { formatShortDateString, isValidDate, utcToZonedTime, zonedTimeToUtc } from "../../../dateTimeUtils.js";
import type { GadgetDateTimeConfig } from "../../../internal/gql/graphql.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import type { DateTimeState } from "./PolarisAutoTimePicker.js";
import PolarisAutoTimePicker from "./PolarisAutoTimePicker.js";

export const copyTime = (to: Date, input: Date) => {
  to.setHours(input.getHours());
  to.setMinutes(input.getMinutes());
  to.setSeconds(input.getSeconds());
  to.setMilliseconds(input.getMilliseconds());
};

export const getDateTimeObjectFromDate = (dateTime: Date) => {
  return {
    month: dateTime.getMonth(),
    year: dateTime.getFullYear(),
    day: dateTime.getDay(),
    hour: dateTime.getHours() > 12 ? (dateTime.getHours() - 12).toString() : dateTime.getHours().toString(),
    minute: dateTime.getMinutes().toString().padStart(2, "0"),
    ampm: dateTime.getHours() >= 12 ? "PM" : "AM",
  };
};

export const getDateFromDateTimeObject = (dateTime: DateTimeState) => {
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

export const PolarisAutoDateTimePicker = autoInput(
  (props: {
    field: string;
    id?: string;
    value?: Date;
    onChange?: (value: Date) => void;
    error?: string;
    includeTime?: boolean;
    hideTimePopover?: boolean;
    label?: string;
    datePickerProps?: Partial<DatePickerProps>;
    timePickerProps?: Partial<TextFieldProps>;
  }) => {
    const { path, metadata } = useFieldMetadata(props.field);

    const { field: fieldProps, fieldState } = useController({ name: path });

    const { onChange, value } = props;
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTime = useMemo(() => {
      return value ? value : isValidDate(new Date(fieldProps.value)) ? new Date(fieldProps.value) : undefined;
    }, [value, fieldProps.value]);

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
  }
);
