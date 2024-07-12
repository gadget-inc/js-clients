import { recordIdInputField } from "./shared.js";

export const gameCityModelInputFields = {
  name: "City",
  apiIdentifier: "city",
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
          validations: [],
        },
      },
      {
        name: "Stadium",
        apiIdentifier: "stadium",
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
            apiIdentifier: "stadium",
            namespace: ["game"],
            __typename: "GadgetModel",
          },
          inverseField: {
            apiIdentifier: "city",
            __typename: "GadgetModelField",
          },
        },
      },
    ],
  },
  __typename: "GadgetObjectField",
};

export const getGameCityModelMetadata = (action: { name: string; apiIdentifier: string; operatesWithRecordIdentity: boolean }) => {
  return {
    gadgetMeta: {
      model: {
        name: "City",
        action: {
          ...action,
          inputFields: [recordIdInputField, gameCityModelInputFields],
          __typename: "GadgetAction",
        },
        __typename: "GadgetModel",
      },
      __typename: "GadgetApplicationMeta",
    },
  };
};

export const getGameCityRecord = (overrides?: { id?: string; name?: string }) => {
  // Default values
  const name = overrides?.name ?? "Ottawa";
  const id = overrides?.id ?? "42";

  return {
    game: {
      city: {
        __typename: "GameCity",
        id,
        createdAt: "2024-07-02T18:31:56.679Z",
        name,
        updatedAt: "2024-07-03T20:49:25.475Z",
      },
      __typename: "GameQueries",
    },
    gadgetMeta: {
      hydrations: {
        createdAt: "DateTime",
        updatedAt: "DateTime",
      },
      __typename: "GadgetApplicationMeta",
    },
  };
};
