"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFocus = void 0;
const react_1 = require("react");
/** Used for tracking focus state on an element */
function useFocus(outerRef) {
    const [hasFocus, setFocus] = (0, react_1.useState)(false);
    const [hasFocusWithin, setFocusWithin] = (0, react_1.useState)(false);
    const innerRef = (0, react_1.useRef)(null);
    const ref = outerRef ?? innerRef;
    const onFocus = (e) => {
        if (!e)
            return;
        const isRef = e.target === ref.current;
        setFocus(true);
        if (!isRef) {
            setFocusWithin(true);
        }
    };
    const onBlur = (e) => {
        if (!e)
            return;
        const isRef = e.target === ref.current;
        setFocus(false);
        if (!isRef) {
            setFocusWithin(false);
        }
    };
    return [hasFocus, { onFocus, onBlur, ref }, hasFocusWithin];
}
exports.useFocus = useFocus;
//# sourceMappingURL=useFocus.js.map