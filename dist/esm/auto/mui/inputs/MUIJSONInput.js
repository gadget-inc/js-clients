import { TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useFocus } from "../../../useFocus.js";
export const MUIJSONInput = (props) => {
    const { value, onChange, ...rest } = props;
    const [json, setJSON] = useState(value);
    const [error, setError] = useState(false);
    const [string, setString] = useState(JSON.stringify(json, null, 2));
    const [isFocused, focusProps] = useFocus();
    const onStringChange = useCallback((event) => {
        const newString = event.target.value;
        setString(newString);
        try {
            const newJSON = JSON.parse(newString);
            setJSON(newJSON);
            setError(false);
            onChange(newJSON);
        }
        catch (error) {
            setError(error);
        }
    }, [onChange]);
    const inErrorState = !isFocused && !!error;
    return (React.createElement(TextField, { multiline: true, maxRows: 4, inputProps: { style: { fontFamily: "monospace" } }, value: string, onChange: onStringChange, error: inErrorState, helperText: inErrorState && `Invalid JSON: ${error.message}`, ...focusProps, ...rest }));
};
//# sourceMappingURL=MUIJSONInput.js.map