import { Banner, BlockStack, Box, DataTable, EmptySearchResult, IndexFilters, IndexTable, SkeletonBodyText, useSetIndexFiltersMode, } from "@shopify/polaris";
import pluralize from "pluralize";
import React, { useCallback, useMemo, useState } from "react";
import { useTable } from "../../useTable.js";
import { useTableBulkActions } from "../hooks/useTableBulkActions.js";
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
    return columns.findIndex((column) => column.apiIdentifier === apiIdentifier);
};
const getNextDirection = (sortDirection) => {
    switch (sortDirection) {
        case "Descending":
            return "Ascending";
        case "Ascending":
            return undefined;
        case undefined:
        default:
            return "Descending";
    }
};
/**
 * Renders a table of records from the backend automatically for a given model using Polaris
 */
export const PolarisAutoTable = (props) => {
    const { model } = props;
    const componentKey = `${[model.findMany.namespace, model.findMany.modelApiIdentifier].join("_")}AutoTable`;
    return React.createElement(PolarisAutoTableComponent, { key: componentKey, ...props });
};
const PolarisAutoTableComponent = (props) => {
    const { onClick } = props;
    const [{ rows, columns, metadata, fetching, error, page, search, sort, selection }, refresh] = useTable(props.model, {
        select: props.select,
        columns: props.columns,
        excludeColumns: props.excludeColumns,
        pageSize: props.pageSize,
        live: props.live,
        sort: props.initialSort,
        filter: props.filter,
    });
    const [sortColumnApiIdentifier, setSortColumnApiIdentifier] = useState(props.initialSort ? Object.keys(props.initialSort)[0] : undefined);
    const [sortDirection, setSortDirection] = useState(props.initialSort ? Object.values(props.initialSort)[0] : undefined);
    const handleColumnSort = (headingIndex) => {
        if (columns) {
            const columnApiIdentifier = columns[headingIndex].apiIdentifier;
            const nextDirection = columnApiIdentifier !== sortColumnApiIdentifier ? "Descending" : getNextDirection(sortDirection);
            setSortDirection(nextDirection);
            setSortColumnApiIdentifier(nextDirection ? columnApiIdentifier : undefined);
            sort(columnApiIdentifier, nextDirection);
        }
    };
    const onClickCallback = useCallback((row) => {
        return () => onClick?.(row);
    }, [onClick]);
    const { mode, setMode } = useSetIndexFiltersMode();
    const polarisTableProps = useMemo(() => {
        const headings = [];
        const sortable = [];
        if (columns) {
            for (const column of columns) {
                headings.push({ title: column.name });
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
    if (!error && ((fetching && !rows) || !columns)) {
        return React.createElement(PolarisSkeletonTable, { columns: 3 });
    }
    const resourceName = {
        singular: metadata?.name ?? "",
        plural: metadata ? pluralize(metadata.name) : "",
    };
    const selectedRows = (rows ?? []).filter((row) => selection.recordIds.includes(row.id));
    return (React.createElement(BlockStack, null,
        React.createElement(PolarisAutoBulkActionModal, { model: props.model, modelActionDetails: selectedModelActionDetails, ids: selection.recordIds, selectedRows: selectedRows }),
        React.createElement(IndexFilters, { mode: mode, setMode: setMode, appliedFilters: [], filters: [], onClearAll: () => undefined, tabs: [], selected: 1, loading: fetching, cancelAction: { onAction: () => search.clear() }, disabled: !!error, 
            // Search
            queryValue: search.value, onQueryChange: search.set, onQueryClear: search.clear }),
        error && (React.createElement(Box, { paddingBlockStart: "200", paddingBlockEnd: "1000" },
            React.createElement(Banner, { title: error.message, tone: "critical" }))),
        React.createElement(IndexTable, { selectedItemsCount: selection.recordIds.length, ...disablePaginatedSelectAllButton, onSelectionChange: selection.onSelectionChange, ...polarisTableProps, bulkActions: bulkActionOptions.map((option) => ({
                content: option.humanizedName,
                onAction: option.callback ? () => option.callback?.(selection.recordIds, selectedRows) : option.selectModelAction,
            })), resourceName: resourceName, emptyState: React.createElement(EmptySearchResult, { title: `No ${resourceName.plural} yet`, description: "", withIllustration: true }), loading: fetching, hasMoreItems: page.hasNextPage, itemCount: error
                ? 1 // Don't show the empty state if there's an error
                : rows?.length ?? 0, pagination: {
                hasNext: page.hasNextPage,
                hasPrevious: page.hasPreviousPage,
                onNext: page.goToNextPage,
                onPrevious: page.goToPreviousPage,
            }, sortDirection: gadgetToPolarisDirection(sortDirection), sortColumnIndex: columns ? getColumnIndex(columns, sortColumnApiIdentifier) : undefined, onSort: (headingIndex) => handleColumnSort(headingIndex) }, rows &&
            columns &&
            rows.map((row, index) => (React.createElement(IndexTable.Row, { key: row.id, id: row.id, position: index, onClick: onClick ? onClickCallback(row) : undefined, selected: selection.recordIds.includes(row.id) }, columns.map((column) => (React.createElement(IndexTable.Cell, { key: column.apiIdentifier },
                React.createElement("div", { style: { maxWidth: "200px" } }, column.isCustomCell ? row[column.apiIdentifier] : (React.createElement(PolarisAutoTableCellRenderer, { column: column, value: row[column.apiIdentifier] })))))))))),
        React.createElement("button", { onClick: () => refresh }, "Refresh table")));
};
const disablePaginatedSelectAllButton = {
    paginatedSelectAllActionText: "", // Empty string to hide the select all button. We only allow selection on the current page
};
//# sourceMappingURL=PolarisAutoTable.js.map