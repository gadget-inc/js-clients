import React from "react";
import type { DisplayedRecordOption } from "../../../interfaces/AutoRelationshipInputProps.js";
type RelatedModelOptionsProps = {
    options: DisplayedRecordOption[];
    records?: Record<string, any>[];
    isLoading?: boolean;
    errorMessage?: string;
    checkSelected?: (id: string) => boolean;
    onSelect: (record: Record<string, any>) => void;
    actions?: React.ReactNode[];
    renderOption?: (option: DisplayedRecordOption) => React.ReactNode;
    listboxId?: string;
    /** When true, shows a checkbox on each option row (e.g. for hasMany / hasManyThrough). */
    showCheckbox?: boolean;
    /** Whether more options can be loaded (shows a sentinel element for infinite scroll). */
    canLoadMore?: boolean;
    /** Callback fired when the sentinel element at the bottom becomes visible (for infinite scroll). */
    onLoadMore?: () => void;
};
export declare const PolarisWCRelatedModelOptions: (props: RelatedModelOptionsProps) => React.JSX.Element;
export declare const PolarisWCRelatedModelOptionsPopover: (props: RelatedModelOptionsProps & {
    active: boolean;
    activator: React.ReactElement;
    onClose: () => void;
    search?: React.ReactNode;
    onScrolledToBottom?: () => void;
}) => React.JSX.Element;
export declare const PolarisWCRelatedModelOptionsSearch: (props: {
    modelName: string;
    value: string;
    onChange: (value: string) => void;
    onFocus?: () => void;
    ariaControls?: string;
}) => React.JSX.Element;
export {};
