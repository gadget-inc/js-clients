import { TextField } from "@shopify/polaris";
import React from "react";
import { useFocus } from "../../../useFocus.js";
import { getPropsWithoutRef } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useJSONInputController } from "../../hooks/useJSONInputController.js";
/**
 * A JSON editor within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoJSONInput field="fieldA" label="Field A" />
 * </AutoForm>
 * ```
 * @param props.field - The JSON field API identifier.
 * @param props.label - Label of the JSON editor.
 * @returns The AutoJSONInput component
 */
export const PolarisAutoJSONInput = autoInput((props) => {
    const [isFocused, focusProps] = useFocus();
    const { field: _field, control: _control, ...restOfProps } = props;
    const { type: _type, errorMessage, ...controller } = useJSONInputController(props);
    const label = props.label ?? controller.label;
    return (React.createElement(React.Fragment, null,
        React.createElement(TextField, { multiline: 4, monospaced: true, requiredIndicator: controller.metadata.requiredArgumentForInput, error: !isFocused && errorMessage && `Invalid JSON: ${errorMessage}`, ...getPropsWithoutRef(controller), ...getPropsWithoutRef(focusProps), ...restOfProps, label: label })));
});
//# sourceMappingURL=PolarisAutoJSONInput.js.map