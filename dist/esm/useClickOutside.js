import { useEffect } from "react";
export const useClickOutside = (ref, onClickOutside) => {
    useEffect(() => {
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
//# sourceMappingURL=useClickOutside.js.map