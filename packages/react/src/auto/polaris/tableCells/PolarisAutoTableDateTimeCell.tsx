import React from "react";
import { formatLongDateTimeString } from "../../../dateTimeUtils.js";
import { PolarisAutoTableTextCell } from "./PolarisAutoTableTextCell.js";

export const PolarisAutoTableDateTimeCell = (props: { value: Date; includeTime: boolean }) => {
  const { value, includeTime } = props;

  return value instanceof Date ? <PolarisAutoTableTextCell value={formatLongDateTimeString(value, includeTime)} /> : null;
};
