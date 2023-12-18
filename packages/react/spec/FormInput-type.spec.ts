import type { NestedQuestionCreateInput, NestedQuestionUpdateInput, QuestionHasManyInput } from "@gadget-client/zxcv-deeply-nested";
import type { AssertTrue, IsExact } from "conditional-type-checks";
import type { FormInput, UseFormSetValue } from "./../src/useActionForm.js";
import { FullyQualifiedUpdateQuizVariables } from "@gadget-client/zxcv-deeply-nested/types/models/Quiz.js";


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

  test("true", () => undefined);
});
