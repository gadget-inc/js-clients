"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoTableEncryptedStringCell = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importStar(require("react"));
const defaults_js_1 = require("../../../shared/defaults.js");
const makeShadcnAutoTableEncryptedStringCell = (elements) => {
    const { Button, Label } = elements;
    function ShadcnAutoTableEncryptedStringCell(props) {
        const { value } = props;
        const [isShown, setIsShown] = (0, react_1.useState)(false);
        // TODO - add context identifiers so that the passed in base component can differentiate how they are being used
        // const labelContextIdentifier = isShown ? EncryptedStringCellComponentIds.shownValueLabel : EncryptedStringCellComponentIds.hiddenValueLabel;
        // const buttonContextIdentifier = isShown ? EncryptedStringCellComponentIds.hideButton : EncryptedStringCellComponentIds.showButton;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { style: { display: "flex", width: "100%", alignItems: "center" } },
                react_1.default.createElement("div", { style: { minWidth: 0, flex: 1, overflow: "hidden", textOverflow: "ellipsis" } },
                    react_1.default.createElement(Label, null, isShown ? value : defaults_js_1.defaultPlaceholderHiddenText)),
                react_1.default.createElement("div", { style: { flexShrink: 0 } },
                    react_1.default.createElement(Button, { variant: "ghost", onClick: () => setIsShown(!isShown) }, isShown ? hideButtonContent : showButtonContent)))));
    }
    return ShadcnAutoTableEncryptedStringCell;
};
exports.makeShadcnAutoTableEncryptedStringCell = makeShadcnAutoTableEncryptedStringCell;
const showButtonContent = react_1.default.createElement(lucide_react_1.Eye, null);
const hideButtonContent = react_1.default.createElement(lucide_react_1.EyeOff, null);
const EncryptedStringCellComponentIds = {
    shownValueLabel: "encrypted-string-cell-shown-value-label",
    hiddenValueLabel: "encrypted-string-cell-hidden-value-label",
    showButton: "encrypted-string-cell-show-button",
    hideButton: "encrypted-string-cell-hide-button",
};
//# sourceMappingURL=ShadcnAutoTableEncryptedStringCell.js.map