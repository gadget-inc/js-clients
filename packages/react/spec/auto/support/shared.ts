import type { GadgetGenericFieldConfig, GadgetObjectField } from "../../../src/internal/gql/graphql.js";

export const recordIdInputField = {
  name: "Id",
  apiIdentifier: "id",
  fieldType: "ID",
  requiredArgumentForInput: true,
  configuration: {
    __typename: "GadgetGenericFieldConfig",
    fieldType: "ID",
    validations: [],
  } as GadgetGenericFieldConfig,
  __typename: "GadgetObjectField",
} as GadgetObjectField;
