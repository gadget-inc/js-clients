import { Icon, Tag, Text } from "@shopify/polaris";
import { HideIcon, ViewIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
export const PolarisAutoTableEncryptedStringCell = (props) => {
    const { value } = props;
    const [isShown, setIsShown] = useState(false);
    const showHideToggleButton = (React.createElement("div", { style: {
            display: "flex",
            marginLeft: "2px",
        }, onClick: (e) => {
            // Prevent the row's onClick handler from being called when the button is clicked
            e.stopPropagation();
            e.preventDefault();
            setIsShown(!isShown);
        }, role: "EncryptedStringCellShowHideButton" },
        React.createElement(Tag, { onClick: dummyFunctionToGetOnClickStyling },
            React.createElement(Icon, { source: isShown ? HideIcon : ViewIcon }))));
    return (React.createElement("div", { style: { display: "flex" } },
        React.createElement(Tag, null,
            React.createElement(Text, { as: "span", tone: "subdued", truncate: true }, isShown ? value : "•".repeat(value.length))),
        showHideToggleButton));
};
const dummyFunctionToGetOnClickStyling = () => undefined;
//# sourceMappingURL=PolarisAutoTableEncryptedStringCell.js.map