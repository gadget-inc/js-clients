import { GadgetRecord } from "@gadgetinc/api-client-core";
import { GadgetFieldType } from "../../../src/internal/gql/graphql.js";
import { FieldMetadata } from "../../../src/metadata.js";
import {
  fieldMetadataArrayToFieldMetadataTree,
  getTableColumns,
  getTableRows,
  getTableSelectionMap,
} from "../../../src/use-table/helpers.js";
import type { RelationshipType, TableSpec } from "../../../src/use-table/types.js";

describe("helper functions for useTable hook", () => {
  describe("fieldMetadataArrayToFieldMetadataTree", () => {
    it("should convert an array of simple field metadata objects to a field-selection-style tree", () => {
      const result = fieldMetadataArrayToFieldMetadataTree([
        getSimpleFieldMetadata("Name", "name", GadgetFieldType.String),
        getSimpleFieldMetadata("Age", "age", GadgetFieldType.Number),
      ] as any[]);

      expect(result.name.apiIdentifier).toEqual("name");
      expect(result.name.fieldType).toEqual(GadgetFieldType.String);

      expect(result.age.apiIdentifier).toEqual("age");
      expect(result.age.fieldType).toEqual(GadgetFieldType.Number);
    });

    it("should convert an array of field metadata objects with relationship fields to a field-selection-style tree", () => {
      const result = fieldMetadataArrayToFieldMetadataTree([
        getSimpleFieldMetadata("Address", "address", GadgetFieldType.String),
        getRelationshipFieldMetadata({
          name: "Owner",
          apiIdentifier: "owner",
          relationshipType: GadgetFieldType.HasOne,
          relatedModelFields: [getSimpleFieldMetadata("Name", "name", GadgetFieldType.String)],
        }),
        getRelationshipFieldMetadata({
          name: "Products",
          apiIdentifier: "products",
          relationshipType: GadgetFieldType.HasMany,
          relatedModelFields: [getSimpleFieldMetadata("Sku", "sku", GadgetFieldType.String)],
        }),
        getRelationshipFieldMetadata({
          name: "Manufacturer",
          apiIdentifier: "manufacturer",
          relationshipType: GadgetFieldType.BelongsTo,
          relatedModelFields: [getSimpleFieldMetadata("Country", "country", GadgetFieldType.String)],
        }),
      ] as any[]);

      expect(result.address.apiIdentifier).toEqual("address");
      expect(result.address.fieldType).toEqual(GadgetFieldType.String);
      // The original field metadata object should be inside the `$field` object
      expect(result.owner.$field.apiIdentifier).toEqual("owner");
      expect(result.owner.$field.fieldType).toEqual(GadgetFieldType.HasOne);
      // The fields in the related model should be inside the `owner` object
      expect(result.owner.name.apiIdentifier).toEqual("name");
      expect(result.owner.name.fieldType).toEqual(GadgetFieldType.String);

      expect(result.products.$field.apiIdentifier).toEqual("products");
      expect(result.products.$field.fieldType).toEqual(GadgetFieldType.HasMany);
      // The fields in the related model should be inside the `edges.node` object
      expect(result.products.edges.node.sku.apiIdentifier).toEqual("sku");
      expect(result.products.edges.node.sku.fieldType).toEqual(GadgetFieldType.String);

      expect(result.manufacturer.$field.apiIdentifier).toEqual("manufacturer");
      expect(result.manufacturer.$field.fieldType).toEqual(GadgetFieldType.BelongsTo);
      // Same as "has one" relationship, the fields in the related model should be inside the `manufacturer` object
      expect(result.manufacturer.country.apiIdentifier).toEqual("country");
      expect(result.manufacturer.country.fieldType).toEqual(GadgetFieldType.String);
    });
  });

  describe("getTableSelectionMap", () => {
    it("should return a selection map for simple fields", () => {
      const result = getTableSelectionMap({
        targetColumns: ["name", "age"],
        fieldMetadataTree: fieldMetadataArrayToFieldMetadataTree([
          getSimpleFieldMetadata("Name", "name", GadgetFieldType.String),
          getSimpleFieldMetadata("Age", "age", GadgetFieldType.Number),
        ]),
        defaultSelection: {}, // intentionally empty to make sure the default selection is not used
      });

      expect(result).toEqual({
        // id is always selected even if it's not in the targetColumns
        id: true,
        name: true,
        age: true,
      });
    });

    it("should return a selection map when the column value is a cell detail", () => {
      const result = getTableSelectionMap({
        targetColumns: [
          "name",
          {
            header: "Age",
            field: "age",
          },
        ],
        fieldMetadataTree: fieldMetadataArrayToFieldMetadataTree([
          getSimpleFieldMetadata("Name", "name", GadgetFieldType.String),
          getSimpleFieldMetadata("Age", "age", GadgetFieldType.Number),
        ]),
        defaultSelection: {}, // intentionally empty to make sure the default selection is not used
      });

      expect(result).toEqual({
        id: true,
        name: true,
        age: true,
      });
    });

    it("should return a selection map for fields with rich text, role assignment and file types", () => {
      const result = getTableSelectionMap({
        targetColumns: ["name", "description", "image", "roles"],
        fieldMetadataTree: fieldMetadataArrayToFieldMetadataTree([
          getSimpleFieldMetadata("Name", "name", GadgetFieldType.String),
          getSimpleFieldMetadata("Description", "description", GadgetFieldType.RichText),
          getSimpleFieldMetadata("Image", "image", GadgetFieldType.File),
          getSimpleFieldMetadata("Roles", "roles", GadgetFieldType.RoleAssignments),
        ]),
        defaultSelection: {}, // intentionally empty to make sure the default selection is not used
      });

      expect(result).toEqual({
        id: true,
        name: true,
        description: {
          markdown: true,
          truncatedHTML: true,
        },
        image: {
          url: true,
          mimeType: true,
          fileName: true,
        },
        roles: {
          key: true,
          name: true,
        },
      });
    });

    describe("relationship fields", () => {
      it("should return a selection map for fields with relationship fields when not specifying the related fields", () => {
        const result = getTableSelectionMap({
          targetColumns: ["address", "owner", "products", "manufacturer"],
          fieldMetadataTree: fieldMetadataTreeWithRelationship,
          defaultSelection: {}, // intentionally empty to make sure the default selection is not used
        });

        expect(result).toEqual({
          id: true,
          address: true,
          owner: {
            id: true,
            default_owner: true,
          },
          products: {
            edges: {
              node: {
                id: true,
                default_product: true,
              },
            },
          },
          manufacturer: {
            id: true,
            default_manufacturer: true,
          },
        });
      });

      it("should return a selection map for fields with relationship fields when specifying the related fields", () => {
        const result = getTableSelectionMap({
          targetColumns: ["address", "owner.name", "products.edges.node.sku", "manufacturer.country"],
          fieldMetadataTree: fieldMetadataTreeWithRelationship,
          defaultSelection: {}, // intentionally empty to make sure the default selection is not used
        });

        expect(result).toEqual({
          id: true,
          address: true,
          owner: {
            id: true,
            name: true,
          },
          products: {
            edges: {
              node: {
                id: true,
                sku: true,
              },
            },
          },
          manufacturer: {
            id: true,
            country: true,
          },
        });
      });
    });
  });

  describe("getTableRows", () => {
    const getTableRowsFromTableSpec = (tableSpec: Pick<TableSpec, "fieldMetadataTree" | "targetColumns">, records: GadgetRecord<any>[]) => {
      const columns = getTableColumns(tableSpec);
      const rows = getTableRows(tableSpec, columns, records);
      return rows;
    };
    it("should return an array of table rows for simple fields", () => {
      const result = getTableRowsFromTableSpec(
        {
          fieldMetadataTree: fieldMetadataArrayToFieldMetadataTree([
            getSimpleFieldMetadata("Name", "name", GadgetFieldType.String),
            getSimpleFieldMetadata("Age", "age", GadgetFieldType.Number),
          ]),
          targetColumns: ["name", "age"],
        },
        [
          {
            id: "1",
            name: "Alice",
            age: 30,
          },
          {
            id: "2",
            name: "Bob",
            age: 40,
          },
        ]
      );

      expect(result).toEqual([
        {
          id: "1",
          name: "Alice",
          age: 30,
        },
        {
          id: "2",
          name: "Bob",
          age: 40,
        },
      ]);
    });

    describe("relationship fields", () => {
      let records: any[];

      beforeEach(() => {
        records = [
          {
            id: "1",
            address: "123 Main St",
            owner: {
              id: "1",
              name: "Alice",
              default_owner: "Alice",
            },
            products: {
              edges: [
                {
                  node: {
                    id: "1",
                    sku: "123",
                    default_product: "123",
                  },
                },
                {
                  node: {
                    id: "2",
                    sku: "456",
                    default_product: "456",
                  },
                },
              ],
            },
            manufacturer: {
              id: "1",
              country: "CA",
              default_manufacturer: "CA",
            },
          },
        ];
      });

      it("should return an array of table rows for fields with relationship fields when not specifying the related fields", () => {
        const result = getTableRowsFromTableSpec(
          {
            targetColumns: ["address", "owner", "products", "manufacturer"],
            fieldMetadataTree: fieldMetadataTreeWithRelationship,
          },
          records
        );

        expect(result).toEqual([
          {
            id: "1",
            address: "123 Main St",
            owner: "Alice",
            products: ["123", "456"],
            manufacturer: "CA",
          },
        ]);
      });

      it("should return an array of table rows for fields with relationship fields when specifying the related fields", () => {
        const result = getTableRowsFromTableSpec(
          {
            targetColumns: ["address", "owner.name", "products.edges.node.sku", "manufacturer.country"],
            fieldMetadataTree: fieldMetadataTreeWithRelationship,
          },
          records
        );

        expect(result).toEqual([
          {
            id: "1",
            address: "123 Main St",
            "owner.name": "Alice",
            "products.edges.node.sku": ["123", "456"],
            "manufacturer.country": "CA",
          },
        ]);
      });
    });
  });

  describe("getTableColumns", () => {
    it("should return an array of table columns for simple fields", () => {
      const result = getTableColumns({
        fieldMetadataTree: fieldMetadataArrayToFieldMetadataTree([
          getSimpleFieldMetadata("Name", "name", GadgetFieldType.String, true),
          getSimpleFieldMetadata("Age", "age", GadgetFieldType.Number, true),
        ]),
        targetColumns: ["name", "age"],
      });

      expect(result).toMatchInlineSnapshot(`
        [
          {
            "field": "name",
            "header": "Name",
            "identifier": "name",
            "sortable": true,
            "style": undefined,
            "type": "String",
          },
          {
            "field": "age",
            "header": "Age",
            "identifier": "age",
            "sortable": true,
            "style": undefined,
            "type": "Number",
          },
        ]
      `);
    });

    it("should return an array of table columns for simple fields when the column value is a cell detail", () => {
      const result = getTableColumns({
        fieldMetadataTree: fieldMetadataArrayToFieldMetadataTree([
          getSimpleFieldMetadata("Name", "name", GadgetFieldType.String, true),
          getSimpleFieldMetadata("Age", "age", GadgetFieldType.Number, true),
        ]),
        targetColumns: [
          {
            header: "Some cool name",
            field: "name",
          },
          {
            header: "Age",
            field: "age",
            sortable: false,
          },
        ],
      });

      expect(result).toMatchInlineSnapshot(`
        [
          {
            "field": "name",
            "header": "Some cool name",
            "identifier": "name",
            "sortable": true,
            "style": undefined,
            "type": "String",
          },
          {
            "field": "age",
            "header": "Age",
            "identifier": "age",
            "sortable": false,
            "style": undefined,
            "type": "Number",
          },
        ]
      `);
    });

    describe("relationship fields", () => {
      it("should return an array of table columns for fields with relationship fields when not specifying the related fields", () => {
        const result = getTableColumns({
          targetColumns: ["address", "owner", "products", "manufacturer"],
          fieldMetadataTree: fieldMetadataTreeWithRelationship,
        });

        expect(result).toMatchInlineSnapshot(`
          [
            {
              "field": "address",
              "header": "Address",
              "identifier": "address",
              "sortable": true,
              "style": undefined,
              "type": "String",
            },
            {
              "field": "owner",
              "header": "Owner",
              "identifier": "owner",
              "relationshipType": "HasOne",
              "sortable": true,
              "style": undefined,
              "type": "String",
            },
            {
              "field": "products",
              "header": "Products",
              "identifier": "products",
              "relationshipType": "HasMany",
              "sortable": true,
              "style": undefined,
              "type": "String",
            },
            {
              "field": "manufacturer",
              "header": "Manufacturer",
              "identifier": "manufacturer",
              "relationshipType": "BelongsTo",
              "sortable": true,
              "style": undefined,
              "type": "String",
            },
          ]
        `);
      });

      it("should return an array of table columns for fields with relationship fields when specifying the related fields", () => {
        const result = getTableColumns({
          targetColumns: ["address", "owner.name", "products.edges.node.sku", "manufacturer.country"],
          fieldMetadataTree: fieldMetadataTreeWithRelationship,
        });

        expect(result).toMatchInlineSnapshot(`
          [
            {
              "field": "address",
              "header": "Address",
              "identifier": "address",
              "sortable": true,
              "style": undefined,
              "type": "String",
            },
            {
              "field": "owner.name",
              "header": "Owner",
              "identifier": "owner.name",
              "relationshipType": "HasOne",
              "sortable": true,
              "style": undefined,
              "type": "String",
            },
            {
              "field": "products.edges.node.sku",
              "header": "Products",
              "identifier": "products.edges.node.sku",
              "relationshipType": "HasMany",
              "sortable": true,
              "style": undefined,
              "type": "String",
            },
            {
              "field": "manufacturer.country",
              "header": "Manufacturer",
              "identifier": "manufacturer.country",
              "relationshipType": "BelongsTo",
              "sortable": true,
              "style": undefined,
              "type": "String",
            },
          ]
        `);
      });
    });
  });
});

