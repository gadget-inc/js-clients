import type { TextFieldProps } from "@shopify/polaris";
import { Box, Icon, Listbox, Popover, Scrollable, TextField } from "@shopify/polaris";
import { ClockIcon } from "@shopify/polaris-icons";
import { zonedTimeToUtc } from "date-fns-tz";
import React, { useEffect, useState } from "react";
import type { ControllerRenderProps, FieldValues } from "react-hook-form";
import { copyTime, getDateFromDateTimeObject, getDateTimeObjectFromDate } from "./PolarisAutoDateTimePicker.js";

const createMarkup = (items: string[], selectedState: string) => {
  return items.map((item, i) => {
    return (
      <div key={i} style={{ textAlign: "center", cursor: "default", padding: "0px 4px" }}>
        <Listbox.Option value={item}>
          {selectedState.padStart(2, "0") === item.padStart(2, "0") || (parseInt(selectedState, 10) === 0 && item === "12") ? (
            <Box padding="100" background="bg-surface-secondary-selected" borderRadius="200" minHeight="30px" minWidth="30px">
              {item}
            </Box>
          ) : (
            <Box minHeight="30px" minWidth="30px" padding="100">
              {item}
            </Box>
          )}
        </Listbox.Option>
      </div>
    );
  });
};

const hoursArr = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
const minsArr = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
const ampmArr = ["AM", "PM"];

const timeFormatRegex = new RegExp(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/);

const getTimeString = (dateTime: DateTimeState) => {
  if (parseInt(dateTime.hour, 10) === 0) {
    return `12:${dateTime.minute.padStart(2, "0")} AM`;
  }
  return `${dateTime.hour}:${dateTime.minute.padStart(2, "0")} ${dateTime.ampm}`;
};

export interface DateTimeState {
  month: number;
  year: number;
  day: number;
  hour: string;
  minute: string;
  ampm: string;
}

type DateTimeKey = keyof DateTimeState;

const PolarisAutoTimePicker = (props: {
  fieldProps: ControllerRenderProps<FieldValues, string>;
  onChange?: (value: Date) => void;
  localTime?: Date;
  id?: string;
  timePickerProps?: Partial<TextFieldProps>;
  hideTimePopover?: boolean;
  localTz?: string;
}) => {
  const defaultDate = props.fieldProps.value ? props.fieldProps.value : props.localTime;
  const [timeString, setTimeString] = useState(defaultDate ? getTimeString(getDateTimeObjectFromDate(defaultDate)) : "");
  const [timePopoverActive, setTimePopoverActive] = useState(false);
  const [timeParseError, setTimeParseError] = useState(false);
  const setHourSelected = (hour: string) =>
    props.fieldProps.onChange(getDateFromDateTimeObject({ ...getDateTimeObjectFromDate(props.fieldProps.value ?? new Date()), hour }));
  const setMinSelected = (minute: string) =>
    props.fieldProps.onChange(getDateFromDateTimeObject({ ...getDateTimeObjectFromDate(props.fieldProps.value ?? new Date()), minute }));
  const setAmpmSelected = (ampm: string) =>
    props.fieldProps.onChange(getDateFromDateTimeObject({ ...getDateTimeObjectFromDate(props.fieldProps.value ?? new Date()), ampm }));

  const onTimeStringChange = (value: string) => {
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
    } else if (newAmpm === "AM" && hours === 12) {
      hours = 0;
    }

    parsedDate.setHours(hours, minutes, 0, 0);
    const date = props.localTime ? new Date(props.localTime) : new Date();

    copyTime(date, parsedDate);

    props.onChange?.(zonedTimeToUtc(date, props.localTz ?? "UTC"));
    props.fieldProps.onChange(zonedTimeToUtc(date, props.localTz ?? "UTC"));

    setTimeString(`${parseInt(hoursStr, 10) === 0 ? "12" : hoursStr}:${paddedMins} ${newAmpm}`);
  };

  const hourTimeFormatter = (value: string) => {
    return `${value}:${
      props.fieldProps.value ? getDateTimeObjectFromDate(props.fieldProps.value).minute.toString().padStart(2, "0") : minsArr[0]
    } ${props.fieldProps.value ? getDateTimeObjectFromDate(props.fieldProps.value).ampm : ampmArr[0]}`;
  };

  const minTimeFormatter = (value: string) => {
    return `${props.fieldProps.value ? getDateTimeObjectFromDate(props.fieldProps.value).hour : hoursArr[0]}:${value.padStart(2, "0")} ${
      props.fieldProps.value ? getDateTimeObjectFromDate(props.fieldProps.value).ampm : ampmArr[0]
    }`;
  };

  const ampmTimeFormatter = (value: string) => {
    return `${props.fieldProps.value ? getDateTimeObjectFromDate(props.fieldProps.value).hour : hoursArr[0]}:${
      props.fieldProps.value ? getDateTimeObjectFromDate(props.fieldProps.value).minute.toString().padStart(2, "0") : minsArr[0]
    } ${value}`;
  };

  const hourProps = { array: hoursArr, formatter: hourTimeFormatter, key: "hour" as DateTimeKey };
  const minProps = { array: minsArr, formatter: minTimeFormatter, key: "minute" as DateTimeKey };
  const ampmProps = { array: ampmArr, formatter: ampmTimeFormatter, key: "ampm" as DateTimeKey };

  useEffect(() => {
    if (!props.fieldProps.value) return;
    setTimeString(getTimeString(getDateTimeObjectFromDate(props.fieldProps.value)));
  }, [props.fieldProps.value]);

  return (
    <>
      <Popover
        active={timePopoverActive}
        onClose={() => setTimePopoverActive(false)}
        activator={
          <TextField
            prefix={<Icon source={ClockIcon} />}
            id={props.id ? `${props.id}-time` : undefined}
            data-testid={props.id ? `${props.id}-time` : undefined}
            label={props.timePickerProps?.label ?? "Time"}
            autoComplete="off"
            value={timeString}
            onChange={onTimeStringChange}
            onFocus={() => setTimePopoverActive(true)}
            error={timeParseError && `Invalid time format`}
            {...props.timePickerProps}
          />
        }
      >
        {!props.hideTimePopover && (
          <div style={{ overflow: "hidden", padding: "15px 8px" }}>
            <div style={{ display: "flex" }}>
              {[hourProps, minProps, ampmProps].map((timeComponentProps, i) => (
                <Scrollable key={i} style={{ overflowY: "scroll", height: "250px" }}>
                  <Listbox onSelect={(value: string) => onTimeStringChange(timeComponentProps.formatter(value))}>
                    {createMarkup(
                      timeComponentProps.array,
                      props.fieldProps.value
                        ? `${getDateTimeObjectFromDate(props.fieldProps.value)[timeComponentProps.key]}`
                        : timeComponentProps.array[0]
                    )}
                  </Listbox>
                </Scrollable>
              ))}
            </div>
          </div>
        )}
      </Popover>
    </>
  );
};

export default PolarisAutoTimePicker;
