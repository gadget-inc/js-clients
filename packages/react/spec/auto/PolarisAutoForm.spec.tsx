import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import { act, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import type { ReactNode } from "react";
import React from "react";
import { PolarisAutoForm } from "../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoInput } from "../../src/auto/polaris/inputs/PolarisAutoInput.js";
import { PolarisAutoSubmit } from "../../src/auto/polaris/submit/PolarisAutoSubmit.js";
import { testApi as api } from "../apis.js";
import { MockClientProvider, mockUrqlClient } from "../testWrappers.js";
import { getGizmoModelMetadata } from "./support/gizmoModel.js";
import { getWidgetModelMetadata, getWidgetRecord } from "./support/widgetModel.js";

const PolarisMockedProviders = (props: { children: ReactNode }) => {
  return (
    <MockClientProvider api={api}>
      <AppProvider i18n={translations}>{props.children}</AppProvider>
    </MockClientProvider>
  );
};

describe("PolarisAutoForm", () => {
  describe("when used as a one liner", () => {
    describe("for widget create", () => {
      test("it renders the name input", async () => {
        const { getByLabelText } = render(<PolarisAutoForm action={api.widget.create} />, { wrapper: PolarisMockedProviders });
        loadMockWidgetCreateMetadata();
        expect(getByLabelText("Name")).toBeInTheDocument();
      });
    });

    test("it includes the record ID when submitting a form that updates a record", async () => {
      const user = userEvent.setup();

      const { getByRole, getByLabelText } = render(<PolarisAutoForm action={api.widget.update} exclude={["gizmos"]} findBy="1145" />, {
        wrapper: PolarisMockedProviders,
      });

      loadMockWidgetUpdateMetadata();

      const submitButton = getByRole("button");
      expect(submitButton).toHaveTextContent("Submit");

      await act(async () => {
        const nameElement = getByLabelText("Name");
        await user.clear(nameElement);
        await user.click(nameElement);
        await user.keyboard("updated test record");

        const inventoryCountElement = getByLabelText("Inventory count");
        await user.clear(inventoryCountElement);
        await user.click(inventoryCountElement);
        await user.keyboard("1234");

        await user.click(getByRole("button"));
      });

      const mutation = mockUrqlClient.executeMutation.mock.calls[0][0];
      const mutationName = mutation.query.definitions[0].name.value;
      const variables = mutation.variables.widget;
      const recordId = mutation.variables.id;

      expect(mutationName).toEqual("updateWidget");
      expect(variables.inventoryCount).toEqual(1234);
      expect(variables.name).toEqual("updated test record");
      expect(recordId).toEqual("1145");
    });
  });

  describe("when used in expanded form with children", () => {
    describe("for widget create", () => {
      test("it renders the name input", async () => {
        const { getByLabelText } = render(
          <PolarisAutoForm action={api.widget.create}>
            <PolarisAutoInput field="name" />
          </PolarisAutoForm>,
          { wrapper: PolarisMockedProviders }
        );
        loadMockWidgetCreateMetadata();
        expect(getByLabelText("Name")).toBeInTheDocument();
      });
    });

    describe("AutoSubmit", () => {
      test("it submits the form", async () => {
        const user = userEvent.setup();

        const { getByRole, getByLabelText } = render(
          <PolarisAutoForm action={api.widget.create}>
            <PolarisAutoInput field="name" />
            <PolarisAutoInput field="inventoryCount" />
            <PolarisAutoSubmit />
          </PolarisAutoForm>,
          { wrapper: PolarisMockedProviders }
        );

        loadMockWidgetCreateMetadata();

        const submitButton = getByRole("button");
        expect(submitButton).toHaveTextContent("Submit");

        await act(async () => {
          const nameElement = getByLabelText("Name");
          await user.click(nameElement);
          await user.keyboard("test record");

          const inventoryCountElement = getByLabelText("Inventory count");
          await user.click(inventoryCountElement);
          await user.keyboard("22");

          await user.click(getByRole("button"));
        });

        const mutation = mockUrqlClient.executeMutation.mock.calls[0][0];
        const mutationName = mutation.query.definitions[0].name.value;
        const variables = mutation.variables.widget;

        expect(mutationName).toEqual("createWidget");
        expect(variables.inventoryCount).toEqual(22);
        expect(variables.name).toEqual("test record");
      });

      test("you can pass a custom label", () => {
        const { getByRole } = render(
          <PolarisAutoForm action={api.widget.create}>
            <PolarisAutoInput field="name" />
            <PolarisAutoSubmit>Save</PolarisAutoSubmit>
          </PolarisAutoForm>,
          { wrapper: PolarisMockedProviders }
        );

        loadMockWidgetCreateMetadata();

        expect(getByRole("button")).toHaveTextContent("Save");
      });
    });
  });

  describe("dirty fields", () => {
    test("it should not include fields that are not dirty when submitting a form", async () => {
      const user = userEvent.setup();

      const { getByRole, getByLabelText } = render(<PolarisAutoForm action={api.gizmo.create} exclude={["widget"]} />, {
        wrapper: PolarisMockedProviders,
      });

      loadMockGizmoCreateMetadata();

      const submitButton = getByRole("button");
      expect(submitButton).toHaveTextContent("Submit");

      // Inside the "gizmo" model, there are two fields: "Name" and "Orientation", both are not required.
      // We first modify the "Name" field and submit the form to ensure that only the "Name" field is included in the mutation.

      await act(async () => {
        const nameElement = getByLabelText("Name");
        await user.clear(nameElement);
        await user.click(nameElement);
        await user.keyboard("updated test record");

        await user.click(getByRole("button"));
      });

      let mutation = mockUrqlClient.executeMutation.mock.calls[0][0];
      let mutationName = mutation.query.definitions[0].name.value;
      let variables = mutation.variables.gizmo;

      expect(mutationName).toEqual("createGizmo");
      expect(variables).toEqual({
        name: "updated test record",
      });

      // Now modify the other field and submit again to ensure that the other field is also included.

      await act(async () => {
        const nameElement = getByLabelText("Orientation");
        await user.clear(nameElement);
        await user.click(nameElement);
        await user.keyboard("updated another test record");

        await user.click(getByRole("button"));
      });

      mutation = mockUrqlClient.executeMutation.mock.calls[1][0];
      mutationName = mutation.query.definitions[0].name.value;
      variables = mutation.variables.gizmo;

      expect(mutationName).toEqual("createGizmo");
      expect(variables).toEqual({
        name: "updated test record",
        orientation: "updated another test record",
      });
    });

    test("it should not include fields that are not dirty when submitting a form that updates a record", async () => {
      const user = userEvent.setup();

      const { getByRole, getByLabelText } = render(<PolarisAutoForm action={api.widget.update} exclude={["gizmos"]} findBy="1145" />, {
        wrapper: PolarisMockedProviders,
      });

      loadMockWidgetUpdateMetadata();

      const submitButton = getByRole("button");
      expect(submitButton).toHaveTextContent("Submit");

      await act(async () => {
        const inventoryCountElement = getByLabelText("Inventory count");
        await user.clear(inventoryCountElement);
        await user.click(inventoryCountElement);
        // The fetched record has an inventory count of 42. We will update it to 1234.
        await user.keyboard("1234");

        await user.click(getByRole("button"));
      });

      const mutation = mockUrqlClient.executeMutation.mock.calls[0][0];
      const mutationName = mutation.query.definitions[0].name.value;
      const variables = mutation.variables.widget;
      const recordId = mutation.variables.id;

      expect(mutationName).toEqual("updateWidget");
      // Since we only modified the inventory count field, only that field should be included in the mutation.
      expect(variables).toEqual({
        inventoryCount: 1234,
      });
      expect(recordId).toEqual("1145");
    });

    test("it should still count as a dirty field when the field has typed something then cleared", async () => {
      const user = userEvent.setup();

      const { getByRole, getByLabelText } = render(<PolarisAutoForm action={api.gizmo.create} exclude={["widget"]} />, {
        wrapper: PolarisMockedProviders,
      });

      loadMockGizmoCreateMetadata();

      const submitButton = getByRole("button");
      expect(submitButton).toHaveTextContent("Submit");

      await act(async () => {
        const nameElement = getByLabelText("Name");
        await user.click(nameElement);
        await user.keyboard("updated test record");
        await user.clear(nameElement);

        await user.click(submitButton);
      });

      const mutation = mockUrqlClient.executeMutation.mock.calls[0][0];
      const mutationName = mutation.query.definitions[0].name.value;
      const variables = mutation.variables.gizmo;

      expect(mutationName).toEqual("createGizmo");
      expect(variables).toEqual({
        name: "",
      });
    });
  });

  describe("client-side validations", () => {
    test("it should not submit the form if the string field is invalid", async () => {
      const user = userEvent.setup();

      const { getByRole, getByLabelText } = render(<PolarisAutoForm action={api.widget.create} />, {
        wrapper: PolarisMockedProviders,
      });

      mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
        stale: false,
        hasNext: false,
        data: getWidgetModelMetadata(
          {
            name: "Create",
            apiIdentifier: "create",
            operatesWithRecordIdentity: false,
          },
          [
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
                    configuration: {
                      __typename: "GadgetGenericFieldConfig",
                      fieldType: "String",
                      validations: [
                        {
                          name: "Required",
                          specID: "gadget/validation/required",
                          __typename: "GadgetGenericFieldValidation",
                        },
                        {
                          name: "String length range",
                          specID: "gadget/validation/string-size",
                          __typename: "GadgetRangeFieldValidation",
                          min: 20,
                          max: 50,
                        },
                        {
                          name: "RegExp pattern",
                          specID: "gadget/validation/regexp",
                          __typename: "GadgetRegexFieldValidation",
                          pattern: "^[a-zA-Z ]+$",
                        },
                      ],
                    },
                  },
                ],
              },
              __typename: "GadgetObjectField",
            },
          ]
        ),
      });

      const submitButton = getByRole("button");
      expect(submitButton).toHaveTextContent("Submit");

      await act(async () => {
        await user.click(submitButton);
      });

      // Name is a required field. Since it is not filled.
      expect(mockUrqlClient.executeMutation.mock.calls.length).toBe(0);

      await act(async () => {
        const nameElement = getByLabelText("Name");
        await user.clear(nameElement);
        await user.click(nameElement);
        await user.keyboard("very short");

        await user.click(submitButton);
      });

      // Name has to be at least 20 characters long.
      expect(mockUrqlClient.executeMutation.mock.calls.length).toBe(0);

      await act(async () => {
        const nameElement = getByLabelText("Name");
        await user.clear(nameElement);
        await user.click(nameElement);
        await user.keyboard(`now make it super l${"o".repeat(50)}ng`);

        await user.click(submitButton);
      });

      // Name has to be at most 50 characters long.
      expect(mockUrqlClient.executeMutation.mock.calls.length).toBe(0);

      await act(async () => {
        const nameElement = getByLabelText("Name");
        await user.clear(nameElement);
        await user.click(nameElement);
        await user.keyboard("1".repeat(30));

        await user.click(submitButton);
      });

      // Name is within the range, but the regex pattern validation fails because it only allows alphabets.
      expect(mockUrqlClient.executeMutation.mock.calls.length).toBe(0);

      await act(async () => {
        const nameElement = getByLabelText("Name");
        await user.clear(nameElement);
        await user.click(nameElement);
        await user.keyboard(`lets make it valid now something long enough`);

        await user.click(submitButton);
      });

      const mutation = mockUrqlClient.executeMutation.mock.calls[0][0];
      const mutationName = mutation.query.definitions[0].name.value;
      const variables = mutation.variables.widget;

      expect(mutationName).toEqual("createWidget");
      expect(variables).toEqual({
        name: "lets make it valid now something long enough",
      });
    });

    test("it should not submit the form if the number field is invalid", async () => {
      const user = userEvent.setup();

      const { getByRole, getByLabelText } = render(<PolarisAutoForm action={api.widget.create} />, {
        wrapper: PolarisMockedProviders,
      });

      mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
        stale: false,
        hasNext: false,
        data: getWidgetModelMetadata(
          {
            name: "Create",
            apiIdentifier: "create",
            operatesWithRecordIdentity: false,
          },
          [
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
                    configuration: {
                      __typename: "GadgetGenericFieldConfig",
                      fieldType: "Number",
                      validations: [
                        {
                          name: "Required",
                          specID: "gadget/validation/required",
                          __typename: "GadgetGenericFieldValidation",
                        },
                        {
                          name: "Number range",
                          specID: "gadget/validation/number-range",
                          __typename: "GadgetRangeFieldValidation",
                          min: 5,
                          max: 10,
                        },
                      ],
                    },
                  },
                ],
              },
              __typename: "GadgetObjectField",
            },
          ]
        ),
      });

      const submitButton = getByRole("button");
      expect(submitButton).toHaveTextContent("Submit");

      await act(async () => {
        await user.click(submitButton);
      });

      // Name is a required field.
      expect(mockUrqlClient.executeMutation.mock.calls.length).toBe(0);

      await act(async () => {
        const inventoryCountElement = getByLabelText("Inventory count");
        await user.clear(inventoryCountElement);
        await user.click(inventoryCountElement);
        await user.keyboard("0");

        await user.click(submitButton);
      });

      // Inventory count has to be at least 5.
      expect(mockUrqlClient.executeMutation.mock.calls.length).toBe(0);

      await act(async () => {
        const inventoryCountElement = getByLabelText("Inventory count");
        await user.clear(inventoryCountElement);
        await user.click(inventoryCountElement);
        await user.keyboard("999");

        await user.click(submitButton);
      });

      // Inventory count has to be at most 10.
      expect(mockUrqlClient.executeMutation.mock.calls.length).toBe(0);

      await act(async () => {
        const inventoryCountElement = getByLabelText("Inventory count");
        await user.clear(inventoryCountElement);
        await user.click(inventoryCountElement);
        await user.keyboard("5");

        await user.click(submitButton);
      });

      const mutation = mockUrqlClient.executeMutation.mock.calls[0][0];
      const mutationName = mutation.query.definitions[0].name.value;
      const variables = mutation.variables.widget;

      expect(mutationName).toEqual("createWidget");
      expect(variables).toEqual({
        inventoryCount: 5,
      });
    });
  });
});

