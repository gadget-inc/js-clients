/* eslint-disable jest/no-try-expect */
import { renderHook } from "@testing-library/react";
import { useGadgetQuery } from "../src/useGadgetQuery";
import { noProviderErrorMessage } from "../src/utils";

describe("useGadgetQuery", () => {
  test("throw error when no provider included", () => {
    try {
      renderHook(() => useGadgetQuery({ query: "{__typename}" }));
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(noProviderErrorMessage);
    }
  });
});
