import React from "react";
import { autoInput } from "../../AutoInput.js";
import { existingPasswordPlaceholder, usePasswordController } from "../../hooks/usePasswordController.js";
import { PolarisWCAutoEncryptedStringInput } from "./PolarisWCAutoEncryptedStringInput.js";
/**
 * A password input within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoPasswordInput field="passwordFieldApiId" />
 * </AutoForm>
 * ```
 * @param props.field - The password field API identifier.
 * @param props.label - Label of the password input.
 * @returns The AutoPasswordInput component.
 */
export const PolarisWCAutoPasswordInput = autoInput((props) => {
    const { isEditing, startEditing } = usePasswordController(props);
    if (!isEditing) {
        return (React.createElement("div", { style: { display: "flex", alignItems: "flex-end", gap: "8px" } },
            React.createElement(PolarisWCAutoEncryptedStringInput, { placeholder: existingPasswordPlaceholder, ...props, disabled: true }),
            React.createElement("div", { style: { marginBottom: "2px" } },
                React.createElement("s-button", { variant: "tertiary", onClick: startEditing, icon: "edit", role: `${props.field}EditPasswordButton` }))));
    }
    return React.createElement(PolarisWCAutoEncryptedStringInput, { placeholder: "Password", ...props });
});
//# sourceMappingURL=PolarisWCAutoPasswordInput.js.map