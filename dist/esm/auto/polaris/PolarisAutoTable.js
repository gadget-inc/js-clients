import { Banner, BlockStack, Box, DataTable, EmptySearchResult, IndexFilters, IndexTable, SkeletonBodyText, useSetIndexFiltersMode, } from "@shopify/polaris";
import pluralize from "pluralize";
import React, { useCallback, useMemo } from "react";
import { useTable } from "../../useTable.js";
import { AutoTableContext } from "../AutoTableContext.js";
import { validateAutoTableProps } from "../AutoTableValidators.js";
import { getBulkActionOptionCallback, useTableBulkActions } from "../hooks/useTableBulkActions.js";
import { defaultCellStyle } from "../shared/defaultTableCellStyle.js";
import { PolarisAutoBulkActionModal } from "./PolarisAutoBulkActionModal.js";
import { PolarisAutoTableCellRenderer } from "./tableCells/PolarisAutoTableCellRenderer.js";
const PolarisSkeletonTable = (props) => {
    const count = Array.from(Array(props.columns));
    return (React.createElement(DataTable, { columnContentTypes: count.map(() => "text"), headings: count.map((i) => (React.createElement(Box, { width: "100px", key: i },
            React.createElement(SkeletonBodyText, { lines: 1 })))), rows: Array.from(Array(3)).map((_) => count.map((i) => React.createElement(SkeletonBodyText, { key: i, lines: 1 }))) }));
};
const gadgetToPolarisDirection = (direction) => {
    if (direction === "Ascending") {
        return "ascending";
    }
    else if (direction === "Descending") {
        return "descending";
    }
    return undefined;
};
const getColumnIndex = (columns, apiIdentifier) => {
    return columns.findIndex((column) => column.field === apiIdentifier);
};
/**
 * Renders a table of records from given model using Shopify Polaris
 * @example
 * ```tsx
 * <AutoTable model={api.user} />
 * ```
 * @param props.model - The Gadget model displayed
 */
