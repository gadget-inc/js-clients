import { recordIdInputField } from "./shared.js";
import { apiTriggerOnly } from "./Triggers.js";

export const userModelInputFields = {
  name: "User",
  apiIdentifier: "user",
  fieldType: "Object",
  requiredArgumentForInput: false,
  configuration: {
    __typename: "GadgetObjectFieldConfig",
    fieldType: "Object",
    validations: [],
    name: null,
    fields: [
      {
        name: "Google image url",
        apiIdentifier: "googleImageUrl",
        fieldType: "URL",
        requiredArgumentForInput: false,
        sortable: true,
        filterable: true,
        __typename: "GadgetModelField",
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "URL",
          validations: [],
        },
      },
      {
        name: "Google profile",
        apiIdentifier: "googleProfileId",
        fieldType: "String",
        requiredArgumentForInput: false,
        sortable: true,
        filterable: true,
        __typename: "GadgetModelField",
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "String",
          validations: [],
        },
      },
      {
        name: "Password",
        apiIdentifier: "password",
        fieldType: "Password",
        requiredArgumentForInput: false,
        sortable: false,
        filterable: false,
        __typename: "GadgetModelField",
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "Password",
          validations: [],
        },
      },
      {
        name: "Roles",
        apiIdentifier: "roles",
        fieldType: "RoleAssignments",
        requiredArgumentForInput: false,
        sortable: false,
        filterable: true,
        __typename: "GadgetModelField",
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "RoleAssignments",
          validations: [],
        },
      },
      {
        name: "Email verified",
        apiIdentifier: "emailVerified",
        fieldType: "Boolean",
        requiredArgumentForInput: false,
        sortable: true,
        filterable: true,
        __typename: "GadgetModelField",
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "Boolean",
          validations: [],
        },
      },
      {
        name: "Email",
        apiIdentifier: "email",
        fieldType: "Email",
        requiredArgumentForInput: false,
        sortable: true,
        filterable: true,
        __typename: "GadgetModelField",
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "Email",
          validations: [],
        },
      },
      {
        name: "First name",
        apiIdentifier: "firstName",
        fieldType: "String",
        requiredArgumentForInput: false,
        sortable: true,
        filterable: true,
        __typename: "GadgetModelField",
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "String",
          validations: [],
        },
      },
      {
        name: "Last signed in",
        apiIdentifier: "lastSignedIn",
        fieldType: "DateTime",
        requiredArgumentForInput: false,
        sortable: true,
        filterable: true,
        __typename: "GadgetModelField",
        configuration: {
          __typename: "GadgetDateTimeConfig",
          fieldType: "DateTime",
          validations: [],
        },
      },
      {
        name: "Last name",
        apiIdentifier: "lastName",
        fieldType: "String",
        requiredArgumentForInput: false,
        sortable: true,
        filterable: true,
        __typename: "GadgetModelField",
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "String",
          validations: [],
        },
      },
    ],
  },
  __typename: "GadgetObjectField",
};

export const getUserModelMetadata = (
  action: { name: string; apiIdentifier: string; operatesWithRecordIdentity: boolean },
  inputFields = [userModelInputFields] as any[]
) => {
  return {
    gadgetMeta: {
      modelAndRelatedModels: [
        {
          name: "User",
          apiIdentifier: "user",
          fields: inputFields,
          __typename: "GadgetModel",
        },
      ],
      model: {
        name: "User",
        apiIdentifier: "user",
        action: {
          ...action,
          inputFields: action.operatesWithRecordIdentity ? [recordIdInputField, ...inputFields] : inputFields,
          triggers: apiTriggerOnly,
          __typename: "GadgetAction",
        },
        __typename: "GadgetModel",
      },
      __typename: "GadgetApplicationMeta",
    },
  };
};

export const getUserRecord = (overrides?: { id?: string }) => {
  const id = overrides?.id ?? "1";

  return {
    user: {
      __typename: "User",
      id,
      createdAt: "2024-07-05T13:54:17.571Z",
      email: "example@email.com",
      emailVerified: false,
      firstName: null,
      googleImageUrl: "https://example.com",
      googleProfileId: "example value for googleProfileId",
      lastName: null,
      lastSignedIn: "2024-07-05T13:54:17.499Z",
      roles: [
        {
          key: "signed-in",
          name: "signed-in",
          __typename: "Role",
        },
      ],
      updatedAt: "2024-07-05T13:54:17.571Z",
    },
    gadgetMeta: {
      hydrations: {
        updatedAt: "DateTime",
        createdAt: "DateTime",
        lastSignedIn: "DateTime",
      },
      __typename: "GadgetApplicationMeta",
    },
  };
};
