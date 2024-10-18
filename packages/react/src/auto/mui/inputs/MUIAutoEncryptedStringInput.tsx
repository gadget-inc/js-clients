import type { TextFieldProps } from "@mui/material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import type { Control } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { MUIAutoTextInput } from "./MUIAutoTextInput.js";

export const MUIAutoEncryptedStringInput = autoInput(
  (
    props: {
      field: string; // The field API identifier
      control?: Control<any>;
    } & Partial<TextFieldProps>
  ) => {
    const [isShown, setIsShown] = useState(false);
    const showHideToggleButton = <IconButton onClick={() => setIsShown(!isShown)}>{isShown ? `🔒` : `👁️`}</IconButton>;

    return <MUIAutoTextInput InputProps={{ endAdornment: showHideToggleButton }} type={isShown ? "text" : "password"} {...props} />;
  }
);
