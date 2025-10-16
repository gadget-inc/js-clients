// eslint-disable @typescript-eslint/ban-ts-comment
import type { AnyClient } from "@gadgetinc/core";
import { renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import React from "react";
import { Provider } from "../src/GadgetProvider.js";
import { useApi, useConnection } from "../src/hooks.js";
import { createMockUrqlClient } from "./testWrappers.js";

describe("GadgetProvider", () => {
  let mockApiClient: AnyClient;
  beforeEach(() => {
    mockApiClient = {
      connection: {
        endpoint: "https://whatever.gadget.app/endpoint",
        currentClient: createMockUrqlClient(),
      },
    } as any;
  });

  test("internal components can access the urql client when wrapped in the provider which is passed an api client", () => {
    const { result } = renderHook(() => useConnection(), {
      wrapper: (props: { children: ReactNode }) => {
        return <Provider api={mockApiClient}>{props.children}</Provider>;
      },
    });

    expect(result).toBeTruthy();
  });

  test("internal components can access the api client when wrapped in the provider which is passed an api client", () => {
    const { result } = renderHook(() => useApi(), {
      wrapper: (props: { children: ReactNode }) => {
        return <Provider api={mockApiClient}>{props.children}</Provider>;
      },
    });

    expect(result.current).toBe(mockApiClient);
  });

  test("the provider errors when not passed anything", () => {
    expect(() =>
      renderHook(() => useConnection(), {
        wrapper: (props: { children: ReactNode }) => {
          // @ts-expect-error checking error case
          return <Provider>{props.children}</Provider>;
        },
      })
    ).toThrowErrorMatchingInlineSnapshot(
      `"No Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!"`
    );
  });

  test("the provider errors when passed an invalid api client", () => {
    expect(() =>
      renderHook(() => useConnection(), {
        wrapper: (props: { children: ReactNode }) => {
          // @ts-expect-error checking error case
          return <Provider api={class {}}>{props.children}</Provider>;
        },
      })
    ).toThrowErrorMatchingInlineSnapshot(
      `"Invalid Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!"`
    );
  });
});
