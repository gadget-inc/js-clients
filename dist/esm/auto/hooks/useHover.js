import { useState } from "react";
/** Used for tracking hover state on an element */
export function useHover() {
    const [value, setValue] = useState(false);
    const onMouseEnter = () => setValue(true);
    const onMouseLeave = () => setValue(false);
    return [value, { onMouseEnter, onMouseLeave }];
}
//# sourceMappingURL=useHover.js.map