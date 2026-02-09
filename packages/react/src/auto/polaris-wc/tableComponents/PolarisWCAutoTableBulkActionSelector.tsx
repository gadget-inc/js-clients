import type { GadgetRecord } from "@gadgetinc/core";
import React, { useEffect, useMemo, useRef, useState } from "react";
import type { TableRow } from "../../../use-table/types.js";
import type { RecordSelection } from "../../../useSelectedRecordsController.js";
import { getBulkActionOptionCallback, type BulkActionOption } from "../../hooks/useTableBulkActions.js";
import { PolarisWCPopover } from "../commonComponents/PolarisWCPopover.js";

const MORE_ACTIONS_LABEL = "Actions...";

function PolarisWCBulkActionButton(props: {
  action: BulkActionOption;
  selectedRows: TableRow[];
  clearSelection: () => void;
  rawRecords: GadgetRecord<any>[] | null;
}) {
  const { action, selectedRows, clearSelection, rawRecords } = props;
  const ref = useRef<HTMLElement>(null);
  const onAction = getBulkActionOptionCallback({
    option: action,
    selectedRows,
    clearSelection,
    rawRecords,
  });

  const destructive = "isDeleter" in action ? action.isDeleter : false;
  return (
    <s-button ref={ref as any} variant={"secondary"} tone={destructive ? "critical" : "neutral"} onClick={onAction}>
      {action.humanizedName}
    </s-button>
  );
}

function PolarisWCMoreActionsTrigger(props: { open: boolean; onToggle: () => void }) {
  const { open, onToggle } = props;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("click", onToggle);
    return () => el.removeEventListener("click", onToggle);
  }, [onToggle]);

  return (
    <s-button ref={ref as any} variant="secondary" aria-expanded={open} aria-label={MORE_ACTIONS_LABEL}>
      {MORE_ACTIONS_LABEL}
    </s-button>
  );
}

function NonPromotedActionsDropdown(props: {
  nonPromotedActions: BulkActionOption[];
  selection: RecordSelection;
  rows: TableRow[];
  rawRecords: GadgetRecord<any>[] | null;
}) {
  const { nonPromotedActions, selection, rows, rawRecords } = props;
  const selectedRows = rows.filter((row) => selection.recordIds.includes(row.id as string));
  const [open, setOpen] = useState(false);

  if (nonPromotedActions.length === 0) {
    return null;
  }

  return (
    <PolarisWCPopover
      open={open}
      onClose={() => setOpen(false)}
      anchor={<PolarisWCMoreActionsTrigger open={open} onToggle={() => setOpen((prev) => !prev)} />}
      contentProps={{ style: { minWidth: "260px" } }}
      position="below-end"
    >
      <div style={{ display: "flex", flexDirection: "column", minWidth: "260px" }}>
        {nonPromotedActions.map((action) => (
          <NonPromotedActionItem
            key={action.humanizedName}
            action={action}
            selectedRows={selectedRows}
            clearSelection={selection.clearAll}
            rawRecords={rawRecords}
            onSelect={() => {
              setOpen(false);
              const callback = getBulkActionOptionCallback({
                option: action,
                selectedRows,
                clearSelection: selection.clearAll,
                rawRecords,
              });
            }}
          />
        ))}
      </div>
    </PolarisWCPopover>
  );
}

function NonPromotedActionItem(props: {
  action: BulkActionOption;
  selectedRows: TableRow[];
  clearSelection: () => void;
  rawRecords: GadgetRecord<any>[] | null;
  onSelect: () => void;
}) {
  const { action, selectedRows, clearSelection, rawRecords, onSelect } = props;
  const callback = getBulkActionOptionCallback({
    option: action,
    selectedRows,
    clearSelection,
    rawRecords,
  });

  const handleClick = () => {
    callback();
    onSelect();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        display: "block",
        width: "100%",
        padding: "8px 12px",
        textAlign: "left",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontSize: "14px",
        color: "var(--p-color-text, #202223)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--p-color-bg-surface-hover, #f6f6f7)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      {action.humanizedName}
    </button>
  );
}

export function PolarisWCAutoTableBulkActionSelector(props: {
  bulkActionOptions: BulkActionOption[];
  selection: RecordSelection;
  rows: TableRow[];
  rawRecords: GadgetRecord<any>[] | null;
}) {
  const { bulkActionOptions, selection, rows, rawRecords } = props;
  const selectedRows = rows.filter((row) => selection.recordIds.includes(row.id as string));

  const { promotedActions, nonPromotedActions } = useMemo(() => {
    const promoted: BulkActionOption[] = [];
    const nonPromoted: BulkActionOption[] = [];
    for (const option of bulkActionOptions) {
      if (option.promoted) {
        promoted.push(option);
      } else {
        nonPromoted.push(option);
      }
    }
    return { promotedActions: promoted, nonPromotedActions: nonPromoted };
  }, [bulkActionOptions]);

  return (
    <>
      {promotedActions.map((action) => (
        <PolarisWCBulkActionButton
          key={action.humanizedName}
          action={action}
          selectedRows={selectedRows}
          clearSelection={selection.clearAll}
          rawRecords={rawRecords}
        />
      ))}
      <NonPromotedActionsDropdown nonPromotedActions={nonPromotedActions} selection={selection} rows={rows} rawRecords={rawRecords} />
    </>
  );
}
