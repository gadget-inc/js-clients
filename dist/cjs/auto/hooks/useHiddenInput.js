"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHiddenInput = void 0;
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useHiddenInput = (props) => {
    const { field, value } = props;
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const { setValue, formState } = (0, react_hook_form_1.useFormContext)();
    (0, react_1.useEffect)(() => {
        setValue(path, value, {
            shouldDirty: true,
        });
    }, [formState.defaultValues, path, setValue, value]);
    return {
        value,
        name: metadata.name,
    };
};
exports.useHiddenInput = useHiddenInput;
//# sourceMappingURL=useHiddenInput.js.map