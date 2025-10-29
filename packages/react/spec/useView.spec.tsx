import { act, renderHook } from "@testing-library/react";
import type { AnyVariables } from "urql";
import { useView } from "../src/hooks.js";
import { testApi } from "./apis.js";
import { MockClientWrapper, createMockUrqlClient, mockUrqlClient } from "./testWrappers.js";

describe("useView", () => {
  test("can fetch a view with no variables", async () => {
    let query: string | undefined;
    const client = createMockUrqlClient({
      queryAssertions: (request) => {
        query = "kind" in request.query ? request.query.loc?.source.body : "";
      },
    });

    const { result } = renderHook(() => useView(testApi.totalInStock), { wrapper: MockClientWrapper(testApi, client) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(client.executeQuery).toHaveBeenCalledTimes(1);
    expect(client.executeQuery.mock.calls[0][1].additionalTypenames).toEqual(["Widget"]);

    expect(query).toMatchInlineSnapshot(`
      "query totalInStock {
        totalInStock
      }"
    `);

    await client.executeQuery.pushResponse("totalInStock", {
      data: {
        totalInStock: 100,
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data!).toEqual(100);
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can fetch a view with variables", async () => {
    let query: string | undefined;
    const client = createMockUrqlClient({
      queryAssertions: (request) => {
        query = "kind" in request.query ? request.query.loc?.source.body : "";
      },
    });

    const { result } = renderHook(() => useView(testApi.echo, { value: "test" }), { wrapper: MockClientWrapper(testApi, client) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(client.executeQuery).toHaveBeenCalledTimes(1);

    expect(query).toMatchInlineSnapshot(`
      "query echo($value: String) {
        echo(value: $value)
      }"
    `);

    await client.executeQuery.pushResponse("echo", {
      data: {
        echo: {
          value: "test",
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data!.value).toEqual("test");
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can find namespaced view", async () => {
    let query: string | undefined;
    const client = createMockUrqlClient({
      queryAssertions: (request) => {
        query = "kind" in request.query ? request.query.loc?.source.body : "";
      },
    });

    const { result } = renderHook(() => useView(testApi.game.echo, { value: 123 }), { wrapper: MockClientWrapper(testApi, client) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(client.executeQuery).toHaveBeenCalledTimes(1);

    expect(query).toMatchInlineSnapshot(`
      "query echo($value: Int) {
        game {
          echo(value: $value)
        }
      }"
    `);

    await client.executeQuery.pushResponse("echo", {
      data: {
        game: {
          echo: {
            value: 123,
          },
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data!.value).toEqual(123);
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can find namespaced view on a model", async () => {
    let query: string | undefined;
    const client = createMockUrqlClient({
      queryAssertions: (request) => {
        query = "kind" in request.query ? request.query.loc?.source.body : "";
      },
    });

    const { result } = renderHook(() => useView(testApi.widget.stats, { inStockOnly: false }), {
      wrapper: MockClientWrapper(testApi, client),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(client.executeQuery).toHaveBeenCalledTimes(1);

    expect(query).toMatchInlineSnapshot(`
      "query widgetStats($inStockOnly: Boolean) {
        widgetStats(inStockOnly: $inStockOnly)
      }"
    `);

    await client.executeQuery.pushResponse("widgetStats", {
      data: {
        widgetStats: {
          count: 123,
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data!.count).toEqual(123);
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can fetch an inline view with no variables", async () => {
    let query: string | undefined;
    let variables: AnyVariables | undefined;

    const client = createMockUrqlClient({
      queryAssertions: (request) => {
        query = "kind" in request.query ? request.query.loc?.source.body : "";
        variables = request.variables;
      },
    });

    const { result } = renderHook(() => useView("{ count(todos) }"), { wrapper: MockClientWrapper(testApi, client) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(client.executeQuery).toHaveBeenCalledTimes(1);

    expect(query).toMatchInlineSnapshot(`
      "query InlineView($query: String!, $variables: JSONObject) {
        gellyView(query: $query, variables: $variables)
      }"
    `);

    expect(variables).toEqual({
      query: "{ count(todos) }",
      variables: undefined,
    });

    await client.executeQuery.pushResponse("InlineView", {
      data: {
        gellyView: {
          count: 100,
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data).toEqual({ count: 100 });
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("can fetch an inline view with variables", async () => {
    let query: string | undefined;
    let variables: AnyVariables | undefined;

    const client = createMockUrqlClient({
      queryAssertions: (request) => {
        query = "kind" in request.query ? request.query.loc?.source.body : "";
        variables = request.variables;
      },
    });

    const { result } = renderHook(() => useView("($first: Int){ count(todos) }", { first: 10 }), {
      wrapper: MockClientWrapper(testApi, client),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(client.executeQuery).toHaveBeenCalledTimes(1);

    expect(query).toMatchInlineSnapshot(`
      "query InlineView($query: String!, $variables: JSONObject) {
        gellyView(query: $query, variables: $variables)
      }"
    `);

    expect(variables).toEqual({
      query: "($first: Int){ count(todos) }",
      variables: { first: 10 },
    });

    await client.executeQuery.pushResponse("InlineView", {
      data: {
        gellyView: {
          count: 100,
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(result.current[0].data).toEqual({ count: 100 });
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();
  });

  test("returns the same data object on rerender if nothing changes about the result", async () => {
    const { result, rerender } = renderHook(() => useView(testApi.echo, { value: "test" }), { wrapper: MockClientWrapper(testApi) });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(true);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toHaveBeenCalledTimes(1);

    await mockUrqlClient.executeQuery.pushResponse("echo", {
      data: {
        echo: {
          value: "test",
        },
      },
      stale: false,
      hasNext: false,
    });

    const beforeObject = result.current[0];

    rerender();

    expect(result.current[0]).toBe(beforeObject);
  });

  test("suspends when loading data", async () => {
    const { result, rerender } = renderHook(() => useView(testApi.echo, { value: "test" }, { suspense: true }), {
      wrapper: MockClientWrapper(testApi),
    });

    // first render never completes as the component suspends
    expect(result.current).toBeFalsy();

    await act(async () => {
      await mockUrqlClient.executeQuery.waitForSubject("echo");
      await mockUrqlClient.executeQuery.pushResponse("echo", {
        data: {
          echo: {
            value: "test",
          },
        },
        stale: false,
        hasNext: false,
      });
    });

    // rerender as react would do when the suspense promise resolves
    rerender();
    expect(result.current).toBeTruthy();
    expect(result.current[0].data!.value).toEqual("test");
    expect(result.current[0].error).toBeFalsy();

    const beforeObject = result.current[0];
    rerender();
    expect(result.current[0]).toBe(beforeObject);
  });

  test("doesn't issue a request if paused", async () => {
    const { result } = renderHook(() => useView(testApi.echo, { value: "test" }, { pause: true }), {
      wrapper: MockClientWrapper(testApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toHaveBeenCalledTimes(0);
  });

  test("doesn't issue a request if an inline view is paused", async () => {
    const { result } = renderHook(() => useView("{ count(todos) }", {}, { pause: true }), {
      wrapper: MockClientWrapper(testApi),
    });

    expect(result.current[0].data).toBeFalsy();
    expect(result.current[0].fetching).toBe(false);
    expect(result.current[0].error).toBeFalsy();

    expect(mockUrqlClient.executeQuery).toHaveBeenCalledTimes(0);
  });
});
