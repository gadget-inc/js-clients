import { DataTable, Pagination, SkeletonBodyText } from "@shopify/polaris";
import React, { useMemo } from "react";
import { FieldType } from "../../metadata.js";
import { useTable } from "../../useTable.js";
import { PolarisErrorDisplay } from "./PolarisErrorDisplay.js";
const PolarisSkeletonTable = (props) => {
    const count = Array.from(Array(props.columns));
    return (React.createElement(DataTable, { columnContentTypes: count.map(() => "text"), headings: count.map((i) => (React.createElement(SkeletonBodyText, { key: i, lines: 1 }))), rows: Array.from(Array(3)).map((_) => count.map((i) => React.createElement(SkeletonBodyText, { key: i, lines: 1 }))) }));
};
/**
 * Renders a table of records from the backend automatically for a given model using Polaris
 */
export const PolarisAutoTable = (props) => {
    const [{ rows, columns, metadata, fetching, page, error }, refresh] = useTable(props.manager, {
        select: props.select,
    });
    const polarisTableProps = useMemo(() => {
        const columnContentTypes = Array(columns?.length ?? 0);
        const headings = Array(columns?.length ?? 0);
        const sortable = Array(columns?.length ?? 0);
        if (columns) {
            for (const column of columns) {
                columnContentTypes.push(column.fieldType == FieldType.Number ? "numeric" : "text");
                headings.push(column.name);
                sortable.push(column.sortable);
            }
        }
        return { columnContentTypes, headings, sortable };
    }, [metadata]);
    if (fetching && !rows) {
        return React.createElement(PolarisSkeletonTable, { columns: polarisTableProps.headings.length });
    }
    if (error) {
        return React.createElement(PolarisErrorDisplay, { error: error, retry: refresh });
    }
    const rowsArray = rows && columns ? rows.map((row) => columns.map((column) => row[column.apiIdentifier])) : [];
    return (React.createElement(DataTable, { ...polarisTableProps, rows: rowsArray, footerContent: React.createElement(Pagination, { hasNext: page.hasNextPage, hasPrevious: page.hasPreviousPage, onNext: page.goToNextPage, onPrevious: page.goToPreviousPage }) }));
};
//# sourceMappingURL=PolarisAutoTable.js.map