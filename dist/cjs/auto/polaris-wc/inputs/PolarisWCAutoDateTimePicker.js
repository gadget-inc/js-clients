"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoDateTimePicker = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const dateTimeUtils_js_1 = require("../../../dateTimeUtils.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useDateTimeField_js_1 = require("../../hooks/useDateTimeField.js");
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
exports.PolarisWCAutoDateTimePicker = (0, AutoInput_js_1.autoInput)((props) => {
    const { localTz, localTime, fieldProps, metadata, fieldState } = (0, useDateTimeField_js_1.useDateTimeField)(props);
    const { onChange, value } = fieldProps;
    const config = metadata.configuration;
    const includeTime = config.includeTime && !props.hideTime;
    const handleDateChange = (0, react_1.useCallback)((event) => {
        const target = event.currentTarget;
        const dateValue = target.value;
        if (!dateValue) {
            onChange(null);
            return;
        }
        // Parse the date string (YYYY-MM-DD format from date input)
        const [year, month, day] = dateValue.split("-").map(Number);
        const newDate = new Date(year, month - 1, day);
        // Preserve existing time if there is one
        if (value && (0, dateTimeUtils_js_1.isValidDate)(new Date(value))) {
            const existingDate = (0, dateTimeUtils_js_1.utcToZonedTime)(new Date(value), localTz);
            newDate.setHours(existingDate.getHours());
            newDate.setMinutes(existingDate.getMinutes());
            newDate.setSeconds(existingDate.getSeconds());
            newDate.setMilliseconds(existingDate.getMilliseconds());
        }
        onChange((0, dateTimeUtils_js_1.zonedTimeToUtc)(newDate, localTz));
    }, [onChange, value, localTz]);
    const handleTimeChange = (0, react_1.useCallback)((event) => {
        const target = event.currentTarget;
        const timeValue = target.value;
        if (!timeValue || !value) {
            return;
        }
        // Parse the time string (HH:MM format from time input)
        const [hours, minutes] = timeValue.split(":").map(Number);
        const currentDate = (0, dateTimeUtils_js_1.utcToZonedTime)(new Date(value), localTz);
        currentDate.setHours(hours);
        currentDate.setMinutes(minutes);
        onChange((0, dateTimeUtils_js_1.zonedTimeToUtc)(currentDate, localTz));
    }, [onChange, value, localTz]);
    // Format date for the input (YYYY-MM-DD)
    const dateInputValue = localTime
        ? `${localTime.getFullYear()}-${String(localTime.getMonth() + 1).padStart(2, "0")}-${String(localTime.getDate()).padStart(2, "0")}`
        : "";
    // Format time for the input (HH:MM)
    const timeInputValue = localTime
        ? `${String(localTime.getHours()).padStart(2, "0")}:${String(localTime.getMinutes()).padStart(2, "0")}`
        : "";
    return (react_1.default.createElement("div", { style: { display: "flex", gap: "16px", alignItems: "flex-start" } },
        react_1.default.createElement("s-date-field", { id: props.id ? `${props.id}-date` : undefined, label: typeof props.label === "string" ? props.label : String(metadata.name ?? "Date"), value: dateInputValue, required: metadata.requiredArgumentForInput, error: props.error ?? fieldState.error?.message, onChange: handleDateChange }),
        includeTime && (react_1.default.createElement("div", { style: { width: "130px" } },
            react_1.default.createElement("s-text-field", { id: props.id ? `${props.id}-time` : undefined, label: "Time", ...{ type: "time" }, value: timeInputValue, onChange: handleTimeChange })))));
});
//# sourceMappingURL=PolarisWCAutoDateTimePicker.js.map