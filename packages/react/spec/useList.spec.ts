import { jest } from "@jest/globals";
import { act, renderHook } from "@testing-library/react";

let data: any = [{ id: 1 }, { id: 2 }];
let fetching = false;
let error = undefined as any;
jest.unstable_mockModule("../src/useFindMany", () => ({
  useFindMany: jest.fn<typeof useFindMany>().mockImplementation(() => [{ data, fetching, error, stale: false }, jest.fn()]),
}));

const { useFindMany } = await import("../src/useFindMany.js");
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
      expect(result.current[0].records).toEqual([{ id: 1 }, { id: 2 }]);
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
        const { result } = renderHook(() => useList(manager, { pageSize: 25 }));
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

  afterAll(() => {
    jest.resetAllMocks(); // Reset mocks after each test
  });
});
