import React from "react";
import { useIsOverflowed } from "../../../hooks/useIsOverflowed.js";
import type { ShadcnElements } from "../../elements.js";
import "./ShadcnAutoTableStyles.css";

export type ShadcnAutoTableTextCellElements = Pick<
  ShadcnElements,
  "Label" | "TooltipProvider" | "Tooltip" | "TooltipTrigger" | "TooltipContent"
>;

export const makeShadcnAutoTableTextCell = (elements: ShadcnAutoTableTextCellElements) => {
  const { Label, TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } = elements;

  function ShadcnAutoTableTextCell(props: { value: any }) {
    const { value } = props;
    const stringifiedValue = typeof value === "object" ? ("markdown" in value ? value.markdown : JSON.stringify(value)) : `${value}`;

    const { isOverflowed, childElementRef, containerRef } = useIsOverflowed();

    return (
      <div style={{ maxWidth: "100%" }} ref={containerRef}>
        <TooltipProvider>
          <Tooltip>
            {isOverflowed && <TooltipContent className="shadcn-auto-table-cell-tooltip-content">{stringifiedValue}</TooltipContent>}
            <TooltipTrigger className="shadcn-auto-table-tooltip-trigger">
              <Label>
                <span ref={childElementRef}>{stringifiedValue}</span>
              </Label>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  }

  return (props: { value: any }) => {
    return <ShadcnAutoTableTextCell {...props} />;
  };
};
