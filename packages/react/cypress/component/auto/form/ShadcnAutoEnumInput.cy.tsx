import React from "react";
import { elements } from "../../../../spec/auto/shadcn-defaults/index.js";
import { getStadiumRecord } from "../../../../spec/auto/support/stadiumModel.js";
import { makeAutocomponents } from "../../../../src/auto/shadcn/index.js";
import { api } from "../../../support/api.js";
import { ShadcnWrapper } from "../../../support/auto.js";
import { baseModelActionMetadata, baseTagsInputField, baseTypeInputField } from "./PolarisAutoEnumInput.cy.js";

const ShadcnAutoForm = makeAutocomponents(elements).AutoForm;

describe("ShadcnAutoEnumInput", () => {
  const blurComboboxes = () => {
    cy.get("body").click({ force: true });
  };

  const checkBadgeWithButton = (value: string) => {
    cy.get(`div`)
      .contains(value)
      .should("exist")
      .within(() => {
        cy.get(`button`).should("exist").and("be.visible");
      });
  };

  beforeEach(() => {
    cy.viewport("macbook-13");

    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.endpoint}?operation=createStadium`,
      },
      {
        data: {
          game: {
            createStadium: {
              success: true,
              errors: null,
              stadium: {}, // The response content doesn't matter for the tests
              __typename: "CreateGameStadiumResult",
            },
            __typename: "GameMutations",
          },
        },
      }
    ).as("createStadium");

    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.endpoint}?operation=updateStadium`,
      },
      {
        data: {
          game: {
            createStadium: {
              success: true,
              errors: null,
              stadium: {}, // The response content doesn't matter for the tests
              __typename: "CreateGameStadiumResult",
            },
            __typename: "GameMutations",
          },
        },
      }
    ).as("updateStadium");
  });

  it("should include the enum options in the dropdown", () => {
    cy.mockModelActionMetadata(api, baseModelActionMetadata);

    cy.mountWithWrapper(<ShadcnAutoForm action={api.game.stadium.create} />, ShadcnWrapper);
    cy.get(`[cmdk-input]`).first().click(); // Open dropdown
    cy.get('[cmdk-item][data-value="football"]').should("exist");
    cy.get('[cmdk-item][data-value="basketball"]').should("exist");
    cy.get('[cmdk-item][data-value="baseball"]').should("exist");
    blurComboboxes(); // Close dropdown

    cy.get(`[cmdk-input]`).eq(1).click(); // Open dropdown for tags
    cy.get('[cmdk-item][data-value="hello"]').should("exist");
    cy.get('[cmdk-item][data-value="world"]').should("exist");
  });

  describe("searching for an option", () => {
    it("should show the selected value in the dropdown for single select enum", () => {
      cy.mockModelActionMetadata(api, baseModelActionMetadata);

      cy.mountWithWrapper(<ShadcnAutoForm action={api.game.stadium.create} />, ShadcnWrapper);
      cy.get("[cmdk-input]").first().click();
      cy.get('[cmdk-item][data-value="football"]').click();
      cy.get('[role="presentation"]').should("contain", "football");

      cy.get("[cmdk-input]").eq(1).click();
      cy.get('[cmdk-item][data-value="hello"]').click();
      cy.get('[cmdk-item][data-value="hello"][data-selected="true"]').should("exist");
      cy.get('[cmdk-item][data-value="world"][data-selected="true"]').should("not.exist");

      blurComboboxes();

      cy.getSubmitButton().click();
      cy.get("@createStadium")
        .its("request.body.variables.stadium")
        .should("deep.equal", {
          type: "football",
          tags: ["hello"],
        });
    });

    it("should allow searching for options in the dropdown", () => {
      cy.mockModelActionMetadata(api, baseModelActionMetadata);

      cy.mountWithWrapper(<ShadcnAutoForm action={api.game.stadium.create} />, ShadcnWrapper);
      // For single select enums
      cy.get("[cmdk-input]").first().type("foot");

      // The dropdown items should be filtered
      cy.get('[cmdk-item][data-value="football"]').should("exist");
      cy.get('[cmdk-item][data-value="basketball"]').should("not.exist");
      cy.get('[cmdk-item][data-value="baseball"]').should("not.exist");

      cy.get('[cmdk-item][data-value="football"]').click();
      cy.get('[role="presentation"]').should("contain", "football");

      // For multi-select enums
      cy.get("[cmdk-input]").eq(1).type("hel");

      // The dropdown items should be filtered
      cy.get('[cmdk-item][data-value="hello"]').should("exist");
      cy.get('[cmdk-item][data-value="world"]').should("not.exist");

      cy.get('[cmdk-item][data-value="hello"]').click();
      // Verify that the chip/tag appears after selection
      checkBadgeWithButton("hello");

      cy.get("[cmdk-empty]").should("contain", 'Add "hel"');

      blurComboboxes();

      cy.getSubmitButton().click();
      cy.get("@createStadium")
        .its("request.body.variables.stadium")
        .should("deep.equal", {
          type: "football",
          tags: ["hello"],
        });
    });
  });

  describe("allow other options", () => {
    it("should allow adding an option if allowOther is enabled", () => {
      const mockedMetadata = {
        ...baseModelActionMetadata,
        inputFields: [
          {
            name: "Stadium",
            apiIdentifier: "stadium",
            fieldType: "Object",
            requiredArgumentForInput: false,
            configuration: {
              __typename: "GadgetObjectFieldConfig",
              fieldType: "Object",
              validations: [],
              name: null,
              fields: [
                {
                  ...baseTypeInputField,
                  configuration: {
                    ...baseTypeInputField.configuration,
                    allowOther: true,
                  },
                },
                {
                  ...baseTagsInputField,
                  configuration: {
                    ...baseTagsInputField.configuration,
                    allowOther: true,
                  },
                },
              ],
            },
          },
        ],
      };

      cy.mockModelActionMetadata(api, mockedMetadata);

      cy.mountWithWrapper(<ShadcnAutoForm action={api.game.stadium.create} />, ShadcnWrapper);
      cy.get("[cmdk-input]").first().type("extra");
      cy.contains(`Add "extra"`).click();

      checkBadgeWithButton("extra");

      cy.get("[cmdk-input]").eq(1).type("more");
      cy.contains(`Add "more"`).click();

      checkBadgeWithButton("more");

      blurComboboxes();

      cy.getSubmitButton().click();
      cy.get("@createStadium")
        .its("request.body.variables.stadium")
        .should("deep.equal", {
          type: "extra",
          tags: ["more"],
        });
    });

    it("should not allow adding an option if allowOther is disabled", () => {
      cy.mockModelActionMetadata(api, {
        ...baseModelActionMetadata,
        inputFields: [
          {
            name: "Stadium",
            apiIdentifier: "stadium",
            fieldType: "Object",
            requiredArgumentForInput: false,
            configuration: {
              __typename: "GadgetObjectFieldConfig",
              fieldType: "Object",
              validations: [],
              name: null,
              fields: [
                {
                  ...baseTypeInputField,
                  configuration: {
                    ...baseTypeInputField.configuration,
                    allowOther: false,
                  },
                },
                {
                  ...baseTagsInputField,
                  configuration: {
                    ...baseTagsInputField.configuration,
                    allowOther: false,
                  },
                },
              ],
            },
          },
        ],
      });

      cy.mountWithWrapper(<ShadcnAutoForm action={api.game.stadium.create} />, ShadcnWrapper);
      cy.get("[cmdk-input]").first().type("hello");
      cy.contains(`Add "hello"`).should("not.exist");
      cy.contains(`No options found matching "hello"`).should("exist");

      blurComboboxes();

      cy.get("[cmdk-input]").eq(1).type("nope");
      cy.contains(`Add "nope"`).should("not.exist");
      cy.contains(`No options found matching "nope"`).should("exist");
    });
  });

  describe("pre-filled value", () => {
    beforeEach(() => {
      cy.intercept(
        {
          method: "POST",
          url: `${api.connection.endpoint}?operation=stadium`,
        },
        {
          data: getStadiumRecord({
            type: "football",
            tags: ["hello", "world"],
          }),
        }
      ).as("getStadium");
    });

    it("should automatically set the pre-filled value when the form is pre-filled", () => {
      cy.mockModelActionMetadata(api, {
        ...baseModelActionMetadata,
        action: {
          apiIdentifier: "update",
          operatesWithRecordIdentity: true,
        },
      });

      cy.mountWithWrapper(<ShadcnAutoForm action={api.game.stadium.update} findBy="42" />, ShadcnWrapper);
      checkBadgeWithButton("football");

      checkBadgeWithButton("hello");

      checkBadgeWithButton("world");
    });

    it("should be able to clear the value", () => {
      cy.mockModelActionMetadata(api, {
        ...baseModelActionMetadata,
        action: {
          apiIdentifier: "update",
          operatesWithRecordIdentity: true,
        },
      });

      cy.mountWithWrapper(<ShadcnAutoForm action={api.game.stadium.update} findBy="42" />, ShadcnWrapper);
      cy.get("[cmdk-input]").first().click();
      cy.get('[aria-label="Remove football"]').click();

      blurComboboxes();

      cy.get("[cmdk-input]").eq(1).click();
      cy.get('[aria-label="Remove hello"]').click();
      cy.get('[aria-label="Remove world"]').click();

      blurComboboxes();

      cy.getSubmitButton().click();
      cy.get("@updateStadium").its("request.body.variables.stadium").should("deep.equal", {
        type: null,
        tags: [],
      });
    });
  });
});
