import { Tooltip } from "@shopify/polaris";
import React, { useEffect, useRef, useState } from "react";

export const PolarisAutoTableTextCell = (props: { value: any }) => {
  const { value } = props;
  const stringifiedValue = typeof value === "object" ? ("markdown" in value ? value.markdown : JSON.stringify(value)) : value;

  const [isOverflowed, setIsOverflow] = useState(false);
  const textElementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setIsOverflow(!!textElementRef.current && textElementRef.current.scrollWidth > textElementRef.current.clientWidth);
  }, []);

  const polarisTextWithRef = (
    <span className="Polaris-Text--root Polaris-Text--block Polaris-Text--truncate" ref={textElementRef}>
      {stringifiedValue}
    </span>
  );

  if (!isOverflowed) {
    return polarisTextWithRef;
  }

  return (
    <Tooltip
      width="wide"
      persistOnClick
      content={<div style={{ maxHeight: "200px", overflow: "auto", pointerEvents: "auto" }}>{stringifiedValue}</div>}
    >
      {polarisTextWithRef}
    </Tooltip>
  );
};
