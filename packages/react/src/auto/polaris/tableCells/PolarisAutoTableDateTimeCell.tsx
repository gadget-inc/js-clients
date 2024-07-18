import { format } from "date-fns";
import React from "react";
import { PolarisAutoTableTextCell } from "./PolarisAutoTableTextCell.js";

export const PolarisAutoTableDateTimeCell = (props: { value: Date }) => {
  const { value } = props;

  return value instanceof Date ? <PolarisAutoTableTextCell value={format(value, "LLL d, y K:mm a")} /> : null;
};
