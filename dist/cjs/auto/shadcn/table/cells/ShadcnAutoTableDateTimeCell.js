"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoTableDateTimeCell = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const dateTimeUtils_js_1 = require("../../../../dateTimeUtils.js");
const ShadcnAutoTableTextCell_js_1 = require("./ShadcnAutoTableTextCell.js");
const makeShadcnAutoTableDateTimeCell = (elements) => {
    const ShadcnAutoTableTextCell = (0, ShadcnAutoTableTextCell_js_1.makeShadcnAutoTableTextCell)(elements);
    function ShadcnAutoTableDateTimeCell(props) {
        const { value, includeTime } = props;
        return value instanceof Date ? React.createElement(ShadcnAutoTableTextCell, { value: (0, dateTimeUtils_js_1.formatLongDateTimeString)(value, includeTime) }) : null;
    }
    return ShadcnAutoTableDateTimeCell;
};
exports.makeShadcnAutoTableDateTimeCell = makeShadcnAutoTableDateTimeCell;
//# sourceMappingURL=ShadcnAutoTableDateTimeCell.js.map