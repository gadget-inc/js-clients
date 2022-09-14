import { GadgetRecord } from "@gadgetinc/api-client-core";
import { renderHook } from "@testing-library/react";
import { assert, Has, IsExact } from "conditional-type-checks";
import { useGet } from "../src/useGet";
import { ErrorWrapper } from "../src/utils";
import { relatedProductsApi } from "./apis";
import { mockClient, TestWrapper } from "./testWrapper";

describe("useGet", () => {
  // these functions are typechecked but never run to avoid actually making API calls
  const _TestGetReturnsTypedDataWithExplicitSelection = () => {
    const [{ data, fetching, error }, refresh] = useGet(relatedProductsApi.currentSession, { select: { id: true, state: true } });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<Has<typeof data, undefined | GadgetRecord<{ id: string; state: any }>>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    // data is accessible via dot access
    if (data) {
      data.id;
      data.state;
    }

    // hook return value includes the urql refresh function
    refresh();
  };

  const _TestGetReturnsTypedDataWithNoSelection = () => {
    const [{ data }] = useGet(relatedProductsApi.currentSession);

    if (data) {
      data.id;
      data.state;
    }
  };

  test("it can find the current session", async () => {
    const { result } = renderHook(() => useGet(relatedProductsApi.currentSession), { wrapper: TestWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockClient.executeQuery).toBeCalledTimes(1);

    mockClient.executeQuery.pushResponse("currentSession", {
      data: {
        currentSession: {
          id: "123",
        },
      },
    });

    expect(result.current[0].data!.id).toEqual("123");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("it can not find the current session if the server doesn't have one", async () => {
    const { result } = renderHook(() => useGet(relatedProductsApi.currentSession), { wrapper: TestWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockClient.executeQuery).toBeCalledTimes(1);

    mockClient.executeQuery.pushResponse("currentSession", {
      data: {
        currentSession: null,
      },
    });

    expect(result.current[0].data).toBe(null);
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });
});
