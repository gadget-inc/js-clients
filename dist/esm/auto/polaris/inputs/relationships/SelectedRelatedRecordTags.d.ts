import React from "react";
export declare const getSelectedRelatedRecordTags: (props: {
    selectedRecordIds: string[];
    options: {
        id: string;
        label: string;
    }[];
    onRemoveRecord: (id: string) => void;
}) => React.JSX.Element | null;
export declare const SelectedRelatedRecordTags: (props: {
    selectedRecordIds: string[];
    options: {
        id: string;
        label: string;
    }[];
    onRemoveRecord: (id: string) => void;
}) => React.JSX.Element[] | null;
