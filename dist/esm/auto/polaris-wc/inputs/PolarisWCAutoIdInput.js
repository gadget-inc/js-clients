import React from "react";
import { FieldType } from "../../../metadata.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { PolarisWCAutoTextInput } from "./PolarisWCAutoTextInput.js";
/**
 * An id input within AutoForm using Polaris Web Components.
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
export const PolarisWCAutoIdInput = autoInput((props) => {
    const { field, label, ...rest } = props;
    const { name, metadata } = useStringInputController({ field });
    if (metadata.fieldType !== FieldType.Id || field !== "id") {
        throw new Error(`PolarisWCAutoIdInput: field ${field} is not of type Id`);
    }
    return React.createElement(PolarisWCAutoTextInput, { field: field, label: label || "ID", min: 1, step: 1, type: "number", ...rest });
});
//# sourceMappingURL=PolarisWCAutoIdInput.js.map