import { useRef, useState } from "react";
/** Used for tracking focus state on an element */
export function useFocus(outerRef) {
    const [hasFocus, setFocus] = useState(false);
    const [hasFocusWithin, setFocusWithin] = useState(false);
    const innerRef = useRef(null);
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
//# sourceMappingURL=useFocus.js.map