/// <reference types="react" resolution-mode="require"/>
import type { ShadcnElements } from "./elements.js";
export * from "./elements.js";
/**
 * Build the Autocomponents library for your shadcn presentation components.
 * Autocomponents will render these given components, so they need to take the same base props that mainline shadcn components do.
 */
export declare const makeAutocomponents: (elements: ShadcnElements) => {
    AutoForm: <GivenOptions extends import("../../utils.js").OptionsType, SchemaT, ActionFunc extends import("@gadgetinc/api-client-core").ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: {
        action: ActionFunc;
        record?: any;
        include?: string[] | undefined;
        exclude?: string[] | undefined;
        defaultValues?: (ActionFunc["variablesType"] & Record<string, unknown>) | undefined;
        submitLabel?: import("react").ReactNode;
        successContent?: import("react").ReactNode;
        title?: string | false | undefined;
        select?: GivenOptions["select"] | undefined;
        onSuccess?: ((record: import("../../use-action-form/types.js").UseActionFormHookStateData<ActionFunc>) => void) | undefined;
        onFailure?: ((error: Error | import("react-hook-form").FieldErrors<ActionFunc["variablesType"]>) => void) | undefined;
        children?: import("react").ReactNode;
        debug?: boolean | undefined;
    } & (ActionFunc extends import("../../use-action-form/types.js").AnyActionWithId<GivenOptions> ? {
        findBy?: import("../../use-action-form/types.js").RecordIdentifier | undefined;
    } : {}) & import("./elements.js").BaseProps) => import("react").JSX.Element;
    AutoInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: string | undefined;
    } & {
        selectPaths?: string[] | undefined;
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
    AutoBelongsToInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps & {
        selectPaths?: string[] | undefined;
    }>;
    AutoHasManyInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps & {
        selectPaths?: string[] | undefined;
    }>;
    AutoRolesInput: import("../AutoInput.js").AutoInputComponent<import("./inputs/ShadcnAutoRolesInput.js").AutoRolesInputProps & {
        selectPaths?: string[] | undefined;
    }>;
    AutoEnumInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: string | undefined;
    } & {
        selectPaths?: string[] | undefined;
    }>;
    AutoJSONInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: string | undefined;
    } & Partial<import("react").HTMLAttributes<HTMLTextAreaElement>> & {
        selectPaths?: string[] | undefined;
    }>;
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
    } & {
        selectPaths?: string[] | undefined;
    }>;
    AutoPasswordInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
    } & {
        selectPaths?: string[] | undefined;
    }>;
    AutoBooleanInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
        label?: string | undefined;
    } & Partial<import("./elements.js").CheckboxProps> & {
        selectPaths?: string[] | undefined;
    }>;
    AutoEncryptedStringInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
        suffix?: import("react").ReactNode;
    } & {
        selectPaths?: string[] | undefined;
    }>;
    AutoStringInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: string | undefined;
        suffix?: import("react").ReactNode;
    } & Partial<import("react").InputHTMLAttributes<HTMLInputElement>> & {
        selectPaths?: string[] | undefined;
    }>;
    AutoNumberInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
    } & {
        selectPaths?: string[] | undefined;
    }>;
    AutoIdInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: string | undefined;
    } & {
        selectPaths?: string[] | undefined;
    }>;
    AutoButton: <GivenOptions_1 extends import("../../utils.js").OptionsType, SchemaT_1, ActionFunc_1 extends import("@gadgetinc/api-client-core").GlobalActionFunction<any> | import("@gadgetinc/api-client-core").ActionFunction<GivenOptions_1, any, any, SchemaT_1, any>>(props: import("../hooks/useAutoButtonController.js").AutoButtonProps<GivenOptions_1, SchemaT_1, ActionFunc_1> & import("./elements.js").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").JSX.Element;
    AutoTable: <GivenOptions_2 extends import("../../utils.js").OptionsType, SchemaT_2, FinderFunction extends import("@gadgetinc/api-client-core").FindManyFunction<GivenOptions_2, any, SchemaT_2, any>, Options extends FinderFunction["optionsType"]>(props: import("../AutoTable.js").AutoTableProps<GivenOptions_2, SchemaT_2, FinderFunction, Options>) => import("react").JSX.Element;
};
