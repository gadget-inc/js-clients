import type { AssertTrue, IsExact } from "conditional-type-checks";
import type { FormInput } from "./../src/useActionForm.js";

describe("FormInput", () => {
  type _scalarFormInput = AssertTrue<IsExact<FormInput<number>, number>>;
  const _scalarForm: FormInput<number> = 1;

  type _arrayFormInput = AssertTrue<IsExact<FormInput<number[]>, number[]>>;
  const _arrayForm: FormInput<number[]> = [1, 2, 3];

  type _anyTypeFormInput = AssertTrue<IsExact<FormInput<any>, any>>;

  type _objectFormInput = AssertTrue<
    IsExact<FormInput<{ create?: { name?: string }; update?: { id?: number } }>, { name?: string } | { id?: number } | undefined>
  >;

  type _objectNestedFormInput = AssertTrue<
    IsExact<
      FormInput<{ name?: string; inventoryCount?: number; gizmos?: { create?: { name?: string }; update?: { id?: number } } }>,
      { name?: string; inventoryCount?: number; gizmos?: { name?: string } | { id?: number } | undefined }
    >
  >;

  type _depthGuard1 = AssertTrue<
    IsExact<FormInput<{ a: { b: { c: { d: { e: { f: { g: { h: { i: { id: string } } } } } } } } } }, 1>, { a: any }>
  >;
  type _depthGuard2 = AssertTrue<
    IsExact<FormInput<{ a: { b: { c: { d: { e: { f: { g: { h: { i: { id: string } } } } } } } } } }, 2>, { a: { b: any } }>
  >;
  type _depthGuard3 = AssertTrue<
    IsExact<FormInput<{ a: { b: { c: { d: { e: { f: { g: { h: { i: { id: string } } } } } } } } } }, 3>, { a: { b: { c: any } } }>
  >;
  type _depthGuard4 = AssertTrue<
    IsExact<FormInput<{ a: { b: { c: { d: { e: { f: { g: { h: { i: { id: string } } } } } } } } } }, 3>, { a: { b: { c: { d: any } } } }>
  >;

  // const _typeGuardArrays: FormInput<
  //   { a1: { b: { c: { d: { e: { f: { g: number } } } } } }[]; a2: { b: { c: { d: { e: { f: { g: number } } } } } }[],  a3: { b: { c: { d: number }[] } }[]},
  //   5
  // >;

  test("true", () => undefined);
});
