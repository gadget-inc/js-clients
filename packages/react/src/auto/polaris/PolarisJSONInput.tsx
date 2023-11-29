import type { TextFieldProps } from "@shopify/polaris";
import { TextField } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { useFocus } from "../../useFocus.js";

export const PolarisJSONInput = (props: Omit<TextFieldProps, "value" | "onChange"> & { value: any; onChange: (value: any) => void }) => {
  const { value, onChange, ...rest } = props;
  const [json, setJSON] = useState<any>(value);
  const [error, setError] = useState<Error | false>(false);
  const [string, setString] = useState<string>(JSON.stringify(json, null, 2));
  const [isFocused, focusProps] = useFocus();

  const onStringChange = useCallback(
    (newString: string) => {
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

  return (
    <TextField
      multiline={4}
      monospaced
      value={string}
      onChange={onStringChange}
      error={!isFocused && error && `Invalid JSON: ${error.message}`}
      {...focusProps}
      {...rest}
    />
  );
};
