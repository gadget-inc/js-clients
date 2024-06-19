import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";

describeForEachAutoAdapter("AutoForm", ({ name, adapter: { AutoForm }, wrapper }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  it("renders an error if the backend returns one when fetching the model data", () => {
    cy.intercept("POST", `${api.connection.options.endpoint}?operation=ModelActionMetadata`, { forceNetworkError: true });

    cy.mountWithWrapper(<AutoForm action={api.widget.create} />, wrapper);
    cy.contains("error");
  });

  it("can customize the submit label", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.create} submitLabel="Save doodad" />, wrapper);
    cy.contains("Save doodad");
  });

  it("can render a form to create model and submit it", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.create} exclude={["gizmos"]} />, wrapper);

    cy.contains("Name");
    cy.contains("Inventory count");
    cy.contains("Anything");

    cy.get(`input[name="widget.name"]`).type("test record");
    cy.get(`input[name="widget.inventoryCount"]`).type("42");
    cy.get("form [type=submit][aria-hidden!=true]").click();
    cy.contains("Saved Widget successfully");
  });

  it("can show invalid field errors from the server and recover from them", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.create} exclude={["gizmos"]} />, wrapper);

    cy.contains("Name");
    cy.contains("Inventory count");
    cy.contains("Anything");

    // fill in name but not inventoryCount
    cy.get(`input[name="widget.name"]`).type("test record");

    cy.get("form [type=submit][aria-hidden!=true]").click();
    cy.contains("is a required");

    cy.get(`input[name="widget.inventoryCount"]`).type("42");
    cy.get("form [type=submit][aria-hidden!=true]").click();
    cy.contains("Saved Widget successfully");
  });

  it("can render a form to update a model without making changes and submit it", async () => {
    const name = `test record ${new Date()}`;

    cy.wrap(null)
      .then(async () => await api.widget.create({ name, inventoryCount: 42, anything: "hello" }))
      .then((record) => {
        cy.mountWithWrapper(<AutoForm action={api.widget.update} record={record.id} exclude={["gizmos"]} />, wrapper);
        cy.get(`input[name="widget.name"]`).should("have.value", name);
        cy.get(`input[name="widget.inventoryCount"]`).should("have.value", 42);
        cy.get("form [type=submit][aria-hidden!=true]").click();
        cy.contains("Saved Widget successfully");
      });
  });
});
