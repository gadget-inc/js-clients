"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiref = void 0;
/** Allows the use of multiple refs with one component */
const multiref = (...refs) => {
    return (value) => {
        for (const ref of refs) {
            if (ref) {
                if (typeof ref == "function") {
                    ref(value);
                }
                else {
                    ref.current = value;
                }
            }
        }
    };
};
exports.multiref = multiref;
//# sourceMappingURL=utils.js.map