/// <reference types="react" resolution-mode="require"/>
import type { ShadcnElements } from "./elements.js";
export * from "./elements.js";
export type { ShadcnAutoFormProps as AutoFormProps } from "./ShadcnAutoForm.js";
export type { ShadcnAutoTableProps as AutoTableProps } from "./ShadcnAutoTable.js";
/**
 * Build the Autocomponents library for your shadcn presentation components.
 * Autocomponents will render these given components, so they need to take the same base props that mainline shadcn components do.
 */
export declare const makeAutocomponents: (elements: ShadcnElements) => {
    AutoForm: <GivenOptions extends import("../../utils.js").OptionsType, SchemaT, ActionFunc extends import("@gadgetinc/api-client-core").GlobalActionFunction<any> | import("@gadgetinc/api-client-core").ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: import("./ShadcnAutoForm.js").ShadcnAutoFormProps<GivenOptions, SchemaT, ActionFunc>) => import("react").JSX.Element;
    AutoInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: import("react").ReactNode;
    }>;
    AutoSubmit: (props: {
        children?: import("react").ReactNode;
        isSubmitting?: boolean | undefined;
        className?: string | undefined;
    } & import("./elements.js").ButtonProps) => import("react").JSX.Element;
    SubmitResultBanner: (props: {
        successBannerProps?: any;
        errorBannerProps?: any;
    }) => import("react").JSX.Element;
    SubmitSuccessfulBanner: (props: any) => import("react").JSX.Element | null;
    SubmitErrorBanner: (props: any) => import("react").JSX.Element | null;
    AutoRolesInput: import("../AutoInput.js").AutoInputComponent<import("./inputs/ShadcnAutoRolesInput.js").AutoRolesInputProps>;
    AutoEnumInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: import("react").ReactNode;
    }>;
    AutoFileInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: import("react").ReactNode;
    } & import("react").HtmlHTMLAttributes<HTMLDivElement>>;
    AutoJSONInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: import("react").ReactNode;
    } & Partial<import("react").HTMLAttributes<HTMLTextAreaElement>>>;
    AutoDateTimePicker: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        id?: string | undefined;
        value?: Date | undefined;
        onChange?: ((value: Date) => void) | undefined;
        error?: string | undefined;
        includeTime?: boolean | undefined;
        hideTimePopover?: boolean | undefined;
        label?: import("react").ReactNode;
        datePickerProps?: Partial<import("./inputs/ShadcnAutoDateTimePicker.js").DatePickerProps> | undefined;
        timePickerProps?: {
            label?: import("react").ReactNode;
            placeholder?: string | undefined;
        } | undefined;
    }>;
    AutoPasswordInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
        label?: import("react").ReactNode;
    }>;
    AutoBooleanInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
        label?: import("react").ReactNode;
    } & Partial<import("./elements.js").CheckboxProps>>;
    AutoEncryptedStringInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
        suffix?: import("react").ReactNode;
        label?: import("react").ReactNode;
    }>;
    AutoStringInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: import("react").ReactNode;
        suffix?: import("react").ReactNode;
    } & Partial<import("react").InputHTMLAttributes<HTMLInputElement>>>;
    AutoEmailInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: import("react").ReactNode;
        suffix?: import("react").ReactNode;
    } & Partial<import("react").InputHTMLAttributes<HTMLInputElement>>>;
    AutoUrlInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: import("react").ReactNode;
        suffix?: import("react").ReactNode;
    } & Partial<import("react").InputHTMLAttributes<HTMLInputElement>>>;
    AutoNumberInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
    }>;
    AutoIdInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: import("react").ReactNode;
    }>;
    AutoHiddenInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        value: any;
    }>;
    AutoTextAreaInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: import("react").ReactNode;
        suffix?: import("react").ReactNode;
    } & import("./elements.js").TextareaProps>;
    AutoRichTextInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoRichTextInputProps.js").AutoRichTextInputProps>;
    AutoBelongsToInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyThroughInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyThroughJoinModelForm: (props: {
        children?: import("react").ReactNode;
    }) => import("react").JSX.Element;
    AutoHasOneInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoBelongsToForm: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps>;
    AutoHasManyForm: import("../AutoInput.js").AutoInputComponent<Omit<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps, "recordFilter">>;
    AutoHasManyThroughForm: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps>;
    AutoHasOneForm: import("../AutoInput.js").AutoInputComponent<Omit<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps, "recordFilter">>;
    AutoButton: <GivenOptions_1 extends import("../../utils.js").OptionsType, SchemaT_1, ActionFunc_1 extends import("@gadgetinc/api-client-core").GlobalActionFunction<any> | import("@gadgetinc/api-client-core").ActionFunction<GivenOptions_1, any, any, SchemaT_1, any>>(props: import("../hooks/useAutoButtonController.js").AutoButtonProps<GivenOptions_1, SchemaT_1, ActionFunc_1> & import("./elements.js").ButtonProps) => import("react").JSX.Element;
    AutoTable: <GivenOptions_2 extends import("../../utils.js").OptionsType, SchemaT_2, FinderFunction extends import("@gadgetinc/api-client-core").FindManyFunction<GivenOptions_2, any, SchemaT_2, any>, Options extends FinderFunction["optionsType"]>(props: import("./ShadcnAutoTable.js").ShadcnAutoTableProps<GivenOptions_2, SchemaT_2, FinderFunction, Options>) => import("react").JSX.Element;
};
