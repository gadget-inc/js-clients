import React from "react";
import { countNumberOfDecimals, getStepFromNumberOfDecimals } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { makeShadcnAutoStringInput } from "./ShadcnAutoStringInput.js";
export const makeShadcnAutoNumberInput = ({ Input, Label }) => {
    const AutoStringInput = makeShadcnAutoStringInput({ Input, Label });
    function AutoNumberInput(props) {
        const { metadata, value } = useStringInputController(props);
        const step = metadata.configuration.__typename === "GadgetNumberConfig" && metadata.configuration.decimals && metadata.configuration.decimals > 0
            ? getStepFromNumberOfDecimals(metadata.configuration.decimals)
            : value
                ? getStepFromNumberOfDecimals(countNumberOfDecimals(`${value}`))
                : 1;
        return React.createElement(AutoStringInput, { ...props, step: step, type: "number" });
    }
    return autoInput(AutoNumberInput);
};
//# sourceMappingURL=ShadcnAutoNumberInput.js.map