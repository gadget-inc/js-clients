import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
/**
 * Renders pagination controls for the ShadcnAutoTable
 */
export const makeShadcnAutoTablePagination = (elements) => {
    const { Button } = elements;
    function ShadcnAutoTablePagination(props) {
        const { goToNextPage, goToPreviousPage, hasNextPage, hasPreviousPage } = props.page;
        return (React.createElement("div", { className: "flex flex-row items-center gap-2 ml-auto" },
            React.createElement(Button, { onClick: goToPreviousPage, disabled: !hasPreviousPage, variant: "outline", className: `p-2 ${!hasPreviousPage ? "cursor-not-allowed opacity-50" : "cursor-pointer"}` },
                React.createElement(ChevronLeft, null)),
            React.createElement(Button, { onClick: goToNextPage, disabled: !hasNextPage, variant: "outline", className: `p-2 ${!hasNextPage ? "cursor-not-allowed opacity-50" : "cursor-pointer"}` },
                React.createElement(ChevronRight, null))));
    }
    return ShadcnAutoTablePagination;
};
//# sourceMappingURL=ShadcnAutoTablePagination.js.map