import React from "react";
import { api } from "../../../support/api.js";
import { describeForEachAutoAdapter } from "../../../support/auto.js";
import { SUITE_NAMES } from "../../../support/constants.js";

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

    if (name === SUITE_NAMES.POLARIS_WC) {
      // PolarisWC renders labels as the label attribute on web components
      cy.get('[label="Base model name"]').should("exist");
      cy.get('[label="Joiner models"]').should("not.exist");
      cy.get('[label="Base model hmt field"]').should("exist");
    } else {
      // Name field input is shown
      cy.contains("Base model name");

      // hasMany->joinModel input is filtered out
      cy.contains("Joiner models").should("not.exist");

      cy.contains("Base model hmt field").should("exist");
    }
  });
});

const modelActionMetadataResponse = {
  data: {
    gadgetMeta: {
      modelAndRelatedModels: [
        {
          key: "OD5Jq1jnpfCW",
          name: "Base model",
          namespace: ["hasManyThrough"],
          apiIdentifier: "baseModel",
          defaultRecord: {
            __typename: "HasManyThroughBaseModel",
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
                  name: "Sibling model",
                  apiIdentifier: "siblingModel",
                  namespace: ["hasManyThrough"],
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
                joinModelHasManyFieldApiIdentifier: "joinerModels",
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
                  name: "Joiner model",
                  apiIdentifier: "joinerModel",
                  namespace: ["hasManyThrough"],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "joinerBelongsToBase",
                  __typename: "GadgetModelField",
                },
              },
            },
          ],
          defaultDisplayField: {
            name: "Base model name",
            apiIdentifier: "baseModelName",
            fieldType: "String",
            __typename: "GadgetModelField",
          },
          __typename: "GadgetModel",
        },
        {
          key: "tJDsf_FvYqsi",
          name: "Joiner model",
          namespace: ["hasManyThrough"],
          apiIdentifier: "joinerModel",
          defaultRecord: {
            __typename: "HasManyThroughJoinerModel",
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
              name: "Joiner belongs to sibling",
              apiIdentifier: "joinerBelongsToSibling",
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
                  key: "Oss4sCDW-DJU",
                  name: "Sibling model",
                  apiIdentifier: "siblingModel",
                  namespace: ["hasManyThrough"],
                  __typename: "GadgetModel",
                },
              },
            },
            {
              name: "Joiner belongs to base",
              apiIdentifier: "joinerBelongsToBase",
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
                  key: "OD5Jq1jnpfCW",
                  name: "Base model",
                  apiIdentifier: "baseModel",
                  namespace: ["hasManyThrough"],
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
            name: "Id",
            apiIdentifier: "id",
            fieldType: "ID",
            __typename: "GadgetModelField",
          },
          __typename: "GadgetModel",
        },
        {
          key: "Oss4sCDW-DJU",
          name: "Sibling model",
          namespace: ["hasManyThrough"],
          apiIdentifier: "siblingModel",
          defaultRecord: {
            __typename: "HasManyThroughSiblingModel",
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
              name: "Sibling name",
              apiIdentifier: "siblingName",
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
              name: "Sibling model hmt field",
              apiIdentifier: "siblingModelHmtField",
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
                  key: "OD5Jq1jnpfCW",
                  name: "Base model",
                  apiIdentifier: "baseModel",
                  namespace: ["hasManyThrough"],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "baseModelHmtField",
                  __typename: "GadgetModelField",
                },
                joinModel: {
                  key: "tJDsf_FvYqsi",
                  apiIdentifier: "joinerModel",
                  namespace: ["hasManyThrough"],
                  __typename: "GadgetModel",
                },
                inverseJoinModelField: {
                  apiIdentifier: "joinerBelongsToSibling",
                  __typename: "GadgetModelField",
                },
                inverseRelatedModelField: {
                  apiIdentifier: "joinerBelongsToBase",
                  __typename: "GadgetModelField",
                },
                joinModelHasManyFieldApiIdentifier: "joinerModels",
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
                  name: "Joiner model",
                  apiIdentifier: "joinerModel",
                  namespace: ["hasManyThrough"],
                  __typename: "GadgetModel",
                },
                inverseField: {
                  apiIdentifier: "joinerBelongsToSibling",
                  __typename: "GadgetModelField",
                },
              },
            },
          ],
          defaultDisplayField: {
            name: "Sibling name",
            apiIdentifier: "siblingName",
            fieldType: "String",
            __typename: "GadgetModelField",
          },
          __typename: "GadgetModel",
        },
      ],
      model: {
        key: "OD5Jq1jnpfCW",
        name: "Base model",
        namespace: ["hasManyThrough"],
        apiIdentifier: "baseModel",
        defaultRecord: {
          __typename: "HasManyThroughBaseModel",
        },
        action: {
          name: "Create",
          apiIdentifier: "create",
          operatesWithRecordIdentity: false,
          isDeleteAction: false,
          isUpsertMetaAction: false,
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
                        name: "Joiner model",
                        apiIdentifier: "joinerModel",
                        namespace: ["hasManyThrough"],
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
                        name: "Sibling model",
                        apiIdentifier: "siblingModel",
                        namespace: ["hasManyThrough"],
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
                      joinModelHasManyFieldApiIdentifier: "joinerModels",
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
    logs: "https://ggt.link/logs/114412/0bb293a5db505c40a17964e31793badb",
    traceId: "0bb293a5db505c40a17964e31793badb",
  },
};
