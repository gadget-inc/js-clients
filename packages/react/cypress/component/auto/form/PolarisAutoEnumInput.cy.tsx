import React from "react";
import { getStadiumRecord } from "../../../../spec/auto/support/stadiumModel.js";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import { api } from "../../../support/api.js";
import { PolarisWrapper } from "../../../support/auto.js";

describe("PolarisEnumInput", () => {
  const blurComboboxes = () => {
    cy.get("#type-combobox-textfield").blur({ force: true });
    cy.get("#tags-combobox-textfield").blur({ force: true });
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

    cy.mountWithWrapper(<PolarisAutoForm action={api.game.stadium.create} />, PolarisWrapper);
    cy.get("#type-combobox-textfield").click();
    cy.contains("football").should("exist");
    cy.contains("basketball").should("exist");
    cy.contains("baseball").should("exist");
    // Close the "type" dropdown
    blurComboboxes();

    cy.get("#tags-combobox-textfield").click();
    cy.contains("hello").should("exist");
    cy.contains("world").should("exist");
  });

  describe("searching for an option", () => {
    it("should show the selected value in the dropdown for single select enum", () => {
      cy.mockModelActionMetadata(api, baseModelActionMetadata);

      cy.mountWithWrapper(<PolarisAutoForm action={api.game.stadium.create} />, PolarisWrapper);
      cy.get("#type-combobox-textfield").click();
      cy.contains("football").click();
      cy.get(".Polaris-InlineStack").should("contain", "football");

      cy.get("#tags-combobox-textfield").click();
      cy.contains("hello").parent().parent().click();
      cy.get(".Polaris-InlineStack").should("contain", "hello");
      cy.get(".Polaris-InlineStack").should("not.contain", "world");

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

      cy.mountWithWrapper(<PolarisAutoForm action={api.game.stadium.create} />, PolarisWrapper);
      // For single select enums
      cy.get("#type-combobox-textfield").type("foot");

      // The dropdown items should be filtered
      cy.contains("football").should("exist");
      cy.contains("basketball").should("not.exist");
      cy.contains("baseball").should("not.exist");

      cy.contains("football").click();
      cy.get(".Polaris-InlineStack").should("contain", "football");

      // For multi-select enums
      cy.get("#tags-combobox-textfield").type("hel");

      // The dropdown items should be filtered
      cy.contains("hello").should("exist");
      cy.contains("world").should("not.exist");

      cy.contains("hello").parent().parent().click();
      cy.get(".Polaris-InlineStack").should("contain", "hello");

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
      cy.mockModelActionMetadata(api, {
        ...baseModelActionMetadata,
        inputFields: [
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
      });

      cy.mountWithWrapper(<PolarisAutoForm action={api.game.stadium.create} />, PolarisWrapper);
      cy.get("#type-combobox-textfield").type("extra");
      cy.contains(`Add "extra"`).click();
      cy.get(".Polaris-InlineStack").should("contain", "extra");

      cy.get("#tags-combobox-textfield").type("more");
      cy.contains(`Add "more"`).click();
      cy.get(".Polaris-InlineStack").should("contain", "more");

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
      });

      cy.mountWithWrapper(<PolarisAutoForm action={api.game.stadium.create} />, PolarisWrapper);
      cy.get("#type-combobox-textfield").type("hello");
      cy.contains(`Add "hello"`).should("not.exist");
      cy.contains(`No options found matching "hello"`).should("exist");

      blurComboboxes();

      cy.get("#tags-combobox-textfield").type("nope");
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

      cy.mountWithWrapper(<PolarisAutoForm action={api.game.stadium.update} findBy="42" />, PolarisWrapper);
      cy.get(".Polaris-InlineStack").should("contain", "football");
      cy.get(".Polaris-InlineStack").should("contain", "hello");
      cy.get(".Polaris-InlineStack").should("contain", "world");
    });

    it("should be able to clear the value", () => {
      cy.mockModelActionMetadata(api, {
        ...baseModelActionMetadata,
        action: {
          apiIdentifier: "update",
          operatesWithRecordIdentity: true,
        },
      });

      cy.mountWithWrapper(<PolarisAutoForm action={api.game.stadium.update} findBy="42" />, PolarisWrapper);
      cy.get("#type-combobox-textfield").click();
      cy.get('[aria-label="Remove football"]').click();

      blurComboboxes();

      cy.get("#tags-combobox-textfield").click();
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
