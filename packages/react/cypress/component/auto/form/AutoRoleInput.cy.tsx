import React from "react";
import { apiTriggerOnly } from "../../../../spec/auto/support/Triggers.js";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";
import { SUITE_NAMES } from "../../../support/constants.js";

describeForEachAutoAdapter("AutoRoleInput", ({ name, adapter: { AutoForm }, wrapper, clickOptions }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  const submit = (modelName: string) => {
    cy.get("form [type=submit][aria-hidden!=true]").click(clickOptions);
    cy.contains(`Saved ${modelName} successfully`);
  };

  const polarisAutoRoleInput = () => {
    cy.get(`input[id="Roles_Autocomplete_Textfield"]`).click(clickOptions);

    // All options are loaded initially
    cy.get(`li[data-listbox-option-value="signed-in"]`).should("exist");
    cy.get(`li[data-listbox-option-value="unauthenticated"]`).should("exist");
    cy.get(`li[data-listbox-option-value="Role-abc123abc"]`).should("exist");

    cy.get(`input[id="Roles_Autocomplete_Textfield"]`).click(clickOptions).type("test"); // To search for "test-api-key"
    cy.get(`li[data-listbox-option-value="Role-abc123abc"]`).click(clickOptions); // select

    cy.get(`li[data-listbox-option-value="signed-in"]`).should("not.exist"); // Filtered out by search
    cy.get(`li[data-listbox-option-value="unauthenticated"]`).should("not.exist"); // Filtered out by search

    cy.get(`input[id="Roles_Autocomplete_Textfield"]`).click(clickOptions).clear().blur();
    cy.get(`span`).contains("test-api-key").should("exist"); // Chip to show the selected role
  };

  const shadcnAutoRoleInput = () => {
    cy.get(`[cmdk-input]`).click(clickOptions); // Click to focus the input field

    // All options should be loaded initially
    cy.get(`[cmdk-item][data-value="signed-in-signed-in"]`).should("exist");
    cy.get(`[cmdk-item][data-value="unauthenticated-unauthenticated"]`).should("exist");
    cy.get(`[cmdk-item][data-value="Role-abc123abc-test-api-key"]`).should("exist");

    // Type "test" in the input to search
    cy.get(`[cmdk-input]`).type("test");

    // Ensure filtered options are shown
    cy.get(`[cmdk-item][data-value="Role-abc123abc-test-api-key"]`).should("exist");
    cy.get(`[cmdk-item][data-value="signed-in-signed-in"]`).should("not.exist");
    cy.get(`[cmdk-item][data-value="unauthenticated-unauthenticated"]`).should("not.exist");

    // Select the filtered option
    cy.get(`[cmdk-item][data-value="Role-abc123abc-test-api-key"]`).click(clickOptions);

    // Verify that the chip/tag appears after selection
    cy.get(`div`)
      .contains("test-api-key")
      .should("exist") // Ensure the chip is rendered
      .within(() => {
        // Verify that the close button exists within the chip
        cy.get(`button`).should("exist").and("be.visible");
      });
  };

  const polarisWCAutoRoleInput = () => {
    // Open dropdown by focusing the input inside s-text-field shadow DOM (like AutoEnumInput / AutoBelongsToInput)
    cy.get("s-text-field").first().shadow().find("input").click(clickOptions);
    cy.get('[role="option"]').contains("test-api-key").should("exist");
    cy.get('[role="option"]').contains("signed-in").should("exist");
    cy.get("s-text-field").first().shadow().find("input").type("test");
    cy.get('[role="option"]').contains("test-api-key").should("exist").click(clickOptions);
    // Selected badge is inside the combobox s-text-field shadow DOM (like AutoBelongsToInput)
    cy.get("s-text-field").first().shadow().find("s-badge").contains("test-api-key").should("exist");
  };

  const interceptRolesMetadataRequest = () => {
    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.endpoint}?operation=RolesMetadata`,
      },
      rolesMetadataResponse
    ).as("RolesMetadata");
  };

  const interceptModelActionMetadataRequest = () => {
    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.endpoint}?operation=ModelActionMetadata`,
      },
      modelActionMetadataResponse
    ).as("ModelActionMetadata");
  };

  const expectCreateActionSubmissionVariables = (expectedQueryValue?: any) => {
    cy.intercept({ method: "POST", url: `${api.connection.endpoint}?operation=createWidget` }, (req) => {
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
    }).as("createWidget");
  };

  it("can render a role input, make a selection, and submit the role key", () => {
    interceptModelActionMetadataRequest();
    interceptRolesMetadataRequest();
    cy.mountWithWrapper(<AutoForm action={api.widget.create} />, wrapper);

    if (name === SUITE_NAMES.POLARIS) {
      polarisAutoRoleInput();
    }

    if (name === SUITE_NAMES.SHADCN) {
      shadcnAutoRoleInput();
    }

    if (name === SUITE_NAMES.POLARIS_WC) {
      polarisWCAutoRoleInput();
    }

    expectCreateActionSubmissionVariables({
      widget: {
        roles: ["Role-abc123abc"], // Role key is sent. Not the role name
      },
    });
    submit("Widget");
  });
});

