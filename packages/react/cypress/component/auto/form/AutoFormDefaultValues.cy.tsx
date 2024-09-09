import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";

describeForEachAutoAdapter("AutoForm - Default model field values", ({ name, adapter: { AutoForm }, wrapper }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  it("prepopulates with default values from the server for create actions", () => {
    cy.mountWithWrapper(<AutoForm action={api.part.create} />, wrapper);

    // fill in name but not inventoryCount
    cy.get(`input[name="part.name"]`).should("have.value", "");
    cy.get(`input[name="part.count"]`).should("have.value", "0");
    cy.get(`input[name="part.notes"]`).should("have.value", "no notes");

    cy.getSubmitButton().click();
  });

  it("prepopulates with default values from the props of the form which take precedence", () => {
    cy.mountWithWrapper(<AutoForm action={api.part.create} defaultValues={{ part: { name: "test record" } }} />, wrapper);

    cy.get(`input[name="part.name"]`).should("have.value", "test record");
    cy.get(`input[name="part.count"]`).should("have.value", "");
    cy.get(`input[name="part.notes"]`).should("have.value", "");
  });

  it("can set default values in props for excluded fields and send them to the server", () => {
    cy.mountWithWrapper(
      <AutoForm action={api.part.create} defaultValues={{ part: { name: "test record" } }} exclude={["name"]} />,
      wrapper
    );

    cy.get(`input[name="part.count"]`).should("have.value", "");
    cy.get(`input[name="part.notes"]`).should("have.value", "");
    cy.get(`input[name="part.name"]`).should("not.exist");

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=createPart`, (req) => {
      req.reply();
    }).as("createPart");

    cy.getSubmitButton().click();
    cy.wait("@createPart");
    cy.get("@createPart")
      .its("request.body.variables")
      .should("deep.equal", { part: { name: "test record", count: null, notes: null } });
  });

  it("can set default values in props for non-included fields and send them to the server", () => {
    cy.mountWithWrapper(
      <AutoForm action={api.part.create} defaultValues={{ part: { name: "test record" } }} include={["count", "notes"]} />,
      wrapper
    );

    cy.get(`input[name="part.count"]`).should("have.value", "");
    cy.get(`input[name="part.notes"]`).should("have.value", "");
    cy.get(`input[name="part.name"]`).should("not.exist");

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=createPart`, (req) => {
      req.reply();
    }).as("createPart");

    cy.getSubmitButton().click();
    cy.wait("@createPart");
    cy.get("@createPart")
      .its("request.body.variables")
      .should("deep.equal", { part: { name: "test record", count: null, notes: null } });
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

    cy.getSubmitButton().click();
  });
});
