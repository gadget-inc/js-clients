import { TextField } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { useFocus } from "../../../../useFocus";
export const PolarisJSONInput = (props) => {
    const { value, onChange, ...rest } = props;
    const [json, setJSON] = useState(value);
    const [error, setError] = useState(false);
    const [string, setString] = useState(JSON.stringify(json, null, 2));
    const [isFocused, focusProps] = useFocus();
    const onStringChange = useCallback((newString) => {
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
    return (React.createElement(TextField, { multiline: 4, monospaced: true, value: string, onChange: onStringChange, error: !isFocused && error && `Invalid JSON: ${error.message}`, ...focusProps, ...rest }));
};
//# sourceMappingURL=PolarisJSONInput.js.map