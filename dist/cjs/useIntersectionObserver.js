"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIntersectionObserver = void 0;
const react_1 = require("react");
const useIntersectionObserver = (onIntersect, rootRef, options) => {
    const sentinelRef = (0, react_1.useRef)(null);
    const callback = (0, react_1.useCallback)((entries) => {
        if (entries[0].isIntersecting) {
            onIntersect();
        }
    }, [onIntersect]);
    (0, react_1.useEffect)(() => {
        const root = rootRef.current || null;
        const sentinel = sentinelRef.current;
        if (!sentinel)
            return;
        const observer = new IntersectionObserver(callback, {
            root,
            threshold: 1.0,
            ...options,
        });
        observer.observe(sentinel);
        return () => {
            if (sentinel)
                observer.unobserve(sentinel);
            observer.disconnect();
        };
    }, [callback, rootRef, options]);
    return sentinelRef;
};
exports.useIntersectionObserver = useIntersectionObserver;
//# sourceMappingURL=useIntersectionObserver.js.map