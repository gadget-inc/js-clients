import { jest } from "@jest/globals";
import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import React from "react";
import { PolarisAutoEncryptedStringInput } from "../../../src/auto/polaris/inputs/PolarisAutoEncryptedStringInput.js";
import { GadgetFieldType } from "../../../src/internal/gql/graphql.js";
import { MockForm } from "../MockForm.js";
import { apiTriggerOnly } from "../support/Triggers.js";

describe("PolarisEncryptedStringInput", () => {
  let result: RenderResult;

  const getCreateWrapper = () => ({
    wrapper: MockForm({
      submit: jest.fn<any>(),
      metadata: metadata as any,
    }),
  });

  test("it renders the show/hide toggle button", async () => {
    result = render(<PolarisAutoEncryptedStringInput field="secretKey" />, getCreateWrapper());
    const fieldNameLabel = result.queryByText("Secret key");
    expect(fieldNameLabel).toBeInTheDocument();

    expect(result.queryByRole("secretKeyToggleShowHideButton")).toBeInTheDocument();
  });

  test("it can override the appearance of the show/hide toggle button", async () => {
    result = render(<PolarisAutoEncryptedStringInput field="secretKey" suffix={"override here"} />, getCreateWrapper());
    const fieldNameLabel = result.queryByText("Secret key");
    expect(fieldNameLabel).toBeInTheDocument();

    expect(result.queryByRole("secretKeyToggleShowHideButton")).toBeNull();
  });
});

const metadata = {
  name: "Widget",
  apiIdentifier: "widget",
  action: {
    name: "Create",
    apiIdentifier: "create",
    triggers: apiTriggerOnly,
    inputFields: [
      {
        name: "Widget",
        apiIdentifier: "widget",
        fieldType: GadgetFieldType.Object,
        requiredArgumentForInput: false,
        configuration: {
          __typename: "GadgetObjectFieldConfig",
          fieldType: GadgetFieldType.Object,
          name: null,
          fields: [
            {
              name: "Name",
              apiIdentifier: "name",
              fieldType: "String",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "String",
              },
            },
            {
              name: "Inventory count",
              apiIdentifier: "inventoryCount",
              fieldType: "Number",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "Number",
              },
            },
            {
              name: "Color",
              apiIdentifier: "color",
              fieldType: "Color",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "Color",
              },
            },
            {
              name: "Secret key",
              apiIdentifier: "secretKey",
              fieldType: "EncryptedString",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: false,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "EncryptedString",
              },
            },
            {
              name: "password",
              apiIdentifier: "password",
              fieldType: "Password",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: false,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "Password",
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
              },
            },
            {
              name: "Url",
              apiIdentifier: "url",
              fieldType: "URL",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "URL",
              },
            },
          ],
        },
        __typename: "GadgetObjectField",
      },
    ],
    __typename: "GadgetAction",
  },
  __typename: "GadgetModel",
};
