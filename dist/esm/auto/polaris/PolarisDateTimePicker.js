import { DatePicker, Icon, InlineStack, Listbox, Popover, TextField } from "@shopify/polaris";
import { CalendarIcon, ClockIcon } from "@shopify/polaris-icons";
import { format } from "date-fns";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";
import React, { useCallback, useState } from "react";
const today = new Date();
export const PolarisDateTimePicker = (props) => {
    const { onChange, value } = props;
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTime = value ? utcToZonedTime(value, localTz) : undefined;
    const [{ month, year }, setDate] = useState({ month: (localTime ?? today).getMonth(), year: (localTime ?? today).getFullYear() });
    const [datePopoverActive, setDatePopoverActive] = useState(false);
    const [timeString, setTimeString] = useState(localTime ? format(localTime, "HH:mm") : "");
    const [popoverActive, setPopoverActive] = useState(false);
    const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
    const mins = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
    const ampm = ["AM", "PM"];
    const onDateChange = useCallback((range) => {
        const date = new Date(range.start);
        onChange(zonedTimeToUtc(date, localTz));
        setDatePopoverActive(false);
    }, [onChange, localTz]);
    const toggleDatePopoverActive = useCallback(() => setDatePopoverActive((active) => !active), []);
    const handleMonthChange = useCallback((month, year) => {
        setDate({ month, year });
    }, []);
    const onTimeStringChange = useCallback((newTimeString) => {
        setTimeString(newTimeString);
        const [hours, minutes] = newTimeString.split(":").map((part) => parseInt(part, 10));
        if (isNaN(hours) || isNaN(minutes)) {
            return;
        }
        const newTime = new Date(localTime ?? today);
        newTime.setHours(hours, minutes);
        onChange(zonedTimeToUtc(newTime, localTz));
    }, [localTime, localTz, onChange]);
    const createMarkup = (items) => {
        return items.map((item, i) => {
            return (React.createElement("div", { key: i, style: { textAlign: "center" } },
                React.createElement(Listbox.Option, { value: item }, item)));
        });
    };
    const hoursMarkup = createMarkup(hours);
    const minsMarkup = createMarkup(mins);
    const ampmMarkup = createMarkup(ampm);
    return (React.createElement(InlineStack, { gap: "400" },
        React.createElement(Popover, { preferredPosition: "above", active: datePopoverActive, activator: React.createElement(TextField, { id: props.id ? `${props.id}-date` : undefined, label: props.dateLabel ?? "Date", prefix: React.createElement(Icon, { source: CalendarIcon }), autoComplete: "off", value: localTime ? format(localTime, "yyyy-MM-dd") : "", onFocus: toggleDatePopoverActive, error: props.error }), onClose: toggleDatePopoverActive },
            React.createElement("div", { style: { padding: "16px" } },
                React.createElement(DatePicker, { month: month, year: year, allowRange: false, onChange: onDateChange, onMonthChange: handleMonthChange, selected: props.value }))),
        props.includeTime && (React.createElement(Popover, { active: popoverActive, onClose: () => setPopoverActive(false), activator: React.createElement(TextField, { prefix: React.createElement(Icon, { source: ClockIcon }), id: props.id ? `${props.id}-time` : undefined, label: props.timeLabel ?? "Time", autoComplete: "off", value: timeString, onChange: onTimeStringChange, onFocus: () => setPopoverActive(true) }) },
            React.createElement("div", { style: { overflow: "hidden" } },
                React.createElement("div", { style: { display: "flex" } },
                    React.createElement("div", { style: { overflowY: "scroll", height: "250px" } },
                        React.createElement(Listbox, null, hoursMarkup)),
                    React.createElement("div", { style: { overflowY: "scroll", height: "250px" } },
                        React.createElement(Listbox, null, minsMarkup)),
                    React.createElement("div", { style: { overflowY: "scroll", height: "250px" } },
                        React.createElement(Listbox, null, ampmMarkup))))))));
};
//# sourceMappingURL=PolarisDateTimePicker.js.map