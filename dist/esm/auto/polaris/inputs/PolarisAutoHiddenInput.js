import React from "react";
import { useHiddenInput } from "../../hooks/useHiddenInput.js";
export const PolarisAutoHiddenInput = (props) => {
    const fieldProps = useHiddenInput(props);
    return React.createElement("input", { type: "hidden", ...fieldProps });
};
//# sourceMappingURL=PolarisAutoHiddenInput.js.map