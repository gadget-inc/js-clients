import { GadgetRecord } from "@gadgetinc/api-client-core";
import { renderHook } from "@testing-library/react";
import { assert, IsExact } from "conditional-type-checks";
import { useFindOne } from "../src";
import { ErrorWrapper } from "../src/utils";
import { relatedProductsApi } from "./apis";
import { mockClient, TestWrapper } from "./testWrapper";

describe("useFindOne", () => {
  // these functions are typechecked but never run to avoid actually making API calls
  const _TestFindOneReturnsTypedDataWithExplicitSelection = () => {
    const [{ data, fetching, error }, refresh] = useFindOne(relatedProductsApi.user, "10", { select: { id: true, email: true } });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, undefined | GadgetRecord<{ id: string; email: string | null }>>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    // data is accessible via dot access
    if (data) {
      data.id;
      data.email;
    }

    // hook return value includes the urql refresh function
    refresh();
  };

  const _TestFindOneReturnsTypedDataWithNoSelection = () => {
    const [{ data }] = useFindOne(relatedProductsApi.user, "10");

    if (data) {
      data.id;
      data.email;
    }
  };

  test("can find one record by id", async () => {
    const { result } = renderHook(() => useFindOne(relatedProductsApi.user, "123"), { wrapper: TestWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockClient.executeQuery).toBeCalledTimes(1);

    mockClient.executeQuery.pushResponse("user", {
      data: {
        user: {
          id: "123",
          email: "test@test.com",
        },
      },
    });

    expect(result.current[0].data!.id).toEqual("123");
    expect(result.current[0].data!.email).toEqual("test@test.com");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns an error if the record isn't found", async () => {
    const { result } = renderHook(() => useFindOne(relatedProductsApi.user, "123"), { wrapper: TestWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockClient.executeQuery).toBeCalledTimes(1);

    mockClient.executeQuery.pushResponse("user", {
      data: {
        user: null,
      },
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    const error = result.current[0].error;
    expect(error).toBeTruthy();
    expect(error!.message).toMatchInlineSnapshot(`"[GraphQL] Internal Error: Gadget API returned no data at user"`);
  });
});
