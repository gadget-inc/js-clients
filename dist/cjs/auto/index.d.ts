/// <reference types="react" />
import type { AutoFormProps } from "./AutoForm";
import type { AutoTableProps } from "./AutoTable";
export interface AutoAdapter<T = any, F = any> {
    AutoTable: React.ComponentType<AutoTableProps<any, any, any, any> & T>;
    AutoForm: React.ComponentType<AutoFormProps<any, any, any, any> & F>;
}
