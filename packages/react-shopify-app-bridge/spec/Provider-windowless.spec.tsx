/**
 * @jest-environment node
 */
import type { AnyClient } from "@gadgetinc/api-client-core";
import { GadgetConnection } from "@gadgetinc/api-client-core";
import "@testing-library/jest-dom";
import type { ReactNode } from "react";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { AppType, Provider } from "../src/Provider.js";

describe("GadgetProvider in windowless environment", () => {
  let mockApiClient: AnyClient;
  const mockApiKey = "some-api-key";

  beforeEach(() => {
    mockApiClient = {
      connection: new GadgetConnection({
        endpoint: "https://test-app.gadget.app/endpoint",
      }),
    } as any;
  });

  const render = (element: ReactNode) => {
    return ReactDOMServer.renderToString(element);
  };

  // To make sure the test setup is running in a windowless environment
  it("should not include window object", () => {
    const result = render(<div>{typeof window}</div>);

    expect(result).toMatchInlineSnapshot(`"<div>undefined</div>"`);
  });

  it("should render a standalone app type without throwing an error", () => {
    const result = render(
      <Provider
        api={mockApiClient}
        shopifyApiKey={mockApiKey}
        type={AppType.Standalone}
        location={{
          pathname: "/",
          search: "",
        }}
      >
        <span>hello world</span>
      </Provider>
    );

    expect(result).toMatchInlineSnapshot(`"<span>hello world</span>"`);
  });

  it("should render an embedded app type without throwing an error", () => {
    const result = render(
      <Provider
        api={mockApiClient}
        shopifyApiKey={mockApiKey}
        type={AppType.Embedded}
        location={{
          pathname: "/",
          search: "",
        }}
      >
        <span>hello world</span>
      </Provider>
    );

    expect(result).toMatchInlineSnapshot(`"<span>hello world</span>"`);
  });
});
