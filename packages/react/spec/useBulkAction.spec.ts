import type { GadgetRecord } from "@gadgetinc/api-client-core";
import { renderHook } from "@testing-library/react";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import { act } from "react-dom/test-utils";
import { useBulkAction } from "../src/index.js";
import type { ErrorWrapper } from "../src/utils.js";
import { bulkExampleApi } from "./apis.js";
import { MockClientWrapper, mockUrqlClient } from "./testWrappers.js";

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

  test("returns no data, not fetching, and no error when the component is first mounted", () => {
    const { result } = renderHook(() => useBulkAction(bulkExampleApi.widget.bulkFlipDown), { wrapper: MockClientWrapper(bulkExampleApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns no data, fetching=true, and no error when the mutation is run, and then the successful data if the mutation succeeds for an ids only mutation", async () => {
    const { result } = renderHook(() => useBulkAction(bulkExampleApi.widget.bulkFlipDown), { wrapper: MockClientWrapper(bulkExampleApi) });

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

  test("can execute a bulk create with params", async () => {
    const mockBulkCreate = {
      type: "action",
      operationName: "bulkCreateWidgets",
      namespace: null,
      modelApiIdentifier: "widget",
      modelSelectionField: "widgets",
      isBulk: true,
      defaultSelection: {
        id: true,
        name: true,
      },
      selectionType: {},
      optionsType: {},
      schemaType: null,
      variablesType: void 0,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateWidgetsInput!]",
        },
      },
      hasReturnType: false,
    } as any;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore waiting for bulk params to be released gadget side
    const { result } = renderHook(() => useBulkAction<any, any, any, any>(mockBulkCreate), { wrapper: MockClientWrapper(bulkExampleApi) });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]([{ name: "foo" }, { name: "bar" }]);
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);
    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
      {
        "inputs": [
          {
            "name": "foo",
          },
          {
            "name": "bar",
          },
        ],
      }
    `);

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

    expect(result.current[0].data!.length).toEqual(2);
    expect(result.current[0].data![0].id).toEqual("123");
    expect(result.current[0].data![1].id).toEqual("124");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can execute a bulk create with fully qualified params", async () => {
    const mockBulkCreate = {
      type: "action",
      operationName: "bulkCreateWidgets",
      namespace: null,
      modelApiIdentifier: "widget",
      modelSelectionField: "widgets",
      isBulk: true,
      defaultSelection: {
        id: true,
        name: true,
      },
      selectionType: {},
      optionsType: {},
      schemaType: null,
      variablesType: void 0,
      variables: {
        inputs: {
          required: true,
          type: "[BulkCreateWidgetsInput!]",
        },
      },
      hasReturnType: false,
    } as any;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore waiting for bulk params to be released gadget side
    const { result } = renderHook(() => useBulkAction<any, any, any, any>(mockBulkCreate), { wrapper: MockClientWrapper(bulkExampleApi) });

    let mutationPromise: any;
    act(() => {
      mutationPromise = result.current[1]([{ widget: { name: "foo" } }, { widget: { name: "bar" } }]);
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeMutation).toBeCalledTimes(1);
    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
      {
        "inputs": [
          {
            "widget": {
              "name": "foo",
            },
          },
          {
            "widget": {
              "name": "bar",
            },
          },
        ],
      }
    `);

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

    expect(result.current[0].data!.length).toEqual(2);
    expect(result.current[0].data![0].id).toEqual("123");
    expect(result.current[0].data![1].id).toEqual("124");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can execute a bulk update with params", async () => {
    const mockBulkUpdate = {
      type: "action",
      operationName: "bulkUpdateWidgets",
      namespace: null,
      modelApiIdentifier: "widget",
      modelSelectionField: "widgets",
      isBulk: true,
      defaultSelection: {
        id: true,
        name: true,
      },
      selectionType: {},
      optionsType: {},
      schemaType: null,
      variablesType: void 0,
      variables: {
        inputs: {
          required: true,
          type: "[BulkUpdateWidgetsInput!]",
        },
      },
      hasReturnType: false,
    } as any;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore waiting for bulk params to be released gadget side
    const { result } = renderHook(() => useBulkAction<any, any, any, any>(mockBulkUpdate), { wrapper: MockClientWrapper(bulkExampleApi) });

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
    expect(mockUrqlClient.executeMutation.mock.calls[0][0].variables).toMatchInlineSnapshot(`
      {
        "inputs": [
          {
            "id": "123",
            "name": "foo",
          },
          {
            "id": "124",
            "name": "bar",
          },
        ],
      }
    `);

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

    expect(result.current[0].data!.length).toEqual(2);
    expect(result.current[0].data![0].id).toEqual("123");
    expect(result.current[0].data![1].id).toEqual("124");
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
