/// <reference types="react" resolution-mode="require"/>
export type { OptionsType } from "../../utils.js";
export { type AutoInputComponent } from "../AutoInput.js";
export type { AutoButtonProps } from "../hooks/useAutoButtonController.js";
export type { AutoHasManyThroughFormProps, AutoRelationshipFormProps, AutoRelationshipInputProps, } from "../interfaces/AutoRelationshipInputProps.js";
export type { AutoBooleanInputProps, AutoDateTimeInputProps, AutoEncryptedStringInputProps, AutoEnumInputProps, AutoFileInputProps, AutoHiddenInputProps, AutoIdInputProps, AutoInputProps, AutoJSONInputProps, AutoNumberInputProps, AutoPasswordInputProps, AutoRolesInputProps, AutoTextInputProps, } from "../shared/AutoInputTypes.js";
export type { AutoRichTextInputProps } from "../shared/AutoRichTextInputProps.js";
export { GadgetShadcnTailwindSafelist } from "./GadgetShadcnTailwindSafelist.js";
export type { ShadcnAutoFormProps as AutoFormProps } from "./ShadcnAutoForm.js";
export type { ShadcnAutoTableProps as AutoTableProps } from "./ShadcnAutoTable.js";
export * from "./elements.js";
export type { DatePickerProps } from "./inputs/ShadcnAutoDateTimePicker.js";
import type { ShadcnElements } from "./elements.js";
/**
 * Build the Autocomponents library for your shadcn presentation components.
 * Autocomponents will render these given components, so they need to take the same base props that mainline shadcn components do.
 */
export declare const makeAutocomponents: (elements: ShadcnElements) => {
    AutoForm: <GivenOptions extends import("../../utils.js").OptionsType, SchemaT, ActionFunc extends import("@gadgetinc/api-client-core").GlobalActionFunction<any> | import("@gadgetinc/api-client-core").ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: import("./ShadcnAutoForm.js").ShadcnAutoFormProps<GivenOptions, SchemaT, ActionFunc>) => import("react").JSX.Element;
    AutoInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoInputProps>;
    AutoBooleanInput: import("../AutoInput.js").AutoInputComponent<{
        className?: string | undefined;
    } & import("../shared/AutoInputTypes.js").AutoBooleanInputProps & Partial<Omit<import("./elements.js").CheckboxProps, "value" | "onChange" | "checked" | "defaultChecked" | "onCheckedChange">>>;
    AutoDateTimePicker: import("../AutoInput.js").AutoInputComponent<{
        id?: string | undefined;
        datePickerProps?: Partial<Omit<import("./inputs/ShadcnAutoDateTimePicker.js").DatePickerProps, "mode" | "selected" | "onSelect">> | undefined;
        timePickerProps?: {
            label?: import("react").ReactNode;
        } | undefined;
    } & import("../shared/AutoInputTypes.js").AutoDateTimeInputProps>;
    AutoEmailInput: import("../AutoInput.js").AutoInputComponent<{
        suffix?: import("react").ReactNode;
    } & import("../shared/AutoInputTypes.js").AutoTextInputProps & Partial<Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>>;
    AutoEncryptedStringInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoEncryptedStringInputProps & {
        suffix?: import("react").ReactNode;
    } & Omit<{
        suffix?: import("react").ReactNode;
    } & import("../shared/AutoInputTypes.js").AutoTextInputProps & Partial<Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>, "type">>;
    AutoEnumInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoEnumInputProps>;
    AutoFileInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoFileInputProps & import("react").HtmlHTMLAttributes<HTMLDivElement>>;
    AutoHiddenInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoHiddenInputProps>;
    AutoIdInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoIdInputProps>;
    AutoJSONInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoJSONInputProps & Partial<Omit<import("react").HTMLAttributes<HTMLTextAreaElement>, "value" | "onChange" | "defaultValue" | "defaultChecked">>>;
    AutoNumberInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoNumberInputProps & Omit<{
        suffix?: import("react").ReactNode;
    } & import("../shared/AutoInputTypes.js").AutoTextInputProps & Partial<Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>, "type" | "step">>;
    AutoPasswordInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoPasswordInputProps & Omit<import("../shared/AutoInputTypes.js").AutoEncryptedStringInputProps & {
        suffix?: import("react").ReactNode;
    } & Omit<{
        suffix?: import("react").ReactNode;
    } & import("../shared/AutoInputTypes.js").AutoTextInputProps & Partial<Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>, "type">, "type" | "disabled" | "suffix" | "placeholder">>;
    AutoRichTextInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoRichTextInputProps.js").AutoRichTextInputProps>;
    AutoRolesInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoRolesInputProps>;
    AutoStringInput: import("../AutoInput.js").AutoInputComponent<{
        suffix?: import("react").ReactNode;
    } & import("../shared/AutoInputTypes.js").AutoTextInputProps & Partial<Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>>;
    AutoTextAreaInput: import("../AutoInput.js").AutoInputComponent<{
        suffix?: import("react").ReactNode;
    } & import("../shared/AutoInputTypes.js").AutoTextInputProps & Omit<import("./elements.js").TextareaProps, "value" | "onChange">>;
    AutoUrlInput: import("../AutoInput.js").AutoInputComponent<{
        suffix?: import("react").ReactNode;
    } & import("../shared/AutoInputTypes.js").AutoTextInputProps & Partial<Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>>;
    AutoBelongsToInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyThroughInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasOneInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoBelongsToForm: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps>;
    AutoHasManyForm: import("../AutoInput.js").AutoInputComponent<Omit<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps, "recordFilter">>;
    AutoHasManyThroughForm: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoHasManyThroughFormProps>;
    AutoHasManyThroughJoinModelForm: (props: {
        children?: import("react").ReactNode;
    }) => import("react").JSX.Element;
    AutoHasOneForm: import("../AutoInput.js").AutoInputComponent<Omit<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps, "recordFilter">>;
    AutoSubmit: (props: {
        children?: import("react").ReactNode;
        isSubmitting?: boolean | undefined;
        className?: string | undefined;
    } & import("./elements.js").ButtonProps) => import("react").JSX.Element;
    SubmitErrorBanner: (props: import("./elements.js").AlertProps) => import("react").JSX.Element | null;
    SubmitResultBanner: (props: {
        successBannerProps?: import("./elements.js").AlertProps | undefined;
        errorBannerProps?: import("./elements.js").AlertProps | undefined;
    }) => import("react").JSX.Element;
    SubmitSuccessfulBanner: (props: import("./elements.js").AlertProps) => import("react").JSX.Element | null;
    AutoButton: <GivenOptions_1 extends import("../../utils.js").OptionsType, SchemaT_1, ActionFunc_1 extends import("@gadgetinc/api-client-core").GlobalActionFunction<any> | import("@gadgetinc/api-client-core").ActionFunction<GivenOptions_1, any, any, SchemaT_1, any>>(props: import("../hooks/useAutoButtonController.js").AutoButtonProps<GivenOptions_1, SchemaT_1, ActionFunc_1> & import("./elements.js").ButtonProps) => import("react").JSX.Element;
    AutoTable: <GivenOptions_2 extends import("../../utils.js").OptionsType, SchemaT_2, FinderFunction extends import("@gadgetinc/api-client-core").FindManyFunction<GivenOptions_2, any, SchemaT_2, any>, Options extends FinderFunction["optionsType"]>(props: import("./ShadcnAutoTable.js").ShadcnAutoTableProps<GivenOptions_2, SchemaT_2, FinderFunction, Options>) => import("react").JSX.Element;
};
