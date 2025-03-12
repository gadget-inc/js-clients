import React from "react";
import { apiTriggerOnly } from "../../../../spec/auto/support/Triggers.js";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";
import { SUITE_NAMES } from "../../../support/constants.js";

describeForEachAutoAdapter(
  "AutoBelongsToInput",
  ({ name, adapter: { AutoForm, AutoSubmit, SubmitResultBanner, AutoBelongsToInput }, wrapper }) => {
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

    const operations = () => {
      if (name === SUITE_NAMES.POLARIS) {
        const deselectSection1 = () => {
          cy.get(`[id="1_Section 1"]`); // Section 1 is already selected
          cy.get(`button[aria-label="Remove "]`).click(); // Deselect
        };

        const getSection3 = () => {
          cy.get(`[id="3_Section 3"]`).should("exist");
        };
        return { deselectSection1, getSection3 };
      }
      if (name === SUITE_NAMES.SHADCN) {
        const deselectSection1 = () => {
          cy.get(`[cmdk-input]`).click(); // Click to focus the input field
          cy.get('[cmdk-item][data-value="1-Section 1"][data-selected="true"]').should("exist");
          cy.get(`button[aria-label="Remove"]`).click(); // Deselect
        };
        const getSection3 = () => {
          cy.get(`[cmdk-item][data-value="3-Section 3"][data-selected="true"]`).should("exist");
        };
        return { deselectSection1, getSection3 };
      }

      throw new Error(`Unsupported suite: ${name}`);
    };

    beforeEach(() => {
      cy.viewport("macbook-13");

      interceptModelUpdateActionMetadata();
      interceptSectionOptionsQuery(5);
      interceptWidgetQuery();
    });

    it("can deselect a related record and submit it", () => {
      cy.mountWithWrapper(<AutoForm action={api.widget.update} findBy="42" />, wrapper);

      operations().deselectSection1();

      expectUpdateActionSubmissionVariables({ id: "42", widget: { section: { _link: null } } });
      cy.getSubmitButton().click();
      cy.contains("Saved Widget successfully");
    });

    it("can select a related record and submit it", () => {
      cy.mountWithWrapper(<AutoForm action={api.widget.update} findBy="42" />, wrapper);

      cy.get(`input[name="widget.section"]`).click();
      cy.contains(`Section 3`).click();
      operations().getSection3();

      expectUpdateActionSubmissionVariables({ id: "42", widget: { section: { _link: "3" } } });
      cy.getSubmitButton().click();
      cy.contains("Saved Widget successfully");
    });

    describe("optionLabel", () => {
      it("should use the field api id of the string option label as the option display label", () => {
        cy.mountWithWrapper(
          <AutoForm action={api.widget.update} findBy="42">
            <SubmitResultBanner />
            <AutoBelongsToInput field="section" optionLabel="otherField" />
            <AutoSubmit />
          </AutoForm>,
          wrapper
        );
        cy.get(`input[name="widget.section"]`).click();
        cy.contains(`Section 3 other field`).click();

        expectUpdateActionSubmissionVariables({ id: "42", widget: { section: { _link: "3" } } });
        cy.getSubmitButton().click();
        cy.contains("Saved Widget successfully");
      });

      it("should use call the option label function to generate the option labels", () => {
        cy.mountWithWrapper(
          <AutoForm action={api.widget.update} findBy="42">
            <SubmitResultBanner />
            <AutoBelongsToInput field="section" optionLabel={({ record }: { record: any }) => `Custom label for ${record.id}`} />
            <AutoSubmit />
          </AutoForm>,
          wrapper
        );
        cy.get(`input[name="widget.section"]`).click();
        cy.contains(`Custom label for 3`).click();

        expectUpdateActionSubmissionVariables({ id: "42", widget: { section: { _link: "3" } } });
        cy.getSubmitButton().click();
        cy.contains("Saved Widget successfully");
      });
    });
  }
);

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
