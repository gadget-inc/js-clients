import type { NestedQuestionCreateInput, NestedQuestionUpdateInput, QuestionHasManyInput } from "@gadget-client/zxcv-deeply-nested";
import type { AssertTrue, IsExact } from "conditional-type-checks";
import type { FormInput } from "src/useActionForm.js";

describe("FormInput", () => {
  
  type _scalarFormInput = AssertTrue<IsExact<FormInput<number>, number>>;

  type _arrayFormInput = AssertTrue<IsExact<FormInput<number[]>, number[]>>;

  type _objectFormInput = AssertTrue<
    IsExact<FormInput<{ create?: { name?: string }; update?: { id?: number } }>, { name?: string } | { id?: number } | undefined>
  >;

  type _objectNestedFormInput = AssertTrue<
    IsExact<
      FormInput<{ name?: string; inventoryCount?: number; gizmos?: { create?: { name?: string }; update?: { id?: number } } }>,
      { name?: string; inventoryCount?: number; gizmos?: { name?: string } | { id?: number } | undefined }
    >
  >;

  type _objectDeeplyNestedFormInput = AssertTrue<
    IsExact<
      FormInput<QuestionHasManyInput>,
      NestedQuestionCreateInput | NestedQuestionUpdateInput | null | undefined
    >
  >;

  test("true", () => undefined);
});
