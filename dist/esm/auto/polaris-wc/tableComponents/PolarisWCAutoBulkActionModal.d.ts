import React from "react";
import { type ModelActionDetails } from "../../hooks/useTableBulkActions.js";
export type PolarisWCAutoBulkActionModalProps = {
    model: any;
    modelActionDetails: ModelActionDetails;
    ids: string[];
    clearSelection: () => void;
    modalId: string;
};
export declare const PolarisWCAutoBulkActionModal: (props: PolarisWCAutoBulkActionModalProps) => React.JSX.Element;
