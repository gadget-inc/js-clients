import { type Control } from "../../useActionForm.js";
export declare const usePasswordController: (props: {
    field: string;
    control?: Control<any>;
}) => {
    isEditing: boolean;
    startEditing: () => void;
    fieldProps: import("../../useActionForm.js").ControllerRenderProps<import("../../useActionForm.js").FieldValues, string>;
};
/**
 * The salted password hash is not retrieved from the DB
 * Regardless of the password is defined or not, this placeholder is shown as exposing an unset password is a security risk
 */
export declare const existingPasswordPlaceholder = "********";
