/// <reference types="react" />
import type { Control } from "../../useActionForm.js";
export interface ControllableWithReactHookForm {
    /**
     * React Hook Form control object
     */
    control?: Control<any>;
}
export type InputLabel = string | React.ReactNode | null;
export interface AutoBooleanInputProps extends ControllableWithReactHookForm {
    /**
     * The API identifier of the Boolean field
     */
    field: string;
    /**
     * The label of the Boolean field
     */
    label?: InputLabel;
    /**
     * A callback function run after the input value changes
     */
    afterChange?: (...event: any[]) => void;
}
export interface AutoDateTimeInputProps extends ControllableWithReactHookForm {
    /**
     * The API identifier of the DateTime field
     */
    field: string;
    /**
     * Error message to display if the DateTime field is invalid
     */
    error?: string;
    /**
     * The label of the DateTime field
     */
    label?: InputLabel;
    /**
     * A callback function run after the input value changes
     */
    afterChange?: (...event: any[]) => void;
}
export interface AutoEncryptedStringInputProps extends ControllableWithReactHookForm {
    /**
     * The API identifier of the EncryptedString field
     */
    field: string;
    /**
     * The label of the EncryptedString field
     */
    label?: InputLabel;
    /**
     * A callback function run after the input value changes
     */
    afterChange?: (...event: any[]) => void;
}
export interface AutoEnumInputProps extends ControllableWithReactHookForm {
    /**
     * The API identifier of the Enum field
     */
    field: string;
    /**
     * The label of the Enum field
     */
    label?: InputLabel;
    /**
     * A callback function run after the input value changes
     */
    afterChange?: (...event: any[]) => void;
    /**
     * Optional placeholder for the input
     */
    placeholder?: string;
}
export interface AutoFileInputProps extends ControllableWithReactHookForm {
    /**
     * The API identifier of the File field
     */
    field: string;
    /**
     * The label of the File field
     */
    label?: InputLabel;
}
export interface AutoHiddenInputProps {
    /**
     * The API identifier of the Hidden field
     */
    field: string;
    /**
     * The value of the Hidden field
     */
    value: any;
}
export interface AutoIdInputProps {
    /**
     * The API identifier of the Id field
     */
    field: string;
    /**
     * The label of the Id field
     */
    label?: InputLabel;
}
export interface AutoInputProps {
    /**
     * The API identifier of the field
     */
    field: string;
    /**
     * The label of the field
     */
    label?: InputLabel;
}
export interface AutoJSONInputProps extends ControllableWithReactHookForm {
    /**
     * The API identifier of the JSON field
     */
    field: string;
    /**
     * The label of the JSON field
     */
    label?: InputLabel;
    /**
     * A callback function run after the input value changes
     */
    afterChange?: (...event: any[]) => void;
}
export interface AutoNumberInputProps extends ControllableWithReactHookForm {
    /**
     * The API identifier of the Number field
     */
    field: string;
    /**
     * The label of the Number field
     */
    label?: InputLabel;
    /**
     * A callback function run after the input value changes
     */
    afterChange?: (...event: any[]) => void;
}
export interface AutoPasswordInputProps extends ControllableWithReactHookForm {
    /**
     * The API identifier of the Password field
     */
    field: string;
    /**
     * The label of the Password field
     */
    label?: InputLabel;
    /**
     * A callback function run after the input value changes
     */
    afterChange?: (...event: any[]) => void;
}
export interface AutoRolesInputProps extends ControllableWithReactHookForm {
    /**
     * The API identifier of the Roles field
     */
    field: string;
    /**
     * The label of the Roles field
     */
    label?: InputLabel;
    /**
     * Optional placeholder for the input
     */
    placeholder?: string;
}
export interface AutoTextInputProps extends ControllableWithReactHookForm {
    /**
     * The API identifier of the field
     */
    field: string;
    /**
     * The label of the field
     */
    label?: InputLabel;
    /**
     * A callback function run after the input value changes
     */
    afterChange?: (...event: any[]) => void;
}
/** Replaces any existing `label` prop with `label?: string`; adds it if missing. */
export type StringOnlyLabel<T extends object> = Omit<T, "label"> & {
    label?: string;
};
