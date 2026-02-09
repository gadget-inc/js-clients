import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";
import { SUITE_NAMES } from "../../../support/constants.js";

describeForEachAutoAdapter("AutoForm - Global actions", ({ name, adapter: { AutoForm }, wrapper, clickOptions }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  const getInputByField = (fieldId: string) => {
    if (name === SUITE_NAMES.POLARIS_WC) {
      return cy.get(`[id="${fieldId}"]`).shadow().find("input");
    }
    return cy.get(`input[name="${fieldId}"]`);
  };

  const typeInField = (fieldId: string, text: string) => {
    if (name === SUITE_NAMES.POLARIS_WC) {
      const input = cy.get(`[id="${fieldId}"]`).shadow().find("input");
      input.click(clickOptions);
      input.type(text);
    } else {
      cy.clickAndType(`input[name="${fieldId}"]`, text);
    }
  };

  const getSubmitBtn = () =>
    name === SUITE_NAMES.POLARIS_WC ? cy.get("form s-button[type=submit]") : cy.get("form [type=submit][aria-hidden!=true]");

  it("builds forms for global actions and submits, showing a success message", () => {
    cy.mountWithWrapper(<AutoForm action={api.flipAll} />, wrapper);

    getInputByField("title").should("have.value", "");
    getInputByField("inventoryCount").should("have.value", "");

    typeInField("title", "foo");
    typeInField("inventoryCount", "42");

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

    getSubmitBtn().click(clickOptions);
    cy.wait("@globalActionCall");

    cy.contains("Flip all succeeded.");

    // Inputs are cleared after submission on global actions
    getInputByField("title").should("have.value", "");
    getInputByField("inventoryCount").should("have.value", "");
  });

  it("builds forms for global actions and submits, showing any errors and allowing resubmission", () => {
    cy.mountWithWrapper(<AutoForm action={api.flipAll} />, wrapper);

    getInputByField("title").should("have.value", "");
    getInputByField("inventoryCount").should("have.value", "");

    typeInField("title", "foo");
    typeInField("inventoryCount", "42");

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

    getSubmitBtn().click(clickOptions);
    cy.wait("@globalActionFirstCall");

    cy.contains("something went wrong internally");

    getInputByField("title").should("have.value", "foo");
    getInputByField("inventoryCount").should("have.value", "42");

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

    getSubmitBtn().click(clickOptions);
    cy.wait("@globalActionSecondCall");

    cy.contains("Flip all succeeded.");
  });
});
