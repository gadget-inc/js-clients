/* eslint-disable jest/valid-expect */
import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";

describeForEachAutoAdapter("AutoForm", ({ name, adapter: { AutoForm }, wrapper }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
    cy.intercept("POST", `${api.connection.options.endpoint}?operation=ModelActionMetadata`);
  });

  it("renders the default title without a specified title value", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.create} />, wrapper);
    cy.contains("Create Widget").should("exist");
  });

  it("renders the default title when explicitly given undefined", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.create} title={undefined} />, wrapper);
    cy.contains("Create Widget").should("exist");
  });

  it("renders the title as the specified value", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.create} title={"custom title here"} />, wrapper);
    cy.contains("Create Widget").should("not.exist");
    cy.contains("custom title here").should("exist");
  });

  it("does not render the title when given an empty string", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.create} title={""} />, wrapper);
    cy.contains("Create Widget").should("not.exist");
  });

  it("does not render the title when given false", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.create} title={false} />, wrapper);
    cy.contains("Create Widget").should("not.exist");
  });

  it("does not render the title when given null", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.create} title={null} />, wrapper);
    cy.contains("Create Widget").should("not.exist");
  });
});
