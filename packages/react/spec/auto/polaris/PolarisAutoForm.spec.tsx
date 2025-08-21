import { GadgetRecord } from "@gadgetinc/api-client-core";
import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import type { UserEvent } from "@testing-library/user-event";
import { userEvent } from "@testing-library/user-event";
import type { ReactNode } from "react";
import React, { act } from "react";
import { MissingApiTriggerErrorMessage } from "../../../src/auto/AutoFormActionValidators.js";
import { PolarisAutoForm } from "../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoInput } from "../../../src/auto/polaris/inputs/PolarisAutoInput.js";
import { PolarisAutoSubmit } from "../../../src/auto/polaris/submit/PolarisAutoSubmit.js";
import { testApi as api } from "../../apis.js";
import { MockClientProvider, mockUrqlClient } from "../../testWrappers.js";
import { getGizmoModelMetadata } from "../support/gizmoModel.js";
import { getGlobalActionMetadata } from "../support/globalActions.js";
import { getWidgetModelMetadata, getWidgetRecord, getWidgetRecordResponse } from "../support/widgetModel.js";

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
        render(<PolarisAutoForm action={api.widget.create} exclude={["section", "gizmos"]} />, { wrapper: PolarisMockedProviders });
        await loadMockWidgetCreateMetadata();
        expect(await screen.findByLabelText("Name")).toBeInTheDocument();
      });

      test("it throws an error if a create action is mixed with a findBy prop", async () => {
        await expect(async () => {
          // @ts-expect-error: mixing a create and a findBy should throw a type error too
          render(<PolarisAutoForm action={api.widget.create} findBy="1234" />, { wrapper: PolarisMockedProviders });
          await loadMockWidgetCreateMetadata();
        }).rejects.toThrow("The 'findBy' prop is only allowed for actions that operate with a record identity.");
      });
      test("it throws an error if a create action is mixed with a record", async () => {
        await expect(async () => {
          // @ts-expect-error: mixing a create and a record should throw a type error too
          render(<PolarisAutoForm action={api.widget.create} record={new GadgetRecord({ id: "1234" })} />, {
            wrapper: PolarisMockedProviders,
          });
          await loadMockWidgetCreateMetadata();
        }).rejects.toThrow("Passing a record to an action that does not operate with a record identity is invalid.");
      });

      describe("for actions that require IDs", () => {
        test("it throws an error for update actions missing the findBy prop", async () => {
          await expect(async () => {
            // @ts-expect-error: missing required findBy prop
            render(<PolarisAutoForm action={api.widget.update} />, { wrapper: PolarisMockedProviders });
            await loadMockWidgetUpdateMetadata();
          }).rejects.toThrow("The 'findBy' prop is required for actions that operate with a record identity.");
        });
        test("it throws an error for update actions acting on a record without an id", async () => {
          await expect(async () => {
            // @ts-expect-error: missing required id
            render(<PolarisAutoForm action={api.widget.update} record={new GadgetRecord({})} />, { wrapper: PolarisMockedProviders });
            await loadMockWidgetUpdateMetadata();
          }).rejects.toThrow("Passing a record to an action that operates with a record identity requires the record to have an id.");
        });
        test("it throws an error for update actions mixed with a record and a findBy prop", async () => {
          await expect(async () => {
            // @ts-expect-error: mixing a record and a findBy prop
            render(<PolarisAutoForm action={api.widget.update} record={new GadgetRecord({ id: "123" })} findBy="123" />, {
              wrapper: PolarisMockedProviders,
            });
            await loadMockWidgetUpdateMetadata();
          }).rejects.toThrow("Passing both a 'findBy' and a 'record' prop to an AutoForm is invalid.");
        });
        test("it throws an error for delete actions missing the findBy prop", async () => {
          await expect(async () => {
            // @ts-expect-error: missing required findBy prop
            render(<PolarisAutoForm action={api.widget.delete} />, { wrapper: PolarisMockedProviders });
            await loadMockWidgetDeleteMetadata();
          }).rejects.toThrow("The 'findBy' prop is required for actions that operate with a record identity.");
        });
        test("it throws an error for delete actions acting on a record without an id", async () => {
          await expect(async () => {
            // @ts-expect-error: missing required id
            render(<PolarisAutoForm action={api.widget.delete} record={new GadgetRecord({})} />, { wrapper: PolarisMockedProviders });
            await loadMockWidgetDeleteMetadata();
          }).rejects.toThrow("Passing a record to an action that operates with a record identity requires the record to have an id.");
        });
      });
    });

    test("it throws an error if you use include and exclude at the same time", async () => {
      await expect(async () => {
        render(<PolarisAutoForm action={api.widget.create} exclude={["inventoryCount"]} include={["name"]} />, {
          wrapper: PolarisMockedProviders,
        });
        await loadMockWidgetCreateMetadata();
      }).rejects.toThrow("Cannot use both 'include' and 'exclude' options at the same time");
    });

    test("it includes the record ID when submitting a form that updates a record", async () => {
      const user = userEvent.setup();

      const result = render(<PolarisAutoForm action={api.widget.update} exclude={["section", "gizmos"]} findBy="1145" />, {
        wrapper: PolarisMockedProviders,
      });
      const { getByLabelText, queryAllByText } = result;

      await loadMockWidgetUpdateMetadataWithFindBy();

      const submitButton = queryAllByText("Submit")[0];
      expect(submitButton).toHaveTextContent("Submit");

      const nameElement = getByLabelText("Name");
      await user.clear(nameElement);
      await user.click(nameElement);
      await user.keyboard("updated test record");

      const inventoryCountElement = getByLabelText("Inventory count");
      await user.clear(inventoryCountElement);
      await user.click(inventoryCountElement);
      await user.keyboard("1234");

      await user.click(submitButton);

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

  test("it uses a record that is passed for the id and as default values", async () => {
    const user = userEvent.setup();

    const result = render(
      <PolarisAutoForm
        action={api.widget.update}
        exclude={["section", "gizmos"]}
        record={getWidgetRecord({
          id: "123",
          name: "Test Widget",
          inventoryCount: 42,
        })}
      />,
      {
        wrapper: PolarisMockedProviders,
      }
    );

    const { getByLabelText, queryAllByText } = result;

    await loadMockWidgetUpdateMetadata();

    expect(mockUrqlClient.executeQuery.mock.calls.find((call) => call[0].query.loc.source.body.includes("query widget"))).toBeUndefined();

    expect(getByLabelText("Name")).toHaveValue("Test Widget");
    expect(getByLabelText("Inventory count")).toHaveValue(42);

    const submitButton = queryAllByText("Submit")[0];
    expect(submitButton).toHaveTextContent("Submit");

    const nameElement = getByLabelText("Name");
    await user.clear(nameElement);
    await user.click(nameElement);
    await user.keyboard("updated test record");

    const inventoryCountElement = getByLabelText("Inventory count");
    await user.clear(inventoryCountElement);
    await user.click(inventoryCountElement);
    await user.keyboard("1234");

    await user.click(submitButton);

    const mutation = mockUrqlClient.executeMutation.mock.calls[0][0];
    const mutationName = mutation.query.definitions[0].name.value;
    const variables = mutation.variables.widget;
    const recordId = mutation.variables.id;

    expect(mutationName).toEqual("updateWidget");
    expect(variables.inventoryCount).toEqual(1234);
    expect(recordId).toEqual("123");
  });

  test("it merges default values with a record that is passed", async () => {
    const user = userEvent.setup();

    const widgetRecord = getWidgetRecord({
      id: "123",
      name: "Test Widget",
      inventoryCount: 42,
    });

    const result = render(
      <PolarisAutoForm
        action={api.widget.update}
        exclude={["section", "gizmos"]}
        record={widgetRecord}
        defaultValues={{
          inventoryCount: 100,
          widget: {
            name: "Default value for Test Widget",
          },
        }}
      />,
      {
        wrapper: PolarisMockedProviders,
      }
    );

    const { getByLabelText, queryAllByText } = result;

    await loadMockWidgetUpdateMetadata();

    expect(mockUrqlClient.executeQuery.mock.calls.find((call) => call[0].query.loc.source.body.includes("query widget"))).toBeUndefined();

    expect(getByLabelText("Name")).toHaveValue("Default value for Test Widget");
    expect(getByLabelText("Inventory count")).toHaveValue(100);

    const submitButton = queryAllByText("Submit")[0];
    expect(submitButton).toHaveTextContent("Submit");

    const nameElement = getByLabelText("Name");
    await user.clear(nameElement);
    await user.click(nameElement);
    await user.keyboard("updated test record");

    const inventoryCountElement = getByLabelText("Inventory count");
    await user.clear(inventoryCountElement);
    await user.click(inventoryCountElement);
    await user.keyboard("1234");

    await user.click(submitButton);

    const mutation = mockUrqlClient.executeMutation.mock.calls[0][0];
    const mutationName = mutation.query.definitions[0].name.value;
    const variables = mutation.variables.widget;
    const recordId = mutation.variables.id;

    expect(mutationName).toEqual("updateWidget");
    expect(variables.inventoryCount).toEqual(1234);
    expect(recordId).toEqual("123");
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
        await loadMockWidgetCreateMetadata();
        expect(getByLabelText("Name")).toBeInTheDocument();
      });
    });

    describe("AutoSubmit", () => {
      test("it submits the form", async () => {
        const user = userEvent.setup();

        const { findByText, getByLabelText } = render(
          <PolarisAutoForm action={api.widget.create}>
            <PolarisAutoInput field="name" />
            <PolarisAutoInput field="inventoryCount" />
            <PolarisAutoSubmit />
          </PolarisAutoForm>,
          { wrapper: PolarisMockedProviders }
        );

        await loadMockWidgetCreateMetadata();

        const submitButton = await findByText("Submit", { selector: ':not([aria-hidden="true"])' });
        expect(submitButton).toBeTruthy();

        const nameElement = getByLabelText("Name");
        await user.click(nameElement);
        await user.keyboard("test record");

        const inventoryCountElement = getByLabelText("Inventory count");
        await user.click(inventoryCountElement);
        await user.keyboard("22");

        await user.click(await findByText("Submit", { selector: ':not([aria-hidden="true"])' }));

        const mutation = mockUrqlClient.executeMutation.mock.calls[0][0];
        const mutationName = mutation.query.definitions[0].name.value;
        const variables = mutation.variables.widget;

        expect(mutationName).toEqual("createWidget");
        expect(variables.inventoryCount).toEqual(22);
        expect(variables.name).toEqual("test record");
      });

      test("you can pass a custom label", async () => {
        const { getByText } = render(
          <PolarisAutoForm action={api.widget.create}>
            <PolarisAutoInput field="name" />
            <PolarisAutoSubmit>Save</PolarisAutoSubmit>
          </PolarisAutoForm>,
          { wrapper: PolarisMockedProviders }
        );

        await loadMockWidgetCreateMetadata();

        expect(getByText("Save")).toBeTruthy();
      });
    });
  });

  describe("dirty fields", () => {
    test("it should include fields that are in the 'include' prop when submitting a create form", async () => {
      const user = userEvent.setup();

      const { getByText, getByLabelText } = render(<PolarisAutoForm action={api.gizmo.create} include={["name", "orientation"]} />, {
        wrapper: PolarisMockedProviders,
      });

      await loadMockGizmoCreateMetadata();

      const nameElement = getByLabelText("Name");
      await user.clear(nameElement);
      await user.click(nameElement);
      await user.keyboard("updated test record");

      await user.click(getByText("Submit", { selector: ':not([aria-hidden="true"])' }));

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

      const { findByText, getByLabelText, queryAllByText } = render(<PolarisAutoForm action={api.gizmo.create} exclude={["widget"]} />, {
        wrapper: PolarisMockedProviders,
      });

      await loadMockGizmoCreateMetadata();

      // Inside the "gizmo" model, there are two fields: "Name" and "Orientation", both are not required.
      // We first modify the "Name" field and submit the form to ensure that both the "Name" and "Orientation" fields are included in the mutation.

      const nameElement = getByLabelText("Name");
      await user.clear(nameElement);
      await user.click(nameElement);
      await user.keyboard("new test record");

      const submit = await findByText("Submit", { selector: ':not([aria-hidden="true"])' });
      await user.click(submit);

      let mutation = mockUrqlClient.executeMutation.mock.calls[0][0];
      let mutationName = mutation.query.definitions[0].name.value;
      let variables = mutation.variables.gizmo;

      expect(mutationName).toEqual("createGizmo");
      expect(variables).toEqual({
        name: "new test record",
        orientation: null,
        // widget field is absent because it is excluded from the form
      });

      // Now modify the other field and submit again to ensure that the other field is also included.

      const orientationElement = getByLabelText("Orientation");
      await user.clear(orientationElement);
      await user.click(orientationElement);
      await user.keyboard("orientation value");

      const submitButton = queryAllByText("Submit")[0];
      expect(submitButton).toHaveTextContent("Submit");
      await user.click(submitButton);

      mutation = mockUrqlClient.executeMutation.mock.calls[1][0];
      mutationName = mutation.query.definitions[0].name.value;
      variables = mutation.variables.gizmo;

      expect(mutationName).toEqual("createGizmo");
      expect(variables).toEqual({
        name: "new test record",
        orientation: "orientation value",
      });
    });

    test("it should include fields that are not dirty when submitting an update form", async () => {
      const user = userEvent.setup();

      const result = render(<PolarisAutoForm action={api.widget.update} exclude={["section", "gizmos"]} findBy="1145" />, {
        wrapper: PolarisMockedProviders,
      });
      const { getByLabelText, queryAllByText } = result;

      await loadMockWidgetUpdateMetadataWithFindBy();

      const submitButton = queryAllByText("Submit")[0];
      expect(submitButton).toHaveTextContent("Submit");

      const inventoryCountElement = getByLabelText("Inventory count");
      await user.clear(inventoryCountElement);
      await user.click(inventoryCountElement);
      // The fetched record has an inventory count of 42. We will update it to 1234.
      await user.keyboard("1234");

      await user.click(submitButton);

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
          markdown: "example *rich* **text**",
        },
        embedding: [],
        inventoryCount: 1234,
        isChecked: null,
        metafields: null,
        mustBeLongString: null,
        name: "Test Widget",
        roles: [],
        secretKey: null,
        startsAt: null,
      });
      expect(recordId).toEqual("1145");
    });

    test("it should include default values fields that are not dirty when submitting a create form", async () => {
      const user = userEvent.setup();

      const { findByText } = render(
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

      await loadMockGizmoCreateMetadata();

      await user.click(await findByText("Submit", { selector: ':not([aria-hidden="true"])' }));

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

      await mockUrqlClient.executeQuery.waitForSubject("ModelActionMetadata");

      await act(async () => {
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
      });

      const submitButton = getByRole("button");
      expect(submitButton).toHaveTextContent("Submit");

      await user.click(submitButton);

      // Name is a required field. Since it is not filled.
      expect(mockUrqlClient.executeMutation.mock.calls.length).toBe(0);

      let nameElement = getByLabelText("Name");
      await user.clear(nameElement);
      await user.click(nameElement);
      await user.keyboard("very short");

      await user.click(submitButton);

      // Name has to be at least 20 characters long.
      expect(mockUrqlClient.executeMutation.mock.calls.length).toBe(0);

      nameElement = getByLabelText("Name");
      await user.clear(nameElement);
      await user.click(nameElement);
      await user.keyboard(`now make it super l${"o".repeat(50)}ng`);

      await user.click(submitButton);

      // Name has to be at most 50 characters long.
      expect(mockUrqlClient.executeMutation.mock.calls.length).toBe(0);

      nameElement = getByLabelText("Name");
      await user.clear(nameElement);
      await user.click(nameElement);
      await user.keyboard("1".repeat(30));

      await user.click(submitButton);

      // Name is within the range, but the regex pattern validation fails because it only allows alphabets.
      expect(mockUrqlClient.executeMutation.mock.calls.length).toBe(0);

      nameElement = getByLabelText("Name");
      await user.clear(nameElement);
      await user.click(nameElement);
      await user.keyboard(`lets make it valid now something long enough`);

      await user.click(submitButton);

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

      await mockUrqlClient.executeQuery.waitForSubject("ModelActionMetadata");

      await act(async () => {
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
      });

      const submitButton = getByRole("button");
      expect(submitButton).toHaveTextContent("Submit");

      await user.click(submitButton);

      // Name is a required field.
      expect(mockUrqlClient.executeMutation.mock.calls.length).toBe(0);

      let inventoryCountElement = getByLabelText("Inventory count");
      await user.clear(inventoryCountElement);
      await user.click(inventoryCountElement);
      await user.keyboard("0");

      await user.click(submitButton);

      // Inventory count has to be at least 5.
      expect(mockUrqlClient.executeMutation.mock.calls.length).toBe(0);

      inventoryCountElement = getByLabelText("Inventory count");
      await user.clear(inventoryCountElement);
      await user.click(inventoryCountElement);
      await user.keyboard("999");

      await user.click(submitButton);

      // Inventory count has to be at most 10.
      expect(mockUrqlClient.executeMutation.mock.calls.length).toBe(0);

      inventoryCountElement = getByLabelText("Inventory count");
      await user.clear(inventoryCountElement);
      await user.click(inventoryCountElement);
      await user.keyboard("5");

      await user.click(submitButton);

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

      beforeEach(async () => {
        user = userEvent.setup();

        renderResult = render(<PolarisAutoForm action={api.widget.update} exclude={["section", "gizmos"]} findBy="1145" />, {
          wrapper: PolarisMockedProviders,
        });

        await loadMockWidgetUpdateMetadataWithFindBy();
      });

      test("it should remain null when submitting the form if unchanged", async () => {
        const nameElement = renderResult.getByLabelText("Name");
        await user.clear(nameElement);
        await user.click(nameElement);
        await user.keyboard("updated another test record");
        await user.click(await renderResult.findByText("Submit", { selector: ':not([aria-hidden="true"])' }));
        expect(submittedVariables().isChecked).toEqual(null);
      });

      test("it should send true if the user selects the checkbox", async () => {
        const isCheckedElement = renderResult.getByLabelText("Is checked");
        await user.click(isCheckedElement);
        await user.click(await renderResult.findByText("Submit", { selector: ':not([aria-hidden="true"])' }));

        expect(submittedVariables().isChecked).toEqual(true);
      });

      test("it should send false if the user selects the checkbox and then unselects it", async () => {
        const isCheckedElement = renderResult.getByLabelText("Is checked");
        await user.click(isCheckedElement);
        await user.click(isCheckedElement);

        await user.click(await renderResult.findByText("Submit", { selector: ':not([aria-hidden="true"])' }));

        expect(submittedVariables().isChecked).toEqual(false);
      });
    });
  });

  describe("Bulk actions", () => {
    it("throws an error when a bulk action is used", async () => {
      await expect(async () => {
        render(<PolarisAutoForm action={api.widget.bulkUpdate as any} />, { wrapper: PolarisMockedProviders });
        await loadMockWidgetCreateMetadata();
      }).rejects.toThrow("Bulk actions are not supported in AutoForms");
    });
  });

  describe("Actions without triggers", () => {
    describe("No triggers in the api client", () => {
      it("throws an error when a model action without triggers", async () => {
        await expect(async () => {
          render(<PolarisAutoForm action={api.autoTableTest.noTriggerAction as any} />, { wrapper: PolarisMockedProviders });
          await loadMockWidgetCreateMetadata();
        }).rejects.toThrow(MissingApiTriggerErrorMessage);
      });

      it("throws an error when a global action without triggers", async () => {
        await expect(async () => {
          render(<PolarisAutoForm action={api.noTriggerGlobalAction as any} />, { wrapper: PolarisMockedProviders });
          await loadMockWidgetCreateMetadata();
        }).rejects.toThrow(MissingApiTriggerErrorMessage);
      });
    });
    describe("Has triggers in api client but no triggers in action metadata", () => {
      it("throws an error when a model action without triggers", async () => {
        await expect(async () => {
          render(<PolarisAutoForm action={api.widget.create as any} />, { wrapper: PolarisMockedProviders });
          await loadMockWidgetCreateMetadata({ triggers: [{ specID: "non/api/trigger", __typename: "GadgetTrigger" }] });
        }).rejects.toThrow(MissingApiTriggerErrorMessage);
      });

      it("throws an error when a global action without triggers", async () => {
        await expect(async () => {
          render(<PolarisAutoForm action={api.flipAll as any} />, { wrapper: PolarisMockedProviders });
          await loadMockFlipAllMetadata({ triggers: [{ specID: "non/api/trigger", __typename: "GadgetTrigger" }] });
        }).rejects.toThrow(MissingApiTriggerErrorMessage);
      });
    });
  });
});

