import React from "react";
import { useRelatedModelRecords } from "src/auto/hooks/useRelatedModel.js";
export const PolarisAutoRelatedForm = (props) => {
    const { field } = props;
    const foof = useRelatedModelRecords(props);
    console.log({ field, foof }, "foo foo fas");
    return React.createElement("div", null, "hi");
};
//# sourceMappingURL=PolarisAutoRelatedForm.js.map