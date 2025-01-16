import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";

describeForEachAutoAdapter("AutoForm - FindBy object parameters", ({ name, adapter: { AutoForm }, wrapper }) => {
  const interceptModelActionMetadata = () =>
    cy
      .intercept({ method: "POST", url: `${api.connection.endpoint}?operation=ModelActionMetadata` }, uniqueFieldsMainModelMetadata)
      .as("ModelActionMetadata");

  const interceptMainModelQueryDefaultValues = () =>
    cy
      .intercept({ method: "POST", url: `${api.connection.endpoint}?operation=mainModels` }, mainModelQueryDefaultValuesResponse)
      .as("mainModelQueryDefaultValues");

  const mockSuccessfulUpdate = () => {
    cy.intercept({ method: "POST", url: `${api.connection.endpoint}?operation=updateMainModel` }, (req) => {
      req.reply(successfulUpdateResponse);
    }).as("updateMainModel");
  };

  beforeEach(() => {
    cy.viewport("macbook-13");
    interceptModelActionMetadata();
    interceptMainModelQueryDefaultValues();
  });

  it("can submit update forms with findBy object properties", () => {
    cy.mountWithWrapper(<AutoForm action={api.uniqueFields.mainModel.update} findBy={{ uniqueBelongsTo: "22" }} />, wrapper);

    cy.wait(["@ModelActionMetadata", "@mainModelQueryDefaultValues"]);

    mockSuccessfulUpdate();
    cy.wait(300); // It takes some time to load in the findBy object

    cy.contains("Submit").click({ force: true });

    cy.wait("@updateMainModel")
      .its("request.body.variables")
      .should("deep.equal", {
        id: "2",
        mainModel: {
          childModelEntries: [],
          nonUniqueString: "example",
          uniqueEmail: "u2@email.com",
          uniqueString: "u2",
        },
      });
  });
});

