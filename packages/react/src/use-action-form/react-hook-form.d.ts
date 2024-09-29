import "react-hook-form";

declare module "react-hook-form" {
  /**
   * Represents the current state of a form.
   * Provides detailed information about the form's status, validation, and field states.
   */
  export type FormState<TFieldValues extends FieldValues> = {
    /** Indicates whether any field has changed from its initial value. */
    isDirty: boolean;
    /** Shows if the form is currently loading data. */
    isLoading: boolean;
    /** Signals that the form has been submitted. */
    isSubmitted: boolean;
    /** Confirms a successful form submission. */
    isSubmitSuccessful: boolean;
    /** Indicates whether the form is currently being submitted. */
    isSubmitting: boolean;
    /** Shows that form validation is in progress. */
    isValidating: boolean;
    /** Confirms that all form fields pass validation. */
    isValid: boolean;
    /** Indicates whether the entire form is disabled. */
    disabled: boolean;
    /** Tracks the number of form submission attempts. */
    submitCount: number;
    /** Stores the initial values of the form fields. */
    defaultValues?: undefined | Readonly<DeepPartial<TFieldValues>>;
    /** Tracks which fields have been modified. */
    dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<TFieldValues>>>;
    /** Identifies fields that have been interacted with. */
    touchedFields: Partial<Readonly<FieldNamesMarkedBoolean<TFieldValues>>>;
    /** Contains validation errors for form fields. */
    errors: FieldErrors<TFieldValues>;
  };

  /**
   * Orchestrates the core functionality of react-hook-form.
   *
   * It actively:
   * - Manages form state (dirty fields, errors, touched fields)
   * - Handles form submissions
   * - Registers and unregisters fields
   * - Updates values and form state
   * - Executes validations
   * - Manages field arrays
   * - Performs form resets
   *
   * While primarily used internally, you can access Control through the `control` property
   * returned by `useForm` for advanced scenarios.
   */
  export type Control<TFieldValues extends FieldValues = FieldValues, TContext = any> = {
    _subjects: Subjects<TFieldValues>;
    _removeUnmounted: Noop;
    _names: Names;
    _state: {
      mount: boolean;
      action: boolean;
      watch: boolean;
    };
    _reset: UseFormReset<TFieldValues>;
    _options: UseFormProps<TFieldValues, TContext>;
    _getDirty: GetIsDirty;
    _resetDefaultValues: Noop;
    _formState: FormState<TFieldValues>;
    _updateValid: (shouldUpdateValid?: boolean) => void;
    _updateFormState: (formState: Partial<FormState<TFieldValues>>) => void;
    _fields: FieldRefs;
    _formValues: FieldValues;
    _proxyFormState: ReadFormState;
    _defaultValues: Partial<DefaultValues<TFieldValues>>;
    _getWatch: WatchInternal<TFieldValues>;
    _updateFieldArray: BatchFieldArrayUpdate;
    _getFieldArray: <TFieldArrayValues>(name: InternalFieldName) => Partial<TFieldArrayValues>[];
    _updateDisabledField: (
      props: {
        disabled?: boolean;
        name: FieldName<any>;
        value?: unknown;
      } & (
        | {
            field?: Field;
            fields?: undefined;
          }
        | {
            field?: undefined;
            fields?: FieldRefs;
          }
      )
    ) => void;
    _executeSchema: (names: InternalFieldName[]) => Promise<{
      errors: FieldErrors;
    }>;
    register: UseFormRegister<TFieldValues>;
    handleSubmit: UseFormHandleSubmit<TFieldValues>;
    _disableForm: (disabled?: boolean) => void;
    unregister: UseFormUnregister<TFieldValues>;
    getFieldState: UseFormGetFieldState<TFieldValues>;
    setError: UseFormSetError<TFieldValues>;
  };

  /**
   * The props for the useController hook in react-hook-form.
   *
   * @see
   * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
   *
   */
  export type UseControllerProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
  > = {
    name: TName;
    rules?: Omit<RegisterOptions<TFieldValues, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
    shouldUnregister?: boolean;
    defaultValue?: FieldPathValue<TFieldValues, TName>;
    control?: Control<TFieldValues>;
    disabled?: boolean;
  };

