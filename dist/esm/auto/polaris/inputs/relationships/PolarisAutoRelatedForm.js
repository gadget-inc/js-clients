import React from "react";
import { useHasManyInputController } from "../../../hooks/useHasManyInputController.js";
export const PolarisAutoRelatedForm = (props) => {
    const { field } = props;
    const foof = useHasManyInputController(props);
    console.log({ field, foof }, "foo foo fas");
    return React.createElement("div", null, "hi");
};
//# sourceMappingURL=PolarisAutoRelatedForm.js.map