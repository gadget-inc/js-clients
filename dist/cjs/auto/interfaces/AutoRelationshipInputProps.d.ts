import type { FindManyOptions } from "@gadgetinc/api-client-core";
import type { ReactNode } from "react";
import type { Control } from "../../useActionForm.js";
export type RecordFilter = FindManyOptions["filter"];
export interface AutoRelationshipInputProps {
    /**
     * The API identifier of the field.
     */
    field: string;
    /**
     * The control to use for the input.
     */
    control?: Control<any>;
    /**
     * The label to display for each related model record option in the input.
     * - As a string, this represents the API identifier of the field to display.
     * - As a string[], this represents the API identifiers of the fields to display in the order they are provided.
     * - As a function, this represents the a callback to be applied to the record that returns a custom label component.
     */
    optionLabel?: OptionLabel;
    /**
     * The label to display above the input. Defaults to the field name.
     */
    label?: ReactNode;
    /**
     * Optional filter for the related model options to display in the input
     */
    recordFilter?: RecordFilter;
}
export type DisplayedRecordOption = RecordLabel<ReactNode> & {
    id: string;
};
/**
 * Type for the option label when displaying a list of records from a related model
 * - As a string, this represents the API identifier of the field to display.
 * - As a string[], this represents the API identifiers of the fields to display in the order they are provided.
 * - As a function, this represents the a callback to be applied to the record that returns a custom label component.
 */
export type OptionLabel = string | string[] | ((props: {
    record: Record<string, any>;
}) => ReactNode);
export type RecordLabel<T = OptionLabel> = {
    /**
     * The primary label to display for the record.
     */
    primary?: T;
    /**
     * The secondary label to display for the record.
     */
    secondary?: T;
    /**
     * The tertiary label to display for the record.
     */
    tertiary?: T;
};
export type AutoRelationshipFormProps = {
    /**
     * The API identifier of the field.
     */
    field: string;
    /**
     * The label to display at the top of the form. Defaults to the field name.
     */
    label?: ReactNode;
    /**
     * The React children to render within the relationship form component
     */
    children: ReactNode;
    /**
     * Optional control for how related model records are shown in the relationship form
     */
    recordLabel?: OptionLabel | RecordLabel;
    /**
     * Optional filter for the related model options to display in the input
     */
    recordFilter?: RecordFilter;
};
export type AutoHasManyThroughFormProps = Omit<AutoRelationshipFormProps, "children"> & {
    children?: ReactNode;
};
export declare const getRecordLabelObject: (recordLabel?: OptionLabel | RecordLabel) => RecordLabel | undefined;
export declare const getOptionLabelsFromRecordLabel: (recordLabel: OptionLabel | RecordLabel) => (OptionLabel | undefined)[];
export declare const shouldShowOptionLabel: (option?: DisplayedRecordOption | null) => boolean;
