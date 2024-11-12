import type { AssertTrue, Has, IsExact } from "conditional-type-checks";
import type { FieldSelection } from "src/FieldSelection.js";
import type { ComputedViewFunctionWithVariables, ComputedViewFunctionWithoutVariables } from "src/GadgetFunctions.js";
import type { AllFieldsSelected, AvailableSelection, DefaultSelection, DefaultSelection2 } from "../src/types.js";
import type { AvailableTestSchemaSelection, TestSchema } from "./TestSchema.js";
import type { ExpandRecursively } from "./helpers.js";

test("DefaultSelection", () => {
  type nullDefault = DefaultSelection<AvailableTestSchemaSelection, { select: null }, { num: true }>;
  type _TestDefaultsNullToTheDefault = AssertTrue<IsExact<nullDefault, { num: true }>>;

  type undefinedDefault = DefaultSelection<AvailableTestSchemaSelection, { select: undefined }, { num: true }>;
  type _TestDefaultsUndefinedToTheDefault = AssertTrue<IsExact<undefinedDefault, { num: true }>>;

  // eslint-disable-next-line @typescript-eslint/ban-types
  type undefinedDefault2 = DefaultSelection<AvailableTestSchemaSelection, {}, { num: true }>;
  type _TestDefaultsUndefinedToTheDefault2 = AssertTrue<IsExact<undefinedDefault2, { num: true }>>;

  type anyDefault = DefaultSelection2<AvailableTestSchemaSelection, { select: any }, { num: true }>;
  type _TestDefaultsAnyToTheDefault = AssertTrue<IsExact<anyDefault, { num: true }>>;

  type nonDefault = DefaultSelection<AvailableTestSchemaSelection, { select: { num: false; str: true } }, { num: true }>;
  type _TestRespectsTruthySelections = AssertTrue<IsExact<nonDefault, { num: false; str: true }>>;

  type nonDefault2 = DefaultSelection<AvailableTestSchemaSelection, { select: { num: false } }, { num: true }>;
  type _TestRespectsTruthySelections2 = AssertTrue<IsExact<nonDefault2, { num: false }>>;
});

test("AvailableSelection", () => {
  type availableTestSchemaSelection = AvailableSelection<TestSchema>;
  type _TestAvailableTestSchemaSelection = Has<FieldSelection, availableTestSchemaSelection>;

  type testType = { a: number; b: { c: string; d: { e: boolean } } };
  type availableSelection = AvailableSelection<testType>;
  type _TestAvailableSelection = AssertTrue<
    IsExact<
      availableSelection,
      {
        a?: boolean | null | undefined;
        b?:
          | {
              c?: boolean | null | undefined;
              d?:
                | {
                    e?: boolean | null | undefined;
                  }
                | undefined;
            }
          | undefined;
      }
    >
  >;
});

test("AllFieldsSelected", () => {
  type testType = { a: number; b: { c: string; d: { e: boolean } } };
  type availableSelection = AvailableSelection<testType>;
  type allFieldsSelected = ExpandRecursively<AllFieldsSelected<availableSelection>>;
  type _TestAllFieldsSelected = AssertTrue<IsExact<allFieldsSelected, { a: true; b: { c: true; d: { e: true } } }>>;
});

test("ComputedViewFunction", () => {
  type testType = { a: number; b: { c: string; d: { e: boolean } } };

  const f: ComputedViewFunctionWithoutVariables<testType> = () => ({} as any);

  const resultWithDefaultSelection = f();
  type _TestResultWithDefaultSelection = AssertTrue<IsExact<Awaited<typeof resultWithDefaultSelection>, testType>>;

  const resultWithDefaultSelection2 = f({});
  type _TestResultWithDefaultSelection2 = AssertTrue<IsExact<Awaited<typeof resultWithDefaultSelection2>, testType>>;

  const resultWithDefaultSelection3 = f({ select: null });
  type _TestResultWithDefaultSelection3 = AssertTrue<IsExact<Awaited<typeof resultWithDefaultSelection3>, testType>>;

  const resultWithSelection = f({ select: { a: true } });
  type _TestResultWithSelection = AssertTrue<IsExact<Awaited<typeof resultWithSelection>, { a: number }>>;

  const resultWithSelection2 = f({ select: { a: false, b: { c: true } } });
  type _TestResultWithSelection2 = AssertTrue<IsExact<Awaited<typeof resultWithSelection2>, { b: { c: string } }>>;

  type vars = { n?: number; b: boolean };
  const f2: ComputedViewFunctionWithVariables<vars, testType> = () => ({} as any);

  const resultWithDefaultSelection4 = f2({ b: false });
  type _TestResultWithDefaultSelection4 = AssertTrue<IsExact<Awaited<typeof resultWithDefaultSelection4>, testType>>;

  const resultWithSelection5 = f({ select: { a: false, b: { c: true } } });
  type _TestResultWithSelection5 = AssertTrue<IsExact<Awaited<typeof resultWithSelection5>, { b: { c: string } }>>;
});
