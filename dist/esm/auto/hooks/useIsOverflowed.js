import { useCallback, useEffect, useRef, useState } from "react";
export const useIsOverflowed = (options = {}) => {
    const { useScrollWidthCheck = false } = options;
    const [isOverflowed, setIsOverflow] = useState(false);
    const childElementRef = useRef(null);
    const containerRef = useRef(null);
    const checkOverflow = useCallback(() => {
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
    useEffect(() => {
        checkOverflow(); // Initial check
    }, [checkOverflow]);
    return {
        isOverflowed,
        childElementRef,
        containerRef,
        checkOverflow,
    };
};
//# sourceMappingURL=useIsOverflowed.js.map