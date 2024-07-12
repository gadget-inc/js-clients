import { renderHook } from "@testing-library/react";
import { useFormFields } from "../../../src/auto/AutoForm.js";
import { useAutoFormMetadata } from "../../../src/auto/AutoFormContext.js";
import type { ActionMetadata } from "../../../src/metadata.js";
import { MockForm } from "../MockForm.js";

describe("useFormFields hook", () => {
  const getUseFormFieldsResult = (options: { include?: string[]; exclude?: string[] }) => {
    const { result } = renderHook(
      () => {
        const { metadata: autoFormMetadata } = useAutoFormMetadata();
        return useFormFields(autoFormMetadata, options);
      },
      {
        wrapper: MockForm({ submit: jest.fn(), metadata }),
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

  test("Has an error when including and excluding the same fields", () => {
    expect(() =>
      getUseFormFieldsResult({
        include: ["stringField2", "stringField1", "stringField3"],
        exclude: ["stringField2", "stringField3"],
      })
    ).toThrowErrorMatchingInlineSnapshot(`"Cannot include and exclude the same field"`);
  });
});

const metadata: ActionMetadata = {
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
} as ActionMetadata;
