import { useCallback, useState } from "react";
import { GadgetFieldType } from "../../internal/gql/graphql.js";
import { useController } from "../../useActionForm.js";
import { useAutoFormMetadata } from "../AutoFormContext.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { assertFieldType } from "./utils.js";
export const usePasswordController = (props) => {
    const { findBy } = useAutoFormMetadata();
    const { path, metadata } = useFieldMetadata(props.field);
    assertFieldType({
        fieldApiIdentifier: props.field,
        actualFieldType: metadata.fieldType,
        expectedFieldType: GadgetFieldType.Password,
    });
    const { field: fieldProps } = useController({ name: path });
    const [isEditing, setIsEditing] = useState(!findBy);
    const onChange = useCallback((...args) => {
        fieldProps.onChange(...args);
        props.afterChange?.(...args);
    }, [fieldProps, props.afterChange]);
    const startEditing = useCallback(() => {
        onChange(""); // Touch the field to mark it as dirty
        setIsEditing(true);
    }, [onChange]);
    return {
        isEditing,
        startEditing,
        fieldProps: { ...fieldProps, onChange },
    };
};
/**
 * The salted password hash is not retrieved from the DB
 * Regardless of the password is defined or not, this placeholder is shown as exposing an unset password is a security risk
 */
export const existingPasswordPlaceholder = "********";
//# sourceMappingURL=usePasswordController.js.map