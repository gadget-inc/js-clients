import { Listbox, Text } from "@shopify/polaris";
import React from "react";
import { getErrorMessage } from "../../../../utils.js";
export const SelectableOption = (props) => {
    const { label, id, selected } = props;
    return typeof label === "string" ? (React.createElement(Listbox.Option, { key: id, value: id, selected: selected }, label)) : (React.createElement(Listbox.Action, { key: id, value: id, selected: selected }, label));
};
export const ListMessage = (props) => (React.createElement("div", { style: { padding: "16px" } },
    React.createElement(Text, { as: "p", tone: "subdued" }, props.message)));
export const NoRecordsMessage = () => React.createElement(ListMessage, { message: "No records found" });
export { getErrorMessage };
//# sourceMappingURL=PolarisListMessages.js.map