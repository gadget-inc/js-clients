import React from "react";
import { PolarisWCTruncatedTextWithTooltip } from "../commonComponents/PolarisWCTruncatedTextWithTooltip.js";

export const PolarisWCAutoTableTextCell = (props: { value: any }) => {
  const { value } = props;

  const stringifiedValue = typeof value === "object" ? ("markdown" in value ? value.markdown : JSON.stringify(value)) : value;

  return <PolarisWCTruncatedTextWithTooltip text={stringifiedValue} />;
};
