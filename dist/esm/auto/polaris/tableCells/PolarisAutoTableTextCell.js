import { Scrollable, Tooltip } from "@shopify/polaris";
import React, { useEffect, useRef, useState } from "react";
export const PolarisAutoTableTextCell = (props) => {
    const { value } = props;
    const stringifiedValue = typeof value === "object" ? ("markdown" in value ? value.markdown : JSON.stringify(value)) : value;
    const [isOverflowed, setIsOverflow] = useState(false);
    const textElementRef = useRef(null);
    useEffect(() => {
        setIsOverflow(!!textElementRef.current && textElementRef.current.scrollWidth > textElementRef.current.clientWidth);
    }, []);
    const polarisTextWithRef = (React.createElement("span", { className: "Polaris-Text--root Polaris-Text--block Polaris-Text--truncate", ref: textElementRef }, stringifiedValue));
    if (!isOverflowed) {
        return polarisTextWithRef;
    }
    return (React.createElement(Tooltip, { content: stringifiedValue, hoverDelay: 500 },
        React.createElement(Scrollable, { shadow: true, style: { maxHeight: "460px" } }, polarisTextWithRef)));
};
//# sourceMappingURL=PolarisAutoTableTextCell.js.map