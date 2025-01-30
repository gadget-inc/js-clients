import * as React from "react";
import { formatLongDateTimeString } from "../../../../dateTimeUtils.js";
import { makeShadcnAutoTableTextCell, type ShadcnAutoTableTextCellElements } from "./ShadcnAutoTableTextCell.js";

export const makeShadcnAutoTableDateTimeCell = (elements: ShadcnAutoTableTextCellElements) => {
  const ShadcnAutoTableTextCell = makeShadcnAutoTableTextCell(elements);

  function ShadcnAutoTableDateTimeCell(props: { value: any; includeTime: boolean }) {
    const { value, includeTime } = props;

    return value instanceof Date ? <ShadcnAutoTableTextCell value={formatLongDateTimeString(value, includeTime)} /> : null;
  }

  return ShadcnAutoTableDateTimeCell;
};
