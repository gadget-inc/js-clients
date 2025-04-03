import React from "react";
import { apiTriggerOnly } from "../../../../spec/auto/support/Triggers.js";
import { getStadiumRecord } from "../../../../spec/auto/support/stadiumModel.js";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";
import { SUITE_NAMES } from "../../../support/constants.js";

describeForEachAutoAdapter("AutoEnumInput", ({ name, adapter: { AutoForm }, wrapper }) => {
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

  const getInputSelector = (id: string) => {
    return name == SUITE_NAMES.SHADCN ? `[data-testid='${id}-combobox-textfield']` : `#${id}-combobox-textfield`;
  };

  const selectedItemsSelector = name == SUITE_NAMES.SHADCN ? `[role="presentation"]` : ".Polaris-InlineStack";

  it("should include the enum options in the dropdown", () => {
    cy.mockModelActionMetadata(api, baseModelActionMetadata);

    cy.mountWithWrapper(<AutoForm action={api.game.stadium.create} />, wrapper);
    cy.get(getInputSelector("type")).click();
    cy.contains("football").should("exist");
    cy.contains("basketball").should("exist");
    cy.contains("baseball").should("exist");
    // Close the "type" dropdown
    blurComboboxes();

    cy.get(getInputSelector("tags")).click();
    cy.contains("hello").should("exist");
    cy.contains("world").should("exist");
  });

  describe("searching for an option", () => {
    it("should show the selected value in the dropdown for single select enum", () => {
      cy.mockModelActionMetadata(api, baseModelActionMetadata);

      cy.mountWithWrapper(<AutoForm action={api.game.stadium.create} />, wrapper);
      cy.get(getInputSelector("type")).click();
      cy.contains("football").click();
      cy.get(selectedItemsSelector).should("contain", "football");

      if (name == SUITE_NAMES.SHADCN) {
        blurComboboxes();
        cy.get("[cmdk-input]").eq(1).click();
        cy.get('[cmdk-item][data-value="hello-hello"]').click();
        blurComboboxes();
        cy.get("[cmdk-input]").eq(1).click();
        cy.get('[cmdk-item][data-value="hello-hello"][data-selected="true"]').should("exist");
        cy.get('[cmdk-item][data-value="world-world"][data-selected="true"]').should("not.exist");
      } else {
        cy.get(getInputSelector("tags")).click();
        cy.contains("hello").parent().parent().click();
        cy.get(selectedItemsSelector).should("contain", "hello");
        cy.get(selectedItemsSelector).should("not.contain", "world");
      }

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

      cy.mountWithWrapper(<AutoForm action={api.game.stadium.create} />, wrapper);
      // For single select enums
      cy.get(getInputSelector("type")).type("foot");

      // The dropdown items should be filtered
      cy.contains("football").should("exist");
      cy.contains("basketball").should("not.exist");
      cy.contains("baseball").should("not.exist");

      cy.contains("football").click();
      cy.get(selectedItemsSelector).should("contain", "football");

      blurComboboxes();

      // For multi-select enums
      cy.get(getInputSelector("tags")).type("hel");

      // The dropdown items should be filtered
      cy.contains("hello").should("exist");
      cy.contains("world").should("not.exist");

      if (name == SUITE_NAMES.SHADCN) {
        cy.get('[cmdk-item][data-value="hello-hello"]').click();
        // Verify that the chip/tag appears after selection
        checkBadgeWithButton("hello");

        cy.get("[cmdk-input]").eq(1).click();

        cy.contains('Add "hel"').should("exist");
      } else {
        cy.contains("hello").parent().parent().click();
        cy.get(selectedItemsSelector).should("contain", "hello");
      }

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

      cy.mountWithWrapper(<AutoForm action={api.game.stadium.create} />, wrapper);
      cy.get(getInputSelector("type")).type("extra");
      cy.contains(`Add "extra"`).click();
      cy.get(selectedItemsSelector).should("contain", "extra");

      cy.get(getInputSelector("tags")).type("more");
      cy.contains(`Add "more"`).click();
      cy.get(selectedItemsSelector).should("contain", "more");

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

      cy.mountWithWrapper(<AutoForm action={api.game.stadium.create} />, wrapper);
      cy.get(getInputSelector("type")).type("hello");
      cy.contains(`Add "hello"`).should("not.exist");
      cy.contains(`No results`).should("exist");

      blurComboboxes();

      cy.get(getInputSelector("tags")).type("nope");
      cy.contains(`Add "nope"`).should("not.exist");
      cy.contains(`No results`).should("exist");
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

      cy.mountWithWrapper(<AutoForm action={api.game.stadium.update} findBy="42" />, wrapper);

      if (name == SUITE_NAMES.SHADCN) {
        checkBadgeWithButton("football");
        checkBadgeWithButton("hello");
        checkBadgeWithButton("world");
      } else {
        cy.get(".Polaris-InlineStack").should("contain", "football");
        cy.get(".Polaris-InlineStack").should("contain", "hello");
        cy.get(".Polaris-InlineStack").should("contain", "world");
      }
    });

    it("should be able to clear the value", () => {
      cy.mockModelActionMetadata(api, {
        ...baseModelActionMetadata,
        action: {
          apiIdentifier: "update",
          operatesWithRecordIdentity: true,
        },
      });

      cy.mountWithWrapper(<AutoForm action={api.game.stadium.update} findBy="42" />, wrapper);
      cy.get(getInputSelector("type")).click();
      cy.get('[aria-label="Remove football"]').click();

      blurComboboxes();

      cy.get(getInputSelector("tags")).click();
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

const baseTypeInputField = {
  name: "Type",
  apiIdentifier: "type",
  fieldType: "Enum",
  requiredArgumentForInput: false,
  sortable: true,
  filterable: true,
  configuration: {
    __typename: "GadgetEnumConfig",
    fieldType: "Enum",
    validations: [],
    allowMultiple: false,
    allowOther: true,
    options: [
      {
        name: "football",
      },
      {
        name: "basketball",
      },
      {
        name: "baseball",
      },
    ],
  },
};

const baseTagsInputField = {
  name: "Tags",
  apiIdentifier: "tags",
  fieldType: "Enum",
  requiredArgumentForInput: false,
  sortable: true,
  filterable: true,
  configuration: {
    __typename: "GadgetEnumConfig",
    fieldType: "Enum",
    validations: [],
    allowMultiple: true,
    allowOther: true,
    options: [
      {
        name: "hello",
      },
      {
        name: "world",
      },
    ],
  },
};

const baseModelActionMetadata = {
  modelName: "Stadium",
  modelApiIdentifier: "stadium",
  action: {
    apiIdentifier: "create",
    operatesWithRecordIdentity: false,
  },
  triggers: apiTriggerOnly,
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
        fields: [baseTypeInputField, baseTagsInputField],
      },
      __typename: "GadgetObjectField",
    },
  ],
};
