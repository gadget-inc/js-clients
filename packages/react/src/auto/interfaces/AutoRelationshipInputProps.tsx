import type { ReactNode } from "react";
import { ControllableWithReactHookForm, InputLabel } from "../shared/AutoInputTypes.js";

export interface AutoRelationshipInputProps extends ControllableWithReactHookForm {
  /**
   * The API identifier of the field
   */
  field: string;

  /**
   * Controls how records on the related model are displayed as options in the relationship field input component
   * When using a string, the string will indicate the field on the related model record to be displayed as the option label
   * When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
   */
  optionLabel?: OptionLabel;

  /**
   * The label of the field input component
   */
  label?: InputLabel;
}

/**
 * Type for the option label when displaying a list of records from a related model
 * When using a string, the string will indicate the field on the related model record to be displayed as the option label
 * When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 */
export type OptionLabel = string | ((record: Record<string, any>) => ReactNode);
