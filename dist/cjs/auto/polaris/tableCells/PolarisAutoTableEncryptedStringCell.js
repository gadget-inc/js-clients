"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTableEncryptedStringCell = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importStar(require("react"));
const defaults_js_1 = require("../../shared/defaults.js");
const PolarisAutoTableEncryptedStringCell = (props) => {
    const { value } = props;
    const [isShown, setIsShown] = (0, react_1.useState)(false);
    const showHideToggleButton = (react_1.default.createElement("div", { style: {
            display: "flex",
            marginLeft: "2px",
        }, onClick: (e) => {
            // Prevent the row's onClick handler from being called when the button is clicked
            e.stopPropagation();
            e.preventDefault();
            setIsShown(!isShown);
        }, role: "EncryptedStringCellShowHideButton" },
        react_1.default.createElement(polaris_1.Tag, { onClick: dummyFunctionToGetOnClickStyling },
            react_1.default.createElement(polaris_1.Icon, { source: isShown ? polaris_icons_1.HideIcon : polaris_icons_1.ViewIcon }))));
    return (react_1.default.createElement("div", { style: { display: "flex", width: "100%" } },
        react_1.default.createElement("div", { style: { minWidth: 0, flex: 1 } },
            react_1.default.createElement(polaris_1.Tag, null,
                react_1.default.createElement(polaris_1.Text, { as: "span", tone: "subdued", truncate: true }, isShown ? value : defaults_js_1.defaultPlaceholderHiddenText))),
        showHideToggleButton));
};
exports.PolarisAutoTableEncryptedStringCell = PolarisAutoTableEncryptedStringCell;
const dummyFunctionToGetOnClickStyling = () => undefined;
//# sourceMappingURL=PolarisAutoTableEncryptedStringCell.js.map