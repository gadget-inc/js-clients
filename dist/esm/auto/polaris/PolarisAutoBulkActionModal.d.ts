import React from "react";
import type { TableRow } from "../../use-table/types.js";
import type { ModelActionDetails } from "../hooks/useTableBulkActions.js";
export declare const PolarisAutoBulkActionModal: (props: {
    model: any;
    modelActionDetails?: ModelActionDetails;
    ids: string[];
    selectedRows: TableRow[];
}) => React.JSX.Element | null;
