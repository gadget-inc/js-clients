"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoSubmit = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoFormContext_js_1 = require("../../AutoFormContext.js");
/**
 * Make the Shadcn component for the auto submit button
 * @param elements - The Shadcn elements to use
 * @returns The Shadcn component for the auto submit button
 */
const makeShadcnAutoSubmit = ({ Button }) => {
    /**
     * Auto form submit button button for use within <AutoForm/>
     */
    function ShadcnAutoSubmit(props) {
        const { submitResult, submit } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
        const isSubmitting = props.isSubmitting ?? submitResult.isSubmitting;
        return (react_1.default.createElement(Button, { type: "submit", disabled: isSubmitting, ...props, onClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
                void submit();
                props.onClick?.(e);
            } }, isSubmitting ? react_1.default.createElement(lucide_react_1.LoaderIcon, { className: "h-4 w-4 animate-spin" }) : (props.children ?? "Submit")));
    }
    return ShadcnAutoSubmit;
};
exports.makeShadcnAutoSubmit = makeShadcnAutoSubmit;
//# sourceMappingURL=ShadcnAutoSubmit.js.map