const rolesMetadataResponse = {
  data: {
    gadgetMeta: {
      roles: [
        {
          name: "signed-in",
          key: "signed-in",
          selectable: false,
          __typename: "GadgetRole",
        },
        {
          name: "system-admin",
          key: "sysadmin",
          selectable: true,
          __typename: "GadgetRole",
        },
        {
          name: "unauthenticated",
          key: "unauthenticated",
          selectable: false,
          __typename: "GadgetRole",
        },
        {
          name: "test-api-key",
          key: "Role-abc123abc",
          selectable: true,
          __typename: "GadgetRole",
        },
      ],
      __typename: "GadgetApplicationMeta",
    },
  },
  extensions: {
    logs: "https://ggt.link/logs/114412/2eba7fb9c4db29d0eaba0a01c01177dc",
    traceId: "2eba7fb9c4db29d0eaba0a01c01177dc",
  },
};
const modelActionMetadataResponse = {
  data: {
    gadgetMeta: {
      modelAndRelatedModels: [
        {
          name: "Widget",
          apiIdentifier: "widget",
          defaultRecord: {
            description: {
              markdown: "# awd",
            },
            category: [],
            __typename: "Widget",
          },
          fields: [
            {
              name: "Roles",
              apiIdentifier: "roles",
              fieldType: "RoleAssignments",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "RoleAssignments",
                validations: [],
              },
            },
          ],
          __typename: "GadgetModel",
        },
      ],
      model: {
        name: "Widget",
        apiIdentifier: "widget",
        defaultRecord: {
          description: {
            markdown: "# awd",
          },
          category: [],
          __typename: "Widget",
        },
        action: {
          name: "Create",
          apiIdentifier: "create",
          operatesWithRecordIdentity: false,
          triggers: apiTriggerOnly,
          inputFields: [
            {
              name: "Widget",
              apiIdentifier: "widget",
              fieldType: "Object",
              requiredArgumentForInput: false,
              configuration: {
                __typename: "GadgetObjectFieldConfig",
                fieldType: "Object",
                validations: [],
                name: null,
                fields: [
                  {
                    name: "Roles",
                    apiIdentifier: "roles",
                    fieldType: "RoleAssignments",
                    requiredArgumentForInput: false,
                    sortable: false,
                    filterable: true,
                    __typename: "GadgetModelField",
                    configuration: {
                      __typename: "GadgetGenericFieldConfig",
                      fieldType: "RoleAssignments",
                      validations: [],
                    },
                  },
                ],
              },
              __typename: "GadgetObjectField",
            },
          ],
          __typename: "GadgetAction",
        },
        __typename: "GadgetModel",
      },
      __typename: "GadgetApplicationMeta",
    },
  },
  extensions: {
    logs: "https://ggt.link/logs/114412/b25b841402a564fcc2b028e42564f9ca",
    traceId: "b25b841402a564fcc2b028e42564f9ca",
  },
};
