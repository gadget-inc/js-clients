import { PencilIcon } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useController } from "../../../useActionForm.js";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { makeShadcnAutoEncryptedStringInput } from "./ShadcnAutoEncryptedStringInput.js";
/**
 * The salted password hash is not retrieved from the DB.
 * Regardless of the password being defined or not, this placeholder is shown as exposing an unset password is a security risk.
 */
const existingPasswordPlaceholder = "********";
export function makeShadcnAutoPasswordInput({ Input, Label, Button }) {
    const EncryptedInput = makeShadcnAutoEncryptedStringInput({ Input, Label, Button });
    function ShadcnAutoPasswordInput(props) {
        const { findBy } = useAutoFormMetadata();
        const { path } = useFieldMetadata(props.field);
        const { field: fieldProps } = useController({ name: path });
        const [isEditing, setIsEditing] = useState(!findBy);
        const startEditing = useCallback(() => {
            fieldProps.onChange(""); // Touch the field to mark it as dirty
            setIsEditing(true);
        }, [fieldProps]);
        return (React.createElement(EncryptedInput, { ...props, ...(isEditing
                ? { placeholder: "Password" }
                : {
                    placeholder: existingPasswordPlaceholder,
                    disabled: true,
                    className: "pr-20",
                    suffix: (React.createElement(Button, { variant: "ghost", size: "icon", type: "button", onClick: startEditing, className: "h-8 w-8", role: `${props.field}EditPasswordButton` },
                        React.createElement(PencilIcon, { className: "h-4 w-4" }))),
                }) }));
    }
    return autoInput(ShadcnAutoPasswordInput);
}
//# sourceMappingURL=ShadcnAutoPasswordInput.js.map