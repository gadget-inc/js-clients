import type { GadgetFieldType } from "../../internal/gql/graphql.js";
import { type AutoTextInputProps } from "../shared/AutoInputTypes.js";
export declare const FieldTypeToInputType: Partial<Record<GadgetFieldType, string>>;
export declare const useStringInputController: (props: AutoTextInputProps) => {
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
    metadata: import("../../metadata.js").FieldMetadata;
    value: any;
    onChange: (...args: any[]) => void;
};
