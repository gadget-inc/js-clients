import React, { useCallback } from "react";
import { isValidDate, utcToZonedTime, zonedTimeToUtc } from "../../../dateTimeUtils.js";
import type { GadgetDateTimeConfig } from "../../../internal/gql/graphql.js";
import { autoInput } from "../../AutoInput.js";
import { useDateTimeField } from "../../hooks/useDateTimeField.js";
import type { AutoDateTimeInputProps } from "../../shared/AutoInputTypes.js";

export interface PolarisWCAutoDateTimePickerProps extends AutoDateTimeInputProps {
  /**
   * The HTML ID of the DateTime field.
   */
  id?: string;
  /**
   * Hides the time input.
   */
  hideTime?: boolean;
}

/**
 * A date and time picker within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoDateTimePicker field="dueDate" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the DateTime field.
 * @param props.label - Label of the DateTime picker.
 * @param props.hideTime - Hide the time input.
 * @returns The AutoDateTimePicker component.
 */
export const PolarisWCAutoDateTimePicker = autoInput((props: PolarisWCAutoDateTimePickerProps) => {
  const { localTz, localTime, fieldProps, metadata, fieldState } = useDateTimeField(props);
  const { onChange, value } = fieldProps;

  const config = metadata.configuration as GadgetDateTimeConfig;
  const includeTime = config.includeTime && !props.hideTime;

  const handleDateChange = useCallback(
    (event: Event) => {
      const target = event.currentTarget as any;
      const dateValue = target.value;

      if (!dateValue) {
        onChange(null);
        return;
      }

      // Parse the date string (YYYY-MM-DD format from date input)
      const [year, month, day] = dateValue.split("-").map(Number);
      const newDate = new Date(year, month - 1, day);

      // Preserve existing time if there is one
      if (value && isValidDate(new Date(value))) {
        const existingDate = utcToZonedTime(new Date(value), localTz);
        newDate.setHours(existingDate.getHours());
        newDate.setMinutes(existingDate.getMinutes());
        newDate.setSeconds(existingDate.getSeconds());
        newDate.setMilliseconds(existingDate.getMilliseconds());
      }

      onChange(zonedTimeToUtc(newDate, localTz));
    },
    [onChange, value, localTz]
  );

  const handleTimeChange = useCallback(
    (event: Event) => {
      const target = event.currentTarget as any;
      const timeValue = target.value;

      if (!timeValue || !value) {
        return;
      }

      // Parse the time string (HH:MM format from time input)
      const [hours, minutes] = timeValue.split(":").map(Number);
      const currentDate = utcToZonedTime(new Date(value), localTz);
      currentDate.setHours(hours);
      currentDate.setMinutes(minutes);

      onChange(zonedTimeToUtc(currentDate, localTz));
    },
    [onChange, value, localTz]
  );

  // Format date for the input (YYYY-MM-DD)
  const dateInputValue = localTime
    ? `${localTime.getFullYear()}-${String(localTime.getMonth() + 1).padStart(2, "0")}-${String(localTime.getDate()).padStart(2, "0")}`
    : "";

  // Format time for the input (HH:MM)
  const timeInputValue = localTime
    ? `${String(localTime.getHours()).padStart(2, "0")}:${String(localTime.getMinutes()).padStart(2, "0")}`
    : "";

  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
      <s-date-field
        id={props.id ? `${props.id}-date` : undefined}
        label={typeof props.label === "string" ? props.label : String(metadata.name ?? "Date")}
        value={dateInputValue}
        required={metadata.requiredArgumentForInput}
        error={props.error ?? fieldState.error?.message}
        onChange={handleDateChange}
      />
      {includeTime && (
        <div style={{ width: "130px" }}>
          <s-text-field
            id={props.id ? `${props.id}-time` : undefined}
            label="Time"
            {...({ type: "time" } as any)}
            value={timeInputValue}
            onChange={handleTimeChange}
          />
        </div>
      )}
    </div>
  );
});
