import React from "react";
import type { TableRow } from "../../use-table/types.js";
import type { ModelActionDetails } from "../hooks/useTableBulkActions.js";
export declare const PolarisAutoBulkActionModal: (props: {
    model: any;
    modelActionDetails?: ModelActionDetails;
    ids: string[];
    selectedRows: TableRow[];
    clearSelection: () => void;
}) => React.JSX.Element;
export declare const ActionSuccessMessage = " completed";
export declare const ActionErrorMessage = " failed";
