import React from "react";
import { TableRow } from "../../useTableUtils/types.js";
import { ModelActionDetails } from "../hooks/useTableBulkActions.js";
export declare const PolarisAutoBulkActionModal: (props: {
    model: any;
    modelActionDetails?: ModelActionDetails;
    ids: string[];
    selectedRows: TableRow[];
}) => React.JSX.Element | null;
