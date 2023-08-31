import { parse } from "graphql";

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

export interface ExpectDurationMsOptions {
  /**
   * The +/- margin of error in milliseconds (doubled in CI to account for slower machines)
   *
   * @default `100`
   */
  marginOfErrorMS: number;
}

export async function expectDurationMs(expectedMS: number, fn: () => unknown): Promise<void>;
export async function expectDurationMs(expectedMS: number, options: ExpectDurationMsOptions, fn: () => unknown): Promise<void>;
export async function expectDurationMs(
  expectedMS: number,
  optionsOrFn: ExpectDurationMsOptions | (() => unknown),
  maybeFn?: () => unknown
): Promise<void> {
  let fn: () => unknown;
  let options: ExpectDurationMsOptions;

  if (maybeFn) {
    fn = maybeFn;
    options = optionsOrFn as ExpectDurationMsOptions;
  } else {
    fn = optionsOrFn as () => unknown;
    options = { marginOfErrorMS: 100 };
  }

  if (process.env.CI) {
    options.marginOfErrorMS *= 2;
  }

  const start = Date.now();
  await fn();
  const actualMS = Date.now() - start;

  try {
    expect(actualMS).toBeGreaterThanOrEqual(expectedMS - options.marginOfErrorMS);
    expect(actualMS).toBeLessThanOrEqual(expectedMS + options.marginOfErrorMS);
  } catch (error) {
    Error.captureStackTrace(error as Error, expectDurationMs);
    console.error(`Expected duration to be ${expectedMS}ms +/- ${options.marginOfErrorMS}ms but was ${actualMS}ms`);
    throw error;
  }
}
