import type { GadgetRecord } from "@gadgetinc/core";
import React from "react";
import type { TableRow } from "../../../use-table/types.js";
import type { RecordSelection } from "../../../useSelectedRecordsController.js";
import { type BulkActionOption } from "../../hooks/useTableBulkActions.js";
export declare function PolarisWCAutoTableBulkActionSelector(props: {
    bulkActionOptions: BulkActionOption[];
    selection: RecordSelection;
    rows: TableRow[];
    rawRecords: GadgetRecord<any>[] | null;
}): React.JSX.Element;
