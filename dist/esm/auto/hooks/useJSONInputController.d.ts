import type { UseControllerProps } from "../../useActionForm.js";
export declare const useJSONInputController: (props: {
    field: string;
} & Omit<UseControllerProps, "name">) => {
    onChange: (newString: string) => void;
    value: string;
    onBlur: import("../../useActionForm.js").Noop;
    disabled?: boolean | undefined;
    name: string;
    ref: import("../../useActionForm.js").RefCallBack;
    id: string;
    label: string;
    type: string | undefined;
    isError: boolean;
    errorMessage: string | undefined;
    autoComplete: string;
    placeholder: string | undefined;
    metadata: import("../../internal/gql/graphql.js").FieldMetadataFragment;
};
