export const widgetModelInputFields = {
  name: "Widget",
  apiIdentifier: "widget",
  fieldType: "Object",
  requiredArgumentForInput: false,
  configuration: {
    __typename: "GadgetObjectFieldConfig",
    fieldType: "Object",
    name: null,
    fields: [
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
          __typename: "GadgetGenericFieldConfig",
          fieldType: "Number",
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
          relatedModel: {
            apiIdentifier: "gizmo",
            __typename: "GadgetModel",
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
          allowMultiple: true,
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
          relatedModel: {
            apiIdentifier: "section",
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
        },
      },
    ],
  },
  __typename: "GadgetObjectField",
};

export const recordIdInputField = {
  name: "Id",
  apiIdentifier: "id",
  fieldType: "ID",
  requiredArgumentForInput: true,
  configuration: {
    __typename: "GadgetGenericFieldConfig",
    fieldType: "ID",
  },
  __typename: "GadgetObjectField",
};

export const getWidgetModelMetadata = (
  action: { name: string; apiIdentifier: string; operatesWithRecordIdentity: boolean },
  inputFields = [widgetModelInputFields]
) => {
  return {
    gadgetMeta: {
      model: {
        name: "Widget",
        action: {
          ...action,
          inputFields: action.operatesWithRecordIdentity ? [recordIdInputField, ...inputFields] : inputFields,
          __typename: "GadgetAction",
        },
        __typename: "GadgetModel",
      },
      __typename: "GadgetApplicationMeta",
    },
  };
};

export const getWidgetRecord = (overrides?: { id?: string; isChecked?: boolean; metafields?: any }) => {
  return {
    widget: {
      __typename: "Widget",
      id: overrides?.id ?? "1145",
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
      inventoryCount: 1234,
      isChecked: overrides?.isChecked ?? null,
      metafields: overrides?.metafields ?? null,
      mustBeLongString: null,
      name: "updated test record",
      roles: [],
      secretKey: null,
      startsAt: null,
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
