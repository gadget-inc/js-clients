import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { defaultPlaceholderHiddenText } from "../../../shared/defaults.js";
export const makeShadcnAutoTableEncryptedStringCell = (elements) => {
    const { Button, Label } = elements;
    function ShadcnAutoTableEncryptedStringCell(props) {
        const { value } = props;
        const [isShown, setIsShown] = useState(false);
        // TODO - add context identifiers so that the passed in base component can differentiate how they are being used
        // const labelContextIdentifier = isShown ? EncryptedStringCellComponentIds.shownValueLabel : EncryptedStringCellComponentIds.hiddenValueLabel;
        // const buttonContextIdentifier = isShown ? EncryptedStringCellComponentIds.hideButton : EncryptedStringCellComponentIds.showButton;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { style: { display: "flex", width: "100%", alignItems: "center" } },
                React.createElement("div", { style: { minWidth: 0, flex: 1, overflow: "hidden", textOverflow: "ellipsis" } },
                    React.createElement(Label, null, isShown ? value : defaultPlaceholderHiddenText)),
                React.createElement("div", { style: { flexShrink: 0 } },
                    React.createElement(Button, { onClick: () => setIsShown(!isShown) }, isShown ? hideButtonContent : showButtonContent)))));
    }
    return ShadcnAutoTableEncryptedStringCell;
};
const showButtonContent = React.createElement(Eye, null);
const hideButtonContent = React.createElement(EyeOff, null);
const EncryptedStringCellComponentIds = {
    shownValueLabel: "encrypted-string-cell-shown-value-label",
    hiddenValueLabel: "encrypted-string-cell-hidden-value-label",
    showButton: "encrypted-string-cell-show-button",
    hideButton: "encrypted-string-cell-hide-button",
};
//# sourceMappingURL=ShadcnAutoTableEncryptedStringCell.js.map