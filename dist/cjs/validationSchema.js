"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAutoFileFieldValue = exports.validationSchema = exports.RequiredValidationSpecId = void 0;
const yup_1 = require("yup");
const useFileInputController_js_1 = require("./auto/hooks/useFileInputController.js");
const graphql_js_1 = require("./internal/gql/graphql.js");
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
            if (config.allowOther) {
                validator = config.allowMultiple ? (0, yup_1.array)((0, yup_1.string)()) : (0, yup_1.string)();
            }
            else {
                const element = (0, yup_1.string)().oneOf(config.options.map((option) => option.name));
                validator = config.allowMultiple ? (0, yup_1.array)(element) : element;
            }
            break;
        }
        case graphql_js_1.GadgetFieldType.File: {
            validator = (0, yup_1.mixed)().test("is-uploading", function (value) {
                const { path, createError } = this;
                if ((0, exports.isAutoFileFieldValue)(value) && value.$uploading) {
                    return createError({ path, message: "file is still uploading" });
                }
                return true;
            });
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
    for (const validation of field.configuration.validations) {
        switch (validation?.__typename) {
            case "GadgetRangeFieldValidation": {
                const { min, max } = validation;
                if (validator instanceof yup_1.StringSchema || validator instanceof yup_1.NumberSchema) {
                    if (min)
                        validator = validator.min(min);
                    if (max)
                        validator = validator.max(max);
                }
                else if (field.fieldType === graphql_js_1.GadgetFieldType.File && validator instanceof yup_1.MixedSchema) {
                    validator = validator.test("is-valid-file-size", function (value) {
                        const { path, createError } = this;
                        if ((0, exports.isAutoFileFieldValue)(value) && value.$invalidFileSize) {
                            return createError({
                                path,
                                message: (0, useFileInputController_js_1.fileSizeValidationErrorMessage)(validation, value.$invalidFileSize),
                            });
                        }
                        return true;
                    });
                }
                break;
            }
            case "GadgetRegexFieldValidation": {
                const regexValidation = validation;
                if (regexValidation.pattern && validator instanceof yup_1.StringSchema) {
                    validator = validator.matches(new RegExp(regexValidation.pattern));
                }
                break;
            }
            case "GadgetOnlyImageFileFieldValidation": {
                if (validator instanceof yup_1.MixedSchema) {
                    validator = validator.test("is-valid-image-file", function (value) {
                        const { allowAnimatedImages } = validation;
                        if (typeof value == "undefined")
                            return true;
                        const { path, createError } = this;
                        if ((0, exports.isAutoFileFieldValue)(value)) {
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
exports.RequiredValidationSpecId = "gadget/validation/required";
const colorRegex = new RegExp(/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/);
const strongPasswordRegex = new RegExp("^(?=.*\\d)(?=.*[!@#$%^&*\\-=_+\\[\\]{}|;:'\",.<>/?])(.{8,})$");
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
const isAutoFileFieldValue = (value) => {
    return typeof value === "object" && value !== null && "mimeType" in value && "fileName" in value;
};
exports.isAutoFileFieldValue = isAutoFileFieldValue;
//# sourceMappingURL=validationSchema.js.map