import type { GadgetFieldType } from "../../internal/gql/graphql.js";
import type { UseControllerProps } from "../../useActionForm.js";
export declare const FieldTypeToInputType: Partial<Record<GadgetFieldType, string>>;
export declare const useStringInputController: (props: {
    field: string;
} & Omit<UseControllerProps, "name">) => {
    onChange: (...event: any[]) => void;
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
    value: any;
};
