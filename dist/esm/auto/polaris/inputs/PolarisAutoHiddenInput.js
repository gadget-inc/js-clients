import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useHiddenInput } from "../../hooks/useHiddenInput.js";
export const PolarisAutoHiddenInput = autoInput((props) => {
    const fieldProps = useHiddenInput(props);
    return React.createElement("input", { type: "hidden", ...fieldProps });
});
//# sourceMappingURL=PolarisAutoHiddenInput.js.map