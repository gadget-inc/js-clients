/// <reference types="react" />
import type { AutoFormProps } from "./AutoForm.js";
import type { AutoButtonProps } from "./hooks/useAutoButtonController.js";
export interface AutoAdapter<T = any, F = any, B = any> {
    AutoForm: React.ComponentType<AutoFormProps<any, any, any> & F>;
    AutoButton: React.ComponentType<AutoButtonProps<any, any, any> & B>;
}
