import type { TextFieldProps } from "@shopify/polaris";
import { Box, Icon, Listbox, Popover, Scrollable, Text, TextField } from "@shopify/polaris";
import { ClockIcon } from "@shopify/polaris-icons";
import React, { useEffect, useState } from "react";
import { useHover } from "../../../auto/hooks/useHover.js";
import { getDateTimeObjectFromDate, getTimeString, isValidDate, timeFormatRegex, zonedTimeToUtc } from "../../../dateTimeUtils.js";
import type { ControllerRenderProps, FieldValues } from "../../../useActionForm.js";

const hoursArr = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
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

export interface PolarisAutoTimePickerProps {
  /**
   * React Hook Form ControllerRenderProps object that controls the DateTime field
   */
  fieldProps: ControllerRenderProps<FieldValues, string>;
  /**
   * The HTML ID of the DateTime field
   */
  id?: string;
  /**
   * Props to pass to the Polaris TimePicker component
   */
  timePickerProps?: Partial<TextFieldProps>;
  /**
   * Indicates if the time popover should be hidden
   */
  hideTimePopover?: boolean;
  /**
   * The local time zone of the DateTime field
   */
  localTz?: string;
}

const PolarisAutoTimePicker = (props: PolarisAutoTimePickerProps) => {
  const {
    fieldProps: { onChange, value },
  } = props;

  const [timeString, setTimeString] = useState(
    value && isValidDate(new Date(value)) ? getTimeString(getDateTimeObjectFromDate(value)) : ""
  );
  const [timePopoverActive, setTimePopoverActive] = useState(false);
  const [timeParseError, setTimeParseError] = useState(false);

  const onTimeStringChange = (newValue: string) => {
    setTimeString(newValue);

    let trimmedValue = newValue.trim();
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

    const minutes = parseInt(suffix, 10);
    const newAmpm = trimmedValue.slice(-2).toUpperCase();

    if (newAmpm === "PM" && hours < 12) {
      hours += 12;
    } else if (newAmpm === "AM" && hours === 12) {
      hours = 0;
    }

    const newDate = new Date();
    newDate.setHours(hours, minutes, 0, 0);

    if (!isValidDate(newDate)) {
      setTimeParseError(true);
      return;
    }

    setTimeParseError(false);
    onChange(zonedTimeToUtc(newDate, props.localTz ?? "UTC"));
  };

  const currentHour = value && isValidDate(new Date(value)) ? getDateTimeObjectFromDate(value).hour : hoursArr[0];
  const currentMinute = value && isValidDate(new Date(value)) ? getDateTimeObjectFromDate(value).minute.padStart(2, "0") : minsArr[0];
  const currentAmpm = value && isValidDate(new Date(value)) ? getDateTimeObjectFromDate(value).ampm : ampmArr[0];

  const hourProps = {
    array: hoursArr,
    formatter: (newValue: string) => `${newValue}:${currentMinute} ${currentAmpm}`,
    key: "hour" as DateTimeKey,
    selectedItem: currentHour,
  };
  const minProps = {
    array: minsArr,
    formatter: (newValue: string) => `${currentHour}:${newValue.padStart(2, "0")} ${currentAmpm}`,
    key: "minute" as DateTimeKey,
    selectedItem: currentMinute,
  };
  const ampmProps = {
    array: ampmArr,
    formatter: (newValue: string) => `${currentHour}:${currentMinute} ${newValue}`,
    key: "ampm" as DateTimeKey,
    selectedItem: currentAmpm,
  };

  useEffect(() => {
    if (!value) return;
    const dateValue = new Date(value);
    if (!isValidDate(dateValue)) return;
    setTimeString(getTimeString(getDateTimeObjectFromDate(dateValue)));
  }, [value, setTimeString]);

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
                      <TimeSelectionDropdownItems items={timeComponentProps.array} selectedItem={timeComponentProps.selectedItem} />
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

const TimeSelectionDropdownItems = (props: { items: string[]; selectedItem?: string }) => {
  const { items, selectedItem } = props;
  return items.map((item, i) => <DropdownItem key={`${i}-${item}`} item={item} isSelected={selectedItem === item} />);
};

const DropdownItem = ({ item, isSelected }: { item: string; isSelected: boolean }) => {
  const [isHovered, hoverProps] = useHover();
  return (
    <div style={{ textAlign: "center", cursor: "default", padding: "0px 4px" }}>
      <Listbox.Option value={item}>
        <div style={{ cursor: "pointer" }} {...hoverProps}>
          {isSelected || isHovered ? (
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
};
