import { Listbox } from "@shopify/polaris";
import React from "react";
import { ListMessage, NoRecordsMessage, SelectableOption, getErrorMessage } from "./PolarisListMessages.js";
export const RelatedModelOptions = (props) => {
    const { checkSelected, onSelect, isLoading, errorMessage, options } = props;
    return (React.createElement(Listbox, { onSelect: onSelect },
        options.length ? (options.map((option) => React.createElement(SelectableOption, { ...option, selected: checkSelected?.(option.id) ?? false, key: option.id }))) : errorMessage ? (React.createElement(ListMessage, { message: getErrorMessage(errorMessage) })) : (React.createElement(NoRecordsMessage, null)),
        isLoading && React.createElement(Listbox.Loading, { accessibilityLabel: "Loading" })));
};
//# sourceMappingURL=RelatedModelOptions.js.map