import React from "react";
import { apiTriggerOnly } from "../../../../spec/auto/support/Triggers.js";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";

describeForEachAutoAdapter("AutoForm", ({ name, adapter: { AutoForm }, wrapper }) => {
  const AutoFormWithInputControls = () => {
    const [findBy, setFindBy] = React.useState<string>("1");

    return (
      <>
        <AutoForm action={api.widget.update} findBy={findBy} />

        <div>
          <button style={{ width: 1, height: 1 }} id="setFindById1" onClick={() => setFindBy("1")} />
          <button style={{ width: 1, height: 1 }} id="setFindById2" onClick={() => setFindBy("2")} />
        </div>
      </>
    );
  };

  const interceptModelUpdateActionMetadata = () => {
    cy.mockModelActionMetadata(api, {
      modelApiIdentifier: "widget",
      modelName: "Widget",
      action: { apiIdentifier: "update", operatesWithRecordIdentity: true },
      inputFields: getInputFieldsWithCustomValidations(),
      triggers: apiTriggerOnly,
    });
  };

  const interceptFindByValue = () => {
    cy.intercept({ method: "POST", url: `${api.connection.endpoint}?operation=widget` }, (req) => {
      const id = req.body.variables.id;

      req.reply({
        data: {
          widget: {
            __typename: "Widget",
            id,
            name: `test record ${id}`,
            inventoryCount: id,
          },
        },
      });
    }).as("widget");
  };

  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  it("onSuccess callback should return a record result after the form submission", () => {
    interceptModelUpdateActionMetadata();
    interceptFindByValue();
    cy.mountWithWrapper(<AutoFormWithInputControls />, wrapper);

    cy.get(`input[name="widget.name"]`).should("have.value", "test record 1");
    cy.get(`input[name="widget.inventoryCount"]`).should("have.value", "1");

    cy.clickAndType(`input[name="widget.name"]`, "Dirty the value");

    cy.clickAndType(`input[name="widget.inventoryCount"]`, "123546");

    cy.get("#setFindById2").click();

    cy.get(`input[name="widget.name"]`).should("have.value", "test record 2");
    cy.get(`input[name="widget.inventoryCount"]`).should("have.value", "2");

    cy.get("#setFindById1").click();
    // Observe the previous dirty values for the same IDs are lost
    cy.get(`input[name="widget.name"]`).should("have.value", "test record 1");
    cy.get(`input[name="widget.inventoryCount"]`).should("have.value", "1");
  });
});

const getInputFieldsWithCustomValidations = () => {
  return [
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
  ];
};
