"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickOutside = void 0;
const react_1 = require("react");
const useClickOutside = (ref, onClickOutside) => {
    (0, react_1.useEffect)(() => {
        const handleEvent = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside();
            }
        };
        document.addEventListener("mousedown", handleEvent);
        document.addEventListener("touchstart", handleEvent);
        return () => {
            document.removeEventListener("mousedown", handleEvent);
            document.removeEventListener("touchstart", handleEvent);
        };
    }, [ref, onClickOutside]);
};
exports.useClickOutside = useClickOutside;
//# sourceMappingURL=useClickOutside.js.map