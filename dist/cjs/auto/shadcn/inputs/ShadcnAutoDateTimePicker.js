"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoDateTimePicker = void 0;
const tslib_1 = require("tslib");
const react_icons_1 = require("@radix-ui/react-icons");
const react_1 = tslib_1.__importStar(require("react"));
const dateTimeUtils_js_1 = require("../../../dateTimeUtils.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useDateTimeField_js_1 = require("../../hooks/useDateTimeField.js");
const ShadcnRequired_js_1 = require("../ShadcnRequired.js");
const makeShadcnAutoDateTimePicker = ({ Button, Calendar, Label, Popover, PopoverTrigger, PopoverContent, }) => {
    function ShadcnAutoDateTimePicker(props) {
        const [timeParseError, setTimeParseError] = (0, react_1.useState)(false);
        const { localTz, localTime, onChange, value, fieldProps, metadata, fieldState } = (0, useDateTimeField_js_1.useDateTimeField)({
            field: props.field,
            value: props.value,
            onChange: props?.onChange,
        });
        const config = metadata.configuration;
        const onDateChange = (0, react_1.useCallback)((range) => {
            (fieldProps || value) && (0, dateTimeUtils_js_1.copyTime)(range, (0, dateTimeUtils_js_1.zonedTimeToUtc)(range, localTz));
            const dateOverride = value ?? new Date(fieldProps.value);
            if ((0, dateTimeUtils_js_1.isValidDate)(dateOverride)) {
                range.setHours(dateOverride.getHours());
                range.setMinutes(dateOverride.getMinutes());
                range.setSeconds(dateOverride.getSeconds());
                range.setMilliseconds(dateOverride.getMilliseconds());
            }
            onChange?.((0, dateTimeUtils_js_1.zonedTimeToUtc)(range, localTz));
            fieldProps.onChange((0, dateTimeUtils_js_1.zonedTimeToUtc)(range, localTz));
        }, [fieldProps, value, localTz, onChange]);
        const [date, setDate] = (0, react_1.useState)();
        const [isOpen, setIsOpen] = (0, react_1.useState)(false);
        const initialTimeString = (0, react_1.useMemo)(() => (localTime ? (0, dateTimeUtils_js_1.getTimeString)((0, dateTimeUtils_js_1.getDateTimeObjectFromDate)(localTime)) : ""), []);
        const [timeString, setTimeString] = (0, react_1.useState)(initialTimeString);
        const handleDateSelect = (selectedDate) => {
            if (selectedDate) {
                setDate(selectedDate);
                onDateChange?.(selectedDate);
            }
        };
        const handleTimeInput = (inputTimeString) => {
            setTimeString(inputTimeString.toUpperCase());
            if (!dateTimeUtils_js_1.timeFormatRegex.test(inputTimeString)) {
                setTimeParseError(true);
                return;
            }
            setTimeParseError(false);
            if (date) {
                const [time, period] = inputTimeString.split(" ");
                const [hours, minutes] = time.split(":").map(Number);
                const newDate = new Date(date);
                let adjustedHours = hours;
                if (period.toUpperCase() === "PM" && hours !== 12) {
                    adjustedHours = hours + 12;
                }
                else if (period.toUpperCase() === "AM" && hours === 12) {
                    adjustedHours = 0;
                }
                newDate.setHours(adjustedHours);
                newDate.setMinutes(minutes);
                setDate(newDate);
                onChange?.((0, dateTimeUtils_js_1.zonedTimeToUtc)(newDate, localTz));
                fieldProps.onChange((0, dateTimeUtils_js_1.zonedTimeToUtc)(newDate, localTz));
            }
        };
        return (react_1.default.createElement(Popover, { open: isOpen, onOpenChange: setIsOpen },
            react_1.default.createElement(PopoverTrigger, { type: "button", onClick: (e) => e.stopPropagation(), asChild: true },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(Label, { htmlFor: props.id ? `${props.id}-date` : undefined },
                        props.label ?? metadata.name ?? "Date",
                        metadata.requiredArgumentForInput && react_1.default.createElement(ShadcnRequired_js_1.ShadcnRequired, null, "*")),
                    react_1.default.createElement(Button, { id: props.id ? `${props.id}-date` : undefined, variant: "outline", className: `w-full justify-start text-left font-normal ${!date ? "text-muted-foreground" : ""}` },
                        react_1.default.createElement(react_icons_1.CalendarIcon, { className: "mr-2 h-4 w-4" }),
                        localTime ? ((0, dateTimeUtils_js_1.formatDate)(localTime, props.includeTime ?? config.includeTime)) : (react_1.default.createElement("span", { className: "opacity-50" }, (props.includeTime ?? config.includeTime) ? "YYYY-MM-DD hh:mm aa" : "YYYY-MM-DD"))),
                    (props.error || fieldState.error?.message) && (react_1.default.createElement(Label, { className: "text-red-500" }, props.error || fieldState.error?.message)))),
            react_1.default.createElement(PopoverContent, { className: "w-auto p-0 bg-white" },
                react_1.default.createElement("div", { className: "flex flex-row flex-nowrap" },
                    react_1.default.createElement(Calendar, { mode: "single", defaultMonth: localTime ?? date, selected: localTime ?? date, onSelect: handleDateSelect, initialFocus: true }),
                    (props.includeTime ?? config.includeTime) && (react_1.default.createElement("div", { className: "flex flex-col p-4 bg-white border-l" },
                        react_1.default.createElement(Label, { htmlFor: props.id ? `${props.id}-time` : undefined, "data-testid": props.id ? `${props.id}-time` : undefined },
                            props.timePickerProps?.label ?? "Time",
                            " (HH:MM AM/PM)"),
                        react_1.default.createElement("input", { type: "text", id: props.id ? `${props.id}-time` : undefined, "data-testid": props.id ? `${props.id}-time` : undefined, className: "w-32 px-3 py-2 border rounded-md mt-2", placeholder: props.timePickerProps?.placeholder ?? "12:00 AM", value: timeString, onChange: (e) => handleTimeInput(e.target.value) }),
                        timeParseError && react_1.default.createElement("span", { className: "text-xs text-red-500 mt-1" }, "Please use format: 12:00 PM")))))));
    }
    ShadcnAutoDateTimePicker.displayName = "ShadcnAutoDateTimePicker";
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoDateTimePicker);
};
exports.makeShadcnAutoDateTimePicker = makeShadcnAutoDateTimePicker;
//# sourceMappingURL=ShadcnAutoDateTimePicker.js.map