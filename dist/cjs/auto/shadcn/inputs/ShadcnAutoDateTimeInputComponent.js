"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importStar(require("react"));
const dateTimeUtils_js_1 = require("../../../dateTimeUtils.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useDateTimeField_js_1 = require("../../hooks/useDateTimeField.js");
const ShadcnRequired_js_1 = require("../ShadcnRequired.js");
require("./auto-date-time-input.css");
const ClearButton = (props) => {
    return (react_1.default.createElement("div", { className: "ml-auto h-4 w-4 bg-transparent hover:opacity-30", onClick: (e) => {
            e.stopPropagation();
            props.onClear();
        } },
        react_1.default.createElement(lucide_react_1.X, null)));
};
const ShadcnAutoDateTimeInputComponent = (0, AutoInput_js_1.autoInput)((props
//   {
//   // field: string;
//   // id?: string;
//   // value?: Date;
//   // onChange?: (value?: Date) => void;
//   // error?: string;
//   // includeTime?: boolean;
//   // hideTimePopover?: boolean;
//   // label?: ReactNode;
//   // datePickerProps?: Partial<DatePickerProps>;
//   // timePickerProps?: { label?: ReactNode; placeholder?: string };
//   shadcnElements: Pick<ShadcnElements, "Button" | "Calendar" | "Label" | "Popover" | "PopoverTrigger" | "PopoverContent">;
// }
) => {
    const { Button, Calendar, Label, Popover, PopoverTrigger, PopoverContent } = props.shadcnElements;
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
});
// const makeShadcnAutoDateTimeInputComponent = ({
//   Button,
//   Calendar,
//   Label,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// }: Pick<ShadcnElements, "Button" | "Calendar" | "Label" | "Popover" | "PopoverTrigger" | "PopoverContent">) => {
//   function ShadcnAutoDateTimeInputComponent(props: {
//     field: string;
//     id?: string;
//     value?: Date;
//     onChange?: (value?: Date) => void;
//     error?: string;
//     includeTime?: boolean;
//     hideTimePopover?: boolean;
//     label?: ReactNode;
//     datePickerProps?: Partial<DatePickerProps>;
//     timePickerProps?: { label?: ReactNode; placeholder?: string };
//   }) {
//     const { localTz, localTime, onChange, fieldProps, metadata, fieldState } = useDateTimeField({
//       field: props.field,
//       value: props.value,
//       onChange: props?.onChange,
//     });
//     const value = props.value ?? fieldProps.value;
//     const timeString = localTime ? getTimeString(getDateTimeObjectFromDate(localTime, true), true) : undefined;
//     const config = metadata.configuration;
//     const onDateChange = useCallback<Exclude<DatePickerProps["onChange"], undefined>>(
//       (range) => {
//         (fieldProps || value) && copyTime(range, zonedTimeToUtc(range, localTz));
//         const dateOverride = value ?? new Date(fieldProps.value);
//         if (isValidDate(dateOverride)) {
//           range.setHours(dateOverride.getHours());
//           range.setMinutes(dateOverride.getMinutes());
//           range.setSeconds(dateOverride.getSeconds());
//           range.setMilliseconds(dateOverride.getMilliseconds());
//         }
//         onChange?.(zonedTimeToUtc(range, localTz));
//         fieldProps.onChange(zonedTimeToUtc(range, localTz));
//       },
//       [fieldProps, value, localTz, onChange]
//     );
//     const [isOpen, setIsOpen] = useState(false);
//     const handleDateSelect = (selectedDate: Date | undefined) => {
//       if (selectedDate) {
//         onDateChange?.(selectedDate);
//       }
//     };
//     const handleTimeInput = (inputTimeString: string) => {
//       const [hours, minutes] = inputTimeString.split(":").map(Number);
//       const newDate = localTime ? new Date(localTime) : new Date();
//       newDate.setHours(hours);
//       newDate.setMinutes(minutes);
//       onChange?.(zonedTimeToUtc(newDate, localTz));
//       fieldProps.onChange(zonedTimeToUtc(newDate, localTz));
//     };
//     const handleClear = () => {
//       onChange?.(undefined);
//       fieldProps.onChange(undefined);
//     };
//     return (
//       <Popover open={isOpen} onOpenChange={setIsOpen}>
//         <PopoverTrigger asChild onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.stopPropagation()}>
//           <div>
//             <Label htmlFor={props.id ? `${props.id}-date` : undefined}>
//               {props.label ?? metadata.name ?? "Date"}
//               {metadata.requiredArgumentForInput && <ShadcnRequired>*</ShadcnRequired>}
//             </Label>
//             <Button
//               id={props.id ? `${props.id}-date` : undefined}
//               variant="outline"
//               type="button"
//               className={`w-full justify-start text-left font-normal ${!localTime ? "text-muted-foreground" : ""}`}
//             >
//               <CalendarIcon className="mr-2 h-4 w-4" />
//               {localTime ? (
//                 formatDate(localTime, props.includeTime ?? (config as GadgetDateTimeConfig).includeTime, true)
//               ) : (
//                 <span className="opacity-50">
//                   {props.includeTime ?? (config as GadgetDateTimeConfig).includeTime ? "YYYY-MM-DD hh:mm aa" : "YYYY-MM-DD"}
//                 </span>
//               )}
//               {localTime && !metadata.requiredArgumentForInput && <ClearButton onClear={handleClear} />}
//             </Button>
//             {(props.error || fieldState.error?.message) && (
//               <Label className="text-red-500">{props.error || fieldState.error?.message}</Label>
//             )}
//           </div>
//         </PopoverTrigger>
//         <PopoverContent className="w-auto p-0">
//           <div className="flex flex-row flex-nowrap">
//             <div className="relative bg-background">
//               <Calendar
//                 mode="single"
//                 defaultMonth={localTime}
//                 selected={localTime}
//                 onSelect={handleDateSelect}
//                 initialFocus
//                 classNames={{
//                   month_grid: "w-full",
//                   selected: "bg-primary text-primary-foreground",
//                   nav: "translate-y-3",
//                   day_button: "w-full",
//                 }}
//               />
//             </div>
//             {(props.includeTime ?? (config as GadgetDateTimeConfig).includeTime) && (
//               <div className="flex flex-col p-4 bg-white border-l">
//                 <Label htmlFor={props.id ? `${props.id}-time` : undefined} data-testid={props.id ? `${props.id}-time` : undefined}>
//                   {props.timePickerProps?.label ?? "Time"} (HH:MM)
//                 </Label>
//                 <input
//                   type="time"
//                   id={props.id ? `${props.id}-time` : undefined}
//                   data-testid={props.id ? `${props.id}-time` : undefined}
//                   className="shadcn-auto-form-time-input w-32 px-3 py-2 border rounded-md mt-2"
//                   value={timeString}
//                   onChange={(e) => handleTimeInput(e.target.value)}
//                 />
//               </div>
//             )}
//           </div>
//         </PopoverContent>
//       </Popover>
//     );
//   }
//   ShadcnAutoDateTimeInputComponent.displayName = "ShadcnAutoDateTimeInputComponent";
//   return autoInput(ShadcnAutoDateTimeInputComponent);
// };
// export default makeShadcnAutoDateTimeInputComponent;
exports.default = ShadcnAutoDateTimeInputComponent;
//# sourceMappingURL=ShadcnAutoDateTimeInputComponent.js.map