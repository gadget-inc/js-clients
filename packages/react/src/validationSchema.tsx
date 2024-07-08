import type { ISchema } from "yup";
import { NumberSchema, StringSchema, array, boolean, date, mixed, number, object, string } from "yup";
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
        const rangeValidation = validation as GadgetRangeFieldValidation;
        if (validator instanceof StringSchema || validator instanceof NumberSchema) {
          if (rangeValidation.min) {
            validator = validator.min(rangeValidation.min);
          }
          if (rangeValidation.max) {
            validator = validator.max(rangeValidation.max);
          }
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
        const { allowAnimatedImages } = validation as GadgetOnlyImageFileFieldValidation;
        // TODO: implement image file validation, with option to allow animations
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

const colorRegex = new RegExp(/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/);
const strongPasswordRegex = new RegExp("^(?=.*\\d)(?=.*[!@#$%^&*\\-=_+\\[\\]{}|;:'\",.<>/?])(.{8,})$");

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
