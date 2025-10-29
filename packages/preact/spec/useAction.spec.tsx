import { act, renderHook } from "@testing-library/preact";
import type { AnyVariables } from "@urql/preact";
import { useAction } from "../src/hooks.js";
import { fullAuthApi, kitchenSinkApi, relatedProductsApi } from "./apis.js";
import { MockClientWrapper, createMockUrqlClient, mockUrqlClient } from "./testWrappers.js";

describe("useAction", () => {
  test("returns no data, not fetching, and no error when the component is first mounted", () => {
    const { result } = renderHook(() => useAction(relatedProductsApi.user.update), { wrapper: MockClientWrapper(relatedProductsApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns no data, fetching=true, and no error when the mutation is run, and then the successful data if the mutation succeeds", async () => {
    let query: string | undefined;
    const client = createMockUrqlClient({
      mutationAssertions: (request) => {
        query = "kind" in request.query ? request.query.loc?.source.body : "";
      },
    });

    const { result } = renderHook(() => useAction(relatedProductsApi.user.update), {
      wrapper: MockClientWrapper(relatedProductsApi, client),
    });

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(query).toMatchInlineSnapshot(`
      "mutation updateUser($id: GadgetID!, $user: UpdateUserInput) {
        updateUser(id: $id, user: $user) {
          success
          errors {
            message
            code
            ... on InvalidRecordError {
              model {
                apiIdentifier
              }
              validationErrors {
                message
                apiIdentifier
              }
            }
          }
          user {
            __typename
            id
            state
            createdAt
            email
            roles {
              key
              name
            }
            updatedAt
          }
        }
        gadgetMeta {
          hydrations(modelName: 
      "user")
        }
      }"
    `);

    expect(client.executeMutation).toBeCalledTimes(1);

    await client.executeMutation.pushResponse("updateUser", {
      data: {
        updateUser: {
          success: true,
          user: {
            id: "123",
            email: "test@test.com",
          },
        },
      },
      stale: false,
      hasNext: false,
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
      { wrapper: MockClientWrapper(relatedProductsApi) }
    );

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    await mockUrqlClient.executeMutation.pushResponse("updateUser", {
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
      stale: false,
      hasNext: false,
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
    expect((error as any).validationErrors).toMatchInlineSnapshot(`
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
    const { result, rerender } = renderHook(() => useAction(relatedProductsApi.user.update), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } });
    });

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    await mockUrqlClient.executeMutation.pushResponse("updateUser", {
      data: {
        updateUser: {
          success: true,
          user: {
            id: "123",
            email: "test@test.com",
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

  test("returns no data, fetching=true, and no error when the mutation is run, and then the successful data if the mutation succeeds for a namespaced model", async () => {
    let query: string | undefined;
    const client = createMockUrqlClient({
      mutationAssertions: (request) => {
        query = "kind" in request.query ? request.query.loc?.source.body : "";
      },
    });

    const { result } = renderHook(() => useAction(kitchenSinkApi.game.player.update), {
      wrapper: MockClientWrapper(kitchenSinkApi, client),
    });

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ id: "123", player: { name: "Caitlin Clark" } });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(query).toMatchInlineSnapshot(`
      "mutation updatePlayer($id: GadgetID!, $player: UpdateGamePlayerInput) {
        game {
          updatePlayer(id: $id, player: $player) {
            success
            errors {
              message
              code
              ... on InvalidRecordError {
                model {
                  apiIdentifier
                }
                validationErrors {
                  message
                  apiIdentifier
                }
              }
            }
            player {
              __typename
              id
              createdAt
              name
              number
              updatedAt
            }
          }
        }
        gadgetMeta {
          hydrations(modelName: 
      "game.player")
        }
      }"
    `);

    expect(client.executeMutation).toHaveBeenCalledTimes(1);

    await client.executeMutation.pushResponse("updatePlayer", {
      data: {
        game: {
          updatePlayer: {
            success: true,
            player: {
              id: "123",
              name: "Caitlin Clark",
            },
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data!.id).toEqual("123");
      expect(promiseResult.data!.name).toEqual("Caitlin Clark");
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    expect(result.current[0].data!.id).toEqual("123");
    expect(result.current[0].data!.name).toEqual("Caitlin Clark");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns an error when the mutation is run and the server responds with success: false for a namespaced model", async () => {
    const { result } = renderHook(
      () => {
        return useAction(kitchenSinkApi.game.player.update);
      },
      { wrapper: MockClientWrapper(kitchenSinkApi) }
    );

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ id: "123", player: { name: "Invalid name" } });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    await mockUrqlClient.executeMutation.pushResponse("updatePlayer", {
      data: {
        game: {
          updatePlayer: {
            success: false,
            errors: [
              {
                message: "Record is invalid, one error needs to be corrected. Email is not unique.",
                code: "GGT_INVALID_RECORD",
                validationErrors: [{ apiIdentifier: "name", message: "is not unique." }],
              },
            ],
            player: {
              id: "123",
              name: "Caitlin Clark",
            },
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
      expect(promiseResult.data).toBeFalsy();
    });

    expect(result.current[0].fetching).toBe(false);
    const error = result.current[0].error;
    expect(error).toBeTruthy();
    expect((error as any).validationErrors).toMatchInlineSnapshot(`
      [
        {
          "apiIdentifier": "name",
          "message": "is not unique.",
        },
      ]
    `);
    expect(result.current[0].data).toBeFalsy();
  });

  test("returns a second mutation response if called a second time", async () => {
    const { result } = renderHook(() => useAction(relatedProductsApi.user.update), { wrapper: MockClientWrapper(relatedProductsApi) });

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ id: "123", user: { email: "test@test.com" } });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    await mockUrqlClient.executeMutation.pushResponse("updateUser", {
      data: {
        updateUser: {
          success: true,
          user: {
            id: "123",
            email: "test@test.com",
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data!.id).toEqual("123");
      expect(promiseResult.data!.email).toEqual("test@test.com");
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    expect(result.current[0].data?.id).toEqual("123");
    expect(result.current[0].data?.email).toEqual("test@test.com");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    await act(() => {
      mutationPromise = result.current[1]({ id: "456", user: { email: "another@test.com" } });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(2);

    await mockUrqlClient.executeMutation.pushResponse("updateUser", {
      data: {
        updateUser: {
          success: true,
          user: {
            id: "456",
            email: "another@test.com",
          },
        },
      },
      stale: false,
      hasNext: false,
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

  test("generates correct mutation and variables for a mutation without model api identifier", async () => {
    let variables: AnyVariables;

    const client = createMockUrqlClient({
      mutationAssertions: (request: any) => {
        variables = request.variables;
      },
    });

    const { result } = renderHook(() => useAction(relatedProductsApi.unambiguous.update), {
      wrapper: MockClientWrapper(relatedProductsApi, client),
    });

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ id: "123", stringField: "hello world", numberField: 21 });
    });

    await client.executeMutation.pushResponse("updateUnambiguous", {
      data: {
        updateUnambiguous: {
          success: true,
          unambiguous: {
            id: "123",
            stringField: "hello world",
            numberField: 21,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data!.id).toEqual("123");
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    const flatVariables = {
      ...variables,
    };

    await act(() => {
      mutationPromise = result.current[1]({ id: "123", unambiguous: { stringField: "hello world", numberField: 21 } });
    });

    await client.executeMutation.pushResponse("updateUnambiguous", {
      data: {
        updateUnambiguous: {
          success: true,
          unambiguous: {
            id: "123",
            stringField: "hello world",
            numberField: 21,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data!.id).toEqual("123");
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    expect(flatVariables).toEqual(variables);
    expect(variables).toMatchInlineSnapshot(`
      {
        "id": "123",
        "unambiguous": {
          "numberField": 21,
          "stringField": "hello world",
        },
      }
    `);
  });

  test("generates correct mutation and variables for trigger that contributes inputs", async () => {
    let variables: AnyVariables;

    const client = createMockUrqlClient({
      mutationAssertions: (request: any) => {
        variables = request.variables;
      },
    });
    const { result } = renderHook(() => useAction(fullAuthApi.user.signUp), {
      wrapper: MockClientWrapper(fullAuthApi, client),
    });

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ email: "bob@test.com", password: "password123!" });
    });

    await client.executeMutation.pushResponse("signUpUser", {
      data: {
        signUpUser: {
          result: {
            result: "ok",
          },
          success: true,
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data).toEqual({ result: "ok" });
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    expect(variables).toEqual({
      email: "bob@test.com",
      password: "password123!",
    });
  });

  test("generates correct mutation and variables if there is an ambiguous field", async () => {
    let variables: AnyVariables;

    const client = createMockUrqlClient({
      mutationAssertions: (request: any) => {
        variables = request.variables;
      },
    });

    const { result } = renderHook(() => useAction(relatedProductsApi.ambiguous.update), {
      wrapper: MockClientWrapper(relatedProductsApi, client),
    });

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ id: "123", ambiguous: { ambiguous: "foo", booleanField: true } });
    });

    expect(client.executeMutation).toBeCalledTimes(1);

    await client.executeMutation.pushResponse("updateAmbiguous", {
      data: {
        updateAmbiguous: {
          success: true,
          ambiguous: {
            id: "123",
            ambiguous: "foo",
            booleanField: true,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data).toMatchInlineSnapshot(`
        {
          "ambiguous": "foo",
          "booleanField": true,
          "id": "123",
        }
      `);
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    expect(variables).toMatchInlineSnapshot(`
      {
        "ambiguous": {
          "ambiguous": "foo",
          "booleanField": true,
        },
        "id": "123",
      }
    `);
  });

  test("should throw if called without a model api identifier and there is an ambiguous field", async () => {
    let caughtError = null;

    const { result } = renderHook(() => useAction(relatedProductsApi.ambiguous.update), {
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
    const { result, rerender } = renderHook(() => useAction(relatedProductsApi.user.create), {
      wrapper: MockClientWrapper(relatedProductsApi),
    });

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]();
    });

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    await mockUrqlClient.executeMutation.pushResponse("createUser", {
      data: {
        updateUser: {
          success: true,
          user: {
            id: "123",
            email: "test@test.com",
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

  test("sends a stubbedActionError event when the action is stubbed", () => {
    let eventDispatched: CustomEvent | undefined;

    globalThis.addEventListener("gadget:devharness:stubbedActionError", (event) => {
      eventDispatched = event as CustomEvent;
    });

    renderHook(
      () =>
        useAction({
          // @ts-expect-error intentionally passing the wrong type
          type: "stubbedAction",
          reason: "MissingApiTrigger",
          dataPath: "fakePath",
          functionName: "fakeAction",
          actionApiIdentifier: "fakeAction",
          modelApiIdentifier: "fakeModel",
          variables: {},
          plan: () => ({
            query: "",
            variables: {},
          }),
          processResult: () => ({
            data: {},
            fetching: false,
            error: undefined,
          }),
        }),
      {
        wrapper: MockClientWrapper(relatedProductsApi),
      }
    );

    expect(eventDispatched).toBeTruthy();
    expect(eventDispatched!.detail).toEqual({
      reason: "MissingApiTrigger",
      action: {
        functionName: "fakeAction",
        actionApiIdentifier: "fakeAction",
        dataPath: "fakePath",
        modelApiIdentifier: "fakeModel",
      },
    });
  });

  test("handles upsert data response", async () => {
    const { result } = renderHook(() => useAction(kitchenSinkApi.widget.upsert), { wrapper: MockClientWrapper(relatedProductsApi) });

    let mutationPromise: any;
    await act(() => {
      mutationPromise = result.current[1]({ id: "123", widget: { name: "Something new", inventoryCount: 100 } });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    await mockUrqlClient.executeMutation.pushResponse("upsertWidget", {
      data: {
        upsertWidget: {
          success: true,
          widget: {
            id: "123",
            name: "Something new",
            inventoryCount: 101,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;

      expect(promiseResult.data!.id).toEqual("123");
      expect(promiseResult.data!.name).toEqual("Something new");
      expect(promiseResult.fetching).toBe(false);
      expect(promiseResult.error).toBeFalsy();
    });

    expect(result.current[0].data?.id).toEqual("123");
    expect(result.current[0].data?.name).toEqual("Something new");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });
});
