"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDateTimeField = void 0;
const react_1 = require("react");
const dateTimeUtils_js_1 = require("../../dateTimeUtils.js");
const graphql_js_1 = require("../../internal/gql/graphql.js");
const useActionForm_js_1 = require("../../useActionForm.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const utils_js_1 = require("./utils.js");
const useDateTimeField = (props) => {
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    (0, utils_js_1.assertFieldType)({
        fieldApiIdentifier: props.field,
        actualFieldType: metadata.fieldType,
        expectedFieldType: graphql_js_1.GadgetFieldType.DateTime,
    });
    const { field: fieldProps, fieldState } = (0, useActionForm_js_1.useController)({ name: path });
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTime = (0, react_1.useMemo)(() => {
        if (fieldProps.value == null)
            return undefined; // Prevents null from becoming 1970
        const date = new Date(fieldProps.value);
        return (0, dateTimeUtils_js_1.isValidDate)(date) ? date : undefined;
    }, [fieldProps.value]);
    const onChange = (0, react_1.useCallback)((...args) => {
        fieldProps.onChange(...args);
        props.afterChange?.(...args);
    }, [fieldProps.onChange, props.afterChange]);
    return {
        path,
        metadata,
        fieldProps: {
            ...fieldProps,
            onChange,
        },
        fieldState,
        localTz,
        localTime,
    };
};
exports.useDateTimeField = useDateTimeField;
//# sourceMappingURL=useDateTimeField.js.map