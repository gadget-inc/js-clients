import type React from "react";
/** The props that a component injected into autocomponent's shadcn must support */
export interface BaseProps extends React.PropsWithChildren {
    className?: string;
}
/** The props that a button component injected into autocomponent's shadcn must support */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null;
    size?: "default" | "sm" | "lg" | "icon" | null;
}
/** The props that an alert component injected into autocomponent's shadcn must support */
export interface AlertProps extends BaseProps {
    variant?: "default" | "destructive" | null;
}
/** The props that an alert title component injected into autocomponent's shadcn must support */
export type AlertTitleProps = BaseProps;
/** The props that an alert description component injected into autocomponent's shadcn must support */
export type AlertDescriptionProps = BaseProps;
/** The props that a form component injected into autocomponent's shadcn must support */
export type FormProps = BaseProps;
/** The props that an input component injected into autocomponent's shadcn must support */
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
/** The props that a label component injected into autocomponent's shadcn must support */
export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;
/** The props that a checkbox component injected into autocomponent's shadcn must support */
export interface CheckboxProps extends Omit<ButtonProps, "checked" | "defaultChecked"> {
    checked?: boolean | "indeterminate";
    defaultChecked?: boolean | "indeterminate";
    required?: boolean;
    onCheckedChange?(checked: boolean | "indeterminate"): void;
}
/** The props that a skeleton component injected into autocomponent's shadcn must support */
export type SkeletonProps = Pick<React.HTMLAttributes<HTMLDivElement>, "className">;
/** One toast for showing via the toasting system */
export type ToasterToast = {
    className?: string;
    title?: any;
    description?: any;
    action?: any;
    variant?: any;
};
export interface ShadcnElements {
    /** The Alert component from shadcn */
    Alert: React.ComponentType<AlertProps>;
    /** The AlertTitle component from shadcn */
    AlertTitle: React.ComponentType<AlertTitleProps>;
    /** The AlertDescription component from shadcn */
    AlertDescription: React.ComponentType<AlertDescriptionProps>;
    /** The Button component from shadcn */
    Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
    /** The Checkbox component from shadcn */
    Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>;
    /** The Form component from shadcn */
    Form: React.ComponentType<FormProps>;
    /** The Input component from shadcn */
    Input: React.ComponentType<InputProps>;
    /** The Label component from shadcn */
    Label: React.ComponentType<LabelProps>;
    /** The Skeleton component from shadcn */
    Skeleton: React.ComponentType<SkeletonProps>;
    /** The toast imperative function from shadcn */
    toast: (props: ToasterToast) => void;
}
