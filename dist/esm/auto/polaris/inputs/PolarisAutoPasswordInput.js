import { Button } from "@shopify/polaris";
import { EditIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
import { PolarisAutoEncryptedStringInput } from "./PolarisAutoEncryptedStringInput.js";
/**
 * The salted password hash is not retrieved from the DB
 * Regardless of the password is defined or not, this placeholder is shown as exposing an unset password is a security risk
 */
const existingPasswordPlaceholder = "********";
export const PolarisAutoPasswordInput = (props) => {
    const { findBy } = useAutoFormMetadata();
    const [isEditing, setIsEditing] = useState(!findBy);
    const startEditingButton = (React.createElement("div", { style: { display: "flex" } },
        React.createElement(Button, { variant: "plain", size: "slim", icon: EditIcon, onClick: () => setIsEditing(true), role: `${props.field}EditPasswordButton` })));
    return (React.createElement(PolarisAutoEncryptedStringInput, { ...(isEditing
            ? { placeholder: "Password" }
            : {
                placeholder: existingPasswordPlaceholder,
                suffix: startEditingButton,
                disabled: true,
            }), ...props }));
};
//# sourceMappingURL=PolarisAutoPasswordInput.js.map