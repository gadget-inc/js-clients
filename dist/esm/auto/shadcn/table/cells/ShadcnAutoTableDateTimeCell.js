import * as React from "react";
import { formatLongDateTimeString } from "../../../../dateTimeUtils.js";
import { makeShadcnAutoTableTextCell } from "./ShadcnAutoTableTextCell.js";
export const makeShadcnAutoTableDateTimeCell = (elements) => {
    const ShadcnAutoTableTextCell = makeShadcnAutoTableTextCell(elements);
    function ShadcnAutoTableDateTimeCell(props) {
        const { value, includeTime } = props;
        return value instanceof Date ? React.createElement(ShadcnAutoTableTextCell, { value: formatLongDateTimeString(value, includeTime) }) : null;
    }
    return ShadcnAutoTableDateTimeCell;
};
//# sourceMappingURL=ShadcnAutoTableDateTimeCell.js.map