const gadgetGenericFieldConfig = {
  __typename: "GadgetGenericFieldConfig",
} as const;

const getSimpleFieldMetadata = (name: string, apiIdentifier: string, fieldType: GadgetFieldType, sortable?: boolean) => {
  return {
    apiIdentifier,
    name,
    fieldType,
    configuration: gadgetGenericFieldConfig,
    sortable: sortable ?? true,
  } as FieldMetadata;
};

const getRelationshipFieldMetadata = (props: {
  name: string;
  apiIdentifier: string;
  relationshipType: RelationshipType;
  relatedModelFields: any[];
  defaultDisplayField?: any;
}) => {
  const { name, apiIdentifier, relationshipType, relatedModelFields, defaultDisplayField } = props;

  return {
    apiIdentifier,
    name,
    fieldType: relationshipType,
    configuration: {
      __typename:
        relationshipType === GadgetFieldType.HasOne
          ? "GadgetHasOneConfig"
          : relationshipType === GadgetFieldType.HasMany
          ? "GadgetHasManyConfig"
          : "GadgetBelongsToConfig",
      relatedModel: {
        fields: relatedModelFields,
        defaultDisplayField,
      },
    },
  } as FieldMetadata;
};

const fieldMetadataTreeWithRelationship = fieldMetadataArrayToFieldMetadataTree([
  getSimpleFieldMetadata("Address", "address", GadgetFieldType.String),
  getRelationshipFieldMetadata({
    name: "Owner",
    apiIdentifier: "owner",
    relationshipType: GadgetFieldType.HasOne,
    relatedModelFields: [
      getSimpleFieldMetadata("Name", "name", GadgetFieldType.String, true),
      getSimpleFieldMetadata("Default owner", "default_owner", GadgetFieldType.String, true),
    ],
    defaultDisplayField: getSimpleFieldMetadata("Default owner", "default_owner", GadgetFieldType.String, true),
  }),
  getRelationshipFieldMetadata({
    name: "Products",
    apiIdentifier: "products",
    relationshipType: GadgetFieldType.HasMany,
    relatedModelFields: [
      getSimpleFieldMetadata("Sku", "sku", GadgetFieldType.String, true),
      getSimpleFieldMetadata("Default product", "default_product", GadgetFieldType.String, true),
    ],
    defaultDisplayField: getSimpleFieldMetadata("Default product", "default_product", GadgetFieldType.String, true),
  }),
  getRelationshipFieldMetadata({
    name: "Manufacturer",
    apiIdentifier: "manufacturer",
    relationshipType: GadgetFieldType.BelongsTo,
    relatedModelFields: [
      getSimpleFieldMetadata("Country", "country", GadgetFieldType.String, true),
      getSimpleFieldMetadata("Default manufacturer", "default_manufacturer", GadgetFieldType.String, true),
    ],
    defaultDisplayField: getSimpleFieldMetadata("Default manufacturer", "default_manufacturer", GadgetFieldType.String, true),
  }),
] as any[]);
