import { type Control } from "react-hook-form";
import type { GadgetFieldType } from "../../internal/gql/graphql.js";
export declare const FieldTypeToInputType: Partial<Record<GadgetFieldType, string>>;
export declare const useStringInputController: (props: {
    field: string;
    control?: Control<any>;
}) => {
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
