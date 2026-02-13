import React from "react";
import { formatLongDateTimeString } from "../../../dateTimeUtils.js";
import { PolarisWCAutoTableTextCell } from "./PolarisWCAutoTableTextCell.js";

export const PolarisWCAutoTableDateTimeCell = (props: { value: Date; includeTime: boolean }) => {
  const { value, includeTime } = props;

  return value instanceof Date ? <PolarisWCAutoTableTextCell value={formatLongDateTimeString(value, includeTime)} /> : null;
};
