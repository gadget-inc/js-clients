export interface AccordionProps {
  /**
   * Render the component as a child rather than wrapping it in its own element.
   * @default false
   */
  asChild?: boolean;
  /**
   * Whether the component is collapsible.
   * @default false
   */
  collapsible?: boolean;
  /**
   * Whether the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Direction: usually "ltr" or "rtl".
   * @default "ltr"
   */
  dir?: "ltr" | "rtl";
  /**
   * Orientation of the component.
   * @default "vertical"
   */
  orientation?: "vertical" | "horizontal";

  children?: React.ReactNode;

  className?: string;
}

export interface AccordionItemProps {
  asChild?: boolean;
  disabled?: boolean;
  value: string;
  className?: string;
  children?: React.ReactNode;
}

// For the single-value variant
export interface SingleValueProps extends AccordionProps {
  /**
   * A required property that should be one of the enum values.
   */
  type: "single" | "multiple"; // adjust the enum values as needed
  /**
   * The current value.
   */
  value?: string;
  /**
   * The default value.
   */
  defaultValue?: string;
  /**
   * Called when the value changes.
   */
  onValueChange?: (value: string) => void;
}

// For the multiple-value variant
export interface MultipleValueProps extends AccordionProps {
  type: "multiple"; // adjust as needed
  /**
   * The current value as an array of strings.
   */
  value?: string | string[];
  /**
   * The default value as an array of strings.
   */
  defaultValue?: string | string[];
  /**
   * Called when the value changes.
   */
  onValueChange?: (value: string[]) => void;
}

// The component can accept either single or multiple values.
export type MyAccordionComponentProps = SingleValueProps | MultipleValueProps;
