"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoTable = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const x_data_grid_1 = require("@mui/x-data-grid");
const react_1 = tslib_1.__importStar(require("react"));
const useTable_js_1 = require("../../useTable.js");
const MUIErrorDisplay_js_1 = require("./MUIErrorDisplay.js");
/**
 * Renders a table of records from the backend automatically for a given model using MUI
 */
const MUIAutoTable = (props) => {
    const [{ rows, columns, page, fetching, error }, refresh] = (0, useTable_js_1.useTable)(props.model, {
        select: props.select,
    });
    const muiColumns = (0, react_1.useMemo)(() => {
        if (!columns)
            return [];
        return columns.map((column) => ({
            field: column.apiIdentifier,
            headerName: column.name,
            editable: false,
        }));
    }, [columns]);
    if (error) {
        return react_1.default.createElement(MUIErrorDisplay_js_1.MUIErrorDisplay, { error: error, retry: refresh });
    }
    return (react_1.default.createElement(x_data_grid_1.DataGrid, { loading: fetching, paginationMode: "server", rows: rows || [], columns: muiColumns, checkboxSelection: true, disableRowSelectionOnClick: true, slots: {
            footer: () => {
                return (react_1.default.createElement(material_1.Box, { sx: { display: "flex", flexDirection: "row", gap: 2 } },
                    react_1.default.createElement(material_1.PaginationItem, { type: "previous", "data-testid": "previous-page", disabled: !page.hasPreviousPage, onClick: page.goToPreviousPage }),
                    react_1.default.createElement(material_1.PaginationItem, { type: "next", "data-testid": "next-page", disabled: !page.hasNextPage, onClick: page.goToNextPage })));
            },
            ...props.slots,
        }, ...props }));
};
exports.MUIAutoTable = MUIAutoTable;
//# sourceMappingURL=MUIAutoTable.js.map