import React from "react";
import { autoInput } from "../../../AutoInput.js";
import { useHasManyThroughInputController } from "../../../hooks/useHasManyThroughInputController.js";
export const PolarisAutoHasManyThroughInput = autoInput((props) => {
    const { field } = props;
    const { fieldMetadata, relatedModelOptions } = useHasManyThroughInputController(props);
    console.log({ field, fieldMetadata, relatedModelOptions });
    return React.createElement("div", null, "hi");
});
//# sourceMappingURL=PolarisAutoHasManyThroughInput.js.map