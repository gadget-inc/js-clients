"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoTable = void 0;
const tslib_1 = require("tslib");
const pluralize_1 = tslib_1.__importDefault(require("pluralize"));
const react_1 = tslib_1.__importStar(require("react"));
const useSelectedRecordsController_js_1 = require("../../useSelectedRecordsController.js");
const useTable_js_1 = require("../../useTable.js");
const AutoTableContext_js_1 = require("../AutoTableContext.js");
const AutoTableValidators_js_1 = require("../AutoTableValidators.js");
const useTableBulkActions_js_1 = require("../hooks/useTableBulkActions.js");
const defaultTableCellStyle_js_1 = require("../shared/defaultTableCellStyle.js");
const PolarisWCAutoTableCellRenderer_js_1 = require("./tableCells/PolarisWCAutoTableCellRenderer.js");
const PolarisWCAutoBulkActionModal_js_1 = require("./tableComponents/PolarisWCAutoBulkActionModal.js");
const PolarisWCAutoTableBulkActionSelector_js_1 = require("./tableComponents/PolarisWCAutoTableBulkActionSelector.js");
const PolarisWCAutoTableHeaders_js_1 = require("./tableComponents/PolarisWCAutoTableHeaders.js");
const PolarisWCSkeletonTable = (props) => {
    const count = Array.from(Array(props.columns));
    const [dotCount, setDotCount] = (0, react_1.useState)(1);
    (0, react_1.useEffect)(() => {
        const interval = setInterval(() => {
            setDotCount((prev) => (prev % 3) + 1);
        }, 200);
        return () => clearInterval(interval);
    }, []);
    return (react_1.default.createElement("s-table", null,
        react_1.default.createElement("s-table-header-row", null, count.map((_, i) => (react_1.default.createElement("s-table-header", { key: i })))),
        react_1.default.createElement("s-table-body", null, Array.from(Array(3)).map((_, rowIndex) => (react_1.default.createElement("s-table-row", { key: rowIndex }, count.map((_, colIndex) => (react_1.default.createElement("s-table-cell", { key: colIndex },
            react_1.default.createElement("div", { style: defaultTableCellStyle_js_1.defaultCellStyle }, ".".repeat(dotCount)))))))))));
};
/**
 * Renders a table of records from a given model using Shopify Polaris Web Components
 * @example
 * ```tsx
 * <PolarisWCAutoTable model={api.user} />
 * ```
 * @param props.model - The Gadget model displayed
 */
