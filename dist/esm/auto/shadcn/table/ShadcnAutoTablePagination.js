import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
/**
 * Renders pagination controls for the ShadcnAutoTable
 */
export const makeShadcnAutoTablePagination = (elements) => {
    const { Button } = elements;
    function ShadcnAutoTablePagination(props) {
        const { goToNextPage, goToPreviousPage, hasNextPage, hasPreviousPage } = props.page;
        return (React.createElement("div", { className: "flex flex-row items-center justify-end gap-2 mt-2" },
            React.createElement(Button, { onClick: goToPreviousPage, disabled: !hasPreviousPage, variant: "outline", className: "p-2" },
                React.createElement(ChevronLeft, null)),
            React.createElement(Button, { onClick: goToNextPage, disabled: !hasNextPage, variant: "outline", className: "p-2" },
                React.createElement(ChevronRight, null))));
    }
    return ShadcnAutoTablePagination;
};
//# sourceMappingURL=ShadcnAutoTablePagination.js.map