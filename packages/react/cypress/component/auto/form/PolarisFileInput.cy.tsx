import React from "react";
import { getStadiumModelMetadata, getStadiumRecord } from "../../../../spec/auto/support/stadiumModel.js";
import { PolarisAutoFileInput } from "../../../../src/auto/polaris/PolarisAutoFileInput.js";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import { api } from "../../../support/api.js";
import { PolarisWrapper } from "../../../support/auto.js";

describe("PolarisFileInput", () => {
  const getSubmitButton = () => {
    return cy.get("form [type=submit][aria-hidden!=true]");
  };

  const interceptModelCreateActionMetadata = (validations: any[]) => {
    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.endpoint}?operation=ModelActionMetadata`,
      },
      {
        data: getStadiumModelMetadata(
          {
            name: "Create",
            apiIdentifier: "create",
            operatesWithRecordIdentity: false,
          },
          getInputFieldsWithCustomValidations(validations)
        ),
      }
    ).as("ModelCreateActionMetadata");
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
        url: `${api.connection.endpoint}?operation=GetDirectUploadToken`,
      },
      {
        data: {
          gadgetMeta: {
            directUploadToken: {
              url: "https://storage.googleapis.com/gadget-storage-uploads/direct-uploads/token123",
              token: "token123",
              __typename: "DirectUploadToken",
            },
            __typename: "GadgetApplicationMeta",
          },
        },
      }
    ).as("getDirectUploadToken");

    cy.intercept(
      {
        method: "PUT",
        url: "https://storage.googleapis.com/gadget-storage-uploads/direct-uploads/token123", // The URL should be the one returned by the getDirectUploadToken query
      },
      {} // The payload is not important for this test
    ).as("uploadFile");

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

  it("show the image thumbnail after the file is selected", () => {
    interceptModelCreateActionMetadata([]);

    cy.mountWithWrapper(
      <PolarisAutoForm action={api.game.stadium.create}>
        <PolarisAutoFileInput field="photo" />
      </PolarisAutoForm>,
      PolarisWrapper
    );

    cy.get(".Polaris-DropZone-FileUpload").selectFile("./cypress/support/assets/ottawa-stadium.jpg", {
      action: "drag-drop",
    });
    cy.get(".Polaris-InlineStack > div").contains("(Uploading) ottawa-stadium.jpg");
    cy.get(".Polaris-Thumbnail").find("img").should("have.attr", "src").should("contain", "blob:");

    cy.wait("@getDirectUploadToken");
    cy.wait("@uploadFile");

    cy.get(".Polaris-InlineStack > div").contains("ottawa-stadium.jpg").and("not.contain", "(Uploading)");
  });

  describe("uploading file", () => {
    it("should not submit the form when the file is still uploading", () => {
      interceptModelCreateActionMetadata([]);

      cy.intercept(
        {
          method: "PUT",
          url: "https://storage.googleapis.com/gadget-storage-uploads/direct-uploads/token123",
        },
        async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return {};
        }
      ).as("uploadFile");

      cy.mountWithWrapper(<PolarisAutoForm action={api.game.stadium.create} />, PolarisWrapper);

      cy.get(".Polaris-DropZone-FileUpload").selectFile("./cypress/support/assets/ottawa-stadium.jpg", {
        action: "drag-drop",
      });

      getSubmitButton().click();
      cy.get("#photoError").should("contain", `file is still uploading`);

      cy.wait("@uploadFile");
      getSubmitButton().click();
      cy.contains("Saved Stadium successfully");
    });
  });

  describe("validation error", () => {
    describe("image only validation", () => {
      it("should be able to submit the form when the file is an image", () => {
        interceptModelCreateActionMetadata([
          {
            __typename: "GadgetOnlyImageFileFieldValidation",
            name: "Image file",
            specID: "gadget/validation/valid-image-file",
            allowAnimatedImages: false,
          },
        ]);

        cy.mountWithWrapper(<PolarisAutoForm action={api.game.stadium.create} />, PolarisWrapper);

        cy.get(".Polaris-DropZone-FileUpload").should("contain", "Accepts .jpg, .webp, .svg, and .png");

        cy.get(".Polaris-DropZone-FileUpload").selectFile("./cypress/support/assets/ottawa-stadium.jpg", {
          action: "drag-drop",
        });
        cy.wait("@getDirectUploadToken");

        getSubmitButton().click();
        cy.contains("Saved Stadium successfully");
      });
    });

    describe("range validation", () => {
      it("should be able to submit the form when the file size is valid", () => {
        interceptModelCreateActionMetadata([
          {
            __typename: "GadgetRangeFieldValidation",
            name: "File size range",
            specID: "gadget/validation/file-size-range",
            min: 1,
            max: 999999999,
          },
        ]);

        cy.mountWithWrapper(<PolarisAutoForm action={api.game.stadium.create} />, PolarisWrapper);
        cy.get(".Polaris-DropZone-FileUpload").should("contain", "Accepts between 1 B and 1 GB");

        cy.get(".Polaris-DropZone-FileUpload").selectFile("./cypress/support/assets/ottawa-stadium.jpg", {
          action: "drag-drop",
        });
        cy.wait("@getDirectUploadToken");

        getSubmitButton().click();
        cy.contains("Saved Stadium successfully");
      });

      it("should not submit the form when the file size is not within range", () => {
        interceptModelCreateActionMetadata([
          {
            __typename: "GadgetRangeFieldValidation",
            name: "File size range",
            specID: "gadget/validation/file-size-range",
            min: 100,
            max: 1000,
          },
        ]);

        cy.mountWithWrapper(<PolarisAutoForm action={api.game.stadium.create} />, PolarisWrapper);

        cy.get(".Polaris-DropZone-FileUpload").selectFile("./cypress/support/assets/ottawa-stadium.jpg", {
          action: "drag-drop",
        });
        cy.get(".Polaris-InlineStack > div").contains("ottawa-stadium.jpg").and("not.contain", "(Uploading)");
        // The file upload should not start
        cy.get("@getDirectUploadToken").should("be.null");

        getSubmitButton().click();
        cy.get("#photoError").should("contain", `must be a file between 100 B and 1 kB big`);
      });

      it("should not submit the form when the file size is too small", () => {
        interceptModelCreateActionMetadata([
          {
            __typename: "GadgetRangeFieldValidation",
            name: "File size range",
            specID: "gadget/validation/file-size-range",
            min: 9999999,
          },
        ]);

        cy.mountWithWrapper(<PolarisAutoForm action={api.game.stadium.create} />, PolarisWrapper);

        cy.get(".Polaris-DropZone-FileUpload").selectFile("./cypress/support/assets/ottawa-stadium.jpg", {
          action: "drag-drop",
        });
        cy.get(".Polaris-InlineStack > div").contains("ottawa-stadium.jpg").and("not.contain", "(Uploading)");
        // The file upload should not start
        cy.get("@getDirectUploadToken").should("be.null");

        getSubmitButton().click();
        cy.get("#photoError").should("contain", `must be a file larger than than 10 MB`);
      });

      it("should not submit the form when the file size is too large", () => {
        interceptModelCreateActionMetadata([
          {
            __typename: "GadgetRangeFieldValidation",
            name: "File size range",
            specID: "gadget/validation/file-size-range",
            max: 100,
          },
        ]);

        cy.mountWithWrapper(<PolarisAutoForm action={api.game.stadium.create} />, PolarisWrapper);

        cy.get(".Polaris-DropZone-FileUpload").selectFile("./cypress/support/assets/ottawa-stadium.jpg", {
          action: "drag-drop",
        });
        cy.get(".Polaris-InlineStack > div").contains("ottawa-stadium.jpg").and("not.contain", "(Uploading)");
        // The file upload should not start
        cy.get("@getDirectUploadToken").should("be.null");

        getSubmitButton().click();
        cy.get("#photoError").should("contain", `must be a file smaller than 100 B`);
      });
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
          data: getStadiumRecord(),
        }
      ).as("getStadium");
    });

    it("should automatically set the pre-filled value when the form is pre-filled", () => {
      interceptModelUpdateActionMetadata([]);

      cy.mountWithWrapper(<PolarisAutoForm action={api.game.stadium.create} findBy="42" />, PolarisWrapper);

      cy.get(".Polaris-InlineStack > div").contains("icon.svg");
      cy.get(".Polaris-Thumbnail").find("img").should("have.attr", "src").should("contain", "https://assets.gadget.dev/assets/icon.svg");
    });

    it("should not show the delete file icon when the field is required", () => {
      interceptModelUpdateActionMetadata([
        {
          __typename: "GadgetGenericFieldValidation",
          name: "Required",
          specID: "gadget/validation/required",
        },
      ]);

      cy.mountWithWrapper(<PolarisAutoForm action={api.game.stadium.create} findBy="42" />, PolarisWrapper);

      cy.get(".Polaris-InlineStack > div").contains("icon.svg");
      cy.get(".Polaris-Thumbnail").find("img").should("have.attr", "src").should("contain", "https://assets.gadget.dev/assets/icon.svg");
      cy.get("#clear-file-photo").should("not.exist");
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
