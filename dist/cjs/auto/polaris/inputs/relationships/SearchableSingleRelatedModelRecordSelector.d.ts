import React from "react";
import { type useSingleRelatedRecordRelationshipForm } from "src/useSingleRelatedRecordRelationshipForm.js";
export declare const SearchableSingleRelatedModelRecordSelector: (props: {
    form: ReturnType<typeof useSingleRelatedRecordRelationshipForm>;
    override?: {
        addNewRecord?: () => void;
    };
}) => React.JSX.Element;
