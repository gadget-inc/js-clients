import { filesize } from "filesize";
import { MixedSchema, NumberSchema, StringSchema, array, boolean, date, mixed, number, object, string } from "yup";
import { GadgetFieldType } from "./internal/gql/graphql.js";
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
            validator = mixed().test("is-uploading", function (value) {
                const { path, createError } = this;
                if (isAutoFileFieldValue(value) && value.$uploading) {
                    return createError({ path, message: "file is still uploading" });
                }
                return true;
            });
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
    for (const validation of field.configuration.validations) {
        switch (validation?.__typename) {
            case "GadgetRangeFieldValidation": {
                const { min, max } = validation;
                if (validator instanceof StringSchema || validator instanceof NumberSchema) {
                    if (min) {
                        validator = validator.min(min);
                    }
                    if (max) {
                        validator = validator.max(max);
                    }
                }
                else if (field.fieldType === GadgetFieldType.File && validator instanceof MixedSchema) {
                    validator = validator.test("is-valid-file-size", function (value) {
                        const { path, createError } = this;
                        if (isAutoFileFieldValue(value) && value.$invalidFileSize) {
                            if (min) {
                                if (max) {
                                    return createError({
                                        path,
                                        message: `must be a file between ${filesize(min)} and ${filesize(max)} big, and this file's size is ${filesize(value.$invalidFileSize)}.`,
                                    });
                                }
                                else {
                                    return createError({
                                        path,
                                        message: `must be a file larger than than ${filesize(min)}, and this file's size is ${filesize(value.$invalidFileSize)}.`,
                                    });
                                }
                            }
                            else {
                                if (max) {
                                    return createError({
                                        path,
                                        message: `must be a file smaller than ${filesize(max)}, and this file's size is ${filesize(value.$invalidFileSize)}.`,
                                    });
                                }
                            }
                        }
                        return true;
                    });
                }
                break;
            }
            case "GadgetRegexFieldValidation": {
                const regexValidation = validation;
                if (regexValidation.pattern && validator instanceof StringSchema) {
                    validator = validator.matches(new RegExp(regexValidation.pattern));
                }
                break;
            }
            case "GadgetOnlyImageFileFieldValidation": {
                if (validator instanceof MixedSchema) {
                    validator = validator.test("is-valid-image-file", function (value) {
                        const { allowAnimatedImages } = validation;
                        if (typeof value == "undefined")
                            return true;
                        const { path, createError } = this;
                        if (isAutoFileFieldValue(value)) {
                            if (!value.mimeType.startsWith("image/")) {
                                return createError({ path, message: `must be a valid image file type; file type was detected as "${value.mimeType}"` });
                            }
                            if (!allowAnimatedImages && value.mimeType === "image/gif") {
                                return createError({ path, message: "must not be an animated image file" });
                            }
                        }
                        return true;
                    });
                }
                break;
            }
            case "GadgetGenericFieldValidation": {
                const { specID } = validation;
                validator = addGadgetGenericFieldValidation(validator, specID);
                break;
            }
        }
    }
    return validator;
};
const addGadgetGenericFieldValidation = (validator, validationSpecId) => {
    switch (validationSpecId) {
        case ColorValidationSpecId: {
            return validator.matches(colorRegex, "Must be a color");
        }
        case EmailValidationSpecId: {
            return validator.email();
        }
        case StrongPasswordValidationSpecId: {
            return validator.matches(strongPasswordRegex, "Must contain at least 8 characters, 1 number and 1 special character");
        }
        case UrlValidationSpecId: {
            return validator.url();
        }
        default: {
            return validator;
        }
    }
};
const EmailValidationSpecId = "gadget/validation/email-address";
const ColorValidationSpecId = "gadget/validation/color";
const StrongPasswordValidationSpecId = "gadget/validation/password";
const UrlValidationSpecId = "gadget/validation/url";
const colorRegex = new RegExp(/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/);
const strongPasswordRegex = new RegExp("^(?=.*\\d)(?=.*[!@#$%^&*\\-=_+\\[\\]{}|;:'\",.<>/?])(.{8,})$");
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
export const isAutoFileFieldValue = (value) => {
    return typeof value === "object" && value !== null && "mimeType" in value && "fileName" in value;
};
//# sourceMappingURL=validationSchema.js.map