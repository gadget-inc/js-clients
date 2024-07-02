import type { DatePickerProps } from "@shopify/polaris";
import { Box, DatePicker, Icon, InlineStack, Listbox, Popover, TextField } from "@shopify/polaris";
import { CalendarIcon, ClockIcon } from "@shopify/polaris-icons";
import { format } from "date-fns";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";
import React, { useCallback, useState } from "react";

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
  const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localTime = value ? utcToZonedTime(value, localTz) : undefined;
  const [{ month, year }, setDate] = useState({ month: (localTime ?? today).getMonth(), year: (localTime ?? today).getFullYear() });
  const [datePopoverActive, setDatePopoverActive] = useState(false);
  const [timeString, setTimeString] = useState(localTime ? format(localTime, "HH:mm") : "");
  const [popoverActive, setPopoverActive] = useState(false);
  const [timeParseError, setTimeParseError] = useState(false);

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
  const mins = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
  const ampm = ["AM", "PM"];
  const timeFormatRegex = new RegExp(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/);

  const [hourSelected, setHourSelected] = useState(hours[0]);
  const [minSelected, setMinSelected] = useState(mins[0]);
  const [ampmSelected, setAmpmSelected] = useState(ampm[0]);

  const onDateChange = useCallback<Exclude<DatePickerProps["onChange"], undefined>>(
    (range) => {
      const date = new Date(range.start);
      onChange(zonedTimeToUtc(date, localTz));
      setDatePopoverActive(false);
    },
    [onChange, localTz]
  );

  const toggleDatePopoverActive = useCallback(() => setDatePopoverActive((active) => !active), []);
  const handleMonthChange = useCallback((month: number, year: number) => {
    setDate({ month, year });
  }, []);

  const onTimeStringChange = (value: string) => {
    setTimeString(value);
    const trimmedValue = value.trim();
    if (!timeFormatRegex.test(trimmedValue)) {
      setTimeParseError(true);
      return;
    }
    setTimeParseError(false);
    const [hours, minutes] = trimmedValue.split(":").map((part) => parseInt(part, 10));
    const newAmpm = trimmedValue.slice(-2).toUpperCase();
    if (isNaN(hours) || isNaN(minutes) || !ampm.includes(newAmpm)) {
      return;
    }
    const newTime = new Date(localTime ?? today);
    newTime.setHours(hours, minutes);
    onChange(zonedTimeToUtc(newTime, localTz));

    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMins = minutes.toString().padStart(2, "0");
    setHourSelected(paddedHours);
    setMinSelected(paddedMins);
    setAmpmSelected(newAmpm);
    setTimeString(`${paddedHours}:${paddedMins} ${newAmpm}`);
  };

  const createMarkup = (items: string[], selectedState: string) => {
    return items.map((item, i) => {
      return (
        <div key={i} style={{ textAlign: "center", cursor: "default", padding: "0px 4px" }}>
          <Listbox.Option value={item}>
            {selectedState === item ? (
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

  return (
    <InlineStack gap="400">
      <Popover
        preferredPosition="above"
        active={datePopoverActive}
        activator={
          <TextField
            id={props.id ? `${props.id}-date` : undefined}
            label={props.dateLabel ?? "Date"}
            prefix={<Icon source={CalendarIcon} />}
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
        <Popover
          active={popoverActive}
          onClose={() => setPopoverActive(false)}
          activator={
            <TextField
              prefix={<Icon source={ClockIcon} />}
              id={props.id ? `${props.id}-time` : undefined}
              label={props.timeLabel ?? "Time"}
              autoComplete="off"
              value={timeString}
              onChange={onTimeStringChange}
              onFocus={() => setPopoverActive(true)}
              error={timeParseError && `Invalid time format`}
            />
          }
        >
          <div style={{ overflow: "hidden", padding: "15px 8px" }}>
            <div style={{ display: "flex" }}>
              <div style={{ overflowY: "scroll", height: "250px" }}>
                <Listbox
                  onSelect={(value: string) => {
                    setHourSelected(value);
                    const newTime = `${value}:${minSelected} ${ampmSelected}`;
                    setTimeString(newTime);
                    setTimeParseError(!timeFormatRegex.test(newTime));
                  }}
                >
                  {createMarkup(hours, hourSelected)}
                </Listbox>
              </div>
              <div style={{ overflowY: "scroll", height: "250px" }}>
                <Listbox
                  onSelect={(value: string) => {
                    setMinSelected(value);
                    const newTime = `${hourSelected}:${value} ${ampmSelected}`;
                    setTimeString(newTime);
                    setTimeParseError(!timeFormatRegex.test(newTime));
                  }}
                >
                  {createMarkup(mins, minSelected)}
                </Listbox>
              </div>
              <div style={{ overflowY: "scroll", height: "250px" }}>
                <Listbox
                  onSelect={(value: string) => {
                    setAmpmSelected(value);
                    const newTime = `${hourSelected}:${minSelected} ${value}`;
                    setTimeString(newTime);
                    setTimeParseError(!timeFormatRegex.test(newTime));
                  }}
                >
                  {createMarkup(ampm, ampmSelected)}
                </Listbox>
              </div>
            </div>
          </div>
        </Popover>
      )}
    </InlineStack>
  );
};
