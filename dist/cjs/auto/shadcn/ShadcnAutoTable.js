"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAutoTable = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_1 = require("react");
const useSelectedRecordsController_js_1 = require("../../useSelectedRecordsController.js");
const useTable_js_1 = require("../../useTable.js");
const AutoTableValidators_js_1 = require("../AutoTableValidators.js");
const useHover_js_1 = require("../hooks/useHover.js");
const useTableBulkActions_js_1 = require("../hooks/useTableBulkActions.js");
const ShadcnDefaultPreventedButton_js_1 = require("./ShadcnDefaultPreventedButton.js");
const ShadcnAutoLoadingIndicator_js_1 = require("./table/ShadcnAutoLoadingIndicator.js");
const ShadcnAutoTableBulkActionModal_js_1 = require("./table/ShadcnAutoTableBulkActionModal.js");
const ShadcnAutoTableBulkActionSelector_js_1 = require("./table/ShadcnAutoTableBulkActionSelector.js");
const ShadcnAutoTableColumnSortIndicator_js_1 = require("./table/ShadcnAutoTableColumnSortIndicator.js");
const ShadcnAutoTablePagination_js_1 = require("./table/ShadcnAutoTablePagination.js");
const ShadcnAutoTableSearch_js_1 = require("./table/ShadcnAutoTableSearch.js");
const ShadcnAutoTableCellRenderer_js_1 = require("./table/cells/ShadcnAutoTableCellRenderer.js");
/**
 * Renders a table for a model automatically using Shadcn
 */
