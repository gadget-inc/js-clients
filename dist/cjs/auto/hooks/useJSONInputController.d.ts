import { type AutoJSONInputProps } from "../shared/AutoInputTypes.js";
export declare const useJSONInputController: (props: AutoJSONInputProps) => {
    onChange: (newString: string) => void;
    value: string;
    onBlur: import("react-hook-form").Noop;
    disabled?: boolean | undefined;
    name: string;
    ref: import("react-hook-form").RefCallBack;
    id: string;
    label: string;
    type: string | undefined;
    isError: boolean;
    errorMessage: string | undefined;
    autoComplete: string;
    placeholder: string | undefined;
    metadata: import("../../metadata.js").FieldMetadata;
};
