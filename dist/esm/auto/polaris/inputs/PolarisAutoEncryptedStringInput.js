import { Button } from "@shopify/polaris";
import { HideIcon, ViewIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { autoInput } from "../../AutoInput.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";
export const PolarisAutoEncryptedStringInput = autoInput((props) => {
    const [isShown, setIsShown] = useState(false);
    const showHideToggleButton = (React.createElement("div", { style: { display: "flex" } },
        React.createElement(Button, { variant: "plain", size: "slim", icon: isShown ? HideIcon : ViewIcon, onClick: () => setIsShown(!isShown), role: `${props.field}ToggleShowHideButton` })));
    return React.createElement(PolarisAutoTextInput, { type: isShown ? "text" : "password", suffix: showHideToggleButton, ...props });
});
//# sourceMappingURL=PolarisAutoEncryptedStringInput.js.map