import { useController } from "react-hook-form";
import { FieldType } from "../../metadata.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
export const FieldTypeToInputType = {
    [FieldType.Number]: "number",
    [FieldType.Email]: "email",
    [FieldType.Password]: "password",
    [FieldType.EncryptedString]: "password",
};
const PlaceholderValues = {
    [FieldType.String]: "Enter text",
    [FieldType.Number]: "Enter number",
    [FieldType.Email]: "example@email.com",
    [FieldType.Password]: "Value",
    [FieldType.EncryptedString]: "Enter text",
    [FieldType.Color]: "Enter color",
    [FieldType.Url]: "example.com",
};
export const useStringInputController = (props) => {
    const { field: fieldApiIdentifier, ...rest } = props;
    const { path, metadata } = useFieldMetadata(fieldApiIdentifier);
    const { field: fieldProperties, fieldState: { error }, } = useController({
        name: path,
        ...rest,
    });
    const placeholder = PlaceholderValues[metadata.fieldType];
    return {
        label: metadata.name,
        type: FieldTypeToInputType[metadata.fieldType],
        isError: !!error,
        errorMessage: error?.message,
        autoComplete: "off",
        placeholder,
        metadata,
        ...fieldProperties,
    };
};
//# sourceMappingURL=useStringInputController.js.map