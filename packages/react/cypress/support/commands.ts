import type { AnyClient } from "@gadgetinc/core";
import "cypress-each";
import { apiTriggerOnly } from "../../spec/auto/support/Triggers.js";
import { recordIdInputField } from "../../spec/auto/support/shared.js";

Cypress.Commands.add("mockModelActionMetadata", (api: AnyClient, props) => {
  const { modelName, modelApiIdentifier, action, inputFields, defaultRecord } = props;

  cy.intercept(
    {
      method: "POST",
      url: `${api.connection.endpoint}?operation=ModelActionMetadata`,
    },
    {
      data: {
        gadgetMeta: {
          modelAndRelatedModels: [
            {
              name: modelName,
              apiIdentifier: modelApiIdentifier,
              fields: inputFields[0]?.configuration?.fields ?? [],
              defaultRecord,
              defaultDisplayField: inputFields[0]?.configuration?.fields?.[0] ?? {
                apiIdentifier: "id",
              },
              __typename: "GadgetModel",
            },
            ...(inputFields?.[0]?.configuration?.fields?.flatMap((field: any) => {
              if (field.configuration && field.configuration.relatedModel) {
                return {
                  fields: [],
                  ...field.configuration.relatedModel,
                };
              } else {
                return [];
              }
            }) ?? []),
          ],
          model: {
            name: modelName,
            apiIdentifier: modelApiIdentifier,
            action: {
              ...action,
              name: action.apiIdentifier,
              triggers: apiTriggerOnly,
              inputFields: action.operatesWithRecordIdentity ? [recordIdInputField, ...inputFields] : inputFields,
              __typename: "GadgetAction",
            },
            defaultRecord,
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

/**
 * Click on an element and type text into it
 * This command is used to simulate user interaction with the UI due to the fact that Cypress kept seeing some input elements as disabled
 * more on the issue here: https://github.com/cypress-io/cypress/issues/5830 and https://github.com/cypress-io/cypress/issues/5827
 *
 * @param selector - The selector of the element to click and type into
 * @param text - The text to type into the element
 * @param clear - Whether to clear the element before typing
 */
Cypress.Commands.add("clickAndType", { prevSubject: false }, (selector: string, text: string, clear = false) => {
  cy.get(selector).click();
  if (clear) {
    cy.get(selector).clear();
  }
  cy.get(selector).type(text);
});
