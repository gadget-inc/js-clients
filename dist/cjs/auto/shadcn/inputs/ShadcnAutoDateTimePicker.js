"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoDateTimePicker = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importStar(require("react"));
const dateTimeUtils_js_1 = require("../../../dateTimeUtils.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useDateTimeField_js_1 = require("../../hooks/useDateTimeField.js");
const ShadcnRequired_js_1 = require("../ShadcnRequired.js");
require("./auto-date-time-input.css");
const makeShadcnAutoDateTimePicker = ({ Button, Calendar, Label, Popover, PopoverTrigger, PopoverContent, }) => {
    const ClearButton = (props) => {
        return (react_1.default.createElement("div", { className: "ml-auto h-4 w-4 bg-transparent hover:opacity-30", onClick: (e) => {
                e.stopPropagation();
                props.onClear();
            } },
            react_1.default.createElement(lucide_react_1.X, null)));
    };
    function ShadcnAutoDateTimePicker(props) {
        const { localTz, localTime, onChange, fieldProps, metadata, fieldState } = (0, useDateTimeField_js_1.useDateTimeField)({
            field: props.field,
            value: props.value,
            onChange: props?.onChange,
        });
        const value = props.value ?? fieldProps.value;
        const timeString = localTime ? (0, dateTimeUtils_js_1.getTimeString)((0, dateTimeUtils_js_1.getDateTimeObjectFromDate)(localTime, true), true) : undefined;
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
        const [isOpen, setIsOpen] = (0, react_1.useState)(false);
        const handleDateSelect = (selectedDate) => {
            if (selectedDate) {
                onDateChange?.(selectedDate);
            }
        };
        const handleTimeInput = (inputTimeString) => {
            const [hours, minutes] = inputTimeString.split(":").map(Number);
            const newDate = localTime ? new Date(localTime) : new Date();
            newDate.setHours(hours);
            newDate.setMinutes(minutes);
            onChange?.((0, dateTimeUtils_js_1.zonedTimeToUtc)(newDate, localTz));
            fieldProps.onChange((0, dateTimeUtils_js_1.zonedTimeToUtc)(newDate, localTz));
        };
        const handleClear = () => {
            onChange?.(undefined);
            fieldProps.onChange(undefined);
        };
        return (react_1.default.createElement(Popover, { open: isOpen, onOpenChange: setIsOpen },
            react_1.default.createElement(PopoverTrigger, { asChild: true, onClick: (e) => e.stopPropagation() },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(Label, { htmlFor: props.id ? `${props.id}-date` : undefined },
                        props.label ?? metadata.name ?? "Date",
                        metadata.requiredArgumentForInput && react_1.default.createElement(ShadcnRequired_js_1.ShadcnRequired, null, "*")),
                    react_1.default.createElement(Button, { id: props.id ? `${props.id}-date` : undefined, variant: "outline", type: "button", className: `w-full justify-start text-left font-normal ${!localTime ? "text-muted-foreground" : ""}` },
                        react_1.default.createElement(lucide_react_1.CalendarIcon, { className: "mr-2 h-4 w-4" }),
                        localTime ? ((0, dateTimeUtils_js_1.formatDate)(localTime, props.includeTime ?? config.includeTime, true)) : (react_1.default.createElement("span", { className: "opacity-50" }, (props.includeTime ?? config.includeTime) ? "YYYY-MM-DD hh:mm aa" : "YYYY-MM-DD")),
                        localTime && !metadata.requiredArgumentForInput && react_1.default.createElement(ClearButton, { onClear: handleClear })),
                    (props.error || fieldState.error?.message) && (react_1.default.createElement(Label, { className: "text-red-500" }, props.error || fieldState.error?.message)))),
            react_1.default.createElement(PopoverContent, { className: "w-auto p-0" },
                react_1.default.createElement("div", { className: "flex flex-row flex-nowrap" },
                    react_1.default.createElement("div", { className: "relative bg-background" },
                        react_1.default.createElement(Calendar, { mode: "single", defaultMonth: localTime, selected: localTime, onSelect: handleDateSelect, initialFocus: true, classNames: {
                                month_grid: "w-full",
                                selected: "bg-primary text-primary-foreground",
                                nav: "translate-y-3",
                                day_button: "w-full",
                            } })),
                    (props.includeTime ?? config.includeTime) && (react_1.default.createElement("div", { className: "flex flex-col p-4 bg-white border-l" },
                        react_1.default.createElement(Label, { htmlFor: props.id ? `${props.id}-time` : undefined, "data-testid": props.id ? `${props.id}-time` : undefined },
                            props.timePickerProps?.label ?? "Time",
                            " (HH:MM)"),
                        react_1.default.createElement("input", { type: "time", id: props.id ? `${props.id}-time` : undefined, "data-testid": props.id ? `${props.id}-time` : undefined, className: "shadcn-auto-form-time-input w-32 px-3 py-2 border rounded-md mt-2", value: timeString, onChange: (e) => handleTimeInput(e.target.value) })))))));
    }
    ShadcnAutoDateTimePicker.displayName = "ShadcnAutoDateTimePicker";
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoDateTimePicker);
};
exports.makeShadcnAutoDateTimePicker = makeShadcnAutoDateTimePicker;
//# sourceMappingURL=ShadcnAutoDateTimePicker.js.map