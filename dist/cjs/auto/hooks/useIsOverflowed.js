"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsOverflowed = void 0;
const react_1 = require("react");
const useIsOverflowed = (options = {}) => {
    const { useScrollWidthCheck = false } = options;
    const [isOverflowed, setIsOverflow] = (0, react_1.useState)(false);
    const childElementRef = (0, react_1.useRef)(null);
    const containerRef = (0, react_1.useRef)(null);
    const checkOverflow = (0, react_1.useCallback)(() => {
        const container = containerRef.current;
        const childElement = childElementRef.current;
        if (!childElement) {
            return;
        }
        if (useScrollWidthCheck) {
            const hasOverflow = childElement.scrollWidth > childElement.clientWidth;
            setIsOverflow(hasOverflow);
        }
        else {
            if (!container)
                return;
            const hasOverflow = container.offsetWidth < childElement.offsetWidth;
            setIsOverflow(hasOverflow);
        }
    }, [useScrollWidthCheck]);
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