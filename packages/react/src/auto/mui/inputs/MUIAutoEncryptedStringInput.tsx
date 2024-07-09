import type { TextFieldProps } from "@mui/material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import type { Control } from "react-hook-form";
import { MUIAutoTextInput } from "./MUIAutoTextInput.js";

export const MUIAutoEncryptedStringInput = (
  props: {
    field: string; // The field API identifier
    control?: Control<any>;
  } & Partial<TextFieldProps>
) => {
  const [isShown, setIsShown] = useState(false);
  const showHideToggleButton = <IconButton onClick={() => setIsShown(!isShown)}>{isShown ? `🔒` : `👁️`}</IconButton>;

  return <MUIAutoTextInput InputProps={{ endAdornment: showHideToggleButton }} type={isShown ? "text" : "password"} {...props} />;
};
