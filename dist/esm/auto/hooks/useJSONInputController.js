import { useCallback, useEffect, useState } from "react";
import { useStringInputController } from "./useStringInputController.js";
export const useJSONInputController = (props) => {
    const { field, control } = props;
    const stringInputController = useStringInputController({ field, control });
    const [error, setError] = useState();
    const [jsonValue, setJSONValue] = useState(stringInputController.value);
    const [stringValue, setStringValue] = useState(JSON.stringify(jsonValue, null, 2));
    const onStringValueChange = useCallback((newString) => {
        setStringValue(newString);
        try {
            const newJSON = JSON.parse(newString);
            setJSONValue(newJSON);
            setError(undefined);
            stringInputController.onChange(newJSON);
        }
        catch (error) {
            if (newString !== "") {
                setError(error);
            }
            else {
                setError(undefined);
            }
        }
    }, [stringInputController]);
    useEffect(() => {
        if (typeof stringValue === "undefined" && JSON.stringify(stringInputController.value) !== "") {
            setStringValue(JSON.stringify(stringInputController.value, null, 2));
        }
    }, [stringValue, stringInputController.value]);
    return {
        onStringValueChange,
        error,
        stringValue,
        jsonValue,
        originalController: stringInputController,
    };
};
//# sourceMappingURL=useJSONInputController.js.map