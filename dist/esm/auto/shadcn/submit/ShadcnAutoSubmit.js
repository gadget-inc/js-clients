import { LoaderIcon } from "lucide-react";
import React from "react";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
/**
 * Make the Shadcn component for the auto submit button
 * @param elements - The Shadcn elements to use
 * @returns The Shadcn component for the auto submit button
 */
export const makeShadcnAutoSubmit = ({ Button }) => {
    /**
     * Auto form submit button button for use within <AutoForm/>
     */
    function ShadcnAutoSubmit(props) {
        const { submitResult } = useAutoFormMetadata();
        const isSubmitting = props.isSubmitting ?? submitResult.isSubmitting;
        return (React.createElement(Button, { type: "submit", disabled: isSubmitting, ...props }, isSubmitting ? React.createElement(LoaderIcon, { className: "h-4 w-4 animate-spin" }) : props.children ?? "Submit"));
    }
    return ShadcnAutoSubmit;
};
//# sourceMappingURL=ShadcnAutoSubmit.js.map