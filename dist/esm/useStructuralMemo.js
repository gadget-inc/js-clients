import { useRef } from "react";
import deepEqual from "react-fast-compare";
/**
 * Memoize and ensure a stable identity on a given value as long as it remains the same, structurally.
 */
export const useStructuralMemo = (value) => {
    const ref = useRef();
    if (value) {
        if (ref.current === undefined || !deepEqual(value, ref.current)) {
            ref.current = value;
        }
    }
    else {
        ref.current = undefined;
    }
    return ref.current;
};
//# sourceMappingURL=useStructuralMemo.js.map