import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import type { RenderResult } from "@testing-library/react";
import { act, render } from "@testing-library/react";
import type { UserEvent } from "@testing-library/user-event";
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

      test("it throws an error if a create action is mixed with a findBy prop", async () => {
        expect(() => {
          // @ts-expect-error: mixing a create and a findBy should throw a type error too
          render(<PolarisAutoForm action={api.widget.create} findBy="1234" />, { wrapper: PolarisMockedProviders });
          loadMockWidgetCreateMetadata();
        }).toThrow("The 'findBy' prop is only allowed for update actions.");
      });

      describe("for a required field", () => {
        test("it throw an error if you exclude the field", async () => {
          expect(() => {
            render(<PolarisAutoForm action={api.widget.create} exclude={["inventoryCount"]} />, { wrapper: PolarisMockedProviders });
            loadMockWidgetCreateMetadata();
          }).toThrow("The field inventoryCount is required and cannot be excluded.");
        });

        test("if you include fields, you must include the required fields", async () => {
          expect(() => {
            render(<PolarisAutoForm action={api.widget.create} include={["name"]} />, { wrapper: PolarisMockedProviders });
            loadMockWidgetCreateMetadata();
          }).toThrow("The following required fields are missing from the include list: inventoryCount");
        });
      });
    });

    test("it includes the record ID when submitting a form that updates a record", async () => {
      const user = userEvent.setup();

      const result = render(<PolarisAutoForm action={api.widget.update} exclude={["gizmos"]} findBy="1145" />, {
        wrapper: PolarisMockedProviders,
      });
      const { getByLabelText, queryAllByText } = result;

      loadMockWidgetUpdateMetadata();

      const submitButton = queryAllByText("Submit")[0];
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

        await user.click(submitButton);
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
    test("it should include fields that are in the 'include' prop when submitting a create form", async () => {
      const user = userEvent.setup();

      const { getByRole, getByLabelText } = render(<PolarisAutoForm action={api.gizmo.create} include={["name", "orientation"]} />, {
        wrapper: PolarisMockedProviders,
      });

      loadMockGizmoCreateMetadata();

      await act(async () => {
        const nameElement = getByLabelText("Name");
        await user.clear(nameElement);
        await user.click(nameElement);
        await user.keyboard("updated test record");

        await user.click(getByRole("button"));
      });

      const mutation = mockUrqlClient.executeMutation.mock.calls[0][0];
      const mutationName = mutation.query.definitions[0].name.value;
      const variables = mutation.variables.gizmo;

      expect(mutationName).toEqual("createGizmo");
      expect(variables).toEqual({
        name: "updated test record",
        orientation: null,
      });
    });

    test("it should include fields that are not dirty when submitting a create form", async () => {
      const user = userEvent.setup();

      const { getByRole, getByLabelText } = render(<PolarisAutoForm action={api.gizmo.create} exclude={["widget"]} />, {
        wrapper: PolarisMockedProviders,
      });

      loadMockGizmoCreateMetadata();

      // Inside the "gizmo" model, there are two fields: "Name" and "Orientation", both are not required.
      // We first modify the "Name" field and submit the form to ensure that both the "Name" and "Orientation" fields are included in the mutation.

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
        orientation: null,
        // widget field is absent because it is excluded from the form
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

    test("it should include fields that are not dirty when submitting an update form", async () => {
      const user = userEvent.setup();

      const result = render(<PolarisAutoForm action={api.widget.update} exclude={["gizmos"]} findBy="1145" />, {
        wrapper: PolarisMockedProviders,
      });
      const { getByLabelText, queryAllByText } = result;

      loadMockWidgetUpdateMetadata();

      const submitButton = queryAllByText("Submit")[0];
      expect(submitButton).toHaveTextContent("Submit");

      await act(async () => {
        const inventoryCountElement = getByLabelText("Inventory count");
        await user.clear(inventoryCountElement);
        await user.click(inventoryCountElement);
        // The fetched record has an inventory count of 42. We will update it to 1234.
        await user.keyboard("1234");

        await user.click(submitButton);
      });

      const mutation = mockUrqlClient.executeMutation.mock.calls[0][0];
      const mutationName = mutation.query.definitions[0].name.value;
      const variables = mutation.variables.widget;
      const recordId = mutation.variables.id;

      expect(mutationName).toEqual("updateWidget");
      expect(variables).toEqual({
        anything: {
          example: true,
          key: "value",
        },
        birthday: null,
        category: [],
        color: null,
        description: {
          markdown: "example _rich_ **text**",
        },
        embedding: null,
        inventoryCount: 1234,
        isChecked: null,
        metafields: null,
        mustBeLongString: null,
        name: "Test Widget",
        roles: [],
        secretKey: null,
        section: {
          _link: undefined,
        },
        startsAt: null,
      });
      expect(recordId).toEqual("1145");
    });

    test("it should include default values fields that are not dirty when submitting a create form", async () => {
      const user = userEvent.setup();

      const { getByRole, getByLabelText } = render(
        <PolarisAutoForm
          action={api.gizmo.create}
          exclude={["widget"]}
          defaultValues={{
            gizmo: {
              name: "test record",
              orientation: "test orientation",
            },
          }}
        />,
        {
          wrapper: PolarisMockedProviders,
        }
      );

      loadMockGizmoCreateMetadata();

      await act(async () => {
        await user.click(getByRole("button"));
      });

      const mutation = mockUrqlClient.executeMutation.mock.calls[0][0];

      expect(mutation.query.definitions[0].name.value).toEqual("createGizmo");
      expect(mutation.variables.gizmo).toEqual({
        name: "test record",
        orientation: "test orientation",
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

  describe("for null values", () => {
    const submittedVariables = () => {
      const mutation = mockUrqlClient.executeMutation.mock.calls[0][0];
      const variables = mutation.variables.widget;

      return variables;
    };

    describe("when an update form gets a null value for a boolean field", () => {
      let user: UserEvent;
      let renderResult: RenderResult;

      beforeEach(() => {
        user = userEvent.setup();

        renderResult = render(<PolarisAutoForm action={api.widget.update} exclude={["gizmos"]} findBy="1145" />, {
          wrapper: PolarisMockedProviders,
        });

        loadMockWidgetUpdateMetadata();
      });

      test("it should remain null when submitting the form if unchanged", async () => {
        await act(async () => {
          const nameElement = renderResult.getByLabelText("Name");
          await user.clear(nameElement);
          await user.click(nameElement);
          await user.keyboard("updated another test record");

          await user.click(renderResult.getByRole("button"));
        });

        expect(submittedVariables().isChecked).toEqual(null);
      });

      test("it should send true if the user selects the checkbox", async () => {
        await act(async () => {
          const isCheckedElement = renderResult.getByLabelText("Is checked");
          await user.click(isCheckedElement);
          await user.click(renderResult.getByRole("button"));
        });

        expect(submittedVariables().isChecked).toEqual(true);
      });

      test("it should send false if the user selects the checkbox and then unselects it", async () => {
        await act(async () => {
          const isCheckedElement = renderResult.getByLabelText("Is checked");
          await user.click(isCheckedElement);
          await user.click(isCheckedElement);

          await user.click(renderResult.getByRole("button"));
        });

        expect(submittedVariables().isChecked).toEqual(false);
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
