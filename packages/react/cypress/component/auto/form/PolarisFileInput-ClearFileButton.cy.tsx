import React from "react";
import { getStadiumModelMetadata, getStadiumRecord } from "../../../../spec/auto/support/stadiumModel.js";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import { api } from "../../../support/api.js";
import { PolarisWrapper } from "../../../support/auto.js";

/**
 * There is an issue possibly related to Cypress or the way we trigger the "clear file button" click event,
 * which causes the button click not to work as expected in Cypress when running the test with other tests in the same file.
 *
 * So we have to run this test in a separate file to avoid the issue.
 */
describe("PolarisFileInput - clear file button", () => {
  const getSubmitButton = () => {
    return cy.get("form [type=submit][aria-hidden!=true]");
  };

  const interceptModelUpdateActionMetadata = (validations: any[]) => {
    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.endpoint}?operation=ModelActionMetadata`,
      },
      {
        data: getStadiumModelMetadata(
          {
            name: "Update",
            apiIdentifier: "update",
            operatesWithRecordIdentity: true,
          },
          getInputFieldsWithCustomValidations(validations)
        ),
      }
    ).as("ModelUpdateActionMetadata");
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
  });

  describe("clearing the file value", () => {
    beforeEach(() => {
      cy.intercept(
        {
          method: "POST",
          url: `${api.connection.endpoint}?operation=stadium`,
        },
        {
          data: getStadiumRecord(),
        }
      ).as("getStadium");
    });

    it("should clear the file value when clicking the delete file icon and the field is not required", () => {
      interceptModelUpdateActionMetadata([]);

      cy.mountWithWrapper(<PolarisAutoForm action={api.game.stadium.create} findBy="42" />, PolarisWrapper);

      cy.get("#clear-file-photo").should("exist");

      cy.get("#clear-file-photo").click();
      cy.get(".Polaris-Thumbnail").should("not.exist");
      cy.get(".Polaris-DropZone-FileUpload").should("exist");

      getSubmitButton().click();
      cy.get("@createStadium").its("request.body.variables.stadium").should("deep.equal", {
        photo: null,
      });
    });
  });
});

const getInputFieldsWithCustomValidations = (validations: any[]) => {
  return [
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
            name: "Photo",
            apiIdentifier: "photo",
            fieldType: "File",
            requiredArgumentForInput: false,
            sortable: false,
            filterable: false,
            __typename: "GadgetModelField",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
              fieldType: "File",
              validations,
            },
          },
        ],
      },
      __typename: "GadgetObjectField",
    },
  ];
};
