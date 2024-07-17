import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";

describeForEachAutoAdapter("AutoForm", ({ name, adapter: { AutoForm }, wrapper }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  const expectUpdateActionSubmissionVariables = (expectedQueryValue?: any) => {
    cy.intercept({ method: "POST", url: `${api.connection.endpoint}?operation=updateUser` }, (req) => {
      // eslint-disable-next-line
      expect(req.body.variables).to.deep.equal(expectedQueryValue);

      // The response content doesn't matter for the tests
      req.reply({
        data: {
          updateUser: {
            success: true,
            errors: null,
            user: {},
          },
        },
      });
    }).as("updateUser");
  };

  const submit = (modelName: string, expectedQueryValue?: any) => {
    cy.get("form [type=submit][aria-hidden!=true]").click();

    cy.wait("@updateUser");
    cy.get("@updateUser").its("request.body.variables").should("deep.equal", expectedQueryValue);

    cy.contains(`Saved ${modelName} successfully`);
  };

  it("only allows existing passwords to be replaced, not edited", () => {
    const updatedPassword = "abcd1234!@#$";
    const expectedVariables = { id: "1", user: { password: updatedPassword } };
    expectUpdateActionSubmissionVariables(expectedVariables); // Password field is changed and included

    cy.mountWithWrapper(<AutoForm action={api.user.update} findBy={"1"} include={["password"]} />, wrapper);

    cy.get(`input[name="user.password"]`).should("be.disabled");
    cy.get(`button[role="passwordEditPasswordButton"]`).first().click();

    // Enabled after clicking the edit button
    cy.get(`input[name="user.password"]`).should("be.enabled");
    cy.get(`input[name="user.password"]`).type(updatedPassword);

    submit("User", expectedVariables);
  });

  it("does not submit anything when for update actions when the password fields are untouched", () => {
    const expectedVariables = { id: "1", user: {} };
    expectUpdateActionSubmissionVariables(expectedVariables); // Untouched so the password field is not included

    cy.mountWithWrapper(<AutoForm action={api.user.update} findBy={"1"} include={["password"]} />, wrapper);

    cy.get(`input[name="user.password"]`).should("be.disabled");

    submit("User", expectedVariables);
  });
});
