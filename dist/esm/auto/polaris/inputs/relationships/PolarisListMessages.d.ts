import React from "react";
import { getErrorMessage } from "../../../../utils.js";
export declare const SelectableOption: (props: {
    label: React.ReactNode;
    id: string;
    selected: boolean;
}) => React.JSX.Element;
export declare const ListMessage: (props: {
    message: string;
}) => React.JSX.Element;
export declare const NoRecordsMessage: () => React.JSX.Element;
export { getErrorMessage };
