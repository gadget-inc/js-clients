import {
  Controller,
  ControllerProps,
  FieldError,
  FieldErrors,
  FieldPath,
  FieldValues,
  InternalFieldErrors,
  Message,
  MultipleFieldErrors,
  RegisterOptions,
  UseControllerProps,
  UseControllerReturn,
  useController,
} from "react-hook-form";

/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @see
 * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */
export const useGadgetController: typeof useController = (...args) => {
  return useController(...args);
};

/**
 * The options for registering a field in react-hook-form.
 *
 * @see
 * [API](https://react-hook-form.com/docs/useform/register)
 *
 */
export type GadgetRegisterOptions<TFieldValues extends FieldValues = FieldValues> = RegisterOptions<TFieldValues>;

/**
 * The props for the useController hook in react-hook-form.
 *
 * @see
 * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 */
export type GadgetUseControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName>;

/**
 * The return type for the useController hook in react-hook-form.
 *
 * @see
 * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 */
export type GadgetUseControllerReturn<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerReturn<TFieldValues, TName>;

/**
 * The props for the Controller component in react-hook-form.
 *
 * @see
 * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 */
export type GadgetControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = ControllerProps<TFieldValues, TName>;

/**
 * Component based on `useController` hook to work with controlled component in react-hook-form.
 *
 * @see
 * [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */
export const GadgetController: typeof Controller = (...args) => {
  return Controller(...args);
};

/**
 * Represents multiple field errors for a form field in react-hook-form.
 *
 * @remarks
 * It represents a collection of validation errors for a single field, where each key
 * corresponds to a validation rule and the value is the validation result.
 *
 * @see {@link https://react-hook-form.com/docs/useform/errors#types React Hook Form Errors}
 */
export type GadgetMultipleFieldErrors = MultipleFieldErrors;

/**
 * Represents a single field error for a form field in react-hook-form.
 *
 * @remarks
 * It represents an error for a single field, containing information about
 * the error type and message.
 *
 * @see {@link https://react-hook-form.com/docs/useform/errors#types React Hook Form Errors}
 */
export type GadgetFieldError = FieldError;

/**
 * Represents a collection of field errors for a form in react-hook-form.
 *
 * @remarks
 * It represents a nested structure of errors for all fields in a form,
 * including potential global errors.
 *
 * @see {@link https://react-hook-form.com/docs/useform/errors#types React Hook Form Errors}
 */
export type GadgetFieldErrors<TFieldValues extends FieldValues = FieldValues> = FieldErrors<TFieldValues>;

/**
 * Represents internal field errors used by react-hook-form.
 *
 * @remarks
 * It represents a partial record of internal field names mapped to their corresponding field errors in react-hook-form.
 *
 * @see {@link https://react-hook-form.com/docs/useform/errors#types React Hook Form Errors}
 */
export type GadgetInternalFieldErrors = InternalFieldErrors;

/**
 * Represents an error message string in react-hook-form.
 *
 * @remarks
 * It is used to represent error messages throughout the form validation process.
 *
 * @see {@link https://react-hook-form.com/docs/useform/errors#types React Hook Form Errors}
 */
export type GadgetMessage = Message;
