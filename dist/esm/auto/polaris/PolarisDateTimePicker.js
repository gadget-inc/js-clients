import { DatePicker, Icon, InlineStack, Popover, TextField } from "@shopify/polaris";
import { CalendarIcon } from "@shopify/polaris-icons";
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
    const onDateChange = useCallback((range) => {
        const date = new Date(range.start);
        onChange(zonedTimeToUtc(date, localTz));
        setDatePopoverActive(false);
    }, [onChange, localTz]);
    const toggleDatePopoverActive = useCallback(() => setDatePopoverActive((active) => !active), []);
    const handleMonthChange = useCallback((month, year) => {
        setDate({ month, year });
    }, []);
    return (React.createElement(InlineStack, { gap: "400" },
        React.createElement(Popover, { preferredPosition: "above", active: datePopoverActive, activator: React.createElement(TextField, { id: props.id ? `${props.id}-date` : undefined, label: props.dateLabel ?? "Date", prefix: React.createElement(Icon, { source: CalendarIcon }), autoComplete: "off", value: localTime ? format(localTime, "yyyy-MM-dd") : "", onFocus: toggleDatePopoverActive, error: props.error }), onClose: toggleDatePopoverActive },
            React.createElement("div", { style: { padding: "16px" } },
                React.createElement(DatePicker, { month: month, year: year, allowRange: false, onChange: onDateChange, onMonthChange: handleMonthChange, selected: props.value })))));
};
//# sourceMappingURL=PolarisDateTimePicker.js.map