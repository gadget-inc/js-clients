import React from "react";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
export const makeShadcnAutoSubmit = ({ Button }) => {
    function ShadcnAutoSubmit(props) {
        const { submitResult } = useAutoFormMetadata();
        const isSubmitting = props.isSubmitting ?? submitResult.isSubmitting;
        return (React.createElement(Button, { type: "submit", disabled: isSubmitting, ...props }, props.children ?? "Submit"));
    }
    return ShadcnAutoSubmit;
};
//# sourceMappingURL=ShadcnAutoSubmit.js.map