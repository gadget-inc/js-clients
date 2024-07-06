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

    cy.get(`input[name="widget.name"]`).type("test record");
    cy.get(`input[name="widget.inventoryCount"]`).type("999");

    cy.get(`input[id="Roles_Autocomplete_Textfield"]`).click().type("u"); // To search for "unauthenticated"
    cy.get(`li[data-listbox-option-value="unauthenticated"]`).click();
    cy.get(`input[id="Roles_Autocomplete_Textfield"]`).click().clear();
    cy.get(`span`).contains("unauthenticated").should("exist");

    submit("Widget");
    ensureFieldInputLabelsExist();
  });

  it("can render a form to update model and submit it", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.update} exclude={["gizmos"]} findBy="999" />, wrapper);

    cy.contains("Name");
    cy.contains("Inventory count");
    cy.contains("Anything");

    // Clear the fetched value to prevent from making the value stored in the database longer as the test runs
    cy.get(`input[name="widget.name"]`).clear().type("updated test record");
    cy.get(`input[name="widget.inventoryCount"]`).clear().type("1234");
    cy.get(`input[name="widget.section"]`).clear().type("Section Foo");

    cy.contains(`Section Foo`).click();
    /**
     * This relies on the existence of `section` model record with {id:1, name:"Section Foo"}
     * This proves the selection of the correct record
     */
    cy.get(`[id="1_Section Foo"]`);

    submit("Widget");
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
    cy.get(`input[name="widget.name"]`).type("test record");

    cy.get("form [type=submit][aria-hidden!=true]").click();
    cy.contains("is a required field");

    cy.get(`input[name="widget.inventoryCount"]`).type("42");

    cy.get(`input[name="widget.mustBeLongString"]`).type("short");
    cy.contains("must be at least 20 characters");

    cy.get(`input[name="widget.mustBeLongString"]`).type(` l${"o".repeat(20)}ng enough`);

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
    cy.mountWithWrapper(<AutoForm action={api.widget.create} include={["name", "inventoryCount", "description"]} />, wrapper);
  });

  it("Only allows existing passwords to be replaced, not edited", () => {
    cy.mountWithWrapper(<AutoForm action={api.user.update} findBy={"1"} include={["password"]} />, wrapper);

    // fill in name but not inventoryCount
    cy.get(`input[name="user.password"]`).should("be.disabled");
    cy.get(`button[role="passwordEditPasswordButton"]`).first().click();

    // Enabled after clicking the edit button
    cy.get(`input[name="user.password"]`).should("be.enabled");
  });

  it("builds forms for global actions and submits, showing a success message", () => {
    cy.mountWithWrapper(<AutoForm action={api.flipAll} />, wrapper);

    cy.get(`input[name="title"]`).should("have.value", "");
    cy.get(`input[name="inventoryCount"]`).should("have.value", "");

    cy.get(`input[name="title"]`).type("foo");
    cy.get(`input[name="inventoryCount"]`).type("42");

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=flipAll`, {
      body: {
        data: {
          flipAll: {
            success: true,
            errors: null,
            result: null,
            __typename: "FlipAllResult",
          },
        },
      },
    }).as("globalActionCall");

    cy.get("form [type=submit][aria-hidden!=true]").click();
    cy.wait("@globalActionCall");

    cy.contains("Flip all succeeded.");
  });

  it("builds forms for global actions and submits, showing any errors and allowing resubmission", () => {
    cy.mountWithWrapper(<AutoForm action={api.flipAll} />, wrapper);

    cy.get(`input[name="title"]`).should("have.value", "");
    cy.get(`input[name="inventoryCount"]`).should("have.value", "");

    cy.get(`input[name="title"]`).type("foo");
    cy.get(`input[name="inventoryCount"]`).type("42");

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=flipAll`, {
      times: 1,
      body: {
        data: {
          flipAll: {
            success: false,
            errors: [
              {
                code: "GGT_UNKNOWN",
                message: "something went wrong internally",
              },
            ],
            result: null,
            __typename: "FlipAllResult",
          },
        },
      },
    }).as("globalActionFirstCall");

    cy.get("form [type=submit][aria-hidden!=true]").click();
    cy.wait("@globalActionFirstCall");

    cy.contains("something went wrong internally");

    cy.get(`input[name="title"]`).should("have.value", "foo");
    cy.get(`input[name="inventoryCount"]`).should("have.value", "42");

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=flipAll`, {
      times: 1,
      body: {
        data: {
          flipAll: {
            success: true,
            result: null,
            __typename: "FlipAllResult",
          },
        },
      },
    }).as("globalActionSecondCall");

    cy.get("form [type=submit][aria-hidden!=true]").click();
    cy.wait("@globalActionSecondCall");

    cy.contains("Flip all succeeded.");
  });

  it("prepopulates with default values from the server for create actions", () => {
    cy.mountWithWrapper(<AutoForm action={api.part.create} />, wrapper);

    // fill in name but not inventoryCount
    cy.get(`input[name="part.name"]`).should("have.value", "");
    cy.get(`input[name="part.count"]`).should("have.value", "0");
    cy.get(`input[name="part.notes"]`).should("have.value", "no notes");

    submit("Part");
  });

  it("prepopulates with default values from the props of the form which take precedence", () => {
    cy.mountWithWrapper(<AutoForm action={api.part.create} defaultValues={{ part: { name: "test record" } }} />, wrapper);

    cy.get(`input[name="part.name"]`).should("have.value", "test record");
    cy.get(`input[name="part.count"]`).should("have.value", "");
    cy.get(`input[name="part.notes"]`).should("have.value", "");
  });

  it("doesn't add default values from the server for update actions actions", () => {
    cy.intercept("POST", `${api.connection.options.endpoint}?operation=part`, {
      statusCode: 200,
      body: {
        data: {
          part: {
            __typename: "Part",

            id: "1",
            name: "test record",
            count: null, // pass a null value that shouldn't be overridden by the server side default here on the client
            notes: "some notes",
            createdAt: "2024-07-08T22:56:26.963Z",
            updatedAt: "2024-07-09T14:42:57.109Z",
          },
        },
      },
    });

    cy.mountWithWrapper(<AutoForm action={api.part.update} findBy="1" />, wrapper);

    // fill in name but not inventoryCount
    cy.get(`input[name="part.name"]`).should("have.value", "test record");
    cy.get(`input[name="part.count"]`).should("have.value", "");
    cy.get(`input[name="part.notes"]`).should("have.value", "some notes");

    submit("Part");
  });
});
