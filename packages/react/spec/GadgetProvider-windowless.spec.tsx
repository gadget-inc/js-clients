/**
 * @jest-environment node
 */
import type { AnyClient } from "@gadgetinc/core";
import { createMockUrqlClient } from "@gadgetinc/core/testing";
import "@testing-library/jest-dom";
import type { ReactNode } from "react";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "../src/GadgetProvider.js";

describe("GadgetProvider in windowless environment", () => {
  let mockApiClient: AnyClient;
  beforeEach(() => {
    mockApiClient = {
      connection: {
        endpoint: "https://whatever.gadget.app/endpoint",
        currentClient: createMockUrqlClient(),
      },
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

  it("should render a gadget app type without throwing an error", () => {
    const result = render(
      <Provider api={mockApiClient}>
        <span>hello world</span>
      </Provider>
    );

    expect(result).toMatchInlineSnapshot(`"<span>hello world</span>"`);
  });
});
