import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
import { MUIAutoEncryptedStringInput } from "./MUIAutoEncryptedStringInput.js";
/**
 * The salted password hash is not retrieved from the DB
 * Regardless of the password is defined or not, this placeholder is shown as exposing an unset password is a security risk
 */
const existingPasswordPlaceholder = "********";
const pencilEmoji = `✏️`;
export const MUIAutoPasswordInput = (props) => {
    const { findBy } = useAutoFormMetadata();
    const [isEditing, setIsEditing] = useState(!findBy);
    const startEditingButton = (React.createElement(IconButton, { onClick: () => setIsEditing(true), role: `${props.field}EditPasswordButton` }, pencilEmoji));
    return (React.createElement(MUIAutoEncryptedStringInput, { ...(isEditing
            ? { placeholder: "Password" }
            : {
                InputProps: { endAdornment: startEditingButton },
                placeholder: existingPasswordPlaceholder,
                disabled: true,
            }), ...props }));
};
//# sourceMappingURL=MUIAutoPasswordInput.js.map