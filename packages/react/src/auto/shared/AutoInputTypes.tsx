import type { Control } from "../../useActionForm.js";

export interface ControllableWithReactHookForm {
  /**
   * React Hook Form control object
   */
  control?: Control<any>;
}

export type InputLabel = string | React.ReactNode | null;

export interface AutoBooleanInputProps extends ControllableWithReactHookForm {
  /**
   * The API identifier of the Boolean field
   */
  field: string;
  /**
   * The label of the Boolean field
   */
  label?: InputLabel;
}

export interface AutoDateTimeInputProps extends ControllableWithReactHookForm {
  /**
   * The API identifier of the DateTime field
   */
  field: string;
  /**
   * The value of the DateTime field
   */
  value?: Date;
  /**
   * Called when the value of the DateTime field changes
   */
  onChange?: (value?: Date) => void;
  /**
   * Error message to display if the DateTime field is invalid
   */
  error?: string;
  /**
   * The label of the DateTime field
   */
  label?: InputLabel;
}

export interface AutoEncryptedStringInputProps extends ControllableWithReactHookForm {
  /**
   * The API identifier of the EncryptedString field
   */
  field: string;
  /**
   * The label of the EncryptedString field
   */
  label?: InputLabel;
}

export interface AutoEnumInputProps extends ControllableWithReactHookForm {
  /**
   * The API identifier of the Enum field
   */
  field: string;
  /**
   * The label of the Enum field
   */
  label?: InputLabel;
}

export interface AutoFileInputProps extends ControllableWithReactHookForm {
  /**
   * The API identifier of the File field
   */
  field: string;
  /**
   * The label of the File field
   */
  label?: InputLabel;
}

export interface AutoHiddenInputProps {
  /**
   * The API identifier of the Hidden field
   */
  field: string;
  /**
   * The value of the Hidden field
   */
  value: any;
}

export interface AutoIdInputProps {
  /**
   * The API identifier of the Id field
   */
  field: string;
  /**
   * The label of the Id field
   */
  label?: InputLabel;
}

export interface AutoInputProps {
  /**
   * The API identifier of the field
   */
  field: string;
  /**
   * The label of the field
   */
  label?: InputLabel;
}

export interface AutoJSONInputProps extends ControllableWithReactHookForm {
  /**
   * The API identifier of the JSON field
   */
  field: string;
  /**
   * The label of the JSON field
   */
  label?: InputLabel;
}

export interface AutoNumberInputProps extends ControllableWithReactHookForm {
  /**
   * The API identifier of the Number field
   */
  field: string;
  /**
   * The label of the Number field
   */
  label?: InputLabel;
}

export interface AutoPasswordInputProps {
  /**
   * The API identifier of the Password field
   */
  field: string;
  /**
   * The label of the Password field
   */
  label?: InputLabel;
  /**
   * React Hook Form control object
   */
  control?: Control<any>;
}

export interface AutoRolesInputProps extends ControllableWithReactHookForm {
  /**
   * The API identifier of the Roles field
   */
  field: string;
  /**
   * The label of the Roles field
   */
  label?: InputLabel;
}

export interface AutoTextInputProps extends ControllableWithReactHookForm {
  /**
   * The API identifier of the field
   */
  field: string;
  /**
   * The label of the field
   */
  label?: InputLabel;
}