function loadMockGizmoCreateMetadata() {
  expect(mockUrqlClient.executeQuery.mock.calls[0][0].variables).toEqual({
    modelApiIdentifier: "gizmo",
    modelNamespace: null,
    action: "create",
  });

  mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
    stale: false,
    hasNext: false,
    data: getGizmoModelMetadata({
      name: "Create",
      apiIdentifier: "create",
      operatesWithRecordIdentity: false,
    }),
  });
}

function loadMockWidgetCreateMetadata() {
  expect(mockUrqlClient.executeQuery.mock.calls[0][0].variables).toEqual({
    modelApiIdentifier: "widget",
    modelNamespace: null,
    action: "create",
  });

  mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
    stale: false,
    hasNext: false,
    data: getWidgetModelMetadata({
      name: "Create",
      apiIdentifier: "create",
      operatesWithRecordIdentity: false,
    }),
  });
}

function loadMockWidgetUpdateMetadata() {
  expect(mockUrqlClient.executeQuery.mock.calls[0][0].variables).toEqual({
    modelApiIdentifier: "widget",
    modelNamespace: null,
    action: "update",
  });

  mockUrqlClient.executeQuery.pushResponse("widget", {
    stale: false,
    hasNext: false,
    data: getWidgetRecord({
      name: "Test Widget",
      inventoryCount: 42,
    }),
  });

  mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
    stale: false,
    hasNext: false,
    data: getWidgetModelMetadata({
      name: "Update",
      apiIdentifier: "update",
      operatesWithRecordIdentity: true,
    }),
  });
}
