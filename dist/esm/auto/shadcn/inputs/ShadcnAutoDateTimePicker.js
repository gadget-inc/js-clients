import React from "react";
import { autoInput } from "../../AutoInput.js";
// lazy load the component to reduce the bundle size and to avoid errors importing .css files in SSR bundles
const ShadcnAutoDateTimeInputComponent = React.lazy(() => import("./ShadcnAutoDateTimeInputComponent.js"));
export const makeShadcnAutoDateTimePicker = ({ Button, Calendar, Label, Popover, PopoverTrigger, PopoverContent, }) => {
    function ShadcnAutoDateTimePicker(props) {
        return (React.createElement(ShadcnAutoDateTimeInputComponent, { ...props, shadcnElements: { Button, Calendar, Label, Popover, PopoverTrigger, PopoverContent } }));
    }
    ShadcnAutoDateTimePicker.displayName = "ShadcnAutoDateTimePicker";
    return autoInput(ShadcnAutoDateTimePicker);
};
//# sourceMappingURL=ShadcnAutoDateTimePicker.js.map