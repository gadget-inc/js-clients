import pluralize from "pluralize";
import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import { SelectionType } from "../../useSelectedRecordsController.js";
import { useTable } from "../../useTable.js";
import { AutoTableContext } from "../AutoTableContext.js";
import { validateAutoTableProps } from "../AutoTableValidators.js";
import { useTableBulkActions } from "../hooks/useTableBulkActions.js";
import { defaultCellStyle } from "../shared/defaultTableCellStyle.js";
import { PolarisWCAutoTableCellRenderer } from "./tableCells/PolarisWCAutoTableCellRenderer.js";
import { PolarisWCAutoBulkActionModal } from "./tableComponents/PolarisWCAutoBulkActionModal.js";
import { PolarisWCAutoTableBulkActionSelector } from "./tableComponents/PolarisWCAutoTableBulkActionSelector.js";
import { SortableTableHeader } from "./tableComponents/PolarisWCAutoTableHeaders.js";
const PolarisWCSkeletonTable = (props) => {
    const count = Array.from(Array(props.columns));
    const [dotCount, setDotCount] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => {
            setDotCount((prev) => (prev % 3) + 1);
        }, 200);
        return () => clearInterval(interval);
    }, []);
    return (React.createElement("s-table", null,
        React.createElement("s-table-header-row", null, count.map((_, i) => (React.createElement("s-table-header", { key: i })))),
        React.createElement("s-table-body", null, Array.from(Array(3)).map((_, rowIndex) => (React.createElement("s-table-row", { key: rowIndex }, count.map((_, colIndex) => (React.createElement("s-table-cell", { key: colIndex },
            React.createElement("div", { style: defaultCellStyle }, ".".repeat(dotCount)))))))))));
};
/**
 * Renders a table of records from a given model using Shopify Polaris Web Components
 * @example
 * ```tsx
 * <PolarisWCAutoTable model={api.user} />
 * ```
 * @param props.model - The Gadget model displayed
 */
