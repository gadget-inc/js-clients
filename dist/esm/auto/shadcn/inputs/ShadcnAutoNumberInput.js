import React from "react";
import { countNumberOfDecimals, getStepFromNumberOfDecimals } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { makeShadcnAutoTextInput } from "./ShadcnAutoTextInput.js";
export const makeShadcnAutoNumberInput = ({ Input, Label }) => {
    const ShadcnAutoTextInput = makeShadcnAutoTextInput({ Input, Label });
    function ShadcnAutoNumberInput(props) {
        const { field, control } = props;
        const { metadata, value } = useStringInputController({ field, control });
        const step = metadata.configuration.__typename === "GadgetNumberConfig" && metadata.configuration.decimals && metadata.configuration.decimals > 0
            ? getStepFromNumberOfDecimals(metadata.configuration.decimals)
            : value
                ? getStepFromNumberOfDecimals(countNumberOfDecimals(`${value}`))
                : 1;
        return React.createElement(ShadcnAutoTextInput, { ...props, step: step, type: "number" });
    }
    return autoInput(ShadcnAutoNumberInput);
};
//# sourceMappingURL=ShadcnAutoNumberInput.js.map