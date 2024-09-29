import { FieldValues, FormProps, UseFormReturn } from "react-hook-form";

/**
 * The return type for the useForm hook in react-hook-form.
 *
 * @remarks
 * This type includes all methods and properties returned by the useForm hook,
 * such as form state, field registration, value manipulation, and submission handling.
 *
 * @see {@link https://react-hook-form.com/docs/useform React Hook Form useForm API}
 */
export type GadgetUseFormReturn<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined
> = UseFormReturn<TFieldValues, TContext, TTransformedValues>;

/**
 * Props for the Form component in react-hook-form.
 *
 * @remarks
 * This type extends React's form attributes and includes additional properties
 * for form handling, such as custom submit handlers, error handling, and HTTP methods.
 *
 * @see {@link https://react-hook-form.com/docs/useform/form React Hook Form Form API}
 */
export type GadgetFormProps<TFieldValues extends FieldValues, TTransformedValues extends FieldValues | undefined = undefined> = FormProps<
  TFieldValues,
  TTransformedValues
>;
