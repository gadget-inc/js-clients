import React from "react";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";
export const PolarisAutoNumberInput = (props) => {
    const { field, control } = props;
    const { type, metadata } = useStringInputController({ field, control });
    const fieldType = type;
    let step;
    if (fieldType === "number" &&
        metadata.configuration.__typename === "GadgetNumberConfig" &&
        metadata.configuration.decimals &&
        metadata.configuration.decimals > 0) {
        step = Number(`0.${"0".repeat(metadata.configuration.decimals - 1)}1`);
    }
    else {
        step = "any";
    }
    return (React.createElement(PolarisAutoTextInput, { step: step, ...props }));
};
//# sourceMappingURL=PolarisAutoNumberInput.js.map