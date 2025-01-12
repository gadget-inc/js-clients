import type React from "react";

/** The props that a button component injected into autocomponent's shadcn must support */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: any | null;
}

/** One toast for showing via the toasting system */
export type ToasterToast = {
  className?: string;
  title?: any;
  description?: any;
  action?: any;
  variant?: any;
};

export interface ShadcnElements {
  /** The Button component from shadcn */
  Button: React.ComponentType<ButtonProps>;
  /** The toast imperative function from shadcn */
  toast: (props: ToasterToast) => void;
}