  /**
   * The return type for the useController hook in react-hook-form.
   *
   * @see
   * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
   *
   */
  export type UseControllerReturn<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
  > = {
    field: ControllerRenderProps<TFieldValues, TName>;
    formState: UseFormStateReturn<TFieldValues>;
    fieldState: ControllerFieldState;
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
  export type MultipleFieldErrors = {
    [K in keyof RegisterOptions]?: ValidateResult;
  } & {
    [key: string]: ValidateResult;
  };

  /**
   * Represents a single field error for a form field in react-hook-form.
   *
   * @remarks
   * It represents an error for a single field, containing information about
   * the error type and message.
   *
   * @see {@link https://react-hook-form.com/docs/useform/errors#types React Hook Form Errors}
   */
  export type FieldError = {
    type: LiteralUnion<keyof RegisterOptions, string>;
    root?: FieldError;
    ref?: Ref;
    types?: MultipleFieldErrors;
    message?: Message;
  };

  /**
   * Represents a collection of field errors for a form in react-hook-form.
   *
   * @remarks
   * It represents a nested structure of errors for all fields in a form,
   * including potential global errors.
   *
   * @see {@link https://react-hook-form.com/docs/useform/errors#types React Hook Form Errors}
   */
  export type FieldErrors<T extends FieldValues = FieldValues> = Partial<
    FieldValues extends IsAny<FieldValues> ? any : FieldErrorsImpl<DeepRequired<T>>
  > & {
    root?: Record<string, GlobalError> & GlobalError;
  };

  /**
   * Represents internal field errors used by react-hook-form.
   *
   * @remarks
   * It represents a partial record of internal field names mapped to their corresponding field errors in react-hook-form.
   *
   * @see {@link https://react-hook-form.com/docs/useform/errors#types React Hook Form Errors}
   */
  export type InternalFieldErrors = Partial<Record<InternalFieldName, FieldError>>;

  /**
   * Represents an error message string in react-hook-form.
   *
   * @remarks
   * It is used to represent error messages throughout the form validation process.
   *
   * @see {@link https://react-hook-form.com/docs/useform/errors#types React Hook Form Errors}
   */
  export type Message = string;

  /**
   * The return type for the useForm hook in react-hook-form.
   *
   * @remarks
   * This type includes all methods and properties returned by the useForm hook,
   * such as form state, field registration, value manipulation, and submission handling.
   *
   * @see {@link https://react-hook-form.com/docs/useform React Hook Form useForm API}
   */
  export type UseFormReturn<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues extends FieldValues | undefined = undefined
  > = {
    watch: UseFormWatch<TFieldValues>;
    getValues: UseFormGetValues<TFieldValues>;
    getFieldState: UseFormGetFieldState<TFieldValues>;
    setError: UseFormSetError<TFieldValues>;
    clearErrors: UseFormClearErrors<TFieldValues>;
    setValue: UseFormSetValue<TFieldValues>;
    trigger: UseFormTrigger<TFieldValues>;
    formState: FormState<TFieldValues>;
    resetField: UseFormResetField<TFieldValues>;
    reset: UseFormReset<TFieldValues>;
    handleSubmit: UseFormHandleSubmit<TFieldValues, TTransformedValues>;
    unregister: UseFormUnregister<TFieldValues>;
    control: Control<TFieldValues, TContext>;
    register: UseFormRegister<TFieldValues>;
    setFocus: UseFormSetFocus<TFieldValues>;
  };

  /**
   * Props for the Form component in react-hook-form.
   *
   * @remarks
   * This type extends React's form attributes and includes additional properties
   * for form handling, such as custom submit handlers, error handling, and HTTP methods.
   *
   * @see {@link https://react-hook-form.com/docs/useform/form React Hook Form Form API}
   */
  export type FormProps<TFieldValues extends FieldValues, TTransformedValues extends FieldValues | undefined = undefined> = Omit<
    React.FormHTMLAttributes<HTMLFormElement>,
    "onError" | "onSubmit"
  > &
    Partial<{
      control: Control<TFieldValues>;
      headers: Record<string, string>;
      validateStatus: (status: number) => boolean;
      onError: ({
        response,
        error,
      }:
        | {
            response: Response;
            error?: undefined;
          }
        | {
            response?: undefined;
            error: unknown;
          }) => void;
      onSuccess: ({ response }: { response: Response }) => void;
      onSubmit: TTransformedValues extends FieldValues ? FormSubmitHandler<TTransformedValues> : FormSubmitHandler<TFieldValues>;
      method: "post" | "put" | "delete";
      children: React.ReactNode | React.ReactNode[];
      render: (props: { submit: (e?: React.FormEvent) => void }) => React.ReactNode | React.ReactNode[];
      encType: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain" | "application/json";
    }>;
}
