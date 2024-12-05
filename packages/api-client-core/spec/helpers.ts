import { parse } from "@0no-co/graphql.web";
import { defaults } from "lodash-es";
import pRetry from "p-retry";

export const withWindowMissingSupport = (key: keyof typeof window, run: () => void) => {
  const old = window[key];
  try {
    delete window[key];
    return run();
  } finally {
    (window as any)[key] = old;
  }
};

export const base64 = (str: string) => Buffer.from(str).toString("base64");

export function expectValidGraphQLQuery(query: string) {
  parse(query);
}

export function delayPromise<T>(wait: number, value?: T, error?: Error): Promise<T | undefined> {
  return new Promise<T | undefined>((resolve, reject) => {
    setTimeout(() => {
      if (error === null || error === undefined) {
        resolve(value);
      } else {
        reject(error);
      }
    }, wait);
  });
}

export const asyncIterableToIterator = <T>(iterator: AsyncIterable<T>) => {
  return iterator[Symbol.asyncIterator]();
};

/**
 * Wait for a given expectation to pass
 * Useful as a more robust alternative to `sleep` in tests, where we want to wait for something to happen, but we don't know how long it will take
 */
export const waitForExpectationToPass = async (run: () => void | Promise<void>, options?: pRetry.Options) => {
  await pRetry(
    run,
    defaults(options, {
      attempts: 10,
      maxTimeout: 1000,
    })
  );
};

/**
 * Debugging type that will display a fully resolved type
 * in Intellisense instead of just the type aliases
 *
 * @type {T} The type to expand out
 */
export type ExpandRecursively<T> = T extends (...args: infer A) => infer R
  ? (...args: ExpandRecursively<A>) => ExpandRecursively<R>
  : T extends Array<infer E>
  ? ExpandRecursively<E>[]
  : T extends object
  ? T extends infer O
    ? { [K in keyof O]: ExpandRecursively<O[K]> }
    : never
  : T;
