import React from "react";
import { countNumberOfDecimals, getStepFromNumberOfDecimals } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";
/**
 * A number input within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoNumberInput field="count" />
 * </AutoForm>
 * ```
 * @param props.field - The number field API identifier.
 * @param props.label - Label of the number input.
 * @returns The AutoNumberInput component
 */
export const PolarisAutoNumberInput = autoInput((props) => {
    const { type, metadata, value } = useStringInputController(props);
    const fieldType = type;
    const step = fieldType === "number" &&
        metadata.configuration.__typename === "GadgetNumberConfig" &&
        metadata.configuration.decimals &&
        metadata.configuration.decimals > 0
        ? getStepFromNumberOfDecimals(metadata.configuration.decimals)
        : value
            ? getStepFromNumberOfDecimals(countNumberOfDecimals(`${value}`))
            : 1;
    return React.createElement(PolarisAutoTextInput, { step: step, ...props });
});
//# sourceMappingURL=PolarisAutoNumberInput.js.map