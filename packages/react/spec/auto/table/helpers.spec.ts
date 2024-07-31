import {
  fieldMetadataArrayToFieldMetadataTree,
  getTableRows,
  getTableSelectionMap,
  getTableSpec,
} from "../../../src/useTableUtils/helpers.js";

describe("helper functions for useTable hook", () => {
  describe("fieldMetadataArrayToFieldMetadataTree", () => {
    it("should provide the correct field metadata tree", () => {
      const tree = fieldMetadataArrayToFieldMetadataTree(fieldMetadata);
      expect(tree).toMatchInlineSnapshot(`
        {
          "bool": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "bool",
            "configuration": {
              "__typename": "GadgetGenericFieldConfig",
              "fieldType": "Boolean",
              "validations": [],
            },
            "fieldType": "Boolean",
            "filterable": true,
            "name": "Bool",
            "requiredArgumentForInput": false,
            "sortable": true,
          },
          "computed": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "computed",
            "configuration": {
              "__typename": "GadgetGenericFieldConfig",
              "fieldType": "Computed",
              "validations": [],
            },
            "fieldType": "Computed",
            "filterable": true,
            "name": "Computed",
            "requiredArgumentForInput": false,
            "sortable": false,
          },
          "createdAt": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "createdAt",
            "configuration": {
              "__typename": "GadgetDateTimeConfig",
              "fieldType": "DateTime",
              "includeTime": true,
              "validations": [
                {
                  "__typename": "GadgetGenericFieldValidation",
                  "name": "Required",
                  "specID": "gadget/validation/required",
                },
              ],
            },
            "fieldType": "DateTime",
            "filterable": true,
            "name": "Created at",
            "requiredArgumentForInput": true,
            "sortable": true,
          },
          "dt": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "dt",
            "configuration": {
              "__typename": "GadgetDateTimeConfig",
              "fieldType": "DateTime",
              "includeTime": true,
              "validations": [],
            },
            "fieldType": "DateTime",
            "filterable": true,
            "name": "Dt",
            "requiredArgumentForInput": false,
            "sortable": true,
          },
          "email": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "email",
            "configuration": {
              "__typename": "GadgetGenericFieldConfig",
              "fieldType": "Email",
              "validations": [],
            },
            "fieldType": "Email",
            "filterable": true,
            "name": "Email",
            "requiredArgumentForInput": false,
            "sortable": true,
          },
          "enum": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "enum",
            "configuration": {
              "__typename": "GadgetEnumConfig",
              "allowMultiple": true,
              "allowOther": true,
              "fieldType": "Enum",
              "options": [
                {
                  "__typename": "GadgetEnumOption",
                  "color": "#FCFCFC",
                  "name": "hello",
                },
                {
                  "__typename": "GadgetEnumOption",
                  "color": "#606060",
                  "name": "world",
                },
                {
                  "__typename": "GadgetEnumOption",
                  "color": "#DF2222",
                  "name": "zhao shang hao",
                },
                {
                  "__typename": "GadgetEnumOption",
                  "color": "#E26722",
                  "name": "marhaban",
                },
                {
                  "__typename": "GadgetEnumOption",
                  "color": "#E2CD2E",
                  "name": "privyet",
                },
                {
                  "__typename": "GadgetEnumOption",
                  "color": "#67CA48",
                  "name": "hola",
                },
                {
                  "__typename": "GadgetEnumOption",
                  "color": "#56BFCC",
                  "name": "bonjour",
                },
                {
                  "__typename": "GadgetEnumOption",
                  "color": "#3280D6",
                  "name": "zdravo",
                },
                {
                  "__typename": "GadgetEnumOption",
                  "color": "#723FD3",
                  "name": "Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long ",
                },
              ],
              "validations": [],
            },
            "fieldType": "Enum",
            "filterable": true,
            "name": "Enum",
            "requiredArgumentForInput": false,
            "sortable": true,
          },
          "es": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "es",
            "configuration": {
              "__typename": "GadgetGenericFieldConfig",
              "fieldType": "EncryptedString",
              "validations": [],
            },
            "fieldType": "EncryptedString",
            "filterable": false,
            "name": "Es",
            "requiredArgumentForInput": false,
            "sortable": false,
          },
          "file": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "file",
            "configuration": {
              "__typename": "GadgetGenericFieldConfig",
              "fieldType": "File",
              "validations": [],
            },
            "fieldType": "File",
            "filterable": false,
            "name": "File",
            "requiredArgumentForInput": false,
            "sortable": false,
          },
          "hasMany": {
            "$field": {
              "__typename": "GadgetModelField",
              "apiIdentifier": "hasMany",
              "configuration": {
                "__typename": "GadgetHasManyConfig",
                "fieldType": "HasMany",
                "inverseField": {
                  "__typename": "GadgetModelField",
                  "apiIdentifier": "manyBelongsToParent",
                },
                "relatedModel": {
                  "__typename": "GadgetModel",
                  "apiIdentifier": "_autoTableTestRelatedModel",
                  "defaultDisplayField": {
                    "__typename": "GadgetModelField",
                    "apiIdentifier": "name",
                    "fieldType": "String",
                    "name": "Name",
                  },
                  "fields": [
                    {
                      "__typename": "GadgetModelField",
                      "apiIdentifier": "id",
                      "configuration": {
                        "__typename": "GadgetGenericFieldConfig",
                      },
                      "fieldType": "ID",
                      "name": "Id",
                    },
                    {
                      "__typename": "GadgetModelField",
                      "apiIdentifier": "name",
                      "configuration": {
                        "__typename": "GadgetGenericFieldConfig",
                      },
                      "fieldType": "String",
                      "name": "Name",
                    },
                    {
                      "__typename": "GadgetModelField",
                      "apiIdentifier": "someNumber",
                      "configuration": {
                        "__typename": "GadgetNumberConfig",
                      },
                      "fieldType": "Number",
                      "name": "Some number",
                    },
                    {
                      "__typename": "GadgetModelField",
                      "apiIdentifier": "someBool",
                      "configuration": {
                        "__typename": "GadgetGenericFieldConfig",
                      },
                      "fieldType": "Boolean",
                      "name": "Some bool",
                    },
                    {
                      "__typename": "GadgetModelField",
                      "apiIdentifier": "belongsToParent",
                      "configuration": {
                        "__typename": "GadgetBelongsToConfig",
                      },
                      "fieldType": "BelongsTo",
                      "name": "Belongs to parent",
                    },
                    {
                      "__typename": "GadgetModelField",
                      "apiIdentifier": "manyBelongsToParent",
                      "configuration": {
                        "__typename": "GadgetBelongsToConfig",
                      },
                      "fieldType": "BelongsTo",
                      "name": "Many belongs to parent",
                    },
                    {
                      "__typename": "GadgetModelField",
                      "apiIdentifier": "createdAt",
                      "configuration": {
                        "__typename": "GadgetDateTimeConfig",
                      },
                      "fieldType": "DateTime",
                      "name": "Created at",
                    },
                    {
                      "__typename": "GadgetModelField",
                      "apiIdentifier": "updatedAt",
                      "configuration": {
                        "__typename": "GadgetDateTimeConfig",
                      },
                      "fieldType": "DateTime",
                      "name": "Updated at",
                    },
                  ],
                  "namespace": [],
                },
                "validations": [],
              },
              "fieldType": "HasMany",
              "filterable": false,
              "name": "Has many",
              "requiredArgumentForInput": false,
              "sortable": false,
            },
            "edges": {
              "node": {
                "belongsToParent": {
                  "$field": {
                    "__typename": "GadgetModelField",
                    "apiIdentifier": "belongsToParent",
                    "configuration": {
                      "__typename": "GadgetBelongsToConfig",
                    },
                    "fieldType": "BelongsTo",
                    "name": "Belongs to parent",
                  },
                },
                "createdAt": {
                  "__typename": "GadgetModelField",
                  "apiIdentifier": "createdAt",
                  "configuration": {
                    "__typename": "GadgetDateTimeConfig",
                  },
                  "fieldType": "DateTime",
                  "name": "Created at",
                },
                "id": {
                  "__typename": "GadgetModelField",
                  "apiIdentifier": "id",
                  "configuration": {
                    "__typename": "GadgetGenericFieldConfig",
                  },
                  "fieldType": "ID",
                  "name": "Id",
                },
                "manyBelongsToParent": {
                  "$field": {
                    "__typename": "GadgetModelField",
                    "apiIdentifier": "manyBelongsToParent",
                    "configuration": {
                      "__typename": "GadgetBelongsToConfig",
                    },
                    "fieldType": "BelongsTo",
                    "name": "Many belongs to parent",
                  },
                },
                "name": {
                  "__typename": "GadgetModelField",
                  "apiIdentifier": "name",
                  "configuration": {
                    "__typename": "GadgetGenericFieldConfig",
                  },
                  "fieldType": "String",
                  "name": "Name",
                },
                "someBool": {
                  "__typename": "GadgetModelField",
                  "apiIdentifier": "someBool",
                  "configuration": {
                    "__typename": "GadgetGenericFieldConfig",
                  },
                  "fieldType": "Boolean",
                  "name": "Some bool",
                },
                "someNumber": {
                  "__typename": "GadgetModelField",
                  "apiIdentifier": "someNumber",
                  "configuration": {
                    "__typename": "GadgetNumberConfig",
                  },
                  "fieldType": "Number",
                  "name": "Some number",
                },
                "updatedAt": {
                  "__typename": "GadgetModelField",
                  "apiIdentifier": "updatedAt",
                  "configuration": {
                    "__typename": "GadgetDateTimeConfig",
                  },
                  "fieldType": "DateTime",
                  "name": "Updated at",
                },
              },
            },
          },
          "hasOne": {
            "$field": {
              "__typename": "GadgetModelField",
              "apiIdentifier": "hasOne",
              "configuration": {
                "__typename": "GadgetHasOneConfig",
                "fieldType": "HasOne",
                "inverseField": {
                  "__typename": "GadgetModelField",
                  "apiIdentifier": "belongsToParent",
                },
                "relatedModel": {
                  "__typename": "GadgetModel",
                  "apiIdentifier": "_autoTableTestRelatedModel",
                  "defaultDisplayField": {
                    "__typename": "GadgetModelField",
                    "apiIdentifier": "name",
                    "fieldType": "String",
                    "name": "Name",
                  },
                  "fields": [
                    {
                      "__typename": "GadgetModelField",
                      "apiIdentifier": "id",
                      "configuration": {
                        "__typename": "GadgetGenericFieldConfig",
                      },
                      "fieldType": "ID",
                      "name": "Id",
                    },
                    {
                      "__typename": "GadgetModelField",
                      "apiIdentifier": "name",
                      "configuration": {
                        "__typename": "GadgetGenericFieldConfig",
                      },
                      "fieldType": "String",
                      "name": "Name",
                    },
                    {
                      "__typename": "GadgetModelField",
                      "apiIdentifier": "someNumber",
                      "configuration": {
                        "__typename": "GadgetNumberConfig",
                      },
                      "fieldType": "Number",
                      "name": "Some number",
                    },
                    {
                      "__typename": "GadgetModelField",
                      "apiIdentifier": "someBool",
                      "configuration": {
                        "__typename": "GadgetGenericFieldConfig",
                      },
                      "fieldType": "Boolean",
                      "name": "Some bool",
                    },
                    {
                      "__typename": "GadgetModelField",
                      "apiIdentifier": "belongsToParent",
                      "configuration": {
                        "__typename": "GadgetBelongsToConfig",
                      },
                      "fieldType": "BelongsTo",
                      "name": "Belongs to parent",
                    },
                    {
                      "__typename": "GadgetModelField",
                      "apiIdentifier": "manyBelongsToParent",
                      "configuration": {
                        "__typename": "GadgetBelongsToConfig",
                      },
                      "fieldType": "BelongsTo",
                      "name": "Many belongs to parent",
                    },
                    {
                      "__typename": "GadgetModelField",
                      "apiIdentifier": "createdAt",
                      "configuration": {
                        "__typename": "GadgetDateTimeConfig",
                      },
                      "fieldType": "DateTime",
                      "name": "Created at",
                    },
                    {
                      "__typename": "GadgetModelField",
                      "apiIdentifier": "updatedAt",
                      "configuration": {
                        "__typename": "GadgetDateTimeConfig",
                      },
                      "fieldType": "DateTime",
                      "name": "Updated at",
                    },
                  ],
                  "namespace": [],
                },
                "validations": [],
              },
              "fieldType": "HasOne",
              "filterable": false,
              "name": "Has one",
              "requiredArgumentForInput": false,
              "sortable": false,
            },
            "belongsToParent": {
              "$field": {
                "__typename": "GadgetModelField",
                "apiIdentifier": "belongsToParent",
                "configuration": {
                  "__typename": "GadgetBelongsToConfig",
                },
                "fieldType": "BelongsTo",
                "name": "Belongs to parent",
              },
            },
            "createdAt": {
              "__typename": "GadgetModelField",
              "apiIdentifier": "createdAt",
              "configuration": {
                "__typename": "GadgetDateTimeConfig",
              },
              "fieldType": "DateTime",
              "name": "Created at",
            },
            "id": {
              "__typename": "GadgetModelField",
              "apiIdentifier": "id",
              "configuration": {
                "__typename": "GadgetGenericFieldConfig",
              },
              "fieldType": "ID",
              "name": "Id",
            },
            "manyBelongsToParent": {
              "$field": {
                "__typename": "GadgetModelField",
                "apiIdentifier": "manyBelongsToParent",
                "configuration": {
                  "__typename": "GadgetBelongsToConfig",
                },
                "fieldType": "BelongsTo",
                "name": "Many belongs to parent",
              },
            },
            "name": {
              "__typename": "GadgetModelField",
              "apiIdentifier": "name",
              "configuration": {
                "__typename": "GadgetGenericFieldConfig",
              },
              "fieldType": "String",
              "name": "Name",
            },
            "someBool": {
              "__typename": "GadgetModelField",
              "apiIdentifier": "someBool",
              "configuration": {
                "__typename": "GadgetGenericFieldConfig",
              },
              "fieldType": "Boolean",
              "name": "Some bool",
            },
            "someNumber": {
              "__typename": "GadgetModelField",
              "apiIdentifier": "someNumber",
              "configuration": {
                "__typename": "GadgetNumberConfig",
              },
              "fieldType": "Number",
              "name": "Some number",
            },
            "updatedAt": {
              "__typename": "GadgetModelField",
              "apiIdentifier": "updatedAt",
              "configuration": {
                "__typename": "GadgetDateTimeConfig",
              },
              "fieldType": "DateTime",
              "name": "Updated at",
            },
          },
          "id": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "id",
            "configuration": {
              "__typename": "GadgetGenericFieldConfig",
              "fieldType": "ID",
              "validations": [
                {
                  "__typename": "GadgetGenericFieldValidation",
                  "name": "Uniqueness",
                  "specID": "gadget/validation/unique",
                },
                {
                  "__typename": "GadgetGenericFieldValidation",
                  "name": "Required",
                  "specID": "gadget/validation/required",
                },
              ],
            },
            "fieldType": "ID",
            "filterable": true,
            "name": "Id",
            "requiredArgumentForInput": true,
            "sortable": true,
          },
          "json": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "json",
            "configuration": {
              "__typename": "GadgetGenericFieldConfig",
              "fieldType": "JSON",
              "validations": [],
            },
            "fieldType": "JSON",
            "filterable": true,
            "name": "Json",
            "requiredArgumentForInput": false,
            "sortable": true,
          },
          "num": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "num",
            "configuration": {
              "__typename": "GadgetNumberConfig",
              "decimals": null,
              "fieldType": "Number",
              "validations": [],
            },
            "fieldType": "Number",
            "filterable": true,
            "name": "Num",
            "requiredArgumentForInput": false,
            "sortable": true,
          },
          "pwd": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "pwd",
            "configuration": {
              "__typename": "GadgetGenericFieldConfig",
              "fieldType": "Password",
              "validations": [
                {
                  "__typename": "GadgetGenericFieldValidation",
                  "name": "Strong password",
                  "specID": "gadget/validation/password",
                },
              ],
            },
            "fieldType": "Password",
            "filterable": false,
            "name": "Pwd",
            "requiredArgumentForInput": false,
            "sortable": false,
          },
          "rl": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "rl",
            "configuration": {
              "__typename": "GadgetGenericFieldConfig",
              "fieldType": "RoleAssignments",
              "validations": [],
            },
            "fieldType": "RoleAssignments",
            "filterable": true,
            "name": "Rl",
            "requiredArgumentForInput": false,
            "sortable": false,
          },
          "rt": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "rt",
            "configuration": {
              "__typename": "GadgetGenericFieldConfig",
              "fieldType": "RichText",
              "validations": [],
            },
            "fieldType": "RichText",
            "filterable": true,
            "name": "Rt",
            "requiredArgumentForInput": false,
            "sortable": true,
          },
          "str": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "str",
            "configuration": {
              "__typename": "GadgetGenericFieldConfig",
              "fieldType": "String",
              "validations": [],
            },
            "fieldType": "String",
            "filterable": true,
            "name": "Str",
            "requiredArgumentForInput": false,
            "sortable": true,
          },
          "updatedAt": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "updatedAt",
            "configuration": {
              "__typename": "GadgetDateTimeConfig",
              "fieldType": "DateTime",
              "includeTime": true,
              "validations": [
                {
                  "__typename": "GadgetGenericFieldValidation",
                  "name": "Required",
                  "specID": "gadget/validation/required",
                },
              ],
            },
            "fieldType": "DateTime",
            "filterable": true,
            "name": "Updated at",
            "requiredArgumentForInput": true,
            "sortable": true,
          },
          "url": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "url",
            "configuration": {
              "__typename": "GadgetGenericFieldConfig",
              "fieldType": "URL",
              "validations": [],
            },
            "fieldType": "URL",
            "filterable": true,
            "name": "Url",
            "requiredArgumentForInput": false,
            "sortable": true,
          },
          "vect": {
            "__typename": "GadgetModelField",
            "apiIdentifier": "vect",
            "configuration": {
              "__typename": "GadgetGenericFieldConfig",
              "fieldType": "Vector",
              "validations": [],
            },
            "fieldType": "Vector",
            "filterable": true,
            "name": "Vect",
            "requiredArgumentForInput": false,
            "sortable": true,
          },
        }
      `);
    });
  });

  describe("getTableSelectionMap", () => {
    test("simple fields", () => {
      const spec = getTableSpec(fieldMetadata, ["id", "str", "num"], undefined, defaultSelection);
      const selectionMap = getTableSelectionMap(spec);

      expect(selectionMap).toEqual({
        id: true,
        str: true,
        num: true,
      });
    });

    test("rich text and file fields", () => {
      const spec = getTableSpec(fieldMetadata, ["file", "rt"], undefined, defaultSelection);
      const selectionMap = getTableSelectionMap(spec);

      expect(selectionMap).toEqual({
        id: true,
        file: {
          url: true,
          mimeType: true,
          fileName: true,
        },
        rt: {
          markdown: true,
          truncatedHTML: true,
        },
      });
    });

    test("has one and has many fields without specifying related fields", () => {
      const spec = getTableSpec(fieldMetadata, ["hasOne", "hasMany"], undefined, defaultSelection);
      const selectionMap = getTableSelectionMap(spec);

      expect(selectionMap).toEqual({
        hasMany: {
          edges: {
            node: {
              id: true,
              name: true,
            },
          },
        },
        hasOne: {
          id: true,
          name: true,
        },
        id: true,
      });
    });

    test("has one and has many fields with specifying related fields", () => {
      const spec = getTableSpec(
        fieldMetadata,
        ["hasOne.name", "hasMany.edges.node.name", "hasMany.edges.node.someBool", "hasMany.edges.node.someNumber"],
        undefined,
        defaultSelection
      );
      const selectionMap = getTableSelectionMap(spec);

      expect(selectionMap).toEqual({
        hasMany: {
          edges: {
            node: {
              id: true,
              name: true,
              someBool: true,
              someNumber: true,
            },
          },
        },
        hasOne: {
          id: true,
          name: true,
        },
        id: true,
      });
    });

    test("belongs to field without specifying related field", () => {
      const spec = getTableSpec(belongsToParentFieldMetadata, ["belongsToParent"], undefined, defaultSelection);
      const selectionMap = getTableSelectionMap(spec);

      expect(selectionMap).toEqual({
        id: true,
        belongsToParent: {
          id: true,
          email: true,
        },
      });
    });

    test("belongs to field with specifying related field", () => {
      const spec = getTableSpec(belongsToParentFieldMetadata, ["belongsToParent.str"], undefined, defaultSelection);
      const selectionMap = getTableSelectionMap(spec);

      expect(selectionMap).toEqual({
        id: true,
        belongsToParent: {
          id: true,
          str: true,
        },
      });
    });
  });

  describe("getRows", () => {
    it("works for a simple string type", () => {
      const targetColumns = ["name"];

      const rows = getTableRows(targetColumns, [
        {
          id: "1",
          name: "hello",
        },
      ]);

      expect(rows[0]).toEqual({ id: "1", name: "hello" });
    });

    it("returns an array of data for a hasMany", () => {
      const targetColumns = ["owner.name"];

      const rows = getTableRows(targetColumns, [
        {
          id: "1",
          owner: {
            id: "2",
            name: "hello",
          },
        },
      ]);

      expect(rows[0]).toEqual({ id: "1", "owner.name": "hello" });
    });
  });
});

