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
const ShadcnAutoTimeInput = react_1.default.lazy(() => Promise.resolve().then(() => tslib_1.__importStar(require("./ShadcnAutoTimeInput.js"))));
const makeShadcnAutoDateTimePicker = ({ Button, Calendar, Label, Popover, PopoverTrigger, PopoverContent, }) => {
    const ClearButton = (props) => {
        return (react_1.default.createElement("div", { className: "ml-auto h-4 w-4 bg-transparent hover:opacity-30", onClick: (e) => {
                e.stopPropagation();
                props.onClear();
            } },
            react_1.default.createElement(lucide_react_1.X, null)));
    };
    function ShadcnAutoDateTimePicker(props) {
        const { localTz, localTime, fieldProps, metadata, fieldState } = (0, useDateTimeField_js_1.useDateTimeField)(props);
        const { onChange, value } = fieldProps;
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
            react_1.default.createElement(PopoverTrigger, { asChild: true },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(Label, { htmlFor: props.id ? `${props.id}-date` : undefined },
                        props.label ?? metadata.name ?? "Date",
                        metadata.requiredArgumentForInput && react_1.default.createElement(ShadcnRequired_js_1.ShadcnRequired, null, "*")),
                    react_1.default.createElement(Button, { id: props.id ? `${props.id}-date` : undefined, onClick: () => setIsOpen(!isOpen), variant: "outline", type: "button", className: `w-full justify-start text-left font-normal ${!localTime ? "text-muted-foreground" : ""} ${isOpen ? "ring-1 ring-ring" : ""}` },
                        react_1.default.createElement(lucide_react_1.CalendarIcon, { className: "mr-2 h-4 w-4" }),
                        localTime ? ((0, dateTimeUtils_js_1.formatDate)(localTime, config.includeTime, true)) : (react_1.default.createElement("span", { className: "opacity-50" }, config.includeTime ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD")),
                        localTime && !metadata.requiredArgumentForInput && react_1.default.createElement(ClearButton, { onClear: handleClear })),
                    (props.error || fieldState.error?.message) && (react_1.default.createElement(Label, { className: "text-red-500" }, props.error || fieldState.error?.message)))),
            react_1.default.createElement(PopoverContent, { className: "w-auto p-0" },
                react_1.default.createElement("div", { className: "flex flex-row flex-nowrap" },
                    react_1.default.createElement("div", { className: "relative bg-background" },
                        react_1.default.createElement(Calendar, { mode: "single", defaultMonth: localTime, selected: localTime, onSelect: handleDateSelect, initialFocus: true })),
                    config.includeTime && (react_1.default.createElement("div", { className: "flex flex-col p-4 bg-background border-l" },
                        react_1.default.createElement(Label, { htmlFor: props.id ? `${props.id}-time` : undefined, "data-testid": props.id ? `${props.id}-time` : undefined },
                            props.timePickerProps?.label ?? "Time",
                            " (HH:MM)"),
                        react_1.default.createElement(react_1.Suspense, { fallback: null },
                            react_1.default.createElement(ShadcnAutoTimeInput, { id: props.id, timeString: timeString, handleTimeInput: handleTimeInput }))))))));
    }
    ShadcnAutoDateTimePicker.displayName = "ShadcnAutoDateTimePicker";
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoDateTimePicker);
};
exports.makeShadcnAutoDateTimePicker = makeShadcnAutoDateTimePicker;
//# sourceMappingURL=ShadcnAutoDateTimePicker.js.map