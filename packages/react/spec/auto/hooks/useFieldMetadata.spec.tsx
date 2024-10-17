import { jest } from "@jest/globals";
import { renderHook } from "@testing-library/react";
import { GadgetFieldType } from "../../../dist/esm/internal/gql/graphql.js";
import { useFieldMetadata } from "../../../src/auto/hooks/useFieldMetadata.js";
import { MockForm } from "../MockForm.js";

describe("useFieldMetadata hook", () => {
  const getUseFieldMetadataResult = (fieldApiId: string) => {
    const { result } = renderHook(() => useFieldMetadata(fieldApiId), {
      wrapper: MockForm({ submit: jest.fn<any>(), metadata: metadata as any }),
    });

    return result.current;
  };

  describe("for widget create", () => {
    test("Returns the path and field metadata when given the field api id for belongsTo fields", () => {
      const { path, metadata } = getUseFieldMetadataResult("section");
      expect(path).toEqual("widget.section");
      expect(metadata).toMatchInlineSnapshot(`
        {
          "__typename": "GadgetModelField",
          "apiIdentifier": "section",
          "configuration": {
            "__typename": "GadgetBelongsToConfig",
            "fieldType": "BelongsTo",
            "relatedModel": {
              "__typename": "GadgetModel",
              "apiIdentifier": "section",
              "key": "DataModel-section",
            },
          },
          "fieldType": "BelongsTo",
          "filterable": true,
          "name": "Section",
          "requiredArgumentForInput": false,
          "sortable": false,
        }
      `);
    });

    test("Returns the path and field metadata when given the field api id for string fields", () => {
      const { path, metadata } = getUseFieldMetadataResult("stringField");
      expect(path).toEqual("widget.stringField");
      expect(metadata).toMatchInlineSnapshot(`
        {
          "__typename": "GadgetModelField",
          "apiIdentifier": "stringField",
          "configuration": {},
          "fieldType": "String",
          "filterable": true,
          "name": "stringField",
          "requiredArgumentForInput": false,
          "sortable": false,
        }
      `);
    });

    test("Throws an error when given a field api id that does not exist", () => {
      expect(() => getUseFieldMetadataResult("fakeField")).toThrowErrorMatchingInlineSnapshot(`"Field "fakeField" not found in metadata"`);
    });
  });
});

const metadata = {
  name: "Widget",
  apiIdentifier: "widget",
  action: {
    name: "Create",
    apiIdentifier: "create",
    inputFields: [
      {
        name: "Widget",
        apiIdentifier: "widget",
        fieldType: GadgetFieldType.Object,
        requiredArgumentForInput: false,
        configuration: {
          __typename: "GadgetObjectFieldConfig",
          fieldType: GadgetFieldType.Object,
          name: null,
          fields: [
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
                  key: "DataModel-section",
                  apiIdentifier: "section",
                  __typename: "GadgetModel",
                },
              },
            },
            {
              name: "stringField",
              apiIdentifier: "stringField",
              fieldType: "String",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {},
            },
          ],
        },
        __typename: "GadgetObjectField",
      },
    ],
    __typename: "GadgetAction",
  },
  __typename: "GadgetModel",
};
