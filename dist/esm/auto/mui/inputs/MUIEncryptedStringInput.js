import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { MUIAutoTextInput } from "./MUIAutoTextInput.js";
export const MUIEncryptedStringInput = (props) => {
    const [isShown, setIsShown] = useState(false);
    const showHideToggleButton = React.createElement(IconButton, { onClick: () => setIsShown(!isShown) }, isShown ? `🔒` : `👁️`);
    return React.createElement(MUIAutoTextInput, { InputProps: { endAdornment: showHideToggleButton }, type: isShown ? "text" : "password", ...props });
};
//# sourceMappingURL=MUIEncryptedStringInput.js.map