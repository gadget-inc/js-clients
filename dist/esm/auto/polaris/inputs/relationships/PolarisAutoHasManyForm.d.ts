import type { AutoRelationshipFormProps } from "../../../interfaces/AutoRelationshipInputProps.js";
type HasManyFormProps = Omit<AutoRelationshipFormProps, "recordFilter">;
export declare const PolarisAutoHasManyForm: import("../../../AutoInput.js").AutoInputComponent<HasManyFormProps>;
export {};
