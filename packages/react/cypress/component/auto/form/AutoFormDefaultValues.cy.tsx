import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";
import { SUITE_NAMES } from "../../../support/constants.js";

describeForEachAutoAdapter("AutoForm - Default model field values", ({ name, adapter: { AutoForm }, wrapper, clickOptions }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  const getInputByField = (fieldId: string) => {
    if (name === SUITE_NAMES.POLARIS_WC) {
      return cy.get(`[id="${fieldId}"]`).shadow().find("input");
    }
    return cy.get(`input[name="${fieldId}"]`);
  };

  const getSubmitBtn = () =>
    name === SUITE_NAMES.POLARIS_WC ? cy.get("form s-button[type=submit]") : cy.get("form [type=submit][aria-hidden!=true]");

  it("prepopulates with default values from the server for create actions", () => {
    cy.mountWithWrapper(<AutoForm action={api.part.create} />, wrapper);

    // fill in name but not inventoryCount
    getInputByField("part.name").should("have.value", "");
    getInputByField("part.count").should("have.value", "0");
    getInputByField("part.notes").should("have.value", "no notes");

    getSubmitBtn().click(clickOptions);
  });

  it("prepopulates with default values from the props of the form which take precedence", () => {
    cy.mountWithWrapper(<AutoForm action={api.part.create} defaultValues={{ part: { name: "test record" } }} />, wrapper);

    getInputByField("part.name").should("have.value", "test record");
    getInputByField("part.count").should("have.value", "");
    getInputByField("part.notes").should("have.value", "");
  });

  it("can set default values in props for excluded fields and send them to the server", () => {
    cy.mountWithWrapper(
      <AutoForm action={api.part.create} defaultValues={{ part: { name: "test record" } }} exclude={["name"]} />,
      wrapper
    );

    getInputByField("part.count").should("have.value", "");
    getInputByField("part.notes").should("have.value", "");
    (name === SUITE_NAMES.POLARIS_WC ? cy.get('[id="part.name"]') : cy.get(`input[name="part.name"]`)).should("not.exist");

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=createPart`, (req) => {
      req.reply();
    }).as("createPart");

    getSubmitBtn().click(clickOptions);
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

    getInputByField("part.count").should("have.value", "");
    getInputByField("part.notes").should("have.value", "");
    (name === SUITE_NAMES.POLARIS_WC ? cy.get('[id="part.name"]') : cy.get(`input[name="part.name"]`)).should("not.exist");

    cy.intercept("POST", `${api.connection.options.endpoint}?operation=createPart`, (req) => {
      req.reply();
    }).as("createPart");

    getSubmitBtn().click(clickOptions);
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
    getInputByField("part.name").should("have.value", "test record");
    getInputByField("part.count").should("have.value", "");
    getInputByField("part.notes").should("have.value", "some notes");

    getSubmitBtn().click(clickOptions);
  });
});
