import type { FindManyFunction } from "@gadgetinc/api-client-core";
import { Box, PaginationItem } from "@mui/material";
import type { DataGridProps, GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import React, { useMemo } from "react";
import { useTable } from "../../useTable.js";
import type { OptionsType } from "../../utils";
import type { AutoTableProps } from "../AutoTable";
import { MUIErrorDisplay } from "./MUIErrorDisplay.js";

/**
 * Renders a table of records from the backend automatically for a given model using MUI
 */
export const MUIAutoTable = <
  GivenOptions extends OptionsType,
  SchemaT,
  FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends FinderFunction["optionsType"]
>(
  props: AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options> & DataGridProps
) => {
  const [{ rows, columns, page, fetching, error }, refresh] = useTable<GivenOptions, SchemaT, FinderFunction, Options>(props.model, {
    select: props.select,
  } as any);

  const muiColumns: GridColDef[] = useMemo(() => {
    if (!columns) return [];
    return columns.map((column) => ({
      field: column.apiIdentifier,
      headerName: column.name,
      editable: false,
    }));
  }, [columns]);

  if (error) {
    return <MUIErrorDisplay error={error} retry={refresh} />;
  }

  return (
    <DataGrid
      loading={fetching}
      paginationMode="server"
      rows={rows || []}
      columns={muiColumns}
      checkboxSelection
      disableRowSelectionOnClick
      slots={{
        footer: () => {
          return (
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <PaginationItem
                type="previous"
                data-testid="previous-page"
                disabled={!page.hasPreviousPage}
                onClick={page.goToPreviousPage}
              />
              <PaginationItem type="next" data-testid="next-page" disabled={!page.hasNextPage} onClick={page.goToNextPage} />
            </Box>
          );
        },
        ...props.slots,
      }}
      {...(props as any)}
    />
  );
};
