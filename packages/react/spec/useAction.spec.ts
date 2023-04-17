import { GadgetRecord } from "@gadgetinc/api-client-core";
import { act, renderHook } from "@testing-library/react";

import { assert, IsExact } from "conditional-type-checks";
import { useAction } from "../src";
import { ErrorWrapper } from "../src/utils";
import { relatedProductsApi } from "./apis";
import { mockClient, TestWrapper } from "./testWrapper";

describe("useAction", () => {
  // these functions are typechecked but never run to avoid actually making API calls
  const TestUseActionCanRunActionsWithVariables = () => {
    const [_, mutate] = useAction(relatedProductsApi.user.update);

    // can call with variables
    void mutate({ id: "123", user: { email: "foo@bar.com" } });

    // can call with no model variables
    void mutate({ id: "123" });

    // @ts-expect-error can't call with no arguments
    void mutate();

    // @ts-expect-error can't call with no id
    void mutate({});

    // @ts-expect-error can't call with variables that don't belong to the model
    void mutate({ foo: "123" });
  };

  const TestUseActionReturnsTypedDataWithExplicitSelection = () => {
    const [{ data, fetching, error }, mutate] = useAction(relatedProductsApi.user.update, {
      select: { id: true, email: true },
    });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, undefined | GadgetRecord<{ id: string; email: string | null }>>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    // data is accessible via dot access
    if (data) {
      data.id;
      data.email;
    }
  };

  const TestUseActionReturnsTypedDataWithNoSelection = () => {
    const [{ data }] = useAction(relatedProductsApi.user.update);

    if (data) {
      data.id;
      data.email;
    }
  };

  test("returns no data, not fetching, and no error when the component is first mounted", () => {
    const { result } = renderHook(() => useAction(relatedProductsApi.user.update), { wrapper: TestWrapper });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns no data, fetching=true, and no error when the mutation is run, and then the successful data if the mutation succeeds", async () => {
    const { result } = renderHook(() => useAction(relatedProductsApi.user.update), { wrapper: TestWrapper });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockClient.executeMutation).toBeCalledTimes(1);

    mockClient.executeMutation.pushResponse("updateUser", {
      data: {
        updateUser: {
          success: true,
          user: {
            id: "123",
            email: "test@test.com",
          },
        },
      },
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data!.id).toEqual("123");
      expect(promiseResult.data!.email).toEqual("test@test.com");
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    expect(result.current[0].data!.id).toEqual("123");
    expect(result.current[0].data!.email).toEqual("test@test.com");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns an error when the mutation is run and the server responds with success: false", async () => {
    const { result } = renderHook(
      () => {
        return useAction(relatedProductsApi.user.update);
      },
      { wrapper: TestWrapper }
    );

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockClient.executeMutation).toBeCalledTimes(1);

    mockClient.executeMutation.pushResponse("updateUser", {
      data: {
        updateUser: {
          success: false,
          errors: [
            {
              message: "Record is invalid, one error needs to be corrected. Email is not unique.",
              code: "GGT_INVALID_RECORD",
              validationErrors: [{ apiIdentifier: "email", message: "is not unique." }],
            },
          ],
          user: {
            id: "123",
            email: "test@test.com",
          },
        },
      },
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeTruthy();
      expect(promiseResult.data).toBeFalsy();
    });

    expect(result.current[0].fetching).toBe(false);
    const error = result.current[0].error;
    expect(error).toBeTruthy();
    expect(error!.validationErrors).toMatchInlineSnapshot(`
      [
        {
          "apiIdentifier": "email",
          "message": "is not unique.",
        },
      ]
    `);
    expect(result.current[0].data).toBeFalsy();
  });

  test("returns the same data after executing the mutation and rerendering", async () => {
    const { result, rerender } = renderHook(() => useAction(relatedProductsApi.user.update), { wrapper: TestWrapper });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } });
    });

    expect(mockClient.executeMutation).toBeCalledTimes(1);

    mockClient.executeMutation.pushResponse("updateUser", {
      data: {
        updateUser: {
          success: true,
          user: {
            id: "123",
            email: "test@test.com",
          },
        },
      },
    });

    await act(async () => {
      await mutationPromise;
    });

    const beforeObject = result.current[0]!;
    expect(beforeObject).toBeTruthy();

    rerender();

    expect(result.current[0]).toBe(beforeObject);
  });

  test("returns a second mutation response if called a second time", async () => {
    const { result } = renderHook(() => useAction(relatedProductsApi.user.update), { wrapper: TestWrapper });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockClient.executeMutation).toBeCalledTimes(1);

    mockClient.executeMutation.pushResponse("updateUser", {
      data: {
        updateUser: {
          success: true,
          user: {
            id: "123",
            email: "test@test.com",
          },
        },
      },
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data!.id).toEqual("123");
      expect(promiseResult.data!.email).toEqual("test@test.com");
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    expect(result.current[0].data!.id).toEqual("123");
    expect(result.current[0].data!.email).toEqual("test@test.com");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    act(() => {
      mutationPromise = result.current[1]({ id: "456", user: { email: "another@test.com" } });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockClient.executeMutation).toBeCalledTimes(2);

    mockClient.executeMutation.pushResponse("updateUser", {
      data: {
        updateUser: {
          success: true,
          user: {
            id: "456",
            email: "another@test.com",
          },
        },
      },
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data!.id).toEqual("456");
      expect(promiseResult.data!.email).toEqual("another@test.com");
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    expect(result.current[0].data!.id).toEqual("456");
    expect(result.current[0].data!.email).toEqual("another@test.com");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });
});
