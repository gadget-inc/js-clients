import { useCallback, useEffect, useState } from "react";
import deepEqual from "react-fast-compare";
import { isFailedJSONParse } from "../../validationSchema.js";
import { useStringInputController } from "./useStringInputController.js";
export const useJSONInputController = (props) => {
    const stringInputController = useStringInputController(props);
    const jsonValue = stringInputController.value;
    const isParseError = isFailedJSONParse(jsonValue);
    const [string, setString] = useState(stringInputController.value && !isParseError ? JSON.stringify(jsonValue, null, 2) : "");
    // propagate imperative changes from the form state into the string input, but only if the parsed representations aren't equal
    useEffect(() => {
        if (typeof jsonValue != "undefined" && jsonValue != null && !isParseError) {
            try {
                const stringJSONValue = JSON.parse(jsonValue);
                if (!deepEqual(stringJSONValue, jsonValue)) {
                    setString(JSON.stringify(jsonValue, null, 2));
                }
            }
            catch (error) {
                setString(JSON.stringify(jsonValue, null, 2));
            }
        }
    }, [jsonValue, isParseError]);
    // Setting the value to an empty string when the value gets undefined through resets
    useEffect(() => {
        if (stringInputController.value === undefined) {
            setString("");
        }
    }, [stringInputController.value]);
    const onChange = useCallback((newString) => {
        setString(newString);
        if (newString == "") {
            stringInputController.onChange(null);
            return;
        }
        try {
            const parsed = JSON.parse(newString);
            stringInputController.onChange(parsed);
        }
        catch (error) {
            stringInputController.onChange({
                $failedParse: true,
                raw: newString,
                error,
            });
        }
    }, [stringInputController]);
    return {
        ...stringInputController,
        onChange,
        value: string,
    };
};
//# sourceMappingURL=useJSONInputController.js.map