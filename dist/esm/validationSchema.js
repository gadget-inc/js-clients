import { array, boolean, date, mixed, number, object, string } from "yup";
import { GadgetFieldType } from "./internal/gql/graphql.js";
const fileInputValidator = object({
    base64: string(),
    copyURL: string(),
    directUploadToken: string(),
    mimeType: string(),
    fileName: string(),
    file: object(),
});
const richTextInputValidator = object({
    markdown: string().required(),
});
const validatorForField = (field) => {
    let validator;
    switch (field.fieldType) {
        case GadgetFieldType.Boolean: {
            validator = boolean();
            break;
        }
        case GadgetFieldType.Code:
        case GadgetFieldType.Password:
        case GadgetFieldType.EncryptedString:
        case GadgetFieldType.Color:
        case GadgetFieldType.String: {
            validator = string();
            break;
        }
        case GadgetFieldType.DateTime: {
            validator = date();
            break;
        }
        case GadgetFieldType.Email: {
            validator = string().email();
            break;
        }
        case GadgetFieldType.Url: {
            validator = string().url();
            break;
        }
        case GadgetFieldType.Enum: {
            const config = field.configuration;
            const element = string().oneOf(config.options.map((option) => option.name));
            if (config.allowMultiple) {
                validator = array(element);
            }
            else {
                validator = element;
            }
            break;
        }
        case GadgetFieldType.File: {
            validator = fileInputValidator;
            break;
        }
        case GadgetFieldType.Number: {
            validator = number();
            break;
        }
        case GadgetFieldType.Id: {
            validator = string();
            break;
        }
        case GadgetFieldType.RecordState:
        case GadgetFieldType.Any:
        case GadgetFieldType.Json: {
            validator = mixed();
            break;
        }
        case GadgetFieldType.Money: {
            validator = string();
            break;
        }
        case GadgetFieldType.Object: {
            const config = field.configuration;
            validator = validationSchema(config.fields);
            break;
        }
        case GadgetFieldType.RichText: {
            validator = richTextInputValidator;
            break;
        }
        case GadgetFieldType.RoleAssignments: {
            validator = array(string());
            break;
        }
        case GadgetFieldType.Vector: {
            validator = array(number());
            break;
        }
        case GadgetFieldType.BelongsTo:
        case GadgetFieldType.HasOne: {
            // TODO: implement relationship validations
            validator = object();
            break;
        }
        case GadgetFieldType.HasManyThrough:
        case GadgetFieldType.HasMany: {
            // TODO: implement relationship validations
            validator = array();
            break;
        }
        default: {
            throw new Error(`unknown field type ${field.fieldType} for validator generation`);
        }
    }
    if (field.requiredArgumentForInput) {
        validator = validator.required();
    }
    else {
        validator = validator.nullable().default(null);
    }
    return validator;
};
/**
 * Build a Yup validation schema given some fields metadata for validating that a data object conforms to the schema at runtime
 */
export const validationSchema = (fields) => {
    const validators = {};
    for (const field of fields) {
        validators[field.apiIdentifier] = validatorForField(field);
    }
    return object(validators);
};
//# sourceMappingURL=validationSchema.js.map