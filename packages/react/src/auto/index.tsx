import type { AutoFormProps } from "./AutoForm";

export interface AutoAdapter<T = any, F = any> {
  AutoForm: React.ComponentType<AutoFormProps<any, any, any, any> & F>;
  // TODO: AutoTable
}
