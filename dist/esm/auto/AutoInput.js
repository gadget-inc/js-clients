import React from "react";
export function autoInput(Component) {
    const WrappedComponent = (props) => {
        return React.createElement(Component, { ...props });
    };
    WrappedComponent.__autoInput = true;
    return WrappedComponent;
}
export function isAutoInput(component) {
    return typeof component.type === "function" && "__autoInput" in component.type;
}
//# sourceMappingURL=AutoInput.js.map