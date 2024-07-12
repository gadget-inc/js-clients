import { format } from "date-fns";
import React from "react";
import { PolarisTableTextCell } from "./PolarisTableTextCell.js";

export const PolarisTableDateTimeCell = (props: { value: Date }) => {
  const { value } = props;

  return value instanceof Date ? <PolarisTableTextCell value={format(value, "LLL d, y K:mm a")} /> : null;
};
