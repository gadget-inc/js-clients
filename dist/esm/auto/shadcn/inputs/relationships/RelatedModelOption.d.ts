import React from "react";
import type { Option } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
export type RelatedModelOptionsProps = {
    options: Option[];
    records?: Record<string, any>[];
    isLoading?: boolean;
    errorMessage?: string;
    checkSelected?: (id: string) => boolean;
    onSelect: (record: Record<string, any>) => void;
    actions?: React.ReactNode[];
    renderOption?: (option: Option) => React.ReactNode;
    allowMultiple?: boolean;
    allowOther?: boolean;
    searchValue?: string;
    onAddExtraOption?: (value: string) => void;
    formatOptionText?: (option: string) => React.ReactNode;
    setSearchValue?: (value: string) => void;
    emptyMessage?: string;
    loadMoreRef?: React.RefObject<HTMLDivElement>;
};
export declare const makeRelatedModelOption: (elements: Pick<ShadcnElements, "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox" | "Label">) => {
    RelatedModelOption: {
        (props: RelatedModelOptionsProps): React.JSX.Element;
        displayName: string;
    };
};
