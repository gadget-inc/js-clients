"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHover = void 0;
const react_1 = require("react");
/** Used for tracking hover state on an element */
function useHover() {
    const [value, setValue] = (0, react_1.useState)(false);
    const onMouseEnter = () => setValue(true);
    const onMouseLeave = () => setValue(false);
    return [value, { onMouseEnter, onMouseLeave }];
}
exports.useHover = useHover;
//# sourceMappingURL=useHover.js.map