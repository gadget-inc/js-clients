import { Listbox, Text } from "@shopify/polaris";
import React from "react";
export const SelectableOption = (props) => {
    const { label, id, selected } = props;
    return typeof label === "string" ? (React.createElement(Listbox.Option, { key: id, value: id, selected: selected }, label)) : (React.createElement(Listbox.Action, { key: id, value: id, selected: selected }, label));
};
export const ListMessage = (props) => (React.createElement("div", { style: { padding: "16px" } },
    React.createElement(Text, { as: "p", tone: "subdued" }, props.message)));
export const NoRecordsMessage = () => React.createElement(ListMessage, { message: "No records found" });
export const getErrorMessage = (errorString) => {
    if (errorString.includes("GGT_PERMISSION_DENIED"))
        return `Missing permissions. Cannot read related model`;
    if (errorString.includes("GGT_INVALID_STORED_DATA"))
        return `Invalid records found in related model`;
    return "Cannot retrieve records from related model";
};
//# sourceMappingURL=PolarisListMessages.js.map