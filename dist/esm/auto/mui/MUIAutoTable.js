import { Box, PaginationItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useMemo } from "react";
import { useTable } from "../../useTable.js";
import { MUIErrorDisplay } from "./MUIErrorDisplay.js";
/**
 * Renders a table of records from the backend automatically for a given model using MUI
 */
export const MUIAutoTable = (props) => {
    const [{ rows, columns, page, fetching, error }, refresh] = useTable(props.manager, {
        select: props.select,
    });
    const muiColumns = useMemo(() => {
        if (!columns)
            return [];
        return columns.map((column) => ({
            field: column.apiIdentifier,
            headerName: column.name,
            editable: false,
        }));
    }, [columns]);
    if (error) {
        return React.createElement(MUIErrorDisplay, { error: error, retry: refresh });
    }
    return (React.createElement(DataGrid, { loading: fetching, paginationMode: "server", rows: rows || [], columns: muiColumns, checkboxSelection: true, disableRowSelectionOnClick: true, slots: {
            footer: () => {
                return (React.createElement(Box, { sx: { display: "flex", flexDirection: "row", gap: 2 } },
                    React.createElement(PaginationItem, { type: "previous", "data-testid": "previous-page", disabled: !page.hasPreviousPage, onClick: page.goToPreviousPage }),
                    React.createElement(PaginationItem, { type: "next", "data-testid": "next-page", disabled: !page.hasNextPage, onClick: page.goToNextPage })));
            },
            ...props.slots,
        }, ...props }));
};
//# sourceMappingURL=MUIAutoTable.js.map