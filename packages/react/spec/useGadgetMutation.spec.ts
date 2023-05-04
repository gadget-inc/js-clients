import { renderHook } from "@testing-library/react";
import { useGadgetMutation } from "../src/useGadgetMutation";
import { noProviderErrorMessage } from "../src/utils";

describe("useGadgetMutation", () => {
  test("throw error when no provider included", () => {
    try {
      renderHook(() => useGadgetMutation("{__typename}"));
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(noProviderErrorMessage);
    }
  });
});
