import { ChevronsUpDown } from "lucide-react";
import React, { useMemo } from "react";
import { getBulkActionOptionCallback } from "../../hooks/useTableBulkActions.js";
export const makeShadcnAutoTableBulkActionSelector = (elements) => {
    const { Button, Command, CommandGroup, CommandItem, CommandList, Popover, PopoverContent, PopoverTrigger } = elements;
    function NonPromotedActionsActionSelector(props) {
        const { nonPromotedActions, selection, rows } = props;
        const selectedRows = rows.filter((row) => selection.recordIds.includes(row.id));
        const [open, setOpen] = React.useState(false);
        if (nonPromotedActions.length === 0) {
            return null;
        }
        return (React.createElement(Popover, { open: open, onOpenChange: setOpen },
            React.createElement(PopoverTrigger, { asChild: true },
                React.createElement(Button, { variant: "outline", role: "combobox", "aria-expanded": open, className: "w-[200px] justify-between", "aria-label": "More actions" },
                    "Actions...",
                    React.createElement(ChevronsUpDown, { className: "opacity-50" }))),
            React.createElement(PopoverContent, { className: "w-[200px] p-0" },
                React.createElement(Command, null,
                    React.createElement(CommandList, null,
                        React.createElement(CommandGroup, null, nonPromotedActions.map((action, i) => (React.createElement(CommandItem, { key: i, className: "bg-white", onSelect: () => {
                                getBulkActionOptionCallback(action, selectedRows, selection.clearAll)();
                            } }, action.humanizedName)))))))));
    }
    function PromotedActionsActionSelector(props) {
        const { promotedActions, selection, rows } = props;
        const selectedRows = rows.filter((row) => selection.recordIds.includes(row.id));
        return (React.createElement(React.Fragment, null, promotedActions.map((action) => (React.createElement(Button, { key: action.humanizedName, onClick: () => {
                getBulkActionOptionCallback(action, selectedRows, selection.clearAll)();
            } }, action.humanizedName)))));
    }
    function ShadcnAutoTableBulkActionSelector(props) {
        const { bulkActionOptions, selection, rows } = props;
        const { promotedActions, nonPromotedActions } = useMemo(() => {
            const promotedActions = [];
            const nonPromotedActions = [];
            for (const bulkActionOption of bulkActionOptions) {
                if (bulkActionOption.promoted) {
                    promotedActions.push(bulkActionOption);
                }
                else {
                    nonPromotedActions.push(bulkActionOption);
                }
            }
            return { promotedActions, nonPromotedActions };
        }, [bulkActionOptions]);
        return (React.createElement(React.Fragment, null,
            React.createElement(PromotedActionsActionSelector, { promotedActions: promotedActions, selection: selection, rows: rows }),
            React.createElement(NonPromotedActionsActionSelector, { nonPromotedActions: nonPromotedActions, selection: selection, rows: rows })));
    }
    return ShadcnAutoTableBulkActionSelector;
};
//# sourceMappingURL=ShadcnAutoTableBulkActionSelector.js.map