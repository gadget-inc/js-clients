import type { UseControllerProps } from "../../useActionForm.js";
export declare const useJSONInputController: (props: {
    field: string;
} & Omit<UseControllerProps, "name">) => {
    onChange: (newString: string) => void;
    value: string;
    onBlur: import("react-hook-form/dist/types/utils.js").Noop;
    disabled?: boolean | undefined;
    name: string;
    ref: import("react-hook-form/dist/types/form.js").RefCallBack;
    id: string;
    label: string;
    type: string | undefined;
    isError: boolean;
    errorMessage: string | undefined;
    autoComplete: string;
    placeholder: string | undefined;
    metadata: import("../../metadata.js").FieldMetadata;
};
