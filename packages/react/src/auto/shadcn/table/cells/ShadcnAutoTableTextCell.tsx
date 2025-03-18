import React from "react";
import { useIsOverflowed } from "../../../hooks/useIsOverflowed.js";
import type { ShadcnElements } from "../../elements.js";

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
            {isOverflowed && (
              <TooltipContent className="max-w-[150px] max-h-[100px] overflow-y-auto overflow-x-hidden bg-background border border-neutral-300 shadow-md whitespace-normal break-words">
                {stringifiedValue}
              </TooltipContent>
            )}
            <TooltipTrigger className="max-w-full overflow-hidden text-ellipsis">
              <Label>
                <span ref={childElementRef}>{stringifiedValue}</span>
              </Label>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  }

  return ShadcnAutoTableTextCell;
};
