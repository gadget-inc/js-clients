import type { AutoSelection } from "@shopify/polaris";
import React from "react";
import type { Option } from "../../../interfaces/AutoRelationshipInputProps.js";
type RelatedModelOptionsProps = {
    options: Option[];
    records?: Record<string, any>[];
    isLoading?: boolean;
    errorMessage?: string;
    checkSelected?: (id: string) => boolean;
    onSelect: (record: Record<string, any>) => void;
    autoSelection?: AutoSelection;
    actions?: React.ReactNode[];
    renderOption?: (option: Option) => React.ReactNode;
};
export declare const RelatedModelOptions: (props: RelatedModelOptionsProps) => React.JSX.Element;
export {};
