"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoTableBooleanCell = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const makeShadcnAutoTableBooleanCell = (elements) => {
    const { Label } = elements;
    function ShadcnAutoTableBooleanCell(props) {
        const { value } = props;
        const displayValue = value === true ? Checkmark : value === false ? Cross : null;
        return (React.createElement(React.Fragment, null,
            React.createElement(Label, { className: "flex items-center justify-center" }, displayValue)));
    }
    return ShadcnAutoTableBooleanCell;
};
exports.makeShadcnAutoTableBooleanCell = makeShadcnAutoTableBooleanCell;
const Checkmark = "✓";
const Cross = "✗";
//# sourceMappingURL=ShadcnAutoTableBooleanCell.js.map