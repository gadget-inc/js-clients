import { Banner, BlockStack, Box, DataTable, EmptySearchResult, IndexFilters, IndexTable, SkeletonBodyText, useSetIndexFiltersMode, } from "@shopify/polaris";
import pluralize from "pluralize";
import { default as React, useCallback, useEffect, useMemo, useState } from "react";
import { useTable } from "../../useTable.js";
import { useTableBulkActions } from "../hooks/useModelActionsForTable.js";
import { PolarisAutoBulkActionModal } from "./PolarisAutoBulkActionModal.js";
import { PolarisAutoTableCellRenderer } from "./tableCells/PolarisAutoTableCellRenderer.js";
const PolarisSkeletonTable = (props) => {
    const count = Array.from(Array(props.columns));
    return (React.createElement(DataTable, { columnContentTypes: count.map(() => "text"), headings: count.map((i) => (React.createElement(Box, { width: "100px", key: i },
            React.createElement(SkeletonBodyText, { lines: 1 })))), rows: Array.from(Array(3)).map((_) => count.map((i) => React.createElement(SkeletonBodyText, { key: i, lines: 1 }))) }));
};
const getPresetSortDirection = (direction) => {
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
/**
 * Renders a table of records from the backend automatically for a given model using Polaris
 */
export const PolarisAutoTable = (props) => {
    const { onClick } = props;
    const [{ rows, columns, metadata, fetching, error, page, search, sort, selection }, refresh] = useTable(props.model, {
        select: props.select,
        columns: props.columns,
        pageSize: props.pageSize,
        live: props.live,
    });
    const [sortColumnIndex, setSortColumnIndex] = useState(columns ? getColumnIndex(columns, props.sort ? Object.keys(props.sort)[0] : undefined) : undefined);
    const [setColumnIndexToDefault, setSetColumnIndexToDefault] = useState(true);
    const [sortDirection, setSortDirection] = useState(getPresetSortDirection(props.sort ? Object.values(props.sort)[0] : undefined));
    const [disableSort, setDisableSort] = useState(false);
    const defaultSortDirection = getPresetSortDirection(props.sort ? Object.values(props.sort)[0] : "Descending");
    useEffect(() => {
        if (!sortColumnIndex && setColumnIndexToDefault) {
            setSortColumnIndex(columns ? getColumnIndex(columns, props.sort ? Object.keys(props.sort)[0] : undefined) : undefined);
        }
    }, [columns, props.sort, setColumnIndexToDefault, sortColumnIndex]);
    const handleColumnSort = (headingIndex, direction) => {
        if (columns) {
            const isSortDisabled = disableSort && sortColumnIndex === headingIndex;
            setSortColumnIndex(isSortDisabled ? undefined : headingIndex);
            setSortDirection(isSortDisabled ? undefined : direction);
            setSetColumnIndexToDefault(false);
            sort(columns[headingIndex].apiIdentifier, isSortDisabled ? undefined : direction === "ascending" ? "Ascending" : "Descending");
            if (direction !== defaultSortDirection) {
                setDisableSort(true);
            }
            else {
                setDisableSort(false);
            }
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
    const { bulkActionOptions, selectedModelActionDetails } = useTableBulkActions({ model: props.model });
    if (!error && ((fetching && !rows) || !columns)) {
        return React.createElement(PolarisSkeletonTable, { columns: 3 });
    }
    const resourceName = {
        singular: metadata?.name ?? "",
        plural: metadata ? pluralize(metadata.name) : "",
    };
    return (React.createElement(BlockStack, null,
        React.createElement(PolarisAutoBulkActionModal, { model: props.model, modelActionDetails: selectedModelActionDetails, ids: selection.recordIds }),
        React.createElement(IndexFilters, { mode: mode, setMode: setMode, appliedFilters: [], filters: [], onClearAll: () => undefined, tabs: [], selected: 1, loading: fetching, cancelAction: { onAction: () => search.clear() }, 
            // Search
            queryValue: search.value, onQueryChange: search.set, onQueryClear: search.clear, disabled: !!error }),
        error && (React.createElement(Box, { paddingBlockStart: "200", paddingBlockEnd: "1000" },
            React.createElement(Banner, { title: error.message, tone: "critical" }))),
        React.createElement(IndexTable, { selectedItemsCount: selection.recordIds.length, ...disablePaginatedSelectAllButton, onSelectionChange: selection.onSelectionChange, ...polarisTableProps, bulkActions: bulkActionOptions, resourceName: resourceName, emptyState: React.createElement(EmptySearchResult, { title: `No ${resourceName.plural} yet`, description: "", withIllustration: true }), loading: fetching, hasMoreItems: page.hasNextPage, itemCount: error
                ? 1 // Don't show the empty state if there's an error
                : rows?.length ?? 0, pagination: {
                hasNext: page.hasNextPage,
                hasPrevious: page.hasPreviousPage,
                onNext: page.goToNextPage,
                onPrevious: page.goToPreviousPage,
            }, defaultSortDirection: defaultSortDirection, sortDirection: sortDirection, sortColumnIndex: sortColumnIndex, onSort: (headingIndex, direction) => handleColumnSort(headingIndex, direction) }, rows &&
            columns &&
            rows.map((row, index) => (React.createElement(IndexTable.Row, { key: row.id, id: row.id, position: index, onClick: onClick ? onClickCallback(row) : undefined, selected: selection.recordIds.includes(row.id) }, columns.map((column) => (React.createElement(IndexTable.Cell, { key: column.apiIdentifier },
                React.createElement("div", { style: { maxWidth: "200px" } }, column.isCustomCell ? (column.getValue(row)) : (React.createElement(PolarisAutoTableCellRenderer, { column: column, value: row[column.apiIdentifier] }))))))))))));
};
const disablePaginatedSelectAllButton = {
    paginatedSelectAllActionText: "", // Empty string to hide the select all button. We only allow selection on the current page
};
//# sourceMappingURL=PolarisAutoTable.js.map