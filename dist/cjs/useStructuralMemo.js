"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStructuralMemo = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const react_fast_compare_1 = tslib_1.__importDefault(require("react-fast-compare"));
/**
 * Memoize and ensure a stable identity on a given value as long as it remains the same, structurally.
 */
const useStructuralMemo = (value) => {
    const ref = (0, react_1.useRef)();
    if (value) {
        if (ref.current === undefined || !(0, react_fast_compare_1.default)(value, ref.current)) {
            ref.current = value;
        }
    }
    else {
        ref.current = undefined;
    }
    return ref.current;
};
exports.useStructuralMemo = useStructuralMemo;
//# sourceMappingURL=useStructuralMemo.js.map