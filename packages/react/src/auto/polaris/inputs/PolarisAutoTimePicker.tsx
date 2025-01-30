import type { TextFieldProps } from "@shopify/polaris";
import { Box, Icon, Listbox, Popover, Scrollable, Text, TextField } from "@shopify/polaris";
import { ClockIcon } from "@shopify/polaris-icons";
import React, { useEffect, useState } from "react";
import {
  copyTime,
  getDateFromDateTimeObject,
  getDateTimeObjectFromDate,
  getTimeString,
  timeFormatRegex,
  zonedTimeToUtc,
} from "../../../dateTimeUtils.js";
import type { ControllerRenderProps, FieldValues } from "../../../useActionForm.js";

const createMarkup = (
  items: string[],
  selectedState: string,
  colNum: number,
  selectCoord: { col: number; row: number },
  setSelectCoord: React.Dispatch<React.SetStateAction<{ col: number; row: number }>>
) => {
  return items.map((item, i) => {
    return (
      <div key={i} style={{ textAlign: "center", cursor: "default", padding: "0px 4px" }}>
        <Listbox.Option value={item}>
          <div
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setSelectCoord({ col: colNum, row: i })}
            onMouseLeave={() => setSelectCoord({ col: -1, row: -1 })}
          >
            {selectedState.padStart(2, "0") == item.padStart(2, "0") ||
            (parseInt(selectedState, 10) == 0 && item == "12") ||
            (selectCoord?.col == colNum && selectCoord.row == i) ? (
              <Box padding="100" background="bg-inverse" borderRadius="200" minHeight="30px" minWidth="30px">
                <Text as="p" tone="text-inverse">
                  {item}
                </Text>
              </Box>
            ) : (
              <Box minHeight="30px" minWidth="30px" padding="100">
                {item}
              </Box>
            )}
          </div>
        </Listbox.Option>
      </div>
    );
  });
};

const hoursArr = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
const minsArr = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
const ampmArr = ["AM", "PM"];

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
  value?: Date;
  onChange?: (value: Date) => void;
  localTime?: Date;
  id?: string;
  timePickerProps?: Partial<TextFieldProps>;
  hideTimePopover?: boolean;
  localTz?: string;
}) => {
  const [valueProp, setValueProp] = useState(props.value);
  const [timeString, setTimeString] = useState(props.localTime ? getTimeString(getDateTimeObjectFromDate(props.localTime)) : "");
  const [timePopoverActive, setTimePopoverActive] = useState(false);
  const [timeParseError, setTimeParseError] = useState(false);
  const [selectCoord, setSelectCoord] = useState({ col: -1, row: -1 });

  const setHourSelected = (hour: string) => {
    if (valueProp) {
      props.onChange?.(getDateFromDateTimeObject({ ...getDateTimeObjectFromDate(valueProp), hour }));
      return;
    }
    props.fieldProps.onChange(getDateFromDateTimeObject({ ...getDateTimeObjectFromDate(props.fieldProps.value ?? new Date()), hour }));
  };
  const setMinSelected = (minute: string) => {
    if (valueProp) {
      props.onChange?.(getDateFromDateTimeObject({ ...getDateTimeObjectFromDate(valueProp), minute }));
      return;
    }
    props.fieldProps.onChange(getDateFromDateTimeObject({ ...getDateTimeObjectFromDate(props.fieldProps.value ?? new Date()), minute }));
  };
  const setAmpmSelected = (ampm: string) => {
    if (valueProp) {
      props.onChange?.(getDateFromDateTimeObject({ ...getDateTimeObjectFromDate(valueProp), ampm }));
      return;
    }
    props.fieldProps.onChange(getDateFromDateTimeObject({ ...getDateTimeObjectFromDate(props.fieldProps.value ?? new Date()), ampm }));
  };

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
    if (valueProp) {
      setValueProp(zonedTimeToUtc(date, props.localTz ?? "UTC"));
    }

    setTimeString(`${parseInt(hoursStr, 10) === 0 ? "12" : hoursStr}:${paddedMins} ${newAmpm}`);
  };

  const hourTimeFormatter = (value: string) => {
    const defaultValue = valueProp ?? props.fieldProps.value;
    return `${value}:${defaultValue ? getDateTimeObjectFromDate(defaultValue).minute.toString().padStart(2, "0") : minsArr[0]} ${
      defaultValue ? getDateTimeObjectFromDate(defaultValue).ampm : ampmArr[0]
    }`;
  };

  const minTimeFormatter = (value: string) => {
    const defaultValue = valueProp ?? props.fieldProps.value;
    return `${defaultValue ? getDateTimeObjectFromDate(defaultValue).hour : hoursArr[0]}:${value.padStart(2, "0")} ${
      defaultValue ? getDateTimeObjectFromDate(defaultValue).ampm : ampmArr[0]
    }`;
  };

  const ampmTimeFormatter = (value: string) => {
    const defaultValue = valueProp ?? props.fieldProps.value;
    return `${defaultValue ? getDateTimeObjectFromDate(defaultValue).hour : hoursArr[0]}:${
      defaultValue ? getDateTimeObjectFromDate(defaultValue).minute.toString().padStart(2, "0") : minsArr[0]
    } ${value}`;
  };

  const hourProps = {
    array: hoursArr,
    formatter: hourTimeFormatter,
    key: "hour" as DateTimeKey,
  };
  const minProps = {
    array: minsArr,
    formatter: minTimeFormatter,
    key: "minute" as DateTimeKey,
  };
  const ampmProps = {
    array: ampmArr,
    formatter: ampmTimeFormatter,
    key: "ampm" as DateTimeKey,
  };

  useEffect(() => {
    if (!props.fieldProps.value || valueProp) return;
    setTimeString(getTimeString(getDateTimeObjectFromDate(new Date(props.fieldProps.value))));
  }, [props.fieldProps.value, valueProp, setTimeString]);

  return (
    <>
      <Popover
        active={timePopoverActive}
        onClose={() => setTimePopoverActive(false)}
        preferredAlignment="right"
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
        <Popover.Pane fixed>
          {!props.hideTimePopover && (
            <div style={{ overflow: "hidden", padding: "15px 8px" }}>
              <div style={{ display: "flex" }}>
                {[hourProps, minProps, ampmProps].map((timeComponentProps, i) => (
                  <Scrollable key={i} style={{ overflowY: "scroll", height: "250px" }}>
                    <Listbox onSelect={(value: string) => onTimeStringChange(timeComponentProps.formatter(value))}>
                      {createMarkup(
                        timeComponentProps.array,
                        valueProp
                          ? `${getDateTimeObjectFromDate(valueProp)[timeComponentProps.key]}`
                          : props.fieldProps.value
                          ? `${getDateTimeObjectFromDate(new Date(props.fieldProps.value))[timeComponentProps.key]}`
                          : timeComponentProps.array[0],
                        i,
                        selectCoord,
                        setSelectCoord
                      )}
                    </Listbox>
                  </Scrollable>
                ))}
              </div>
            </div>
          )}
        </Popover.Pane>
      </Popover>
    </>
  );
};

export default PolarisAutoTimePicker;
