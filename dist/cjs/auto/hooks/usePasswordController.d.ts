import { type AutoPasswordInputProps } from "../shared/AutoInputTypes.js";
export declare const usePasswordController: (props: AutoPasswordInputProps) => {
    isEditing: boolean;
    startEditing: () => void;
    fieldProps: {
        onChange: (...args: any[]) => void;
        onBlur: import("react-hook-form/dist/types/utils.js").Noop;
        value: any;
        disabled?: boolean | undefined;
        name: string;
        ref: import("react-hook-form/dist/types/form.js").RefCallBack;
    };
};
/**
 * The salted password hash is not retrieved from the DB
 * Regardless of the password is defined or not, this placeholder is shown as exposing an unset password is a security risk
 */
export declare const existingPasswordPlaceholder = "********";
