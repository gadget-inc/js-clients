import type { AutoFormProps } from "./AutoForm.js";
import type { AutoTableProps } from "./AutoTable.js";

export interface AutoAdapter<T = any, F = any> {
  AutoTable: React.ComponentType<AutoTableProps<any, any, any, any> & T>;
  AutoForm: React.ComponentType<AutoFormProps<any, any, any, any> & F>;
}
