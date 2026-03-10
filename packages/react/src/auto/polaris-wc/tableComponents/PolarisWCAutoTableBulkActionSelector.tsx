import type { GadgetRecord } from "@gadgetinc/core";
import React, { useId, useMemo } from "react";
import type { TableRow } from "../../../use-table/types.js";
import type { RecordSelection } from "../../../useSelectedRecordsController.js";
import { getBulkActionOptionCallback, type BulkActionOption } from "../../hooks/useTableBulkActions.js";

const MORE_ACTIONS_LABEL = "Actions";

export type ActionModalIds = Record<string, string>;

function PolarisWCBulkActionButton(props: {
  action: BulkActionOption;
  selectedRows: TableRow[];
  clearSelection: () => void;
  rawRecords: GadgetRecord<any>[] | null;
  actionModalIds: ActionModalIds;
}) {
  const { action, selectedRows, clearSelection, rawRecords, actionModalIds } = props;
  const onAction = getBulkActionOptionCallback({
    option: action,
    selectedRows,
    clearSelection,
    rawRecords,
  });

  const isGadgetAction = action.selectModelAction !== undefined;
  const modalId = actionModalIds[action.apiIdentifier];
  const destructive = "isDeleter" in action ? action.isDeleter : false;
  return (
    <s-button
      variant={"secondary"}
      tone={destructive ? "critical" : "neutral"}
      onClick={isGadgetAction ? undefined : onAction}
      {...(isGadgetAction && modalId ? { commandFor: modalId } : {})}
    >
      {action.humanizedName}
    </s-button>
  );
}

function NonPromotedActionsDropdown(props: {
  nonPromotedActions: BulkActionOption[];
  selection: RecordSelection;
  rows: TableRow[];
  rawRecords: GadgetRecord<any>[] | null;
  actionModalIds: ActionModalIds;
}) {
  const { nonPromotedActions, selection, rows, rawRecords, actionModalIds } = props;
  const selectedRows = rows.filter((row) => selection.recordIds.includes(row.id as string));
  const menuId = useId().replace(/:/g, "");

  if (nonPromotedActions.length === 0) {
    return null;
  }

  return (
    <>
      <s-button commandFor={menuId} variant="secondary">
        {MORE_ACTIONS_LABEL}
      </s-button>
      <s-menu id={menuId} accessibilityLabel={MORE_ACTIONS_LABEL}>
        {nonPromotedActions.map((action) => (
          <NonPromotedActionItem
            key={action.humanizedName}
            action={action}
            selectedRows={selectedRows}
            clearSelection={selection.clearAll}
            rawRecords={rawRecords}
            actionModalIds={actionModalIds}
          />
        ))}
      </s-menu>
    </>
  );
}

function NonPromotedActionItem(props: {
  action: BulkActionOption;
  selectedRows: TableRow[];
  clearSelection: () => void;
  rawRecords: GadgetRecord<any>[] | null;
  actionModalIds: ActionModalIds;
}) {
  const { action, selectedRows, clearSelection, rawRecords, actionModalIds } = props;
  const callback = getBulkActionOptionCallback({
    option: action,
    selectedRows,
    clearSelection,
    rawRecords,
  });

  const isGadgetAction = action.selectModelAction !== undefined;
  const modalId = actionModalIds[action.apiIdentifier];
  const destructive = "isDeleter" in action ? action.isDeleter : false;

  if (isGadgetAction && modalId) {
    return (
      <s-button variant="tertiary" tone={destructive ? "critical" : undefined} commandFor={modalId} command="--show">
        {action.humanizedName}
      </s-button>
    );
  }

  return (
    <s-button variant="tertiary" tone={destructive ? "critical" : undefined} onClick={callback}>
      {action.humanizedName}
    </s-button>
  );
}

export function PolarisWCAutoTableBulkActionSelector(props: {
  bulkActionOptions: BulkActionOption[];
  selection: RecordSelection;
  rows: TableRow[];
  rawRecords: GadgetRecord<any>[] | null;
  actionModalIds: ActionModalIds;
}) {
  const { bulkActionOptions, selection, rows, rawRecords, actionModalIds } = props;
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
          actionModalIds={actionModalIds}
        />
      ))}
      <NonPromotedActionsDropdown
        nonPromotedActions={nonPromotedActions}
        selection={selection}
        rows={rows}
        rawRecords={rawRecords}
        actionModalIds={actionModalIds}
      />
    </>
  );
}
