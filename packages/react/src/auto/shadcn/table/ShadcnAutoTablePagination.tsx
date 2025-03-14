import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import type { PaginationResult } from "../../../useList.js";
import type { ShadcnElements } from "../elements.js";

/**
 * Renders pagination controls for the ShadcnAutoTable
 */
export const makeShadcnAutoTablePagination = (elements: ShadcnElements) => {
  const { Button } = elements;

  function ShadcnAutoTablePagination(props: { page: PaginationResult }) {
    const { goToNextPage, goToPreviousPage, hasNextPage, hasPreviousPage } = props.page;
    return (
      <div className="flex flex-row items-center justify-end gap-2 mt-2">
        <Button onClick={goToPreviousPage} disabled={!hasPreviousPage} variant="outline" className="p-2">
          <ChevronLeft />
        </Button>
        <Button onClick={goToNextPage} disabled={!hasNextPage} variant="outline" className="p-2">
          <ChevronRight />
        </Button>
      </div>
    );
  }

  return ShadcnAutoTablePagination;
};
