"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDateTimeField = void 0;
const react_1 = require("react");
const useFieldMetadata_js_1 = require("./auto/hooks/useFieldMetadata.js");
const dateTimeUtils_js_1 = require("./dateTimeUtils.js");
const useActionForm_js_1 = require("./useActionForm.js");
const useDateTimeField = (props) => {
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const { field: fieldProps, fieldState } = (0, useActionForm_js_1.useController)({ name: path });
    const { onChange, value } = props;
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTime = (0, react_1.useMemo)(() => {
        if (value)
            return value;
        if (fieldProps.value == null)
            return undefined; // Prevents null from becoming 1970
        const date = new Date(fieldProps.value);
        return (0, dateTimeUtils_js_1.isValidDate)(date) ? date : undefined;
    }, [value, fieldProps.value]);
    return {
        path,
        metadata,
        fieldProps,
        fieldState,
        localTz,
        localTime,
        onChange,
        value,
    };
};
exports.useDateTimeField = useDateTimeField;
//# sourceMappingURL=useDateTimeField.js.map