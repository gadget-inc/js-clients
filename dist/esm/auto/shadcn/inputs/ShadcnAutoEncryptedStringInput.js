import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";
import { autoInput } from "../../AutoInput.js";
import { makeShadcnAutoStringInput } from "./ShadcnAutoStringInput.js";
export const makeShadcnAutoEncryptedStringInput = ({ Input, Label, Button }) => {
    const TextInput = makeShadcnAutoStringInput({ Input, Label });
    function ShadcnAutoEncryptedStringInput(props) {
        const [isShown, setIsShown] = useState(false);
        const { suffix, ...restProps } = props;
        const showHideToggleButton = (React.createElement(Button, { variant: "ghost", size: "icon", type: "button", onClick: () => setIsShown(!isShown), className: "h-8 w-8", role: `${props.field}ToggleShowHideButton` }, isShown ? React.createElement(EyeOffIcon, { className: "h-4 w-4" }) : React.createElement(EyeIcon, { className: "h-4 w-4" })));
        return React.createElement(TextInput, { ...restProps, type: isShown ? "text" : "password", suffix: suffix ?? showHideToggleButton });
    }
    return autoInput(ShadcnAutoEncryptedStringInput);
};
//# sourceMappingURL=ShadcnAutoEncryptedStringInput.js.map