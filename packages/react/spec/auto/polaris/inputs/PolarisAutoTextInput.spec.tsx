import { jest } from "@jest/globals";
import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json" with { type: "json" };
import type { RenderResult } from "@testing-library/react";
import { act, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import type { ReactNode } from "react";
import React from "react";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoNumberInput } from "../../../../src/auto/polaris/inputs/PolarisAutoNumberInput.js";
import { PolarisAutoTextInput } from "../../../../src/auto/polaris/inputs/PolarisAutoTextInput.js";
import { testApi as api } from "../../../apis.js";
import { MockClientProvider, mockUrqlClient } from "../../../testWrappers.js";
import { MockForm } from "../../MockForm.js";
import { apiTriggerOnly } from "../../support/Triggers.js";

describe("PolarisAutoTextInput", () => {
  let result: RenderResult;

  describe("for create", () => {
    const getCreateWrapper = () => ({
      wrapper: MockForm({
        submit: jest.fn<any>(),
        metadata: metadata as any,
      }),
    });

    test("it renders required inputs with the correct labels", async () => {
      result = render(<PolarisAutoTextInput field="name" />, getCreateWrapper());
      const fieldNameLabel = result.queryByText("Name");
      expect(fieldNameLabel).toBeInTheDocument();
      expect(fieldNameLabel!.parentNode).toHaveClass("Polaris-Label__RequiredIndicator");
      expect(result.queryByPlaceholderText("Enter text")).toBeInTheDocument();
    });

    test("it renders custom placeholders", async () => {
      result = render(<PolarisAutoTextInput field="name" placeholder="CUSTOM" />, getCreateWrapper());
      expect(result.queryByPlaceholderText("CUSTOM")).toBeInTheDocument();
    });

    test("it renders non-required inputs with the correct placeholder label", async () => {
      result = render(<PolarisAutoTextInput field="color" />, getCreateWrapper());
      const fieldNameLabel = result.queryByText("Color");
      expect(fieldNameLabel).toBeInTheDocument();
      expect(fieldNameLabel!.parentNode).not.toHaveClass("Polaris-Label__RequiredIndicator");
      expect(result.queryByPlaceholderText("Enter color")).toBeInTheDocument();
    });

    test("it renders email inputs with the correct placeholder label", async () => {
      result = render(<PolarisAutoTextInput field="email" />, getCreateWrapper());
      const fieldNameLabel = result.queryByText("Email");
      expect(fieldNameLabel).toBeInTheDocument();
      expect(result.queryByPlaceholderText("example@email.com")).toBeInTheDocument();
    });

    test("it renders url inputs with the correct placeholder label", async () => {
      result = render(<PolarisAutoTextInput field="url" />, getCreateWrapper());
      const fieldNameLabel = result.queryByText("Url");
      expect(fieldNameLabel).toBeInTheDocument();
      expect(result.queryByPlaceholderText("example.com")).toBeInTheDocument();
    });

    test("it renders password inputs with the correct placeholder label", async () => {
      result = render(<PolarisAutoTextInput field="password" />, getCreateWrapper());
      const fieldNameLabel = result.queryByText("password");
      expect(fieldNameLabel).toBeInTheDocument();
      expect(result.queryByPlaceholderText("Value")).toBeInTheDocument();
    });

    test("it renders encryptedString inputs with the correct placeholder label", async () => {
      result = render(<PolarisAutoTextInput field="secretKey" />, getCreateWrapper());
      const fieldNameLabel = result.queryByText("Secret key");
      expect(fieldNameLabel).toBeInTheDocument();
      expect(result.queryByPlaceholderText("Enter text")).toBeInTheDocument();
    });
  });

  describe("validation errors", () => {
    describe("client side validation errors", () => {
      const getCreateWrapper = () => ({
        wrapper: MockForm({
          submit: jest.fn<any>(),
          resolver: () => {
            return {
              values: {},
              errors: {
                "widget.name": {
                  type: "required",
                  message: "This is required.",
                },
              },
            };
          },
          metadata: metadata as any,
        }),
      });

      beforeEach(async () => {
        const user = userEvent.setup();
        result = render(<PolarisAutoTextInput field="name" />, getCreateWrapper());
        await act(async () => {
          await user.click(screen.getByRole("button"));
        });
      });

      test("it renders client side validation messages", async () => {
        expect(screen.queryByText("This is required.")).toBeInTheDocument();
      });

      test("it renders polaris inline errors", async () => {
        expect(result.container.getElementsByClassName("Polaris-InlineError")).toHaveLength(1);
      });
    });
  });

  describe("for loading data", () => {
    const WrapperWithLoadedData = (props: { children: ReactNode }) => (
      <MockClientProvider api={api}>
        <AppProvider i18n={translations}>{props.children}</AppProvider>
      </MockClientProvider>
    );

    test("it renders input values with data from the API response", async () => {
      result = render(<PolarisAutoForm action={api.widget.update} findBy="42" />, { wrapper: WrapperWithLoadedData });

      await act(async () => {
        await mockUrqlClient.executeQuery.waitForSubject("ModelActionMetadata");
        const updateMetadata = { ...metadata, action: { ...metadata.action, apiIdentifier: "update", operatesWithRecordIdentity: true } };
        mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
          stale: false,
          hasNext: false,
          data: {
            gadgetMeta: {
              modelAndRelatedModels: [
                {
                  name: "Widget",
                  apiIdentifier: "widget",
                  fields: updateMetadata.action.inputFields,
                  __typename: "GadgetModel",
                },
              ],
              model: updateMetadata,
              __typename: "GadgetApplicationMeta",
            },
          },
        });
      });

      await act(async () => {
        await mockUrqlClient.executeQuery.waitForSubject("widget");

        mockUrqlClient.executeQuery.pushResponse("widget", {
          stale: false,
          hasNext: false,
          data: {
            widget: {
              __typename: "Widget",
              id: "42",
              createdAt: "2024-06-24T18:55:29.621Z",
              updatedAt: "2024-06-24T18:55:29.621Z",
      
              name: "name_RecordValue",
              inventoryCount: 999,
              color: "color_RecordValue",
              secretKey: "secretKey_RecordValue",
              password: "password_RecordValue",
              email: "email_RecordValue",
              url: "url_RecordValue",
            },
            gadgetMeta: {
              hydrations: {
                updatedAt: "DateTime",
                startsAt: "DateTime",
                birthday: "DateTime",
                createdAt: "DateTime",
              },
              __typename: "GadgetApplicationMeta",
            },
          },
        });
      });

      expect(result.queryByDisplayValue("name_RecordValue")).toBeInTheDocument();
      expect(result.queryByDisplayValue(999)).toBeInTheDocument();
      expect(result.queryByDisplayValue("color_RecordValue")).toBeInTheDocument();
      expect(result.queryByDisplayValue("secretKey_RecordValue")).toBeInTheDocument();
      expect(result.queryByDisplayValue("password_RecordValue")).toBeInTheDocument();
      expect(result.queryByDisplayValue("email_RecordValue")).toBeInTheDocument();
      expect(result.queryByDisplayValue("url_RecordValue")).toBeInTheDocument();
    });
  });

  describe("number config with decimals", () => {
    const getCreateWrapper = (decimals?: number) => ({
      wrapper: MockForm({
        submit: jest.fn<any>(),
        metadata: {
          name: "Widget",
          apiIdentifier: "widget",
          defaultRecord: {},
          action: {
            name: "Create",
            apiIdentifier: "create",
            operatesWithRecordIdentity: false,
            isDeleteAction: false,
            isUpsertMetaAction: false,
            triggers: apiTriggerOnly,
            inputFields: [
              {
                name: "Widget",
                apiIdentifier: "widget",
                fieldType: "Object",
                requiredArgumentForInput: false,
                configuration: {
                  __typename: "GadgetObjectFieldConfig",
                  fieldType: "Object",
                  name: null,
                  validations: [],
                  fields: [
                    {
                      name: "Inventory count",
                      apiIdentifier: "inventoryCount",
                      fieldType: "Number",
                      requiredArgumentForInput: true,
                      sortable: true,
                      filterable: true,
                      __typename: "GadgetModelField",
                      configuration: {
                        __typename: "GadgetNumberConfig",
                        fieldType: "Number",
                        validations: [],
                        decimals,
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
        } as any,
      }),
    });

    test("it renders number inputs with any step value when no decimals are set", async () => {
      result = render(<PolarisAutoNumberInput field="inventoryCount" />, getCreateWrapper());
      const field = result.container.querySelector(`input[name="widget.inventoryCount"]`);
      expect(field).toHaveAttribute("step", "1");
    });

    test("it renders number inputs with a step value when decimals are set", async () => {
      result = render(<PolarisAutoNumberInput field="inventoryCount" />, getCreateWrapper(2));
      const field = result.container.querySelector(`input[name="widget.inventoryCount"]`);
      expect(field).toHaveAttribute("step", "0.01");
    });
  });
});

const metadata = {
  name: "Widget",
  apiIdentifier: "widget",
  defaultRecord: {},
  action: {
    name: "Create",
    apiIdentifier: "create",
    operatesWithRecordIdentity: false,
    isDeleteAction: false,
    isUpsertMetaAction: false,
    triggers: apiTriggerOnly,
    inputFields: [
      {
        name: "Widget",
        apiIdentifier: "widget",
        fieldType: "Object",
        requiredArgumentForInput: false,
        configuration: {
          __typename: "GadgetObjectFieldConfig",
          fieldType: "Object",
          name: null,
          validations: [],
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
                validations: [],
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
                validations: [],
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
                validations: [],
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
                validations: [],
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
                validations: [],
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

const mockFindBy = async () => {

};
