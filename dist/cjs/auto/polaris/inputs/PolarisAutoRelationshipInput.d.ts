import React from "react";
import { ErrorWrapper } from "../../../utils.js";
import { AutoRelationshipInputProps } from "../../interfaces/AutoRelationshipInputProps.js";
export declare const PolarisAutoBelongsToInput: (props: AutoRelationshipInputProps) => React.JSX.Element;
export declare const PolarisAutoRelationshipInput: (props: AutoRelationshipInputProps) => React.JSX.Element | null;
export declare const RelatedModelOptions: (props: {
    relatedModel: {
        options: any[];
        error?: ErrorWrapper;
        hasNextPage: boolean;
        isLoadingRelatedRecords: boolean;
    };
    selection: {
        id?: string;
        label: string;
        error?: ErrorWrapper;
        set: (selectedId?: string | undefined) => void;
    };
}) => React.JSX.Element;
