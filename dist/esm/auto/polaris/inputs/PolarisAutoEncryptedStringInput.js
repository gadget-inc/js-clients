import { Button } from "@shopify/polaris";
import { HideIcon, ViewIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { autoInput } from "../../AutoInput.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";
/**
 * An encrypted string input within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoEncryptedStringInput field="encryptedStringField" />
 * </AutoForm>
 * ```
 * @param props.field - API identifier of the EncryptedString field.
 * @param props.label - Label of the EncryptedString input.
 * @returns The AutoEncryptedStringInput component.
 */
export const PolarisAutoEncryptedStringInput = autoInput((props) => {
    const [isShown, setIsShown] = useState(false);
    const showHideToggleButton = (React.createElement("div", { style: { display: "flex" } },
        React.createElement(Button, { variant: "plain", size: "slim", icon: isShown ? HideIcon : ViewIcon, onClick: () => setIsShown(!isShown), role: `${props.field}ToggleShowHideButton` })));
    return React.createElement(PolarisAutoTextInput, { type: isShown ? "text" : "password", suffix: showHideToggleButton, ...props });
});
//# sourceMappingURL=PolarisAutoEncryptedStringInput.js.map