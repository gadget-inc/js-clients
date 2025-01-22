import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";

describeForEachAutoAdapter("AutoPasswordInput", ({ name, adapter: { AutoForm }, wrapper }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  const expectUpdateActionSubmissionVariables = (expectedQueryValue?: any) => {
    cy.intercept(
      {
        times: 1,
        method: "POST",
        url: `${api.connection.endpoint}?operation=updateUser`,
      },
      (req) => {
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
      }
    ).as("updateUser");
  };

  const submit = (modelName: string, expectedQueryValue?: any) => {
    cy.wait(100);

    cy.get("form [type=submit][aria-hidden!=true]").should("not.be.disabled");
    cy.get("form [type=submit][aria-hidden!=true]").click();

    cy.wait("@updateUser");
    cy.get("@updateUser").its("request.body.variables").should("deep.equal", expectedQueryValue);

    cy.contains(`Saved ${modelName} successfully`);
  };

  it("only allows existing passwords to be replaced, not edited", () => {
    const updatedPassword = "abcd1234!@#$";
    const expectedVariables = { id: "1", user: { password: updatedPassword } };

    cy.mountWithWrapper(<AutoForm action={api.user.update} findBy={"1"} include={["password"]} />, wrapper);

    cy.get(`input[name="user.password"]`).should("be.disabled");
    cy.get(`button[role="passwordEditPasswordButton"]`).first().click();

    // Enabled after clicking the edit button
    cy.get(`input[name="user.password"]`).should("be.enabled");

    cy.clickAndType(`input[name="user.password"]`, updatedPassword);

    expectUpdateActionSubmissionVariables(expectedVariables); // Password field is changed and included
    submit("User", expectedVariables);
  });

  it("does not submit anything when for update actions when the password fields are untouched", () => {
    const expectedVariables = { id: "1", user: {} };
    cy.mountWithWrapper(<AutoForm action={api.user.update} findBy={"1"} include={["password"]} />, wrapper);

    cy.get(`input[name="user.password"]`).should("be.disabled");

    expectUpdateActionSubmissionVariables(expectedVariables); // Untouched so the password field is not included
    submit("User", expectedVariables);
  });
});
