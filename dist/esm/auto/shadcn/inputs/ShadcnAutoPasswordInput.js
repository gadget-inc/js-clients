import { PencilIcon } from "lucide-react";
import React from "react";
import { existingPasswordPlaceholder, usePasswordController } from "../../../auto/hooks/usePasswordController.js";
import { autoInput } from "../../AutoInput.js";
import { makeShadcnAutoEncryptedStringInput } from "./ShadcnAutoEncryptedStringInput.js";
export function makeShadcnAutoPasswordInput({ Input, Label, Button }) {
    const EncryptedInput = makeShadcnAutoEncryptedStringInput({ Input, Label, Button });
    function ShadcnAutoPasswordInput(props) {
        const { isEditing, startEditing } = usePasswordController(props);
        return (React.createElement(EncryptedInput, { ...props, ...(isEditing
                ? { placeholder: "Password" }
                : {
                    placeholder: existingPasswordPlaceholder,
                    disabled: true,
                    suffix: (React.createElement(Button, { variant: "ghost", size: "icon", type: "button", onClick: startEditing, className: "h-8 w-8", role: `${props.field}EditPasswordButton` },
                        React.createElement(PencilIcon, { className: "h-4 w-4" }))),
                }) }));
    }
    return autoInput(ShadcnAutoPasswordInput);
}
//# sourceMappingURL=ShadcnAutoPasswordInput.js.map