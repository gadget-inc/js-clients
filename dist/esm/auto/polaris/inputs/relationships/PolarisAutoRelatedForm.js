import React from "react";
import { useFieldMetadata } from "../../../hooks/useFieldMetadata.js";
export const PolarisAutoRelatedForm = (props) => {
    const { field } = props;
    const { metadata } = useFieldMetadata(field);
    console.log({ metadata }, "foo foo fas");
    return React.createElement("div", null, "hi");
};
//# sourceMappingURL=PolarisAutoRelatedForm.js.map