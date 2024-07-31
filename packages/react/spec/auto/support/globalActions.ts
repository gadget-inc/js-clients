import { apiTriggerOnly } from "./Triggers.js";

export const getGlobalActionMetadata = (opts: { apiIdentifier: string; inputFields?: any[]; triggers?: any[] }) => {
  const { apiIdentifier, inputFields = flipAllInputFields, triggers = apiTriggerOnly } = opts;
  return {
    gadgetMeta: {
      globalAction: {
        name: apiIdentifier,
        apiIdentifier,
        inputFields,
        triggers,
        __typename: "GadgetGlobalAction",
      },
      __typename: "GadgetApplicationMeta",
    },
  };
};

const flipAllInputFields = [
  {
    name: "Inventory count",
    apiIdentifier: "inventoryCount",
    fieldType: "Number",
    requiredArgumentForInput: false,
    configuration: {
      __typename: "GadgetNumberConfig",
      fieldType: "Number",
      validations: [],
      decimals: null,
    },
    __typename: "GadgetObjectField",
  },
  {
    name: "Title",
    apiIdentifier: "title",
    fieldType: "String",
    requiredArgumentForInput: false,
    configuration: {
      __typename: "GadgetGenericFieldConfig",
      fieldType: "String",
      validations: [],
    },
    __typename: "GadgetObjectField",
  },
];
