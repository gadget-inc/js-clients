import type { AutoSelection, TextFieldProps } from "@shopify/polaris";
import React from "react";
import type { DisplayedRecordOption } from "../../../interfaces/AutoRelationshipInputProps.js";
type RelatedModelOptionsProps = {
    options: DisplayedRecordOption[];
    records?: Record<string, any>[];
    isLoading?: boolean;
    errorMessage?: string;
    checkSelected?: (id: string) => boolean;
    onSelect: (record: Record<string, any>) => void;
    autoSelection?: AutoSelection;
    actions?: React.ReactNode[];
    renderOption?: (option: DisplayedRecordOption) => React.ReactNode;
};
export declare const RelatedModelOptions: (props: RelatedModelOptionsProps) => React.JSX.Element;
export declare const RelatedModelOptionsPopover: (props: RelatedModelOptionsProps & {
    active: boolean;
    activator: React.ReactElement;
    onClose: () => void;
    search?: React.ReactNode;
    onScrolledToBottom?: () => void;
}) => React.JSX.Element;
export declare const RelatedModelOptionsSearch: (props: {
    modelName: string;
    label?: TextFieldProps["label"];
    autoComplete?: TextFieldProps["autoComplete"];
} & Omit<TextFieldProps, "label" | "autoComplete">) => React.JSX.Element;
export {};
