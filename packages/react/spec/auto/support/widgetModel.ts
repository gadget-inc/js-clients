import { recordIdInputField } from "./shared.js";
import { apiTriggerOnly } from "./Triggers.js";

export const widgetModelInputFields = {
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
        name: "Name",
        apiIdentifier: "name",
        fieldType: "String",
        requiredArgumentForInput: true,
        sortable: true,
        filterable: true,
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "String",
          validations: [
            {
              name: "Required",
              specID: "gadget/validation/required",
              __typename: "GadgetGenericFieldValidation",
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
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "Number",
          validations: [
            {
              name: "Number range",
              specID: "gadget/validation/number-range",
              __typename: "GadgetRangeFieldValidation",
              min: 0,
              max: null,
            },
            {
              name: "Required",
              specID: "gadget/validation/required",
              __typename: "GadgetGenericFieldValidation",
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
          relatedModel: {
            key: "DataModel-gizmo",
            apiIdentifier: "gizmo",
            namespace: [],
            defaultDisplayField: {
              apiIdentifier: "name",
            },
            fields: [
              {
                name: "Id",
                apiIdentifier: "id",
                fieldType: "ID",
                __typename: "GadgetModelField",
              },
              {
                name: "Name",
                apiIdentifier: "name",
                fieldType: "String",
                __typename: "GadgetModelField",
              },
              {
                name: "Orientation",
                apiIdentifier: "orientation",
                fieldType: "String",
                __typename: "GadgetModelField",
              },
              {
                name: "Widget",
                apiIdentifier: "widget",
                fieldType: "BelongsTo",
                __typename: "GadgetModelField",
                configuration: {
                  __typename: "GadgetBelongsToConfig",
                },
              },
              {
                name: "Created at",
                apiIdentifier: "createdAt",
                fieldType: "DateTime",
                __typename: "GadgetModelField",
              },
              {
                name: "Updated at",
                apiIdentifier: "updatedAt",
                fieldType: "DateTime",
                __typename: "GadgetModelField",
              },
            ],
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
        configuration: {
          __typename: "GadgetEnumConfig",
          fieldType: "Enum",
          validations: [],
          allowMultiple: true,
          options: [
            {
              name: "Whoosits",
              color: "#FCFCFC",
            },
            {
              name: "Whatsits",
              color: "#606060",
            },
            {
              name: "Galores",
              color: "#DF2222",
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
        configuration: {
          __typename: "GadgetDateTimeConfig",
          fieldType: "DateTime",
          validations: [],
        },
      },
      {
        name: "Is checked",
        apiIdentifier: "isChecked",
        fieldType: "Boolean",
        requiredArgumentForInput: false,
        sortable: true,
        filterable: true,
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
        configuration: {
          __typename: "GadgetDateTimeConfig",
          fieldType: "DateTime",
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
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "Color",
          validations: [
            {
              name: "Color",
              specID: "gadget/validation/color",
              __typename: "GadgetGenericFieldValidation",
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
      {
        name: "Must be long string",
        apiIdentifier: "mustBeLongString",
        fieldType: "String",
        requiredArgumentForInput: false,
        sortable: true,
        filterable: true,
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "String",
          validations: [
            {
              name: "String length range",
              specID: "gadget/validation/string-size",
              __dirname: "GadgetRangeFieldValidation",
              min: 20,
              max: null,
            },
          ],
        },
      },
    ],
  },
  __typename: "GadgetObjectField",
};

export const getWidgetModelMetadata = (
  action: { name: string; apiIdentifier: string; operatesWithRecordIdentity: boolean },
  inputFields = [widgetModelInputFields] as any[],
  triggers = apiTriggerOnly
) => {
  return {
    gadgetMeta: {
      modelAndRelatedModels: [
        {
          key: "DataModel-widget",
          name: "Widget",
          apiIdentifier: "widget",
          fields: widgetModelInputFields.configuration.fields,
          __typename: "GadgetModel",
          defaultDisplayField: widgetModelInputFields.configuration.fields.find((field) => field.apiIdentifier === "name"),
        },
      ],
      model: {
        key: "DataModel-widget",
        name: "Widget",
        apiIdentifier: "widget",
        action: {
          ...action,
          inputFields: action.operatesWithRecordIdentity ? [recordIdInputField, ...inputFields] : inputFields,
          triggers,
          __typename: "GadgetAction",
        },
        __typename: "GadgetModel",
      },
      __typename: "GadgetApplicationMeta",
    },
  };
};

export const getWidgetRecord = (overrides?: {
  id?: string;
  isChecked?: boolean;
  inventoryCount?: number;
  name?: string;
  startsAt?: Date;
  roles?: {
    key: string;
    name: string;
    __typename: "Role";
  }[];
  metafields?: any;
}) => {
  // Default values
  const isChecked = overrides?.isChecked ?? null;
  const startsAt = overrides?.startsAt ?? null;
  const inventoryCount = overrides?.inventoryCount ?? 1234;
  const name = overrides?.name ?? "Widget 1";
  const id = overrides?.id ?? "1145";
  const roles = overrides?.roles ?? [];
  const metafields = overrides?.metafields ?? null;

  return {
    widget: {
      __typename: "Widget",
      id,
      anything: {
        key: "value",
        example: true,
      },
      birthday: null,
      category: [],
      color: null,
      createdAt: "2024-06-25T13:39:19.645Z",
      description: {
        markdown: "example _rich_ **text**",
        truncatedHTML: "<p>example <em>rich</em> <strong>text</strong></p> ",
        __typename: "RichText",
      },
      embedding: null,
      inStock: true,
      inventoryCount,
      isChecked,
      metafields,
      mustBeLongString: null,
      name,
      roles,
      secretKey: null,
      startsAt,
      updatedAt: "2024-06-25T15:08:47.538Z",
    },
    gadgetMeta: {
      hydrations: {
        updatedAt: "DateTime",
        startsAt: "DateTime",
        birthday: "DateTime",
        createdAt: "DateTime",
      },
      __typename: "GadgetApplicationMeta",
    },
  };
};
