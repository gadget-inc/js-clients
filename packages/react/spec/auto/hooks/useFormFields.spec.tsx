import { jest } from "@jest/globals";
import { renderHook } from "@testing-library/react";
import { useFormFields } from "../../../src/auto/AutoForm.js";
import { useAutoFormMetadata } from "../../../src/auto/AutoFormContext.js";
import type { ModelWithOneActionMetadata } from "../../../src/metadata.js";
import { MockForm } from "../MockForm.js";

const shopifyShopModelKey = "DataModel-Shopify-Shop";

describe("useFormFields hook", () => {
  const getUseFormFieldsResult = (options: { include?: string[]; exclude?: string[] }) => {
    const { result } = renderHook(
      () => {
        const { metadata: autoFormMetadata } = useAutoFormMetadata();
        return useFormFields(autoFormMetadata, options);
      },
      {
        wrapper: MockForm({ submit: jest.fn<any>(), metadata }),
      }
    );

    return result.current;
  };

  test("Returns the fields in the default order of the action metadata when no include/exclude options are used", () => {
    const fields = getUseFormFieldsResult({});

    expect(fields.map((field) => field.metadata.apiIdentifier)).toMatchInlineSnapshot(`
      [
        "stringField1",
        "stringField2",
        "stringField3",
        "params_str",
        "params_num",
        "params_bool",
      ]
    `);
  });

  test("Excludes object fields that the name is not equal to the model API identifier", () => {
    const fields = getUseFormFieldsResult({});
    expect(fields.map((field) => field.metadata.apiIdentifier)).toMatchInlineSnapshot(`
      [
        "stringField1",
        "stringField2",
        "stringField3",
        "params_str",
        "params_num",
        "params_bool",
      ]
    `);
  });

  test("Returns the fields in the order of the include options list", () => {
    const include = ["stringField2", "stringField1", "stringField3"];

    const fields = getUseFormFieldsResult({ include });
    expect(fields.map((field) => field.metadata.apiIdentifier)).toEqual(include);
  });

  test("Excludes fields in the exclude list", () => {
    const exclude = ["stringField2", "stringField3"];

    const fields = getUseFormFieldsResult({ exclude });
    expect(fields.map((field) => field.metadata.apiIdentifier)).toEqual(["stringField1", "params_str", "params_num", "params_bool"]);
  });

  describe("Relationships with special models", () => {
    test("includes relationship fields that have shopifyShop as the related model if explicitly included", () => {
      const fields = getUseFormFieldsResult({ include: ["shop"] });
      expect(fields).toHaveLength(1);
      expect((fields[0] as any).metadata.configuration.relatedModel.key).toEqual(shopifyShopModelKey);
    });

    test("Exclude relationship fields that have shopifyShop as the related model", () => {
      const fields = getUseFormFieldsResult({});
      expect(fields.some((field) => (field as any).metadata.configuration?.relatedModel?.key === shopifyShopModelKey)).toBeFalsy();
    });
  });

  test("Has an error when using include and exclude at the same time", () => {
    expect(() =>
      getUseFormFieldsResult({
        include: ["stringField2", "stringField1", "stringField3"],
        exclude: ["stringField2", "stringField3"],
      })
    ).toThrowErrorMatchingInlineSnapshot(`"Cannot use both 'include' and 'exclude' options at the same time"`);
  });

  test("Has an error when the metadata has duplicate input field api identifiers", () => {
    expect(() => {
      renderHook(() => useFormFields(autoFormMetadataWithDuplicateInputFields as any, {}), {
        wrapper: MockForm({ submit: jest.fn<any>(), metadata }),
      });
    }).toThrowErrorMatchingInlineSnapshot(`"Input "str" is not unique for action "updateWithCustomParams""`);
  });
});

const metadata: ModelWithOneActionMetadata = {
  name: "Widget",
  apiIdentifier: "widget",
  action: {
    name: "Create",
    apiIdentifier: "create",
    operatesWithRecordIdentity: false,
    inputFields: [
      {
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
              name: "stringField1",
              apiIdentifier: "stringField1",
              fieldType: "String",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {},
            },
            {
              name: "stringField2",
              apiIdentifier: "stringField2",
              fieldType: "String",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {},
            },
            {
              name: "stringField3",
              apiIdentifier: "stringField3",
              fieldType: "String",
              requiredArgumentForInput: false,
              sortable: false,
              filterable: true,
              __typename: "GadgetModelField",
              configuration: {},
            },
            {
              name: "Shop",
              apiIdentifier: "shop",
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
                  key: shopifyShopModelKey,
                  apiIdentifier: "shopifyShop",
                  namespace: [],
                  defaultDisplayField: {
                    name: "Name",
                    apiIdentifier: "name",
                    fieldType: "String",
                    __typename: "GadgetModelField",
                  },
                  __typename: "GadgetModel",
                },
              },
            },
          ],
        },
        __typename: "GadgetObjectField",
      },
      // Fields that are from the input params defined in the action code
      {
        name: "Params str",
        apiIdentifier: "params_str",
        fieldType: "String",
        requiredArgumentForInput: false,
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "String",
        },
        __typename: "GadgetObjectField",
      },
      {
        name: "Params num",
        apiIdentifier: "params_num",
        fieldType: "Number",
        requiredArgumentForInput: false,
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "Number",
        },
        __typename: "GadgetObjectField",
      },
      {
        name: "Params bool",
        apiIdentifier: "params_bool",
        fieldType: "Boolean",
        requiredArgumentForInput: false,
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "Boolean",
        },
        __typename: "GadgetObjectField",
      },
      {
        name: "Params obj",
        apiIdentifier: "params_obj",
        fieldType: "Object",
        requiredArgumentForInput: false,
        configuration: {
          __typename: "GadgetObjectFieldConfig",
          fieldType: "Object",
          name: null,
          fields: [
            {
              name: "Params obj inner str",
              apiIdentifier: "params_obj_inner_str",
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
      },
    ],
    __typename: "GadgetAction",
  },
  __typename: "GadgetModel",
} as ModelWithOneActionMetadata;

const autoFormMetadataWithDuplicateInputFields = {
  name: "Auto table test",
  apiIdentifier: "autoTableTest",
  defaultRecord: { str: "awd", __typename: "AutoTableTest" },
  action: {
    name: "Update with custom params",
    apiIdentifier: "updateWithCustomParams",
    operatesWithRecordIdentity: true,
    isDeleteAction: false,
    isUpsertMetaAction: false,
    inputFields: [
      {
        name: "Auto table test",
        apiIdentifier: "autoTableTest",
        fieldType: "Object",
        requiredArgumentForInput: false,
        configuration: {
          __typename: "GadgetObjectFieldConfig",
          fieldType: "Object",
          validations: [],
          name: null,
          fields: [
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
          ],
        },
        __typename: "GadgetObjectField",
      },
      {
        name: "Str",
        apiIdentifier: "str",
        fieldType: "String",
        requiredArgumentForInput: false,
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "String",
          validations: [],
        },
        __typename: "GadgetObjectField",
      },
      {
        name: "Id",
        apiIdentifier: "id",
        fieldType: "ID",
        requiredArgumentForInput: true,
        configuration: {
          __typename: "GadgetGenericFieldConfig",
          fieldType: "ID",
          validations: [],
        },
        __typename: "GadgetObjectField",
      },
    ],
    __typename: "GadgetAction",
  },
  __typename: "GadgetModel",
};
