import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";

describeForEachAutoAdapter("AutoForm - HasManyThrough fields", ({ name, adapter: { AutoForm }, wrapper }) => {
  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  const interceptModelActionMetadataRequest = () => {
    cy.intercept(
      {
        method: "POST",
        url: `${api.connection.endpoint}?operation=ModelActionMetadata`,
      },
      modelActionMetadataResponse
    ).as("ModelActionMetadata");
  };

  it("does not render the hasMany->joinModel input field", () => {
    interceptModelActionMetadataRequest();

    cy.mountWithWrapper(<AutoForm action={api.hasManyThrough.baseModel.create} />, wrapper);
    cy.wait("@ModelActionMetadata");

    // Name field input is shown
    cy.contains("Base model name");

    // hasMany->joinModel input is filtered out
    cy.contains("Joiner models").should("not.exist");

    // HasManyThrough field input is not shown - TODO: This is not yet implemented yet
    cy.contains("Base model hmt field").should("not.exist");
  });
});

const modelActionMetadataResponse = {
  data: {
    gadgetMeta: {
      modelAndRelatedModels: [
        {
          name: "Base model",
          apiIdentifier: "baseModel",
          defaultRecord: {
            __typename: "HasManyThroughBaseModel",
          },
          fields: [
            {
              name: "Base model name",
              apiIdentifier: "baseModelName",
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
              name: "Joiner models",
              apiIdentifier: "joinerModels",
              fieldType: "HasMany",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: false,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetHasManyConfig",
                fieldType: "HasMany",
                validations: [],
                isJoinModelHasManyField: true,
                relatedModel: {
                  key: "tJDsf_FvYqsi",
                  apiIdentifier: "joinerModel",
                  namespace: ["hasManyThrough"],
                  defaultDisplayField: {
                    name: "Id",
                    apiIdentifier: "id",
                    fieldType: "ID",
                    __typename: "GadgetModelField",
                  },
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "joinerBelongsToBase",
                  __typename: "GadgetModelField",
                },
              },
            },
            {
              name: "Base model hmt field",
              apiIdentifier: "baseModelHmtField",
              fieldType: "HasManyThrough",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: false,
              __typename: "GadgetModelField",
              configuration: {
                __typename: "GadgetHasManyThroughConfig",
                fieldType: "HasManyThrough",
                validations: [],
                relatedModel: {
                  key: "Oss4sCDW-DJU",
                  apiIdentifier: "siblingModel",
                  namespace: ["hasManyThrough"],
                  defaultDisplayField: {
                    name: "Id",
                    apiIdentifier: "id",
                    fieldType: "ID",
                    __typename: "GadgetModelField",
                  },
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "siblingModelHmtField",
                  __typename: "GadgetModelField",
                },
                joinModel: {
                  key: "tJDsf_FvYqsi",
                  apiIdentifier: "joinerModel",
                  namespace: ["hasManyThrough"],
                  defaultDisplayField: {
                    name: "Id",
                    apiIdentifier: "id",
                    fieldType: "ID",
                    __typename: "GadgetModelField",
                  },
                  __typename: "GadgetModel",
                },
                inverseJoinModelField: {
                  apiIdentifier: "joinerBelongsToBase",
                  __typename: "GadgetModelField",
                },
                inverseRelatedModelField: {
                  apiIdentifier: "joinerBelongsToSibling",
                  __typename: "GadgetModelField",
                },
              },
            },
          ],
          defaultDisplayField: {
            name: "Id",
            apiIdentifier: "id",
            fieldType: "ID",
            __typename: "GadgetModelField",
          },
          __typename: "GadgetModel",
        },
        {
          key: "tJDsf_FvYqsi",
          apiIdentifier: "joinerModel",
          namespace: ["hasManyThrough"],
          defaultDisplayField: {
            name: "Id",
            apiIdentifier: "id",
            fieldType: "ID",
            __typename: "GadgetModelField",
          },
          fields: [],
          __typename: "GadgetModel",
        },
        {
          key: "Oss4sCDW-DJU",
          apiIdentifier: "siblingModel",
          namespace: ["hasManyThrough"],
          defaultDisplayField: {
            name: "Id",
            apiIdentifier: "id",
            fieldType: "ID",
            __typename: "GadgetModelField",
          },
          fields: [],
          __typename: "GadgetModel",
        },
      ],
      model: {
        name: "Base model",
        apiIdentifier: "baseModel",
        defaultRecord: {
          __typename: "HasManyThroughBaseModel",
        },
        action: {
          name: "Create",
          apiIdentifier: "create",
          operatesWithRecordIdentity: false,
          isDeleteAction: false,
          inputFields: [
            {
              name: "Base model",
              apiIdentifier: "baseModel",
              fieldType: "Object",
              requiredArgumentForInput: false,
              configuration: {
                __typename: "GadgetObjectFieldConfig",
                fieldType: "Object",
                validations: [],
                name: null,
                fields: [
                  {
                    name: "Base model name",
                    apiIdentifier: "baseModelName",
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
                    name: "Joiner models",
                    apiIdentifier: "joinerModels",
                    fieldType: "HasMany",
                    requiredArgumentForInput: false,
                    sortable: false,
                    filterable: false,
                    __typename: "GadgetModelField",
                    configuration: {
                      __typename: "GadgetHasManyConfig",
                      fieldType: "HasMany",
                      validations: [],
                      isJoinModelHasManyField: true,
                      relatedModel: {
                        key: "tJDsf_FvYqsi",
                        apiIdentifier: "joinerModel",
                        namespace: ["hasManyThrough"],
                        defaultDisplayField: {
                          name: "Id",
                          apiIdentifier: "id",
                          fieldType: "ID",
                          __typename: "GadgetModelField",
                        },
                        __typename: "GadgetModel",
                      },
                      inverseField: {
                        apiIdentifier: "joinerBelongsToBase",
                        __typename: "GadgetModelField",
                      },
                    },
                  },
                  {
                    name: "Base model hmt field",
                    apiIdentifier: "baseModelHmtField",
                    fieldType: "HasManyThrough",
                    requiredArgumentForInput: false,
                    sortable: false,
                    filterable: false,
                    __typename: "GadgetModelField",
                    configuration: {
                      __typename: "GadgetHasManyThroughConfig",
                      fieldType: "HasManyThrough",
                      validations: [],
                      relatedModel: {
                        key: "Oss4sCDW-DJU",
                        apiIdentifier: "siblingModel",
                        namespace: ["hasManyThrough"],
                        defaultDisplayField: {
                          name: "Id",
                          apiIdentifier: "id",
                          fieldType: "ID",
                          __typename: "GadgetModelField",
                        },
                        __typename: "GadgetModel",
                      },
                      inverseField: {
                        apiIdentifier: "siblingModelHmtField",
                        __typename: "GadgetModelField",
                      },
                      joinModel: {
                        key: "tJDsf_FvYqsi",
                        apiIdentifier: "joinerModel",
                        namespace: ["hasManyThrough"],
                        defaultDisplayField: {
                          name: "Id",
                          apiIdentifier: "id",
                          fieldType: "ID",
                          __typename: "GadgetModelField",
                        },
                        __typename: "GadgetModel",
                      },
                      inverseJoinModelField: {
                        apiIdentifier: "joinerBelongsToBase",
                        __typename: "GadgetModelField",
                      },
                      inverseRelatedModelField: {
                        apiIdentifier: "joinerBelongsToSibling",
                        __typename: "GadgetModelField",
                      },
                    },
                  },
                ],
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
  extensions: {
    logs: "https://ggt.link/logs/114412/baf607a14bf4d84e97c49ccd068621b5",
    traceId: "baf607a14bf4d84e97c49ccd068621b5",
  },
};
