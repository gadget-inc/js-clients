import type { DatePickerProps } from "@shopify/polaris";
import { DatePicker, Icon, InlineStack, Popover, TextField } from "@shopify/polaris";
import { CalendarMajor, ClockMinor } from "@shopify/polaris-icons";
import { format } from "date-fns";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";
import React, { useCallback, useEffect, useState } from "react";
import { useFocus } from "../../useFocus.js";

const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

const getTimeString = (date: Date) => format(date, "K:m aa");

// Use a regular expression to extract hours, minutes, and AM/PM
const timeStringRegex = /(\d{1,2}):?(\d{0,2})\s*([APMapm]{0,2})/;

const parseTimeString = (timeString: string) => {
  const result = timeString.match(timeStringRegex);

  if (!result) {
    return null;
  }

  // eslint-disable-next-line prefer-const
  let [_, hoursStr, minutesStr, ampm] = result;

  // Convert extracted values to integers
  let hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10) || 0; // Default minutes to 0 if not provided

  // Handle AM/PM
  ampm = ampm.toLowerCase();

  if (ampm === "pm" && hours < 12) {
    hours += 12;
  } else if (ampm === "am" && hours === 12) {
    hours = 0;
  }

  // Get the current date to set the time
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);

  return date;
};

const copyTime = (to: Date, input: Date) => {
  to.setHours(input.getHours());
  to.setMinutes(input.getMinutes());
  to.setSeconds(input.getSeconds());
  to.setMilliseconds(input.getMilliseconds());
};

const today = new Date();
export const PolarisDateTimePicker = (props: {
  id?: string;
  value?: Date;
  includeTime?: boolean;
  dateLabel?: string;
  timeLabel?: string;
  onChange: (value: Date) => void;
  error?: string;
}) => {
  const { onChange, value } = props;
  const localTime = value ? utcToZonedTime(value, localTz) : undefined;
  const [{ month, year }, setDate] = useState({ month: (localTime ?? today).getMonth(), year: (localTime ?? today).getFullYear() });
  const [datePopoverActive, setDatePopoverActive] = useState(false);

  const onDateChange = useCallback<Exclude<DatePickerProps["onChange"], undefined>>(
    (range) => {
      const date = new Date(range.start);
      localTime && copyTime(date, localTime);
      onChange(zonedTimeToUtc(date, localTz));
      setDatePopoverActive(false);
    },
    [localTime, onChange]
  );

  // use a text field for the time input so any time can be entered
  // the text field needs to be able to pass through invalid time states as the user enters input, so we use a different state atom for it, and only call `onChange` with valid dates
  const [timeString, setTimeString] = useState(localTime ? getTimeString(localTime) : "");
  useEffect(() => {
    if (value) {
      setTimeString(getTimeString(value));
    }
  }, [value]);

  const onTimeStringChange = useCallback(
    (newValue: string) => {
      setTimeString(newValue);
      const parsed = parseTimeString(timeString);
      if (parsed) {
        const date = localTime ? new Date(localTime) : new Date();
        copyTime(date, parsed);
        onChange(zonedTimeToUtc(date, localTz));
      }
    },
    [localTime, onChange, timeString]
  );

  const parseSuccess = !!parseTimeString(timeString);
  const [isTimeFocused, timeInputFocusProps] = useFocus();
  const toggleDatePopoverActive = useCallback(() => setDatePopoverActive((v) => !v), []);
  const handleMonthChange = useCallback((month: number, year: number) => setDate({ month, year }), []);

  return (
    <InlineStack gap="400">
      <Popover
        preferredPosition="above"
        active={datePopoverActive}
        activator={
          <TextField
            id={props.id ? `${props.id}-date` : undefined}
            label={props.dateLabel ?? "Date"}
            prefix={<Icon source={CalendarMajor} />}
            autoComplete="off"
            value={localTime ? format(localTime, "yyyy-MM-dd") : ""}
            onFocus={toggleDatePopoverActive}
            error={props.error}
          />
        }
        onClose={toggleDatePopoverActive}
      >
        <div style={{ padding: "16px" }}>
          <DatePicker
            month={month}
            year={year}
            allowRange={false}
            onChange={onDateChange}
            onMonthChange={handleMonthChange}
            selected={props.value}
          />
        </div>
      </Popover>
      {props.includeTime && (
        <TextField
          id={props.id ? `${props.id}-time` : undefined}
          label={props.timeLabel ?? "Time"}
          prefix={<Icon source={ClockMinor} />}
          autoComplete="off"
          value={timeString}
          onChange={onTimeStringChange}
          {...timeInputFocusProps}
          error={!parseSuccess && !isTimeFocused && `Invalid time, please enter a value like "11:00 AM"`}
        />
      )}
    </InlineStack>
  );
};
