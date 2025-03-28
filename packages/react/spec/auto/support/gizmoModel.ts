import { recordIdInputField } from "./shared.js";
import { apiTriggerOnly } from "./Triggers.js";

export const gizmoModelInputFields = {
  name: "Gizmo",
  apiIdentifier: "gizmo",
  fieldType: "Object",
  requiredArgumentForInput: false,
  configuration: {
    __typename: "GadgetObjectFieldConfig",
    fieldType: "Object",
    name: null,
    validations: [],
    fields: [
      {
        name: "Widget",
        apiIdentifier: "widget",
        fieldType: "BelongsTo",
        requiredArgumentForInput: false,
        sortable: false,
        filterable: true,
        configuration: {
          __typename: "GadgetBelongsToConfig",
          fieldType: "BelongsTo",
          validations: [],
          relatedModel: {
            key: "DataModel-widget",
            apiIdentifier: "widget",
            namespace: [],
            defaultDisplayField: {
              apiIdentifier: "name",
            },
          },
        },
      },
      {
        name: "Name",
        apiIdentifier: "name",
        fieldType: "String",
        requiredArgumentForInput: false,
        sortable: true,
        filterable: true,
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
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "String",
          validations: [],
        },
      },
    ],
  },
};

export const getGizmoModelMetadata = (
  action: { name: string; apiIdentifier: string; operatesWithRecordIdentity: boolean },
  inputFields = [gizmoModelInputFields]
) => {
  return {
    gadgetMeta: {
      modelAndRelatedModels: [
        {
          name: "Gizmo",
          apiIdentifier: "gizmo",
          fields: inputFields,
          __typename: "GadgetModel",
        },
      ],
      model: {
        name: "Gizmo",
        apiIdentifier: "gizmo",
        action: {
          ...action,
          inputFields: action.operatesWithRecordIdentity ? [recordIdInputField, ...inputFields] : inputFields,
          triggers: apiTriggerOnly,
          __typename: "GadgetAction",
        },
        __typename: "GadgetModel",
      },
      __typename: "GadgetApplicationMeta",
    },
  };
};

export const getGizmoRecord = () => {
  return {
    gizmo: {
      __typename: "Gizmo",
      id: "1088",
      createdAt: "2023-09-07T19:18:50.742Z",
      name: "gizmo 0",
      orientation: "right side up",
      updatedAt: "2023-09-07T19:18:50.742Z",
    },
    gadgetMeta: {
      hydrations: {
        updatedAt: "DateTime",
        createdAt: "DateTime",
      },
      __typename: "GadgetApplicationMeta",
    },
  };
};
