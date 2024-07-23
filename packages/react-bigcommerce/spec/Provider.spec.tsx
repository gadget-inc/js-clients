import type { AnyClient } from "@gadgetinc/api-client-core";
import { GadgetConnection } from "@gadgetinc/api-client-core";
import { jest } from "@jest/globals";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import type { SpiedFunction } from "jest-mock";
import React from "react";
import { mockUrqlClient } from "../../api-client-core/spec/mockUrqlClient.js";
import { Provider } from "../src/Provider.js";

describe("GadgetProvider", () => {
  let mockApiClient: AnyClient;
  const mockBigCommerceInit = jest.fn();
  let setAuthenticationModeSpy: SpiedFunction<typeof mockApiClient.connection.setAuthenticationMode>;
  const { location } = window;

  beforeAll(() => {
    // @ts-expect-error mock
    delete window.location;

    // @ts-expect-error mock
    window.location = {
      search: "",
    };

    (window as any).Bigcommerce = {
      init: mockBigCommerceInit,
    };
  });

  beforeEach(() => {
    mockApiClient = {
      connection: new GadgetConnection({
        endpoint: "https://test-app.gadget.app/endpoint",
      }),
    } as any;

    jest.spyOn(mockApiClient.connection, "currentClient" as any, "get").mockReturnValue(mockUrqlClient);
    setAuthenticationModeSpy = jest.spyOn(mockApiClient.connection, "setAuthenticationMode");
  });

  afterEach(() => {
    mockBigCommerceInit.mockReset();
  });

  afterAll(() => {
    window.location = location;
  });

  test("when there is no signed_payload parameter", () => {
    const { container } = render(
      <Provider api={mockApiClient}>
        <span>hello world</span>
      </Provider>
    );

    expect(setAuthenticationModeSpy).not.toHaveBeenCalled();
    expect(mockUrqlClient.executeQuery.mock.calls.length).toBe(1);
    expect(mockUrqlClient.executeQuery.mock.calls[0][0].query.loc.source.body).toMatchInlineSnapshot(`
      "query BigCommerceSession {
        currentSession {
          bigcommerceUserId
          bigcommerceStore {
            storeHash
          }
          roles {
            key
          }
        }
      }"
    `);
    expect(mockUrqlClient.executeQuery.mock.calls[0][0].variables).toMatchInlineSnapshot(`{}`);

    mockUrqlClient.executeQuery.pushResponse("BigCommerceSession", {
      data: {
        currentSession: {
          bigcommerceUserId: null,
          bigcommerceStore: null,
          roles: [
            {
              key: "unauthenticated",
            },
          ],
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><span>hello world</span></div>"`);
    expect(mockBigCommerceInit).not.toHaveBeenCalled();
  });

  test("when there is a signed_payload parameter", () => {
    window.location.search = "signed_payload=test-session-token";

    const { container } = render(
      <Provider api={mockApiClient}>
        <span>hello world</span>
      </Provider>
    );

    expect(setAuthenticationModeSpy).toHaveBeenCalledWith({
      custom: {
        processFetch: expect.any(Function),
        processTransactionConnectionParams: expect.any(Function),
      },
    });
    expect(mockUrqlClient.executeQuery.mock.calls.length).toBe(1);
    expect(mockUrqlClient.executeQuery.mock.calls[0][0].query.loc.source.body).toMatchInlineSnapshot(`
      "query BigCommerceSession {
        currentSession {
          bigcommerceUserId
          bigcommerceStore {
            storeHash
          }
          roles {
            key
          }
        }
      }"
    `);
    expect(mockUrqlClient.executeQuery.mock.calls[0][0].variables).toMatchInlineSnapshot(`{}`);

    mockUrqlClient.executeQuery.pushResponse("BigCommerceSession", {
      data: {
        currentSession: {
          bigcommerceUserId: "123",
          bigcommerceStore: {
            storeHash: "xyz789",
          },
          roles: [
            {
              key: "Role-BigCommerce-App",
            },
          ],
        },
      },
      stale: false,
      hasNext: false,
    });

    expect(container.outerHTML).toMatchInlineSnapshot(`"<div><span>hello world</span></div>"`);
    expect(mockBigCommerceInit).toHaveBeenCalled();
  });
});
