"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRequiredChildComponentsValidator = void 0;
const react_1 = require("react");
function useRequiredChildComponentsValidator(props, componentName) {
    if (!props.children || react_1.Children.count(props.children) === 0) {
        throw new Error(`"${componentName}" requires child components`);
    }
}
exports.useRequiredChildComponentsValidator = useRequiredChildComponentsValidator;
//# sourceMappingURL=useRequiredChildComponentsValidator.js.map