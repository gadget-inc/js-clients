/// <reference types="react" />
import type { AutoFormProps } from "./AutoForm.js";
export interface AutoAdapter<T = any, F = any> {
    AutoForm: React.ComponentType<AutoFormProps<any, any, any, any> & F>;
}
