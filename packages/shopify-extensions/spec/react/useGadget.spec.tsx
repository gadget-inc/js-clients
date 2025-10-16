import { RelatedProductsExampleClient } from "@gadget-client/related-products-example";
import type { AnyClient } from "@gadgetinc/core";
import { jest } from "@jest/globals";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import type { IsExact } from "conditional-type-checks";
import { assert } from "conditional-type-checks";
import type { ReactNode } from "react";
import React from "react";
import { Provider, useGadget, type SessionToken } from "../../src/react/index.js";

const _TestUseGadgetReturnsAppropriateTypes = () => {
  const { ready, api } = useGadget();

  assert<IsExact<typeof ready, boolean>>(true);
  assert<IsExact<typeof api, AnyClient>>(true);
};

const _TestUseGadgetReturnsAppropriateTypesWithSpecificClient = () => {
  const { ready, api } = useGadget<RelatedProductsExampleClient>();

  assert<IsExact<typeof ready, boolean>>(true);
  assert<IsExact<typeof api, RelatedProductsExampleClient>>(true);
};

describe("useGadget", () => {
  let api: RelatedProductsExampleClient;
  let sessionToken: SessionToken;
  let mockFetch: jest.Mock<typeof globalThis.fetch>;

  beforeEach(() => {
    mockFetch = jest.fn();
    api = new RelatedProductsExampleClient({
      fetchImplementation: mockFetch,
    });

    sessionToken = {
      get: () => Promise.resolve("test-session-token"),
    };
  });

  test("should initially not be ready until the Provider has mounted", () => {
    const all: { ready: boolean }[] = [];

    const { result } = renderHook(
      () => {
        const value = useGadget<RelatedProductsExampleClient>();
        all.push({ ready: value.ready });
        return value;
      },
      {
        wrapper: (props: { children: ReactNode }) => (
          <Provider api={api} sessionToken={sessionToken}>
            {props.children}
          </Provider>
        ),
      }
    );

    expect(all.length).toBe(2);
    expect(all[0].ready).toBe(false);
    expect(all[1].ready).toBe(true);

    expect(result.current.api.connection.authenticationMode).toEqual("custom");
  });
});
