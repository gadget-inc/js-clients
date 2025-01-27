import React from "react";
import { apiTriggerOnly } from "../../../../spec/auto/support/Triggers.js";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoBelongsToInput } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoBelongsToInput.js";
import { PolarisAutoSubmit } from "../../../../src/auto/polaris/submit/PolarisAutoSubmit.js";
import { PolarisSubmitResultBanner } from "../../../../src/auto/polaris/submit/PolarisSubmitResultBanner.js";
import { api } from "../../../support/api.js";
import { PolarisWrapper } from "../../../support/auto.js";
describe("PolarisAutoBelongsToInput", () => {
  const interceptModelUpdateActionMetadata = () => {
    cy.mockModelActionMetadata(api, {
      modelApiIdentifier: "widget",
      modelName: "Widget",
      action: { apiIdentifier: "update", operatesWithRecordIdentity: true },
      triggers: apiTriggerOnly,
      inputFields: getInputFieldsWithCustomValidations(),
    });
  };

  const expectUpdateActionSubmissionVariables = (expectedQueryValue?: any) => {
    cy.intercept({ method: "POST", url: `${api.connection.endpoint}?operation=updateWidget` }, (req) => {
      // eslint-disable-next-line
      expect(req.body.variables).to.deep.equal(expectedQueryValue);

      // The response content doesn't matter for the tests __typename: "UpdateWidgetResult",
      req.reply({ data: { updateWidget: { success: true, errors: null, x: {} } } });
    }).as("updateWidget");
  };

  const interceptWidgetQuery = () => {
    cy.intercept({ method: "POST", url: `${api.connection.endpoint}?operation=widget` }, (req) => {
      /**
       * sectionId -> the raw id value stored in the DB. Returned regardless of if the record actually exists
       *
       * section{...} -> the related record value. Only returned when the related record actually exists
       */

      req.reply({
        data: {
          widget: {
            section: makeSectionRecord(1),
            sectionId: "1",
            __typename: "Widget",
          },
        },
      });
    }).as("widget");
  };

  const makeSectionRecord = (id: number) => {
    return {
      __typename: "Section",
      id: `${id}`,
      createdAt: "2024-06-13T16:04:34.448Z",
      name: `Section ${id}`,
      otherField: `Section ${id} other field`,
      updatedAt: "2024-06-13T16:04:34.448Z",
    };
  };

  const interceptSectionOptionsQuery = (sectionCount: number) => {
    const sections: any[] = [];
    for (let i = 1; i <= sectionCount; i++) {
      sections.push({
        cursor: "eyJpZCI6IjEifQ==",
        node: makeSectionRecord(i),
        __typename: "SectionEdge",
      });
    }

    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.endpoint}?operation=sections`,
      },
      (req) => {
        req.reply({
          data: {
            sections: {
              pageInfo: {
                hasNextPage: false,
                hasPreviousPage: false,
                startCursor: "eyJpZCI6IjEifQ==",
                endCursor: "eyJpZCI6IjIifQ==",
                __typename: "PageInfo",
              },
              edges: sections,
              __typename: "SectionConnection",
            },
            gadgetMeta: {
              hydrations: {
                createdAt: "DateTime",
                updatedAt: "DateTime",
              },
              __typename: "GadgetApplicationMeta",
            },
          },
        });
      }
    ).as("sections");
  };

  beforeEach(() => {
    cy.viewport("macbook-13");

    interceptModelUpdateActionMetadata();
    interceptSectionOptionsQuery(5);
    interceptWidgetQuery();
  });
  it("can deselect a related record and submit it", () => {
    cy.mountWithWrapper(<PolarisAutoForm action={api.widget.update} findBy="42" />, PolarisWrapper);

    cy.get(`[id="1_Section 1"]`); // Section 1 is already selected
    cy.get(`button[aria-label="Remove "]`).click(); // Deselect

    expectUpdateActionSubmissionVariables({ id: "42", widget: { section: { _link: null } } });
    cy.getSubmitButton().click();
    cy.contains("Saved Widget successfully");
  });

  it("can select a related record and submit it", () => {
    cy.mountWithWrapper(<PolarisAutoForm action={api.widget.update} findBy="42" />, PolarisWrapper);

    cy.get(`input[name="widget.section"]`).click();
    cy.contains(`Section 3`).click();
    cy.get(`[id="3_Section 3"]`);

    expectUpdateActionSubmissionVariables({ id: "42", widget: { section: { _link: "3" } } });
    cy.getSubmitButton().click();
    cy.contains("Saved Widget successfully");
  });

  describe("optionLabel", () => {
    it("should use the field api id of the string option label as the option display label", () => {
      cy.mountWithWrapper(
        <PolarisAutoForm action={api.widget.update} findBy="42">
          <PolarisSubmitResultBanner />
          <PolarisAutoBelongsToInput field="section" optionLabel="otherField" />
          <PolarisAutoSubmit />
        </PolarisAutoForm>,
        PolarisWrapper
      );
      cy.get(`input[name="widget.section"]`).click();
      cy.contains(`Section 3 other field`).click();

      expectUpdateActionSubmissionVariables({ id: "42", widget: { section: { _link: "3" } } });
      cy.getSubmitButton().click();
      cy.contains("Saved Widget successfully");
    });

    it("should use call the option label function to generate the option labels", () => {
      cy.mountWithWrapper(
        <PolarisAutoForm action={api.widget.update} findBy="42">
          <PolarisSubmitResultBanner />
          <PolarisAutoBelongsToInput field="section" optionLabel={(record) => `Custom label for ${record.id}`} />
          <PolarisAutoSubmit />
        </PolarisAutoForm>,
        PolarisWrapper
      );
      cy.get(`input[name="widget.section"]`).click();
      cy.contains(`Custom label for 3`).click();

      expectUpdateActionSubmissionVariables({ id: "42", widget: { section: { _link: "3" } } });
      cy.getSubmitButton().click();
      cy.contains("Saved Widget successfully");
    });
  });
});

export const getInputFieldsWithCustomValidations = () => {
  return [
    {
      name: "Widget",
      apiIdentifier: "widget",
      fieldType: "Object",
      requiredArgumentForInput: false,
      configuration: {
        __typename: "GadgetObjectFieldConfig",
        fieldType: "Object",
        name: null,
        validations: [],
        fields: [
          {
            name: "Section",
            apiIdentifier: "section",
            fieldType: "BelongsTo",
            requiredArgumentForInput: false,
            sortable: false,
            filterable: true,
            configuration: {
              __typename: "GadgetBelongsToConfig",
              fieldType: "BelongsTo",
              validations: [],
              relatedModel: {
                key: "DataModel-section",
                apiIdentifier: "section",
                namespace: [],
                defaultDisplayField: {
                  apiIdentifier: "name",
                },
              },
            },
          },
        ],
      },
      __typename: "GadgetObjectField",
    },
  ];
};
