import type { AutoRelationshipFormProps } from "../../../interfaces/AutoRelationshipInputProps.js";
export declare const useRecordLabelObjectFromProps: (props: AutoRelationshipFormProps) => {
    primary: import("../../../interfaces/AutoRelationshipInputProps.js").OptionLabel;
    secondary?: import("../../../interfaces/AutoRelationshipInputProps.js").OptionLabel | undefined;
    tertiary?: import("../../../interfaces/AutoRelationshipInputProps.js").OptionLabel | undefined;
};
export declare const PolarisAutoHasManyForm: import("../../../AutoInput.js").AutoInputComponent<AutoRelationshipFormProps>;
