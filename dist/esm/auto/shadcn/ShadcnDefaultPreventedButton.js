import React from "react";
export const makeDefaultPreventedButton = (elements) => {
    const { Button } = elements;
    const DefaultPreventedButton = React.forwardRef((props, ref) => {
        return (React.createElement(Button, { ref: ref, ...props, onClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
                props.onClick?.(e);
            } }));
    });
    DefaultPreventedButton.displayName = "DefaultPreventedButton";
    return DefaultPreventedButton;
};
//# sourceMappingURL=ShadcnDefaultPreventedButton.js.map