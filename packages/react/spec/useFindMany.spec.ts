import { GadgetRecordList } from "@gadgetinc/api-client-core";
import { renderHook } from "@testing-library/react";
import { assert, IsExact } from "conditional-type-checks";
import { useFindMany } from "../src/useFindMany";
import { ErrorWrapper } from "../src/utils";
import { relatedProductsApi } from "./apis";
import { mockClient, TestWrapper } from "./testWrapper";

describe("useFindMany", () => {
  // all these functions are typechecked but never run to avoid actually making API calls
  const _TestFindManyReturnsTypedDataWithExplicitSelection = () => {
    const [{ data, fetching, error }, refresh] = useFindMany(relatedProductsApi.user, { select: { id: true, email: true } });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, undefined | GadgetRecordList<{ id: string; email: string | null }>>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    if (data) {
      data[0].id;
      data[0].email;
    }

    refresh();
  };

  const _TestFindManyReturnsTypedDataWithNoSelection = () => {
    const [{ data }] = useFindMany(relatedProductsApi.user);

    if (data) {
      data[0].id;
      data[0].email;
    }
  };

  test("can find a list of records", async () => {
    const { result } = renderHook(() => useFindMany(relatedProductsApi.user), { wrapper: TestWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockClient.executeQuery).toBeCalledTimes(1);

    mockClient.executeQuery.pushResponse("users", {
      data: {
        users: {
          edges: [
            { cursor: "123", node: { id: "123", email: "test@test.com" } },
            { cursor: "abc", node: { id: "124", email: "test@test.com" } },
          ],
          pageInfo: {
            startCursor: "123",
            endCursor: "abc",
            hasNextPage: false,
            hasPreviousPage: false,
          },
        },
      },
    });

    expect(result.current[0].data![0].id).toEqual("123");
    expect(result.current[0].data![1].id).toEqual("124");
    expect(result.current[0].data!.length).toEqual(2);
    expect(result.current[0].data!.hasNextPage).toEqual(false);
    expect(result.current[0].data!.hasPreviousPage).toEqual(false);
    expect(result.current[0].data!.startCursor).toEqual("123");
    expect(result.current[0].data!.endCursor).toEqual("abc");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can find a list of records and query for the next page", async () => {
    const { result, rerender } = renderHook((after?: string) => useFindMany(relatedProductsApi.user, { first: 2, after }), {
      wrapper: TestWrapper,
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockClient.executeQuery).toBeCalledTimes(1);

    mockClient.executeQuery.pushResponse("users", {
      data: {
        users: {
          edges: [
            { cursor: "123", node: { id: "123", email: "test@test.com" } },
            { cursor: "abc", node: { id: "124", email: "test@test.com" } },
          ],
          pageInfo: {
            startCursor: "123",
            endCursor: "abc",
            hasNextPage: true,
            hasPreviousPage: false,
          },
        },
      },
    });

    expect(result.current[0].data![0].id).toEqual("123");
    expect(result.current[0].data![1].id).toEqual("124");
    expect(result.current[0].data!.length).toEqual(2);
    expect(result.current[0].data!.endCursor).toEqual("abc");
    expect(result.current[0].data!.hasNextPage).toEqual(true);
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    // rerun the hook with the after cursor to simulate being called
    rerender(result.current[0].data!.endCursor);

    await Promise.resolve();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockClient.executeQuery).toBeCalledTimes(2);

    mockClient.executeQuery.pushResponse("users", {
      data: {
        users: {
          edges: [
            { cursor: "def", node: { id: "def", email: "test@test.com" } },
            { cursor: "hij", node: { id: "hij", email: "test@test.com" } },
          ],
          pageInfo: {
            startCursor: "def",
            endCursor: "hij",
            hasNextPage: false,
            hasPreviousPage: true,
          },
        },
      },
    });

    expect(result.current[0].data![0].id).toEqual("def");
    expect(result.current[0].data![1].id).toEqual("hij");
    expect(result.current[0].data!.hasNextPage).toEqual(false);
    expect(result.current[0].data!.hasPreviousPage).toEqual(true);
    expect(result.current[0].data!.startCursor).toEqual("def");
    expect(result.current[0].data!.endCursor).toEqual("hij");
  });

  test("can find an empty list of records", async () => {
    const { result } = renderHook(() => useFindMany(relatedProductsApi.user), { wrapper: TestWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockClient.executeQuery).toBeCalledTimes(1);

    mockClient.executeQuery.pushResponse("users", {
      data: {
        users: {
          edges: [],
          pageInfo: {
            startCursor: null,
            endCursor: null,
            hasNextPage: false,
            hasPreviousPage: false,
          },
        },
      },
    });

    expect(result.current[0].data!.length).toEqual(0);
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns the same data object on rerender if nothing changes about the result", async () => {
    const { result, rerender } = renderHook(() => useFindMany(relatedProductsApi.user), { wrapper: TestWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockClient.executeQuery).toBeCalledTimes(1);

    mockClient.executeQuery.pushResponse("users", {
      data: {
        users: {
          edges: [
            { cursor: "123", node: { id: "123", email: "test@test.com" } },
            { cursor: "abc", node: { id: "124", email: "test@test.com" } },
          ],
          pageInfo: {
            startCursor: "123",
            endCursor: "abc",
            hasNextPage: false,
            hasPreviousPage: false,
          },
        },
      },
    });

    const beforeObject = result.current[0];

    rerender();

    expect(result.current[0]).toBe(beforeObject);
  });
});
