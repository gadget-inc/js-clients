import React from "react";
export declare const RelatedModelOptions: (props: {
    options: {
        id: string;
        label: string;
    }[];
    records?: Record<string, any>[];
    isLoading?: boolean;
    errorMessage?: string;
    checkSelected?: (id: string) => boolean;
    onSelect: (record: Record<string, any>) => void;
}) => React.JSX.Element;
