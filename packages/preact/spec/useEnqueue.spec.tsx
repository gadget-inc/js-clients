import { act, renderHook } from "@testing-library/preact";
import { type AnyVariables } from "@urql/preact";
import { useEnqueue } from "../src/hooks.js";
import { kitchenSinkApi, relatedProductsApi } from "./apis.js";
import { MockClientWrapper, createMockUrqlClient, mockUrqlClient } from "./testWrappers.js";

describe("useEnqueue", () => {
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
        query = "kind" in request.query ? request.query.loc?.source.body : "";
      },
    });

    const { result } = renderHook(() => useEnqueue(relatedProductsApi.user.update), {
      wrapper: MockClientWrapper(relatedProductsApi, client),
    });

    let mutationPromise: any;
    await act(() => {
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

    await client.executeMutation.pushResponse("enqueueUpdateUser", {
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
        query = "kind" in request.query ? request.query.loc?.source.body : "";
      },
    });

    const { result } = renderHook(() => useEnqueue(kitchenSinkApi.game.player.update), {
      wrapper: MockClientWrapper(kitchenSinkApi, client),
    });

    let mutationPromise: any;
    await act(() => {
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

    await client.executeMutation.pushResponse("enqueueUpdatePlayer", {
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
    await act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } }, { priority: "HIGH", retries: 5, startAt });
    });

    expect(result.current[0].handle).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      backgroundOptions: { priority: "HIGH", retries: { retryCount: 5 }, startAt: startAt.toISOString() },
      id: "123",
      user: { email: "test@test.com" },
    });

    await mockUrqlClient.executeMutation.pushResponse("enqueueUpdateUser", {
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
    const { result } = renderHook(() => useEnqueue(relatedProductsApi.user.update, { priority: "HIGH", retries: 5 }), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } }, { priority: "DEFAULT" });
    });

    expect(result.current[0].handle).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      backgroundOptions: { priority: "DEFAULT", retries: { retryCount: 5 } },
      id: "123",
      user: { email: "test@test.com" },
    });

    await mockUrqlClient.executeMutation.pushResponse("enqueueUpdateUser", {
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
      () => useEnqueue(relatedProductsApi.user.update, { priority: "HIGH", retries: 5, requestPolicy: "cache-and-network" }),
      {
        wrapper: MockClientWrapper(relatedProductsApi),
      }
    );

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } }, { priority: "DEFAULT" });
    });

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      backgroundOptions: { priority: "DEFAULT", retries: { retryCount: 5 } },
      id: "123",
      user: { email: "test@test.com" },
    });

    expect(mockUrqlClient.executeMutation.mock.calls[0][1].requestPolicy).toEqual("cache-and-network");

    await mockUrqlClient.executeMutation.pushResponse("enqueueUpdateUser", {
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
    await act(() => {
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

    await mockUrqlClient.executeMutation.pushResponse("enqueueUpdateUser", {
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
    await act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } });
    });

    expect(result.current[0].handle).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    await mockUrqlClient.executeMutation.pushResponse("enqueueUpdateUser", {
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
    expect((error as any).validationErrors).toMatchInlineSnapshot(`
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
    await act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } });
    });

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    await mockUrqlClient.executeMutation.pushResponse("enqueueUpdateUser", {
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
    await act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } });
    });

    expect(result.current[0].handle).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    await mockUrqlClient.executeMutation.pushResponse("enqueueUpdateUser", {
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

    await act(() => {
      mutationPromise = result.current[1]({ id: "456", user: { email: "another@test.com" } });
    });

    expect(result.current[0].handle).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(2);

    await mockUrqlClient.executeMutation.pushResponse("enqueueUpdateUser", {
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

    const { result } = renderHook(() => useEnqueue(relatedProductsApi.unambiguous.update), {
      wrapper: MockClientWrapper(relatedProductsApi, client),
    });

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ id: "123", stringField: "hello world", numberField: 21 });
    });

    await client.executeMutation.pushResponse("enqueueUpdateUnambiguous", {
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

    await act(() => {
      mutationPromise = result.current[1]({ id: "123", unambiguous: { stringField: "hello world", numberField: 21 } });
    });

    await client.executeMutation.pushResponse("enqueueUpdateUnambiguous", {
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

    const { result } = renderHook(() => useEnqueue(relatedProductsApi.ambiguous.update), {
      wrapper: MockClientWrapper(relatedProductsApi, client),
    });

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ id: "123", ambiguous: { ambiguous: "foo", booleanField: true } });
    });

    expect(client.executeMutation).toBeCalledTimes(1);

    await client.executeMutation.pushResponse("enqueueUpdateAmbiguous", {
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
    await act(() => {
      mutationPromise = result.current[1]();
    });

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    await mockUrqlClient.executeMutation.pushResponse("enqueueCreateUser", {
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
