import React from "react";
import { autoInput } from "../../AutoInput.js";
import "./auto-date-time-input.css";
// lazy load the component to reduce the bundle size and to avoid errors importing .css files in SSR bundles
const ShadcnAutoDateTimeInputComponent = React.lazy(() => import("./ShadcnAutoDateTimeInputComponent.js"));
export const makeShadcnAutoDateTimePicker = ({ Button, Calendar, Label, Popover, PopoverTrigger, PopoverContent, }) => {
    // const ClearButton = (props: { onClear: () => void }) => {
    //   return (
    //     <div
    //       className="ml-auto h-4 w-4 bg-transparent hover:opacity-30"
    //       onClick={(e) => {
    //         e.stopPropagation();
    //         props.onClear();
    //       }}
    //     >
    //       <X />
    //     </div>
    //   );
    // };
    function ShadcnAutoDateTimePicker(props) {
        return (React.createElement(ShadcnAutoDateTimeInputComponent, { ...props, shadcnElements: { Button, Calendar, Label, Popover, PopoverTrigger, PopoverContent } }));
        // const { localTz, localTime, onChange, fieldProps, metadata, fieldState } = useDateTimeField({
        //   field: props.field,
        //   value: props.value,
        //   onChange: props?.onChange,
        // });
        // const value = props.value ?? fieldProps.value;
        // const timeString = localTime ? getTimeString(getDateTimeObjectFromDate(localTime, true), true) : undefined;
        // const config = metadata.configuration;
        // const onDateChange = useCallback<Exclude<DatePickerProps["onChange"], undefined>>(
        //   (range) => {
        //     (fieldProps || value) && copyTime(range, zonedTimeToUtc(range, localTz));
        //     const dateOverride = value ?? new Date(fieldProps.value);
        //     if (isValidDate(dateOverride)) {
        //       range.setHours(dateOverride.getHours());
        //       range.setMinutes(dateOverride.getMinutes());
        //       range.setSeconds(dateOverride.getSeconds());
        //       range.setMilliseconds(dateOverride.getMilliseconds());
        //     }
        //     onChange?.(zonedTimeToUtc(range, localTz));
        //     fieldProps.onChange(zonedTimeToUtc(range, localTz));
        //   },
        //   [fieldProps, value, localTz, onChange]
        // );
        // const [isOpen, setIsOpen] = useState(false);
        // const handleDateSelect = (selectedDate: Date | undefined) => {
        //   if (selectedDate) {
        //     onDateChange?.(selectedDate);
        //   }
        // };
        // const handleTimeInput = (inputTimeString: string) => {
        //   const [hours, minutes] = inputTimeString.split(":").map(Number);
        //   const newDate = localTime ? new Date(localTime) : new Date();
        //   newDate.setHours(hours);
        //   newDate.setMinutes(minutes);
        //   onChange?.(zonedTimeToUtc(newDate, localTz));
        //   fieldProps.onChange(zonedTimeToUtc(newDate, localTz));
        // };
        // const handleClear = () => {
        //   onChange?.(undefined);
        //   fieldProps.onChange(undefined);
        // };
        // return (
        //   <Popover open={isOpen} onOpenChange={setIsOpen}>
        //     <PopoverTrigger asChild onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.stopPropagation()}>
        //       <div>
        //         <Label htmlFor={props.id ? `${props.id}-date` : undefined}>
        //           {props.label ?? metadata.name ?? "Date"}
        //           {metadata.requiredArgumentForInput && <ShadcnRequired>*</ShadcnRequired>}
        //         </Label>
        //         <Button
        //           id={props.id ? `${props.id}-date` : undefined}
        //           variant="outline"
        //           type="button"
        //           className={`w-full justify-start text-left font-normal ${!localTime ? "text-muted-foreground" : ""}`}
        //         >
        //           <CalendarIcon className="mr-2 h-4 w-4" />
        //           {localTime ? (
        //             formatDate(localTime, props.includeTime ?? (config as GadgetDateTimeConfig).includeTime, true)
        //           ) : (
        //             <span className="opacity-50">
        //               {props.includeTime ?? (config as GadgetDateTimeConfig).includeTime ? "YYYY-MM-DD hh:mm aa" : "YYYY-MM-DD"}
        //             </span>
        //           )}
        //           {localTime && !metadata.requiredArgumentForInput && <ClearButton onClear={handleClear} />}
        //         </Button>
        //         {(props.error || fieldState.error?.message) && (
        //           <Label className="text-red-500">{props.error || fieldState.error?.message}</Label>
        //         )}
        //       </div>
        //     </PopoverTrigger>
        //     <PopoverContent className="w-auto p-0">
        //       <div className="flex flex-row flex-nowrap">
        //         <div className="relative bg-background">
        //           <Calendar
        //             mode="single"
        //             defaultMonth={localTime}
        //             selected={localTime}
        //             onSelect={handleDateSelect}
        //             initialFocus
        //             classNames={{
        //               month_grid: "w-full",
        //               selected: "bg-primary text-primary-foreground",
        //               nav: "translate-y-3",
        //               day_button: "w-full",
        //             }}
        //           />
        //         </div>
        //         {(props.includeTime ?? (config as GadgetDateTimeConfig).includeTime) && (
        //           <div className="flex flex-col p-4 bg-white border-l">
        //             <Label htmlFor={props.id ? `${props.id}-time` : undefined} data-testid={props.id ? `${props.id}-time` : undefined}>
        //               {props.timePickerProps?.label ?? "Time"} (HH:MM)
        //             </Label>
        //             <input
        //               type="time"
        //               id={props.id ? `${props.id}-time` : undefined}
        //               data-testid={props.id ? `${props.id}-time` : undefined}
        //               className="shadcn-auto-form-time-input w-32 px-3 py-2 border rounded-md mt-2"
        //               value={timeString}
        //               onChange={(e) => handleTimeInput(e.target.value)}
        //             />
        //           </div>
        //         )}
        //       </div>
        //     </PopoverContent>
        //   </Popover>
        // );
    }
    ShadcnAutoDateTimePicker.displayName = "ShadcnAutoDateTimePicker";
    return autoInput(ShadcnAutoDateTimePicker);
};
//# sourceMappingURL=ShadcnAutoDateTimePicker.js.map