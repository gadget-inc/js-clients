import React from "react";
import { PolarisAutoForm } from "../../../../src/auto/polaris/PolarisAutoForm.js";
import { PolarisAutoInput } from "../../../../src/auto/polaris/inputs/PolarisAutoInput.js";
import { PolarisAutoHasManyForm } from "../../../../src/auto/polaris/inputs/relationships/PolarisAutoHasManyForm.js";
import { PolarisAutoSubmit } from "../../../../src/auto/polaris/submit/PolarisAutoSubmit.js";
import { PolarisSubmitResultBanner } from "../../../../src/auto/polaris/submit/PolarisSubmitResultBanner.js";
import { get } from "../../../../src/utils.js";
import { api } from "../../../support/api.js";
import { PolarisWrapper } from "../../../support/auto.js";

const originalGizmosLinkedToWidget = [
  { id: "1", name: "Gizmo 1", orientation: "up" },
  { id: "2", name: "Gizmo 2", orientation: "up" },
];

describe("PolarisAutoHasManyForm", () => {
  const interceptModelUpdateActionMetadata = () => {
    cy.intercept({ method: "POST", url: `${api.connection.endpoint}?operation=ModelActionMetadata` }, RealWidgetMetadata).as(
      "ModelCreateActionMetadata"
    );
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

  const interceptGizmosOptionsQuery = (sectionCount: number) => {
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
    ).as("sections");
  };

  beforeEach(() => {
    cy.viewport("macbook-13");

    interceptModelUpdateActionMetadata();
    interceptGizmosOptionsQuery(5);
    interceptWidgetQuery();
  });

  it("renders nested form fields for related records", () => {
    cy.mountWithWrapper(
      <PolarisAutoForm action={api.widget.update} findBy="42">
        <PolarisSubmitResultBanner />
        <PolarisAutoHasManyForm field="gizmos" primaryLabel="name" secondaryLabel="orientation">
          <PolarisAutoInput field="name" />
          <PolarisAutoInput field="orientation" />
          <PolarisAutoInput field="attachment" />
        </PolarisAutoHasManyForm>
        <PolarisAutoSubmit id="submit" />
      </PolarisAutoForm>,
      PolarisWrapper
    );

    cy.wait("@ModelCreateActionMetadata");
    cy.wait("@widget");

    cy.get('[id="gizmos.0"]').click();
    cy.get('input[id="widget.gizmos.0.name"]').should("exist").click().type(" - updated");
    cy.get('input[id="widget.gizmos.0.orientation"]').should("exist").click().type(" - updated");

    cy.contains("Add Gizmo").click();
    cy.get('input[id="widget.gizmos.2.name"]').should("exist").click().type("New gizmo");
    cy.get('input[id="widget.gizmos.2.orientation"]').should("exist").click().type("New orientation");
    cy.contains("Confirm").click();

    cy.get('[id="gizmos.1"]').click();
    cy.contains("Delete").click();
    cy.contains("Confirm").click();

    expectUpdateActionSubmissionVariables({
      id: "42",
      widget: {
        gizmos: [
          { update: { attachment: null, id: "1", name: "Gizmo 1 - updated", orientation: "up - updated" } },
          { delete: { id: "2" } },
          { create: { attachment: null, name: "New gizmo", orientation: "New orientation" } },
        ],
      },
    });
    cy.get('[id="submit"]').click();
    cy.wait("@updateWidget");
  });

  it("supports nested has-many relationships", () => {
    cy.mountWithWrapper(
      <PolarisAutoForm action={api.widget.update} findBy="42">
        <PolarisAutoHasManyForm field="gizmos">
          <PolarisAutoInput field="name" />
          <PolarisAutoHasManyForm field="doodads">
            <PolarisAutoInput field="name" />
            <PolarisAutoInput field="weight" />
          </PolarisAutoHasManyForm>
        </PolarisAutoHasManyForm>
        <PolarisAutoSubmit id="submit" />
      </PolarisAutoForm>,
      PolarisWrapper
    );

    cy.wait("@ModelCreateActionMetadata");
    cy.wait("@widget");

    cy.get('[id="gizmos.0"]').click();
    cy.get('input[id="widget.gizmos.0.name"]').should("exist").click().type(" - updated");

    cy.contains("Add Doodad").should("exist").parent().click();

    cy.get("input[id='widget.gizmos.0.doodads.0.name']").should("exist").click().type(" - updated");
    cy.get("button[id='confirmButton_gizmos.doodads.0']").should("exist").click();
    cy.contains("Confirm").click();

    expectUpdateActionSubmissionVariables({
      id: "42",
      widget: {
        gizmos: [
          {
            update: {
              doodads: [{ create: { name: " - updated", weight: null } }],
              id: "1",
              name: "Gizmo 1 - updated",
              orientation: "up",
            },
          },
          { update: { doodads: null, id: "2", name: "Gizmo 2", orientation: "up" } },
        ],
      },
    });
    cy.get('[id="submit"]').click();
    cy.wait("@updateWidget");
  });
});

