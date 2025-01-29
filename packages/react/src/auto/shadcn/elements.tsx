import type React from "react";

/** The props that a badge component injected into autocomponent's shadcn must support */
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: any;
}
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

/** The props that a command component injected into autocomponent's shadcn must support */
export interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

/** The props that an alert component injected into autocomponent's shadcn must support */
export interface AlertProps extends BaseProps {
  variant?: "default" | "destructive" | null;
}

/** The props that a card component injected into autocomponent's shadcn must support */
export interface CardProps extends BaseProps {
  variant?: "default" | "destructive" | null;
}

/** The props that a calendar component injected into autocomponent's shadcn must support */
export interface CalendarProps extends BaseProps {
  mode?: "single" | "multiple" | "range" | null;
  selected?: Date | Range;
  onSelect?: (date: Date | undefined) => void;
  initialFocus?: boolean;
}

/** The props that a card header component injected into autocomponent's shadcn must support */
export type CardHeaderProps = BaseProps;

/** The props that a card footer component injected into autocomponent's shadcn must support */
export type CardFooterProps = BaseProps;

/** The props that a card title component injected into autocomponent's shadcn must support */
export type CardTitleProps = BaseProps;

/** The props that a card description component injected into autocomponent's shadcn must support */
export type CardDescriptionProps = BaseProps;

/** The props that a card content component injected into autocomponent's shadcn must support */
export type CardContentProps = BaseProps;

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

/** The props that a scroll area component injected into autocomponent's shadcn must support */
export type ScrollAreaProps = React.HTMLAttributes<HTMLDivElement>;

/** The props that a scroll bar component injected into autocomponent's shadcn must support */
export interface ScrollBarProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal";
}

/** The props that a checkbox component injected into autocomponent's shadcn must support */
export interface CheckboxProps extends Omit<ButtonProps, "checked" | "defaultChecked"> {
  checked?: boolean | "indeterminate";
  defaultChecked?: boolean | "indeterminate";
  required?: boolean;
  onCheckedChange?(checked: boolean | "indeterminate"): void;
}

/** The props that a popover component injected into autocomponent's shadcn must support */
export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

/** The props that a popover anchor component injected into autocomponent's shadcn must support */
export type PopoverAnchorProps = React.HTMLAttributes<HTMLDivElement>;

/** The props that a popover content component injected into autocomponent's shadcn must support */
export type PopoverContentProps = React.HTMLAttributes<HTMLDivElement>;

/** The props that a popover trigger component injected into autocomponent's shadcn must support */
export type PopoverTriggerProps = React.HTMLAttributes<HTMLDivElement>;

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

export type MergeClassNames = (defaultClassNames: string | string[], userClassName?: string) => string;

export interface ShadcnElements {
  /** The Badge component from shadcn */
  Badge: React.ComponentType<BadgeProps>;
  /** The Alert component from shadcn */
  Alert: React.ComponentType<AlertProps>;

  /** The AlertTitle component from shadcn */
  AlertTitle: React.ComponentType<AlertTitleProps>;

  /** The AlertDescription component from shadcn */
  AlertDescription: React.ComponentType<AlertDescriptionProps>;

  /** The Button component from shadcn */
  Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

  /** The Card component from shadcn */
  Card: React.ComponentType<CardProps>;

  /** The Calendar component from shadcn */
  Calendar: React.ComponentType<CalendarProps>;

  /** The CardHeader component from shadcn */
  CardHeader: React.ComponentType<CardHeaderProps>;

  /** The CardFooter component from shadcn */
  CardFooter: React.ComponentType<CardFooterProps>;

  /** The CardTitle component from shadcn */
  CardTitle: React.ComponentType<CardTitleProps>;

  /** The CardDescription component from shadcn */
  CardDescription: React.ComponentType<CardDescriptionProps>;

  /** The CardContent component from shadcn */
  CardContent: React.ComponentType<CardContentProps>;

  /** The Command component from shadcn */
  //:TODO: This is a hack to get the Command component to work with the CommandItem component. please fix this.
  Command: React.ForwardRefExoticComponent<React.ComponentType<CommandProps> & React.RefAttributes<HTMLDivElement> & any>;

  /** The CommandEmpty component from shadcn */
  CommandEmpty: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;

  /** The CommandGroup component from shadcn */
  CommandGroup: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;

  // /** The CommandInput component from shadcn */
  // CommandInput: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;
  CommandInput: any;

  /** The CommandItem component from shadcn */
  CommandItem: React.ComponentType<React.ComponentPropsWithoutRef<any>>;

  /** The CommandList component from shadcn */
  CommandList: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;

  /** The CommandSeparator component from shadcn */
  CommandSeparator: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;

  /** The Checkbox component from shadcn */
  Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>;

  /** The Form component from shadcn */
  Form: React.ComponentType<FormProps>;

  /** The Input component from shadcn */
  Input: React.ComponentType<InputProps>;

  /** The Label component from shadcn */
  Label: React.ComponentType<LabelProps>;

  //TODO: Remove these as they are not used
  /** The Popover component from shadcn */
  Popover: React.ComponentType<PopoverProps>;

  //TODO: Remove these as they are not used
  /** The PopoverAnchor component from shadcn */
  PopoverAnchor: React.ComponentType<PopoverAnchorProps>;

  //TODO: Remove these as they are not used
  /** The PopoverContent component from shadcn */
  PopoverContent: React.ComponentType<PopoverContentProps>;

  /** The PopoverTrigger component from shadcn */
  //:TODO: This is a hack to get the PopoverTrigger component to work with the Popover component. please fix this.
  PopoverTrigger: React.ForwardRefExoticComponent<PopoverTriggerProps & React.RefAttributes<HTMLButtonElement> & any>;

  /** The ScrollArea component from shadcn */
  ScrollArea: React.ComponentType<ScrollAreaProps>;

  /** The ScrollBar component from shadcn */
  ScrollBar: React.ComponentType<ScrollBarProps>;

  /** The Skeleton component from shadcn */
  Skeleton: React.ComponentType<SkeletonProps>;

  /** The toast imperative function from shadcn */
  toast: (props: ToasterToast) => void;
}
