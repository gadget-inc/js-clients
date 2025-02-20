import React from "react";
import { apiTriggerOnly } from "../../../../spec/auto/support/Triggers.js";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoHasManyInput } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoHasManyInput.js";
import { PolarisAutoSubmit } from "../../../../src/auto/polaris/submit/PolarisAutoSubmit.js";
import { PolarisSubmitResultBanner } from "../../../../src/auto/polaris/submit/PolarisSubmitResultBanner.js";
import { get } from "../../../../src/utils.js";
import { api } from "../../../support/api.js";
import { PolarisWrapper } from "../../../support/auto.js";

const originalGizmosLinkedToWidget = [
  { id: "1", name: "Gizmo 1", otherField: "Gizmo 1 other field" },
  { id: "2", name: "Gizmo 2", otherField: "Gizmo 2 other field" },
];

describe("PolarisAutoHasManyInput", () => {
  const interceptModelUpdateActionMetadata = () => {
    cy.mockModelActionMetadata(api, {
      modelApiIdentifier: "widget",
      modelName: "Widget",
      action: { apiIdentifier: "update", operatesWithRecordIdentity: true },
      inputFields: getInputFieldsWithCustomValidations(),
      triggers: apiTriggerOnly,
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
      req.reply({
        data: {
          widget: {
            __typename: "Widget",
            id: "42",
            name: "test record",
            gizmos: {
              edges: originalGizmosLinkedToWidget.map((gizmo) => ({ node: gizmo })),
              __typename: "GizmoConnection",
            },
          },
        },
      });
    }).as("widget");
  };

  const interceptGizmosOptionsQuery = (sectionCount: number, expectedQueryValue?: any) => {
    const gizmos: any[] = [];
    for (let i = 1; i <= sectionCount; i++) {
      gizmos.push({
        cursor: "eyJpZCI6IjEwODgifQ==",
        node: {
          __typename: "Gizmo",
          id: `${i}`,
          createdAt: "2023-09-07T19:18:50.742Z",
          name: `Gizmo ${i}`,
          otherField: `Gizmo ${i} other field`,
          orientation: "right side up",
          updatedAt: "2024-07-09T14:42:20.788Z",
        },
        __typename: "GizmoEdge",
      });
    }

    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.endpoint}?operation=gizmos`,
      },
      (req) => {
        const queryIsForSelectedRecords = get(req.body.variables, "filter.widgetId.equals") === "42";

        if (expectedQueryValue) {
          // eslint-disable-next-line
          expect(req.body.variables).to.deep.equal(expectedQueryValue);
        }

        req.reply({
          data: {
            gizmos: {
              pageInfo: {
                hasNextPage: false,
                hasPreviousPage: false,
                startCursor: "eyJpZCI6IjEifQ==",
                endCursor: "eyJpZCI6IjIifQ==",
                __typename: "PageInfo",
              },
              edges: queryIsForSelectedRecords
                ? gizmos.slice(0, 2) // First 2 gizmos when the query is for the already selected records
                : gizmos, // All gizmos when the query is for the options
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
    ).as("gizmos");
  };

  beforeEach(() => {
    cy.viewport("macbook-13");

    interceptModelUpdateActionMetadata();
    interceptWidgetQuery();
  });

  it("can deselect exiting related records and select new records and submit it", () => {
    interceptGizmosOptionsQuery(5);
    cy.mountWithWrapper(<PolarisAutoForm action={api.widget.update} findBy="42" />, PolarisWrapper);
    cy.wait("@gizmos");

    cy.get(`span[title="Gizmo 1"]`);
    cy.get(`span[title="Gizmo 2"]`);

    cy.get(`button[aria-label="Remove Gizmo 1"]`).click(); // Deselect
    cy.get(`button[aria-label="Remove Gizmo 2"]`).click(); // Deselect

    cy.get(`input[name="widget.gizmos"]`).click();
    cy.contains(`Gizmo 4`).parent().parent().click();
    cy.contains(`Gizmo 5`).parent().parent().click();

    cy.get(`input[name="widget.gizmos"]`).focus();
    cy.get(`input[name="widget.gizmos"]`).blur();

    expectUpdateActionSubmissionVariables({
      id: "42",
      widget: {
        gizmos: [
          // Deselected
          { update: { id: "1", widget: { _link: null } } },
          { update: { id: "2", widget: { _link: null } } },

          // id: "3" was not initially selected in the DB and not manually selected. Left out of the submit request

          // Selected
          // These don't include the widget.link because it's automatically set to the calling record ID in the API
          { update: { id: "4" } },
          { update: { id: "5" } },
        ],
      },
    });
    cy.getSubmitButton().click();
    cy.contains("Saved Widget successfully");
  });

  it("does not change anything for hasMany fields when the input is untouched", () => {
    interceptGizmosOptionsQuery(5);
    cy.mountWithWrapper(<PolarisAutoForm action={api.widget.update} findBy="42" />, PolarisWrapper);
    cy.wait("@gizmos");

    expectUpdateActionSubmissionVariables({
      id: "42",
      widget: {
        // update is called with params that match the existing values
        gizmos: originalGizmosLinkedToWidget.map((gizmo) => ({ update: gizmo })),
      },
    });
    cy.getSubmitButton().click();
    cy.contains("Saved Widget successfully");
  });

  describe("optionLabel", () => {
    it("should use the field api id of the string option label as the option display label", () => {
      interceptGizmosOptionsQuery(5);
      cy.mountWithWrapper(
        <PolarisAutoForm action={api.widget.update} findBy="42">
          <PolarisSubmitResultBanner />
          <PolarisAutoHasManyInput field="gizmos" optionLabel="otherField" />
          <PolarisAutoSubmit />
        </PolarisAutoForm>,
        PolarisWrapper
      );
      cy.wait("@gizmos");

      cy.get(`input[name="widget.gizmos"]`).click();
      cy.contains(`Gizmo 3 other field`).parent().parent().click();
      cy.get(`input[name="widget.gizmos"]`).focus();
      cy.get(`input[name="widget.gizmos"]`).blur();

      expectUpdateActionSubmissionVariables({
        id: "42",
        widget: {
          gizmos: [
            // update is called with params that match the existing values
            ...originalGizmosLinkedToWidget.map((gizmo) => ({ update: gizmo })),

            // Selected includes ID only. Do not change anything on the selected record other than the related field link
            { update: { id: "3" } },
          ],
        },
      });
      cy.getSubmitButton().click();
      cy.contains("Saved Widget successfully");
    });

    it("should use call the option label function to generate the option labels", () => {
      interceptGizmosOptionsQuery(5);
      cy.mountWithWrapper(
        <PolarisAutoForm action={api.widget.update} findBy="42">
          <PolarisSubmitResultBanner />
          <PolarisAutoHasManyInput field="gizmos" optionLabel={({ record }) => `Custom label for ${record.id}`} />
          <PolarisAutoSubmit />
        </PolarisAutoForm>,
        PolarisWrapper
      );
      cy.wait("@gizmos");

      cy.get(`input[name="widget.gizmos"]`).click();
      cy.contains(`Custom label for 3`).parent().parent().click();
      cy.get(`input[name="widget.gizmos"]`).focus();
      cy.get(`input[name="widget.gizmos"]`).blur();

      expectUpdateActionSubmissionVariables({
        id: "42",
        widget: {
          gizmos: [
            // update is called with params that match the existing values
            ...originalGizmosLinkedToWidget.map((gizmo) => ({ update: gizmo })),

            // Selected includes ID only. Do not change anything on the selected record other than the related field link
            { update: { id: "3" } },
          ],
        },
      });
      cy.getSubmitButton().click();
      cy.contains("Saved Widget successfully");
    });
  });

  it("should filter out related record options based on a given filter", () => {
    interceptGizmosOptionsQuery(5, {
      first: 25,
      filter: { name: { equals: "gizmo 2" } },
    });

    cy.mountWithWrapper(
      <PolarisAutoForm action={api.widget.update} findBy="42">
        <PolarisSubmitResultBanner />
        <PolarisAutoHasManyInput field="gizmos" recordFilter={{ name: { equals: "gizmo 2" } }} />
        <PolarisAutoSubmit />
      </PolarisAutoForm>,
      PolarisWrapper
    );

    cy.wait("@gizmos"); // This asserts the filter is applied
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
        name: null,
        validations: [],
        fields: [
          {
            name: "Gizmos",
            apiIdentifier: "gizmos",
            fieldType: "HasMany",
            requiredArgumentForInput: false,
            sortable: false,
            filterable: false,
            __typename: "GadgetModelField",
            configuration: {
              __typename: "GadgetHasManyConfig",
              fieldType: "HasMany",
              validations: [],
              relatedModel: {
                key: "DataModel-gizmo",
                apiIdentifier: "gizmo",
                namespace: [],
                defaultDisplayField: {
                  apiIdentifier: "name",
                },
                __typename: "GadgetModel",
              },
              inverseField: {
                apiIdentifier: "widget",
                __typename: "GadgetModelField",
              },
            },
          },
        ],
      },
      __typename: "GadgetObjectField",
    },
  ];
};
