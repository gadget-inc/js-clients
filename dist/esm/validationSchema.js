import { MixedSchema, NumberSchema, StringSchema, array, boolean, date, mixed, number, object, string } from "yup";
import { fileSizeValidationErrorMessage } from "./auto/hooks/useFileInputController.js";
import { GadgetFieldType } from "./internal/gql/graphql.js";
const validatorForField = (field, pathsToValidate = [], currentFieldPath = "") => {
    let validator;
    const path = currentFieldPath ? `${currentFieldPath}.${field.apiIdentifier}` : field.apiIdentifier;
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
            if (config.allowOther) {
                validator = config.allowMultiple ? array(string()) : string();
            }
            else {
                const element = string().oneOf(config.options.map((option) => option.name));
                validator = config.allowMultiple ? array(element) : element;
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
        case GadgetFieldType.Json: {
            validator = mixed().test("is-valid-json", function (value) {
                if (typeof value == "undefined")
                    return true;
                const { path, createError } = this;
                if (isFailedJSONParse(value)) {
                    return createError({ path, message: value.error.message });
                }
                return true;
            });
            break;
        }
        case GadgetFieldType.RecordState:
        case GadgetFieldType.Any: {
            validator = mixed();
            break;
        }
        case GadgetFieldType.Money: {
            validator = string();
            break;
        }
        case GadgetFieldType.Object: {
            const config = field.configuration;
            validator = validationSchema(config.fields, pathsToValidate, path);
            break;
        }
        case GadgetFieldType.RichText: {
            validator = object({});
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
            const childValidators = childValidatorsForField(path, field, pathsToValidate);
            validator = object(childValidators);
            break;
        }
        case GadgetFieldType.HasManyThrough:
        case GadgetFieldType.HasMany: {
            const childValidators = childValidatorsForField(path, field, pathsToValidate);
            validator = array(object(childValidators));
            break;
        }
        case GadgetFieldType.Array: {
            validator = array();
            break;
        }
        default: {
            throw new Error(`unknown field type ${field.fieldType} for validator generation`);
        }
    }
    validator = applyValidationsToInputField(field, validator, pathsToValidate.includes(path));
    return validator;
};
const childValidatorsForField = (path, field, pathsToValidate) => {
    const childPaths = pathsToValidate.filter((childPath) => childPath.startsWith(`${path}.`));
    const childValidators = {};
    const childFields = field.configuration && "relatedModel" in field.configuration && field.configuration.relatedModel?.fields;
    if (childFields) {
        for (const childPath of childPaths) {
            const childApiIdentifier = childPath.replace(`${path}.`, "");
            const childField = childFields.find((field) => field.apiIdentifier === childApiIdentifier);
            if (childField) {
                childValidators[childApiIdentifier] = validatorForField(childField, pathsToValidate, childPath);
            }
        }
    }
    return childValidators;
};
const applyValidationsToInputField = (field, validator, pathRequiresValidation) => {
    if (field.requiredArgumentForInput && pathRequiresValidation) {
        if (field.fieldType === GadgetFieldType.RichText) {
            validator = object({ markdown: string().required() });
        }
        validator = validator.required(`${field.name} is required`);
    }
    else {
        validator = validator.nullable().default(null);
    }
    if (!pathRequiresValidation) {
        return validator;
    }
    for (const validation of field.configuration.validations) {
        switch (validation?.__typename) {
            case "GadgetRangeFieldValidation": {
                const { min, max } = validation;
                if (validator instanceof StringSchema || validator instanceof NumberSchema) {
                    if (min)
                        validator = validator.min(min);
                    if (max)
                        validator = validator.max(max);
                }
                else if (field.fieldType === GadgetFieldType.File && validator instanceof MixedSchema) {
                    validator = validator.test("is-valid-file-size", function (value) {
                        const { path, createError } = this;
                        if (isAutoFileFieldValue(value) && value.$invalidFileSize) {
                            return createError({
                                path,
                                message: fileSizeValidationErrorMessage(validation, value.$invalidFileSize),
                            });
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
export const RequiredValidationSpecId = "gadget/validation/required";
const colorRegex = new RegExp(/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/);
const strongPasswordRegex = new RegExp("^(?=.*\\d)(?=.*[!@#$%^&*\\-=_+\\[\\]{}|;:'\",.<>/?])(.{8,})$");
export const isFailedJSONParse = (value) => {
    return value && typeof value == "object" && "$failedParse" in value;
};
/**
 * Build a Yup validation schema given some fields metadata for validating that a data object conforms to the schema at runtime
 */
export const validationSchema = (fields, pathsToValidate = [], currentPath = "") => {
    const validators = {};
    for (const field of fields) {
        validators[field.apiIdentifier] = validatorForField(field, pathsToValidate, currentPath);
    }
    const validator = object(validators);
    return validator;
};
export const isAutoFileFieldValue = (value) => {
    return typeof value === "object" && value !== null && "mimeType" in value && "fileName" in value;
};
//# sourceMappingURL=validationSchema.js.map