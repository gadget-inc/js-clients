import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";
import { SUITE_NAMES } from "../../../support/constants.js";

describeForEachAutoAdapter("AutoPasswordInput", ({ name, adapter: { AutoForm }, wrapper, clickOptions }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  /** Polaris WC: check disabled/enabled on the visible WC; both adapters have input[name="user.password"] for typing (Polaris WC has a hidden native input for form registration). */
  const getPasswordInput = () =>
    name === SUITE_NAMES.POLARIS_WC ? cy.get('[id="user.password"]').shadow().find("input") : cy.get('input[name="user.password"]');

  const expectUpdateActionSubmissionVariables = (expectedQueryValue?: any) => {
    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.endpoint}?operation=updateUser`,
      },
      (req) => {
        const variables = req.body.variables;
        // eslint-disable-next-line
        expect(variables).to.deep.equal(expectedQueryValue);

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

    // Use the same selector and chain for each adapter so we click the element we assert on
    if (name === SUITE_NAMES.POLARIS_WC) {
      // s-button (custom element) does not trigger native form submit when clicked; submit the form directly so onSubmit runs
      cy.get("form").submit();
    } else {
      cy.get("form [type=submit][aria-hidden!=true]").should("not.be.disabled").click(clickOptions);
    }

    cy.wait("@updateUser");
    cy.get("@updateUser").its("request.body.variables").should("deep.equal", expectedQueryValue);

    cy.contains(`Saved ${modelName} successfully`, { timeout: 10000 });
  };

  it("only allows existing passwords to be replaced, not edited", () => {
    const updatedPassword = "abcd1234!@#$";
    const expectedVariables = { id: "1", user: { password: updatedPassword } };

    expectUpdateActionSubmissionVariables(expectedVariables); // Password field is changed and included

    cy.mountWithWrapper(<AutoForm action={api.user.update} findBy={"1"} include={["password"]} />, wrapper);

    getPasswordInput().should("be.disabled");
    cy.get('[role="passwordEditPasswordButton"]').first().click(clickOptions);

    // Enabled after clicking the edit button
    getPasswordInput().should("be.enabled");

    if (name === SUITE_NAMES.POLARIS_WC) {
      // Hidden native input may be covered; use force so Cypress can type into it. Clear then type so full value is set. Blur so the field is marked touched and included in submit.
      cy.get('input[name="user.password"]').click({ force: true }).clear().type(updatedPassword).blur();
    } else {
      cy.clickAndType('input[name="user.password"]', updatedPassword);
    }

    submit("User", expectedVariables);
  });

  it("does not submit anything when for update actions when the password fields are untouched", () => {
    const expectedVariables = { id: "1", user: {} };
    expectUpdateActionSubmissionVariables(expectedVariables); // Untouched so the password field is not included
    cy.mountWithWrapper(<AutoForm action={api.user.update} findBy={"1"} include={["password"]} />, wrapper);

    getPasswordInput().should("be.disabled");

    submit("User", expectedVariables);
  });
});
