/* eslint-disable jest/valid-expect */
import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";

describeForEachAutoAdapter("AutoForm", ({ name, adapter: { AutoForm }, wrapper }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  const ensureFieldInputLabelsExist = () => {
    cy.contains("Name");
    cy.contains("Inventory count");
    cy.contains("Anything");
  };

  const submit = (modelName: string) => {
    cy.get("form [type=submit][aria-hidden!=true]").click();
    cy.contains(`Saved ${modelName} successfully`);
  };

  it("renders an error if the backend returns one when fetching the model data", () => {
    cy.intercept("POST", `${api.connection.options.endpoint}?operation=ModelActionMetadata`, { forceNetworkError: true });

    cy.mountWithWrapper(<AutoForm action={api.widget.create} />, wrapper);
    cy.contains("Failed to fetch");
  });

  it("can customize the submit label", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.create} submitLabel="Save doodad" />, wrapper);
    cy.contains("Save doodad");
  });

  it("can render a form to create model and submit it", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.create} exclude={["gizmos"]} />, wrapper);

    ensureFieldInputLabelsExist();

    cy.clickAndType(`input[name="widget.name"]`, "test record");
    cy.clickAndType(`input[name="widget.inventoryCount"]`, "999");

    submit("Widget");
    ensureFieldInputLabelsExist();

    // Ensure that the form is cleared after submitting the create action
    cy.get(`input[name="widget.name"]`).should("have.value", "");
    cy.get(`input[name="widget.inventoryCount"]`).should("have.value", "");

    // Ensure that the success banner can be closed
    cy.get(`button[aria-label="Dismiss notification"]`).click();
    cy.contains(`Saved Widget successfully`).should("not.exist");
  });

  it("onSuccess callback should return a record result after the form submission", () => {
    const onSuccessSpy = cy.spy().as("onSuccessSpy");
    cy.mountWithWrapper(<AutoForm action={api.widget.create} exclude={["gizmos"]} onSuccess={onSuccessSpy} />, wrapper);

    cy.clickAndType(`input[name="widget.name"]`, "test record");
    cy.clickAndType(`input[name="widget.inventoryCount"]`, "999");

    cy.getSubmitButton().click();

    cy.contains(`Saved Widget successfully`).should("not.exist");

    // eslint-disable-next-line jest/valid-expect-in-promise
    cy.get("@onSuccessSpy")
      .should("have.been.called")
      .then(() => {
        const record = onSuccessSpy.getCalls()[0].args[0].toJSON();
        expect(record).property("inventoryCount", 999);
        expect(record).property("name", "test record");
      });
  });

  it("onFailure callback should return an error if the form submission fails", () => {
    const onFailureSpy = cy.spy().as("onFailureSpy");
    cy.mountWithWrapper(<AutoForm action={api.widget.alwaysThrowError} exclude={["gizmos"]} onFailure={onFailureSpy} />, wrapper);

    cy.clickAndType(`input[name="widget.name"]`, "test record");
    cy.clickAndType(`input[name="widget.inventoryCount"]`, "999");

    cy.getSubmitButton().click();

    cy.contains(`Saved Widget successfully`).should("not.exist");

    // eslint-disable-next-line jest/valid-expect-in-promise
    cy.get("@onFailureSpy")
      .should("have.been.called")
      .then(() => {
        const error = onFailureSpy.getCalls()[0].args[0];
        expect(error.message).to.equal("[GraphQL] GGT_UNKNOWN: something goes wrong");
      });
  });

  it("should show an error banner and not render a form when it fails to fetch metadata", () => {
    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.endpoint}?operation=ModelActionMetadata`,
      },
      {
        errors: [
          {
            message:
              'GGT_INVALID_JSON_DEFAULT: Invalid JSON default, cannot apply to record. Parse error: Unexpected token \'}\', "{\n  "hello":\n}" is not valid JSON',
            locations: [
              {
                line: 6,
                column: 7,
              },
            ],
            path: ["gadgetMeta", "model", "defaultRecord"],
            extensions: {
              fromSandbox: false,
            },
          },
        ],
        data: {
          gadgetMeta: {
            model: null,
          },
        },
      }
    ).as("ModelCreateActionMetadataError");

    cy.mountWithWrapper(<AutoForm action={api.widget.create} />, wrapper);
    cy.contains("GGT_INVALID_JSON_DEFAULT: Invalid JSON default, cannot apply to record");
    cy.getSubmitButton().should("not.exist");
  });

  it("can render a form to update model and submit it", () => {
    /**
     * This test is disabled for Shadcn because it's not supported yet. We need to have a list component for this to work properly
     */
    if (name === "Shadcn") {
      return;
    }

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=widget`, {
      body: {
        data: {
          widget: {
            __typename: "Widget",
            id: "999",
            anything: 1,
            birthday: null,
            category: [],
            color: null,
            createdAt: "2024-06-24T17:46:07.333Z",
            description: null,
            embedding: null,
            inStock: true,
            inventoryCount: 1234,
            isChecked: null,
            metafields: null,
            mustBeLongString: null,
            name: "updated test record",
            secretKey: "encrypted value here",
            startsAt: "2024-06-24T11:07:00.000Z",
            updatedAt: "2024-07-12T18:48:16.057Z",
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
      },
    });

    cy.mountWithWrapper(<AutoForm action={api.widget.update} exclude={["gizmos"]} findBy="999" />, wrapper);

    cy.contains("Name");
    cy.contains("Inventory count");
    cy.contains("Anything");

    // Clear the fetched value to prevent from making the value stored in the database longer as the test runs
    cy.clickAndType(`input[name="widget.name"]`, "updated test record", true);
    cy.clickAndType(`input[name="widget.inventoryCount"]`, "1234", true);
    cy.clickAndType(`input[name="widget.section"]`, "Section Foo", true);

    cy.contains(`Section Foo`).click();
    /**
     * This relies on the existence of `section` model record with {id:1, name:"Section Foo"}
     * This proves the selection of the correct record
     */
    cy.get(`[id="1_Section Foo"]`);

    submit("Widget");

    // Ensure that the form values remain after submitting the update action
    cy.get(`input[name="widget.name"]`).should("have.value", "updated test record");
    cy.get(`input[name="widget.inventoryCount"]`).should("have.value", "1234");
  });

  it("can render a form to create namespaced model", () => {
    cy.mountWithWrapper(<AutoForm action={api.game.stadium.create} exclude={["rounds"]} />, wrapper);

    cy.contains("Name");
    cy.get(`input[name="stadium.name"]`).type("test stadium record");

    submit("Stadium");
  });

  it("can show invalid field errors from the server and recover from them", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.create} exclude={["gizmos"]} />, wrapper);

    ensureFieldInputLabelsExist();

    // fill in name but not inventoryCount
    cy.clickAndType(`input[name="widget.name"]`, "test record");

    cy.get("form [type=submit][aria-hidden!=true]").click();
    cy.contains("Inventory count is required");

    cy.clickAndType(`input[name="widget.inventoryCount"]`, "42");

    cy.clickAndType(`input[name="widget.mustBeLongString"]`, "short");
    cy.contains("must be at least 20 characters");

    cy.clickAndType(`input[name="widget.mustBeLongString"]`, ` l${"o".repeat(20)}ng enough`);

    submit("Widget");
  });

  it("can render a form to update a model without making changes and submit it", async () => {
    const name = `test record ${new Date()}`;

    cy.wrap(null)
      .then(async () => await api.widget.create({ name, inventoryCount: 42, anything: "hello" }))
      .then((record) => {
        cy.mountWithWrapper(<AutoForm action={api.widget.update} record={record.id} exclude={["gizmos"]} />, wrapper);
        cy.get(`input[name="widget.name"]`).should("have.value", name);
        cy.get(`input[name="widget.inventoryCount"]`).should("have.value", 42);

        submit("Widget");
      });
  });

  it("can render a rich text editor for markdown content", async () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.create} include={["description"]} />, wrapper);

    cy.get(`[aria-label="editable markdown"] > p`).type("# foobar\n## foobaz");

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=createWidget`, {
      body: {
        data: {
          widget: {
            __typename: "Widget",
            id: "999",
          },
        },
      },
    }).as("createWidget");

    submit("Widget");

    cy.wait("@createWidget").then((interception) => {
      const { variables } = interception.request.body;

      expect(variables.widget.description).to.deep.equal({ markdown: "# foobar\n\n## foobaz" });
    });
  });

  it("can submit a form with custom children even if the action has required fields", async () => {
    cy.mountWithWrapper(
      <AutoForm action={api.widget.create}>
        {/* Note that widget has name and inventoryCount as required fields that are not included here */}
        <button type="submit">Submit</button>
      </AutoForm>,
      wrapper
    );

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=createWidget`, {
      body: {
        data: {
          createWidget: {
            success: false,
            errors: [
              {
                message: "GGT_INVALID_RECORD: widget is invalid and can't be saved. inventoryCount is required.",
                code: "GGT_INVALID_RECORD",
                model: {
                  apiIdentifier: "widget",
                  __typename: "GadgetModel",
                },
                validationErrors: [
                  {
                    message: "is required",
                    apiIdentifier: "inventoryCount",
                    __typename: "InvalidFieldError",
                  },
                ],
                __typename: "InvalidRecordError",
              },
            ],
            widget: null,
            __typename: "CreateWidgetResult",
          },
        },
      },
    }).as("createWidget");

    cy.contains("Submit").click({ force: true });

    cy.wait("@createWidget").then((interception) => {
      const { variables } = interception.request.body;

      expect(variables).to.deep.equal({ widget: {} });
    });
  });
});
