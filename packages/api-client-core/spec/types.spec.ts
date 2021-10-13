import { AssertTrue, Has, IsExact } from "conditional-type-checks";
import { DefaultSelection, Select, Selectable } from "../src/types";

type TestSchema = {
  num: number;
  str: string;
  obj: {
    test: "test";
    bool: boolean;
  };
};

type TestSchemaSelection = {
  num?: boolean | null | undefined;
  str?: boolean | null | undefined;
  obj?: {
    test?: boolean | null | undefined;
    bool?: boolean | null | undefined;
  };
};

const TestDefaultSelection = {
  str: true,
  obj: {
    test: true,
    bool: true,
  },
};

type _SchemaSelect = AssertTrue<
  IsExact<Select<TestSchema, { num: true; str: undefined; obj: { test: true; bool: false } }>, { num: number; obj: { test: "test" } }>
>;

type _TestDefaultSelectionIsValidSelection = AssertTrue<Has<typeof TestDefaultSelection, TestSchemaSelection>>;

type _DefaultSelectionWithSelection = AssertTrue<
  IsExact<DefaultSelection<TestSchemaSelection, { select: { num: true } }, typeof TestDefaultSelection>, { num: true }>
>;

type _DefaultSelectionWithoutSelection = AssertTrue<
  IsExact<DefaultSelection<TestSchemaSelection, Selectable<TestSchemaSelection>, typeof TestDefaultSelection>, typeof TestDefaultSelection>
>;

test("true", () => undefined);
