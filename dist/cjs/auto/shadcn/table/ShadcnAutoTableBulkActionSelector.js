"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoTableBulkActionSelector = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importStar(require("react"));
const useTableBulkActions_js_1 = require("../../hooks/useTableBulkActions.js");
const makeShadcnAutoTableBulkActionSelector = (elements) => {
    const { Button, Command, CommandGroup, CommandItem, CommandList, Popover, PopoverContent, PopoverTrigger } = elements;
    function NonPromotedActionsActionSelector(props) {
        const { nonPromotedActions, selection, rows } = props;
        const selectedRows = rows.filter((row) => selection.recordIds.includes(row.id));
        const [open, setOpen] = react_1.default.useState(false);
        if (nonPromotedActions.length === 0) {
            return null;
        }
        return (react_1.default.createElement(Popover, { open: open, onOpenChange: setOpen },
            react_1.default.createElement(PopoverTrigger, { asChild: true },
                react_1.default.createElement(Button, { variant: "outline", role: "combobox", "aria-expanded": open, className: "w-[200px] justify-between", "aria-label": "More actions" },
                    "Actions...",
                    react_1.default.createElement(lucide_react_1.ChevronsUpDown, { className: "opacity-50" }))),
            react_1.default.createElement(PopoverContent, { className: "w-[200px] p-0" },
                react_1.default.createElement(Command, null,
                    react_1.default.createElement(CommandList, null,
                        react_1.default.createElement(CommandGroup, null, nonPromotedActions.map((action, i) => (react_1.default.createElement(CommandItem, { key: i, className: "bg-white", onSelect: () => {
                                (0, useTableBulkActions_js_1.getBulkActionOptionCallback)(action, selectedRows, selection.clearAll)();
                            } }, action.humanizedName)))))))));
    }
    function PromotedActionsActionSelector(props) {
        const { promotedActions, selection, rows } = props;
        const selectedRows = rows.filter((row) => selection.recordIds.includes(row.id));
        return (react_1.default.createElement(react_1.default.Fragment, null, promotedActions.map((action) => (react_1.default.createElement(Button, { variant: "outline", key: action.humanizedName, onClick: () => {
                (0, useTableBulkActions_js_1.getBulkActionOptionCallback)(action, selectedRows, selection.clearAll)();
            } }, action.humanizedName)))));
    }
    function ShadcnAutoTableBulkActionSelector(props) {
        const { bulkActionOptions, selection, rows } = props;
        const { promotedActions, nonPromotedActions } = (0, react_1.useMemo)(() => {
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
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(PromotedActionsActionSelector, { promotedActions: promotedActions, selection: selection, rows: rows }),
            react_1.default.createElement(NonPromotedActionsActionSelector, { nonPromotedActions: nonPromotedActions, selection: selection, rows: rows })));
    }
    return ShadcnAutoTableBulkActionSelector;
};
exports.makeShadcnAutoTableBulkActionSelector = makeShadcnAutoTableBulkActionSelector;
//# sourceMappingURL=ShadcnAutoTableBulkActionSelector.js.map