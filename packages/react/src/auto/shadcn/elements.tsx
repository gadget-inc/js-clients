import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import type React from "react";
import type { PropsWithChildren } from "react";

/** The props that a component injected into autocomponent's shadcn must support */
export interface BaseProps extends PropsWithChildren {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null;
  className?: string;
}

/** The props that a button component injected into autocomponent's shadcn must support */
export interface ButtonProps extends BaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  size?: "default" | "sm" | "lg" | "icon" | null;
}

/** The props that a skeleton component injected into autocomponent's shadcn must support */
export interface SkeletonProps extends Pick<BaseProps, "className"> {}

/** The props that an alert component injected into autocomponent's shadcn must support */
export interface AlertProps extends Omit<BaseProps, "variant"> {
  variant?: "default" | "destructive" | null;
}

/** The props that an alert title component injected into autocomponent's shadcn must support */
export interface AlertTitleProps extends Pick<BaseProps, "className" | "children"> {}

/** The props that an alert description component injected into autocomponent's shadcn must support */
export interface AlertDescriptionProps extends Pick<BaseProps, "className" | "children"> {}

/** The props that a form component injected into autocomponent's shadcn must support */
export interface FormProps extends Pick<BaseProps, "className" | "children"> {}

/** The props that an input component injected into autocomponent's shadcn must support */
export interface InputProps extends Pick<BaseProps, "className">, React.InputHTMLAttributes<HTMLInputElement> {}

/** The props that a label component injected into autocomponent's shadcn must support */
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

/** The props that a checkbox component injected into autocomponent's shadcn must support */
export interface CheckboxProps extends Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, "type"> {
  checked?: boolean | "indeterminate";
}

/** One toast for showing via the toasting system */
export interface ToasterToast extends BaseProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}

export interface ShadcnElements {
  /** The Label component from shadcn */
  Label: React.ComponentType<LabelProps>;
  /** The Button component from shadcn */
  Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
  /** The Skeleton component from shadcn */
  Skeleton: React.ComponentType<SkeletonProps>;
  /** The Alert component from shadcn */
  Alert: React.ComponentType<AlertProps>;

  /** The Checkbox component from shadcn */
  Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>;

  /** The Form component from shadcn */
  Form: React.ComponentType<FormProps>;

  /** The Input component from shadcn */
  Input: React.ComponentType<InputProps>;

  /** The AlertTitle component from shadcn */
  AlertTitle: React.ComponentType<AlertTitleProps>;
  /** The AlertDescription component from shadcn */
  AlertDescription: React.ComponentType<AlertDescriptionProps>;

  /** The toast imperative function from shadcn */
  toast: (props: ToasterToast) => void;

  /** The Card component from shadcn */
  Card: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;

  /** The CardHeader component from shadcn */
  CardHeader: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;

  /** The CardFooter component from shadcn */
  CardFooter: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;

  /** The CardTitle component from shadcn */
  CardTitle: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;

  /** The CardDescription component from shadcn */
  CardDescription: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;

  /** The CardContent component from shadcn */
  CardContent: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;
}
