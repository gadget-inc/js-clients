import { Children } from "react";
export function useRequiredChildComponentsValidator(props, componentName) {
    if (!props.children || Children.count(props.children) === 0) {
        throw new Error(`"${componentName}" requires child components`);
    }
}
//# sourceMappingURL=useRequiredChildComponentsValidator.js.map