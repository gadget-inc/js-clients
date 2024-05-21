import type { BackgroundActionHandle } from "@gadgetinc/api-client-core";
import { act, renderHook } from "@testing-library/react";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import React from "react";
import { type AnyVariables } from "urql";
import { Provider } from "../src/index.js";
import { useEnqueue } from "../src/useEnqueue.js";
import type { ErrorWrapper } from "../src/utils.js";
import { bulkExampleApi, kitchenSinkApi, relatedProductsApi } from "./apis.js";
import { MockClientWrapper, createMockUrqlClient, mockUrqlClient } from "./testWrappers.js";

describe("useEnqueue", () => {
  // these functions are typechecked but never run to avoid actually making API calls
  const _TestUseEnqueueCanRunUpdateActionsWithVariables = () => {
    type x = (typeof relatedProductsApi.user.update)["variablesType"];

    const [_, enqueue] = useEnqueue(relatedProductsApi.user.update);

    // can call with variables
    void enqueue({ id: "123", user: { email: "foo@bar.com" } });

    // can call with no model variables
    void enqueue({ id: "123" });

    // @ts-expect-error can't call with no arguments
    void enqueue();

    // @ts-expect-error can't call with no id
    void enqueue({});

    // @ts-expect-error can't call with variables that don't belong to the model
    void enqueue({ foo: "123" });
  };

  const _TestUseEnqueueCanRunCreateActionsWithVariables = () => {
    const [_, enqueue] = useEnqueue(relatedProductsApi.user.create);

    // can call with variables
    void enqueue({ user: { email: "foo@bar.com" } });

    // can call with no model variables
    void enqueue({});

    // can call with no variables at all
    void enqueue();

    // @ts-expect-error can't call with variables that don't belong to the model
    void enqueue({ foo: "123" });
  };

  const _TestUseEnqueueCanRunWithoutModelApiIdentifier = () => {
    const [_, enqueue] = useEnqueue(relatedProductsApi.unambiguous.update);

    // can call using flat style
    void enqueue({ id: "123", numberField: 654, stringField: "foo" });

    // can call using old style
    void enqueue({ id: "123", unambiguous: { numberField: 321, stringField: "bar" } });

    // @ts-expect-error can't call with no arguments
    void enqueue();

    // @ts-expect-error can't call with no id
    void enqueue({});
  };

  const _TestUseEnqueueCannotRunWithoutModelApiIdentifier = () => {
    const [_, enqueue] = useEnqueue(relatedProductsApi.ambiguous.update);

    // @ts-expect-error models with ambigous identifiers can't be called with flat style signature
    void enqueue({ id: "123", booleanField: true });

    // old style signature is always valid
    void enqueue({ id: "123", ambiguous: { booleanField: true } });

    // @ts-expect-error can't call with no arguments
    void enqueue();

    // @ts-expect-error can't call with no id
    void enqueue({});
  };

  const _TestUseEnqueueCanRunNamespacedActions = () => {
    const [_, enqueue] = useEnqueue(kitchenSinkApi.game.player.create);

    // can call with variables
    void enqueue({ player: { name: "Paige Buckets" } });

    // can call with no model variables
    void enqueue({});

    // can call with no variables at all
    void enqueue();

    // @ts-expect-error can't call with variables that don't belong to the model
    void enqueue({ foo: "123" });
  };

  const _TestUseEnqueueCanRunBulkActionsWithIds = () => {
    const [{ handles }, enqueue] = useEnqueue(bulkExampleApi.widget.bulkFlipDown);

    // can call with variables
    void enqueue({ ids: ["1", "2", "3"] });

    // @ts-expect-error can't call with no variables at all
    void enqueue();

    // @ts-expect-error can't call with empty variables
    void enqueue({});

    // @ts-expect-error can't call with variables that don't belong to the model
    void enqueue({ foo: "123" });
  };

  const _TestUseEnqueueCanRunBulkCreateActionsWithModelObjects = () => {
    const [_, enqueue] = useEnqueue(bulkExampleApi.widget.bulkCreate);

    // can call with flattened variables
    void enqueue([{ name: "foo" }, { name: "bar" }]);

    // can call with fully qualified variables
    void enqueue([{ widget: { name: "foo" } }, { widget: { name: "bar" } }]);

    // @ts-expect-error can't call with no variables at all
    void enqueue();

    // @ts-expect-error can't call with empty variables
    void enqueue({});

    // @ts-expect-error can't call with variables that don't belong to the model
    void enqueue([{ foo: "123" }]);
  };

  const _TestUseEnqueueCanRunBulkUpdateActionsWithModelObjects = () => {
    const [_, enqueue] = useEnqueue(bulkExampleApi.widget.bulkUpdate);

    // can call with flattened variables
    void enqueue([
      { id: "1", name: "foo" },
      { id: "2", name: "bar" },
    ]);

    // can call with fully qualified variables
    void enqueue([
      { id: "1", widget: { name: "foo" } },
      { id: "2", widget: { name: "bar" } },
    ]);

    // @ts-expect-error can't call with no variables at all
    void enqueue();

    // @ts-expect-error can't call with empty variables
    void enqueue({});

    // @ts-expect-error can't call with variables that don't belong to the model
    void enqueue([{ foo: "123" }]);
  };

  const _TestUseEnqueueReturnsTypedHandle = () => {
    const [{ handle, fetching, error }, _enqueue] = useEnqueue(relatedProductsApi.user.update);

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof handle, null | BackgroundActionHandle<typeof relatedProductsApi.user.update>>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    // data is accessible via dot access
    if (handle) {
      handle.id;
    }
  };

  const _TestUseEnqueueBulkReturnsTypedHandle = () => {
    const [{ handles, fetching, error }, _enqueue] = useEnqueue(relatedProductsApi.user.bulkUpdate);

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof handles, BackgroundActionHandle<typeof relatedProductsApi.user.bulkUpdate>[] | null>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    // data is accessible via dot access
    if (handles) {
      handles[0].id;
    }
  };

  test("returns no handle, not fetching, and no error when the component is first mounted", () => {
    const { result } = renderHook(() => useEnqueue(relatedProductsApi.user.update), { wrapper: MockClientWrapper(relatedProductsApi) });

    expect(result.current[0].handle).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns no handle, fetching=true, and no error when the mutation is run, and then the action handle if the mutation succeeds", async () => {
    let query: string | undefined;
    const client = createMockUrqlClient({
      mutationAssertions: (request) => {
        query = request.query.loc?.source.body;
      },
    });

    const { result } = renderHook(() => useEnqueue(relatedProductsApi.user.update), {
      wrapper: MockClientWrapper(relatedProductsApi, client),
    });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } });
    });

    expect(result.current[0].handle).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(query).toMatchInlineSnapshot(`
      "mutation enqueueUpdateUser($id: GadgetID!, $user: UpdateUserInput, $backgroundOptions: EnqueueBackgroundActionOptions) {
        background {
          updateUser(id: $id, user: $user, backgroundOptions: $backgroundOptions) {
            success
            errors {
              message
              code
            }
            backgroundAction {
              id
            }
          }
        }
      }"
    `);

    expect(client.executeMutation).toBeCalledTimes(1);

    client.executeMutation.pushResponse("enqueueUpdateUser", {
      data: {
        background: {
          updateUser: {
            success: true,
            backgroundAction: {
              id: "action-123",
            },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.handle!.id).toEqual("action-123");
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    expect(result.current[0].handle!.id).toEqual("action-123");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns no handle, fetching=true, and no error when the mutation is run, and then the action handle if the mutation succeeds for a namespaced model", async () => {
    let query: string | undefined;
    const client = createMockUrqlClient({
      mutationAssertions: (request) => {
        query = request.query.loc?.source.body;
      },
    });

    const { result } = renderHook(() => useEnqueue(kitchenSinkApi.game.player.update), {
      wrapper: MockClientWrapper(kitchenSinkApi, client),
    });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ id: "123", player: { name: "Caitlin Clark" } });
    });

    expect(result.current[0].handle).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(query).toMatchInlineSnapshot(`
      "mutation enqueueUpdatePlayer($id: GadgetID!, $player: UpdateGamePlayerInput, $backgroundOptions: EnqueueBackgroundActionOptions) {
        background {
          game {
            updatePlayer(id: $id, player: $player, backgroundOptions: $backgroundOptions) {
              success
              errors {
                message
                code
              }
              backgroundAction {
                id
              }
            }
          }
        }
      }"
    `);

    expect(client.executeMutation).toBeCalledTimes(1);

    client.executeMutation.pushResponse("enqueueUpdatePlayer", {
      data: {
        background: {
          game: {
            updatePlayer: {
              success: true,
              backgroundAction: {
                id: "action-123",
              },
            },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.handle!.id).toEqual("action-123");
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    expect(result.current[0].handle!.id).toEqual("action-123");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can pass background options as a second argument to the enqueue function", async () => {
    const { result } = renderHook(() => useEnqueue(relatedProductsApi.user.update), { wrapper: MockClientWrapper(relatedProductsApi) });
    const startAt = new Date(new Date().getTime() + 1000);
    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1](
        { id: "123", user: { email: "test@test.com" } },
        { priority: "high", retries: 5, startAt: startAt }
      );
    });

    expect(result.current[0].handle).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      backgroundOptions: { priority: "high", retries: { retryCount: 5 }, startAt: startAt.toISOString() },
      id: "123",
      user: { email: "test@test.com" },
    });

    mockUrqlClient.executeMutation.pushResponse("enqueueUpdateUser", {
      data: {
        background: {
          updateUser: {
            success: true,
            backgroundAction: {
              id: "action-123",
            },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.handle!.id).toEqual("action-123");
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });
  });

  test("can pass background options as a second argument to the hook function", async () => {
    const { result } = renderHook(() => useEnqueue(relatedProductsApi.user.update, { priority: "high", retries: 5 }), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } }, { priority: "default" });
    });

    expect(result.current[0].handle).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      backgroundOptions: { priority: "default", retries: { retryCount: 5 } },
      id: "123",
      user: { email: "test@test.com" },
    });

    mockUrqlClient.executeMutation.pushResponse("enqueueUpdateUser", {
      data: {
        background: {
          updateUser: {
            success: true,
            backgroundAction: {
              id: "action-123",
            },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.handle!.id).toEqual("action-123");
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });
  });

  test("can pass urql request options in the a second argument to the hook function", async () => {
    const { result } = renderHook(
      () => useEnqueue(relatedProductsApi.user.update, { priority: "high", retries: 5, requestPolicy: "cache-and-network" }),
      {
        wrapper: MockClientWrapper(relatedProductsApi),
      }
    );

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } }, { priority: "default" });
    });

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      backgroundOptions: { priority: "default", retries: { retryCount: 5 } },
      id: "123",
      user: { email: "test@test.com" },
    });

    expect(mockUrqlClient.executeMutation.mock.calls[0][1].requestPolicy).toEqual("cache-and-network");

    mockUrqlClient.executeMutation.pushResponse("enqueueUpdateUser", {
      data: {
        background: {
          updateUser: {
            success: true,
            backgroundAction: {
              id: "action-123",
            },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      await mutationPromise;
    });
  });

  test("background options passed to the enqueue function take precedence", async () => {
    const { result } = renderHook(() => useEnqueue(relatedProductsApi.user.update, { retries: { retryCount: 1, backoffFactor: 1 } }), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1](
        { id: "123", user: { email: "test@test.com" } },
        { retries: { retryCount: 1, backoffFactor: 2 } }
      );
    });

    expect(result.current[0].handle).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      backgroundOptions: { retries: { retryCount: 1, backoffFactor: 2 } },
      id: "123",
      user: { email: "test@test.com" },
    });

    mockUrqlClient.executeMutation.pushResponse("enqueueUpdateUser", {
      data: {
        background: {
          updateUser: {
            success: true,
            backgroundAction: {
              id: "action-123",
            },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.handle!.id).toEqual("action-123");
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });
  });

  test("returns an error when the mutation is run and the server responds with success: false", async () => {
    const { result } = renderHook(
      () => {
        return useEnqueue(relatedProductsApi.user.update);
      },
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } });
    });

    expect(result.current[0].handle).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    mockUrqlClient.executeMutation.pushResponse("enqueueUpdateUser", {
      data: {
        background: {
          updateUser: {
            success: false,
            errors: [
              {
                message: "Record is invalid, one error needs to be corrected. Email is not unique.",
                code: "GGT_INVALID_RECORD",
                validationErrors: [{ apiIdentifier: "email", message: "is not unique." }],
              },
            ],
            backgroundAction: null,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeTruthy();
      expect(promiseResult.handle).toBeFalsy();
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
    expect(result.current[0].handle).toBeFalsy();
  });

  test("returns the same data after executing the mutation and rerendering", async () => {
    const { result, rerender } = renderHook(() => useEnqueue(relatedProductsApi.user.update), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } });
    });

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    mockUrqlClient.executeMutation.pushResponse("enqueueUpdateUser", {
      data: {
        background: {
          updateUser: {
            success: true,
            backgroundAction: {
              id: "action-123",
            },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      await mutationPromise;
    });

    const beforeObject = result.current[0]!;
    expect(beforeObject).toBeTruthy();

    rerender();

    expect(result.current[0]).toBe(beforeObject);
  });

  test("returns a second handle if called a second time", async () => {
    const { result } = renderHook(() => useEnqueue(relatedProductsApi.user.update), { wrapper: MockClientWrapper(relatedProductsApi) });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } });
    });

    expect(result.current[0].handle).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    mockUrqlClient.executeMutation.pushResponse("enqueueUpdateUser", {
      data: {
        background: {
          updateUser: {
            success: true,
            backgroundAction: {
              id: "action-123",
            },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.handle!.id).toEqual("action-123");
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    expect(result.current[0].handle!.id).toEqual("action-123");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    act(() => {
      mutationPromise = result.current[1]({ id: "456", user: { email: "another@test.com" } });
    });

    expect(result.current[0].handle).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(2);

    mockUrqlClient.executeMutation.pushResponse("enqueueUpdateUser", {
      data: {
        background: {
          updateUser: {
            success: true,
            backgroundAction: {
              id: "action-456",
            },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.handle!.id).toEqual("action-456");
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    expect(result.current[0].handle!.id).toEqual("action-456");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("generates correct mutation and variables for a mutation without model api identifier", async () => {
    let variables: AnyVariables;

    const client = createMockUrqlClient({
      mutationAssertions: (request) => {
        variables = request.variables;
      },
    });

    const wrapper = (props: { children: React.ReactNode }) => <Provider value={client}>{props.children}</Provider>;

    const { result } = renderHook(() => useEnqueue(relatedProductsApi.unambiguous.update), {
      wrapper,
    });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ id: "123", stringField: "hello world", numberField: 21 });
    });

    client.executeMutation.pushResponse("enqueueUpdateUnambiguous", {
      data: {
        background: {
          updateUnambiguous: {
            success: true,
            backgroundAction: {
              id: "123",
            },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.handle!.id).toEqual("123");
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    const flatVariables = {
      ...variables,
    };

    act(() => {
      mutationPromise = result.current[1]({ id: "123", unambiguous: { stringField: "hello world", numberField: 21 } });
    });

    client.executeMutation.pushResponse("enqueueUpdateUnambiguous", {
      data: {
        background: {
          updateUnambiguous: {
            success: true,
            backgroundAction: {
              id: "123",
            },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.handle!.id).toEqual("123");
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    expect(flatVariables).toEqual(variables);
    expect(variables).toMatchInlineSnapshot(`
      {
        "backgroundOptions": {},
        "id": "123",
        "unambiguous": {
          "numberField": 21,
          "stringField": "hello world",
        },
      }
    `);
  });

  test("generates correct mutation and variables if there is an ambiguous field", async () => {
    let variables: AnyVariables;

    const client = createMockUrqlClient({
      mutationAssertions: (request) => {
        variables = request.variables;
      },
    });

    const wrapper = (props: { children: React.ReactNode }) => <Provider value={client}>{props.children}</Provider>;

    const { result } = renderHook(() => useEnqueue(relatedProductsApi.ambiguous.update), {
      wrapper,
    });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ id: "123", ambiguous: { ambiguous: "foo", booleanField: true } });
    });

    expect(client.executeMutation).toBeCalledTimes(1);

    client.executeMutation.pushResponse("enqueueUpdateAmbiguous", {
      data: {
        background: {
          updateAmbiguous: {
            success: true,
            backgroundAction: {
              id: "123",
            },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data).toMatchInlineSnapshot(`undefined`);
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    expect(variables).toMatchInlineSnapshot(`
      {
        "ambiguous": {
          "ambiguous": "foo",
          "booleanField": true,
        },
        "backgroundOptions": {},
        "id": "123",
      }
    `);
  });

  test("should throw if called without a model api identifier and there is an ambiguous field", async () => {
    let caughtError = null;

    const { result } = renderHook(() => useEnqueue(relatedProductsApi.ambiguous.update), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    try {
      // @ts-expect-error intentionally calling with wrong type
      await result.current[1]({ id: "123", booleanField: true });
    } catch (e) {
      caughtError = e;
    }

    expect(caughtError).toMatchInlineSnapshot(
      `[Error: Invalid arguments found in variables. Did you mean to use ({ ambiguous: { ... } })?]`
    );
  });

  test("can run a mutation which takes no variables without passing any", async () => {
    const { result, rerender } = renderHook(() => useEnqueue(relatedProductsApi.user.create), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]();
    });

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    mockUrqlClient.executeMutation.pushResponse("enqueueCreateUser", {
      data: {
        background: {
          createUser: {
            success: true,
            backgroundAction: {
              id: "123",
            },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      await mutationPromise;
    });

    const beforeObject = result.current[0]!;
    expect(beforeObject).toBeTruthy();

    rerender();

    expect(result.current[0]).toBe(beforeObject);
  });
});