const makeAutoTable = (elements) => {
    const { Alert, AlertDescription, AlertTitle, Button, Checkbox, Label, Skeleton, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } = elements;
    const DefaultPreventedButton = (0, ShadcnDefaultPreventedButton_js_1.makeDefaultPreventedButton)(elements);
    const allElements = { ...elements, Button: DefaultPreventedButton };
    const ShadcnAutoTableCellRenderer = (0, ShadcnAutoTableCellRenderer_js_1.makeShadcnAutoTableCellRenderer)(allElements);
    const ShadcnAutoTablePagination = (0, ShadcnAutoTablePagination_js_1.makeShadcnAutoTablePagination)(allElements);
    const ShadcnAutoTableSearch = (0, ShadcnAutoTableSearch_js_1.makeShadcnAutoTableSearch)(allElements);
    const ShadcnAutoTableColumnSortIndicator = (0, ShadcnAutoTableColumnSortIndicator_js_1.makeShadcnAutoTableColumnSortIndicator)(allElements);
    const ShadcnAutoTableBulkActionSelector = (0, ShadcnAutoTableBulkActionSelector_js_1.makeShadcnAutoTableBulkActionSelector)(allElements);
    const ShadcnAutoTableBulkActionModal = (0, ShadcnAutoTableBulkActionModal_js_1.makeShadcnAutoTableBulkActionModal)(allElements);
    const ShadcnAutoLoadingIndicator = (0, ShadcnAutoLoadingIndicator_js_1.makeShadcnAutoLoadingIndicator)(allElements);
    function AutoTableSelectAllCheckbox(props) {
        const { selection, rows } = props;
        return (React.createElement(React.Fragment, null,
            React.createElement(Checkbox, { id: "AutoTableSelectAllCheckbox", checked: selection.recordIds.length === rows?.length && rows?.length > 0
                    ? true
                    : selection.recordIds.length > 0
                        ? "indeterminate"
                        : false, className: "inline-flex", onCheckedChange: (value) => selection.onSelectionChange(useSelectedRecordsController_js_1.SelectionType.Page, !!value), onClick: (e) => e.stopPropagation() })));
    }
    function AutoTableColumnHeaders(props) {
        const { columns, sort, canSelectRecords, selection, rows } = props;
        const [isHovered, hoverProps] = (0, useHover_js_1.useHover)();
        return (React.createElement(React.Fragment, null,
            React.createElement(TableRow, { ...hoverProps, className: "bg-background hover:bg-muted " },
                canSelectRecords && (React.createElement(TableHead, { className: `sticky left-0 z-50 bg-${isHovered ? "muted" : "background"}` },
                    React.createElement(AutoTableSelectAllCheckbox, { selection: selection, rows: rows }))),
                columns.map((column, i) => (React.createElement(AutoTableColumnHeader, { key: column.identifier, column: column, sort: sort, canSelectRecords: canSelectRecords, isRowHovered: isHovered, shouldBeSticky: i === 0 }))))));
    }
    function AutoTableColumnHeader(props) {
        const { column, sort, canSelectRecords, shouldBeSticky, isRowHovered } = props;
        const [isHovered, hoverProps] = (0, useHover_js_1.useHover)();
        const ColumnHeaderLabel = (React.createElement(React.Fragment, null,
            React.createElement(Label, null, column.header),
            React.createElement(ShadcnAutoTableColumnSortIndicator, { column: column, sortState: sort, isHovered: isHovered })));
        const stickyClass = shouldBeSticky ? `sticky left-${canSelectRecords ? "6" : "0"} z-10` : "";
        return (React.createElement(React.Fragment, null,
            React.createElement(TableHead, { key: column.identifier, className: `${stickyClass} bg-${isRowHovered ? "muted" : "background"}` },
                React.createElement("div", { className: `flex flex-row items-center gap-2 z-10 ` }, column.sortable ? (React.createElement(Button, { variant: "ghost", size: "sm", className: "cursor-pointer", onClick: () => (column.type === "CustomRenderer" ? undefined : sort.handleColumnSort(column.field)), ...hoverProps }, ColumnHeaderLabel)) : (ColumnHeaderLabel)))));
    }
    const getCellBackgroundColor = (props) => {
        const { isHovered, isSelected } = props;
        const isDarkMode = document.documentElement.classList.contains("dark");
        return isSelected ? `bg-muted ${isDarkMode ? "brightness-125" : "brightness-95"}` : isHovered ? "bg-muted" : "bg-background";
    };
    function AutoTableSingleRowCheckbox(props) {
        const { row, isSelected, toggleRecordSelection, isHovered } = props;
        return (React.createElement(TableCell, { className: `sticky left-0 ${getCellBackgroundColor({ isSelected, isHovered })} z-10` },
            React.createElement(Checkbox, { className: "inline-flex", id: `AutoTableSingleRowCheckbox-${row.id}`, checked: isSelected, onClick: (e) => {
                    toggleRecordSelection(row.id);
                    e.stopPropagation();
                } })));
    }
    function AutoTableRowData(props) {
        const { row, columns, canSelectRecords, isSelected, isHovered } = props;
        const rowComponent = (0, react_1.useMemo)(() => {
            return (React.createElement(React.Fragment, null, columns.map((column, i) => {
                const isSticky = i === 0;
                return (React.createElement(TableCell, { key: column.identifier, style: column.style, className: `${isSticky ? `sticky left-${canSelectRecords ? "6" : "0"} z-10` : ``} max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap ${getCellBackgroundColor({ isSelected, isHovered })}` }, column.type == "CustomRenderer" ? row[column.identifier] : (React.createElement(ShadcnAutoTableCellRenderer, { column: column, value: row[column.identifier] }))));
            })));
        }, [canSelectRecords, columns.map((c) => c.identifier).join(","), Object.values(row).join(","), isSelected, isHovered]);
        return rowComponent;
    }
    function ShadcnAutoTableComponent(props) {
        const { onClick, searchable = true, paginate = true } = props;
        const [methods, refresh] = (0, useTable_js_1.useTable)(props.model, {
            select: props.select,
            columns: props.columns,
            excludeColumns: props.excludeColumns,
            pageSize: props.pageSize,
            live: props.live,
            initialSort: props.initialSort,
            filter: props.filter,
            search: props.searchValue,
            searchable: props.searchable,
        });
        const { columns, rows, page, search, fetching, error, selection, sort, metadata, data: rawRecords, } = methods;
        const onClickCallback = (0, react_1.useCallback)((row, rawRecord) => {
            return () => onClick?.(row, rawRecord);
        }, [onClick]);
        const { bulkActionOptions, selectedModelActionDetails } = (0, useTableBulkActions_js_1.useTableBulkActions)({
            model: props.model,
            actions: props.actions,
            excludeActions: props.excludeActions,
        });
        const canSelectRecords = props.selectable === undefined ? bulkActionOptions.length !== 0 : props.selectable;
        const hasSelectedRecords = selection.recordIds.length > 0;
        const toggleRecordSelection = (0, react_1.useCallback)((rowId) => {
            if (!canSelectRecords) {
                return;
            }
            selection.onSelectionChange(useSelectedRecordsController_js_1.SelectionType.Single, !selection.recordIds.includes(rowId), rowId);
        }, [selection, canSelectRecords]);
        if (error) {
            return (React.createElement(Alert, { variant: "destructive" },
                React.createElement(AlertTitle, { className: "text-lg font-bold" }, "Error"),
                React.createElement(AlertDescription, null, error.message ? error.message : "Cannot load AutoTable")));
        }
        if ((fetching && !rows) || !columns) {
            return props.loadingSkeleton ?? React.createElement(Skeleton, null);
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(ShadcnAutoTableBulkActionModal, { model: props.model, modelActionDetails: selectedModelActionDetails, ids: selection.recordIds, clearSelection: selection.clearAll }),
            React.createElement("div", { className: "flex flex-row gap-2 items-center mb-2" },
                searchable && search && React.createElement(ShadcnAutoTableSearch, { search: search }),
                hasSelectedRecords && (React.createElement("div", { className: "ml-auto" },
                    React.createElement("div", { className: "flex flex-row ml-auto gap-2 items-center" },
                        React.createElement(Label, { className: "ml-2 whitespace-nowrap" }, `${selection.recordIds.length} selected`),
                        React.createElement(ShadcnAutoTableBulkActionSelector, { bulkActionOptions: bulkActionOptions, selection: selection, rows: rows, rawRecords: rawRecords }))))),
            React.createElement(Table, { className: "w-full border-collapse" },
                React.createElement(TableHeader, { className: "sticky top-0 bg-background z-20" },
                    React.createElement(AutoTableColumnHeaders, { columns: columns, sort: sort, canSelectRecords: canSelectRecords, selection: selection, rows: rows })),
                React.createElement(TableBody, { className: `bg-background ${fetching ? "opacity-40" : ""}` }, rows?.length > 0 &&
                    rows.map((row, index) => (React.createElement(AutoTableRow, { key: row.id, row: row, columns: columns, canSelectRecords: canSelectRecords, toggleRecordSelection: toggleRecordSelection, onClick: onClick ? onClickCallback(row, rawRecords?.[index]) : () => toggleRecordSelection(row.id), isSelected: selection.recordIds.includes(row.id) }))))),
            rows?.length === 0 && (React.createElement(React.Fragment, null, props.emptyState ?? React.createElement("div", { className: "h-24 text-center flex items-center justify-center" }, `No results`))),
            React.createElement("div", { className: "flex flex-row gap-2 items-center justify-center my-2" },
                fetching && React.createElement(ShadcnAutoLoadingIndicator, { className: "w-5 h-5" }),
                paginate && React.createElement(ShadcnAutoTablePagination, { page: page }))));
    }
    const AutoTableRow = (props) => {
        const { row, columns, canSelectRecords, onClick, toggleRecordSelection, isSelected } = props;
        const [isHovered, hoverProps] = (0, useHover_js_1.useHover)();
        return (React.createElement(TableRow, { key: row.id, className: `${canSelectRecords || onClick ? "cursor-pointer" : ""} `, "data-state": isSelected ? "selected" : undefined, onClick: onClick, ...hoverProps },
            canSelectRecords && (React.createElement(AutoTableSingleRowCheckbox, { row: row, isSelected: isSelected, toggleRecordSelection: toggleRecordSelection, isHovered: isHovered })),
            React.createElement(AutoTableRowData, { row: row, columns: columns, canSelectRecords: canSelectRecords, isSelected: isSelected, isHovered: isHovered })));
    };
    return (props) => {
        const { model } = props;
        (0, AutoTableValidators_js_1.validateAutoTableProps)(model);
        const componentKey = `${[model.findMany.namespace, model.findMany.modelApiIdentifier].join("_")}AutoTable`;
        return React.createElement(ShadcnAutoTableComponent, { key: componentKey, ...props });
    };
};
exports.makeAutoTable = makeAutoTable;
//# sourceMappingURL=ShadcnAutoTable.js.map