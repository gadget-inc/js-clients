import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useHiddenInput } from "../../hooks/useHiddenInput.js";
export const makeShadcnAutoHiddenInput = ({ Input }) => {
    function ShadcnAutoHiddenInput(props) {
        const fieldProps = useHiddenInput(props);
        return React.createElement(Input, { type: "hidden", ...fieldProps });
    }
    return autoInput(ShadcnAutoHiddenInput);
};
//# sourceMappingURL=ShadcnAutoHiddenInput.js.map