import { Tooltip } from "@shopify/polaris";
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
    return (React.createElement(Tooltip, { width: "wide", persistOnClick: true, content: React.createElement("div", { style: { maxHeight: "200px", overflow: "auto", pointerEvents: "auto" } }, stringifiedValue) }, polarisTextWithRef));
};
//# sourceMappingURL=PolarisAutoTableTextCell.js.map