async function loadMockGizmoCreateMetadata() {
  await mockUrqlClient.executeQuery.waitForSubject("ModelActionMetadata");

  await act(async () => {
    mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
      stale: false,
      hasNext: false,
      data: getGizmoModelMetadata({
        name: "Create",
        apiIdentifier: "create",
        operatesWithRecordIdentity: false,
      }),
    });
  });
}

async function loadMockWidgetCreateMetadata(opts?: { inputFields?: any[]; triggers?: any[] }) {
  await mockUrqlClient.executeQuery.waitForSubject("ModelActionMetadata");

  await act(async () => {
    mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
      stale: false,
      hasNext: false,
      data: getWidgetModelMetadata(
        {
          name: "Create",
          apiIdentifier: "create",
          operatesWithRecordIdentity: false,
        },
        opts?.inputFields,
        opts?.triggers
      ),
    });
  });
}

async function loadMockWidgetUpdateMetadata() {
  await act(async () => {
    await mockWidgetUpdateHelperFunctions.mockMetadataResponse();
  });
}

async function loadMockWidgetUpdateMetadataWithFindBy() {
  await act(async () => {
    await mockWidgetUpdateHelperFunctions.mockMetadataResponse();
  });
  await act(async () => {
    await mockWidgetUpdateHelperFunctions.mockFindByResponse();
  });
}

