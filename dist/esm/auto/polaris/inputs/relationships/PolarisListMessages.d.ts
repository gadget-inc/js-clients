import React from "react";
export declare const SelectableOption: (props: {
    label: React.ReactNode;
    id: string;
    selected: boolean;
}) => React.JSX.Element;
export declare const ListMessage: (props: {
    message: string;
}) => React.JSX.Element;
export declare const NoRecordsMessage: () => React.JSX.Element;
export declare const getErrorMessage: (errorString: string) => "Missing permissions. Cannot read related model" | "Invalid records found in related model" | "Cannot retrieve records from related model";
