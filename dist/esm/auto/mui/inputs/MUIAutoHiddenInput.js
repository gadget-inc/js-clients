import React from "react";
import { useHiddenInput } from "../../hooks/useHiddenInput.js";
export const MUIAutoHiddenInput = (props) => {
    const fieldProps = useHiddenInput(props);
    return React.createElement("input", { type: "hidden", ...fieldProps });
};
//# sourceMappingURL=MUIAutoHiddenInput.js.map