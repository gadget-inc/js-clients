import React from "react";
export declare const RelatedModelOptions: (props: {
    options: {
        id: string;
        label: string;
    }[];
    isLoading?: boolean;
    errorMessage?: string;
    checkSelected?: (id: string) => boolean;
    onSelect: (recordId: string) => void;
}) => React.JSX.Element;
