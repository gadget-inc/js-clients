/// <reference types="react" />
import type { ShadcnElements } from "./elements.js";
export * from "./elements.js";
/**
 * Build the Autocomponents library for your shadcn presentation components.
 * Autocomponents will render these given components, so they need to take the same base props that mainline shadcn components do.
 */
export declare const makeAutocomponents: (elements: ShadcnElements) => {
    AutoForm: <GivenOptions extends import("../../utils.js").OptionsType, SchemaT, ActionFunc extends import("@gadgetinc/api-client-core").GlobalActionFunction<any> | import("@gadgetinc/api-client-core").ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: import("../AutoForm.js").AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<import("react").FormHTMLAttributes<HTMLFormElement> & import("react").RefAttributes<HTMLFormElement>, "action" | "defaultValue">) => import("react").JSX.Element;
    AutoInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: string | undefined;
    }>;
    AutoSubmit: (props: {
        children?: import("react").ReactNode;
        isSubmitting?: boolean | undefined;
        className?: string | undefined;
    } & Partial<import("react").ButtonHTMLAttributes<HTMLButtonElement>>) => import("react").JSX.Element;
    SubmitResultBanner: (props: {
        successBannerProps?: any;
        errorBannerProps?: any;
    }) => import("react").JSX.Element;
    SubmitSuccessfulBanner: (props: any) => import("react").JSX.Element | null;
    SubmitErrorBanner: (props: any) => import("react").JSX.Element | null;
    AutoHasOneForm: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps>;
    AutoBelongsToForm: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps>;
    AutoHasManyForm: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps>;
    AutoHasManyThroughForm: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps>;
    AutoBelongsToInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoRolesInput: import("../AutoInput.js").AutoInputComponent<import("./inputs/ShadcnAutoRolesInput.js").AutoRolesInputProps>;
    AutoEnumInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: string | undefined;
    }>;
    AutoJSONInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: string | undefined;
    } & Partial<import("react").HTMLAttributes<HTMLTextAreaElement>>>;
    AutoDateTimePicker: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        id?: string | undefined;
        value?: Date | undefined;
        onChange?: ((value: Date) => void) | undefined;
        error?: string | undefined;
        includeTime?: boolean | undefined;
        hideTimePopover?: boolean | undefined;
        label?: string | undefined;
        datePickerProps?: Partial<import("./inputs/ShadcnAutoDateTimePicker.js").DatePickerProps> | undefined;
        timePickerProps?: {
            label?: string | undefined;
            placeholder?: string | undefined;
        } | undefined;
    }>;
    AutoPasswordInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
    }>;
    AutoBooleanInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
        label?: string | undefined;
    } & Partial<import("./elements.js").CheckboxProps>>;
    AutoEncryptedStringInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
        suffix?: import("react").ReactNode;
    }>;
    AutoStringInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: string | undefined;
        suffix?: import("react").ReactNode;
    } & Partial<import("react").InputHTMLAttributes<HTMLInputElement>>>;
    AutoNumberInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
    }>;
    AutoIdInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: string | undefined;
    }>;
    AutoHiddenInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        value: any;
    }>;
    AutoTextAreaInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: string | undefined;
        suffix?: import("react").ReactNode;
    } & import("./elements.js").TextareaProps>;
    AutoButton: <GivenOptions_1 extends import("../../utils.js").OptionsType, SchemaT_1, ActionFunc_1 extends import("@gadgetinc/api-client-core").GlobalActionFunction<any> | import("@gadgetinc/api-client-core").ActionFunction<GivenOptions_1, any, any, SchemaT_1, any>>(props: import("../hooks/useAutoButtonController.js").AutoButtonProps<GivenOptions_1, SchemaT_1, ActionFunc_1> & import("./elements.js").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").JSX.Element;
    AutoTable: <GivenOptions_2 extends import("../../utils.js").OptionsType, SchemaT_2, FinderFunction extends import("@gadgetinc/api-client-core").FindManyFunction<GivenOptions_2, any, SchemaT_2, any>, Options extends FinderFunction["optionsType"]>(props: import("../AutoTable.js").AutoTableProps<GivenOptions_2, SchemaT_2, FinderFunction, Options>) => import("react").JSX.Element;
};
