"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoTablePagination = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const React = tslib_1.__importStar(require("react"));
/**
 * Renders pagination controls for the ShadcnAutoTable
 */
const makeShadcnAutoTablePagination = (elements) => {
    const { Button } = elements;
    function ShadcnAutoTablePagination(props) {
        const { goToNextPage, goToPreviousPage, hasNextPage, hasPreviousPage } = props.page;
        return (React.createElement("div", { className: "flex items-center justify-center" },
            React.createElement(Button, { onClick: goToPreviousPage, disabled: !hasPreviousPage },
                React.createElement(lucide_react_1.ChevronLeft, null)),
            React.createElement(Button, { onClick: goToNextPage, disabled: !hasNextPage },
                React.createElement(lucide_react_1.ChevronRight, null))));
    }
    return ShadcnAutoTablePagination;
};
exports.makeShadcnAutoTablePagination = makeShadcnAutoTablePagination;
//# sourceMappingURL=ShadcnAutoTablePagination.js.map