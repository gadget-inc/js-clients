import React from "react";
import { FieldType } from "../../../metadata.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";
/**
 * An id input within Autoform
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoIdInput field="id" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the Id field.
 * @param props.label - Label of the Id input.
 * @returns The AutoIdInput component
 */
export const PolarisAutoIdInput = autoInput((props) => {
    const { field, label } = props;
    const { name, metadata } = useStringInputController({ field });
    if (metadata.fieldType !== FieldType.Id || field !== "id") {
        throw new Error(`PolarisAutoIdInput: field ${field} is not of type Id`);
    }
    return React.createElement(PolarisAutoTextInput, { step: 1, field: field, min: 1, type: "number", label: label || "ID", name: name });
});
//# sourceMappingURL=PolarisAutoIdInput.js.map