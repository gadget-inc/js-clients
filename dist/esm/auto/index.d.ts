/// <reference types="react" resolution-mode="require"/>
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
    AutoDateTimePicker: React.ComponentType<{
        suiteName?: string;
        field: string;
        label?: string;
        id?: string;
        onChange?: (date: Date) => void;
        value?: Date;
        includeTime?: boolean;
    }>;
    AutoBelongsToInput: React.ComponentType<any>;
    AutoEnumInput: React.ComponentType<any>;
}
