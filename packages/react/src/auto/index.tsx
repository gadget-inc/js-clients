import type { ReactNode } from "react";
import type { AutoFormProps } from "./AutoForm.js";
import type { AutoTableProps } from "./AutoTable.js";
import type { AutoButtonProps } from "./hooks/useAutoButtonController.js";

export interface AutoAdapter<T = any, F = any, B = any> {
  AutoForm: React.ComponentType<AutoFormProps<any, any, any> & F>;
  AutoButton: React.ComponentType<AutoButtonProps<any, any, any> & B>;
  AutoTable: React.ComponentType<AutoTableProps<any, any, any, any> & T>;
  AutoInput: React.ComponentType<any>;
  AutoJSONInput: React.ComponentType<any>;
  AutoSubmit: React.ComponentType<any>;
  SubmitResultBanner: React.ComponentType<any>;

  AutoHasOneForm: React.ComponentType<any>;
  AutoBelongsToForm: React.ComponentType<any>;
  AutoHasManyForm: React.ComponentType<any>;
  AutoHasManyThroughForm: React.ComponentType<any>;

  AutoDateTimePicker: React.ComponentType<{
    field: string;
    label?: ReactNode;
    id?: string;
  }>;
  AutoBelongsToInput: React.ComponentType<any>;
  AutoHasManyInput: React.ComponentType<any>;
  AutoEnumInput: React.ComponentType<any>;
}
