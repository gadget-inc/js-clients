import type { ISchema } from "yup";
import { MixedSchema, NumberSchema, StringSchema, array, boolean, date, mixed, number, object, string } from "yup";
import { fileSizeValidationErrorMessage } from "./auto/hooks/useFileInputController.js";
import type {
  GadgetEnumConfig,
  GadgetGenericFieldValidation,
  GadgetObjectFieldConfig,
  GadgetOnlyImageFileFieldValidation,
  GadgetRangeFieldValidation,
  GadgetRegexFieldValidation,
} from "./internal/gql/graphql.js";
import { GadgetFieldType } from "./internal/gql/graphql.js";
import type { FieldMetadata } from "./metadata.js";

const richTextInputValidator = object({
  markdown: string().required(),
});

const validatorForField = (field: FieldMetadata) => {
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
      const config = field.configuration as GadgetEnumConfig;
      const element = string().oneOf(config.options.map((option) => option.name));
      if (config.allowMultiple) {
        validator = array(element);
      } else {
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
    case GadgetFieldType.Json: {
      validator = mixed().test("is-valid-json", function (value) {
        if (typeof value == "undefined") return true;
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
      const config = field.configuration as GadgetObjectFieldConfig;
      validator = validationSchema(config.fields as any);
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
  } else {
    validator = (validator.nullable() as any).default(null);
  }

  for (const validation of field.configuration.validations) {
    switch (validation?.__typename) {
      case "GadgetRangeFieldValidation": {
        const { min, max } = validation as GadgetRangeFieldValidation;
        if (validator instanceof StringSchema || validator instanceof NumberSchema) {
          if (min) validator = validator.min(min);
          if (max) validator = validator.max(max);
        } else if (field.fieldType === GadgetFieldType.File && validator instanceof MixedSchema) {
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
        const regexValidation = validation as GadgetRegexFieldValidation;
        if (regexValidation.pattern && validator instanceof StringSchema) {
          validator = validator.matches(new RegExp(regexValidation.pattern));
        }
        break;
      }

      case "GadgetOnlyImageFileFieldValidation": {
        if (validator instanceof MixedSchema) {
          validator = validator.test("is-valid-image-file", function (value) {
            const { allowAnimatedImages } = validation as GadgetOnlyImageFileFieldValidation;

            if (typeof value == "undefined") return true;
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
        const { specID } = validation as GadgetGenericFieldValidation;
        validator = addGadgetGenericFieldValidation(validator, specID);
        break;
      }
    }
  }

  return validator;
};

const addGadgetGenericFieldValidation = (validator: any, validationSpecId: string) => {
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

export interface FailedJSONParse {
  $failedParse: true;
  error: Error;
  raw: string;
}
export const isFailedJSONParse = (value: any): value is FailedJSONParse => {
  return value && typeof value == "object" && "$failedParse" in value;
};

/**
 * Build a Yup validation schema given some fields metadata for validating that a data object conforms to the schema at runtime
 */
export const validationSchema = (fields: FieldMetadata[]) => {
  const validators: Record<string, ISchema<any>> = {};
  for (const field of fields) {
    validators[field.apiIdentifier] = validatorForField(field);
  }
  return object(validators);
};

export interface AutoFileFieldValue {
  fileName: string;
  mimeType: string;
  url?: string;
  directUploadToken?: string;
  $uploading?: boolean;
  $invalidFileSize?: number;
}

export const isAutoFileFieldValue = (value: any): value is AutoFileFieldValue => {
  return typeof value === "object" && value !== null && "mimeType" in value && "fileName" in value;
};
