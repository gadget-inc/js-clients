import type { AssertTrue, IsExact } from "conditional-type-checks";
import type { $args, DeepFilterNever, Select } from "../src/types.js";
import type { TestSchema, TestSchemaWithFieldCalls, TestSchemaWithNestedFieldCalls } from "./TestSchema.js";

describe("Select<>", () => {
  type _SelectingProperties = AssertTrue<IsExact<Select<TestSchema, { num: true }>, { num: number }>>;

  type _ConditionallySelectingProperties = AssertTrue<
    IsExact<Select<TestSchema, { num: true; str: undefined; obj: false }>, { num: number }>
  >;

  type _SelectingNestedProperties = AssertTrue<
    IsExact<
      Select<TestSchema, { num: true; obj: { test: true; bool: false; deep: { property: true } } }>,
      { num: number; obj: { test: "test"; deep: { property: string } } }
    >
  >;

  type _SelectingCircularProperties = AssertTrue<
    IsExact<
      Select<
        TestSchema,
        {
          num: true;
          nested: {
            bool: true;
            nested: {
              bool: true;
            };
          };
        }
      >,
      {
        num: number;
        nested: {
          bool: boolean;
          nested: {
            bool: boolean;
          };
        };
      }
    >
  >;

  type _FilteredNever = AssertTrue<
    IsExact<DeepFilterNever<{ a: { b: never }; c: string; d: { e: boolean; f: never } }>, { c: string; d: { e: boolean } }>
  >;

  type _optionalNestedPropertySelection = Select<TestSchema, { optionalObj: { test: true } }>;
  type _TestSelectingOptionalNestedProperties = AssertTrue<
    IsExact<_optionalNestedPropertySelection, { optionalObj: { test: "test" } | null }>
  >;

  type _listSelection = Select<TestSchema, { list: { stuff: true } }>;
  type _TestSelectingLists = AssertTrue<IsExact<_listSelection, { list: { stuff: number[] | null }[] }>>;

  type _optionalListSelection = Select<TestSchema, { optionalList: { stuff: true; title: true } }>;
  type _TestSelectingOptionalLists = AssertTrue<
    IsExact<_optionalListSelection, { optionalList: { title: "listy"; stuff: number[] | null }[] | null }>
  >;

  type _connectionSelection = Select<
    TestSchema,
    {
      someConnection: {
        pageInfo: { hasNextPage: true };
        edges: { node: { id: true; state: true } };
      };
    }
  >;
  type _TestSelectingConnection = AssertTrue<
    IsExact<
      _connectionSelection,
      {
        someConnection: {
          pageInfo: { hasNextPage: boolean };
          edges: ({ node: { id: string; state: string } | null } | null)[] | null;
        };
      }
    >
  >;

  type _fieldCallSelection = Select<
    TestSchemaWithFieldCalls,
    {
      fieldCall: {
        [$args]: { arg: [1, 2, 3]; limit: 10 };
        nestedField1: true;
        nestedField2: { nestedField3: true };
      };
    }
  >;
  type _TestSelectingFieldCall = AssertTrue<
    IsExact<_fieldCallSelection, { fieldCall: { nestedField1: number; nestedField2: { nestedField3: string } } }>
  >;

  type _simpleFieldCallSelection = Select<
    { fieldWithArgs: number },
    {
      fieldWithArgs: {
        [$args]: { arg: [1, 2, 3]; limit: 10 };
      };
    }
  >;
  type _TestSelectingSimpleFieldCall = AssertTrue<IsExact<_simpleFieldCallSelection, { fieldWithArgs: number }>>;

  type _nestedFieldCallSelection = Select<
    TestSchemaWithNestedFieldCalls,
    {
      outerFieldCall: {
        [$args]: { outerArg: "value" };
        innerFieldCall: {
          [$args]: { innerArg: 123 };
          deepField: { [$args]: { deepArg: "value" } };
        };
        regularField: true;
      };
    }
  >;
  type _TestSelectingNestedFieldCall = AssertTrue<
    IsExact<_nestedFieldCallSelection, { outerFieldCall: { innerFieldCall: { deepField: string }; regularField: number } }>
  >;

  test("true", () => undefined);
});