const mockWidgetUpdateHelperFunctions = {
  mockMetadataResponse: async () => {
    mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
      stale: false,
      hasNext: false,
      data: getWidgetModelMetadata({
        name: "Update",
        apiIdentifier: "update",
        operatesWithRecordIdentity: true,
      }),
    });
  },
  mockFindByResponse: async () => {
    mockUrqlClient.executeQuery.pushResponse("widget", {
      stale: false,
      hasNext: false,
      data: getWidgetRecordResponse({
        name: "Test Widget",
        inventoryCount: 42,
      }),
    });
  },
};

async function loadMockWidgetDeleteMetadata() {
  await mockUrqlClient.executeQuery.waitForSubject("ModelActionMetadata");

  await act(async () => {
    mockUrqlClient.executeQuery.pushResponse("ModelActionMetadata", {
      stale: false,
      hasNext: false,
      data: getWidgetModelMetadata(
        {
          name: "Delete",
          apiIdentifier: "delete",
          operatesWithRecordIdentity: true,
        },
        [] // No input fields beyond ID
      ),
    });
  });
}

async function loadMockFlipAllMetadata(opts?: { triggers?: any[] }) {
  await mockUrqlClient.executeQuery.waitForSubject("GlobalActionMetadata");

  await act(async () => {
    mockUrqlClient.executeQuery.pushResponse("GlobalActionMetadata", {
      stale: false,
      hasNext: false,
      data: getGlobalActionMetadata({
        apiIdentifier: "flipAll",
        triggers: opts?.triggers,
      }),
    });
  });
}