const uniqueFieldsMainModelMetadata = {
  data: {
    gadgetMeta: {
      modelAndRelatedModels: [
        {
          key: "nu84_-GxRnkx",
          name: "Main model",
          namespace: ["uniqueFields"],
          apiIdentifier: "mainModel",
          defaultRecord: {
            __typename: "UniqueFieldsMainModel",
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
              name: "Unique email",
              apiIdentifier: "uniqueEmail",
              fieldType: "Email",
              requiredArgumentForInput: false,
              sortable: true,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetGenericFieldConfig",
                fieldType: "Email",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Uniqueness",
                    specID: "gadget/validation/unique",
                  },
                ],
              },
            },
            {
              name: "Unique string",
              apiIdentifier: "uniqueString",
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
                    name: "Uniqueness",
                    specID: "gadget/validation/unique",
                  },
                ],
              },
            },
            {
              name: "Non unique string",
              apiIdentifier: "nonUniqueString",
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
              name: "Unique belongs to",
              apiIdentifier: "uniqueBelongsTo",
              fieldType: "BelongsTo",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetBelongsToConfig",
                fieldType: "BelongsTo",
                validations: [
                  {
                    __typename: "GadgetGenericFieldValidation",
                    name: "Uniqueness",
                    specID: "gadget/validation/unique",
                  },
                ],
                relatedModel: {
                  key: "RK96To6wLTyn",
                  name: "Parent model",
                  apiIdentifier: "parentModel",
                  namespace: ["uniqueFields"],
                  __typename: "GadgetModel",
                },
              },
            },
            {
              name: "Child model entries",
              apiIdentifier: "childModelEntries",
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
                  key: "ZOw07DfjlSXQ",
                  name: "Child model",
                  apiIdentifier: "childModel",
                  namespace: ["uniqueFields"],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "mainModelParent",
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
            name: "Unique string",
            apiIdentifier: "uniqueString",
            fieldType: "String",
            __typename: "GadgetModelField",
          },
          __typename: "GadgetModel",
        },
        {
          key: "ZOw07DfjlSXQ",
          name: "Child model",
          namespace: ["uniqueFields"],
          apiIdentifier: "childModel",
          defaultRecord: {
            __typename: "UniqueFieldsChildModel",
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
              name: "Alias",
              apiIdentifier: "alias",
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
              name: "Main model parent",
              apiIdentifier: "mainModelParent",
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
                  key: "nu84_-GxRnkx",
                  name: "Main model",
                  apiIdentifier: "mainModel",
                  namespace: ["uniqueFields"],
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
            name: "Alias",
            apiIdentifier: "alias",
            fieldType: "String",
            __typename: "GadgetModelField",
          },
          __typename: "GadgetModel",
        },
        {
          key: "RK96To6wLTyn",
          name: "Parent model",
          namespace: ["uniqueFields"],
          apiIdentifier: "parentModel",
          defaultRecord: {
            __typename: "UniqueFieldsParentModel",
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
              name: "Parent unique string",
              apiIdentifier: "parentUniqueString",
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
                    name: "Uniqueness",
                    specID: "gadget/validation/unique",
                  },
                ],
              },
            },
            {
              name: "Parent non unique string",
              apiIdentifier: "parentNonUniqueString",
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
              name: "Base model",
              apiIdentifier: "baseModel",
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
                  key: "nu84_-GxRnkx",
                  name: "Main model",
                  apiIdentifier: "mainModel",
                  namespace: ["uniqueFields"],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "uniqueBelongsTo",
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
            name: "Parent unique string",
            apiIdentifier: "parentUniqueString",
            fieldType: "String",
            __typename: "GadgetModelField",
          },
          __typename: "GadgetModel",
        },
      ],
      model: {
        key: "nu84_-GxRnkx",
        name: "Main model",
        namespace: ["uniqueFields"],
        apiIdentifier: "mainModel",
        defaultRecord: {
          __typename: "UniqueFieldsMainModel",
        },
        action: {
          name: "Update",
          apiIdentifier: "update",
          operatesWithRecordIdentity: true,
          isDeleteAction: false,
          inputFields: [
            {
              name: "Main model",
              apiIdentifier: "mainModel",
              fieldType: "Object",
              requiredArgumentForInput: false,
              configuration: {
                __typename: "GadgetObjectFieldConfig",
                fieldType: "Object",
                validations: [],
                name: null,
                fields: [
                  {
                    name: "Unique string",
                    apiIdentifier: "uniqueString",
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
                          name: "Uniqueness",
                          specID: "gadget/validation/unique",
                        },
                      ],
                    },
                  },
                  {
                    name: "Unique email",
                    apiIdentifier: "uniqueEmail",
                    fieldType: "Email",
                    requiredArgumentForInput: false,
                    sortable: true,
                    filterable: true,
                    __typename: "GadgetModelField",
                    configuration: {
                      __typename: "GadgetGenericFieldConfig",
                      fieldType: "Email",
                      validations: [
                        {
                          __typename: "GadgetGenericFieldValidation",
                          name: "Uniqueness",
                          specID: "gadget/validation/unique",
                        },
                      ],
                    },
                  },
                  {
                    name: "Unique belongs to",
                    apiIdentifier: "uniqueBelongsTo",
                    fieldType: "BelongsTo",
                    requiredArgumentForInput: false,
                    sortable: false,
                    filterable: true,
                    __typename: "GadgetModelField",
                    configuration: {
                      __typename: "GadgetBelongsToConfig",
                      fieldType: "BelongsTo",
                      validations: [
                        {
                          __typename: "GadgetGenericFieldValidation",
                          name: "Uniqueness",
                          specID: "gadget/validation/unique",
                        },
                      ],
                      relatedModel: {
                        key: "RK96To6wLTyn",
                        name: "Parent model",
                        apiIdentifier: "parentModel",
                        namespace: ["uniqueFields"],
                        __typename: "GadgetModel",
                      },
                    },
                  },
                  {
                    name: "Non unique string",
                    apiIdentifier: "nonUniqueString",
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
                    name: "Child model entries",
                    apiIdentifier: "childModelEntries",
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
                        key: "ZOw07DfjlSXQ",
                        name: "Child model",
                        apiIdentifier: "childModel",
                        namespace: ["uniqueFields"],
                        __typename: "GadgetModel",
                      },
                      inverseField: {
                        apiIdentifier: "mainModelParent",
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

const mainModelQueryDefaultValuesResponse = {
  data: {
    uniqueFields: {
      mainModels: {
        pageInfo: {
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: "eyJpZCI6IjIifQ==",
          endCursor: "eyJpZCI6IjIifQ==",
          __typename: "PageInfo",
        },
        edges: [
          {
            cursor: "eyJpZCI6IjIifQ==",
            node: {
              id: "2",
              uniqueString: "u2",
              uniqueEmail: "u2@email.com",
              uniqueBelongsTo: null,
              uniqueBelongsToId: "22",
              nonUniqueString: "example",
              childModelEntries: {
                edges: [],
              },
            },
          },
        ],
        __typename: "UniqueFieldsMainModelConnection",
      },
      __typename: "UniqueFieldsQueries",
    },
    gadgetMeta: {
      hydrations: {
        createdAt: "DateTime",
        updatedAt: "DateTime",
      },
      __typename: "GadgetApplicationMeta",
    },
  },
};

const successfulUpdateResponse = {
  data: {
    uniqueFields: {
      updateMainModel: {
        success: true,
        errors: null,
        mainModel: {
          __typename: "UniqueFieldsMainModel",
          id: "1",
          createdAt: "2024-09-30T20:52:04.272Z",
          nonUniqueString: "updated",
          uniqueEmail: "u1@email.com",
          uniqueString: "u1",
          updatedAt: "2024-10-01T23:02:47.585Z",
        },
        __typename: "UpdateUniqueFieldsMainModelResult",
      },
      __typename: "UniqueFieldsMutations",
    },
    gadgetMeta: {
      hydrations: {
        createdAt: "DateTime",
        updatedAt: "DateTime",
      },
      __typename: "GadgetApplicationMeta",
    },
  },
};
