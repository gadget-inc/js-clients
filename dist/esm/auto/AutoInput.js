import React, { useEffect } from "react";
import { useFieldsFromChildComponents } from "./AutoFormContext.js";
export function autoInput(Component) {
    const WrappedComponent = (props) => {
        const { hasCustomFormChildren, registerFields, fieldSet } = useFieldsFromChildComponents();
        useEffect(() => {
            registerFields([props.field]);
        }, [registerFields]);
        if (hasCustomFormChildren && !fieldSet.has(props.field)) {
            // Do not render before registration
            return null;
        }
        return React.createElement(Component, { ...props });
    };
    WrappedComponent.__autoInput = true;
    return WrappedComponent;
}
export function isAutoInput(component) {
    return typeof component.type === "function" && "__autoInput" in component.type;
}
//# sourceMappingURL=AutoInput.js.map