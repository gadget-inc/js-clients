import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";

describeForEachAutoAdapter("AutoForm - Global actions", ({ name, adapter: { AutoForm }, wrapper }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
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

    // Inputs are cleared after submission on global actions
    cy.get(`input[name="title"]`).should("have.value", "");
    cy.get(`input[name="inventoryCount"]`).should("have.value", "");
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
});
