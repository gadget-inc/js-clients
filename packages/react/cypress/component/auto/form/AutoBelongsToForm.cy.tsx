import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";
import { SUITE_NAMES } from "../../../support/constants.js";

const originalSectionLinkedToWidget = { id: "1", name: "Section 1", label: "Label 1" };

describeForEachAutoAdapter(
  "AutoBelongsToForm",
  ({ name, adapter: { AutoForm, AutoInput, AutoSubmit, SubmitResultBanner, AutoBelongsToForm }, wrapper }) => {
    const interceptModelUpdateActionMetadata = () => {
      cy.intercept({ method: "POST", url: `${api.connection.endpoint}?operation=ModelActionMetadata` }, RealWidgetMetadata).as(
        "ModelCreateActionMetadata"
      );
    };

    const getDropdownMenuTriggerSelector = () => {
      return name == SUITE_NAMES.SHADCN ? "[data-testid='widget.section-dropdown-menu-trigger']" : ".Polaris-Button__Icon";
    };

    const expectUpdateActionSubmissionVariables = (expectedQueryValue?: any) => {
      cy.intercept({ method: "POST", url: `${api.connection.endpoint}?operation=updateWidget` }, (req) => {
        // eslint-disable-next-line
        expect(req.body.variables).to.deep.equal(expectedQueryValue);
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
              section: originalSectionLinkedToWidget,
              sectionId: parseInt(originalSectionLinkedToWidget.id),
            },
          },
        });
      }).as("widget");
    };

    const interceptSectionsOptionsQuery = () => {
      cy.intercept(
        {
          method: "POST",
          url: `${api.connection.endpoint}?operation=sections`,
        },
        (req) => {
          const sections = [
            {
              cursor: "eyJpZCI6IjEwODgifQ==",
              node: {
                __typename: "Section",
                id: "1",
                createdAt: "2023-09-07T19:18:50.742Z",
                name: "Section 1",
                label: "Label 1",
                updatedAt: "2024-07-09T14:42:20.788Z",
              },
              __typename: "SectionEdge",
            },
          ];

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
      interceptSectionsOptionsQuery();
      interceptWidgetQuery();
    });

    it("renders form fields for related record", () => {
      cy.mountWithWrapper(
        <AutoForm action={api.widget.update} findBy="42">
          <SubmitResultBanner />
          <AutoBelongsToForm
            field="section"
            recordLabel={{
              primary: "name",
              secondary: "label",
            }}
          >
            <AutoInput field="name" />
            <AutoInput field="label" />
          </AutoBelongsToForm>
          <AutoSubmit id="submit" />
        </AutoForm>,
        wrapper
      );

      cy.wait("@ModelCreateActionMetadata");
      cy.wait("@widget");

      cy.contains("Section 1"); // primary label
      cy.contains("Label 1"); // secondary label

      cy.get(getDropdownMenuTriggerSelector()).first().click();
      cy.contains("Edit section").click();

      cy.clickAndType('input[id="widget.section.name"]', "Section 1 - updated", true);
      cy.clickAndType('input[id="widget.section.label"]', "Label 1 - updated", true);

      cy.contains("Save").click();

      expectUpdateActionSubmissionVariables({
        id: "42",
        widget: {
          section: { update: { id: "1", name: "Section 1 - updated", label: "Label 1 - updated" } },
        },
      });
      cy.get('[id="submit"]').click();
      cy.wait("@updateWidget");
    });

    it("can unlink a belongsTo relationship", () => {
      cy.mountWithWrapper(
        <AutoForm action={api.widget.update} findBy="42">
          <SubmitResultBanner />
          <AutoBelongsToForm
            field="section"
            recordLabel={{
              primary: "name",
              secondary: "label",
            }}
          >
            <AutoInput field="name" />
            <AutoInput field="label" />
          </AutoBelongsToForm>
          <AutoSubmit id="submit" />
        </AutoForm>,
        wrapper
      );

      cy.wait("@ModelCreateActionMetadata");
      cy.wait("@widget");

      cy.contains("Section 1"); // primary label
      cy.contains("Label 1"); // secondary label

      cy.get(getDropdownMenuTriggerSelector()).first().click();
      cy.contains("Remove section").click();

      expectUpdateActionSubmissionVariables({
        id: "42",
        widget: {
          section: { _link: null },
        },
      });
      cy.get('[id="submit"]').click();
      cy.wait("@updateWidget");
    });
  }
);

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
          name: "Update",
          apiIdentifier: "update",
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
                    name: "Inventory count",
                    apiIdentifier: "inventoryCount",
                    fieldType: "Number",
                    requiredArgumentForInput: false,
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
