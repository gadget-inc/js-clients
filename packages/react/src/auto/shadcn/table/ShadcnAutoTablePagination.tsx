import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { PaginationResult } from "../../../useList.js";
import { ShadcnElements } from "../elements.js";

/**
 * Renders pagination controls for the ShadcnAutoTable
 */
export const makeShadcnAutoTablePagination = (elements: ShadcnElements) => {
  const { Button } = elements;

  function ShadcnAutoTablePagination(props: { page: PaginationResult }) {
    const { goToNextPage, goToPreviousPage, hasNextPage, hasPreviousPage } = props.page;
    return (
      <div className="flex items-center justify-center">
        <Button onClick={goToPreviousPage} disabled={!hasPreviousPage}>
          <ChevronLeft />
        </Button>
        <Button onClick={goToNextPage} disabled={!hasNextPage}>
          <ChevronRight />
        </Button>
      </div>
    );
  }

  return (props: { page: PaginationResult }) => {
    return <ShadcnAutoTablePagination {...props} />;
  };
};
