import type { FindManyOptions } from "@gadgetinc/api-client-core";
import type { ReactNode } from "react";
import type { ControllableWithReactHookForm } from "../shared/AutoInputTypes.js";
export type RecordFilter = FindManyOptions["filter"];
/**
 * Props for the relationships in AutoForm.
 */
export interface AutoRelationshipInputProps extends ControllableWithReactHookForm {
    /**
     * The API identifier of the relationship field.
     */
    field: string;
    /**
     * Label for related model records.
     * - A string, represents the API identifier of the related field.
     * - A string[], represents the API identifiers of the fields in the order provided.
     * - A function, represents the a callback applied to the record that returns a custom label.
     */
    optionLabel?: OptionLabel;
    /**
     * The input label. Defaults to the field name.
     */
    label?: ReactNode;
    /**
     * Optional filter for the related model options.
     */
    recordFilter?: RecordFilter;
    /**
     * Optional placeholder for the input
     */
    placeholder?: string;
}
export type DisplayedRecordOption = RecordLabel<ReactNode> & {
    id: string;
};
/**
 * Label for related model records.
 * - A string, represents the API identifier of the related field.
 * - A string[], represents the API identifiers of the fields in the order provided.
 * - A function, represents the a callback applied to the record that returns a custom label.
 */
export type OptionLabel = string | string[] | ((props: {
    record: Record<string, any>;
}) => ReactNode);
export type RecordLabel<T = OptionLabel> = {
    /**
     * Primary label.
     */
    primary?: T;
    /**
     * Secondary label.
     */
    secondary?: T;
    /**
     * Tertiary label.
     */
    tertiary?: T;
};
export type AutoRelationshipFormProps = {
    /**
     * The API identifier for the related field.
     */
    field: string;
    /**
     * Label at the top of the form. Defaults to the field name.
     */
    label?: ReactNode;
    /**
     * Children inside relationship form.
     */
    children: ReactNode;
    /**
     * Control for displaying related model records in the relationship form.
     */
    recordLabel?: OptionLabel | RecordLabel;
    /**
     * Filter for the related model options to display in the input.
     */
    recordFilter?: RecordFilter;
};
export type AutoHasManyThroughFormProps = Omit<AutoRelationshipFormProps, "children"> & {
    children?: ReactNode;
};
export declare const getRecordLabelObject: (recordLabel?: OptionLabel | RecordLabel) => RecordLabel | undefined;
export declare const getOptionLabelsFromRecordLabel: (recordLabel: OptionLabel | RecordLabel) => (OptionLabel | undefined)[];
export declare const shouldShowOptionLabel: (option?: DisplayedRecordOption | null) => boolean;
