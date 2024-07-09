import type { AnyClient } from "@gadgetinc/api-client-core";
import "cypress-each";
import { recordIdInputField } from "../../spec/auto/support/shared.js";

Cypress.Commands.add("mockModelActionMetadata", (api: AnyClient, props) => {
  const { modelName, action, inputFields } = props;

  cy.intercept(
    {
      method: "POST",
      url: `${api.connection.endpoint}?operation=ModelActionMetadata`,
    },
    {
      data: {
        gadgetMeta: {
          model: {
            name: modelName,
            action: {
              ...action,
              name: action.apiIdentifier,
              inputFields: action.operatesWithRecordIdentity ? [recordIdInputField, ...inputFields] : inputFields,
              __typename: "GadgetAction",
            },
            __typename: "GadgetModel",
          },
          __typename: "GadgetApplicationMeta",
        },
      },
    }
  ).as("ModelCreateActionMetadata");
});

Cypress.Commands.add("mockGetDirectUploadToken", (api: AnyClient, customToken) => {
  const token = customToken ?? "token123";
  cy.intercept(
    {
      method: "POST",
      url: `${api.connection.endpoint}?operation=GetDirectUploadToken`,
    },
    {
      data: {
        gadgetMeta: {
          directUploadToken: {
            url: `https://storage.googleapis.com/gadget-storage-uploads/direct-uploads/${token}`,
            token,
            __typename: "DirectUploadToken",
          },
          __typename: "GadgetApplicationMeta",
        },
      },
    }
  ).as("getDirectUploadToken");
});

Cypress.Commands.add("mockUploadFile", (customToken) => {
  const token = customToken ?? "token123";

  cy.intercept(
    {
      method: "PUT",
      url: `https://storage.googleapis.com/gadget-storage-uploads/direct-uploads/${token}`, // The URL should be the one returned by the getDirectUploadToken query
    },
    {} // The payload is not important for this test
  ).as("uploadFile");
});

Cypress.Commands.add("getSubmitButton", () => {
  return cy.get("form [type=submit][aria-hidden!=true]");
});
