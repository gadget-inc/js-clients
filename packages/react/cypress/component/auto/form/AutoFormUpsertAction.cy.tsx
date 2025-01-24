import React from "react";
import { apiTriggerOnly } from "../../../../spec/auto/support/Triggers.js";
import { PolarisAutoInput } from "../../../../src/auto/polaris/inputs/PolarisAutoInput.js";
import { PolarisAutoSubmit } from "../../../../src/auto/polaris/submit/PolarisAutoSubmit.js";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";

describeForEachAutoAdapter("AutoForm - ID field", ({ name, adapter: { AutoForm }, wrapper }) => {
  it("does not render an input for ID when the action is not upsert", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.create} include={["name", "inventoryCount", "id"]} />, wrapper);

    cy.contains("Name").should("exist");
    cy.get(`input[name="widget.name"]`).should("exist");

    cy.contains("Inventory count").should("exist");
    cy.get(`input[name="widget.inventoryCount"]`).should("exist");

    cy.contains("ID").should("not.exist");
    cy.get(`input[name="widget.id"]`).should("not.exist");
  });
});

describeForEachAutoAdapter("AutoForm - Upsert Action", ({ name, adapter: { AutoForm }, wrapper }) => {
  let upsertHasBeenCalled: boolean;

  const interceptModelUpsertActionMetadata = () => {
    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.endpoint}?operation=ModelActionMetadata`,
      },

      upsertModelActionMetadataResponse
    ).as("ModelCreateActionMetadata");
  };

  const mockSuccessfulUpsert = () => {
    cy.intercept({ method: "POST", url: `${api.connection.endpoint}?operation=upsertWidget` }, (req) => {
      upsertHasBeenCalled = true;

      // The response content doesn't matter for the tests __typename: "UpdateWidgetResult",
      req.reply({
        data: {
          upsertWidget: { success: true, errors: null, __typename: "UpdateWidgetResult", widget: {} },
        },
      });
    }).as("upsertWidget");
  };

  const mockSuccessfulWidgetFindBy = () => {
    cy.intercept({ method: "POST", url: `${api.connection.endpoint}?operation=widget` }, (req) => {
      req.reply({
        data: {
          widget: {
            __typename: "Widget",
            id: "1",
            createdAt: "2024-06-24T17:46:07.333Z",
            inventoryCount: 1234,
            name: "updated test record",
            updatedAt: "2024-08-12T13:41:12.139Z",
          },
        },
      });
    }).as("widget");
  };

  const mockUnsuccessfulWidgetFindBy = () => {
    cy.intercept({ method: "POST", url: `${api.connection.endpoint}?operation=widget` }, (req) => {
      req.reply({
        data: { widget: null },
      });
    }).as("widget");
  };

  const populateRequiredFields = () => {
    cy.clickAndType(`input[name="widget.name"]`, "name", true);
    cy.clickAndType(`input[name="widget.inventoryCount"]`, "123", true);
  };

  beforeEach(() => {
    upsertHasBeenCalled = false;
    cy.viewport("macbook-13");
    interceptModelUpsertActionMetadata();
  });

  it("renders the ID input field when there is no given findBy value", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.upsert} />, wrapper);

    cy.contains("ID").should("exist");
    cy.get(`input[name="widget.id"]`).should("exist");

    mockSuccessfulUpsert();
    populateRequiredFields();

    // Does not allow submission when the ID input does not have a positive integer value
    cy.clickAndType(`input[name="widget.id"]`, "-1", true);
    if (upsertHasBeenCalled) throw new Error("Upsert was called when it shouldn't have been");

    cy.clickAndType(`input[name="widget.id"]`, "1.1", true);
    if (upsertHasBeenCalled) throw new Error("Upsert was called when it shouldn't have been");

    cy.get(`input[name="widget.id"]`).clear().type("1{enter}");
    cy.wait("@upsertWidget")
      .its("request.body.variables")
      .should("deep.equal", {
        widget: {
          id: "1",
          name: "name",
          inventoryCount: 123,
        },
      });
  });

  it("Does not render the ID input field when given a findBy value, and populates the form with the record data", () => {
    mockSuccessfulWidgetFindBy();
    cy.mountWithWrapper(<AutoForm action={api.widget.upsert} findBy="1" />, wrapper);

    cy.contains("ID").should("not.exist");
    cy.get(`input[name="widget.id"]`).should("not.exist");
  });

  it("Can exclude the ID field when there is no findBy and submit successfully", () => {
    mockUnsuccessfulWidgetFindBy();
    cy.mountWithWrapper(<AutoForm action={api.widget.upsert} exclude={["id"]} />, wrapper);

    mockSuccessfulUpsert();
    populateRequiredFields();
    cy.contains("ID").should("not.exist");
    cy.get(`input[name="widget.id"]`).should("not.exist");
    cy.get(`button[type="submit"]`).eq(0).click({ force: true });

    cy.wait("@upsertWidget")
      .its("request.body.variables")
      .should("deep.equal", {
        widget: {
          name: "name",
          inventoryCount: 123,
        },
      });
  });

  it("Shows a message when given an ID that does not exist in findBy", () => {
    mockUnsuccessfulWidgetFindBy();
    cy.mountWithWrapper(<AutoForm action={api.widget.upsert} findBy="1" />, wrapper);
    cy.contains("Record Not Found Error: Gadget API returned no data at widget").should("exist");
  });

  it("Can properly submit with custom form contents", () => {
    mockSuccessfulWidgetFindBy();
    mockSuccessfulUpsert();

    cy.mountWithWrapper(
      <AutoForm action={api.widget.upsert} findBy="1">
        {name === "Polaris" ? (
          <>
            <PolarisAutoInput field="name" />
            <PolarisAutoInput field="inventoryCount" />
            <PolarisAutoSubmit />
          </>
        ) : // todo: shadcn
        null}
      </AutoForm>,
      wrapper
    );

    populateRequiredFields();

    cy.get(`button[type="submit"]`).eq(0).click({ force: true });

    cy.wait("@upsertWidget")
      .its("request.body.variables")
      .should("deep.equal", {
        id: "1",
        widget: {
          name: "name",
          inventoryCount: 123,
        },
      });
  });
});

const upsertModelActionMetadataResponse = {
  data: {
    gadgetMeta: {
      modelAndRelatedModels: [
        {
          name: "Widget",
          apiIdentifier: "widget",
          defaultRecord: {
            name: "",
            description: {
              markdown: "",
            },
            category: [],
            __typename: "Widget",
          },
          fields: [
            {
              name: "Id",
              apiIdentifier: "id",
              fieldType: "ID",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "ID",
                validations: [],
              },
            },
            {
              name: "Name",
              apiIdentifier: "name",
              fieldType: "String",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "String",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
              },
            },
            {
              name: "Inventory count",
              apiIdentifier: "inventoryCount",
              fieldType: "Number",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetNumberConfig",
                fieldType: "Number",
                validations: [
                  {
                    __typename: "GadgetRangeFieldValidation",
                    name: "Number range",
                    specID: "gadget/validation/number-range",
                    min: 0,
                    max: null,
                  },
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                decimals: null,
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
          name: "",
          description: {
            markdown: "",
          },
          category: [],
          __typename: "Widget",
        },
        action: {
          name: "Upsert",
          apiIdentifier: "upsert",
          operatesWithRecordIdentity: false,
          isDeleteAction: false,
          isUpsertMetaAction: true,
          inputFields: [
            {
              name: "On",
              apiIdentifier: "on",
              fieldType: "Array",
              requiredArgumentForInput: false,
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "Array",
                validations: [],
              },
              __typename: "GadgetObjectField",
            },
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
                    name: "Id",
                    apiIdentifier: "id",
                    fieldType: "ID",
                    requiredArgumentForInput: false,
                    sortable: true,
                    filterable: true,
                    __typename: "GadgetModelField",
                    configuration: {
                      __typename: "GadgetGenericFieldConfig",
                      fieldType: "ID",
                      validations: [],
                    },
                  },
                  {
                    name: "Name",
                    apiIdentifier: "name",
                    fieldType: "String",
                    requiredArgumentForInput: true,
                    sortable: true,
                    filterable: true,
                    __typename: "GadgetModelField",
                    configuration: {
                      __typename: "GadgetGenericFieldConfig",
                      fieldType: "String",
                      validations: [
                        {
                          __typename: "GadgetGenericFieldValidation",
                          name: "Required",
                          specID: "gadget/validation/required",
                        },
                      ],
                    },
                  },
                  {
                    name: "Inventory count",
                    apiIdentifier: "inventoryCount",
                    fieldType: "Number",
                    requiredArgumentForInput: true,
                    sortable: true,
                    filterable: true,
                    __typename: "GadgetModelField",
                    configuration: {
                      __typename: "GadgetNumberConfig",
                      fieldType: "Number",
                      validations: [
                        {
                          __typename: "GadgetRangeFieldValidation",
                          name: "Number range",
                          specID: "gadget/validation/number-range",
                          min: 0,
                          max: null,
                        },
                        {
                          __typename: "GadgetGenericFieldValidation",
                          name: "Required",
                          specID: "gadget/validation/required",
                        },
                      ],
                      decimals: null,
                    },
                  },
                ],
              },
              __typename: "GadgetObjectField",
            },
          ],
          triggers: apiTriggerOnly,
          __typename: "GadgetAction",
        },
        __typename: "GadgetModel",
      },
      __typename: "GadgetApplicationMeta",
    },
  },
};
