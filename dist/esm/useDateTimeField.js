import { useMemo } from "react";
import { useFieldMetadata } from "./auto/hooks/useFieldMetadata.js";
import { isValidDate } from "./dateTimeUtils.js";
import { useController } from "./useActionForm.js";
export const useDateTimeField = (props) => {
    const { path, metadata } = useFieldMetadata(props.field);
    const { field: fieldProps, fieldState } = useController({ name: path });
    const { onChange, value } = props;
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTime = useMemo(() => {
        if (value)
            return value;
        if (fieldProps.value == null)
            return undefined; // Prevents null from becoming 1970
        const date = new Date(fieldProps.value);
        return isValidDate(date) ? date : undefined;
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
//# sourceMappingURL=useDateTimeField.js.map