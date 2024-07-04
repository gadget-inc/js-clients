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
});
