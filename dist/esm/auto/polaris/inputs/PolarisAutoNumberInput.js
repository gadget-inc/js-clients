import React from "react";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";
export const PolarisAutoNumberInput = (props) => {
    const { field, control } = props;
    const { type, metadata, value } = useStringInputController({ field, control });
    console.log("NUMBER INPUT", "field :", field, "value :", value);
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
};
const getStepFromNumberOfDecimals = (numberOfDecimals) => numberOfDecimals === 0 ? 1 : Number(`0.${"0".repeat(numberOfDecimals - 1)}1`);
const countNumberOfDecimals = (value) => {
    if (value.includes("e")) {
        // +e scientific notation for large numbers does not get decimal steps
        return 0;
    }
    const [, decimals] = value.split(".");
    return decimals?.length ?? 0;
};
//# sourceMappingURL=PolarisAutoNumberInput.js.map