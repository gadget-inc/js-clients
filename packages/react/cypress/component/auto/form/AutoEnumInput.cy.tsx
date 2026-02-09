/* eslint-disable jest/valid-expect */
import React from "react";
import { apiTriggerOnly } from "../../../../spec/auto/support/Triggers.js";
import { getStadiumRecord } from "../../../../spec/auto/support/stadiumModel.js";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";
import { SUITE_NAMES } from "../../../support/constants.js";

describeForEachAutoAdapter("AutoEnumInput", ({ name, adapter: { AutoForm }, wrapper, clickOptions }) => {
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
    if (name === SUITE_NAMES.SHADCN) return `[data-testid='${id}-combobox-textfield']`;
    if (name === SUITE_NAMES.POLARIS_WC) return null; // use getEnumInput chainable instead
    return `#${id}-combobox-textfield`;
  };

  /** For Polaris WC the combobox input is inside s-text-field shadow DOM (id is ${id}-combobox-textfield-input). */
  const getEnumInput = (id: string) => {
    if (name === SUITE_NAMES.POLARIS_WC) {
      return cy.get(`s-text-field#${id}-combobox-textfield-input`).shadow().find("input");
    }
    return cy.get(getInputSelector(id)!);
  };

  const getSelectedItemsContainer = (id: string) => {
    if (name === SUITE_NAMES.POLARIS_WC) {
      return cy.get(`s-text-field#${id}-combobox-textfield-input`).shadow();
    }
    return cy.get(selectedItemsSelector);
  };

  /**
   * For Polaris WC, .should("contain", text) fails on shadow root.
   * Single-select: selected value is in the <input> value property.
   * Multi-select: selected values are in badge text content inside shadow DOM.
   * We check both to handle either case.
   */
  const assertSelectedItemsContain = (id: string, text: string) => {
    if (name === SUITE_NAMES.POLARIS_WC) {
      getSelectedItemsContainer(id).should(($shadow) => {
        const inputVal = String($shadow.find("input").val() || "");
        const textContent = $shadow.text();
        expect(inputVal + " " + textContent).to.include(text);
      });
    } else {
      cy.get(selectedItemsSelector).should("contain", text);
    }
  };

  const assertSelectedItemsNotContain = (id: string, text: string) => {
    if (name === SUITE_NAMES.POLARIS_WC) {
      getSelectedItemsContainer(id).should(($shadow) => {
        const inputVal = String($shadow.find("input").val() || "");
        const textContent = $shadow.text();
        expect(inputVal).to.not.include(text);
        expect(textContent).to.not.include(text);
      });
    } else {
      cy.get(selectedItemsSelector).should("not.contain", text);
    }
  };

  const selectedItemsSelector =
    name === SUITE_NAMES.SHADCN ? `[role="presentation"]` : name === SUITE_NAMES.POLARIS_WC ? "form" : ".Polaris-InlineStack";

  const getSubmitBtn = () => (name === SUITE_NAMES.POLARIS_WC ? cy.get("form s-button[type=submit]") : cy.getSubmitButton());

  it("should include the enum options in the dropdown", () => {
    cy.mockModelActionMetadata(api, baseModelActionMetadata);

    cy.mountWithWrapper(<AutoForm action={api.game.stadium.create} />, wrapper);
    getEnumInput("type").click(clickOptions);
    cy.contains("football").should("exist");
    cy.contains("basketball").should("exist");
    cy.contains("baseball").should("exist");
    // Close the "type" dropdown
    blurComboboxes();

    getEnumInput("tags").click(clickOptions);
    cy.contains("hello").should("exist");
    cy.contains("world").should("exist");
  });

  describe("searching for an option", () => {
    it("should show the selected value in the dropdown for single select enum", () => {
      cy.mockModelActionMetadata(api, baseModelActionMetadata);

      cy.mountWithWrapper(<AutoForm action={api.game.stadium.create} />, wrapper);
      getEnumInput("type").click(clickOptions);
      cy.contains("football").click(clickOptions);
      assertSelectedItemsContain("type", "football");

      if (name == SUITE_NAMES.SHADCN) {
        blurComboboxes();
        cy.get("[cmdk-input]").eq(1).click(clickOptions);
        cy.get('[cmdk-item][data-value="hello-hello"]').click(clickOptions);
        blurComboboxes();
        cy.get("[cmdk-input]").eq(1).click(clickOptions);
        cy.get('[cmdk-item][data-value="hello-hello"][data-selected="true"]').should("exist");
        cy.get('[cmdk-item][data-value="world-world"][data-selected="true"]').should("not.exist");
      } else if (name === SUITE_NAMES.POLARIS_WC) {
        getEnumInput("tags").click(clickOptions);
        cy.get('[role="option"]').contains("hello").click(clickOptions);
        assertSelectedItemsContain("tags", "hello");
        assertSelectedItemsNotContain("tags", "world");
      } else {
        cy.get(getInputSelector("tags")!).click(clickOptions);
        cy.contains("hello").parent().parent().click(clickOptions);
        cy.get(selectedItemsSelector).should("contain", "hello");
        cy.get(selectedItemsSelector).should("not.contain", "world");
      }

      blurComboboxes();

      getSubmitBtn().click(clickOptions);
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
      getEnumInput("type").type("foot", clickOptions);

      // The dropdown items should be filtered
      cy.contains("football").should("exist");
      cy.contains("basketball").should("not.exist");
      cy.contains("baseball").should("not.exist");

      cy.contains("football").click(clickOptions);
      assertSelectedItemsContain("type", "football");

      blurComboboxes();

      // For multi-select enums
      getEnumInput("tags").type("hel", clickOptions);

      // The dropdown items should be filtered
      cy.contains("hello").should("exist");
      cy.contains("world").should("not.exist");

      if (name == SUITE_NAMES.SHADCN) {
        cy.get('[cmdk-item][data-value="hello-hello"]').click(clickOptions);
        // Verify that the chip/tag appears after selection
        checkBadgeWithButton("hello");

        cy.get("[cmdk-input]").eq(1).click(clickOptions);

        cy.contains('Add "hel"').should("exist");
      } else if (name === SUITE_NAMES.POLARIS_WC) {
        cy.get('[role="option"]').contains("hello").click(clickOptions);
        assertSelectedItemsContain("tags", "hello");
      } else {
        cy.contains("hello").parent().parent().click(clickOptions);
        cy.get(selectedItemsSelector).should("contain", "hello");
      }

      blurComboboxes();

      getSubmitBtn().click(clickOptions);
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
      getEnumInput("type").type("extra", clickOptions);
      cy.contains(/Add "extra"/).click(clickOptions);
      assertSelectedItemsContain("type", "extra");

      getEnumInput("tags").type("more", clickOptions);
      cy.contains(/Add "more"/).click(clickOptions);
      assertSelectedItemsContain("tags", "more");

      blurComboboxes();

      getSubmitBtn().click(clickOptions);
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
      getEnumInput("type").type("hello", clickOptions);
      cy.contains(`Add "hello"`).should("not.exist");
      cy.contains(`No results`).should("exist");

      blurComboboxes();

      getEnumInput("tags").type("nope", clickOptions);
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
      } else if (name === SUITE_NAMES.POLARIS_WC) {
        assertSelectedItemsContain("type", "football");
        assertSelectedItemsContain("tags", "hello");
        assertSelectedItemsContain("tags", "world");
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
      getEnumInput("type").click(clickOptions);
      if (name === SUITE_NAMES.POLARIS_WC) {
        // Single-select enum shows value in input only (no badge); clear the input to clear selection
        getEnumInput("type").clear();
      } else {
        cy.get('[aria-label="Remove football"]').click(clickOptions);
      }

      blurComboboxes();

      getEnumInput("tags").click(clickOptions);
      if (name === SUITE_NAMES.POLARIS_WC) {
        cy.get("s-text-field#tags-combobox-textfield-input")
          .shadow()
          .find("s-badge")
          .contains("hello")
          .parents("s-badge")
          .first()
          .find("div")
          .contains("✕")
          .click(clickOptions);
        cy.get("s-text-field#tags-combobox-textfield-input")
          .shadow()
          .find("s-badge")
          .contains("world")
          .parents("s-badge")
          .first()
          .find("div")
          .contains("✕")
          .click(clickOptions);
      } else {
        cy.get('[aria-label="Remove hello"]').click(clickOptions);
        cy.get('[aria-label="Remove world"]').click(clickOptions);
      }

      blurComboboxes();

      getSubmitBtn().click(clickOptions);
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
