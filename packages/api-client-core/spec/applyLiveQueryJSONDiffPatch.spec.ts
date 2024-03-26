import type { LiveExecutionResult } from "@n1ru4l/graphql-live-query";
import type { ExecutionResult } from "graphql";
import { applyLiveQueryJSONDiffPatch } from "../src/graphql-live-query-utils/index.js";

test("pass through non live query patch result", async () => {
  async function* source() {
    yield {
      data: {
        foo: {
          bar: "kek",
        },
      },
    } as ExecutionResult;
    yield {
      data: {
        foo: {
          bar: "speck",
        },
      },
    } as ExecutionResult;
  }

  const stream = applyLiveQueryJSONDiffPatch(source());
  let value = await stream.next();
  expect(value).toEqual({
    done: false,
    value: {
      data: {
        foo: {
          bar: "kek",
        },
      },
    },
  });
  value = await stream.next();
  expect(value).toEqual({
    done: false,
    value: {
      data: {
        foo: {
          bar: "speck",
        },
      },
    },
  });
  value = await stream.next();
  expect(value).toEqual({
    done: true,
    value: undefined,
  });
});

it("applies patch results", async () => {
  async function* source() {
    yield {
      data: {
        foo: {
          bar: "kek",
        },
      },
      revision: 1,
    } as LiveExecutionResult;
    yield {
      patch: {
        foo: {
          bar: ["kek", "speck"],
        },
      },
      revision: 2,
    } as LiveExecutionResult;
  }

  const stream = applyLiveQueryJSONDiffPatch(source());
  let value = await stream.next();
  expect(value).toEqual({
    done: false,
    value: {
      data: {
        foo: {
          bar: "kek",
        },
      },
    },
  });
  value = await stream.next();
  expect(value).toEqual({
    done: false,
    value: {
      data: {
        foo: {
          bar: "speck",
        },
      },
    },
  });
  value = await stream.next();
  expect(value).toEqual({
    done: true,
    value: undefined,
  });
});

it("source.return is called for cleanup", async () => {
  let isCalled = false;
  let counter = 0;
  const source: AsyncGenerator<Record<string, unknown>> = {
    [Symbol.asyncIterator]() {
      return source;
    },
    return() {
      isCalled = true;
      return Promise.resolve({ done: true, value: false });
    },
    async next() {
      counter++;
      if (counter > 1) {
        return await Promise.resolve({ done: true, value: undefined });
      }
      return await Promise.resolve({ done: false, value: {} });
    },
    async throw() {
      throw new Error("Noop.");
    },
  };

  const stream = applyLiveQueryJSONDiffPatch(source);

  await stream.next();
  await stream.return();

  expect(isCalled).toEqual(true);
});

it("source.return is called for cleanup if error occurred in createApplyLiveQueryPatch", async () => {
  let isCalled = false;
  let counter = 1;
  const source: AsyncGenerator<Record<string, unknown>> = {
    [Symbol.asyncIterator]() {
      return source;
    },
    next: async () => {
      // thow error when counter will be 4
      return { done: false, value: { revision: counter === 4 ? 3 : 1, data: counter++ } };
    },
    return: async () => {
      isCalled = true;
      return { done: true, value: null };
    },
    async throw() {
      throw new Error("Noop.");
    },
  };
  const asyncIterableIterator = applyLiveQueryJSONDiffPatch(source);
  try {
    for await (const _i of asyncIterableIterator) {
      /* empty */
    }
  } catch (error) {
    /* empty */
  }
  expect(isCalled).toEqual(true);
});
