import * as React from "react";
export const makeShadcnAutoTableBooleanCell = (elements) => {
    const { Label } = elements;
    function ShadcnAutoTableBooleanCell(props) {
        const { value } = props;
        const displayValue = value === true ? Checkmark : value === false ? Cross : null;
        return (React.createElement(React.Fragment, null,
            React.createElement(Label, { className: "flex items-center justify-center" }, displayValue)));
    }
    return ShadcnAutoTableBooleanCell;
};
const Checkmark = "✓";
const Cross = "✗";
//# sourceMappingURL=ShadcnAutoTableBooleanCell.js.map