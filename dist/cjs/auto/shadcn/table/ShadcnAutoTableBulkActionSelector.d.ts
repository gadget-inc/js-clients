import { type GadgetRecord } from "@gadgetinc/api-client-core";
import React from "react";
import { type TableRow } from "../../../use-table/types.js";
import { type RecordSelection } from "../../../useSelectedRecordsController.js";
import { type BulkActionOption } from "../../hooks/useTableBulkActions.js";
import { type ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoTableBulkActionSelector: (elements: ShadcnElements) => (props: {
    bulkActionOptions: BulkActionOption[];
    selection: RecordSelection;
    rows: TableRow[];
    rawRecords: GadgetRecord<any>[] | null;
}) => React.JSX.Element;
