import React, { useMemo } from "react";
import { shouldShowOptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import { makeShadcnRenderOptionLabel } from "../../utils.js";
export const makeShadcnEditableOptionLabelButton = ({ Badge, Button, Label }) => {
    const renderOptionLabel = makeShadcnRenderOptionLabel({ Label, Badge, Button });
    return function ({ option }) {
        const showOptionLabel = useMemo(() => shouldShowOptionLabel(option), [option]);
        return (React.createElement(React.Fragment, null, showOptionLabel && option ? (React.createElement("div", { className: "flex justify-between w-full items-center" },
            React.createElement("div", { className: "flex flex-col gap-1 items-start cursor-pointer" },
                renderOptionLabel(option.primary, "primary", true),
                option.secondary && renderOptionLabel(option.secondary, "secondary", true)),
            option.tertiary && (React.createElement("div", { className: "flex items-center cursor-pointer" }, renderOptionLabel(option.tertiary, "tertiary", true))))) : (React.createElement(Label, null, "Click to edit..."))));
    };
};
//# sourceMappingURL=EditableOptionLabelButton.js.map