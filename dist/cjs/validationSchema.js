"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = void 0;
const yup_1 = require("yup");
const graphql_js_1 = require("./internal/gql/graphql.js");
const fileInputValidator = (0, yup_1.object)({
    base64: (0, yup_1.string)(),
    copyURL: (0, yup_1.string)(),
    directUploadToken: (0, yup_1.string)(),
    mimeType: (0, yup_1.string)(),
    fileName: (0, yup_1.string)(),
    file: (0, yup_1.object)(),
});
const richTextInputValidator = (0, yup_1.object)({
    markdown: (0, yup_1.string)().required(),
});
const validatorForField = (field) => {
    let validator;
    switch (field.fieldType) {
        case graphql_js_1.GadgetFieldType.Boolean: {
            validator = (0, yup_1.boolean)();
            break;
        }
        case graphql_js_1.GadgetFieldType.Code:
        case graphql_js_1.GadgetFieldType.Password:
        case graphql_js_1.GadgetFieldType.EncryptedString:
        case graphql_js_1.GadgetFieldType.Color:
        case graphql_js_1.GadgetFieldType.String: {
            validator = (0, yup_1.string)();
            break;
        }
        case graphql_js_1.GadgetFieldType.DateTime: {
            validator = (0, yup_1.date)();
            break;
        }
        case graphql_js_1.GadgetFieldType.Email: {
            validator = (0, yup_1.string)().email();
            break;
        }
        case graphql_js_1.GadgetFieldType.Url: {
            validator = (0, yup_1.string)().url();
            break;
        }
        case graphql_js_1.GadgetFieldType.Enum: {
            const config = field.configuration;
            const element = (0, yup_1.string)().oneOf(config.options.map((option) => option.name));
            if (config.allowMultiple) {
                validator = (0, yup_1.array)(element);
            }
            else {
                validator = element;
            }
            break;
        }
        case graphql_js_1.GadgetFieldType.File: {
            validator = fileInputValidator;
            break;
        }
        case graphql_js_1.GadgetFieldType.Number: {
            validator = (0, yup_1.number)();
            break;
        }
        case graphql_js_1.GadgetFieldType.Id: {
            validator = (0, yup_1.string)();
            break;
        }
        case graphql_js_1.GadgetFieldType.RecordState:
        case graphql_js_1.GadgetFieldType.Any:
        case graphql_js_1.GadgetFieldType.Json: {
            validator = (0, yup_1.mixed)();
            break;
        }
        case graphql_js_1.GadgetFieldType.Money: {
            validator = (0, yup_1.string)();
            break;
        }
        case graphql_js_1.GadgetFieldType.Object: {
            const config = field.configuration;
            validator = (0, exports.validationSchema)(config.fields);
            break;
        }
        case graphql_js_1.GadgetFieldType.RichText: {
            validator = richTextInputValidator;
            break;
        }
        case graphql_js_1.GadgetFieldType.RoleAssignments: {
            validator = (0, yup_1.array)((0, yup_1.string)());
            break;
        }
        case graphql_js_1.GadgetFieldType.Vector: {
            validator = (0, yup_1.array)((0, yup_1.number)());
            break;
        }
        case graphql_js_1.GadgetFieldType.BelongsTo:
        case graphql_js_1.GadgetFieldType.HasOne: {
            // TODO: implement relationship validations
            validator = (0, yup_1.object)();
            break;
        }
        case graphql_js_1.GadgetFieldType.HasManyThrough:
        case graphql_js_1.GadgetFieldType.HasMany: {
            // TODO: implement relationship validations
            validator = (0, yup_1.array)();
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
const validationSchema = (fields) => {
    const validators = {};
    for (const field of fields) {
        validators[field.apiIdentifier] = validatorForField(field);
    }
    return (0, yup_1.object)(validators);
};
exports.validationSchema = validationSchema;
//# sourceMappingURL=validationSchema.js.map