export const PolarisWCAutoTable = (props) => {
    const { model } = props;
    validateAutoTableProps(model);
    const componentKey = `${[model.findMany.namespace, model.findMany.modelApiIdentifier].join("_")}AutoTable`;
    return React.createElement(PolarisWCAutoTableComponent, { key: componentKey, ...props });
};
const PolarisWCAutoTableComponent = (props) => {
    const { onClick } = props;
    const searchable = props.searchable ?? true;
    const paginate = props.paginate ?? true;
    const tableId = useId();
    const [methods, refresh] = useTable(props.model, {
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
    const [searchInputValue, setSearchInputValue] = useState(search?.value ?? "");
    const searchInputRef = useRef(null);
    // Sync search input value with search state
    useEffect(() => {
        if (search?.value !== undefined && search.value !== searchInputValue) {
            setSearchInputValue(search.value);
        }
    }, [search?.value]);
    // Handle search input changes
    useEffect(() => {
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
    const onClickCallback = useCallback((row, rawRecord) => {
        return () => onClick?.(row, rawRecord);
    }, [onClick]);
    const { bulkActionOptions, selectedModelActionDetails } = useTableBulkActions({
        model: props.model,
        actions: props.actions,
        excludeActions: props.excludeActions,
    });
    const resourceName = props.resourceName ?? {
        singular: metadata?.name ?? "",
        plural: metadata ? pluralize(metadata.name) : "",
    };
    const selectable = props.selectable === undefined ? bulkActionOptions.length !== 0 : props.selectable;
    // Track checkbox states for managing selection
    const handleSelectAll = useCallback((e) => {
        const target = e.target;
        if (target.checked) {
            selection.onSelectionChange(SelectionType.Page, true);
        }
        else {
            selection.clearAll();
        }
    }, [selection]);
    const handleRowSelect = useCallback((rowId) => (e) => {
        const target = e.target;
        selection.onSelectionChange(SelectionType.Single, target.checked, rowId);
    }, [selection]);
    if (!error && ((fetching && !rows) || !columns)) {
        return props.loadingSkeleton ?? React.createElement(PolarisWCSkeletonTable, { columns: 3 });
    }
    const hasSelectedRows = selection.recordIds.length > 0;
    const allRowsSelected = rows && rows.length > 0 && selection.recordIds.length === rows.length;
    const showSearch = searchable && search;
    const showBulkActions = hasSelectedRows && bulkActionOptions.length > 0;
    return (React.createElement(AutoTableContext.Provider, { value: [methods, refresh] },
        React.createElement("s-section", { padding: "none", accessibilityLabel: `${resourceName.plural} table section` },
            error && (React.createElement("s-box", { paddingBlockStart: "small", paddingBlockEnd: "large" },
                React.createElement("s-banner", { tone: "critical" }, error.message))),
            React.createElement("div", { style: { position: "relative" } },
                React.createElement("s-table", null,
                    (showSearch || showBulkActions) && (React.createElement("s-grid", { slot: "filters" // Need to use filter slot to properly position this grid in the table container
                        , gap: "small-200", gridTemplateColumns: showSearch ? "minmax(0, 420px) auto" : "auto" },
                        showSearch && (React.createElement("s-text-field", { ref: searchInputRef, label: `Search ${resourceName.plural}`, labelAccessibilityVisibility: "exclusive", icon: "search", placeholder: `Search ${resourceName.plural}`, value: searchInputValue, disabled: !!error })),
                        showBulkActions && (React.createElement("div", { style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                justifyContent: "flex-end",
                            } },
                            React.createElement("s-text", { tone: "neutral" },
                                selection.recordIds.length,
                                " selected"),
                            React.createElement(PolarisWCAutoTableBulkActionSelector, { bulkActionOptions: bulkActionOptions, selection: selection, rows: rows ?? [], rawRecords: rawRecords }))))),
                    React.createElement("s-table-header-row", null,
                        selectable && (React.createElement("s-table-header", null,
                            React.createElement(SelectAllCheckbox, { checked: allRowsSelected ?? false, indeterminate: hasSelectedRows && !allRowsSelected, onChange: handleSelectAll, tableId: tableId }))),
                        columns?.map((column, index) => (React.createElement(SortableTableHeader, { key: column.identifier, column: column, isPrimary: index === 0, sort: sort })))),
                    React.createElement("s-table-body", null, rows && rows.length === 0 && !error ? (React.createElement(EmptyStateDummyRow, null)) : (rows &&
                        columns &&
                        rows.map((row, index) => {
                            const rawRecord = rawRecords?.[index];
                            const rowId = row.id;
                            const checkboxId = `row-checkbox-${tableId}-${rowId}`;
                            const isSelected = selection.recordIds.includes(rowId);
                            return (React.createElement(ClickableTableRow, { key: rowId, rowId: rowId, checkboxId: checkboxId, selectable: selectable, onClick: onClick ? onClickCallback(row, rawRecord) : undefined },
                                selectable && (React.createElement("s-table-cell", null,
                                    React.createElement(RowCheckbox, { id: checkboxId, checked: isSelected, onChange: handleRowSelect(rowId) }))),
                                columns.map((column) => (React.createElement("s-table-cell", { key: column.identifier },
                                    React.createElement("div", { style: { ...defaultCellStyle, ...column.style } }, column.type === "CustomRenderer" ? row[column.identifier] : (React.createElement(PolarisWCAutoTableCellRenderer, { column: column, value: row[column.identifier] }))))))));
                        })))),
                fetching && React.createElement(LoadingOverlay, null),
                rows && rows.length === 0 && !error && (React.createElement(EmptyStateOverlay, null, props.emptyState ?? (React.createElement("s-box", { padding: "large" },
                    React.createElement("s-stack", { alignItems: "center", gap: "small" },
                        React.createElement("s-text", { tone: "neutral" }, "No results found"))))))),
            React.createElement(PolarisWCAutoBulkActionModal, { model: props.model, modelActionDetails: selectedModelActionDetails, ids: selection.recordIds, clearSelection: selection.clearAll }),
            paginate && (page.hasNextPage || page.hasPreviousPage) && (React.createElement("s-box", { paddingBlockStart: "small" },
                React.createElement("s-stack", { direction: "inline", gap: "small-100", alignItems: "center", justifyContent: "center" },
                    React.createElement(PaginationButton, { disabled: !page.hasPreviousPage, onClick: page.goToPreviousPage, direction: "previous" }),
                    React.createElement(PaginationButton, { disabled: !page.hasNextPage, onClick: page.goToNextPage, direction: "next" })))))));
};
/** The clickDelegate needs to be defined for the row to have hover styles. Made so that it does not match the real ID when given a row click callback. */
const DUMMY_CLICK_DELEGATE = "x";
// Clickable table row wrapper that handles onClick via ref
const ClickableTableRow = (props) => {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el || !props.onClick)
            return;
        el.addEventListener("click", props.onClick);
        return () => el.removeEventListener("click", props.onClick);
    }, [props.onClick]);
    return (React.createElement("s-table-row", { ref: ref, clickDelegate: props.selectable && !props.onClick ? props.checkboxId : DUMMY_CLICK_DELEGATE }, props.children));
};
// Pagination icon button with ref-based click handler (left/right arrows)
const PaginationButton = (props) => {
    const ref = useRef(undefined);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        el.addEventListener("click", props.onClick);
        return () => el.removeEventListener("click", props.onClick);
    }, [props.onClick]);
    const icon = props.direction === "previous" ? "arrow-left" : "arrow-right";
    const accessibilityLabel = props.direction === "previous" ? "Previous" : "Next";
    return (React.createElement("s-button", { ref: ref, variant: "secondary", icon: icon, accessibilityLabel: accessibilityLabel, disabled: props.disabled ? true : undefined }));
};
// Checkbox components with proper event handling for web components
const SelectAllCheckbox = (props) => {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        el.addEventListener("change", props.onChange);
        return () => el.removeEventListener("change", props.onChange);
    }, [props.onChange]);
    return (React.createElement("s-checkbox", { ref: ref, id: `select-all-${props.tableId}`, checked: props.checked ? true : undefined, indeterminate: props.indeterminate ? true : undefined, accessibilityLabel: "Select all rows" }));
};
const RowCheckbox = (props) => {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        el.addEventListener("change", props.onChange);
        return () => el.removeEventListener("change", props.onChange);
    }, [props.onChange]);
    return React.createElement("s-checkbox", { ref: ref, id: props.id, checked: props.checked ? true : undefined, accessibilityLabel: "Select row" });
};
const LoadingOverlay = () => {
    return (React.createElement("div", { style: {
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
        } },
        React.createElement("s-spinner", { accessibilityLabel: "Loading", size: "large" })));
};
const EmptyStateOverlay = (props) => {
    return (React.createElement("div", { style: {
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
        } }, props.children));
};
const EmptyStateDummyRow = () => {
    return (React.createElement("s-table-row", null,
        React.createElement("s-table-cell", null,
            React.createElement("div", { style: { minHeight: "120px" }, "aria-hidden": true }))));
};
//# sourceMappingURL=PolarisWCAutoTable.js.map