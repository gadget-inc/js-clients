import { type Control } from "react-hook-form";
export declare const useJSONInputController: (props: {
    field: string;
    control?: Control<any>;
}) => {
    onStringValueChange: (newString: string) => void;
    error: Error | undefined;
    stringValue: string;
    jsonValue: any;
    originalController: {
        onChange: (...event: any[]) => void;
        onBlur: import("react-hook-form").Noop;
        value: any;
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
};