const defaultSelection = {
  __typename: true,
  id: true,
  bool: true,
  computed: true,
  createdAt: true,
  dt: true,
  email: true,
  enum: true,
  es: true,
  file: {
    url: true,
    mimeType: true,
    fileName: true,
  },
  json: true,
  num: true,
  rl: {
    key: true,
    name: true,
  },
  rt: {
    markdown: true,
    truncatedHTML: true,
  },
  str: true,
  updatedAt: true,
  url: true,
  vect: true,
};

const fieldMetadata = [
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
    name: "Email",
    apiIdentifier: "email",
    fieldType: "Email",
    requiredArgumentForInput: false,
    sortable: true,
    filterable: true,
    __typename: "GadgetModelField",
    configuration: {
      __typename: "GadgetGenericFieldConfig",
      fieldType: "Email",
      validations: [],
    },
  },
  {
    name: "Str",
    apiIdentifier: "str",
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
    name: "Num",
    apiIdentifier: "num",
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
    name: "Bool",
    apiIdentifier: "bool",
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
    name: "Enum",
    apiIdentifier: "enum",
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
      allowOther: true,
      options: [
        {
          name: "hello",
          color: "#FCFCFC",
          __typename: "GadgetEnumOption",
        },
        {
          name: "world",
          color: "#606060",
          __typename: "GadgetEnumOption",
        },
        {
          name: "zhao shang hao",
          color: "#DF2222",
          __typename: "GadgetEnumOption",
        },
        {
          name: "marhaban",
          color: "#E26722",
          __typename: "GadgetEnumOption",
        },
        {
          name: "privyet",
          color: "#E2CD2E",
          __typename: "GadgetEnumOption",
        },
        {
          name: "hola",
          color: "#67CA48",
          __typename: "GadgetEnumOption",
        },
        {
          name: "bonjour",
          color: "#56BFCC",
          __typename: "GadgetEnumOption",
        },
        {
          name: "zdravo",
          color: "#3280D6",
          __typename: "GadgetEnumOption",
        },
        {
          name: "Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long ",
          color: "#723FD3",
          __typename: "GadgetEnumOption",
        },
      ],
    },
  },
  {
    name: "Dt",
    apiIdentifier: "dt",
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
    name: "Url",
    apiIdentifier: "url",
    fieldType: "URL",
    requiredArgumentForInput: false,
    sortable: true,
    filterable: true,
    __typename: "GadgetModelField",
    configuration: {
      __typename: "GadgetGenericFieldConfig",
      fieldType: "URL",
      validations: [],
    },
  },
  {
    name: "Rt",
    apiIdentifier: "rt",
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
    name: "File",
    apiIdentifier: "file",
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
    name: "Json",
    apiIdentifier: "json",
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
    name: "Es",
    apiIdentifier: "es",
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
    name: "Pwd",
    apiIdentifier: "pwd",
    fieldType: "Password",
    requiredArgumentForInput: false,
    sortable: false,
    filterable: false,
    __typename: "GadgetModelField",
    configuration: {
      __typename: "GadgetGenericFieldConfig",
      fieldType: "Password",
      validations: [
        {
          __typename: "GadgetGenericFieldValidation",
          name: "Strong password",
          specID: "gadget/validation/password",
        },
      ],
    },
  },
  {
    name: "Rl",
    apiIdentifier: "rl",
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
    name: "Has one",
    apiIdentifier: "hasOne",
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
        apiIdentifier: "_autoTableTestRelatedModel",
        namespace: [],
        defaultDisplayField: {
          name: "Name",
          apiIdentifier: "name",
          fieldType: "String",
          __typename: "GadgetModelField",
        },
        fields: [
          {
            name: "Id",
            apiIdentifier: "id",
            fieldType: "ID",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Name",
            apiIdentifier: "name",
            fieldType: "String",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Some number",
            apiIdentifier: "someNumber",
            fieldType: "Number",
            configuration: {
              __typename: "GadgetNumberConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Some bool",
            apiIdentifier: "someBool",
            fieldType: "Boolean",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Belongs to parent",
            apiIdentifier: "belongsToParent",
            fieldType: "BelongsTo",
            configuration: {
              __typename: "GadgetBelongsToConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Many belongs to parent",
            apiIdentifier: "manyBelongsToParent",
            fieldType: "BelongsTo",
            configuration: {
              __typename: "GadgetBelongsToConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Created at",
            apiIdentifier: "createdAt",
            fieldType: "DateTime",
            configuration: {
              __typename: "GadgetDateTimeConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Updated at",
            apiIdentifier: "updatedAt",
            fieldType: "DateTime",
            configuration: {
              __typename: "GadgetDateTimeConfig",
            },
            __typename: "GadgetModelField",
          },
        ],
        __typename: "GadgetModel",
      },
      inverseField: {
        apiIdentifier: "belongsToParent",
        __typename: "GadgetModelField",
      },
    },
  },
  {
    name: "Has many",
    apiIdentifier: "hasMany",
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
        apiIdentifier: "_autoTableTestRelatedModel",
        namespace: [],
        defaultDisplayField: {
          name: "Name",
          apiIdentifier: "name",
          fieldType: "String",
          __typename: "GadgetModelField",
        },
        fields: [
          {
            name: "Id",
            apiIdentifier: "id",
            fieldType: "ID",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Name",
            apiIdentifier: "name",
            fieldType: "String",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Some number",
            apiIdentifier: "someNumber",
            fieldType: "Number",
            configuration: {
              __typename: "GadgetNumberConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Some bool",
            apiIdentifier: "someBool",
            fieldType: "Boolean",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Belongs to parent",
            apiIdentifier: "belongsToParent",
            fieldType: "BelongsTo",
            configuration: {
              __typename: "GadgetBelongsToConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Many belongs to parent",
            apiIdentifier: "manyBelongsToParent",
            fieldType: "BelongsTo",
            configuration: {
              __typename: "GadgetBelongsToConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Created at",
            apiIdentifier: "createdAt",
            fieldType: "DateTime",
            configuration: {
              __typename: "GadgetDateTimeConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Updated at",
            apiIdentifier: "updatedAt",
            fieldType: "DateTime",
            configuration: {
              __typename: "GadgetDateTimeConfig",
            },
            __typename: "GadgetModelField",
          },
        ],
        __typename: "GadgetModel",
      },
      inverseField: {
        apiIdentifier: "manyBelongsToParent",
        __typename: "GadgetModelField",
      },
    },
  },
  {
    name: "Computed",
    apiIdentifier: "computed",
    fieldType: "Computed",
    requiredArgumentForInput: false,
    sortable: false,
    filterable: true,
    __typename: "GadgetModelField",
    configuration: {
      __typename: "GadgetGenericFieldConfig",
      fieldType: "Computed",
      validations: [],
    },
  },
  {
    name: "Vect",
    apiIdentifier: "vect",
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
] as any;

const belongsToParentFieldMetadata = [
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
    name: "Some number",
    apiIdentifier: "someNumber",
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
    name: "Some bool",
    apiIdentifier: "someBool",
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
    name: "Belongs to parent",
    apiIdentifier: "belongsToParent",
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
        apiIdentifier: "autoTableTest",
        namespace: [],
        defaultDisplayField: {
          name: "Email",
          apiIdentifier: "email",
          fieldType: "Email",
          __typename: "GadgetModelField",
        },
        fields: [
          {
            name: "Id",
            apiIdentifier: "id",
            fieldType: "ID",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Email",
            apiIdentifier: "email",
            fieldType: "Email",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Str",
            apiIdentifier: "str",
            fieldType: "String",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Num",
            apiIdentifier: "num",
            fieldType: "Number",
            configuration: {
              __typename: "GadgetNumberConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Bool",
            apiIdentifier: "bool",
            fieldType: "Boolean",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Enum",
            apiIdentifier: "enum",
            fieldType: "Enum",
            configuration: {
              __typename: "GadgetEnumConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Dt",
            apiIdentifier: "dt",
            fieldType: "DateTime",
            configuration: {
              __typename: "GadgetDateTimeConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Url",
            apiIdentifier: "url",
            fieldType: "URL",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Rt",
            apiIdentifier: "rt",
            fieldType: "RichText",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "File",
            apiIdentifier: "file",
            fieldType: "File",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Json",
            apiIdentifier: "json",
            fieldType: "JSON",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Es",
            apiIdentifier: "es",
            fieldType: "EncryptedString",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Pwd",
            apiIdentifier: "pwd",
            fieldType: "Password",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Rl",
            apiIdentifier: "rl",
            fieldType: "RoleAssignments",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Has one",
            apiIdentifier: "hasOne",
            fieldType: "HasOne",
            configuration: {
              __typename: "GadgetHasOneConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Has many",
            apiIdentifier: "hasMany",
            fieldType: "HasMany",
            configuration: {
              __typename: "GadgetHasManyConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Computed",
            apiIdentifier: "computed",
            fieldType: "Computed",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Vect",
            apiIdentifier: "vect",
            fieldType: "Vector",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Created at",
            apiIdentifier: "createdAt",
            fieldType: "DateTime",
            configuration: {
              __typename: "GadgetDateTimeConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Updated at",
            apiIdentifier: "updatedAt",
            fieldType: "DateTime",
            configuration: {
              __typename: "GadgetDateTimeConfig",
            },
            __typename: "GadgetModelField",
          },
        ],
        __typename: "GadgetModel",
      },
    },
  },
  {
    name: "Many belongs to parent",
    apiIdentifier: "manyBelongsToParent",
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
        apiIdentifier: "autoTableTest",
        namespace: [],
        defaultDisplayField: {
          name: "Email",
          apiIdentifier: "email",
          fieldType: "Email",
          __typename: "GadgetModelField",
        },
        fields: [
          {
            name: "Id",
            apiIdentifier: "id",
            fieldType: "ID",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Email",
            apiIdentifier: "email",
            fieldType: "Email",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Str",
            apiIdentifier: "str",
            fieldType: "String",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Num",
            apiIdentifier: "num",
            fieldType: "Number",
            configuration: {
              __typename: "GadgetNumberConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Bool",
            apiIdentifier: "bool",
            fieldType: "Boolean",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Enum",
            apiIdentifier: "enum",
            fieldType: "Enum",
            configuration: {
              __typename: "GadgetEnumConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Dt",
            apiIdentifier: "dt",
            fieldType: "DateTime",
            configuration: {
              __typename: "GadgetDateTimeConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Url",
            apiIdentifier: "url",
            fieldType: "URL",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Rt",
            apiIdentifier: "rt",
            fieldType: "RichText",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "File",
            apiIdentifier: "file",
            fieldType: "File",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Json",
            apiIdentifier: "json",
            fieldType: "JSON",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Es",
            apiIdentifier: "es",
            fieldType: "EncryptedString",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Pwd",
            apiIdentifier: "pwd",
            fieldType: "Password",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Rl",
            apiIdentifier: "rl",
            fieldType: "RoleAssignments",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Has one",
            apiIdentifier: "hasOne",
            fieldType: "HasOne",
            configuration: {
              __typename: "GadgetHasOneConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Has many",
            apiIdentifier: "hasMany",
            fieldType: "HasMany",
            configuration: {
              __typename: "GadgetHasManyConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Computed",
            apiIdentifier: "computed",
            fieldType: "Computed",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Vect",
            apiIdentifier: "vect",
            fieldType: "Vector",
            configuration: {
              __typename: "GadgetGenericFieldConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Created at",
            apiIdentifier: "createdAt",
            fieldType: "DateTime",
            configuration: {
              __typename: "GadgetDateTimeConfig",
            },
            __typename: "GadgetModelField",
          },
          {
            name: "Updated at",
            apiIdentifier: "updatedAt",
            fieldType: "DateTime",
            configuration: {
              __typename: "GadgetDateTimeConfig",
            },
            __typename: "GadgetModelField",
          },
        ],
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
] as any;
