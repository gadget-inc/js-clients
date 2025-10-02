import type { GadgetRecord } from "@gadgetinc/api-client-core";
import type { ErrorWrapper } from "@gadgetinc/utils";
import { renderHook } from "@testing-library/react";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { act } from "react";
import { useBulkAction } from "../src/index.js";
import { bulkExampleApi, kitchenSinkApi } from "./apis.js";
import { MockClientWrapper, createMockUrqlClient, mockUrqlClient } from "./testWrappers.js";

describe("useBulkAction", () => {
  // these functions are typechecked but never run to avoid actually making API calls
  const _TestUseBulkActionCanRunActionsWithVariables = () => {
    const [_, mutate] = useBulkAction(bulkExampleApi.widget.bulkFlipDown);

    // can call with variables
    void mutate({ ids: ["123", "124"] });

    // @ts-expect-error can't call with no arguments
    void mutate();

    // @ts-expect-error can't call with no ids
    void mutate({});

    // @ts-expect-error can't call with variables that don't belong to the model
    void mutate({ foo: "123" });
  };

  const _TestUseBulkActionReturnsTypedDataWithExplicitSelection = () => {
    const [{ data, fetching, error }, _mutate] = useBulkAction(bulkExampleApi.widget.bulkFlipDown, {
      select: { id: true, name: true },
    });

    assert<IsExact<typeof fetching, boolean>>(true);
    assert<IsExact<typeof data, undefined | GadgetRecord<{ id: string; name: string | null }>[]>>(true);
    assert<IsExact<typeof error, ErrorWrapper | undefined>>(true);

    if (data) {
      data[0].id;
      data[0].name;
    }
  };

  const _TestUseActionReturnsTypedDataWithNoSelection = () => {
    const [{ data }] = useBulkAction(bulkExampleApi.widget.bulkFlipDown);

    if (data) {
      data[0].id;
      data[0].name;
    }
  };

  const _TestUseBulkActionCanRunNamespacedModelAction = () => {
    const [_, mutate] = useBulkAction(kitchenSinkApi.game.player.bulkUpdate);

    // can call with variables
    void mutate([{ id: "123", name: "new name" }]);

    // @ts-expect-error can't call with no arguments
    void mutate();

    // @ts-expect-error can't call with no ids
    void mutate({});

    // @ts-expect-error can't call with one attributes object
    void mutate({ foo: "123" });

    // @ts-expect-error can't call with array of variables that don't belong to the model
    void mutate([{ foo: "123" }]);
  };

  test("returns no data, not fetching, and no error when the component is first mounted", () => {
    const { result } = renderHook(() => useBulkAction(bulkExampleApi.widget.bulkFlipDown), { wrapper: MockClientWrapper(bulkExampleApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns no data, fetching=true, and no error when the mutation is run, and then the successful data if the mutation succeeds for an ids only mutation", async () => {
    let query: string | undefined;
    const client = createMockUrqlClient({
      mutationAssertions: (request) => {
        query = request.query.loc?.source.body;
      },
    });

    const { result } = renderHook(() => useBulkAction(bulkExampleApi.widget.bulkFlipDown), {
      wrapper: MockClientWrapper(bulkExampleApi, client),
    });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ ids: ["123", "124"] });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(query).toMatchInlineSnapshot(`
      "mutation bulkFlipDownWidgets($ids: [GadgetID!]!) {
        bulkFlipDownWidgets(ids: $ids) {
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
          widgets {
            __typename
            id
            createdAt
            name
            updatedAt
          }
        }
        gadgetMeta {
          hydrations(modelName: 
      "widget")
        }
      }"
    `);

    expect(client.executeMutation).toBeCalledTimes(1);

    client.executeMutation.pushResponse("bulkFlipDownWidgets", {
      data: {
        bulkFlipDownWidgets: {
          success: true,
          widgets: [
            {
              id: "123",
            },
            { id: "124" },
          ],
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data!.length).toEqual(2);
      expect(promiseResult.data![0].id).toEqual("123");
      expect(promiseResult.data![1].id).toEqual("124");
    });

    expect(result.current[0].data!.length).toEqual(2);
    expect(result.current[0].data![0].id).toEqual("123");
    expect(result.current[0].data![1].id).toEqual("124");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns no data, fetching=true, and no error when the mutation is run, and then the successful data if the mutation succeeds for an ids only mutation for a namespaced model", async () => {
    let query: string | undefined;
    const client = createMockUrqlClient({
      mutationAssertions: (request) => {
        query = request.query.loc?.source.body;
      },
    });

    const { result } = renderHook(() => useBulkAction(kitchenSinkApi.game.player.bulkCreate), {
      wrapper: MockClientWrapper(kitchenSinkApi, client),
    });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]([{ name: "Paige Buckets" }, { name: "Kamilla Cardoso" }]);
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(query).toMatchInlineSnapshot(`
      "mutation bulkCreatePlayers($inputs: [BulkCreateGamePlayersInput!]!) {
        game {
          bulkCreatePlayers(inputs: $inputs) {
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
            players {
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

    client.executeMutation.pushResponse("bulkCreatePlayers", {
      data: {
        game: {
          bulkCreatePlayers: {
            success: true,
            players: [
              {
                id: "123",
                name: "Paige Buckets",
              },
              { id: "124", name: "Kamilla Cardoso" },
            ],
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data!.length).toEqual(2);
      expect(promiseResult.data![0].id).toEqual("123");
      expect(promiseResult.data![0].name).toEqual("Paige Buckets");
      expect(promiseResult.data![1].id).toEqual("124");
      expect(promiseResult.data![1].name).toEqual("Kamilla Cardoso");
    });

    expect(result.current[0].data!.length).toEqual(2);
    expect(result.current[0].data![0].id).toEqual("123");
    expect(result.current[0].data![0].name).toEqual("Paige Buckets");
    expect(result.current[0].data![1].id).toEqual("124");
    expect(result.current[0].data![1].name).toEqual("Kamilla Cardoso");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can execute a bulk create with flattened params", async () => {
    const { result } = renderHook(() => useBulkAction(bulkExampleApi.widget.bulkCreate), { wrapper: MockClientWrapper(bulkExampleApi) });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]([{ name: "foo" }, { name: "bar" }]);
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);
    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      inputs: [
        {
          widget: {
            name: "foo",
          },
        },
        {
          widget: {
            name: "bar",
          },
        },
      ],
    });

    mockUrqlClient.executeMutation.pushResponse("bulkCreateWidgets", {
      data: {
        bulkCreateWidgets: {
          success: true,
          widgets: [
            { id: "123", name: "foo" },
            { id: "124", name: "bar" },
          ],
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data!.length).toEqual(2);
      expect(promiseResult.data![0].id).toEqual("123");
      expect(promiseResult.data![1].id).toEqual("124");
    });

    expect(result.current[0].data?.length).toEqual(2);
    expect(result.current[0].data?.[0].id).toEqual("123");
    expect(result.current[0].data?.[1].id).toEqual("124");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can execute a bulk create with fully qualified params", async () => {
    const { result } = renderHook(() => useBulkAction(bulkExampleApi.widget.bulkCreate), { wrapper: MockClientWrapper(bulkExampleApi) });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]([{ widget: { name: "foo" } }, { widget: { name: "bar" } }]);
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);
    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      inputs: [
        {
          widget: {
            name: "foo",
          },
        },
        {
          widget: {
            name: "bar",
          },
        },
      ],
    });

    mockUrqlClient.executeMutation.pushResponse("bulkCreateWidgets", {
      data: {
        bulkCreateWidgets: {
          success: true,
          widgets: [
            { id: "123", name: "foo" },
            { id: "124", name: "bar" },
          ],
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data!.length).toEqual(2);
      expect(promiseResult.data![0].id).toEqual("123");
      expect(promiseResult.data![1].id).toEqual("124");
    });

    expect(result.current[0].data?.length).toEqual(2);
    expect(result.current[0].data?.[0].id).toEqual("123");
    expect(result.current[0].data?.[1].id).toEqual("124");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can execute a bulk update with flattened params", async () => {
    const { result } = renderHook(() => useBulkAction(bulkExampleApi.widget.bulkUpdate), { wrapper: MockClientWrapper(bulkExampleApi) });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]([
        { id: "123", name: "foo" },
        { id: "124", name: "bar" },
      ]);
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);
    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      inputs: [
        {
          id: "123",
          widget: {
            name: "foo",
          },
        },
        {
          id: "124",
          widget: {
            name: "bar",
          },
        },
      ],
    });

    mockUrqlClient.executeMutation.pushResponse("bulkUpdateWidgets", {
      data: {
        bulkUpdateWidgets: {
          success: true,
          widgets: [
            { id: "123", name: "foo" },
            { id: "124", name: "bar" },
          ],
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data!.length).toEqual(2);
      expect(promiseResult.data![0].id).toEqual("123");
      expect(promiseResult.data![1].id).toEqual("124");
    });

    expect(result.current[0].data?.length).toEqual(2);
    expect(result.current[0].data?.[0].id).toEqual("123");
    expect(result.current[0].data?.[1].id).toEqual("124");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can execute a bulk update with fully qualified params", async () => {
    const { result } = renderHook(() => useBulkAction(bulkExampleApi.widget.bulkUpdate), { wrapper: MockClientWrapper(bulkExampleApi) });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]([
        { id: "123", widget: { name: "foo" } },
        { id: "124", widget: { name: "bar" } },
      ]);
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);
    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toEqual({
      inputs: [
        {
          id: "123",
          widget: {
            name: "foo",
          },
        },
        {
          id: "124",
          widget: {
            name: "bar",
          },
        },
      ],
    });

    mockUrqlClient.executeMutation.pushResponse("bulkUpdateWidgets", {
      data: {
        bulkUpdateWidgets: {
          success: true,
          widgets: [
            { id: "123", name: "foo" },
            { id: "124", name: "bar" },
          ],
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      const promiseResult = await mutationPromise;
      expect(promiseResult.data!.length).toEqual(2);
      expect(promiseResult.data![0].id).toEqual("123");
      expect(promiseResult.data![1].id).toEqual("124");
    });

    expect(result.current[0].data?.length).toEqual(2);
    expect(result.current[0].data?.[0].id).toEqual("123");
    expect(result.current[0].data?.[1].id).toEqual("124");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns an error when the mutation is run and the server responds with success: false", async () => {
    const { result } = renderHook(
      () => {
        return useBulkAction(bulkExampleApi.widget.bulkFlipDown);
      },
      { wrapper: MockClientWrapper(bulkExampleApi) }
    );

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ ids: ["123", "124"] });
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    mockUrqlClient.executeMutation.pushResponse("bulkFlipDownWidgets", {
      data: {
        bulkFlipDownWidgets: {
          success: false,
          errors: [
            {
              message: "Something went wrong in the backend",
              code: "GGT_UNKNOWN",
            },
          ],
          widgets: null,
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
    expect(result.current[0].data).toBeFalsy();
  });

  test("returns the same data on successive rerenders after a mutation", async () => {
    const { result, rerender } = renderHook(() => useBulkAction(bulkExampleApi.widget.bulkFlipDown), {
      wrapper: MockClientWrapper(bulkExampleApi),
    });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]({ ids: ["123", "124"] });
    });

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);

    mockUrqlClient.executeMutation.pushResponse("bulkFlipDownWidgets", {
      data: {
        bulkFlipDownWidgets: {
          success: true,
          widgets: [
            {
              id: "123",
            },
            { id: "124" },
          ],
        },
      },
      stale: false,
      hasNext: false,
    });

    await act(async () => {
      await mutationPromise;
    });

    const beforeObject = result.current[0];

    // rerender
    rerender();

    expect(result.current[0]).toBe(beforeObject);
  });
});
