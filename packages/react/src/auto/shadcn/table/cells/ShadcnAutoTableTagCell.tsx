import * as React from "react";
import { useIsOverflowed } from "../../../hooks/useIsOverflowed.js";
import { useTagsForTableCellRenderer } from "../../../hooks/useTagsForTableCellRenderer.js";
import type { ShadcnElements } from "../../elements.js";

export const makeShadcnAutoTableTagCell = (elements: ShadcnElements) => {
  const { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, Badge } = elements;

  function TagList(props: { tags: string[]; tagPrefix: string }) {
    const { tags, tagPrefix } = props;
    return (
      <>
        {tags.map((tag, i) => (
          <Badge key={`${tagPrefix}-${tag}-${i}`} variant="outline">
            {tag}
          </Badge>
        ))}
      </>
    );
  }

  function ShadcnAutoTableTagCell(props: { value: any }) {
    const { value } = props;
    const { isOverflowed, childElementRef, containerRef } = useIsOverflowed();
    const { allTags, shortenedTags, hasOmittedTags } = useTagsForTableCellRenderer({ value });

    return (
      <>
        <div style={{ maxWidth: "100%" }} ref={containerRef}>
          <TooltipProvider>
            <Tooltip>
              {(isOverflowed || hasOmittedTags) && (
                <TooltipContent className="max-w-[150px] max-h-[100px] overflow-y-auto overflow-x-hidden bg-white border border-neutral-300 shadow-md whitespace-normal break-words">
                  <TagList tags={allTags} tagPrefix="all-tags" />
                </TooltipContent>
              )}
              <TooltipTrigger className="max-w-full overflow-hidden text-ellipsis">
                <div ref={childElementRef} style={{ width: "fit-content" }}>
                  <TagList tags={shortenedTags} tagPrefix="shortened-tags" />
                </div>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        </div>
      </>
    );
  }

  return ShadcnAutoTableTagCell;
};