const RealWidgetMetadata = {
  data: {
    gadgetMeta: {
      modelAndRelatedModels: [
        {
          key: "DataModel-yk-gnBo6p8Jd",
          name: "Widget",
          namespace: [],
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
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "ID",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Uniqueness",
                    specID: "gadget/validation/unique",
                  },
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
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
            {
              name: "Is checked",
              apiIdentifier: "isChecked",
              fieldType: "Boolean",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "Boolean",
                validations: [],
              },
            },
            {
              name: "Must be long string",
              apiIdentifier: "mustBeLongString",
              fieldType: "String",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "String",
                validations: [
                  {
                    __typename: "GadgetRangeFieldValidation",
                    name: "String length range",
                    specID: "gadget/validation/string-size",
                    min: 20,
                    max: null,
                  },
                ],
              },
            },
            {
              name: "Category",
              apiIdentifier: "category",
              fieldType: "Enum",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetEnumConfig",
                fieldType: "Enum",
                validations: [],
                allowMultiple: true,
                allowOther: false,
                options: [
                  {
                    name: "Whoosits",
                    color: "#FCFCFC",
                    __typename: "GadgetEnumOption",
                  },
                  {
                    name: "Whatsits",
                    color: "#606060",
                    __typename: "GadgetEnumOption",
                  },
                  {
                    name: "Galores",
                    color: "#DF2222",
                    __typename: "GadgetEnumOption",
                  },
                ],
              },
            },
            {
              name: "Starts at",
              apiIdentifier: "startsAt",
              fieldType: "DateTime",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [],
                includeTime: true,
              },
            },
            {
              name: "Birthday",
              apiIdentifier: "birthday",
              fieldType: "DateTime",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [],
                includeTime: false,
              },
            },
            {
              name: "Section",
              apiIdentifier: "section",
              fieldType: "BelongsTo",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetBelongsToConfig",
                fieldType: "BelongsTo",
                validations: [],
                relatedModel: {
                  key: "DataModel-NseoFVXSD9Wm",
                  name: "Section",
                  apiIdentifier: "section",
                  namespace: [],
                  __typename: "GadgetModel",
                },
              },
            },
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
                isJoinModelHasManyField: false,
                relatedModel: {
                  key: "DataModel-T9yqdTpcpBBH",
                  name: "Gizmo",
                  apiIdentifier: "gizmo",
                  namespace: [],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "widget",
                  __typename: "GadgetModelField",
                },
              },
            },
            {
              name: "Anything",
              apiIdentifier: "anything",
              fieldType: "JSON",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "JSON",
                validations: [],
              },
            },
            {
              name: "Description",
              apiIdentifier: "description",
              fieldType: "RichText",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "RichText",
                validations: [],
              },
            },
            {
              name: "Metafields",
              apiIdentifier: "metafields",
              fieldType: "JSON",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "JSON",
                validations: [],
              },
            },
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
            {
              name: "In stock",
              apiIdentifier: "inStock",
              fieldType: "Computed",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: false,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "Computed",
                validations: [],
              },
            },
            {
              name: "Color",
              apiIdentifier: "color",
              fieldType: "Color",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "Color",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Color",
                    specID: "gadget/validation/color",
                  },
                ],
              },
            },
            {
              name: "Secret key",
              apiIdentifier: "secretKey",
              fieldType: "EncryptedString",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: false,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "EncryptedString",
                validations: [],
              },
            },
            {
              name: "Doodad",
              apiIdentifier: "doodad",
              fieldType: "HasOne",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: false,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetHasOneConfig",
                fieldType: "HasOne",
                validations: [],
                relatedModel: {
                  key: "m4cUyZSPZRV8",
                  name: "Doodad",
                  apiIdentifier: "doodad",
                  namespace: [],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "widget",
                  __typename: "GadgetModelField",
                },
              },
            },
            {
              name: "Embedding",
              apiIdentifier: "embedding",
              fieldType: "Vector",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "Vector",
                validations: [],
              },
            },
            {
              name: "Created at",
              apiIdentifier: "createdAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
            {
              name: "Updated at",
              apiIdentifier: "updatedAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
          ],
          defaultDisplayField: {
            name: "Name",
            apiIdentifier: "name",
            fieldType: "String",
            __typename: "GadgetModelField",
          },
          __typename: "GadgetModel",
        },
        {
          key: "m4cUyZSPZRV8",
          name: "Doodad",
          namespace: [],
          apiIdentifier: "doodad",
          defaultRecord: {
            __typename: "Doodad",
          },
          fields: [
            {
              name: "Id",
              apiIdentifier: "id",
              fieldType: "ID",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "ID",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Uniqueness",
                    specID: "gadget/validation/unique",
                  },
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
              },
            },
            {
              name: "Name",
              apiIdentifier: "name",
              fieldType: "String",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "String",
                validations: [],
              },
            },
            {
              name: "Weight",
              apiIdentifier: "weight",
              fieldType: "Number",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetNumberConfig",
                fieldType: "Number",
                validations: [],
                decimals: null,
              },
            },
            {
              name: "Active",
              apiIdentifier: "active",
              fieldType: "Boolean",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "Boolean",
                validations: [],
              },
            },
            {
              name: "Size",
              apiIdentifier: "size",
              fieldType: "Enum",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetEnumConfig",
                fieldType: "Enum",
                validations: [],
                allowMultiple: false,
                allowOther: false,
                options: [
                  {
                    name: "Small",
                    color: "#FCFCFC",
                    __typename: "GadgetEnumOption",
                  },
                  {
                    name: "Medium",
                    color: "#606060",
                    __typename: "GadgetEnumOption",
                  },
                  {
                    name: "Large",
                    color: "#DF2222",
                    __typename: "GadgetEnumOption",
                  },
                ],
              },
            },
            {
              name: "Widget",
              apiIdentifier: "widget",
              fieldType: "BelongsTo",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetBelongsToConfig",
                fieldType: "BelongsTo",
                validations: [],
                relatedModel: {
                  key: "DataModel-yk-gnBo6p8Jd",
                  name: "Widget",
                  apiIdentifier: "widget",
                  namespace: [],
                  __typename: "GadgetModel",
                },
              },
            },
            {
              name: "Gizmo",
              apiIdentifier: "gizmo",
              fieldType: "BelongsTo",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetBelongsToConfig",
                fieldType: "BelongsTo",
                validations: [],
                relatedModel: {
                  key: "DataModel-T9yqdTpcpBBH",
                  name: "Gizmo",
                  apiIdentifier: "gizmo",
                  namespace: [],
                  __typename: "GadgetModel",
                },
              },
            },
            {
              name: "Created at",
              apiIdentifier: "createdAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
            {
              name: "Updated at",
              apiIdentifier: "updatedAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
          ],
          defaultDisplayField: {
            name: "Name",
            apiIdentifier: "name",
            fieldType: "String",
            __typename: "GadgetModelField",
          },
          __typename: "GadgetModel",
        },
        {
          key: "DataModel-T9yqdTpcpBBH",
          name: "Gizmo",
          namespace: [],
          apiIdentifier: "gizmo",
          defaultRecord: {
            __typename: "Gizmo",
          },
          fields: [
            {
              name: "Id",
              apiIdentifier: "id",
              fieldType: "ID",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "ID",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Uniqueness",
                    specID: "gadget/validation/unique",
                  },
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
              },
            },
            {
              name: "Name",
              apiIdentifier: "name",
              fieldType: "String",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "String",
                validations: [],
              },
            },
            {
              name: "Orientation",
              apiIdentifier: "orientation",
              fieldType: "String",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "String",
                validations: [],
              },
            },
            {
              name: "Widget",
              apiIdentifier: "widget",
              fieldType: "BelongsTo",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetBelongsToConfig",
                fieldType: "BelongsTo",
                validations: [],
                relatedModel: {
                  key: "DataModel-yk-gnBo6p8Jd",
                  name: "Widget",
                  apiIdentifier: "widget",
                  namespace: [],
                  __typename: "GadgetModel",
                },
              },
            },
            {
              name: "Attachment",
              apiIdentifier: "attachment",
              fieldType: "File",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: false,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "File",
                validations: [],
              },
            },
            {
              name: "Doodads",
              apiIdentifier: "doodads",
              fieldType: "HasMany",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: false,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetHasManyConfig",
                fieldType: "HasMany",
                validations: [],
                isJoinModelHasManyField: false,
                relatedModel: {
                  key: "m4cUyZSPZRV8",
                  name: "Doodad",
                  apiIdentifier: "doodad",
                  namespace: [],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "gizmo",
                  __typename: "GadgetModelField",
                },
              },
            },
            {
              name: "Created at",
              apiIdentifier: "createdAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
            {
              name: "Updated at",
              apiIdentifier: "updatedAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
          ],
          defaultDisplayField: {
            name: "Name",
            apiIdentifier: "name",
            fieldType: "String",
            __typename: "GadgetModelField",
          },
          __typename: "GadgetModel",
        },

        {
          key: "DataModel-NseoFVXSD9Wm",
          name: "Section",
          namespace: [],
          apiIdentifier: "section",
          defaultRecord: {
            __typename: "Section",
          },
          fields: [
            {
              name: "Id",
              apiIdentifier: "id",
              fieldType: "ID",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "ID",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Uniqueness",
                    specID: "gadget/validation/unique",
                  },
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
              },
            },
            {
              name: "Name",
              apiIdentifier: "name",
              fieldType: "String",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "String",
                validations: [],
              },
            },
            {
              name: "Label",
              apiIdentifier: "label",
              fieldType: "String",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "String",
                validations: [],
              },
            },
            {
              name: "Widgets",
              apiIdentifier: "widgets",
              fieldType: "HasMany",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: false,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetHasManyConfig",
                fieldType: "HasMany",
                validations: [],
                isJoinModelHasManyField: false,
                relatedModel: {
                  key: "DataModel-yk-gnBo6p8Jd",
                  name: "Widget",
                  apiIdentifier: "widget",
                  namespace: [],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "section",
                  __typename: "GadgetModelField",
                },
              },
            },
            {
              name: "Created at",
              apiIdentifier: "createdAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
            {
              name: "Updated at",
              apiIdentifier: "updatedAt",
              fieldType: "DateTime",
              requiredArgumentForInput: true,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetDateTimeConfig",
                fieldType: "DateTime",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Required",
                    specID: "gadget/validation/required",
                  },
                ],
                includeTime: true,
              },
            },
          ],
          defaultDisplayField: {
            name: "Name",
            apiIdentifier: "name",
            fieldType: "String",
            __typename: "GadgetModelField",
          },
          __typename: "GadgetModel",
        },
      ],
      model: {
        key: "DataModel-yk-gnBo6p8Jd",
        name: "Widget",
        namespace: [],
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
          name: "Update with custom params",
          apiIdentifier: "updateWithCustomParams",
          operatesWithRecordIdentity: true,
          isDeleteAction: false,
          isUpsertMetaAction: false,
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
                    name: "Name",
                    apiIdentifier: "name",
                    fieldType: "String",
                    requiredArgumentForInput: false,
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
                      isJoinModelHasManyField: false,
                      relatedModel: {
                        key: "DataModel-T9yqdTpcpBBH",
                        name: "Gizmo",
                        apiIdentifier: "gizmo",
                        namespace: [],
                        __typename: "GadgetModel",
                      },
                      inverseField: {
                        apiIdentifier: "widget",
                        __typename: "GadgetModelField",
                      },
                    },
                  },

                  {
                    name: "Section",
                    apiIdentifier: "section",
                    fieldType: "BelongsTo",
                    requiredArgumentForInput: false,
                    sortable: false,
                    filterable: true,
                    __typename: "GadgetModelField",
                    configuration: {
                      __typename: "GadgetBelongsToConfig",
                      fieldType: "BelongsTo",
                      validations: [],
                      relatedModel: {
                        key: "DataModel-NseoFVXSD9Wm",
                        name: "Section",
                        apiIdentifier: "section",
                        namespace: [],
                        __typename: "GadgetModel",
                      },
                    },
                  },

                  {
                    name: "Doodad",
                    apiIdentifier: "doodad",
                    fieldType: "HasOne",
                    requiredArgumentForInput: false,
                    sortable: false,
                    filterable: false,
                    __typename: "GadgetModelField",
                    configuration: {
                      __typename: "GadgetHasOneConfig",
                      fieldType: "HasOne",
                      validations: [],
                      relatedModel: {
                        key: "m4cUyZSPZRV8",
                        name: "Doodad",
                        apiIdentifier: "doodad",
                        namespace: [],
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
            {
              name: "Custom string param",
              apiIdentifier: "customStringParam",
              fieldType: "String",
              requiredArgumentForInput: false,
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "String",
                validations: [],
              },
              __typename: "GadgetObjectField",
            },
            {
              name: "Id",
              apiIdentifier: "id",
              fieldType: "ID",
              requiredArgumentForInput: true,
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "ID",
                validations: [],
              },
              __typename: "GadgetObjectField",
            },
          ],
          triggers: [
            {
              specID: "gadget/trigger/graphql_api",
              __typename: "GadgetTrigger",
            },
          ],
          __typename: "GadgetAction",
        },
        __typename: "GadgetModel",
      },
      __typename: "GadgetApplicationMeta",
    },
  },
};