export const PolarisAutoTable = (props) => {
    const { model } = props;
    validateAutoTableProps(model);
    const componentKey = `${[model.findMany.namespace, model.findMany.modelApiIdentifier].join("_")}AutoTable`;
    return React.createElement(PolarisAutoTableComponent, { key: componentKey, ...props });
};
const PolarisAutoTableComponent = (props) => {
    const { onClick } = props;
    const searchable = props.searchable ?? true;
    const paginate = props.paginate ?? true;
    const [methods, refresh] = useTable(props.model, {
        select: props.select,
        columns: props.columns,
        excludeColumns: props.excludeColumns,
        pageSize: props.pageSize,
        live: props.live,
        initialSort: props.initialSort,
        filter: props.filter,
        search: props.searchValue,
    });
    const { columns, rows, page, fetching, error, search, selection, sort, metadata, data: rawRecords } = methods;
    const handleColumnSort = (headingIndex) => {
        if (columns) {
            const columnApiIdentifier = columns[headingIndex].field;
            sort.handleColumnSort(columnApiIdentifier);
        }
    };
    const onClickCallback = useCallback((row, rawRecord) => {
        return () => onClick?.(row, rawRecord);
    }, [onClick]);
    const { mode, setMode } = useSetIndexFiltersMode();
    const polarisTableProps = useMemo(() => {
        const headings = [];
        const sortable = [];
        if (columns) {
            for (const column of columns) {
                headings.push({ title: column.header });
                sortable.push(column.sortable);
            }
        }
        return { headings, sortable };
    }, [columns]);
    const { bulkActionOptions, selectedModelActionDetails } = useTableBulkActions({
        model: props.model,
        actions: props.actions,
        excludeActions: props.excludeActions,
    });
    const resourceName = props.resourceName ?? {
        singular: metadata?.name ?? "",
        plural: metadata ? pluralize(metadata.name) : "",
    };
    const selectedRows = (rows ?? []).filter((row) => selection.recordIds.includes(row.id));
    const promotedBulkActions = useMemo(() => bulkActionOptions.filter((option) => option.promoted).map(bulkActionOptionMapper(selectedRows, selection.clearAll)), [bulkActionOptions, selectedRows]);
    const bulkActions = useMemo(() => bulkActionOptions.filter((option) => !option.promoted).map(bulkActionOptionMapper(selectedRows, selection.clearAll)), [bulkActionOptions, selectedRows]);
    if (!error && ((fetching && !rows) || !columns)) {
        return React.createElement(PolarisSkeletonTable, { columns: 3 });
    }
    return (React.createElement(AutoTableContext.Provider, { value: [methods, refresh] },
        React.createElement(BlockStack, null,
            React.createElement(PolarisAutoBulkActionModal, { model: props.model, modelActionDetails: selectedModelActionDetails, ids: selection.recordIds, clearSelection: selection.clearAll }),
            searchable && (React.createElement(IndexFilters, { mode: mode, setMode: setMode, appliedFilters: [], filters: [], onClearAll: () => undefined, tabs: [], canCreateNewView: false, selected: 1, loading: fetching, cancelAction: { onAction: () => search.clear() }, disabled: !!error, 
                // Search
                disableKeyboardShortcuts: true, queryValue: search.value, onQueryChange: search.set, onQueryClear: search.clear, queryPlaceholder: "Search", filteringAccessibilityTooltip: "Search" })),
            error && (React.createElement(Box, { paddingBlockStart: "200", paddingBlockEnd: "1000" },
                React.createElement(Banner, { title: error.message, tone: "critical" }))),
            React.createElement(IndexTable, { selectedItemsCount: selection.recordIds.length, ...disablePaginatedSelectAllButton, onSelectionChange: selection.onSelectionChange, ...polarisTableProps, promotedBulkActions: promotedBulkActions.length ? promotedBulkActions : undefined, bulkActions: bulkActions.length ? bulkActions : undefined, resourceName: resourceName, emptyState: props.emptyState ?? React.createElement(EmptySearchResult, { title: `No results`, description: "", withIllustration: true }), loading: fetching, hasMoreItems: page.hasNextPage, itemCount: error
                    ? 1 // Don't show the empty state if there's are no errors.
                    : rows?.length ?? 0, pagination: paginate
                    ? {
                        hasNext: page.hasNextPage,
                        hasPrevious: page.hasPreviousPage,
                        onNext: page.goToNextPage,
                        onPrevious: page.goToPreviousPage,
                    }
                    : undefined, sortDirection: gadgetToPolarisDirection(sort.direction), sortColumnIndex: columns ? getColumnIndex(columns, sort.column) : undefined, onSort: (headingIndex) => handleColumnSort(headingIndex), selectable: props.selectable === undefined ? bulkActionOptions.length !== 0 : props.selectable, lastColumnSticky: props.lastColumnSticky, hasZebraStriping: props.hasZebraStriping, condensed: props.condensed },
                React.createElement(PolarisIndexTableCellStyleOverride, null),
                rows &&
                    columns &&
                    rows.map((row, index) => {
                        const rawRecord = rawRecords?.[index];
                        return (React.createElement(IndexTable.Row, { key: row.id, id: row.id, position: index, onClick: onClick ? onClickCallback(row, rawRecord) : undefined, selected: selection.recordIds.includes(row.id) }, columns.map((column) => (React.createElement(IndexTable.Cell, { key: column.identifier, className: "Gadget_PolarisAutoTable_IndexTableCell" },
                            React.createElement("div", { style: { ...defaultCellStyle, ...column.style } }, column.type == "CustomRenderer" ? row[column.identifier] : (React.createElement(PolarisAutoTableCellRenderer, { column: column, value: row[column.identifier] }))))))));
                    }))),
        React.createElement(PolarisIndexTableCellStyleOverride, null)));
};
const PolarisIndexTableCellStyleOverride = () => {
    // !important to override the default padding from a class that gets applied afterwards.
    const css = /*css*/ `
  .Gadget_PolarisAutoTable_IndexTableCell {
    padding: 0px !important; 
  }
`;
    return React.createElement("style", null, css);
};
const disablePaginatedSelectAllButton = {
    paginatedSelectAllActionText: "", // Empty string to hide the select all button. We only allow selections on the current page.
};
const bulkActionOptionMapper = (selectedRows, clearSelection) => {
    return (option) => ({
        id: option.humanizedName,
        destructive: "isDeleter" in option ? option.isDeleter : false,
        content: option.humanizedName,
        onAction: getBulkActionOptionCallback(option, selectedRows, clearSelection),
    });
};
//# sourceMappingURL=PolarisAutoTable.js.map