import React from "react";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
export declare const makeSelectedRecordTags: ({ Badge, Button }: Pick<ShadcnElements, "Badge" | "Button">) => {
    SelectedRecordTags: (props: {
        selectedRecords: Record<string, any>[];
        optionLabel: OptionLabel;
        onRemoveRecord: (record: Record<string, any>) => void;
    }) => React.JSX.Element | null;
    getSelectedRecordTags: (props: {
        selectedRecords: Record<string, any>[];
        optionLabel: OptionLabel;
        onRemoveRecord: (record: Record<string, any>) => void;
    }) => React.JSX.Element | null;
};
