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

  const submit = (modelName: string) => {
    cy.get("form [type=submit][aria-hidden!=true]").click();
    cy.contains(`Saved ${modelName} successfully`);
  };

  it("only allows existing passwords to be replaced, not edited", () => {
    cy.mountWithWrapper(<AutoForm action={api.user.update} findBy={"1"} include={["password"]} />, wrapper);

    cy.get(`input[name="user.password"]`).should("be.disabled");
    cy.get(`button[role="passwordEditPasswordButton"]`).first().click();

    const updatedPassword = "abcd1234!@#$";

    // Enabled after clicking the edit button
    cy.get(`input[name="user.password"]`).should("be.enabled");
    cy.get(`input[name="user.password"]`).type(updatedPassword);

    expectUpdateActionSubmissionVariables({ id: "1", user: { password: updatedPassword } }); // Untouched so the password field is not included

    submit("User");
  });

  it("does not submit anything when for update actions when the password fields are untouched", () => {
    cy.mountWithWrapper(<AutoForm action={api.user.update} findBy={"1"} include={["password"]} />, wrapper);

    cy.get(`input[name="user.password"]`).should("be.disabled");

    expectUpdateActionSubmissionVariables({ id: "1", user: {} }); // Untouched so the password field is not included

    submit("User");
  });
});
