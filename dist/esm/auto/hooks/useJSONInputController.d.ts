import type { UseControllerProps } from "react-hook-form";
export declare const useJSONInputController: (props: {
    field: string;
} & Omit<UseControllerProps, "name">) => {
    onChange: (newString: string) => void;
    value: string;
    onBlur: import("react-hook-form").Noop;
    disabled?: boolean | undefined;
    name: string;
    ref: import("react-hook-form").RefCallBack;
    label: string;
    type: string | undefined;
    isError: boolean;
    errorMessage: string | undefined;
    autoComplete: string;
    placeholder: string | undefined;
    metadata: import("../../internal/gql/graphql.js").FieldMetadataFragment;
};
