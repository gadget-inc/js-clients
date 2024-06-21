import type { TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";
import type { ChangeEvent } from "react";
import React, { useCallback, useState } from "react";
import { useFocus } from "../../../useFocus.js";

export const MUIJSONInput = (props: Omit<TextFieldProps, "value" | "onChange"> & { value: any; onChange: (value: any) => void }) => {
  const { value, onChange, ...rest } = props;
  const [json, setJSON] = useState<any>(value);
  const [error, setError] = useState<Error | false>(false);
  const [string, setString] = useState<string>(JSON.stringify(json, null, 2));
  const [isFocused, focusProps] = useFocus();

  const onStringChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newString = event.target.value;
      setString(newString);
      try {
        const newJSON = JSON.parse(newString);
        setJSON(newJSON);
        setError(false);
        onChange(newJSON);
      } catch (error: any) {
        setError(error);
      }
    },
    [onChange]
  );

  const inErrorState = !isFocused && !!error;

  return (
    <TextField
      multiline
      maxRows={4}
      inputProps={{ style: { fontFamily: "monospace" } }}
      value={string}
      onChange={onStringChange}
      error={inErrorState}
      helperText={inErrorState && `Invalid JSON: ${error.message}`}
      {...focusProps}
      {...rest}
    />
  );
};
