import React from "react";
import { apiTriggerOnly } from "../../../../spec/auto/support/Triggers.js";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";
import { SUITE_NAMES } from "../../../support/constants.js";

describeForEachAutoAdapter("AutoForm - ID field", ({ name, adapter: { AutoForm }, wrapper }) => {
  it("does not render an input for ID when the action is not upsert", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.create} include={["name", "inventoryCount", "id"]} />, wrapper);

    const containOpts = name === SUITE_NAMES.POLARIS_WC ? { includeShadowDom: true } : undefined;
    if (containOpts) {
      cy.contains("Name", containOpts).should("exist");
      cy.get(`[id="widget.name"]`).shadow().find("input").should("exist");
      cy.contains("Inventory count", containOpts).should("exist");
      cy.get(`[id="widget.inventoryCount"]`).shadow().find("input").should("exist");
      cy.contains("ID", containOpts).should("not.exist");
      cy.get(`[id="widget.id"]`).should("not.exist");
    } else {
      cy.contains("Name").should("exist");
      cy.get(`input[name="widget.name"]`).should("exist");
      cy.contains("Inventory count").should("exist");
      cy.get(`input[name="widget.inventoryCount"]`).should("exist");
      cy.contains("ID").should("not.exist");
      cy.get(`input[name="widget.id"]`).should("not.exist");
    }
  });
});

describeForEachAutoAdapter("AutoForm - Upsert Action", ({ name, adapter: { AutoForm, AutoInput, AutoSubmit }, wrapper, clickOptions }) => {
  let upsertHasBeenCalled: boolean;

  const typeInField = (fieldId: string, text: string, clear = false) => {
    if (name === SUITE_NAMES.POLARIS_WC) {
      const input = cy.get(`[id="${fieldId}"]`).shadow().find("input");
      input.click(clickOptions);
      if (clear) input.clear();
      input.type(text);
    } else {
      cy.clickAndType(`input[name="${fieldId}"]`, text, clear);
    }
  };

  const getInputByField = (fieldId: string) =>
    name === SUITE_NAMES.POLARIS_WC ? cy.get(`[id="${fieldId}"]`).shadow().find("input") : cy.get(`input[name="${fieldId}"]`);

  const getSubmitBtn = () =>
    name === SUITE_NAMES.POLARIS_WC ? cy.get("form s-button[type=submit]") : cy.get("form [type=submit][aria-hidden!=true]");

  const populateRequiredFields = () => {
    typeInField("widget.name", "name", true);
    typeInField("widget.inventoryCount", "123", true);
  };

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

  beforeEach(() => {
    upsertHasBeenCalled = false;
    cy.viewport("macbook-13");
    interceptModelUpsertActionMetadata();
  });

  it("renders the ID input field when there is no given findBy value", () => {
    cy.mountWithWrapper(<AutoForm action={api.widget.upsert} />, wrapper);

    if (name === SUITE_NAMES.POLARIS_WC) {
      cy.contains("ID", { includeShadowDom: true }).should("exist");
      getInputByField("widget.id").should("exist");
    } else {
      cy.contains("ID").should("exist");
      cy.get(`input[name="widget.id"]`).should("exist");
    }

    mockSuccessfulUpsert();
    populateRequiredFields();

    // Does not allow submission when the ID input does not have a positive integer value
    typeInField("widget.id", "-1", true);
    if (upsertHasBeenCalled) throw new Error("Upsert was called when it shouldn't have been");

    typeInField("widget.id", "1.1", true);
    if (upsertHasBeenCalled) throw new Error("Upsert was called when it shouldn't have been");

    getInputByField("widget.id").clear().type("1");
    getSubmitBtn().click(clickOptions);

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

    if (name === SUITE_NAMES.POLARIS_WC) {
      cy.contains("ID", { includeShadowDom: true }).should("not.exist");
      cy.get(`[id="widget.id"]`).should("not.exist");
    } else {
      cy.contains("ID").should("not.exist");
      cy.get(`input[name="widget.id"]`).should("not.exist");
    }
  });

  it("Can exclude the ID field when there is no findBy and submit successfully", () => {
    mockUnsuccessfulWidgetFindBy();
    cy.mountWithWrapper(<AutoForm action={api.widget.upsert} exclude={["id"]} />, wrapper);

    mockSuccessfulUpsert();
    populateRequiredFields();
    if (name === SUITE_NAMES.POLARIS_WC) {
      cy.contains("ID", { includeShadowDom: true }).should("not.exist");
      cy.get(`[id="widget.id"]`).should("not.exist");
    } else {
      cy.contains("ID").should("not.exist");
      cy.get(`input[name="widget.id"]`).should("not.exist");
    }
    getSubmitBtn().click(clickOptions);

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
        <AutoInput field="name" />
        <AutoInput field="inventoryCount" />
        <AutoSubmit />
      </AutoForm>,
      wrapper
    );

    populateRequiredFields();

    getSubmitBtn().click(clickOptions);

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
