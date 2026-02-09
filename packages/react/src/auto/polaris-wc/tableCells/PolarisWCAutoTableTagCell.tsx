import React, { useEffect, useMemo, useRef, useState } from "react";
import type { Nullable, RoleAssignmentsValueType } from "../../../utils.js";
import { useTagsForTableCellRenderer } from "../../hooks/useTagsForTableCellRenderer.js";
import { PolarisWCPopover } from "../commonComponents/PolarisWCPopover.js";

export const PolarisWCAutoTableTagCell = (props: { value: Nullable<string> | Nullable<string>[] | RoleAssignmentsValueType[] }) => {
  const { value } = props;
  const [showMore, setShowMore] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { allTags, shortenedTags, hasOmittedTags } = useTagsForTableCellRenderer({
    value,
    maxTagCount: 3,
    maxTagLength: 6,
  });

  const omittedTags = allTags.slice(shortenedTags.length);

  useEffect(() => {
    if (ref.current) {
      setShowMore(ref.current.scrollWidth > ref.current.clientWidth);
    }
  }, [shortenedTags]);

  const cellContent = useMemo(
    () => (
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",
          overflow: "hidden",
          minWidth: 0,
        }}
      >
        <div
          style={{
            overflowX: "hidden",
            display: "flex",
            flexWrap: "nowrap",
            gap: "2px",
            alignItems: "center",
          }}
          ref={ref}
        >
          {shortenedTags.map((tag) => (
            <s-chip key={tag}>{tag}</s-chip>
          ))}
          {hasOmittedTags ? <span style={{ flexShrink: 0 }}>...</span> : null}
        </div>
        {showMore && hasOmittedTags ? <span style={{ flexShrink: 0 }}>...</span> : null}
      </div>
    ),
    [shortenedTags, hasOmittedTags, showMore]
  );

  return (
    <div
      onMouseEnter={() => hasOmittedTags && setPopoverOpen(true)}
      onMouseLeave={() => setPopoverOpen(false)}
      style={{ cursor: hasOmittedTags ? "default" : undefined }}
    >
      {hasOmittedTags ? (
        <PolarisWCPopover
          open={popoverOpen}
          onClose={() => setPopoverOpen(false)}
          anchor={cellContent}
          maxHeight="200px"
          contentProps={{
            onMouseEnter: () => hasOmittedTags && setPopoverOpen(true),
            onMouseLeave: () => setPopoverOpen(false),
          }}
        >
          <div style={{ maxWidth: "220px", padding: "8px 12px" }}>
            <s-stack direction="inline" gap="small-100">
              {omittedTags.map((tag) => (
                <s-chip key={tag}>{tag}</s-chip>
              ))}
            </s-stack>
          </div>
        </PolarisWCPopover>
      ) : (
        cellContent
      )}
    </div>
  );
};