const PolarisWCAutoTable = (props) => {
    const { model } = props;
    (0, AutoTableValidators_js_1.validateAutoTableProps)(model);
    const componentKey = `${[model.findMany.namespace, model.findMany.modelApiIdentifier].join("_")}AutoTable`;
    return react_1.default.createElement(PolarisWCAutoTableComponent, { key: componentKey, ...props });
};
exports.PolarisWCAutoTable = PolarisWCAutoTable;
const PolarisWCAutoTableComponent = (props) => {
    const { onClick } = props;
    const searchable = props.searchable ?? true;
    const paginate = props.paginate ?? true;
    const tableId = (0, react_1.useId)();
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
    const { columns, rows, page, fetching, error, search, selection, sort, metadata, data: rawRecords } = methods;
    // Search input state
    const [searchInputValue, setSearchInputValue] = (0, react_1.useState)(search?.value ?? "");
    const searchInputRef = (0, react_1.useRef)(null);
    // Sync search input value with search state
    (0, react_1.useEffect)(() => {
        if (search?.value !== undefined && search.value !== searchInputValue) {
            setSearchInputValue(search.value);
        }
    }, [search?.value]);
    // Handle search input changes
    (0, react_1.useEffect)(() => {
        const input = searchInputRef.current;
        if (!input)
            return;
        const handleInput = (e) => {
            const target = e.target;
            setSearchInputValue(target.value);
            search?.set(target.value);
        };
        input.addEventListener("input", handleInput);
        return () => input.removeEventListener("input", handleInput);
    }, [search]);
    const onClickCallback = (0, react_1.useCallback)((row, rawRecord) => {
        return () => onClick?.(row, rawRecord);
    }, [onClick]);
    const { bulkActionOptions, selectedModelActionDetails } = (0, useTableBulkActions_js_1.useTableBulkActions)({
        model: props.model,
        actions: props.actions,
        excludeActions: props.excludeActions,
    });
    const resourceName = props.resourceName ?? {
        singular: metadata?.name ?? "",
        plural: metadata ? (0, pluralize_1.default)(metadata.name) : "",
    };
    const selectable = props.selectable === undefined ? bulkActionOptions.length !== 0 : props.selectable;
    // Track checkbox states for managing selection
    const handleSelectAll = (0, react_1.useCallback)((e) => {
        const target = e.target;
        if (target.checked) {
            selection.onSelectionChange(useSelectedRecordsController_js_1.SelectionType.Page, true);
        }
        else {
            selection.clearAll();
        }
    }, [selection]);
    const handleRowSelect = (0, react_1.useCallback)((rowId) => (e) => {
        const target = e.target;
        selection.onSelectionChange(useSelectedRecordsController_js_1.SelectionType.Single, target.checked, rowId);
    }, [selection]);
    if (!error && ((fetching && !rows) || !columns)) {
        return props.loadingSkeleton ?? react_1.default.createElement(PolarisWCSkeletonTable, { columns: 3 });
    }
    const hasSelectedRows = selection.recordIds.length > 0;
    const allRowsSelected = rows && rows.length > 0 && selection.recordIds.length === rows.length;
    const showSearch = searchable && search;
    const showBulkActions = hasSelectedRows && bulkActionOptions.length > 0;
    return (react_1.default.createElement(AutoTableContext_js_1.AutoTableContext.Provider, { value: [methods, refresh] },
        react_1.default.createElement("s-section", { padding: "none", accessibilityLabel: `${resourceName.plural} table section` },
            error && (react_1.default.createElement("s-box", { paddingBlockStart: "small", paddingBlockEnd: "large" },
                react_1.default.createElement("s-banner", { tone: "critical" }, error.message))),
            react_1.default.createElement("div", { style: { position: "relative" } },
                react_1.default.createElement("s-table", null,
                    (showSearch || showBulkActions) && (react_1.default.createElement("s-grid", { slot: "filters" // Need to use filter slot to properly position this grid in the table container
                        , gap: "small-200", gridTemplateColumns: showSearch ? "minmax(0, 420px) auto" : "auto" },
                        showSearch && (react_1.default.createElement("s-text-field", { ref: searchInputRef, label: `Search ${resourceName.plural}`, labelAccessibilityVisibility: "exclusive", icon: "search", placeholder: `Search ${resourceName.plural}`, value: searchInputValue, disabled: !!error })),
                        showBulkActions && (react_1.default.createElement("div", { style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                justifyContent: "flex-end",
                            } },
                            react_1.default.createElement("s-text", { tone: "neutral" },
                                selection.recordIds.length,
                                " selected"),
                            react_1.default.createElement(PolarisWCAutoTableBulkActionSelector_js_1.PolarisWCAutoTableBulkActionSelector, { bulkActionOptions: bulkActionOptions, selection: selection, rows: rows ?? [], rawRecords: rawRecords }))))),
                    react_1.default.createElement("s-table-header-row", null,
                        selectable && (react_1.default.createElement("s-table-header", null,
                            react_1.default.createElement(SelectAllCheckbox, { checked: allRowsSelected ?? false, indeterminate: hasSelectedRows && !allRowsSelected, onChange: handleSelectAll, tableId: tableId }))),
                        columns?.map((column, index) => (react_1.default.createElement(PolarisWCAutoTableHeaders_js_1.SortableTableHeader, { key: column.identifier, column: column, isPrimary: index === 0, sort: sort })))),
                    react_1.default.createElement("s-table-body", null, rows && rows.length === 0 && !error ? (react_1.default.createElement(EmptyStateDummyRow, null)) : (rows &&
                        columns &&
                        rows.map((row, index) => {
                            const rawRecord = rawRecords?.[index];
                            const rowId = row.id;
                            const checkboxId = `row-checkbox-${tableId}-${rowId}`;
                            const isSelected = selection.recordIds.includes(rowId);
                            return (react_1.default.createElement(ClickableTableRow, { key: rowId, rowId: rowId, checkboxId: checkboxId, selectable: selectable, onClick: onClick ? onClickCallback(row, rawRecord) : undefined },
                                selectable && (react_1.default.createElement("s-table-cell", null,
                                    react_1.default.createElement(RowCheckbox, { id: checkboxId, checked: isSelected, onChange: handleRowSelect(rowId) }))),
                                columns.map((column) => (react_1.default.createElement("s-table-cell", { key: column.identifier },
                                    react_1.default.createElement("div", { style: { ...defaultTableCellStyle_js_1.defaultCellStyle, ...column.style } }, column.type === "CustomRenderer" ? row[column.identifier] : (react_1.default.createElement(PolarisWCAutoTableCellRenderer_js_1.PolarisWCAutoTableCellRenderer, { column: column, value: row[column.identifier] }))))))));
                        })))),
                fetching && react_1.default.createElement(LoadingOverlay, null),
                rows && rows.length === 0 && !error && (react_1.default.createElement(EmptyStateOverlay, null, props.emptyState ?? (react_1.default.createElement("s-box", { padding: "large" },
                    react_1.default.createElement("s-stack", { alignItems: "center", gap: "small" },
                        react_1.default.createElement("s-text", { tone: "neutral" }, "No results found"))))))),
            react_1.default.createElement(PolarisWCAutoBulkActionModal_js_1.PolarisWCAutoBulkActionModal, { model: props.model, modelActionDetails: selectedModelActionDetails, ids: selection.recordIds, clearSelection: selection.clearAll }),
            paginate && (page.hasNextPage || page.hasPreviousPage) && (react_1.default.createElement("s-box", { paddingBlockStart: "small" },
                react_1.default.createElement("s-stack", { direction: "inline", gap: "small-100", alignItems: "center", justifyContent: "center" },
                    react_1.default.createElement(PaginationButton, { disabled: !page.hasPreviousPage, onClick: page.goToPreviousPage, direction: "previous" }),
                    react_1.default.createElement(PaginationButton, { disabled: !page.hasNextPage, onClick: page.goToNextPage, direction: "next" })))))));
};
/** The clickDelegate needs to be defined for the row to have hover styles. Made so that it does not match the real ID when given a row click callback. */
const DUMMY_CLICK_DELEGATE = "x";
// Clickable table row wrapper that handles onClick via ref
const ClickableTableRow = (props) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const el = ref.current;
        if (!el || !props.onClick)
            return;
        el.addEventListener("click", props.onClick);
        return () => el.removeEventListener("click", props.onClick);
    }, [props.onClick]);
    return (react_1.default.createElement("s-table-row", { ref: ref, clickDelegate: props.selectable && !props.onClick ? props.checkboxId : DUMMY_CLICK_DELEGATE }, props.children));
};
// Pagination icon button with ref-based click handler (left/right arrows)
const PaginationButton = (props) => {
    const ref = (0, react_1.useRef)(undefined);
    (0, react_1.useEffect)(() => {
        const el = ref.current;
        if (!el)
            return;
        el.addEventListener("click", props.onClick);
        return () => el.removeEventListener("click", props.onClick);
    }, [props.onClick]);
    const icon = props.direction === "previous" ? "arrow-left" : "arrow-right";
    const accessibilityLabel = props.direction === "previous" ? "Previous" : "Next";
    return (react_1.default.createElement("s-button", { ref: ref, variant: "secondary", icon: icon, accessibilityLabel: accessibilityLabel, disabled: props.disabled ? true : undefined }));
};
// Checkbox components with proper event handling for web components
const SelectAllCheckbox = (props) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const el = ref.current;
        if (!el)
            return;
        el.addEventListener("change", props.onChange);
        return () => el.removeEventListener("change", props.onChange);
    }, [props.onChange]);
    return (react_1.default.createElement("s-checkbox", { ref: ref, id: `select-all-${props.tableId}`, checked: props.checked ? true : undefined, indeterminate: props.indeterminate ? true : undefined, accessibilityLabel: "Select all rows" }));
};
const RowCheckbox = (props) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const el = ref.current;
        if (!el)
            return;
        el.addEventListener("change", props.onChange);
        return () => el.removeEventListener("change", props.onChange);
    }, [props.onChange]);
    return react_1.default.createElement("s-checkbox", { ref: ref, id: props.id, checked: props.checked ? true : undefined, accessibilityLabel: "Select row" });
};
const LoadingOverlay = () => {
    return (react_1.default.createElement("div", { style: {
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
        } },
        react_1.default.createElement("s-spinner", { accessibilityLabel: "Loading", size: "large" })));
};
const EmptyStateOverlay = (props) => {
    return (react_1.default.createElement("div", { style: {
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
        } }, props.children));
};
const EmptyStateDummyRow = () => {
    return (react_1.default.createElement("s-table-row", null,
        react_1.default.createElement("s-table-cell", null,
            react_1.default.createElement("div", { style: { minHeight: "120px" }, "aria-hidden": true }))));
};
//# sourceMappingURL=PolarisWCAutoTable.js.map