"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useJSONInputController = void 0;
const react_1 = require("react");
const useStringInputController_js_1 = require("./useStringInputController.js");
const useJSONInputController = (props) => {
    const { field, control } = props;
    const stringInputController = (0, useStringInputController_js_1.useStringInputController)({ field, control });
    const [error, setError] = (0, react_1.useState)();
    const [jsonValue, setJSONValue] = (0, react_1.useState)(stringInputController.value);
    const [stringValue, setStringValue] = (0, react_1.useState)(JSON.stringify(jsonValue, null, 2));
    const onStringValueChange = (0, react_1.useCallback)((newString) => {
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
    (0, react_1.useEffect)(() => {
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
exports.useJSONInputController = useJSONInputController;
//# sourceMappingURL=useJSONInputController.js.map