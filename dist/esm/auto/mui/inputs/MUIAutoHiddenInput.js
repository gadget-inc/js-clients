import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useHiddenInput } from "../../hooks/useHiddenInput.js";
export const MUIAutoHiddenInput = autoInput((props) => {
    const fieldProps = useHiddenInput(props);
    return React.createElement("input", { type: "hidden", ...fieldProps });
});
//# sourceMappingURL=MUIAutoHiddenInput.js.map