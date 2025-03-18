import { ChevronsUpDown } from "lucide-react";
import React, { useMemo } from "react";
import { type TableRow } from "../../../use-table/types.js";
import { type RecordSelection } from "../../../useSelectedRecordsController.js";
import { getBulkActionOptionCallback, type BulkActionOption } from "../../hooks/useTableBulkActions.js";
import { type ShadcnElements } from "../elements.js";

export const makeShadcnAutoTableBulkActionSelector = (elements: ShadcnElements) => {
  const { Button, Command, CommandGroup, CommandItem, CommandList, Popover, PopoverContent, PopoverTrigger } = elements;

  function NonPromotedActionsActionSelector(props: {
    nonPromotedActions: BulkActionOption[];
    selection: RecordSelection;
    rows: TableRow[];
  }) {
    const { nonPromotedActions, selection, rows } = props;
    const selectedRows = rows.filter((row) => selection.recordIds.includes(row.id as string));

    const [open, setOpen] = React.useState(false);

    if (nonPromotedActions.length === 0) {
      return null;
    }
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between" aria-label="More actions">
            {"Actions..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandGroup>
                {nonPromotedActions.map((action, i) => (
                  <CommandItem
                    key={i}
                    className={"bg-background"}
                    onSelect={() => {
                      getBulkActionOptionCallback(action, selectedRows, selection.clearAll)();
                    }}
                  >
                    {action.humanizedName}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }

  function PromotedActionsActionSelector(props: { promotedActions: BulkActionOption[]; selection: RecordSelection; rows: TableRow[] }) {
    const { promotedActions, selection, rows } = props;

    const selectedRows = rows.filter((row) => selection.recordIds.includes(row.id as string));

    return (
      <>
        {promotedActions.map((action) => (
          <Button
            variant="outline"
            key={action.humanizedName}
            onClick={() => {
              getBulkActionOptionCallback(action, selectedRows, selection.clearAll)();
            }}
          >
            {action.humanizedName}
          </Button>
        ))}
      </>
    );
  }
  function ShadcnAutoTableBulkActionSelector(props: {
    bulkActionOptions: BulkActionOption[];
    selection: RecordSelection;
    rows: TableRow[];
  }) {
    const { bulkActionOptions, selection, rows } = props;

    const { promotedActions, nonPromotedActions } = useMemo(() => {
      const promotedActions = [];
      const nonPromotedActions = [];

      for (const bulkActionOption of bulkActionOptions) {
        if (bulkActionOption.promoted) {
          promotedActions.push(bulkActionOption);
        } else {
          nonPromotedActions.push(bulkActionOption);
        }
      }

      return { promotedActions, nonPromotedActions };
    }, [bulkActionOptions]);

    return (
      <>
        <PromotedActionsActionSelector promotedActions={promotedActions} selection={selection} rows={rows} />
        <NonPromotedActionsActionSelector nonPromotedActions={nonPromotedActions} selection={selection} rows={rows} />
      </>
    );
  }

  return ShadcnAutoTableBulkActionSelector;
};
