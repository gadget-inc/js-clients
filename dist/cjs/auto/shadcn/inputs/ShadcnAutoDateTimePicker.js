"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoDateTimePicker = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
// lazy load the component to reduce the bundle size and to avoid errors importing .css files in SSR bundles
const ShadcnAutoDateTimeInputComponent = react_1.default.lazy(() => Promise.resolve().then(() => tslib_1.__importStar(require("./ShadcnAutoDateTimeInputComponent.js"))));
const makeShadcnAutoDateTimePicker = ({ Button, Calendar, Label, Popover, PopoverTrigger, PopoverContent, }) => {
    function ShadcnAutoDateTimePicker(props) {
        return (react_1.default.createElement(ShadcnAutoDateTimeInputComponent, { ...props, shadcnElements: { Button, Calendar, Label, Popover, PopoverTrigger, PopoverContent } }));
    }
    ShadcnAutoDateTimePicker.displayName = "ShadcnAutoDateTimePicker";
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoDateTimePicker);
};
exports.makeShadcnAutoDateTimePicker = makeShadcnAutoDateTimePicker;
//# sourceMappingURL=ShadcnAutoDateTimePicker.js.map