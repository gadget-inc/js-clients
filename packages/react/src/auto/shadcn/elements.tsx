import type React from "react";

/** The props that a badge component injected into autocomponent's shadcn must support */
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: any;
}

/** The props that a button component injected into autocomponent's shadcn must support */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null;
  size?: "default" | "sm" | "lg" | "icon" | null;
}

/** The props that a command component injected into autocomponent's shadcn must support */
export interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

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

/** One toast for showing via the toasting system */
export type ToasterToast = {
  className?: string;
  title?: any;
  description?: any;
  action?: any;
  variant?: any;
};

export type MergeClassNames = (defaultClassNames: string | string[], userClassName?: string) => string;

export interface ShadcnElements {
  /** The Badge component from shadcn */
  Badge: React.ComponentType<BadgeProps>;

  /** The Button component from shadcn */
  Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

  /** The Command component from shadcn */
  //:TODO: This is a hack to get the Command component to work with the CommandItem component. please fix this.
  Command: React.ForwardRefExoticComponent<React.ComponentType<CommandProps> & React.RefAttributes<HTMLDivElement> & any>;

  /** The CommandEmpty component from shadcn */
  CommandEmpty: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;

  /** The CommandGroup component from shadcn */
  CommandGroup: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;

  /** The CommandInput component from shadcn */
  CommandInput: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;

  /** The CommandItem component from shadcn */
  CommandItem: React.ComponentType<React.ComponentPropsWithoutRef<any>>;

  /** The CommandList component from shadcn */
  CommandList: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;

  /** The CommandSeparator component from shadcn */
  CommandSeparator: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;

  /** The Checkbox component from shadcn */
  Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>;

  /** The Input component from shadcn */
  Input: React.ComponentType<InputProps>;

  /** The Label component from shadcn */
  Label: React.ComponentType<LabelProps>;

  /** The toast imperative function from shadcn */
  toast: (props: ToasterToast) => void;
}
