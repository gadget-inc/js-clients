import type { AssertTrue, IsExact } from "conditional-type-checks";
import { Call } from "../src/FieldSelection.js";
import type { DeepFilterNever, Select } from "../src/types.js";
import type { TestSchema } from "./TestSchema.js";

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
    { someConnection: { pageInfo: { hasNextPage: true }; edges: { node: { id: true; state: true } } } }
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

  const argsSelection = {
    someConnection: Call({ first: 5 }, { pageInfo: { hasNextPage: true }, edges: { node: { id: true, state: true } } }),
  } as const;

  type _withArgsSelection = Select<TestSchema, typeof argsSelection>;

  type _TestSelectingConnectionWithArgs = AssertTrue<
    IsExact<
      _withArgsSelection,
      {
        someConnection: {
          pageInfo: { hasNextPage: boolean };
          edges: ({ node: { id: string; state: string } | null } | null)[] | null;
        };
      }
    >
  >;

  const emptyArgsSelection = {
    someConnection: Call({}, { pageInfo: { hasNextPage: true }, edges: { node: { id: true, state: true } } }),
  } as const;

  type _withEmptyArgsSelection = Select<TestSchema, typeof emptyArgsSelection>;

  type _TestSelectingConnectionWithEmptyArgs = AssertTrue<
    IsExact<
      _withEmptyArgsSelection,
      {
        someConnection: {
          pageInfo: { hasNextPage: boolean };
          edges: ({ node: { id: string; state: string } | null } | null)[] | null;
        };
      }
    >
  >;

  const wrongArgsSelection = {
    someConnection: Call({ first: "wrong type" }, { pageInfo: { hasNextPage: true }, edges: { node: { id: true, state: true } } }),
  } as const;
  type _withWrongArgsSelection = Select<TestSchema, typeof wrongArgsSelection>;
  type _TestSelectingConnectionWithWrongArgs = AssertTrue<
    IsExact<_withWrongArgsSelection, { someConnection: { $error: "incorrectly typed args passed when calling field" } }>
  >;

  const doesntAcceptArgsSelection = {
    optionalObj: Call({ first: "wrong type" }, { test: true }),
  } as const;
  type _withDoesntAcceptArgsSelection = Select<TestSchema, typeof doesntAcceptArgsSelection>;
  type _TestSelectingFieldWhichDoesntAcceptArgs = AssertTrue<
    IsExact<_withDoesntAcceptArgsSelection, { optionalObj: { $error: "field does not accept args" } }>
  >;

  const doesntAcceptArgsScalarSelection = {
    num: Call({ first: "wrong type" }, { test: true }),
  } as const;
  type _withDoesntAcceptArgsScalarSelection = Select<TestSchema, typeof doesntAcceptArgsScalarSelection>;
  type _TestSelectingScalarFieldWhichDoesntAcceptArgs = AssertTrue<
    IsExact<_withDoesntAcceptArgsScalarSelection, { num: { $error: "field does not accept args" } }>
  >;

  const nestedCallSelection = {
    someConnection: Call(
      { first: 5 },
      {
        edges: {
          node: {
            id: true,
            state: true,
            children: Call(
              { first: 10 },
              {
                edges: {
                  node: {
                    id: true,
                  },
                },
              }
            ),
          },
        },
      }
    ),
  } as const;
  const nestedCallNoSelection = {
    someConnection: {
      edges: {
        node: {
          id: true,
          state: true,
          children: {
            edges: {
              node: {
                id: true,
              },
            },
          },
        },
      },
    },
  } as const;

  type _withNestedNoCallSelection = Select<TestSchema, typeof nestedCallNoSelection>;
  type _withNestedCallSelection = Select<TestSchema, typeof nestedCallSelection>;

  type _TestSelectingWithNestedCalls = AssertTrue<IsExact<_withNestedCallSelection, _withNestedNoCallSelection>>;

  test("true", () => undefined);
});
