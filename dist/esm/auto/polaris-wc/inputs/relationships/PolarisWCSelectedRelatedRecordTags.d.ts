import React from "react";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
export declare const getSelectedRelatedRecordTags: (props: {
    selectedRecords: Record<string, any>[];
    optionLabel: OptionLabel;
    onRemoveRecord: (record: Record<string, any>) => void;
}) => React.JSX.Element | undefined;
