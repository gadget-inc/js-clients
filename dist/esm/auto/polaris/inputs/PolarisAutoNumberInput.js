import React from "react";
import { countNumberOfDecimals, getStepFromNumberOfDecimals } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";
export const PolarisAutoNumberInput = autoInput((props) => {
    const { field, control } = props;
    const { type, metadata, value } = useStringInputController({ field, control });
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