"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDefaultPreventedButton = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const makeDefaultPreventedButton = (elements) => {
    const { Button } = elements;
    const DefaultPreventedButton = react_1.default.forwardRef((props, ref) => {
        return (react_1.default.createElement(Button, { ref: ref, ...props, onClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
                props.onClick?.(e);
            } }));
    });
    DefaultPreventedButton.displayName = "DefaultPreventedButton";
    return DefaultPreventedButton;
};
exports.makeDefaultPreventedButton = makeDefaultPreventedButton;
//# sourceMappingURL=ShadcnDefaultPreventedButton.js.map