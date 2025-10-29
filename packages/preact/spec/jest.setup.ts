import { setAct } from "@gadgetinc/core/testing";
import { jest } from "@jest/globals";
import "@testing-library/jest-dom";
import crossFetch from "cross-fetch";
import { act } from "preact/test-utils";

setAct(act as any);

jest.setTimeout(process.env.CI == "vscode-jest-tests" ? 20 * 60 * 1000 : 5 * 1000);

// nock's fetch support is forthcoming and still broken, so we mock the global fetch to use cross-fetch, which nock supports mocking just fine
global.fetch = crossFetch;

// Shopify's app provider uses this api which jest does not expose in its jsdom environment
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      addListener: function () {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      removeListener: function () {},
    };
  };

export {};
