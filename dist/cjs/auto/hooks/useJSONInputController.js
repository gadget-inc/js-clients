"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useJSONInputController = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const react_fast_compare_1 = tslib_1.__importDefault(require("react-fast-compare"));
const graphql_js_1 = require("../../internal/gql/graphql.js");
const validationSchema_js_1 = require("../../validationSchema.js");
const useStringInputController_js_1 = require("./useStringInputController.js");
const utils_js_1 = require("./utils.js");
const useJSONInputController = (props) => {
    const stringInputController = (0, useStringInputController_js_1.useStringInputController)(props);
    (0, utils_js_1.assertFieldType)({
        fieldApiIdentifier: props.field,
        actualFieldType: stringInputController.metadata.fieldType,
        expectedFieldType: graphql_js_1.GadgetFieldType.Json,
    });
    const jsonValue = stringInputController.value;
    const isParseError = (0, validationSchema_js_1.isFailedJSONParse)(jsonValue);
    const [string, setString] = (0, react_1.useState)(stringInputController.value && !isParseError ? JSON.stringify(jsonValue, null, 2) : "");
    // propagate imperative changes from the form state into the string input, but only if the parsed representations aren't equal
    (0, react_1.useEffect)(() => {
        if (typeof jsonValue != "undefined" && jsonValue != null && !isParseError) {
            try {
                const stringJSONValue = JSON.parse(jsonValue);
                if (!(0, react_fast_compare_1.default)(stringJSONValue, jsonValue)) {
                    setString(JSON.stringify(jsonValue, null, 2));
                }
            }
            catch (error) {
                setString(JSON.stringify(jsonValue, null, 2));
            }
        }
    }, [jsonValue, isParseError]);
    // Setting the value to an empty string when the value gets undefined through resets
    (0, react_1.useEffect)(() => {
        if (stringInputController.value === undefined) {
            setString("");
        }
    }, [stringInputController.value]);
    const onChange = (0, react_1.useCallback)((newString) => {
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
exports.useJSONInputController = useJSONInputController;
//# sourceMappingURL=useJSONInputController.js.map