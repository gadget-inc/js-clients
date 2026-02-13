/* eslint-disable jest/valid-expect */
import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";
import { SUITE_NAMES } from "../../../support/constants.js";

describeForEachAutoAdapter("AutoForm", ({ name, adapter: { AutoForm }, wrapper, clickOptions }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  const ensureFieldInputLabelsExist = () => {
    if (name === SUITE_NAMES.POLARIS_WC) {
      // PolarisWC renders labels inside shadow DOM; check label attributes instead
      cy.get('[label="Name"]').should("exist");
      cy.get('[label="Inventory count"]').should("exist");
      cy.get('[label="Anything"]').should("exist");
    } else {
      cy.contains("Name");
      cy.contains("Inventory count");
      cy.contains("Anything");
    }
  };

  const typeInField = (fieldId: string, text: string, clear = false) => {
    if (name === SUITE_NAMES.POLARIS_WC) {
      const input = cy.get(`[id="${fieldId}"]`).shadow().find("input");
      input.click(clickOptions);
      if (clear) input.clear();
      input.type(text);
      input.blur();
    } else {
      cy.clickAndType(`input[name="${fieldId}"]`, text, clear);
    }
  };

  const getInputByField = (fieldId: string) => {
    if (name === SUITE_NAMES.POLARIS_WC) {
      return cy.get(`[id="${fieldId}"]`).shadow().find("input");
    }
    return cy.get(`input[name="${fieldId}"]`);
  };

  const getSubmitBtn = () =>
    name === SUITE_NAMES.POLARIS_WC ? cy.get("form s-button[type=submit]") : cy.get("form [type=submit][aria-hidden!=true]");

  const submit = (modelName: string) => {
    getSubmitBtn().click(clickOptions);
    cy.contains(`Saved ${modelName} successfully`, { timeout: 10000 });
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

    typeInField("widget.name", "test record");
    typeInField("widget.inventoryCount", "999");

    submit("Widget");
    ensureFieldInputLabelsExist();

    // Ensure that the form is cleared after submitting the create action
    getInputByField("widget.name").should("have.value", "");
    getInputByField("widget.inventoryCount").should("have.value", "");

    // Ensure that the success banner can be closed
    if (name === SUITE_NAMES.POLARIS_WC) {
      cy.get("s-banner").shadow().find("s-button").first().click(clickOptions);
      cy.get("s-banner").should("not.exist");
    } else {
      cy.get(`button[aria-label="Dismiss notification"]`).first().click(clickOptions);
      cy.contains(`Saved Widget successfully`).should("not.exist");
    }
  });

  it("onSuccess callback should return a record result after the form submission", () => {
    const onSuccessSpy = cy.spy().as("onSuccessSpy");
    cy.mountWithWrapper(<AutoForm action={api.widget.create} exclude={["gizmos"]} onSuccess={onSuccessSpy} />, wrapper);

    typeInField("widget.name", "test record");
    typeInField("widget.inventoryCount", "999");

    getSubmitBtn().click(clickOptions);

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

    typeInField("widget.name", "test record");
    typeInField("widget.inventoryCount", "999");

    getSubmitBtn().click(clickOptions);

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
    getSubmitBtn().should("not.exist");
  });

  it("can render a form to update model and submit it", () => {
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

    if (name === SUITE_NAMES.POLARIS_WC) {
      cy.get('[label="Name"]').should("exist");
      cy.get('[label="Inventory count"]').should("exist");
      cy.get('[label="Anything"]').should("exist");
    } else {
      cy.contains("Name");
      cy.contains("Inventory count");
      cy.contains("Anything");
    }

    // Clear the fetched value to prevent from making the value stored in the database longer as the test runs
    typeInField("widget.name", "updated test record", true);
    typeInField("widget.inventoryCount", "1234", true);
    if (name === SUITE_NAMES.POLARIS_WC) {
      cy.get("s-text-field#widget\\.section-input").shadow().find("input").click(clickOptions).clear().type("Section Foo");
    } else {
      cy.clickAndType(`input[name="widget.section"]`, "Section Foo", true);
    }

    cy.contains(`Section Foo`).click(clickOptions);
    /**
     * This relies on the existence of `section` model record with {id:1, name:"Section Foo"}
     * This proves the selection of the correct record
     */

    if (name === SUITE_NAMES.SHADCN) {
      cy.get('[cmdk-item][data-value="1-Section Foo"]');
    } else if (name === SUITE_NAMES.POLARIS_WC) {
      cy.get('button[role="option"]').contains("Section Foo");
    } else {
      cy.get(`[id="1_Section Foo"]`);
    }

    submit("Widget");

    // Ensure that the form values remain after submitting the update action
    getInputByField("widget.name").should("have.value", "updated test record");
    getInputByField("widget.inventoryCount").should("have.value", "1234");
  });

  it("can render a form to create namespaced model", () => {
    cy.mountWithWrapper(<AutoForm action={api.game.stadium.create} exclude={["rounds"]} />, wrapper);

    if (name === SUITE_NAMES.POLARIS_WC) {
      cy.get('[label="Name"]').should("exist");
    } else {
      cy.contains("Name");
    }
    typeInField("stadium.name", "test stadium record");

    submit("Stadium");
  });

  it("can show invalid field errors from the server and recover from them", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.create} exclude={["gizmos"]} />, wrapper);

    ensureFieldInputLabelsExist();

    // fill in name but not inventoryCount
    typeInField("widget.name", "test record");

    getSubmitBtn().click(clickOptions);
    if (name === SUITE_NAMES.POLARIS_WC) {
      // PolarisWC renders field errors inside shadow DOM via the error attribute
      cy.get('[id="widget.inventoryCount"]').should("have.attr", "error", "Inventory count is required");
    } else {
      cy.contains("Inventory count is required");
    }

    typeInField("widget.inventoryCount", "42");

    typeInField("widget.mustBeLongString", "short");

    if (name === SUITE_NAMES.POLARIS_WC) {
      cy.get('[id="widget.mustBeLongString"]').should("have.attr", "error").and("include", "must be at least 20 characters");
    } else {
      cy.contains("must be at least 20 characters");
    }

    typeInField("widget.mustBeLongString", ` l${"o".repeat(20)}ng enough`);

    submit("Widget");
  });

  it("can render a rich text editor for markdown content", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.create} include={["description"]} />, wrapper);

    const richTextSelector =
      name === SUITE_NAMES.POLARIS_WC
        ? "s-rich-text-editor [contenteditable=true], [aria-label='editable markdown'] > p"
        : "[aria-label='editable markdown'] > p";
    cy.get(richTextSelector).first().click(clickOptions).type("# foobar\n## foobaz");

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

  it("can submit a form with custom children even if the action has required fields", () => {
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

  it("can pass in a `select` prop to the form that will control the selection and get IDs forcefully selected for relationships", () => {
    const autoFormProps = {
      action: api.widget.update,
      findBy: "1",

      // Note how there are no `id` values in this selection
      select: {
        name: true,
        inventoryCount: true,
        section: { name: true },
        gizmos: { name: true },
      },
    };

    // Observe how the `id` field is forced into the selection
    const expectedQueryValue = `query widget($id: GadgetID!) {
  widget(id: $id) {
    name
    inventoryCount
    section {
      name
      id
      __typename
    }
    gizmos {
      name
      edges {
        node {
          id
          __typename
        }
        __typename
      }
      __typename
    }
    id
    __typename
  }
  gadgetMeta {
    hydrations(modelName: 
"widget")
    __typename
  }
}`;

    const expectedRequestVariables = { id: "1" }; // Changing the `select` has no effect on the request variables

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=widget`, (req) => {
      expect(req.body.query).to.deep.equal(expectedQueryValue);
      expect(req.body.variables).to.deep.equal(expectedRequestVariables);
      // Response is not important for this test to check the selection
      req.reply({ body: { data: { widget: { __typename: "Widget" } } } });
    }).as("getWidget");

    cy.mountWithWrapper(<AutoForm {...autoFormProps} />, wrapper);

    cy.wait("@getWidget");
  });
});
