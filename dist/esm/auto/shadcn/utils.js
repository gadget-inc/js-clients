import React from "react";
export const makeShadcnRenderOptionLabel = ({ Label, Badge, Button }) => {
    function renderOptionLabel(label, type) {
        if (typeof label === "string") {
            switch (type) {
                case "primary":
                    return React.createElement(Label, { className: "font-semibold" }, label);
                case "secondary":
                    return React.createElement(Label, { className: "text-sm text-gray-500" }, label);
                case "tertiary":
                    return (React.createElement(Badge, { className: "text-xs px-3 py-1 inline-flex items-center justify-center", variant: "outline" }, label));
                default:
                    throw new Error("Invalid option type");
            }
        }
        return label;
    }
    return renderOptionLabel;
};
//# sourceMappingURL=utils.js.map