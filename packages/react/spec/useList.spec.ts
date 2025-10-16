import type { AnyErrorWrapper, GadgetRecord } from "@gadgetinc/core";
import { jest } from "@jest/globals";
import { act, renderHook, waitFor } from "@testing-library/react";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { relatedProductsApi } from "./apis.js";

let data: any = [{ id: 1 }, { id: 2 }];
let fetching = false;
let error = undefined as any;
jest.unstable_mockModule("../src/hooks", () => ({
  useFindMany: jest.fn<typeof useFindMany>().mockImplementation(() => [{ data, fetching, error, stale: false }, jest.fn()]),
}));

const { useFindMany } = await import("../src/hooks.js");
const { useList } = await import("../src/useList.js");

describe("useList", () => {
  const manager = { findMany: jest.fn() } as any;
  let result: any;

  beforeEach(() => {
    data = [{ id: 1 }, { id: 2 }];
    const renderResult = renderHook(() => useList(manager));
    result = renderResult.result;
  });

  describe("pagination", () => {
    it("will return you a list of records", () => {
      expect(result.current[0].data).toEqual([{ id: 1 }, { id: 2 }]);
    });

    describe("page size", () => {
      it("has a default page size of 50", () => {
        expect(result.current[0].page.pageSize).toEqual(50);
      });

      it("can accept a page size parameter", () => {
        const { result } = renderHook(() => useList(manager, { pageSize: 25 }));
        expect(result.current[0].page.pageSize).toEqual(25);
      });

      it("will pass the page size to the useFindMany hook", () => {
        const { result: _result } = renderHook(() => useList(manager, { pageSize: 25 }));
        expect(useFindMany).toHaveBeenCalledWith(manager, { first: 25, after: undefined });
      });
    });

    describe("when a data result has more pages", () => {
      beforeEach(() => {
        data.hasNextPage = true;
        data.endCursor = "endCursor";
      });

      it("will return hasNextPage - true", () => {
        const { result } = renderHook(() => useList(manager, { pageSize: 25 }));
        expect(result.current[0].page.hasNextPage).toEqual(true);
      });

      test("goToNextPage will use first and after for the cursor", async () => {
        const { result } = renderHook(() => useList(manager, { pageSize: 25 }));

        await act(async () => {
          result.current[0].page.goToNextPage();
        });

        expect(result.current[0].page.variables).toEqual({ first: 25, after: "endCursor" });
      });

      test("changing the sort property will reset the cursor", async () => {
        const { result, rerender } = renderHook((sort) => useList(manager, { pageSize: 25, sort }));

        await act(async () => {
          result.current[0].page.goToNextPage();
        });

        expect(result.current[0].page.variables).toEqual({ first: 25, after: "endCursor" });

        //this is a weird api -- it takes a parameter that you pass to your original renderHook function
        const sort = { name: "asc" };
        rerender(sort);

        expect(result.current[0].page.variables).toEqual({ after: undefined, first: 25 });
      });
    });

    describe("when a data result has previous pages", () => {
      beforeEach(() => {
        data.hasPreviousPage = true;
        data.startCursor = "startCursor";
      });

      it("will return hasPreviousPage - true", () => {
        const { result } = renderHook(() => useList(manager, { pageSize: 25 }));
        expect(result.current[0].page.hasPreviousPage).toEqual(true);
      });

      test("goToPreviousPage will use last and before for the cursor", async () => {
        const { result } = renderHook(() => useList(manager, { pageSize: 25 }));

        await act(async () => {
          result.current[0].page.goToPreviousPage();
        });

        expect(result.current[0].page.variables).toEqual({ last: 25, before: "startCursor" });
      });
    });
  });

  describe("search", () => {
    beforeEach(() => {
      data = [{ id: 1 }, { id: 2 }];
      const renderResult = renderHook(() => useList(manager));
      result = renderResult.result;
    });

    it("will return you a search object after a debounce 300ms", async () => {
      result.current[0].search.set("searchValue");
      await waitFor(() => expect(result.current[0].search.value).toEqual("searchValue"));
    });

    it("will pass the search params to the useFindMany hook", async () => {
      result.current[0].search.set("searchValue");
      await waitFor(() => expect(useFindMany).toHaveBeenCalledWith(manager, { first: 50, after: undefined, search: "searchValue" }));
    });
  });

  describe("loading state", () => {
    it("will return you the fetching state", () => {
      expect(result.current[0].fetching).toEqual(false);
    });

    it("will return to you the fetching state when fetching", () => {
      fetching = true;
      const { result } = renderHook(() => useList(manager));
      expect(result.current[0].fetching).toEqual(true);
    });
  });

  describe("error state", () => {
    it("will pass errors from the useFindMany hook", () => {
      error = jest.fn();
      data = null;
      fetching = false;
      const { result } = renderHook(() => useList(manager));
      expect(result.current[0].error).toEqual(error);
    });
  });

  // compile-time type checks (not executed)
  const _TestUseListReturnsTypedDataWithExplicitSelection = () => {
    const [{ data, fetching, error }, _refresh] = useList(relatedProductsApi.user, {
      select: { id: true, email: true },
    });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);
    assert<IsExact<typeof data, undefined | GadgetRecord<{ id: string; email: string | null }>[]>>(true);

    if (data) {
      data[0].id;
      data[0].email;
    }
  };

  const _TestUseListReturnsTypedDataWithNoSelection = () => {
    const [{ data, fetching, error }] = useList(relatedProductsApi.user);

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof error, AnyErrorWrapper | undefined>>(true);
    assert<IsExact<typeof data, undefined | GadgetRecord<{ id: string; email: string | null }>[]>>(false);

    if (data) {
      data[0].id;
      data[0].email;
    }
  };

  afterAll(() => {
    jest.resetAllMocks(); // Reset mocks after each test
  });
});
