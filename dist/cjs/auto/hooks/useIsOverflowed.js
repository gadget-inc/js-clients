"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsOverflowed = void 0;
const react_1 = require("react");
const useIsOverflowed = () => {
    const [isOverflowed, setIsOverflow] = (0, react_1.useState)(false);
    const childElementRef = (0, react_1.useRef)(null);
    const containerRef = (0, react_1.useRef)(null);
    const checkOverflow = (0, react_1.useCallback)(() => {
        const container = containerRef.current;
        const childElement = childElementRef.current;
        if (!container || !childElement) {
            return;
        }
        const hasOverflow = container.offsetWidth < childElement.offsetWidth;
        setIsOverflow(hasOverflow);
    }, [containerRef, childElementRef, setIsOverflow]);
    (0, react_1.useEffect)(() => {
        checkOverflow(); // Initial check
    }, [checkOverflow]);
    return {
        isOverflowed,
        childElementRef,
        containerRef,
        checkOverflow,
    };
};
exports.useIsOverflowed = useIsOverflowed;
//# sourceMappingURL=useIsOverflowed.js.map