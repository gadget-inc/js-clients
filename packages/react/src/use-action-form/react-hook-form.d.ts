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
}
